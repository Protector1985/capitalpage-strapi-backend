'use strict';

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({strapi}) => ({
    //custom code to be able to find route by slug 
    async findOne(context) {
        
        const { id } = context.params;
        console.log(id);
        const entity = await strapi.db.query("api::post.post").findOne({
            where: { slug: id }
        })

        const sanitizedEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizedEntity);
    }
}));
