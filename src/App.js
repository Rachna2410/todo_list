import React, { useState } from 'react';
import {Container, Button, Card, Form,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import data from "./data.json";
import Header from "./components/Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import EditDocument from './components/EditDocument';
import SearchBox from './SearchBox';
function App() {
  
  const [ toDoList, setToDoList ] = useState(data);
  const [editing, setEditing] = useState(false);
  const [currentDocument, setCurrentDocument] = useState({});
  const [searchTerm,setSearchTerm] = useState('');

  const markTodo = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const editTodo=(todo)=>{
     setEditing(true)
    setCurrentDocument({ 
      id: todo.id, 
      task: todo.task,
      completed:todo.completed, 
    })
  }

  const deleteTodo=(id)=>{
    setToDoList(toDoList.filter(todo => todo.id !== id))
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  const updateDocument = (id, updatedDocument) => {
    setEditing(false)
    console.log(id,'iddddd')
    setToDoList(toDoList.map(item => (item.id === id ? updatedDocument : item)))
  }

  const allTask=(e)=>{
    e.preventDefault();

   let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(`<div>filtered</div>`);
  }

  const doneTask=(e)=>{
    e.preventDefault();

    let completeTask= toDoList.filter(task =>{
      return task.complete;
    });
    setToDoList(completeTask);
  }

  const todoTask=(e)=>{
    e.preventDefault();
    let taskShow = toDoList.filter(val =>{
      return val.task;
    });
    setToDoList(taskShow);
  }

  const doneAll=()=>{
    let filtered = toDoList.filter(task => {
      return task.complete=true;
    });
    setToDoList(filtered)
  }
   const deleteAll=()=>{
    let arr = [];
    setToDoList(arr);
   }

  return (
    <>
      <Header />
       <div className="container">
      {editing ? (
        <div>
          <h2 className="text-center">Edit Document</h2>
          <div className="col-md-8 col-md-offset-2">
          <EditDocument
            editing={editing}
            setEditing={setEditing}
            currentDocument={currentDocument}
            updateDocument={updateDocument}
          />
          </div>
        </div>
      ) : (
        <div>
        <div className="col-md-8 col-md-offset-2">
          <ToDoForm addTask={addTask} />
        </div>
        </div>
      )}  
      </div>

      <Navbar  expand="lg" collapseOneSelect>
    <Container>
    <Nav className="ml-auto">
    <Button onClick={allTask}>All</Button>
    <Button onClick={doneTask}>Done</Button>
    <Button onClick={todoTask}>Todo</Button>
   <SearchBox/>
    </Nav>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  </Navbar.Collapse>
  </Container>
</Navbar>

      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <ToDoList toDoList={toDoList} markTodo={markTodo} editTodo={editTodo}  deleteTodo={deleteTodo} />
        </div>
      </div>
      <Button onClick={doneAll}>Done All </Button>
      <Button onClick={deleteAll}>Delete All</Button>
    </>
  );
}

export default App;
