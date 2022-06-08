import React, { useState } from "react";
import { toast } from "react-toastify";

const Context = React.createContext();

export function ContextProvider(props) {
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
    <Context.Provider
      value={{
        todos,
        setTodos,
        editTodo,
        setEditTodo,
        onAddTodo,
        onEditHandler,
        onEditTodo,
        onDeleteTodo,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Context;
