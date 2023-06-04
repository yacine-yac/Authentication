module.exports=(req,res)=>{
  require('passport').authenticate('local',{failureRedirect:'/login'})
}