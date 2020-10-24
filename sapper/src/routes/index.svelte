<script context="module">
  import { strapiPreload } from '../strapi';
  export async function preload(page, session) {
    const strapi = strapiPreload.bind(this);
    return strapi(page, session);
  }
</script>

<script>
  import HtmlHead from '../components/HtmlHead.svelte';
  import Strapi from '../components/strapi/Strapi.svelte';

  export let pageData;
</script>

<HtmlHead {pageData} />

<Strapi contents={pageData.contents} />
