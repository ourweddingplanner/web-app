/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { GET_USER, SET_CURRENT_USER_ID, UPDATE_USER, UNSET_CURRENT_USER_ID, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../actions/user.js';
import { createSelector } from 'reselect';

const user = (state = null, action) => {
  switch (action.type) {
    case GET_USER:
    case UPDATE_USER:
      return {
        ...state,
        id: action.id
      };
    // case SET_CURRENT_USER_ID:
    // case UNSET_CURRENT_USER_ID:
    // case SIGN_IN_SUCCESS:
    //   return {
    //     ...state,
    //     user: user(state.user, action),
    //     error: ''
    //   };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: 'Signin failed. Please try again'
      };
    default:
      return state;
  }
}

export default user;

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

// const userSelector = state => state.user;