const  {User}=require('./user')
module.exports=(userId)=>{
   const user=new User();
   user.main.setId(userId);
  const fetch=user.fetchData(['name','birth','sex']);
  return fetch;
}