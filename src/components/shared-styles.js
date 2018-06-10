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
import { GridSharedStyles } from './shared-styles/grid';

export const SharedStyles = html`
${GridSharedStyles}
<style>
  @keyframes enter {
    from {
      transform: translateX(100vw);
    }
    
    to {
      transform: translateX(0vw);
    }
  }

  @keyframes exit {
    from {
      transform: translateX(0vw);
    }
    
    to {
      transform: translateX(100vw);
    }
  }

  :host {
    display: flex;
    box-sizing: border-box;
  }

  button {

  }

  figure {
    margin: 0;
  }

  figure.hero {
    margin: 10vh 20vw;
  }

  figure img {
    max-height: 50vw;
    width: 100%;
  }

  header,
  section {
    background: var(--app-section-odd-color);
    padding: var(--app-section-margin-vertical) var(--app-body-margin-horizontal);
  }

  header {
    text-align: center;
  }

  header > *,
  section > * {
    max-width: var(--app-module-max-width);
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  a {
    color: var(--app-dark-text-color);
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  ul {
    padding-left: 1rem;
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 3rem;
    }
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }

  app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: var(--app-header-background-color);
    color: var(--app-header-text-color);
    border-bottom: 1px solid #eee;
    z-index: 10;
  }

  app-toolbar {
    display: flex;
    // filter: blur(5px);
    // font-size: var(--app-toolbar-font-size);
    justify-content: space-around;
  }

  textarea {
    font-size: 1rem;
  }
</style>
`;
