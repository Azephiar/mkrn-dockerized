exports.success = async (ctx, data) => {
    ctx.status = 200;

    if(data && data !== undefined) { ctx.body = data } else { ctx.body = "" }
};

exports.error = async (ctx, error, code) => {
    if(!code) code = 403;

    ctx.status = code;

    if(error) { ctx.body = error } else { ctx.body = "" }
};