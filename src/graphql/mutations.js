/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVest = /* GraphQL */ `
  mutation CreateVest(
    $input: CreateVestInput!
    $condition: ModelVestConditionInput
  ) {
    createVest(input: $input, condition: $condition) {
      test_date
      test_type
      user_id
      id
      test_name
      createdAt
      updatedAt
    }
  }
`;
export const updateVest = /* GraphQL */ `
  mutation UpdateVest(
    $input: UpdateVestInput!
    $condition: ModelVestConditionInput
  ) {
    updateVest(input: $input, condition: $condition) {
      test_date
      test_type
      user_id
      id
      test_name
      createdAt
      updatedAt
    }
  }
`;
export const deleteVest = /* GraphQL */ `
  mutation DeleteVest(
    $input: DeleteVestInput!
    $condition: ModelVestConditionInput
  ) {
    deleteVest(input: $input, condition: $condition) {
      test_date
      test_type
      user_id
      id
      test_name
      createdAt
      updatedAt
    }
  }
`;
