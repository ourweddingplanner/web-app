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
import { SharedStyles } from './shared-styles.js';
import { PageViewElement } from './page-view-element.js';
import './site-aside.js';

class SiteFAQ extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        section {

        }
      </style>
      <header>
        <h2>Frequently Asked Questions</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </header>
      <section>
        <h3>Questions</h3>
        <ul>
          <li><a href="faq#answer-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</a></li>
          <li><a href="faq#answer-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</a></li>
          <li><a href="faq#answer-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</a></li>
          <li><a href="faq#answer-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</a></li>
          <li><a href="faq#answer-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</a></li>
          <li><a href="faq#answer-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</a></li>
          <li><a href="faq#answer-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</a></li>
          <li><a href="faq#answer-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</a></li>
          <li><a href="faq#answer-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</a></li>
          <li><a href="faq#answer-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</a></li>
        </ul>
      </section>
      <section>
        <h3>Answers</h3>
        <div id="answer-1">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</p>
        </div>
        <div id="answer-2">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</p>
        </div>
        <div id="answer-3">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</p>
        </div>
        <div id="answer-4">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</p>
        </div>
        <div id="answer-5">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</p>
        </div>
        <div id="answer-6">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</p>
        </div>
        <div id="answer-7">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</p>
        </div>
        <div id="answer-8">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</p>
        </div>
        <div id="answer-9">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</p>
        </div>
        <div id="answer-10">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.</p>
        </div>
      </section>
      <site-aside></site-aside>
    `;
  }
}

window.customElements.define('site-faq', SiteFAQ);
