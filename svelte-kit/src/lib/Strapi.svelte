<script>
  import Text from './strapi/Text.svelte';
  import Image from './strapi/Image.svelte';

  const componentMap = {
    'page.text': Text,
    'page.image': Image,
  };

  export let contents = [];
</script>

{#each contents as content}
<svelte:component
  this={componentMap[content.__component]}
  {content}
/>
{/each}
