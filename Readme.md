# Hello KoaJS

## Installation

- npm init -y
- npm i koa @koa/router mongoose
- npm i --save-dev nodemon

```json
{
  "name": "initializer-koajs",
  "version": "1.0.0",
  "description": "## Installation",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@koa/router": "^12.0.0",
    "koa": "^2.14.2",
    "mongoose": "^7.5.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

- index.js

```js
const Koa = require("koa");

const app = new Koa();

app.listen(8889, () => {
  console.log("KoaJS server listened on port 8889.");
});
```

- nodemon index.js
  - 如果没安装 `nodemon`，需要全局安装：
  - npm install -g nodemon ...

```js
➜  initializer-KoaJS git:(main) ✗ nodemon index.js
[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
KoaJS server listened on port 8889.
```
