'use strict';

/**
 * third-table controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::third-table.third-table', {
    async find (ctx) {
        const user = ctx.state.user;

        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            owner: user.id
        };

        return super.find(ctx);
    }
});
