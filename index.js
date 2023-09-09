const Koa = require("koa");

const app = new Koa();

app.listen(8889, () => {
  console.log("KoaJS server listened on port 8889.");
});
