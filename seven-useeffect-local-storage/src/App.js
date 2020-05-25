import React, {useState, useEffect} from 'react';
import {Container} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

const App = () => {
  
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const localTodos = localStorage.getItem("todos")
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  }, [])

  const markComplete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const addTodos = async (todo) => {
    setTodos([...todos, todo])
  }

  //gets called whenever there is a change in todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Container fluid>
      <h1> Todo with Local Storage</h1>
      <Todos todos={todos} markComplete={markComplete}/>
      <TodoForm addTodos={addTodos}/>
    </Container>
  )
}

export default App;
