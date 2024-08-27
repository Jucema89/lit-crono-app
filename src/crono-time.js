import { LitElement, html } from 'lit'
import { cronoStyles } from './crono-styles';
export class CronoTime extends LitElement {

    static styles = [
        cronoStyles
    ]

    static properties = {
        time: { type: Number },
        label: { type: String}
    };

    constructor() {
        super()
        this.time = 0;
        this.end = null;
        this.remaining = 0;
        this.label = '';
    }

    render(){
        return html`
            <section class="container">
                <div class="countdown__item">
                <div class="countdown__number bg-gradiet">
                    <p>${this.time}</p>
                </div>
                <div class="countdown__info">${this.label}</div>
                </div>
            </section>
        `
    }



}

customElements.define('crono-time', CronoTime)