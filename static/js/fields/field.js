/**
 * Handle input style in error cases
 */
class Field{
    /**
     * @property {HTMLElement} element 
     * @param {string} field define input name
     */
    constructor(field){
        this.element=document.querySelector(`input[name=${field}]`);
    }
    setErrorStyle(){
        this.element.classList.add("error-element");
    }
    removeErrorStyle(){
        this.element.classList.remove('error-element');
    }
}
export default Field;