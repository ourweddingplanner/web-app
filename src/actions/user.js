
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const GET_USER = 'GET_USER';
export const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID';
export const UPDATE_USER = 'UPDATE_USER';
export const UNSET_CURRENT_USER_ID = 'UNSET_CURRENT_USER_ID';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const getUser = (id) => (dispatch, getState) => {
  dispatch({
    type: GET_USER,
    id
  });
}

export const updateUser = (id) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_USER,
    id
  });
}