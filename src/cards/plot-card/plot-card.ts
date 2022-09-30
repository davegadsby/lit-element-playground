import { html, customElement, LitElement, property, css } from 'lit-element';


@customElement('plot-card')
export class PlotCard extends LitElement {

    @property({ type: String })
    title = '';

    constructor() {
        super();
    }

    static get styles() {
        return css`file-replace!!src/cards/plot-card/plot-card.css!!`;
    }

    render() {
        return html`file-replace!!src/cards/plot-card/plot-card.html!!`;
    }
}
