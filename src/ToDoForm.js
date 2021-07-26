import React, { useState } from 'react';
import { Button, Card, Form} from 'react-bootstrap';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <Form.Control type="text" className="input" value={userInput}  onChange={handleChange} placeholder="Add new todo" />
    </Form.Group>
   <center> <Button variant="primary mb-3" type="submit">
      Add New Todo
    </Button> </center>
  </Form>
    );
};

export default ToDoForm;