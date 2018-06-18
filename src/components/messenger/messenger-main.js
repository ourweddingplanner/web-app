import { LitElement, html } from '@polymer/lit-element';

// import { sendMessageIcon } from './site-icons.js';

import './messenger-preview';
import './messenger-header';
import './messenger-footer';

export class MessengerMain extends LitElement {
  _render(props) {
    return html`
      <style>
        :host {
          border-top-color: var(--app-primary-border-color);
          border-top-style: var(--app-border-style);
          border-top-width: var(--app-border-width);
          display: block;
          position: relative;
        }
      </style>
      <messenger-header></messenger-header>
      ${Object.keys(props._messages).map((key) => {
        const item = props._messages[key];
        return html`
          <messenger-preview content="${item.content}" participants="${item.participants}" recipient="${item.recipient}" sender="${item.sender}" timestamp="${item.timestamp}" user="${props._user}"></messenger-preview>
        `
      })}
      <messenger-footer></messenger-footer>
    `;
  }

  static get properties() { return {
    _user: Object,
    _messages: Object,
    _error: String
  }}

  constructor() {
    super();
    this._messages = {
      // "1": {"id": 1, "content": "Cabot Creamery Extra Sharp Cheddar Cheese", "timestamp": 123456789, "senderId": 1234567812345678, "recipientId": 8765432187654321},
      // "2": {"id": 2, "content": "Cowgirl Creamery Mt. Tam Cheese", "timestamp": 1123456789, "senderId": 1234567812345678, "recipientId": 8765432187654321},
      // "3": {"id": 3, "content": "Tillamook Medium Cheddar Cheese", "timestamp": 123456789, "senderId": 1234567812345678, "recipientId": 8765432187654321},
      // "4": {"id": 4, "content": "Point Reyes Bay Blue Cheese", "timestamp": 123456789, "senderId": 1234567812345678, "recipientId": 8765432187654321},
      // "5": {"id": 5, "content": "Shepherd's Halloumi Cheese", "timestamp":1234567893, "senderId": 1234567812345678, "recipientId": 8765432187654321}
    };
  }

}

export default MessengerMain;

window.customElements.define('messenger-main', MessengerMain);
