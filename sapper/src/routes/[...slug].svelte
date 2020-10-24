<script context="module">
  import { strapiPreload } from '../strapi';
  export async function preload(page, session) {
    const strapi = strapiPreload.bind(this);
    return strapi(page, session);
  }
</script>

<script>
  export let pageData;
</script>

<svelte:head>
  <title>{pageData.title}</title>
</svelte:head>
