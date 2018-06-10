import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import { SharedStyles } from './shared-styles.js';

export class AsideItem extends LitElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        a {
          background-color: red;
          display: block;
        }
      </style>
      <a href="${props.href}">
        <figure>
            <img
            src="${props.src}"
            alt="${props.alt}">
            <figcaption>${props.caption}</figcaption>
        </figure>
      </a>
    `;
  }

  static get properties() { return {
    href: String,
    caption: String,
    src: String,
    alt: String
  }}
}

window.customElements.define('aside-item', AsideItem);