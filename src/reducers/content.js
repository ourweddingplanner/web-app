import { combineReducers } from "redux";

import {
  SELECT_RESOURCE,
  INVALIDATE_RESOURCE,
  REQUEST_CONTENT,
  RECEIVE_CONTENT
} from "../actions/content.js";

function selectedResource(state = "content", action) {
  switch (action.type) {
    case SELECT_RESOURCE:
      return action.resource;
    default:
      return state;
  }
}

function content(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_RESOURCE:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_CONTENT:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_CONTENT:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.content,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

  function contentByResource(state = {}, action) {
    switch (action.type) {
      case INVALIDATE_RESOURCE:
      case RECEIVE_CONTENT:
      case REQUEST_CONTENT:        
        return Object.assign({}, state, {
          [action.resource]: content(state[action.resource], action)
        });
      default:
        return state;
  }
}

const rootReducer = combineReducers({
  contentByResource,
  selectedResource
});

export default rootReducer;
