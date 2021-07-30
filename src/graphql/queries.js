/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPaymentEvent = /* GraphQL */ `
  query GetPaymentEvent($id: ID!) {
    getPaymentEvent(id: $id) {
      id
      userId
      total
      subTotal
      tip
      description
      createdAt
      updatedAt
    }
  }
`;
export const listPaymentEvents = /* GraphQL */ `
  query ListPaymentEvents(
    $filter: ModelPaymentEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        total
        subTotal
        tip
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
