import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Modal from "./components/Modal";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const onAddTodo = (todo) => {
    setTodos([...todos, todo]);
    toast("Created new item");
  };
  const onDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    toast("Deleted item");
  };

  const onEditTodo = (index) => {
    const findTodo = todos.find((_, i) => i === index);
    setEditTodo({ index, value: findTodo });
  };

  const onEditHandler = (e) => {
    e.preventDefault();
    const newValue = e.target.todo.value;
    const newTodos = todos.map((item, index) => {
      if (index === editTodo.index) {
        return newValue;
      } else {
        return item;
      }
    });
    toast("Edited item");
    setTodos(newTodos);
    setEditTodo(null);
  };

  return (
    <div className="container mt-4 w-20">
      <Form onAddTodo={onAddTodo} />
      <ListGroup
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
      />
      {editTodo && (
        <Modal
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          onEditHandler={onEditHandler}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
