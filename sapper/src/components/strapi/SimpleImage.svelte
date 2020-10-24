<script>
  export let content;
</script>

<img
  src={`http://localhost:1337${content.image.url}`}
  alt={content.image.alternativeText}
>

<style>
  img {
    width: 100%;
    height: auto;
  }
</style>
