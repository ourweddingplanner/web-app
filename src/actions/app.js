/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const UPDATE_RESOURCE_LOCATION = 'UPDATE_RESOURCE_LOCATION';

export const navigate = (path) => (dispatch) => {
  // Extract the page name from path.
  const page = path === '/' ? 'home' : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));

  // Close the drawer - in case the *path* change came from a link in the drawer.
  dispatch(updateDrawerState(false));
};

const loadPage = (page) => async (dispatch) => {
  switch(page) {
    case 'careers':
      await import('../components/site-careers.js');
      break;
    case 'contact':
      await import('../components/site-contact.js');
      break;
    case 'faq':
      await import('../components/site-faq.js');
      break;
    case 'home':
      await import('../components/site-home.js');
      // Put code here that you want it to run every time when
      // navigate to home page and site-home.js is loaded
      break;
    case 'legal-statement':
      await import('../components/site-legal-statement.js');
      break;
    case 'messenger':
      await import('../components/site-messenger.js');
      break;
    case 'privacy-policy':
      await import('../components/site-privacy-policy.js');
      break;
    case 'store-locator':
      await import('../components/site-store-locator.js');
      break;
    case 'view1':
      await import('../components/site-view1.js');
      break;
    case 'view2':
      await import('../components/site-view2.js');
      break;
    case 'view3':
      await import('../components/site-view3.js');
      break;
    default:
      switch (true) {
        case page.startsWith('test/demo'):
          page = 'dynamic';
          await import('../components/site-dynamic.js');
          break;
        case page.startsWith('test'):
          page = 'dynamic';
          await import('../components/site-dynamic.js');
          break;
        case /test/.test(page):
          page = 'dynamic';
          await import('../components/site-dynamic.js');
          break;
        default:
          page = 'view404';
          await import('../components/site-view404.js');
          break;
      }
      break;
  }

  dispatch(updatePage(page));
}

const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  };
}

let snackbarTimer;

export const showSnackbar = () => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR
  });
  clearTimeout(snackbarTimer);
  snackbarTimer = setTimeout(() =>
    dispatch({ type: CLOSE_SNACKBAR }), 3000);
};

export const updateOffline = (offline) => (dispatch, getState) => {
  // Show the snackbar, unless this is the first load of the page.
  if (getState().app.offline !== undefined) {
    dispatch(showSnackbar());
  }
  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};

export const updateLayout = (wide) => (dispatch, getState) => {
  if (getState().app.drawerOpened) {
    dispatch(updateDrawerState(false));
  }
}

export const updateDrawerState = (opened) => (dispatch, getState) => {
  if (getState().app.drawerOpened !== opened) {
    dispatch({
      type: UPDATE_DRAWER_STATE,
      opened
    });
  }
}

export const updateResourceLocation = (location) => (dispatch, getState) => {
  if (getState().app.resourceLocation !== location) {
    dispatch({
      type: UPDATE_RESOURCE_LOCATION,
      location
    });
  }
}

export const getResourceLocation = (pathname) => {
  const sanitisedPathname = (pathname === "/") ? pathname : pathname.replace(/\/$/, "");

  return `pages?path=${window.decodeURIComponent(sanitisedPathname)}&_embed=aside`
};