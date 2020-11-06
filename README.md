# sapper/strapi website

This is the example repository for this [blog post](https://raoulkramer.de/build-a-sapper-strapi-website) with a working
code base for a [sapper](https://sapper.svelte.dev/) frontend consuming a [strapi](https://strapi.io) api.

## setup

You can use `npm run setup` in the project folder, to create/update the strapi .env file
with the JWT_SECRETs it needs. This command will not change other values in your `./strapi/.env` file.

If you run this command on an existing strapi instance your backend and frontend strapi users will need to sign in again.

```bash
$ npm run setup
```

### sapper

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

```bash
 $ cd strapi
 $ cp .env.example .env
 $ # generate 2 jwt secrets for ADMIN_JWT_SECRET and JWT_SECRET
 $ npm ci
 $ npm run dev
```

For your information: I duplicate strapis `npm run develop` to a `npm run dev` command,
because many other frameworks start with `npm run dev`.

Strapi installation was created with the `--quickstart` option, for now it uses a sqlite database.

If you want to use a different database have a look at [Databases Documentation](https://strapi.io/documentation/v3.x/guides/databases.html) at the strapi documentation site.