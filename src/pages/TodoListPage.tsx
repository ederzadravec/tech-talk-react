import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetTodosQuery, useDeleteTodoMutation } from '#/generated/graphql';
import { 
  PageWrapper, 
  Container, 
  PageTitle,
  Card,
  Button,
  ButtonGroup,
  Loading,
  EmptyState,
  Alert,
  TodoItem
} from '#/components';

const TodoListPage: React.FC = () => {
  const navigate = useNavigate();
  const [{ data, fetching, error }, refetchTodos] = useGetTodosQuery();
  const [, deleteTodo] = useDeleteTodoMutation();

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteTodo({ id });
      if (result.error) {
        alert('Erro ao excluir todo: ' + result.error.message);
      } else {
        // Refetch todos after successful deletion
        refetchTodos({ requestPolicy: 'network-only' });
      }
    } catch {
      alert('Erro inesperado ao excluir todo');
    }
  };

  if (fetching) {
    return (
      <PageWrapper>
        <Container>
          <PageTitle>Meus Todos</PageTitle>
          <Loading />
        </Container>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <Container>
          <PageTitle>Meus Todos</PageTitle>
          <Alert variant="danger">
            Erro ao carregar todos: {error.message}
          </Alert>
          <Button onClick={() => refetchTodos({ requestPolicy: 'network-only' })}>
            Tentar novamente
          </Button>
        </Container>
      </PageWrapper>
    );
  }

  const todos = data?.todos || [];

  return (
    <PageWrapper>
      <Container>
        <PageTitle>Meus Todos</PageTitle>
        
        <Card>
          <ButtonGroup>
            <Button 
              variant="primary" 
              onClick={() => navigate('/create')}
            >
              ✨ Criar Novo Todo
            </Button>
            <Button 
              variant="outline" 
              onClick={() => refetchTodos({ requestPolicy: 'network-only' })}
            >
              🔄 Atualizar Lista
            </Button>
          </ButtonGroup>
        </Card>

        {todos.length === 0 ? (
          <Card>
            <EmptyState
              icon="📝"
              title="Nenhum todo encontrado. Que tal criar o primeiro?"
            >
              <Button 
                variant="primary" 
                onClick={() => navigate('/create')}
              >
                Criar Primeiro Todo
              </Button>
            </EmptyState>
          </Card>
        ) : (
          <>
            {todos.map((todo) => (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                onDelete={handleDelete}
              />
            ))}
          </>
        )}
      </Container>
    </PageWrapper>
  );
};

export default TodoListPage;