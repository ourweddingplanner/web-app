import {LitElement, html} from '@polymer/lit-element/lit-element.js';

import { SharedStyles } from '../shared-styles.js';

export class MessengerMessage extends LitElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        :host {
          background-color: var(--app-messenger-conversation-background);
          padding: var(--app-section-margin-vertical) var(--app-body-margin-horizontal);
          width: 100%;
        }

        :host([incoming]) span {
          background-color: var(--app-messenger-message-incoming-background);
          color: var(--app-dark-text-color);
          margin-right: 3rem;
        }

        :host([outgoing]) span {
          background-color: var(--app-messenger-message-outgoing-background);
          color: var(--app-light-text-color);
          margin-left: 3rem;
        }

        :host span:before,
        :host span:after {
          content: "";
          position: absolute;
          z-index: 1;
          bottom: -2px;
        }

        :host([incoming]) span:before {
          bottom: -2px;
          left: -7px;
          height: 20px;
          border-left: 20px solid var(--app-messenger-message-incoming-background);
          border-bottom-right-radius:  16px 14px;
          transform: translate(0, -2px);
        }
      
        :host([incoming]) span:after {
          background-color: var(--app-messenger-conversation-background);
          bottom: -2px;
          left: 4px;
          width: 26px;
          height: 20px;
          border-bottom-right-radius:  10px;
          transform: translate(-30px, -2px);
        }

        :host([outgoing]) span:before {
          right: -7px;
          height: 20px;
          border-right: 20px solid var(--app-messenger-message-outgoing-background);
          border-bottom-left-radius:  16px 14px;
          transform: translate(0, -2px);
        }
      
        :host([outgoing]) span:after {
          background-color: var(--app-messenger-conversation-background);
          right: -56px;
          width: 26px;
          height: 20px;
          border-bottom-left-radius:  10px;
          transform: translate(-30px, -2px);
        }

        span {
          border: none;
          border-radius: 22px;
          flex-basis: 100%;
          padding: 1rem;
          position: relative;
        }
      </style>
      <span>
        ${props.content}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a tortor mattis, venenatis magna ac, gravida tellus. Suspendisse sed enim et risus malesuada consequat. Vivamus posuere nibh sagittis mi pharetra egestas. Duis ultrices, risus quis consectetur elementum, lorem odio tempor felis, et convallis lorem mi tempus tortor. Pellentesque elementum imperdiet mauris, non mattis nisl dignissim ut. Etiam congue, sapien a consectetur pretium, nulla ex suscipit ex, at elementum orci lacus vel sapien. Cras enim quam, laoreet non odio ullamcorper, tincidunt finibus quam.
      </span>
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

  computeDirection(sender, user) {
    return (sender.id === user.id) ? "outgoing" : "incoming";
  }
}

window.customElements.define('messenger-message', MessengerMessage);