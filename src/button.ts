import {html, customElement, LitElement, property, css } from "lit-element";


@customElement('awesome-button')
export class Button extends LitElement {

    @property()
    buttonText = '';

    constructor() {
        super();
    }

    static get styles() {
        return css`file-replace!!src/button.css!!`;
    }

    render() {
        return html`file-replace!!src/button.html!!`;
    }

    clicked() {
    	console.log('clicked');
    }
}
