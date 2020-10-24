export async function strapiPreload(page, session) {
  const res = await this.fetch(`http://localhost:1337/pages?slug=${page.path}`);
  const data = await res.json();
  if (res.status !== 200) {
    this.error(res.status, data.message);
  }
  // empty array from strapi results in a 404 page
  if (!data || data.length === 0) {
    this.error(404, 'Page not found');
  }
  return {
    pageData: data.shift(),
  };
}
