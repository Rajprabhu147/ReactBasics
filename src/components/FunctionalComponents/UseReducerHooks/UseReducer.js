import React, { useState, useReducer } from "react";
import Todo from "./Todo.js";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOOGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOOGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const [close, setClose] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      {close && (
        <div>
          <h2>6. useReducer Hook is similar to the useState Hook. </h2>
          <p>
            It allows for <strong>custom state logic.</strong> If you find
            yourself keeping track of multiple pieces of state that rely on
            <strong> complex logic</strong>, <strong>useReducer</strong> may be
            useful.
          </p>
          <p>
            The useReducer Hook accepts two arguments.{" "}
            <strong>reducer, initialState</strong>
          </p>
          <p>
            The useReducer Hook returns the current <strong>state</strong> and a{" "}
            <strong>dispatch</strong> method.
          </p>
          <h3>A Simple Todo App using useReducer</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your todo here!"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </div>
      )}
      <br />
      <button onClick={() => setClose(!close)}>
        Open / Close useReducer Hooks
      </button>
    </>
  );
}
