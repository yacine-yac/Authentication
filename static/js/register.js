import fetching from "./handlers/ajax.js";
import { errorBoundary, removeboundary } from "./handlers/boundary.js";
import location from "./handlers/location.js";
const button=document.getElementById('rs-1');
button.addEventListener('click',function(e){
    e.preventDefault();
    const formdata=new FormData(document.querySelector('form'))
    fetching({method:'POST',url:'/signup'},formdata,location,(response)=>{
         errorBoundary(response);
         setTimeout(removeboundary,3500);
    });
});