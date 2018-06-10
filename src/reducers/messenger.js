/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { GET_MESSAGES, SEND_MESSAGE, REVOKE_MESSAGE } from '../actions/messenger.js';
import { createSelector } from 'reselect';

const INITIAL_MESSAGE_LIST = {
  addedIds: []
  // quantityById: {}
};

const UPDATED_MESSAGE_LIST = {
  addedIds: ['1']
  // quantityById: {'1': 1}
};

// const messenger = (state = {messages: {}, messageList: INITIAL_MESSAGE_LIST}, action) => {
const messenger = (state = {messages: {}}, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.messages
      };
    case SEND_MESSAGE:
    case REVOKE_MESSAGE:
    // case CHECKOUT_SUCCESS:
    //   return {
    //     ...state,
    //     messages: messages(state.messages, action),
    //     messageList: messageList(state.messageList, action),
    //     error: ''
    //   };
    // case CHECKOUT_FAILURE:
    //   return {
    //     ...state,
    //     error: 'Checkout failed. Please try again'
    //   };
    default:
      return state;
  }
}

// Slice reducer: it only reduces the bit of the state it's concerned about.
const messages = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
    case REVOKE_MESSAGE:
      const messageId = action.messageId;
      return {
        ...state,
        [messageId]: message(state[messageId], action)
      };
    default:
      return state;
  }
}

const message = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        inventory: state.inventory - 1
      };
    case REVOKE_MESSAGE:
      return {
        ...state,
        inventory: state.inventory + 1
      };
    default:
      return state;
  }
}

// const messageList = (state = INITIAL_MESSAGE_LIST, action) => {
//   switch (action.type) {
//     case SEND_MESSAGE:
//     case REVOKE_MESSAGE:
//       return {
//         addedIds: addedIds(state.addedIds, state.quantityById, action),
//         quantityById: quantityById(state.quantityById, action)
//       };
//     case CHECKOUT_SUCCESS:
//       return INITIAL_MESSAGE_LIST;
//     default:
//       return state;
//   }
// }

// const addedIds = (state = INITIAL_MESSAGE_LIST.addedIds, quantityById, action) => {
//   const messageId = action.messageId;
//   switch (action.type) {
//     case SEND_MESSAGE:
//       if (state.indexOf(messageId) !== -1) {
//         return state;
//       }
//       return [
//         ...state,
//         action.messageId
//       ];
//     case REVOKE_MESSAGE:
//       // This is called before the state is updated, so if you have 1 item in the
//       // messageList during the remove action, you'll have 0.
//       if (quantityById[messageId] <= 1) {
//         // This removes all items in this array equal to messageId.
//         return state.filter(e => e !== messageId);
//       }
//       return state;
//     default:
//       return state;
//   }
// }

// const quantityById = (state = INITIAL_MESSAGE_LIST.quantityById, action) => {
//   const messageId = action.messageId;
//   switch (action.type) {
//     case SEND_MESSAGE:
//       return {
//         ...state,
//         [messageId]: (state[messageId] || 0) + 1
//       };
//     case REVOKE_MESSAGE:
//       return {
//         ...state,
//         [messageId]: (state[messageId] || 0) - 1
//       };
//     default:
//       return state;
//   }
// }

export default messenger;

// Per Redux best practices, the messenger data in our store is structured
// for efficiency (small size and fast updates).
//
// The _selectors_ below transform store data into specific forms that
// are tailored for presentation. Putting this logic here keeps the
// layers of our app loosely coupled and easier to maintain, since
// views don't need to know about the store's internal data structures.
//
// We use a tiny library called `reselect` to create efficient
// selectors. More info: https://github.com/reduxjs/reselect.

// const messagesSelector = state => state.messenger.messages;

// Return a flattened array representation of the items in the messageList
// export const messageListItemsSelector = createSelector(
//   messageListSelector,
//   messagesSelector,
//   (messageList, messages) => {
//     const items = [];
//     for (let id of messageList.addedIds) {
//       const item = messages[id];
//       items.push({id: item.id, title: item.title, amount: messageList.quantityById[id], price: item.price});
//     }
//     return items;
//   }
// );

// // Return the total cost of the items in the messageList
// export const messageListTotalSelector = createSelector(
//   messageListSelector,
//   messagesSelector,
//   (messageList, messages) => {
//     let total = 0;
//     for (let id of messageList.addedIds) {
//       const item = messages[id];
//       total += item.price * messageList.quantityById[id];
//     }
//     return parseFloat(Math.round(total * 100) / 100).toFixed(2);
//   }
// );

// // Return the number of items in the messageList
// export const messageListQuantitySelector = createSelector(
//   messageListSelector,
//   messageList => {
//     let num = 0;
//     for (let id of messageList.addedIds) {
//       num += messageList.quantityById[id];
//     }
//     return num;  
//   }
// )
