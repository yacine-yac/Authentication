const express=require('express') 
const app=express();

// parse incoming data
const multer=require("multer");
app.use(express.json());
app.use(express.urlencoded());
app.use(multer().none());

const flash=require('connect-flash');
app.use(flash());

// session config
const session=require('express-session');
app.use(session({
    name:"holako",
    secret:'esgen',
    cookie: {expires:60*60*24*1000},
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
const {auth,direction}=require('./router/auth.js');
// static routes
app.use(express.static("./static"));
app.use(express.static("./templates"));
//routes
app.get('/',require('./router/home.js'));
app.get('/about',require('./router/about.js'));
app.get('/login',unauthRouteHandler,require('./router/login.js'))


app.post('/auth' ,auth,direction);
app.get('/logout',require('./router/logout.js'));
app.get('/register',unauthRouteHandler,require('./router/register.js'));

// post
const {signupHandler}=require('./router/signup')
app.post('/signup',signupHandler,(req,res)=>{ 
    if(req.signup.status){
        req.signup.login();
    }else{
        res.status(401).json({message:req.signup.errorMessage,status:req.signup.status})
    }
});
//================================================================

app.listen(3000);