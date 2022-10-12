import React from "react";

function TodoDetail({ todo, todoDelete, todoEdit, changed }) {
  return (
    <React.Fragment>
      <li
        className="list-group-item d-flex align-items-center"
        style={{ backgroundColor: todo.isDone ? "#c6eec6" : "#fff" }}
      >
        <input
          className="form-check-input check-complete"
          type="checkbox"
          onChange={(e) => {
            changed(e.target.checked, todo);
          }}
          value=""
        />
        {todo.description}
        <span
          className="badge bg-primary rounded-pill bg-edit edit"
          onClick={() => todoEdit(todo.id, todo, true)}
        ></span>
        <span
          className="badge bg-danger rounded-pill bg-delete delete"
          onClick={() => todoDelete(todo.id)}
        ></span>
      </li>
    </React.Fragment>
  );
}

export default TodoDetail;
