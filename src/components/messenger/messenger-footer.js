import {LitElement, html} from '@polymer/lit-element/lit-element.js';

import { SharedStyles } from '../shared-styles.js';
import { ButtonSharedStyles } from '../shared-styles/button.js';

export class MessengerFooter extends LitElement {
  _render(props) {
    return html`
      ${SharedStyles}
      ${ButtonSharedStyles}
      <style>
        :host {
          justify-content: space-between;
          padding: var(--app-section-margin-vertical) var(--app-body-margin-horizontal);
        }

        button {

        }
      </style>
      <button>Recent messages <span class="count">97</span></button>
      <button>All messages</button>
    `;
  }

  static get properties() { return {
    message: String
  }}
}

window.customElements.define('messenger-footer', MessengerFooter);