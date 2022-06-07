import React from "react";

export default function ListGroup(props) {
  return (
    <ol className="list-group list-group-numbered">
      {props.todos.map((todo, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between"
        >
          <span className="flex-fill">{todo}</span>
          <span
            className="RemoveItem"
            onClick={() => props.onDeleteTodo(index)}
          >
            X
          </span>
        </li>
      ))}
    </ol>
  );
}
