<script>
  const apiUrl = `http://localhost:1337`;
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
