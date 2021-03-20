/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVest = /* GraphQL */ `
  query GetVest($test_date: AWSDate!, $test_type: Int!, $id: ID!) {
    getVest(test_date: $test_date, test_type: $test_type, id: $id) {
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
export const listVests = /* GraphQL */ `
  query ListVests(
    $test_date: AWSDate
    $test_typeId: ModelVestPrimaryCompositeKeyConditionInput
    $filter: ModelVestFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVests(
      test_date: $test_date
      test_typeId: $test_typeId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        test_date
        test_type
        user_id
        id
        test_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lSIList1 = /* GraphQL */ `
  query LSIList1(
    $test_date: AWSDate
    $test_typeUser_idId: ModelVestTestLSI1CompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LSIList1(
      test_date: $test_date
      test_typeUser_idId: $test_typeUser_idId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        test_date
        test_type
        user_id
        id
        test_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lSIList2 = /* GraphQL */ `
  query LSIList2(
    $test_date: AWSDate
    $test_typeUser_id: ModelVestTestLSI2CompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LSIList2(
      test_date: $test_date
      test_typeUser_id: $test_typeUser_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        test_date
        test_type
        user_id
        id
        test_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lSIList3 = /* GraphQL */ `
  query LSIList3(
    $test_date: AWSDate
    $test_type: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LSIList3(
      test_date: $test_date
      test_type: $test_type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        test_date
        test_type
        user_id
        id
        test_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lSIList4 = /* GraphQL */ `
  query LSIList4(
    $test_type: Int
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LSIList4(
      test_type: $test_type
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        test_date
        test_type
        user_id
        id
        test_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
