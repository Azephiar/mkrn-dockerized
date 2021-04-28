const chalk = require('chalk');
const util = require('util');


module.exports = async (ctx, next) => {
    let url = ctx.req.url;
    let method = ctx.req.method;

    let now = new Date();
    let hour = (now.getHours() < 10 ? '0' : '') + now.getHours();
    let minute = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    let day = (now.getDate() + "/" + (now.getMonth() + 1));

    try {
        await next();
    }catch(e){
        console.log(e);
    }

    let ms = new Date() - now;
    let status = ctx.status;

    let color = chalk.underline.red('%s');

    if (status == 404) {
        color = chalk.underline.yellow('%s');
    } else if (status >= 200 && status < 400) {
        color = chalk.underline.green('%s');
    } else if (status == 403) {
        color = chalk.underline.magenta('%s');
    }

    console.log(chalk.underline('[%s:%s - %s] @%s "%s" ') + color + ' - %sms', hour, minute, day, method, url, status, ms);

    if (method == "POST") {
        console.log(chalk.underline('%s'), "REQUEST:");
        console.log(util.inspect(ctx.request.body, false, null));
    }

    console.log(chalk.underline('%s'), "RESPONSE:");
    console.log(util.inspect(ctx.body, false, null));
};