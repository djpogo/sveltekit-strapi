import { env }  from '../../vars/env';
/**
 * call strapi navigation endpoint
 * @param {Object} loadOptions from sveltekit load() function
 * @returns {Object} with `props`: `navPages
 */
export async function loadNav({ fetch }) {
  try {
    const res = await fetch(`${env.apiUrl}/navigation`);
    if (res.ok) {
      const data = await res.json();
      return {
        props: {
          navPages: data.Navigation.map((page) => ({
            title: page.title,
            url: page.page.slug,
          })),
        },
      };
    }

    return {
      props: {
        navPages: [],
      },
    };
  } catch (error) {
    console.info(`navigation laoding failed: ${error.message}`);
    return {
      props: {
        navPages: [],
      }
    }
  }
};


/**
 * loadPage call strapi api for page contents
 * @param {Object} loadOptions from sveltekit load() function
 * @returns {Object} with `props`: `pageData`
 */
export async function loadPage({ page, fetch }) {
  const url = `${env.apiUrl}/pages?slug=${encodeURIComponent(page.path)}`;
  try {
    const res = await fetch(url)

    if (res.ok || res.status < 400) {
      const [data] = await res.json();
      return {
        props: {
          pageData: data,
        },
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url} [${res.status}]`),
    };
  } catch (error) {
    return {
      status: 500,
      error: new Error(error.message),
    };
  }
}
