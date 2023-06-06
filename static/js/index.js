import route from "./domRouter/router.js";
window.addEventListener('statechange',function(){
      route(this.location.pathname,document.getElementById('demo'));
});