import { html, customElement, LitElement, property, css } from 'lit-element';


@customElement('simple-card')
export class Card extends LitElement {

    @property({ type: String })
    title = '';

    constructor() {
        super();
    }

    static get styles() {
        return css`file-replace!!src/cards/simple-card/simple-card.css!!`;
    }

    render() {
        return html`file-replace!!src/cards/simple-card/simple-card.html!!`;
    }

    clicked() {
        console.log('clicked');
    }
}
