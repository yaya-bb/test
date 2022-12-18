module.exports = (option, app) => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
        } catch (error) {
            // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
            ctx.app.emit('error', error, ctx);

            ctx.status = error.status;
            if (ctx.status === 422) {
                return ctx.body = {
                    msg: "fail",
                    data: error.errors
                }
            }
            ctx.body = {
                msg: "fail",
                data: error.message
            }
        }
    }
};