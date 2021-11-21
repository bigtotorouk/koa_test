const Router = require("koa-router");
const router = new Router({ prefix: "/api/posts" });  // 路由前缀

let posts = [
    {
        id:0, title:"title-name"
    }
]

router.get("/", (ctx, next)=>{
    ctx.body = posts;
});

router.get("/:id/", (ctx, next)=>{
    const postId = ctx.request.params.id;
    ctx.body = posts[postId];
});


module.exports = router;