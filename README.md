# Tech Talk React - Todo App

Uma aplicação moderna de gerenciamento de tarefas (Todo) construída com React, TypeScript, styled-components e GraphQL.

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultrarrápido
- **styled-components** - CSS-in-JS para estilização
- **react-router-dom** - Roteamento client-side
- **URQL** - Cliente GraphQL leve e performático
- **GraphQL Code Generator** - Geração automática de tipos TypeScript

## 🏗️ Arquitetura

```
src/
├── @types/           # Definições de tipos TypeScript
├── components/       # Componentes reutilizáveis
│   ├── Alert/
│   ├── Button/
│   ├── Card/
│   ├── Form/
│   ├── Layout/
│   ├── Loading/
│   ├── Navigation/
│   └── TodoItem/
├── config/           # Configurações (URQL, etc.)
├── generated/        # Tipos e hooks gerados automaticamente
├── graphql/          # Operações GraphQL
├── pages/            # Páginas da aplicação
│   ├── TodoListPage/
│   └── TodoFormPage/
└── theme.ts          # Tema e design tokens
```

## ✨ Funcionalidades

- ✅ **CRUD Completo**: Criar, listar, editar e excluir todos
- ✅ **Tipagem Automática**: Tipos TypeScript gerados a partir do schema GraphQL
- ✅ **Design Responsivo**: Interface adaptável para mobile e desktop
- ✅ **Componentes Modulares**: Arquitetura baseada em componentes reutilizáveis
- ✅ **Alias de Importação**: Sistema de imports com `#/` para melhor organização
- ✅ **Hot Reload**: Desenvolvimento com recarga automática

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### 1. Clone o repositório

```bash
git clone https://github.com/ederzadravec/tech-talk-react.git
cd tech-talk-react
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure as variáveis de ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite as variáveis conforme necessário
# VITE_GRAPHQL_URL=http://localhost:4000/graphql
```

### 4. Configure o GraphQL Code Generator

```bash
# Gerar tipos TypeScript a partir do schema GraphQL
yarn codegen
```

## 🚦 Scripts Disponíveis

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
yarn dev
```

Abre a aplicação em [http://localhost:5173](http://localhost:5173)


### GraphQL Code Generation

```bash
# Gerar tipos uma vez
yarn codegen

# Gerar tipos em modo watch (recomendado para desenvolvimento)
yarn codegen:watch
```

### Qualidade de Código

```bash
# Executar linting
yarn lint
```

## 🎨 Componentes

### Sistema de Design

O projeto utiliza um sistema de design consistente com:

- **Cores**: Paleta de cores definida no tema
- **Tipografia**: Escalas de fonte padronizadas
- **Espaçamento**: Sistema de grid e espaçamentos consistentes
- **Componentes**: Biblioteca de componentes reutilizáveis


## 🔧 Configurações


**Configuração:**

```typescript
// src/config/urql.ts
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:4000/graphql';
```

### Alias de Importação

O projeto está configurado com alias `#/` que aponta para `src/`:

```typescript
// ✅ Com alias
import { Button } from '#/components';
import { useGetTodosQuery } from '#/generated/graphql';

// ❌ Sem alias
import { Button } from '../../../components';
```

### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
    },
  },
})
```

### TypeScript Paths

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "#/*": ["./src/*"]
    }
  }
}
```

## 📡 GraphQL


### Hooks Gerados

O GraphQL Code Generator cria hooks URQL automaticamente:

```typescript
import { 
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation 
} from '#/generated/graphql';

// Buscar todos
const [{ data, fetching, error }] = useGetTodosQuery();

// Criar todo
const [, createTodo] = useCreateTodoMutation();
const result = await createTodo({
  input: { title: 'Novo Todo', description: 'Descrição' }
});
```

## 🏃‍♂️ Como Usar

### 1. Visualizar Todos

- Acesse a página inicial para ver todos os todos
- Use o botão "Atualizar" para recarregar a lista

### 2. Criar Novo Todo

- Clique em "✨ Criar Novo Todo"
- Preencha o título (obrigatório) e descrição (opcional)
- Clique em "Criar Todo"

### 3. Editar Todo

- Na lista de todos, clique no botão "Editar" do todo desejado
- Modifique os campos necessários
- Clique em "Atualizar Todo"

### 4. Excluir Todo

- Na lista de todos, clique no botão "Excluir" do todo desejado
- Confirme a exclusão

## 🧪 Servidor GraphQL

Para executar este projeto, veja [aqui a api de exemplo](https://github.com/ederzadravec/tech-talk-graphql) que foi desenvolvida


## 👨‍💻 Autor

**Eder Zadravec**

- GitHub: [@ederzadravec](https://github.com/ederzadravec)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!