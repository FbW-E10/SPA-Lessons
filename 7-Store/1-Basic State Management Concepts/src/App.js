import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const onDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div className="container mt-4 w-20">
      <Form onAddTodo={onAddTodo} />
      <ListGroup todos={todos} onDeleteTodo={onDeleteTodo} />
    </div>
  );
}

export default App;
