/**
 * 
 * @param {HTML} path fetch template
 * @param {HTMLElement} node where we put template
 */
import paths  from "../../config/paths.json" assert {type:"json"};
async function route(path,node){
      const fetching=await fetch(`tmpl${path}.ejs`);
      const template= await fetching.text();
      node.innerHTML="";
      node.insertAdjacentHTML("afterbegin",template);
      script(path);
}
/**
 * Charge script for template if exists
 * @param {string} path script path key
 */
function script(path){console.log(path,paths.scriptPath)
      if(paths.scriptPath[path]){
            const script=document.createElement('script');
            script.setAttribute('src',paths.scriptPath[path]);
            script.setAttribute('type','module');
            document.body.append(script);
      }
}
export default route;