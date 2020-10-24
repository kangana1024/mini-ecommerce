import gql from "graphql-tag";

export const CREATE_ORDER = gql`
mutation createOrder($items: [OrderInputItem!],$amount: Float!,$vat: Float!) {
  createOrder(
    items: $items
    amount: $amount
    vat: $vat
  ){
    _id
  }
}
`;