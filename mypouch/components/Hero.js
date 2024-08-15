class Hero extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    static get observedAttributes(){
        return ["keyword1", "keyword2", "keyword3", "keyword4", "phrase", "description", "butoncontent", "butoncontent2"]
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
        <section>
            <ul>
                <li>${this.keyword1}</li>
                <li>${this.keyword2}</li>
                <li>${this.keyword3}</li>
                <li>${this.keyword4}</li>
            </ul>
            <h1>${this.phrase}</h1>
            <span>${this.description}</span>
            <div>
                <button>${this.butoncontent}</button>
                <button>${this.butoncontent2}</button>
            </div>
        </section>
        `
        return template
    }
    estilos(){
        return `
        <style>
            :host{
                display:grid;
                --font-color: white;
                --btnOnebg: none;
                --btnTwobg: none;
                --widthHero: 100%;
            }
            section{
                display: grid;
                gap: 20px;
                width:var(--widthHero);
                font-family: sans-serif;
                color: var(--font-color);
                place-self:center;
            }
            ul{
                display: flex;
                gap: 25px;
                place-self: center;
                font-size: 12px;
                padding: 0px;
            }
            h1{
                text-align: center;
                font-size: 2rem;
                margin: 0;
            }
            span{
                text-align: center;
                place-self: center;
                width: 95%;
            }
            div{
                place-self: center;
            }
            button{
                background: none;
                padding: 10px;
                width: 130px;
                font-weight: 600;
                border-radius: 35px;
                border: none;
                background-color: var(--btnOnebg);
            }
            button:last-child{
                background-color: var(--btnTwobg);
                color:var(--font-color)
            }
            @media(min-width:768px){
                section{
                    width:var(--widthHero);
                }
                h1{
                    font-size: 2.5rem;
                }
                span{
                    width: 90%;
                }
            }
            @media(min-width:1024px){
                section{
                    width:var(--widthHero);
                }
            }
        </style>
        `
    }
    connectedCallback(){
        this.shadowRoot.appendChild(this.estructura().content.cloneNode(true))
    }
}

customElements.define("hero-section", Hero)