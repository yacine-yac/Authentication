/**
 * handler server calls
 * @param {{post:string,url:strring}} param0 request parameters 
 * @param {FormData} formdata Formular data
 * @param {()=>void} success Callback for success response
 * @param {(respone)=>void} failure Callback for failure response
 */
function fetching({method,url},formdata,success,failure){
    const xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.onreadystatechange=function(){
        if(this.readyState==4){ 
            this.status== 200 ? success() : failure(JSON.parse(this.response));
        }
    }
    xhr.send(formdata);
}
export default fetching;