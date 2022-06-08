import React, { useContext } from "react";
import Context from "../store/context";

export default function Modal() {
  const { editTodo, setEditTodo, onEditHandler } = useContext(Context);

  return (
    <form
      onSubmit={onEditHandler}
      className="Modal  position-absolute  top-0 start-0 d-flex justify-content-center align-items-center "
    >
      <div className="modal-dialog w-25 border p-4 bg-white">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit todo{" "}
            </h5>
            <button
              onClick={() => setEditTodo(null)}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body m-2">
            <input
              name="todo"
              type="text"
              className="form-control"
              defaultValue={editTodo.value}
            />
          </div>
          <div className="modal-footer ">
            <button
              onClick={() => setEditTodo(null)}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary m-2">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
