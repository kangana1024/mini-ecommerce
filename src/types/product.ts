import { GraphQLFloat, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import Product from "../models/product";

const PaginationArgType = new GraphQLInputObjectType({
  name: 'PaginationArg',
  fields: {
    offset: {
      type: GraphQLInt,
      description: "Skip n rows."
    },
    first: {
      type: GraphQLInt,
      description: "First n rows after the offset."
    },
  }
});

const PaginatedListType = (ItemType) => new GraphQLObjectType({
  name: 'Paginated' + ItemType,
  fields: {
    count: { type: GraphQLInt },
    items: { type: new GraphQLList(ItemType) }
  }
});

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    image: { type: GraphQLString },
    slug: { type: GraphQLString }
  }
});

export const ProductQueryTypes = {
  products: {
    type: PaginatedListType(ProductType),
    args: {
      pagination: {
        type: PaginationArgType,
        defaultValue: { offset: 0, first: 10 }
      },
    },
    resolve: (_, args) => {
      const { offset, first } = args.pagination;
      return {
        items: Product.find().skip(offset).limit(first).exec(),
        count: Product.count({})
      }
    },
  }
}



