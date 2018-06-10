/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import unescape from 'lodash-es/unescape';
import {Fab} from "@material/mwc-fab"
import { SharedStyles } from './shared-styles.js';
import { PageViewElement } from './page-view-element.js';
import { SiteAside } from './site-aside.js';

class SiteDynamic extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      ${document.createRange().createContextualFragment(unescape(props.data.markup))}
    `;
  }

  static get properties() {
    return {
      data: Object
    }
  }
}

window.customElements.define('site-dynamic', SiteDynamic);
