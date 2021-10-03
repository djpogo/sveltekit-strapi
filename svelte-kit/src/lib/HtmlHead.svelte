<script>
  import { env } from '../vars/env';
  export let pageData;
</script>

<svelte:head>
  <title>{pageData.title}</title>
  {#if pageData.description}<meta name="description" content={pageData.description}>{/if}
  {#if pageData.ogImage}
  <meta property="og:image" content={`${env.apiUrl}${pageData.ogImage.url}`}>
  {/if}
</svelte:head>
