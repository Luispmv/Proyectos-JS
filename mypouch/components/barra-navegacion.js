import "./navigation-pop.js"

class navBar extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    static get observedAttributes(){
        return ["first", "second", "third", "four", "imagen", "fifth", "sixth"]
    }
    attributeChangedCallback(atributo,oldVal,newVal){
        if(oldVal !== newVal){
            this[atributo] = newVal
        }
    
    }
    crearBarra(){
        const navLabel = document.createElement("nav")
        navLabel.innerHTML = `
        ${this.estilizarBarra()}
        <aside class="aside1-mobile">
            <a href=""><img src="${this.imagen}" alt="logo"></a>
        </aside>
        <aside class="aside2-mobile">
            <button class="menu"><img src="./images/menu.svg" alt=""></button>
        </aside>
        <aside class="aside1-desktop">
            <button>${this.first}</button>
            <button>${this.second}</button>
            <button>${this.third}</button>
            <button>${this.four}</button>
        </aside>
        <img class="img-desktop" src="${this.imagen}" alt="logo">
        <aside class="aside2-desktop">
            <button>${this.fifth}</button>
            <button>${this.sixth}</button>
        </aside>
        `
        return navLabel
    }
    estilizarBarra(){
        return `
        <style>
            :host{
                display:grid
            }
            nav{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem;
                position: relative;
            }
            aside{
                display: flex;
                gap: 10px;
            }
            button{
                background: none;
                border: none;
                padding: 10px;
                width: 90px;
                font-weight: 600;
            }
            .menu{
                display: flex;
                justify-content: end;
            }
            .aside1-desktop{
                display: none;
                width: 40%;
                justify-content: start;
            }
            .aside2-desktop{
                display: none;
                width: 40%;
                justify-content: end;
            }
            .img-desktop{
                display: none;
            }
            @media(min-width:1024px){
                .aside1-mobile{
                    display: none;
                }
                .aside2-mobile{
                    display: none;
                }
                .aside1-desktop{
                    display: flex;
                }
                .aside2-desktop{
                    display: flex;
                }
                .img-desktop{
                    display: flex;
                }
            }
        </style>
        `
    }
    connectedCallback(){
        this.shadowRoot.append(this.crearBarra())
        const boton = this.shadowRoot.querySelector('.menu');
        boton.addEventListener('click', () => {
            const pop_menu = document.createElement("pop-menu")
            console.dir(pop_menu)
            pop_menu.setAttribute("first", `${this.first}`)
            pop_menu.setAttribute("second", `${this.second}`)
            pop_menu.setAttribute("third", `${this.third}`)
            pop_menu.setAttribute("four", `${this.four}`)
            pop_menu.setAttribute("fifth", `${this.fifth}`)
            pop_menu.setAttribute("sixth", `${this.sixth}`)

            this.shadowRoot.append(pop_menu)
        });
    }
   
}

customElements.define("barra-navegacion", navBar)

