import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import { SharedStyles } from './shared-styles.js';

import { AsideItem } from './aside-item.js';

export class SiteAside extends LitElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        aside {
          background-color: var(--app-primary-color);
          padding: var(--app-section-margin-vertical) var(--app-body-margin-horizontal);
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
          aside-item:last-of-type {
            display: none;
          }
        }
      </style>
      <aside class="col-sm-2 col-md-3 col-lg-up-4">
        ${props.items.map((item) => {
          return html`
            <aside-item caption="${item.title}" href="${item.href}" src="${item.featured_image}" alt="${item.title}"></aside-item>
          `
        })}
      </aside>
    `;
  }

  static get properties() { return {
    items: Array
  }}
}

window.customElements.define('site-aside', SiteAside);
