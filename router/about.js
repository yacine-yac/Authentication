module.exports=(req,res)=>{ console.log("session",req)
// console.log('>>>',req.session)
    res.render('../views/about.ejs')
}