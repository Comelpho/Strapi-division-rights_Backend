'use strict';

/**
 * first-table controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::first-table.first-table', {
    async find (ctx) {
        const user = ctx.state.user;

        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            owner: user.id
        };

        return super.find(ctx);
    }
});
