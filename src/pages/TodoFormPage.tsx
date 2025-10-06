import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  useGetTodoQuery, 
  useCreateTodoMutation, 
  useUpdateTodoMutation
} from '#/generated/graphql';
import { 
  PageWrapper, 
  Container, 
  PageTitle,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  ErrorMessage,
  Button,
  ButtonGroup,
  Loading,
  Alert
} from '#/components';

interface TodoFormData {
  title: string;
  description: string;
}

const TodoFormPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState<TodoFormData>({
    title: '',
    description: '',
  });
  const [errors, setErrors] = useState<Partial<TodoFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Query for editing - only run if we have an ID
  const [{ data: todoData, fetching: fetchingTodo, error: todoError }] = useGetTodoQuery({
    variables: { id: id! },
    pause: !isEditing, // Don't run query if not editing
  });

  // Mutations
  const [, createTodo] = useCreateTodoMutation();
  const [, updateTodo] = useUpdateTodoMutation();

  // Load todo data when editing
  useEffect(() => {
    if (isEditing && todoData?.todo) {
      setFormData({
        title: todoData.todo.title,
        description: todoData.todo.description || '',
      });
    }
  }, [isEditing, todoData]);

  const validateForm = (): boolean => {
    const newErrors: Partial<TodoFormData> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Título é obrigatório';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Título deve ter pelo menos 3 caracteres';
    }

    if (formData.description && formData.description.length > 500) {
      newErrors.description = 'Descrição deve ter no máximo 500 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name as keyof TodoFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (isEditing && id) {
        // Update existing todo
        const result = await updateTodo({
          input: {
            id,
            title: formData.title.trim(),
            description: formData.description.trim() || undefined,
          },
        });

        if (result.error) {
          alert('Erro ao atualizar todo: ' + result.error.message);
        } else {
          navigate('/');
        }
      } else {
        // Create new todo
        const result = await createTodo({
          input: {
            title: formData.title.trim(),
            description: formData.description.trim() || undefined,
          },
        });

        if (result.error) {
          alert('Erro ao criar todo: ' + result.error.message);
        } else {
          navigate('/');
        }
      }
    } catch {
      alert('Erro inesperado ao salvar todo');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  // Loading state for editing
  if (isEditing && fetchingTodo) {
    return (
      <PageWrapper>
        <Container>
          <PageTitle>Carregando Todo...</PageTitle>
          <Loading />
        </Container>
      </PageWrapper>
    );
  }

  // Error state for editing
  if (isEditing && todoError) {
    return (
      <PageWrapper>
        <Container>
          <PageTitle>Erro</PageTitle>
          <Alert variant="danger">
            Erro ao carregar todo: {todoError.message}
          </Alert>
          <Button onClick={() => navigate('/')}>
            ← Voltar para Lista
          </Button>
        </Container>
      </PageWrapper>
    );
  }

  // If editing but no todo found
  if (isEditing && todoData && !todoData.todo) {
    return (
      <PageWrapper>
        <Container>
          <PageTitle>Todo Não Encontrado</PageTitle>
          <Alert variant="danger">
            O todo que você está tentando editar não foi encontrado.
          </Alert>
          <Button onClick={() => navigate('/')}>
            ← Voltar para Lista
          </Button>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <PageTitle>
          {isEditing ? '✏️ Editar Todo' : '✨ Criar Novo Todo'}
        </PageTitle>

        <Card>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="title">Título *</Label>
              <Input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Digite o título do todo..."
                hasError={Boolean(errors.title)}
                disabled={isSubmitting}
              />
              {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">Descrição</Label>
              <TextArea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Digite uma descrição opcional..."
                hasError={Boolean(errors.description)}
                disabled={isSubmitting}
                rows={4}
              />
              {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
              <small style={{ color: '#6c757d', fontSize: '0.875rem' }}>
                {formData.description.length}/500 caracteres
              </small>
            </FormGroup>

            <ButtonGroup>
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                fullWidth={false}
              >
                {isSubmitting 
                  ? (isEditing ? 'Atualizando...' : 'Criando...') 
                  : (isEditing ? '💾 Atualizar Todo' : '✨ Criar Todo')
                }
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                ❌ Cancelar
              </Button>
            </ButtonGroup>
          </Form>
        </Card>

        {isEditing && todoData?.todo && (
          <Card>
            <h3 style={{ marginBottom: '1rem', color: '#495057' }}>ℹ️ Informações</h3>
            <p style={{ color: '#6c757d', marginBottom: '0.5rem' }}>
              <strong>Criado em:</strong> {new Date(todoData.todo.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
            <p style={{ color: '#6c757d', marginBottom: '0.5rem' }}>
              <strong>Última atualização:</strong> {new Date(todoData.todo.updatedAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
            <p style={{ color: '#6c757d' }}>
              <strong>Status:</strong> {todoData.todo.completed ? '✅ Concluído' : '⏳ Pendente'}
            </p>
          </Card>
        )}
      </Container>
    </PageWrapper>
  );
};

export default TodoFormPage;