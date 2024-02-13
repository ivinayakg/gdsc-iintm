'use strict';

/**
 * user-register service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-register.user-register');
