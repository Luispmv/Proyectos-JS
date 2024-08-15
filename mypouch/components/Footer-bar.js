class footerbar extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    static get observedAttributes(){
        return ["year","company"]
    }
    attributeChangedCallback(atributo,oldVal,newVal){
        if(oldVal !== newVal){
            this[atributo] = newVal
        }
    
    }
    estructura(){
        const template = document.createElement("template")
        template.innerHTML = `
        ${this.estilos()}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <footer>
            <span>
                &copy;
                ${this.year}${this.company}
            </span>
            <aside>
                <ul>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-github"></i></li>
                </ul>
            </aside>
        </footer>
        `
        return template
    }
    estilos(){
        return `
        <style>
            footer{
                display: flex;
                justify-content: space-between;
                font-family: sans-serif;
                padding: 1rem;
                color: #999A97;
            }
            footer span{
                display: flex;
                align-items: center;
            }
            aside ul{
                display: flex;
                list-style: none;
                gap: 15px;
                padding: 1rem;
            }
            i{
                font-size: 20px;
            }
        </style>
        `
    }
    connectedCallback(){
        this.shadowRoot.appendChild(this.estructura().content.cloneNode(true))
    }
}

customElements.define("footer-bar", footerbar)