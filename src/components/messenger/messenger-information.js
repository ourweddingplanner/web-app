import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import {LitElement, html} from '@polymer/lit-element/lit-element.js';

import { SharedStyles } from '../shared-styles.js';

import '../view-footer.js';
// import '../view-header.js';

import { chevronLeftIcon } from '../site-icons.js';

export class MessengerInformation extends LitElement {
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

        div.assets {
          align-content: start;
          display: grid;
          flex-basis: 100%;
          grid-template-columns: repeat(auto-fill, 25vw);
          padding-top: 64px;
          overflow: auto;
        }

        div.assets img {
          height: 25vw;
          object-fit: cover;
          width: 25vw;
        }
      </style>

      <app-header>
        <app-toolbar class="toolbar-top">
          <button on-click="${e => this.hide(e)}" title="Back">${chevronLeftIcon}</button>
          <div main-title>Information</div>
        </app-toolbar>
      </app-header>

      <div class="assets">
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
        <img src="https://picsum.photos/200" alt="Sample image" />
      </div>

      <view-footer>
      <button>Select</button>
      </view-footer>
    `;
  }

  static get properties() { return {

  }}

  constructor() {
    super();
    this.addEventListener("animationend", this.close, false);
  }

  hide(event) {
    console.log("hide", event);
    this.setAttribute("hiding", true);
  }

  close(event) {
    console.log("close", event);

    if (this.hasAttribute("hiding")) {
      this.removeAttribute("hiding");
      this.removeAttribute("open");
    }
  }
}

window.customElements.define('messenger-information', MessengerInformation);