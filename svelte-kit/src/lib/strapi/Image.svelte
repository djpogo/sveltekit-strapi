<script>
  import { env } from '../../vars/env'; // import.meta.env.VITE_API_URL;
  export let content;
</script>

<img
  src={`${env.apiUrl}${content.image.url}`}
  alt={content.image.alternativeText}
>

<style>
  img {
    width: 100%;
    height: auto;
  }
</style>
