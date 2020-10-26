<script>
  export let segment;
  export let navPages;

  function activePage(slug, segment) {
    const clearSlug = slug ? slug.substr(1) : '';
    if (segment === undefined && clearSlug === '') {
      return 'page'
    }
    if (segment === clearSlug) {
      return 'page';
    }
    return undefined;
  }

  $: {
    navPages = navPages.map((page) => ({
      ...page,
      active: activePage(page.url, segment),
    }));
  }
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
    {#each navPages as page}
    <li><a aria-current={page.active} href={page.url}>{page.title}</a></li>
    {/each}
	</ul>
</nav>
