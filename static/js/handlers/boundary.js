


/**
 * Draw error message template
 */
export class Boundary{
    static object=null;
    /**
     * 
     * @property {{message:string,status:boolean} | null } message error state & message object
     * @property {HTMLElement | null} element node parent 
     */
    constructor(){
        if(Boundary.object!=null){ return;}
            this.message=null;
            this.element=null;
    }
    /**
     * 
     * @param {{message:string,status:boolean} | null } message error state & message object
     */
    setMessage(message){
        this.message=message;
    }
    /**
     * 
     * @param {HTMLElement | null} element node parent 
     */
    setElement(element){
            this.element=element;
    }
    /**
     * draw pattern in node element
     */
    draw(){
            const template=`<div id="bndr">
                        <h2>${this.message.message}</h2>
                </div>`;
            document.querySelector('body').insertAdjacentHTML('afterend',template);
            this.setElement(document.getElementById('bndr'));
    }
    /**
     * remove pattern and init object state
     */
    removeboundary(){
            this.element.remove();
            this.setMessage(null);
            this.setElement(null);
    }
    /**
     * check if boundary is intiated
     * @returns {Boundary} boundary object
     */
    static init(){ 
            const obj= Boundary.object ?? new Boundary() ;
            return obj;
    }
}