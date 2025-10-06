import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Todo } from '#/generated/graphql';
import { Button } from '#/components';
import {
  TodoItemContainer,
  TodoContent,
  TodoDetails,
  TodoTitle,
  TodoDescription,
  TodoMeta,
  TodoActions,
  StatusBadge
} from './styled';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este todo?')) {
      onDelete(todo.id);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <TodoItemContainer completed={todo.completed}>
      <TodoContent>
        <TodoDetails>
          <TodoTitle completed={todo.completed}>
            {todo.title}
          </TodoTitle>
          {todo.description && (
            <TodoDescription completed={todo.completed}>
              {todo.description}
            </TodoDescription>
          )}
          <TodoMeta>
            <StatusBadge completed={todo.completed}>
              {todo.completed ? '✅ Concluído' : '⏳ Pendente'}
            </StatusBadge>
            <span>Criado em: {formatDate(todo.createdAt)}</span>
            {todo.updatedAt !== todo.createdAt && (
              <span>Atualizado em: {formatDate(todo.updatedAt)}</span>
            )}
          </TodoMeta>
        </TodoDetails>
        
        <TodoActions>
          <Button 
            size="sm" 
            variant="primary"
            onClick={() => navigate(`/edit/${todo.id}`)}
          >
            ✏️ Editar
          </Button>
          <Button 
            size="sm" 
            variant="danger"
            onClick={handleDelete}
          >
            🗑️ Excluir
          </Button>
        </TodoActions>
      </TodoContent>
    </TodoItemContainer>
  );
};

export default TodoItem;