import { GraphQLFloat, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import Order from "../models/order";

const OrderItemsType = new GraphQLObjectType({
  name: 'OrderItem',
  fields: {
    pid: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    qty: { type: GraphQLInt }
  }
});
const OrderItemsInputType = new GraphQLInputObjectType({
  name: 'OrderInputItem',
  fields: {
    pid: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    qty: { type: GraphQLInt }
  }
});
const OrderOutputType = new GraphQLObjectType({
  name: 'OrderOutput',
  fields: {
    _id: {
      type: GraphQLString
    },
    items: {
      type: new GraphQLList(OrderItemsType)
    },
    amount: {
      type: GraphQLFloat
    },
    vat: {
      type: GraphQLFloat
    }
  }
});

export const OrderMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createOrder: {
      type: OrderOutputType,
      args: {
        items: {
          type: new GraphQLList(OrderItemsInputType)
        },
        amount: {
          type: new GraphQLNonNull(GraphQLFloat)
        },
        vat: {
          type: new GraphQLNonNull(GraphQLFloat)
        }
      },
      resolve(_, args) {
        return new Promise((resolve, reject) => {
          const order = new Order({ items: args.items, amount: args.amount, vat: args.vat });

          order.save().then(data => {
            resolve(data);
          }).catch(err => {
            console.log('error : ', err);
            reject(err);
          })
        })
      }
    }
  }
})