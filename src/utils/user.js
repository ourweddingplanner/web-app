// See https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
export const installAuthentication = (userUpdatedCallback) => {
    // auth.addEventListener('login', (user) => userUpdatedCallback(user));
    // auth.addEventListener('logout', () => userUpdatedCallback(false));

    const user = 1234567812345678; // temporary
    userUpdatedCallback(user);
  };
  