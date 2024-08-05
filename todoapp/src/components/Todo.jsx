import { useState } from "react"
import Form from './Form'
import TodoList from "./TodoList";
import Footer from './Footer'
export default function Todo() {
  const[todos,setTodos]=useState([]);
  const completedTodos=todos.filter((todo)=>todo.done).length
  const totalTodos=todos.length
  return (
    <div>
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
  )
}