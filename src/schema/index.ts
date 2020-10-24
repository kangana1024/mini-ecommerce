// import { makeExecutableSchema } from 'apollo-server-micro';
// import ProductsDef from '../types/product';

import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { OrderMutationType } from "../types/order";
import { ProductQueryTypes } from "../types/product";


// import ProductResolver from '../resolvers/product';


// export default makeExecutableSchema({
//   typeDefs: [ProductsDef],
//   resolvers: { ...ProductResolver },
// });

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    ...ProductQueryTypes,
  },
});

// const MutationType = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     ...OrderMutationType.getFields
//   }
// });

const Schema = new GraphQLSchema({
  query: QueryType,
  mutation: OrderMutationType
});

export default Schema;