import { searchUrl } from "../handlers/location.js";
const linkButton=document.querySelector('a[active-mode="true"]');
linkButton.addEventListener('click',function(e){
    e.preventDefault();
    if(this.getAttribute("active-mode")=="true"){
        const redirect=searchUrl("redirect");
         const url =redirect  
                    ? `${this.getAttribute('href')}?redirect=${redirect}` 
                    : this.getAttribute('href');
         window.history.pushState(undefined,undefined,url)
         window.dispatchEvent(new Event('statechange'))
    }
});
