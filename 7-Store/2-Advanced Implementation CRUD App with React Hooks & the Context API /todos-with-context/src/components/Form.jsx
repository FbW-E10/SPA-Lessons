import React, { useContext } from "react";
import Context from "../store/context";

export default function Form() {
  const { onAddTodo } = useContext(Context);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;
    onAddTodo(todo);
    e.target.reset();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="input-group mb-3">
        <input
          name="todo"
          type="text"
          className="form-control"
          placeholder="add todo"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          ADD
        </button>
      </div>
    </form>
  );
}
