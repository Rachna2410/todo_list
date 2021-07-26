import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, markTodo,editTodo,deleteTodo}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} markTodo={markTodo}  editTodo={editTodo} deleteTodo={deleteTodo} />
                )
            })}
            
        </div>
    );
};

export default ToDoList;