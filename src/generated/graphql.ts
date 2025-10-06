import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTodoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type DeleteTodoResult = {
  __typename?: 'DeleteTodoResult';
  id: Scalars['ID']['output'];
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  deleteTodo: DeleteTodoResult;
  updateTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type Query = {
  __typename?: 'Query';
  todo?: Maybe<Todo>;
  todos: Array<Todo>;
};


export type QueryTodoArgs = {
  id: Scalars['ID']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UpdateTodoInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, description?: string | null, completed: boolean, createdAt: string, updatedAt: string }> };

export type GetTodoQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTodoQuery = { __typename?: 'Query', todo?: { __typename?: 'Todo', id: string, title: string, description?: string | null, completed: boolean, createdAt: string, updatedAt: string } | null };

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, title: string, description?: string | null, completed: boolean, createdAt: string, updatedAt: string } };

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, title: string, description?: string | null, completed: boolean, createdAt: string, updatedAt: string } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: { __typename?: 'DeleteTodoResult', id: string, success: boolean } };


export const GetTodosDocument = gql`
    query GetTodos {
  todos {
    id
    title
    description
    completed
    createdAt
    updatedAt
  }
}
    `;

export function useGetTodosQuery(options?: Omit<Urql.UseQueryArgs<GetTodosQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTodosQuery, GetTodosQueryVariables>({ query: GetTodosDocument, ...options });
};
export const GetTodoDocument = gql`
    query GetTodo($id: ID!) {
  todo(id: $id) {
    id
    title
    description
    completed
    createdAt
    updatedAt
  }
}
    `;

export function useGetTodoQuery(options: Omit<Urql.UseQueryArgs<GetTodoQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTodoQuery, GetTodoQueryVariables>({ query: GetTodoDocument, ...options });
};
export const CreateTodoDocument = gql`
    mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    title
    description
    completed
    createdAt
    updatedAt
  }
}
    `;

export function useCreateTodoMutation() {
  return Urql.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument);
};
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    id
    title
    description
    completed
    createdAt
    updatedAt
  }
}
    `;

export function useUpdateTodoMutation() {
  return Urql.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument);
};
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    id
    success
  }
}
    `;

export function useDeleteTodoMutation() {
  return Urql.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument);
};