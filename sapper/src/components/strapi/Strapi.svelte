<script>
  /**
   * StrapiComponents
   * by `import SimpleText from './SimpleText.svelte'` all strapi components
   * will end up in one strapi component.
   * This class uses "dynamic" imports to force build process to split the components
   * into their own files.
   * If you add a new strapi component, you need to extend the switch statement with this component.
   *
   * With this setup a _costy_ component will only land in your visitors browser if it is displayed.
   */
  class StrapiComponents {
    constructor() {
      this._components = {};
    }

    async get(component) {
      if (this._components[component]) {
        return this._components[component]
      }

      switch (component) {
        case 'page.simple-text':
          this._components[component] = await import('./SimpleText.svelte');
          break;
        case 'page.simple-image':
          this._components[component] = await import('./SimpleImage.svelte');
          break;
        default:
          throw Error(`Component "${component}" unknown`);
      }

      return this.get(component);
    }
  }

  const strapiComponents = new StrapiComponents();

  export let contents = [];
</script>

{#each contents as content}
{#await strapiComponents.get(content.__component) then c}
<svelte:component
  this={c.default}
  {content}
/>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
{/each}
