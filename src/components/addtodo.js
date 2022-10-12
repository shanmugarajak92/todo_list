import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [task, setTask] = useState("");
  return (
    <div className="input-group d-flex justify-content-center">
      <input
        type="text"
        className="form-control"
        placeholder="Add a Todo Task"
        aria-label="Add a Todo Task"
        aria-describedby="basic-addon2"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          onClick={() => {
            addTodo(task);
            setTask("");
          }}
          disabled={task ? false : true}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
