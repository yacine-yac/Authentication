export default function location(){
    const redirection=searchUrl("redirect");
    window.location.href= redirection ?? "/"; 
}
/**
 * Check if query params exists or no
 * @param {string} parameter value looking for 
 * @returns {null | string} 
 */
export function searchUrl(parameter){
    const query=window.location.search;
    const usp= new URLSearchParams(query);
    return usp.get(parameter) ;
}