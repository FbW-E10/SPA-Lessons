import React, { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import Context from "../store/context";

export default function ListGroup() {
  const { todos, onDeleteTodo, onEditTodo } = useContext(Context);

  return (
    <ol className="list-group list-group-numbered">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between"
        >
          <span className="flex-fill">{todo}</span>
          <span className=" d-flex ">
            <span className=" EditItem" onClick={() => onEditTodo(index)}>
              <FiEdit />
            </span>
            <span
              className="mx-2 RemoveItem"
              onClick={() => onDeleteTodo(index)}
            >
              <BsFillTrashFill />
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}
