import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/addtodo";
import TodoDetailsList from "./components/todoDetailsList";
import { v4 as uuidv4 } from "uuid";
import EditModal from "./components/editModal";

function App() {
  const initialTodo = [
    {
      id: 1,
      description: "clean room",
      isDone: false,
    },
    {
      id: 2,
      description: "folding cloths",
      isDone: false,
    },
    {
      id: 3,
      description: "buy things",
      isDone: false,
    },
  ];
  let [ctodos, setcTodos] = useState(0);
  const [isDone, setIsDone] = useState();
  const [todos, setTodos] = useState(initialTodo);
  const [isOpen, setIsOpen] = useState(false);
  const [todo, setSelectedTodo] = useState();
  function addTodo(data) {
    let result = todos.concat({
      id: uuidv4(),
      description: data,
      isDone: false,
    });
    console.log(result);
    setTodos(result);
  }

  function todoDelete(id) {
    let result = todos.filter((todo) => todo.id !== id);
    setTodos(result);
    if (ctodos > 0) {
      setcTodos(ctodos - 1);
    }
  }

  function todoEdit(id, todo, open) {
    console.log(open, todo);
    setSelectedTodo(todo);
    setIsOpen(open);
  }

  function updateTodo(updatedTodo) {
    let newTodo = todos.map((todo) => {
      return todo.id === updatedTodo.id
        ? { ...todo, description: updatedTodo.description }
        : todo;
    });
    console.log("new todos", newTodo);
    setTodos(newTodo);
  }

  function changed(isDone, todo) {
    if (isDone) {
      setTodos((state) => {
        let result = [...state];
        let index = result.findIndex((e) => e.id === todo.id);
        result[index] = { ...result[index], isDone: true };
        return result;
      });
      setcTodos(ctodos + 1);
    } else {
      setTodos((state) => {
        let result = [...state];
        let index = result.findIndex((e) => e.id === todo.id);
        result[index] = { ...result[index], isDone: false };
        return result;
      });
      setcTodos(ctodos - 1);
    }
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      {todos.length ? (
        <TodoDetailsList
          todos={todos}
          todoDelete={todoDelete}
          todoEdit={todoEdit}
          changed={changed}
          isDone={isDone}
          cTodos={ctodos}
        />
      ) : (
        <div className="emptyDiv">You have No TODO. Enjoy the day!!!!</div>
      )}
      <EditModal openModal={isOpen} todo={todo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
