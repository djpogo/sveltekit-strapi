<script context="module">
  import { loadNav } from './_strapi';
  export async function load(loadOptions) {
    return loadNav(loadOptions);
  }
</script>

<script>
  import Nav from '$lib/Nav.svelte';
  export let navPages;
</script>

<Nav {navPages} />

<main>
  <slot></slot>
</main>

<style>
  	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
