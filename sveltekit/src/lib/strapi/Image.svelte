<script>
  const apiUrl = import.meta.env.VITE_API_URL;
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
