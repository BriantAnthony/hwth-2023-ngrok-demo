'use strict';

/**
 * health-check controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::health-check.health-check');
