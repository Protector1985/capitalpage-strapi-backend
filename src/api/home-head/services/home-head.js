'use strict';

/**
 * home-head service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-head.home-head');
