const { port } = require('./config/config.default')
const app = require("./app")

app.listen(port, ()=>console.log("server is running on http://localhost:${port}"));