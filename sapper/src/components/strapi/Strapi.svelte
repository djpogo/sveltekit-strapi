<script>
  import SimpleText from './SimpleText.svelte';
  import SimpleImage from './SimpleImage.svelte';

  const componentMap = {
    'page.simple-text': SimpleText,
    'page.simple-image': SimpleImage,
  };

  export let contents = [];
</script>

{#each contents as content}
<svelte:component
  this={componentMap[content.__component]}
  {content}
/>
{/each}
