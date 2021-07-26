import React from "react";
import { Button, Card, Form} from 'react-bootstrap';

const ToDo = ({ todo, markTodo,editTodo,deleteTodo }) => {
  const handleClick = (e) => {
    e.preventDefault();
    markTodo(e.currentTarget.id);
  };

  return (
    <div>
      {todo.task}
      <input
        type="checkbox"
        id={todo.id}
        key={todo.id + todo.task}
        name="todo"
        value={todo.id}
        checked={todo.complete}
        onChange={handleClick}
        className={todo.complete ? "todo strike" : "todo"}
      />{' '}
      <button onClick={() => editTodo(todo)} className="btn btn-default">Edit</button>
      <button onClick={() =>deleteTodo(todo.id)} className="btn btn-default">Delete</button>
    </div>
  );
};

export default ToDo;
