const apiUrl = process.env.SAPPER_APP_API_URL;

/**
 * load page content for this `page.path`
 * @param {Object} page
 * @returns {Object} `{ pageData: data }`
 */
export async function strapiPreload(page) {
  try {
    const res = await this.fetch(`${apiUrl}/pages?slug=${encodeURIComponent(page.path)}`);

    if (res.ok) {
      const [data] = await res.json();
      return {
        pageData: data,
      };
    }

    if (res.status !== 200) {
      this.error(res.status, `[${res.status}] ${decodeURIComponent(res.url)} : ${data.message}`);
      return;
    }
    // empty array from strapi results in a 404 page
    if (!data || data.length === 0) {
      this.error(404, 'Page not found');
      return;
    }
  } catch (error) {
    this.error(500, error.message);
  }
}

/**
 * load main navigation data from strapi `/navigation` endpoint
 * @returns {Object} - `{ navPages: [] }`
 */
export async function navPreload() {
  try {
    const res = await this.fetch(`${apiUrl}/navigation`);

    if (res.ok) {
      const data = await res.json();
      return {
        navPages: data.Navigation.map((page) => ({
          title: page.title,
          url: page.page.slug,
        })),
      };
    }

    return {
      navPages: [],
    };
  } catch (error) {
    console.info(`navigation laoding failed: ${error.message}`);
    return {
      navPages: [],
    }
  }
}
