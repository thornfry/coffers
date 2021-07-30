/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentEvent = /* GraphQL */ `
  mutation CreatePaymentEvent(
    $input: CreatePaymentEventInput!
    $condition: ModelPaymentEventConditionInput
  ) {
    createPaymentEvent(input: $input, condition: $condition) {
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
export const updatePaymentEvent = /* GraphQL */ `
  mutation UpdatePaymentEvent(
    $input: UpdatePaymentEventInput!
    $condition: ModelPaymentEventConditionInput
  ) {
    updatePaymentEvent(input: $input, condition: $condition) {
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
export const deletePaymentEvent = /* GraphQL */ `
  mutation DeletePaymentEvent(
    $input: DeletePaymentEventInput!
    $condition: ModelPaymentEventConditionInput
  ) {
    deletePaymentEvent(input: $input, condition: $condition) {
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
