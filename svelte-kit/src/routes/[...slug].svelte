<script context="module">
  import { loadPage } from './_strapi';
  export async function load(loadOptions) {
    return await loadPage(loadOptions);
  };
</script>

<script>
  import HtmlHead from '$lib/HtmlHead.svelte';
  import Strapi from '$lib/Strapi.svelte';
  export let pageData;
</script>

<HtmlHead {pageData} />

<main>
  <Strapi contents={pageData.contents} />
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
