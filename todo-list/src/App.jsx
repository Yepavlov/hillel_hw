import TodoForm from './components/TodoForm';
import { Badge, Container, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (formData) => {
    const newTodo = {
      ...formData,
      id: uuidv4(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

  return (
    <Container className="py-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">My todo list</h2>

      <ListGroup>
        {todos.length === 0 && (
          <p className="text-center text-muted">
            The list is empty. Add your first task!
          </p>
        )}

        {sortedTodos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            action
            className="d-flex justify-content-between align-items-center"
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? 0.6 : 1,
              cursor: 'pointer',
              backgroundColor: todo.completed ? '#f8f9fa' : '#fff',
            }}
          >
            {todo.title}
            <Badge bg={todo.completed ? 'secondary' : 'primary'} pill>
              {todo.completed ? 'Done' : 'In progress'}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <TodoForm onSubmit={handleAddTodo} />
    </Container>
  );
};

export default App;
