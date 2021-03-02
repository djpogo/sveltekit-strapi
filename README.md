# sapper/strapi website

This is the example repository for this [blog post](https://raoulkramer.de/build-a-sapper-strapi-website) with a working
code base for a [sapper](https://sapper.svelte.dev/) frontend consuming a [strapi](https://strapi.io) api.

> **Sass support needed?**
>
> Have a look at the [sass branch](https://github.com/djpogo/sapper-strapi/tree/sass) of this repository, including the sass setup from [Sean Schertell](https://medium.com/@sean_27490)s article [Svelte / Sapper with Sass!](https://medium.com/@sean_27490/svelte-sapper-with-sass-271fff662da9).

## setup

You can use `npm run setup` in the project folder, to create the sapper .env and create/update the strapi .env file
with the JWT_SECRETs it needs. This command will not change other values in your `.env` files.

If you run this command on an existing strapi instance your backend and frontend strapi users will need to sign in again.

```bash
$ npm run setup
```

### sapper

If you run `npm run setup` a `./sapper/.env` file is created, or create it by hand:

```bash
 $ cd sapper
 $ cp .env.example .env
```
and adjust your strapi endpoint.

```bash
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

Without further action sapper will throw an error. To get around this you need to prepare your strapi instance.

### create strapi admin account

Go to [Strapi Admin](http://localhost:1337/admin), create your admin account and log in.

### create an index page and publish it

Click on `Pages` on the left hand menu and add a page. It is important to check the `IndexPage` box,
so your website has a root page.

Click on `Save` and now on `Publish`.

### setp up a navigation

Click on `Navigation` in the menu left and add your new created index page to the navigation.

Click on `Save` and on `Publish`.

Now sapper application will show you a navigation menu and a blank page, ready for your project.