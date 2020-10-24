<script>
  export let pageData;
</script>

<svelte:head>
  <title>{pageData.title}</title>
  {#if pageData.description}<meta name="description" content={pageData.description}>{/if}
  {#if pageData.ogImage}
  <meta property="og:image" content={`http://localhost:1337${pageData.ogImage.url}`}>
  {/if}
</svelte:head>
