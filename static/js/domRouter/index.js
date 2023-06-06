const linkButton=document.querySelector('a[active-mode="true"]');
linkButton.addEventListener('click',function(e){
    e.preventDefault();
    if(this.getAttribute("active-mode")=="true"){
         window.history.pushState(undefined,undefined,this.getAttribute('href'))
         window.dispatchEvent(new Event('statechange'))
    }
});
