<script>
  const apiUrl = process.env.SAPPER_APP_API_URL;
  export let pageData;
</script>

<svelte:head>
  <title>{pageData.title}</title>
  {#if pageData.description}<meta name="description" content={pageData.description}>{/if}
  {#if pageData.ogImage}
  <meta property="og:image" content={`${apiUrl}${pageData.ogImage.url}`}>
  {/if}
</svelte:head>
