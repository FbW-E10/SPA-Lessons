import React from "react";
import { FiEdit } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";

export default function ListGroup(props) {
  return (
    <ol className="list-group list-group-numbered">
      {props.todos.map((todo, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between"
        >
          <span className="flex-fill">{todo}</span>
          <span className=" d-flex ">
            <span className=" EditItem" onClick={() => props.onEditTodo(index)}>
              <FiEdit />
            </span>
            <span
              className="mx-2 RemoveItem"
              onClick={() => props.onDeleteTodo(index)}
            >
              <BsFillTrashFill />
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}
