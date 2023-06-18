import route, { setStateHistory } from "./domRouter/router.js";
window.addEventListener('statechange',function(){ 
      route(this.location.pathname,document.getElementById('demo'));
});
window.onload=function(){
      this.location.pathname=='/register'
                  ? route("/register",document.getElementById('demo'))
                  : setStateHistory(this.location.pathname);
}
window.onpopstate=function(e){
      document.getElementById('demo').innerHTML=history.state.template;
}