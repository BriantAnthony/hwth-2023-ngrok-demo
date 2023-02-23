'use strict';

/**
 * health-check router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::health-check.health-check');
