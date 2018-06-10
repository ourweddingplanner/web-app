/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';

import { menuIcon } from './site-icons.js';
import './snack-bar.js';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { installAuthentication } from '../utils/user.js';

import { store } from '../store.js';
import { navigate, updateOffline, updateDrawerState, updateLayout, updateResourceLocation, getResourceLocation } from '../actions/app.js';
import { selectResource, fetchContentIfNeeded, invalidateResource } from '../actions/content.js';
import { updateUser } from '../actions/user.js';

import content from '../reducers/content.js';
import user from '../reducers/user.js';

store.addReducers({
  content,
  user
});

class MyApp extends connect(store)(LitElement) {
  _render({appTitle, _page, _drawerOpened, _snackbarOpened, _offline, _year, _pageData}) {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
      :host {
        --app-drawer-width: 256px;
        display: block;

        --app-primary-color: #E91E63;
        --app-secondary-color: black;
        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: white;
        --app-section-even-color: #f7f7f7;
        --app-section-odd-color: white;

        --app-primary-border-color: #f7f7f7;
        --app-secondary-border-color: #ccc;
        --app-border-style: solid;
        --app-border-width: 1px;

        --app-header-background-color: white;
        --app-header-text-color: var(--app-dark-text-color);
        --app-header-selected-color: var(--app-primary-color);

        --app-drawer-background-color: var(--app-secondary-color);
        --app-drawer-text-color: var(--app-light-text-color);
        --app-drawer-selected-color: #78909C;

        --app-messenger-conversation-background: white;
        // --app-messenger-message-incoming-background: #73AD21;
        --app-messenger-message-incoming-background: #E5E5EA;
        --app-messenger-message-outgoing-background: #0B93F6;
        --app-messenger-preview-background: white;

        --app-font-size-xs: 0.625rem;
        --app-font-size-sm: 0.875rem;
        --app-font-size-md: 1rem;
        --app-font-size-lg: 1.275rem;
        --app-font-size-xl: 1.5rem;

        --app-chrome-background-color: rgba(239, 239, 239, 0.95);

        --app-header-background-color: var(--app-chrome-background-color);

        // --app-toolbar-font-size: var(--app-font-size-sm);

        --app-body-margin-horizontal: 8vw;
        --app-section-margin-vertical: 4vh;

        --app-grid-gap: 8vw;
        --app-grid-template-columns-amount: 1;
        --app-grid-template-columns-auto-fill: 1fr;

        --app-module-max-width: 600px;

        --app-screen-transition-speed: 150ms;
      }

      @media (min-width: 460px) {
        :host {
          --app-grid-gap: 4vw;
          --app-grid-template-columns-amount: 4;
          --app-body-margin-horizontal: 4vw;
          --app-section-margin-vertical: 8vh;
        }
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

      .toolbar-top {
        background-color: var(--app-header-background-color);
      }

      [main-title] {
        font-family: 'Josefin Sans';
        text-transform: uppercase;
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        padding-right: 44px;
      }

      .toolbar-list {
        display: none;
      }

      .toolbar-list > a {
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        padding: 4px 24px;
      }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }

      .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
      }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
      }

      .main-content {
        padding-top: 64px;
        min-height: 100vh;
      }

      .main-content a[selected],
      .links a[selected] {
        text-decoration: underline;
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      footer {
        background: var(--app-drawer-background-color);
        color: var(--app-drawer-text-color);
        font-size: 0.75rem;
        display: grid;
        justify-items: start;
        padding: var(--app-section-margin-vertical) var(--app-body-margin-horizontal);
      }

      footer .links {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      footer .links a {
        color: var(--app-drawer-text-color);
        text-decoration: none;
        text-transform: uppercase;
      }

      footer .copyright {
        justify-self: end;
      }

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 460px) {
        .toolbar-list {
          display: block;
        }

        .menu-btn {
          display: none;
        }

        .main-content {
          padding-top: 107px;
        }

        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        [main-title] {
          padding-right: 0px;
        }

        footer {
          grid-template-columns: 50% 50%;
        }

        footer .links {
          flex-direction: row;
          justify-content: space-between;
        }
      }

      @media (max-width: 459px) {
        footer .links {
          text-align: center;
        }

        footer .links a {
          margin-bottom: 0.5rem;
        }
      }
    </style>

    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <button class="menu-btn" title="Menu" on-click="${_ => store.dispatch(updateDrawerState(true))}">${menuIcon}</button>
        <div main-title>${appTitle}</div>
      </app-toolbar>

      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        <a selected?="${_page === 'home'}" href="/home">Home</a>
        <a selected?="${_page === 'messenger'}" href="/messenger">Messenger</a>
        <a selected?="${_page === 'view1'}" href="/view1">View One</a>
        <a selected?="${_page === 'view2'}" href="/view2">View Two</a>
        <a selected?="${_page === 'view3'}" href="/view3">View Three</a>
      </nav>
    </app-header>

    <!-- Drawer content -->
    <app-drawer opened="${_drawerOpened}"
        on-opened-changed="${e => store.dispatch(updateDrawerState(e.target.opened))}">
      <nav class="drawer-list">
        <a selected?="${_page === 'home'}" href="/home">Home</a>
        <a selected?="${_page === 'messenger'}" href="/messenger">Messenger</a>
        <a selected?="${_page === 'view1'}" href="/view1">View One</a>
        <a selected?="${_page === 'view2'}" href="/view2">View Two</a>
        <a selected?="${_page === 'view3'}" href="/view3">View Three</a>
      </nav>
    </app-drawer>

    <!-- Main content -->
    <main class="main-content">
      <site-test class="page" data="${_pageData}" active?="${_page && _page.startsWith('test')}"></site-test>
      <site-careers class="page" data="${_pageData}" active?="${_page === 'careers'}"></site-careers>
      <site-contact class="page" data="${_pageData}" active?="${_page === 'contact'}"></site-contact>
      <site-faq class="page" data="${_pageData}" active?="${_page === 'faq'}"></site-faq>
      <site-home class="page" data="${_pageData}" active?="${_page === 'home'}"></site-home>
      <site-legal-statement class="page" data="${_pageData}" active?="${_page === 'legal-statement'}"></site-legal-statement>
      <site-messenger class="page" data="${_pageData}" active?="${_page === 'messenger'}"></site-messenger>
      <site-privacy-policy class="page" data="${_pageData}" active?="${_page === 'privacy-policy'}"></site-privacy-policy>
      <site-store-locator class="page" data="${_pageData}" active?="${_page === 'store-locator'}"></site-store-locator>
      <site-view1 class="page" data="${_pageData}" active?="${_page === 'view1'}"></site-view1>
      <site-view2 class="page" data="${_pageData}" active?="${_page === 'view2'}"></site-view2>
      <site-view3 class="page" data="${_pageData}" active?="${_page === 'view3'}"></site-view3>
      <site-view404 class="page" data="${_pageData}" active?="${_page === 'view404'}"></site-view404>
      <site-dynamic class="page" data="${_pageData}" active?="${_page === 'dynamic'}"></site-dynamic>
    </main>

    <footer>
      <div class="links">
        <a selected?="${_page === 'faq'}" href="/faq">FAQ</a>
        <a selected?="${_page === 'contact'}" href="/contact">Contact</a>
        <a selected?="${_page === 'careers'}" href="/careers">Careers</a>
        <a selected?="${_page === 'legal-statement'}" href="/legal-statement">Legal Statement</a>
        <a selected?="${_page === 'privacy-policy'}" href="/privacy-policy">Privacy Policy</a>
        <a selected?="${_page === 'store-locator'}" href="/store-locator">Store Locator</a>
      </div>
      <span class="copyright">&copy; ${_year}</span>
    </footer>

    <snack-bar active?="${_snackbarOpened}">
        You are now ${_offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: String,
      _page: String,
      _drawerOpened: Boolean,
      _snackbarOpened: Boolean,
      _offline: Boolean,
      _year: Number,
      _pageData: Object,
      _pageDataLocation: String
    }
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    setPassiveTouchGestures(true);

    this._pageData = {};
  }

  _getData(resourceType) {
    store.dispatch(selectResource(resourceType));
    store.dispatch(fetchContentIfNeeded(resourceType));
  }

  _firstRendered() {
    installRouter((location) => store.dispatch(navigate(window.decodeURIComponent(location.pathname))));
    installRouter((location) => store.dispatch(updateResourceLocation(getResourceLocation(window.location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => store.dispatch(updateLayout(matches)));
    installAuthentication((user) => store.dispatch(updateUser(user)));

    this._getData(this._pageDataLocation);
    // this._getData("messenger");
  }

  _didRender(properties, changeList) {
    if ('_page' in changeList) {
      const pageTitle = properties.appTitle + ' - ' + changeList._page;
      updateMetadata({
          title: pageTitle,
          description: pageTitle
          // This object also takes an image property, that points to an img src.
      });
    }
  }

  _stateChanged(state) {
    const currentDate = new Date();

    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
    this._year = currentDate.getFullYear();
    this._pageDataLocation = getResourceLocation(window.location.pathname);
    this._user = state.user;

    if (state.content.contentByResource[this._pageDataLocation] && state.content.contentByResource[this._pageDataLocation].content) {
      this._pageData = state.content.contentByResource[this._pageDataLocation].content[0];
    }

    // if (state.content.contentByResource.messenger && state.content.contentByResource.messenger.content) {
    //   this._messengerData = state.content.contentByResource.messenger.content[0];
    // }
  }
}

window.customElements.define('site-app', MyApp);