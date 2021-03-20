/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateVestInput = {
  test_date: string;
  test_type: number;
  user_id: string;
  id?: string | null;
  test_name: string;
};

export type ModelVestConditionInput = {
  user_id?: ModelIDInput | null;
  test_name?: ModelStringInput | null;
  and?: Array<ModelVestConditionInput | null> | null;
  or?: Array<ModelVestConditionInput | null> | null;
  not?: ModelVestConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Vest = {
  __typename: "Vest";
  test_date?: string;
  test_type?: number;
  user_id?: string;
  id?: string;
  test_name?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateVestInput = {
  test_date?: string | null;
  test_type?: number | null;
  user_id?: string | null;
  id: string;
  test_name?: string | null;
};

export type DeleteVestInput = {
  id?: string | null;
};

export type ModelVestPrimaryCompositeKeyConditionInput = {
  eq?: ModelVestPrimaryCompositeKeyInput | null;
  le?: ModelVestPrimaryCompositeKeyInput | null;
  lt?: ModelVestPrimaryCompositeKeyInput | null;
  ge?: ModelVestPrimaryCompositeKeyInput | null;
  gt?: ModelVestPrimaryCompositeKeyInput | null;
  between?: Array<ModelVestPrimaryCompositeKeyInput | null> | null;
  beginsWith?: ModelVestPrimaryCompositeKeyInput | null;
};

export type ModelVestPrimaryCompositeKeyInput = {
  test_type?: number | null;
  id?: string | null;
};

export type ModelVestFilterInput = {
  test_date?: ModelStringInput | null;
  test_type?: ModelIntInput | null;
  user_id?: ModelIDInput | null;
  id?: ModelIDInput | null;
  test_name?: ModelStringInput | null;
  and?: Array<ModelVestFilterInput | null> | null;
  or?: Array<ModelVestFilterInput | null> | null;
  not?: ModelVestFilterInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelVestConnection = {
  __typename: "ModelVestConnection";
  items?: Array<Vest | null> | null;
  nextToken?: string | null;
};

export type ModelVestTestLSI1CompositeKeyConditionInput = {
  eq?: ModelVestTestLSI1CompositeKeyInput | null;
  le?: ModelVestTestLSI1CompositeKeyInput | null;
  lt?: ModelVestTestLSI1CompositeKeyInput | null;
  ge?: ModelVestTestLSI1CompositeKeyInput | null;
  gt?: ModelVestTestLSI1CompositeKeyInput | null;
  between?: Array<ModelVestTestLSI1CompositeKeyInput | null> | null;
  beginsWith?: ModelVestTestLSI1CompositeKeyInput | null;
};

export type ModelVestTestLSI1CompositeKeyInput = {
  test_type?: number | null;
  user_id?: string | null;
  id?: string | null;
};

export type ModelVestTestLSI2CompositeKeyConditionInput = {
  eq?: ModelVestTestLSI2CompositeKeyInput | null;
  le?: ModelVestTestLSI2CompositeKeyInput | null;
  lt?: ModelVestTestLSI2CompositeKeyInput | null;
  ge?: ModelVestTestLSI2CompositeKeyInput | null;
  gt?: ModelVestTestLSI2CompositeKeyInput | null;
  between?: Array<ModelVestTestLSI2CompositeKeyInput | null> | null;
  beginsWith?: ModelVestTestLSI2CompositeKeyInput | null;
};

export type ModelVestTestLSI2CompositeKeyInput = {
  test_type?: number | null;
  user_id?: string | null;
};

export type ModelIntKeyConditionInput = {
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateVestMutation = {
  __typename: "Vest";
  test_date: string;
  test_type: number;
  user_id: string;
  id: string;
  test_name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVestMutation = {
  __typename: "Vest";
  test_date: string;
  test_type: number;
  user_id: string;
  id: string;
  test_name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVestMutation = {
  __typename: "Vest";
  test_date: string;
  test_type: number;
  user_id: string;
  id: string;
  test_name: string;
  createdAt: string;
  updatedAt: string;
};

export type GetVestQuery = {
  __typename: "Vest";
  test_date: string;
  test_type: number;
  user_id: string;
  id: string;
  test_name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListVestsQuery = {
  __typename: "ModelVestConnection";
  items?: Array<{
    __typename: "Vest";
    test_date: string;
    test_type: number;
    user_id: string;
    id: string;
    test_name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type LSIList1Query = {
  __typename: "ModelVestConnection";
  items?: Array<{
    __typename: "Vest";
    test_date: string;
    test_type: number;
    user_id: string;
    id: string;
    test_name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type LSIList2Query = {
  __typename: "ModelVestConnection";
  items?: Array<{
    __typename: "Vest";
    test_date: string;
    test_type: number;
    user_id: string;
    id: string;
    test_name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type LSIList3Query = {
  __typename: "ModelVestConnection";
  items?: Array<{
    __typename: "Vest";
    test_date: string;
    test_type: number;
    user_id: string;
    id: string;
    test_name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type LSIList4Query = {
  __typename: "ModelVestConnection";
  items?: Array<{
    __typename: "Vest";
    test_date: string;
    test_type: number;
    user_id: string;
    id: string;
    test_name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateVestSubscription = {
  __typename: "Vest";
  test_date: string;
  test_type: number;
  user_id: string;
  id: string;
  test_name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVestSubscription = {
  __typename: "Vest";
  test_date: string;
  test_type: number;
  user_id: string;
  id: string;
  test_name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVestSubscription = {
  __typename: "Vest";
  test_date: string;
  test_type: number;
  user_id: string;
  id: string;
  test_name: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateVest(
    input: CreateVestInput,
    condition?: ModelVestConditionInput
  ): Promise<CreateVestMutation> {
    const statement = `mutation CreateVest($input: CreateVestInput!, $condition: ModelVestConditionInput) {
        createVest(input: $input, condition: $condition) {
          __typename
          test_date
          test_type
          user_id
          id
          test_name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVestMutation>response.data.createVest;
  }
  async UpdateVest(
    input: UpdateVestInput,
    condition?: ModelVestConditionInput
  ): Promise<UpdateVestMutation> {
    const statement = `mutation UpdateVest($input: UpdateVestInput!, $condition: ModelVestConditionInput) {
        updateVest(input: $input, condition: $condition) {
          __typename
          test_date
          test_type
          user_id
          id
          test_name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVestMutation>response.data.updateVest;
  }
  async DeleteVest(
    input: DeleteVestInput,
    condition?: ModelVestConditionInput
  ): Promise<DeleteVestMutation> {
    const statement = `mutation DeleteVest($input: DeleteVestInput!, $condition: ModelVestConditionInput) {
        deleteVest(input: $input, condition: $condition) {
          __typename
          test_date
          test_type
          user_id
          id
          test_name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVestMutation>response.data.deleteVest;
  }
  async GetVest(
    test_date: string,
    test_type: number,
    id: string
  ): Promise<GetVestQuery> {
    const statement = `query GetVest($test_date: AWSDate!, $test_type: Int!, $id: ID!) {
        getVest(test_date: $test_date, test_type: $test_type, id: $id) {
          __typename
          test_date
          test_type
          user_id
          id
          test_name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      test_date,
      test_type,
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVestQuery>response.data.getVest;
  }
  async ListVests(
    test_date?: string,
    test_typeId?: ModelVestPrimaryCompositeKeyConditionInput,
    filter?: ModelVestFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListVestsQuery> {
    const statement = `query ListVests($test_date: AWSDate, $test_typeId: ModelVestPrimaryCompositeKeyConditionInput, $filter: ModelVestFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listVests(test_date: $test_date, test_typeId: $test_typeId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (test_date) {
      gqlAPIServiceArguments.test_date = test_date;
    }
    if (test_typeId) {
      gqlAPIServiceArguments.test_typeId = test_typeId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVestsQuery>response.data.listVests;
  }
  async LSIList1(
    test_date?: string,
    test_typeUser_idId?: ModelVestTestLSI1CompositeKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelVestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<LSIList1Query> {
    const statement = `query LSIList1($test_date: AWSDate, $test_typeUser_idId: ModelVestTestLSI1CompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelVestFilterInput, $limit: Int, $nextToken: String) {
        LSIList1(test_date: $test_date, test_typeUser_idId: $test_typeUser_idId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (test_date) {
      gqlAPIServiceArguments.test_date = test_date;
    }
    if (test_typeUser_idId) {
      gqlAPIServiceArguments.test_typeUser_idId = test_typeUser_idId;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <LSIList1Query>response.data.LSIList1;
  }
  async LSIList2(
    test_date?: string,
    test_typeUser_id?: ModelVestTestLSI2CompositeKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelVestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<LSIList2Query> {
    const statement = `query LSIList2($test_date: AWSDate, $test_typeUser_id: ModelVestTestLSI2CompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelVestFilterInput, $limit: Int, $nextToken: String) {
        LSIList2(test_date: $test_date, test_typeUser_id: $test_typeUser_id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (test_date) {
      gqlAPIServiceArguments.test_date = test_date;
    }
    if (test_typeUser_id) {
      gqlAPIServiceArguments.test_typeUser_id = test_typeUser_id;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <LSIList2Query>response.data.LSIList2;
  }
  async LSIList3(
    test_date?: string,
    test_type?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelVestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<LSIList3Query> {
    const statement = `query LSIList3($test_date: AWSDate, $test_type: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelVestFilterInput, $limit: Int, $nextToken: String) {
        LSIList3(test_date: $test_date, test_type: $test_type, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (test_date) {
      gqlAPIServiceArguments.test_date = test_date;
    }
    if (test_type) {
      gqlAPIServiceArguments.test_type = test_type;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <LSIList3Query>response.data.LSIList3;
  }
  async LSIList4(
    test_type?: number,
    id?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelVestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<LSIList4Query> {
    const statement = `query LSIList4($test_type: Int, $id: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelVestFilterInput, $limit: Int, $nextToken: String) {
        LSIList4(test_type: $test_type, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (test_type) {
      gqlAPIServiceArguments.test_type = test_type;
    }
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <LSIList4Query>response.data.LSIList4;
  }
  OnCreateVestListener: Observable<
    SubscriptionResponse<OnCreateVestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVest {
        onCreateVest {
          __typename
          test_date
          test_type
          user_id
          id
          test_name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateVestSubscription>>;

  OnUpdateVestListener: Observable<
    SubscriptionResponse<OnUpdateVestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVest {
        onUpdateVest {
          __typename
          test_date
          test_type
          user_id
          id
          test_name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateVestSubscription>>;

  OnDeleteVestListener: Observable<
    SubscriptionResponse<OnDeleteVestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVest {
        onDeleteVest {
          __typename
          test_date
          test_type
          user_id
          id
          test_name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteVestSubscription>>;
}
