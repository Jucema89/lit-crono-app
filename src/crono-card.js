import { LitElement, css, html } from 'lit'
import { buttonsGradiet, cronoStyles } from './crono-styles';
import {play, pause, replay, trash} from './icons.js';
import './crono-time.js';

export class CronoCard extends LitElement {
    static styles = [
        cronoStyles,
        buttonsGradiet,
        css`
            .container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 5px;
                background-color: #fff;
                border-radius: 10px;
                margin: 20px 0;
            }

            .card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 5px;
                background-color: #fff;
                border-radius: 10px;
                margin: 20px 0;

                h3 {
                    margin: 0;
                    padding: 0;
                }

                .label {
                    font-size: 2rem;
                    color: #6e58cf;
                    font-weight: 500;
                    margin: 10px 0;
                    font-family: 'Poppins', sans-serif;
                }

                .footer {
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    margin-bottom: 10px;
                }
            }
        `
    ]

    static properties = {
        duration: { type: Number },
        id: {type: Number},
        end: { type: Boolean, state: true },
        remaining: { type: Boolean, state: true },
        day: { type: Number },
        hour: { type: Number },
        min: { type: Number },
        minRun: { type: Number },
        sec: { type: Number },
        hun: { type: Number },
        label: { type: String },
    }

    constructor() {
        super();
        this.duration = 0;
        this.end = null;
        this.remaining = 0;
        this.label = 'Sin Name';
        this.id = null
    }

    _pad(pad, val) {
        return pad ? String(val).padStart(2, '0') : val;
      }
    
    _start() {
        this.end = Date.now() + this.remaining;
        this._tick();
    }

    _pause() {
        this.end = null;
    }

    _reset() {
        const running = this.running;
        this.remaining = this.duration * 1000;
        this.end = running ? Date.now() + this.remaining : null;
    }

    _tick() {
        if (this.running) {
            this.remaining = Math.max(0, this.end - Date.now());
            requestAnimationFrame(() => this._tick());
        }
    }

    _removeCrono(){    
        this.dispatchEvent(
        new CustomEvent('on-delete-crono-event', {
          bubbles: true,
          composed: true,
          detail: {
            id: this.id
          }
        }))
    }

    get running() {
        return this.end && this.remaining;
    }

    render(){
        const { remaining, running } = this;

        this.day = Math.floor(remaining / 86400000);
        this.hour = Math.floor(remaining / 3600000);
        this.min = Math.floor(remaining / 60000);
        this.minRun = this._pad(true, Math.floor((remaining / 60000) % 60));
        this.sec = this._pad(this.min, Math.floor((remaining / 1000) % 60));
        this.hun = this._pad(true, Math.floor((remaining % 1000) / 10));

        return html`
        <section class="card">
            <h3 class="label">${this.label}</h3>
            ${this.renderTimer()}
            ${this.renderFooter(running)}
        </section>
        `;
    }

    renderFooter(running){
       return html`
            <footer class="footer buttons">
                ${
                    this.remaining === 0
                    ? ''
                    : running
                    ? html`<button class="btn-hover color" @click=${this._pause}>${pause}</button>`
                    : html`<button class="btn-hover color" @click=${this._start}>${play}</button>`
                }
                <button class="btn-hover color" @click=${this._reset}>${replay}</button>
                <button class="btn-hover color" @click=${this._removeCrono}>${trash}</button>
            </footer>
        `
    }

    renderTimer(){
        return html`${

            this.day && this.hour ? 
            html`<div class="container">
              <crono-time .time=${this.day} .label=${'Dias'}></crono-time>
              <crono-time .time=${this.hour} .label=${'Horas'}></crono-time>
              <crono-time .time=${this.minRun} .label=${'Mins'}></crono-time>
              <crono-time .time=${this.sec} .label=${'Seg'}></crono-time>
            </div>` : 

            this.hour && this.min ? 
            html`<div class="container">
              <crono-time .time=${this.hour} .label=${'Horas'}></crono-time>
              <crono-time .time=${this.min} .label=${'Mins'}></crono-time>
              <crono-time .time=${this.sec} .label=${'Seg'}></crono-time>
            </div> ` :
            this.min ? 

            html`<div class="container">
              <crono-time .time=${this.min} .label=${'Mins'}></crono-time>
              <crono-time .time=${this.sec} .label=${'Seg'}></crono-time>
              <crono-time .time=${this.hun} .label=${'Mils'}></crono-time>
            </div> `:

            html`<div class="container">
              <crono-time .time=${this.sec} .label=${'Seg'}></crono-time>
              <crono-time .time=${this.hun} .label=${'Mils'}></crono-time>
            </div>`
        }`
    }

    connectedCallback() {
        super.connectedCallback();
        this._reset();
    }

}

customElements.define('crono-card', CronoCard)