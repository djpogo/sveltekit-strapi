<script>
  const apiUrl = process.env.SAPPER_APP_API_URL;
  export let content;
</script>

<img
  src={`${apiUrl}${content.image.url}`}
  alt={content.image.alternativeText}
>

<style>
  img {
    width: 100%;
    height: auto;
  }
</style>
