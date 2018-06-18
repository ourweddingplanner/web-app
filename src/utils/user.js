import { store } from '../store.js';
import { selectResource, fetchContentIfNeeded, invalidateResource } from '../actions/content.js';

// See https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
export const installAuthentication = async (userUpdatedCallback) => {
    // auth.addEventListener('login', (user) => userUpdatedCallback(user));
    // auth.addEventListener('logout', () => userUpdatedCallback(false));

    const resourceType = "authenticate";

    await store.dispatch(selectResource(resourceType));

    const resource = await store.dispatch(fetchContentIfNeeded(resourceType));

    console.log("resource", resource);

    // const uuid = "8f868eeb-079e-4fde-bb3f-048505a06ace";
    // const uuid = resource.content[0].uuid;

    const user = resource.content[0];

    if (resource.content[0].message_previews.length < 1) {
      console.error(`User "${user.uuid}" does not have any messages associated with them`);
    }

    // userUpdatedCallback(uuid);
    userUpdatedCallback(user)
  };
  