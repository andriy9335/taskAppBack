const Koa = require('koa');
const app = new Koa();
app.listen(9000);
app.on('error', err => {
    console.error('server error', err);
});
//# sourceMappingURL=app.js.map