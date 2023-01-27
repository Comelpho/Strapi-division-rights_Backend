'use strict';

/**
 * second-table controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::second-table.second-table', {
    async find (ctx) {
        const user = ctx.state.user;

        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            owner: user.id
        };

        return super.find(ctx);
    }
});
