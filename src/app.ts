import Koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import cors from '@koa/cors';

import schema from './graphql/schema';
import initDB from './database';

const app = new Koa();

initDB();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,

})))

app.listen(9000);

app.on('error', err => {
    console.error('server error', err)
});