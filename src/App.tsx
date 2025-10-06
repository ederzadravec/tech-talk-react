import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'urql';
import { urqlClient } from '#/config/urql';
import { Navigation } from '#/components';
import { TodoListPage, TodoFormPage } from '#/pages';

function App() {
  return (
    <Provider value={urqlClient}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/create" element={<TodoFormPage />} />
          <Route path="/edit/:id" element={<TodoFormPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
