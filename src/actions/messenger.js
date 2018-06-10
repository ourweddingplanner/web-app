/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { fetchContentIfNeeded } from "./content";

export const GET_MESSAGES = 'GET_MESSAGES';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const REVOKE_MESSAGE = 'REVOKE_MESSAGE';
// export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
// export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

const MESSAGE_LIST = [
  {"id": 1, "content": "Cabot Creamery Extra Sharp Cheddar Cheese", "timestamp": 123256789, "senderId": 1234567812345678, "recipientId": 8765432187654321},
  {"id": 2, "content": "Cowgirl Creamery Mt. Tam Cheese", "timestamp": 1123426789, "senderId": 8765432187654321, "recipientId": 1234567812345679},
  {"id": 3, "content": "Tillamook Medium Cheddar Cheese", "timestamp": 123456589, "senderId": 1234567812345678, "recipientId": 8765432187654321},
  {"id": 4, "content": "Point Reyes Bay Blue Cheese", "timestamp": 123456783, "senderId": 1234567812345678, "recipientId": 1234567812345679},
  {"id": 5, "content": "Clive's Halloumi Cheese", "timestamp":1234567897, "senderId": 1234567812345679, "recipientId": 1234567812345678},
  {"id": 6, "content": "Ivy's sweets", "timestamp":1234567393, "senderId": 1234567812345678, "recipientId": 8765432187654321},
  {"id": 7, "content": "Roger's soufflé", "timestamp":1234567643, "senderId": 8765432187654321, "recipientId": 1234567812345678},
  {"id": 8, "content": "John's chedder", "timestamp":1234560521, "senderId": 1234567812345678, "recipientId": 8765432187654321},
  {"id": 9, "content": "Essex Rosé Wine", "timestamp":1234560381, "senderId": 1234567812345679, "recipientId": 8765432187654321}
]

export const getAllMessages = () => (dispatch, getState) => {
  // Here you would normally get the data from the server. We're simulating
  // that by dispatching an async action (that you would dispatch when you
  // succesfully got the data back)

  const state = getState();

  // const user = 1234567812345678;
  const user = state.user;

  // You could reformat the data in the right format as well:
  const messages = MESSAGE_LIST.reduce((obj, message) => {
    if ((message.recipientId === user.id) || (message.senderId === user.id)) {
      obj[message.id] = message
    }

    return obj;
  }, {});

  // store.dispatch(selectResource(resourceType));
  // dispatch(fetchContentIfNeeded(`messages/user/8765432187654321`));

  dispatch({
    type: GET_MESSAGES,
    messages
  });
};

// export const checkout = (messageId) => (dispatch) => {
//   // Here you could do things like credit card validation, etc.
//   // If that fails, dispatch CHECKOUT_FAILURE. We're simulating that
//   // by flipping a coin :)
//   const flip = Math.floor(Math.random() * 2);
//   if (flip === 0) {
//     dispatch({
//       type: CHECKOUT_FAILURE
//     });
//   } else {
//     dispatch({
//       type: CHECKOUT_SUCCESS
//     });
//   }
// };

export const sendMessage = (messageId) => (dispatch, getState) =>{
  const state = getState();
  // Just because the UI thinks you can send this message
  // doesn't mean it's been received (user could've fixed it);
  if (state.messenger.messages[messageId].inventory > 0) {
    dispatch(sendMessageUnsafe(messageId));
  }
};

export const revokeMessage = (messageId) => {
  return {
    type: REVOKE_MESSAGE,
    messageId
  };
};

export const sendMessageUnsafe = (messageId) => {
  return {
    type: SEND_MESSAGE,
    messageId
  };
}
