<script context="module">
  import { navPreload } from '../strapi';
	export const prerender = true;
  export async function load({ page, session, fetch }) {
    return {
      props: {
        ...(await navPreload(fetch)),
      },
    };
  }
</script>

<script>
  import Nav from '../components/Nav.svelte';
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
