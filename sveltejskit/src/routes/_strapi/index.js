const apiUrl = 'http://localhost:1337'; // TODO put apiEndpoint in .env file

/**
 * call strapi navigation endpoint
 * @param {Object} loadOptions from sveltekit load() function
 * @returns {Object} with `props`: `navPages
 */
export async function loadNav({ fetch }) {
  const res = await fetch(`${apiUrl}/navigation`);
  if (res.ok) {
    return {
      props: {
        navPages: await res.json(),
      },
    };
  }

  return {
    props: {
      navPages: [],
    },
  };
};


/**
 * loadPage call strapi api for page contents
 * @param {Object} loadOptions from sveltekit load() function
 * @returns {Object} with `props`: `page`
 */
export async function loadPage({ page, fetch }) {
  const url = `${apiUrl}/pages?slug=${encodeURIComponent(page.path)}`;
  const res = await fetch(url);

  if (res.ok || res.status < 400) {
    return {
      props: {
        pageData: await [res.json()],
      },
    };
  }

  return {
    props: {
      status: res.status,
      error: new Error(`Could not load ${url} [${res.status}]`),
    },
  };
}
