class BackgroundSquare extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["bgimage"];
    }

    attributeChangedCallback(attributeName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[attributeName] = newValue;
            this.updateStyles(); // Actualiza los estilos dinámicamente
        }
    }

    template() {
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                :host{
                    --altura-container: 90vh
                }
                main {
                    width: 100%;
                    height: var(--altura-container);
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    display:flex;
                    flex-direction:column;
                    justify-content: space-around;
                    position: relative;
                    overflow: hidden;
                    margin-bottom: 10px;
                }
            </style>
            <main>
                <slot name="up"></slot>
                <slot name="down"></slot>
                <slot name="image"></slot>
            </main>
        `;
        return template;
    }

    updateStyles() {
        const main = this.shadowRoot.querySelector('main');
        if (main && this.bgimage) {
            main.style.backgroundImage = `url(${this.bgimage})`;
        }
    }

    render() {
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(this.template().content.cloneNode(true));
        this.updateStyles(); // Aplica los estilos iniciales
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("background-square", BackgroundSquare);

