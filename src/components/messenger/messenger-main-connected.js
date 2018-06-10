import { LitElement } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the redux store.
import { store } from '../../store.js';

import { getAllMessages, sendMessage } from '../../actions/messenger.js';

import messenger from '../../reducers/messenger.js';

import MessengerMain from './messenger-main';

store.addReducers({
  messenger
});

export class MessengerMainConnected extends connect(store)(MessengerMain) {
  _firstRendered() {
    store.dispatch(getAllMessages());
  }

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._user = state.user;
    this._messages = state.messenger.messages;
    this._error = state.messenger.error;
  }
}

window.customElements.define('messenger-main-connected', MessengerMainConnected);
