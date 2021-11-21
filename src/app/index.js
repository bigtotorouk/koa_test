const Koa = require("koa");
const error = require('koa-json-error');
const app = new Koa();

const router = require("../routes")

app.use(error((err)=>{
    return {
        status: err.status,
        message: err.message,
    }
}));

app.use(router.routes()).use(router.allowedMethods())

module.exports = app