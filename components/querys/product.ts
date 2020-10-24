import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
query($pagination: PaginationArg!) {
  products(pagination: $pagination) {
    items {
      id
      name
      price
      description
      image
      slug
    }
    count
  }
}
`;
export interface IProductItem {
  id:string,
  name: string,
  description: string,
  image: string,
  price: number,
  slug: string
}