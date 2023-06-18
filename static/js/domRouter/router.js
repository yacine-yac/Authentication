/**
 * @param {HTML} path fetch template
 * @param {HTMLElement} node where we put template
 */ 
import paths  from "../../config/paths.json" assert {type:"json"};
async function route(path,node){
      const fetching=await fetch(`tmpl${path}.ejs`);
      const template= await fetching.text();
      node.innerHTML="";
      node.insertAdjacentHTML("afterbegin",template);
      setCurrentStateHistory(path);
      script(path);
      Style(path);
}
/**
 * Charge script for template if exists
 * @param {string} path script path key
 */
function script(path){
      if(paths.scriptPath[path]){
            const script=document.createElement('script');
            script.setAttribute('src',paths.scriptPath[path]);
            script.setAttribute('type','module');
            document.body.append(script);
      }
}
function Style(path){
      if(paths.stylePath[path]){
            const linkstyle=document.createElement('link');
            linkstyle.rel="stylesheet";
            linkstyle.href=paths.stylePath[path];
            linkstyle.type="text/css";
            document.head.append(linkstyle);
      }
}

export function setStateHistory(path){
      const state={template:document.getElementById('demo').innerHTML};
      history.pushState(state,undefined,path);
}
function setCurrentStateHistory(path){
      history.replaceState({
            template:document.getElementById('demo').innerHTML
      },undefined,path);

}
export default route;