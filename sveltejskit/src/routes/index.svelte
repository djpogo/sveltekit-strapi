<script context="module">
  export const prerender = true;
  import { strapiPreload } from '../strapi';
  export async function load({page, session, fetch}) {
    console.log(await strapiPreload(page, fetch));
    return {
      props: {
        ...(await strapiPreload(page, fetch)),
      },
    };
  };
</script>

<script>
  import HtmlHead from '../components/HtmlHead.svelte';
  import Strapi from '../components/strapi/Strapi.svelte';

  export let pageData;
</script>

<HtmlHead {pageData} />

<Strapi contents={pageData.contents} />
