import type { Todo, CreateTodoInput, UpdateTodoInput } from './todo';

// GraphQL Query Response Types
export interface GetTodosResponse {
  todos: Todo[];
}

export interface GetTodoResponse {
  todo: Todo;
}

// GraphQL Mutation Response Types
export interface CreateTodoResponse {
  createTodo: Todo;
}

export interface UpdateTodoResponse {
  updateTodo: Todo;
}

export interface DeleteTodoResponse {
  deleteTodo: {
    id: string;
    success: boolean;
  };
}

// Variables for GraphQL operations
export interface GetTodoVariables {
  id: string;
}

export interface CreateTodoVariables {
  input: CreateTodoInput;
}

export interface UpdateTodoVariables {
  input: UpdateTodoInput;
}

export interface DeleteTodoVariables {
  id: string;
}