import React from "react";
import TodoDetail from "./todoDetail";

function TodoDetailsList({
  todos,
  todoEdit,
  todoDelete,
  changed,
  isDone,
  cTodos,
}) {
  return (
    <React.Fragment>
      <div style={{ margin: "10px" }}>
        Total:{" "}
        <span
          className="badge bg-primary rounded-pill"
          style={{ marginRight: "10px" }}
        >
          {todos.length}
        </span>
        Completed:{" "}
        <span className="badge bg-primary rounded-pill">{cTodos}</span>
      </div>

      <ul className="list-group">
        {todos.map((todo) => (
          <TodoDetail
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoEdit={todoEdit}
            changed={changed}
            isDone={isDone}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default TodoDetailsList;
