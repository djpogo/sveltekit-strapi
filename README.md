# SvelteKit and strapi.io website

This is the example project to this blog post [SvelteKit & Strapi](https://raoulkramer.de/build-a-sveltekit-strapi-website).

## issues

**SvelteKit** is in early development, please have a look at the [SvelteKit Docs](https://kit.svelte.dev/docs) and [SvelteKit Github](https://github.com/sveltejs/kit) to see it's progress.

Right now **the `apiUrl` is hardcoded** in my SvelteKit code. Search for `// TODO` to find the spots you need to alter.

## setup

You can use `npm run setup` in the project folder, to ~~create the sapper .env and~~ create/update the strapi .env file
with the JWT_SECRETs it needs. This command will not change other values in your `.env` files.

If you run this command on an existing strapi instance your backend and frontend strapi users will need to sign in again.

```bash
$ npm run setup
```

### SvelteKit


```bash
 $ cd sveltekit
 $ npm ci
 $ npm run dev
```

### strapi

Please run `npm run setup` before you setup strapi, to create a suitable `.env` file.

```bash
 $ npm run setup
 $ cd strapi
 $ npm ci
 $ npm run build
 $ npm run dev
```

For your information: I duplicate strapis `npm run develop` to a `npm run dev` command,
because many other frameworks start with `npm run dev`.

Strapi installation was created with the `--quickstart` option, for now it uses a sqlite database.

If you want to use a different database have a look at [Databases Documentation](https://strapi.io/documentation/v3.x/guides/databases.html) at the strapi documentation site.

## first steps

You need to configure your strapi installation before SvelteKit will show anything.

### create strapi admin account

Go to [Strapi Admin](http://localhost:1337/admin), create your admin account and log in.

### make pages and navigation public readable

Click on `Settings` and `Roles` and choose `Public`. On `Navigation` allow `find` action, on `Pages` allow `findone`. Otherwise strapi will always return a `403` error.

### create an index page and publish it

Click on `Pages` on the left hand menu and add a page. It is important to check the `IndexPage` box,
so your website has a root page.

Click on `Save` and now on `Publish`.

### setp up a navigation

Click on `Navigation` in the menu left and add your new created index page to the navigation.

Click on `Save` and on `Publish`.

Now SvelteKit application will show you a navigation menu and a blank page, ready for your project.