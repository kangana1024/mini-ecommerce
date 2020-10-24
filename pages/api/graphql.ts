import { ApolloServer } from "apollo-server-micro";
import schema from '../../src/schema';

const server = new ApolloServer({
  schema, introspection: true,
  playground: true,
});

const handler = server.createHandler({ path: process.env.graphqlUrl });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;