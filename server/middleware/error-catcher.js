const response = require('../utils/response');

module.exports =  async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        await response.error(ctx,err);
    }
};