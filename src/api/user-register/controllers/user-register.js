'use strict';

/**
 * user-register controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-register.user-register');
