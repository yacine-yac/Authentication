const express=require('express') 
const app=express();

// envirment variables
const {parsed}=require('dotenv').config();
// parse incoming data
const multer=require("multer");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().none());

const flash=require('connect-flash');
app.use(flash());
// redis session store
const redis=require('redis');
const redisStore=require('connect-redis').default;
const session=require('express-session');

// const redisStore=nredisConnect(session);
const redisClient=redis.createClient({
    host:parsed.REDIS_HOST,
    port:parsed.REDIS_PORT
});
redisClient.connect().catch(err=>console.log(">>>>>",err))
redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
});
redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
});
// session config
app.use(session({
    name:"holako",
    secret:'esgen',
    cookie: {expires:60*60*24*1000},
    store:new redisStore({client:redisClient}),
    resave:false,
    saveUninitialized:false
}));

// use passport
const {passport}=require('./passport/index');
app.use(passport.initialize());
app.use(passport.session());


// template engine base ejs
app.set('view engine','ejs')

// Authorization middleware
const {authRouteHandler,unauthRouteHandler,authPath}=require('./router/authorization/index.js');
app.use(authPath,authRouteHandler);


// route handlers
const {auth,authController}=require('./router/auth.js');
// static routes
app.use(express.static("./static"));
app.use(express.static("./templates"));
//routes
app.get('/about',require('./router/about.js'));
app.get('/login',unauthRouteHandler,require('./router/login.js'))


app.post('/auth',authController,auth);
app.get('/logout',require('./router/logout.js'));
app.get(/(\/register|^\/$)/i,require('./router/home.js'));

// post
const {signupHandler,signupAction}=require('./router/signup')
app.post('/signup',signupHandler,signupAction);

// 404 error page
app.use(require('./router/404'))
//================================================================

app.listen(process.env.HOST_PORT);