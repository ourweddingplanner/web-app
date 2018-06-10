import {LitElement, html} from '@polymer/lit-element/lit-element.js';

import { SharedStyles } from '../shared-styles.js';

import './messenger-conversation.js';

export class MessengerPreview extends LitElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        :host {
          background-color: var(--app-messenger-preview-background);
          border-top-color: var(--app-primary-border-color);
          border-top-style: var(--app-border-style);
          border-top-width: var(--app-border-width);
        }

        messenger-conversation:not([open]) {
          display: none;
          opacity: 0;
          pointer-events: none;
        }

        span {
          background-color: var(--app-messenger-preview-background);
          cursor: pointer;
          padding: var(--app-section-margin-vertical) var(--app-body-margin-horizontal);
          width: 100%;
        }
      </style>

      <span class="${props.direction}" on-click="${e => this.showChannel(e)}">${props.content}</span>

      <messenger-conversation user="${props._user}"></messenger-conversation>
    `;
  }

  static get properties() { return {
    content: String,
    user: Object,
    // recipient: Object, // TODO: securely retrieve full user details from API
    // sender: Object, // TODO: securely retrieve full user details from API
    recipientId: Number,
    senderId: Number,
    timestamp: Number,
    direction: {
      type: String,
      computed: 'computeDirection(sender, user)'
    }
  }}

  showChannel(event) {
    console.log("show", event);
    // event.target.classList.add("open");
    // this.$.overlay.classList.add("open");
    // this.querySelector("#overlay").classList.add("open");
    // document.querySelector("#overlay").classList.add("open");
    this.shadowRoot.querySelector("messenger-conversation").setAttribute("open", true);
    
    const initialLocation = location.pathname;

    // location.replace(`${initialLocation}/123`);
    // location = `${initialLocation}/123`;
    // history.pushState({}, null, `${initialLocation}/123`);
  }

  // hideChannel(event) {
  //   console.log("hide", event);
  //   event.target.removeAttribute("open");
  // }

  computeDirection(sender, user) {
    return (sender.id === user.id) ? "outgoing" : "incoming";
  }
}

window.customElements.define('messenger-preview', MessengerPreview);