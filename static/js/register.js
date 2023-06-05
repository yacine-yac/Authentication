const button=document.getElementById('rs-1');
button.addEventListener('click',function(e){
    const formdata=new FormData(document.querySelector('form'))
    const xhr=new XMLHttpRequest();
    xhr.open('POST','/signup');
    xhr.onreadystatechange=function(){
        if(this.readyState==4){
            console.log(this.response)
        }
    }
    xhr.send(formdata)
    e.preventDefault();
});