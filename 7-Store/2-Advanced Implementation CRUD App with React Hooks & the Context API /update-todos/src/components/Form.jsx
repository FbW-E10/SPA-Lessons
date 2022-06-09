import React from "react";

export default function Form(props) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;
    props.onAddTodo(todo);
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
