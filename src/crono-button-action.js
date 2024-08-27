import { LitElement, css, html } from 'lit'
import { backgroundStyles, buttonAction, buttonsGradiet, cronoStyles } from './crono-styles.js';
import './crono-card.js';
import { crono, close } from './icons.js';

export class CronoButtonAction extends LitElement {
  static properties = {
    openForm: { type: Boolean},
    dataSend: { type: Object}
  };

static styles = [
  buttonAction,
  backgroundStyles,
  buttonsGradiet,
]

  constructor() {
    super();
    this.openForm = false;
    this.dataSend = {}
  }

  _handleSubmit(event){
    event.preventDefault()

    this.dispatchEvent(
      new CustomEvent('on-create-crono-event', {
        bubbles: true,
        composed: true,
        detail: this.dataSend
      })
    )

    this.openForm = false
  }

  _handleInput(event, key) {
    const target = event.target
    this.dataSend = {
      ...this.dataSend,
      [key]: target.value
    }
  }

  render() {
    return html`
   <div class=${this.openForm ? 'ba-we-love-subscribers-wrap ani' : 'ba-we-love-subscribers-wrap'}>
      ${
        this.openForm ? html`
         <div class=${this.openForm ? 'ba-we-love-subscribers popup-ani open' : 'a-we-love-subscribers popup-ani close'}>
        <header>
          <h1>Agregar Counter</h1>
        </header>
        <form @submit=${this._handleSubmit}>
          <input name="name-crono" placeholder="Sesion Gym" type="text" 
          @input=${(e) => this._handleInput(e, 'name')} value="">
          <input name="time" type="text" 
          @input=${(e) => this._handleInput(e, 'time')} value="1000">
          <br>
          <button class="btn-large color" type="submit">
            Crear Cronometro
          </button>
        </form>
      </div> 
        `: ''
      }
     
      <div class="ba-we-love-subscribers-fab" 
        @click=${() => this.openForm = !this.openForm}>
        <div class="wrap">
          <div class="img-fab">
          ${!this.openForm ? crono : close}
          </div>
        </div>
      </div>
    </div>
    `
  }
}

window.customElements.define('crono-button-action', CronoButtonAction)
