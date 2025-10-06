import { gql } from 'urql';

// Queries
export const GET_TODOS = gql`
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

export const GET_TODO = gql`
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

// Mutations
export const CREATE_TODO = gql`
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

export const UPDATE_TODO = gql`
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

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      success
    }
  }
`;