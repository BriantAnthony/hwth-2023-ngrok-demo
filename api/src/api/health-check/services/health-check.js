'use strict';

/**
 * health-check service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::health-check.health-check');
