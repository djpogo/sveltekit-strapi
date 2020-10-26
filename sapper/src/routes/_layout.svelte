<script context="module">
import { navPreload } from '../strapi';
export async function preload(page, session) {
    const strapi = navPreload.bind(this);
    return strapi(page, session);
}
</script>

<script>
	import Nav from '../components/Nav.svelte';
  export let segment;
  export let navPages;
</script>

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

<Nav {navPages} />

<main>
	<slot></slot>
</main>
