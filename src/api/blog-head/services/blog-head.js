'use strict';

/**
 * blog-head service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-head.blog-head');
