'use strict';

/**
 * first-table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::first-table.first-table');
