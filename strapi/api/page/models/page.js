'use strict';
const slugify = require('@sindresorhus/slugify');

/**
 * create a url friendly page slug
 * @param {PageModel} model
 */
async function createPageSlug(model) {
  let slugPrefix = '/';
  let parentPage;
  let pageSlug = '';
  // check if a parent page is set, so prefix the parent pages slug
  if (model.parentPage) {
    parentPage = await strapi.query('page').findOne({ id: model.parentPage });
    slugPrefix = parentPage.slug;
  }
  // create page slug
  if (model.slug === '') {
    pageSlug = `${slugPrefix}${slugify(model.name)}`;
  } else {
    // if a parent page exists, only reuse last part of slug
    if (parentPage) {
      pageSlug = `${slugPrefix}${slugify(model.slug.split('/').pop())}`
    } else {
      pageSlug = `${model.slug.split('/').map((partial) => slugify(partial)).join('/')}`;
    }
  }
  return pageSlug.replace(/\/[\/]*/g, '/');
}

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(model) {
      if (model.name) {
        model.slug = await createPageSlug(model);
      }
    },
    async beforeUpdate(params, model) {
      if (model.slug || model.name) {
        model.slug = await createPageSlug(model);
      }
    }
  }
};
