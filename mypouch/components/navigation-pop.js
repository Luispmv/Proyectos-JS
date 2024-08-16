class popMenu extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    static get observedAttributes(){
        return ["first", "second", "third", "four", "fifth", "sixth"]
    }
    attributeChangedCallback(atributo,oldVal,newVal){
        if(oldVal !== newVal){
            this[atributo] = newVal
        }
    
    }
    pop_estructura(){
        const pop_menu = document.createElement("section")
        pop_menu.className = "pop-navigation"
        pop_menu.innerHTML = `
        <button class="close"><img src="./images/close.svg" alt=""></button>
        <button>${this.first}</button>
        <button>${this.second}</button>
        <button>${this.third}</button>
        <button>${this.four}</button>
        <button>${this.fifth}</button>
        <button>${this.sixth}</button>
        ${this.pop_estilos()}
        `
        return pop_menu
    }
    pop_estilos(){
        return `
        <style>
        .pop-navigation{
            z-index: 1;
            background: rgb(255, 255, 255);
            position: absolute;
            top: 0;
            display: grid;
            right: 0;
            width: 130px;
            place-items: flex-end;
            padding: 1rem;
            filter: drop-shadow(15px -23px 11px black);
        }
        button{
                background: none;
                border: none;
                padding: 10px;
                width: 90px;
                font-weight: 600;
        }
        .close{
            display: flex;
            justify-content: flex-end;
        }
        @media(min-width:1024px){
            .pop-navigation{
                display: none;
            }
        }
        </style>
        `
    }
    connectedCallback(){
        this.shadowRoot.appendChild(this.pop_estructura())
        const cerrar = this.shadowRoot.querySelector(".close")
        cerrar.addEventListener("click", ()=>{
            this.style.display = "none"
        })
    }
}

customElements.define("pop-menu", popMenu)