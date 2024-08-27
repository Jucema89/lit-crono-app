import { LitElement, css, html } from 'lit'
import { backgroundStyles, cronoStyles } from './crono-styles.js';
import './crono-card.js';
import './crono-button-action.js'

export class CronoApp extends LitElement {
  static properties = {
    cronosArray: { type: Array }
  };

  static styles = [
    backgroundStyles
  ]

  constructor() {
    super();
    this.cronosArray = [
      // {
      //   id: 1,
      //   duration: 12000,
      //   label: 'uno'
      // },
      // {
      //   id: 2,
      //   duration: 12000,
      //   label: 'dos'
      // },
      // {
      //   id: 3,
      //   duration: 12000,
      //   label: 'tres'
      // },
      // {
      //   id: 4,
      //   duration: 12000,
      //   label: 'cuatro'
      // }
    ]
  }

  _viewData(e){
    const newCrono = {
      id: this.cronosArray.length + 1,
      duration: Number(e.detail.time),
      label: e.detail.name
    }

    this.cronosArray = [
      ...this.cronosArray,
      newCrono
    ]
  }

  _deleteCrono(e){
    if(this.cronosArray.length === 1){
      this.cronosArray = []
    }

    const index = this.cronosArray.findIndex(crono => crono.id === e.detail.id);
    if (index !== -1) {
      this.cronosArray.splice(index, 1);
      this.cronosArray = [ ...this.cronosArray]
    }
  }

  render() {
    return html`
    <main>
      ${this.cronosArray.map(crono => html`

        <crono-card 
          .duration=${crono.duration} 
          .label=${crono.label}
          .id=${crono.id}
          @on-delete-crono-event=${this._deleteCrono}>
        </crono-card>


      `)}

      <crono-button-action 
        @on-create-crono-event=${this._viewData}>
      </crono-button-action>
      
    </main> 
      
    `
  }
}

window.customElements.define('crono-app', CronoApp)
