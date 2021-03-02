<script>
  import Text from './Text.svelte';
  import Image from './Image.svelte';

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
