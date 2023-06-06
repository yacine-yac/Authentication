export function errorBoundary({message}){
    const template=`<div id="bndr">
            <h2>${message}</h2>
    </div>`
    document.querySelector('body').insertAdjacentHTML('afterend',template);
}

export function removeboundary(){
    document.getElementById('bndr').remove();
}