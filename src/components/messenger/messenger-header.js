import {LitElement, html} from '@polymer/lit-element/lit-element.js';

import { SharedStyles } from '../shared-styles.js';
import { ButtonSharedStyles } from '../shared-styles/button.js';

export class MessengerHeader extends LitElement {
  _render(props) {
    return html`
      ${SharedStyles}
      ${ButtonSharedStyles}
      <style>
        :host {
          background-color: var(--app-header-background-color);
          justify-content: space-between;
          padding: var(--app-section-margin-vertical) var(--app-body-margin-horizontal);
        }

        button {

        }
      </style>
      <button>New Channel</button>
    `;
  }

  static get properties() { return {
    message: String
  }}
}

window.customElements.define('messenger-header', MessengerHeader);