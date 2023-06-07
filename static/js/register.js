import fetching from "./handlers/ajax.js";
import { Boundary } from "./handlers/boundary.js";
import location from "./handlers/location.js";
const button=document.getElementById('rs-1');
const boundary=Boundary.init();
button.addEventListener('click',function(e){
    e.preventDefault();
    const formdata=new FormData(document.querySelector('form'))
    fetching({method:'POST',url:'/signup'},formdata,location,(response)=>{
        boundary.message ==null &&  (
                    boundary.setMessage(response),
                    boundary.draw(),
                    setTimeout(function(){boundary.removeboundary()},3500)
        );
    });
});