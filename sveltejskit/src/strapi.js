const apiUrl = `http://localhost:1337`;

export async function strapiPreload(page, fetch) {
  const res = await fetch(`${apiUrl}/pages?slug=${encodeURIComponent(page.path)}`);
  const data = await res.json();
  if (res.status !== 200) {
    this.error(res.status, `[${res.status}] ${decodeURIComponent(res.url)} : ${data.message}`);
    return;
  }
  // empty array from strapi results in a 404 page
  if (!data || data.length === 0) {
    this.error(404, 'Page not found');
    return;
  }
  return {
    pageData: data.shift(),
  };
}

export async function navPreload(fetch) {
  const res = await fetch(`${apiUrl}/navigation`);
  const data = await res.json();
  if (res.status !== 200) {
    console.info(res.status, `[${res.status}] ${decodeURIComponent(res.url)} : ${data.message}`);
    return {
      navPages: [],
    };
  }
  return {
    navPages: data.Navigation.map((page) => ({
      title: page.title,
      url: page.page.slug,
    })),
  };
}
