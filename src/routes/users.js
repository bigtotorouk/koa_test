const jsonwebtoken = require("jsonwebtoken");
const jwt = require("koa-jwt");
const { secret } = require("../config.js");
const Router = require("koa-router");
const router = new Router({ prefix: "/api/users" });  // 路由前缀

const auth = jwt({ secret });  // jwt鉴权

router.post("/login", (ctx, next)=>{
    const id = 0;
    const username = "slider.xiao";
    const access = jsonwebtoken.sign({ id, username }, secret, { expiresIn: 60*60 });// 60* 60s
    ctx.body = { access };
});  // 获取用户列表

router.get("/info", auth, (ctx, next)=>{
    ctx.body = { id:0, username:"slider.xiao" };
});  // 创建用户（需要jwt认证）


module.exports = router;