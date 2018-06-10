import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import {LitElement, html} from '@polymer/lit-element/lit-element.js';

import { SharedStyles } from '../shared-styles.js';
import { chevronLeftIcon, infoIcon, addIcon, sendIcon } from '../site-icons.js';
import '../view-footer.js';

import './messenger-information.js';
import './messenger-message.js';

export class MessengerConversation extends LitElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        :host([open]) {
          animation-duration: var(--app-screen-transition-speed);
          animation-name: enter;
          background-color: var(--app-messenger-conversation-background);
          border-top-color: var(--app-primary-border-color);
          border-top-style: var(--app-border-style);
          border-top-width: var(--app-border-width);
          color: var(--app-primary-color);
          contain: content;
          display: flex;
          flex-direction: column;
          // flex-wrap: wrap;
          height: 100vh;
          left: 0;
          position: fixed;
          top: 0;
          width: 100vw;
          // will-change: opacity;
        }

        :host([hiding]) {
          animation-duration: var(--app-screen-transition-speed);
          animation-name: exit;
        }

        div.messages {
          padding-top: 64px;
          overflow: auto;
        }

        messenger-message {
          border: none;
          flex-basis: 100%;
          padding: var(--app-section-margin-vertical) var(--app-body-margin-horizontal);
          resize: none;
        }

        messenger-information {
          z-index: 20;
        }

        messenger-information:not([open]) {
          display: none;
          opacity: 0;
          pointer-events: none;
        }

        view-footer {
          padding: 0.5rem;
        }

        view-footer textarea {
          border-color: var(--app-secondary-border-color);
          border-style: var(--app-border-style);
          border-width: var(--app-border-width);
          border-radius: 10px;
          flex: 100%;
          height: 1rem;
          padding: 1rem;
          resize: none;
        }
      </style>

      <app-header>
        <app-toolbar class="toolbar-top">
          <button on-click="${e => this.hide(e)}" title="Back">${chevronLeftIcon}</button>
          <div main-title>John Smith</div>
          <button on-click="${e => this.showInformation(e)}" title="Information">${infoIcon}</button>
        </app-toolbar>
      </app-header>

      <div class="messages">
        <messenger-message incoming direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message outgoing direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message incoming direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message outgoing direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message incoming direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message outgoing direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message incoming direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message outgoing direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message incoming direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message outgoing direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message incoming direction="${props.direction}">${props.content}</messenger-message>
        <messenger-message outgoing direction="${props.direction}">${props.content}</messenger-message>
      </div>

      <view-footer>
        <button on-click="${e => this.send(e)}" title="Add media">${addIcon}</button>
        <textarea></textarea>
        <button on-click="${e => this.send(e)}" title="Send">${sendIcon}</button>
      </view-footer>

      <messenger-information></messenger-information>
    `;
  }

  static get properties() { return {
    open: Boolean,
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

  constructor() {
    super();

    this.open = false;

    this.addEventListener("animationend", this.close, false);
  }

  _didRender(properties, changeList) {
    if ("open" in changeList) {
      if (changeList.open === true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }

  hide(event) {
    this.setAttribute("hiding", true);
  }

  close(event) {
    if (this.hasAttribute("hiding")) {
      this.removeAttribute("hiding");
      this.removeAttribute("open");
    }
  }

  showInformation(event) {
    this.shadowRoot.querySelector("messenger-information").setAttribute("open", true);

    // import('my-view1.js').then((MyView1) => {
    //   console.log("MyView1 loaded");
    // }).catch((reason) => {
    //   console.log("MyView1 failed to load", reason);
    // });
  }

  computeDirection(sender, user) {
    return (sender.id === user.id) ? "outgoing" : "incoming";
  }
}

window.customElements.define('messenger-conversation', MessengerConversation);