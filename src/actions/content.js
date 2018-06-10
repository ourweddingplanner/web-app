// import fetch from 'cross-fetch';

export const REQUEST_CONTENT = 'REQUEST_CONTENT'
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT'
export const SELECT_RESOURCE = 'SELECT_RESOURCE'
export const INVALIDATE_RESOURCE = 'INVALIDATE_RESOURCE'

export function selectResource(resource) {
  return {
    type: SELECT_RESOURCE,
    resource
  }
}

export function invalidateResource(resource) {
  return {
    type: INVALIDATE_RESOURCE,
    resource
  }
}

function requestContent(resource) {
  return {
    type: REQUEST_CONTENT,
    resource
  }
}

function receiveContent(resource, json) {
  return {
    type: RECEIVE_CONTENT,
    resource,
    // content: json.data.children.map(child => child.data),
    // content: json.map(child => child),
    content: json,
    receivedAt: Date.now()
  }
}

function fetchContent(resource) {
  return dispatch => {
    dispatch(requestContent(resource))
    return fetch(`http://localhost:3001/${resource}`)
      .then(response => response.json())
      .then(json => dispatch(receiveContent(resource, json)))
  }
}

function shouldFetchContent(state, resource) {
  const content = state.content.contentByResource[resource]
  if (!content) {
    return true
  } else if (content.isFetching) {
    return false
  } else {
    return content.didInvalidate
  }
}

export function fetchContentIfNeeded(resource) {
  return (dispatch, getState) => {
    if (shouldFetchContent(getState(), resource)) {
      return dispatch(fetchContent(resource))
    }
  }
}