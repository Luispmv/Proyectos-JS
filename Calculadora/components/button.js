class buttonCalc extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    static get observedAttributes(){
        return ["valuebtn"]
    }
    attributeChangedCallback(value, oldValue, newValue){
        if(oldValue !== newValue){
            this[value] = newValue
        }
    }
    estructura(){
        const template = document.createElement("template")
        template.innerHTML = `
        ${this.estilos()}
        <button>${this.valuebtn}</button>
        `
        return template
    }
    estilos(){
        return `
         <style>
            button{
                height: 50px;
                width: 50px;
                background: none;
                color: white;
                border: none;
                font-size:2rem;
            }
            button:hover{
                background-color:#3a3737;
            }
        </style>    
        `
    }
    renderContent(){
        this.shadowRoot.appendChild(this.estructura().content.cloneNode(true))
    }
    connectedCallback(){
        this.renderContent()
    }
}
customElements.define("button-calc", buttonCalc)