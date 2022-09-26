import './App.css'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { Home } from './components/Home'
import { TodoList } from './components/TodoList'

import { useState } from 'react'

export function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [checkCompleted, setCheckCompleted] = useState([])

  return (
    <div>
      <Header />
      <div className="wrapper">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          checkCompleted={checkCompleted}
          setCheckCompleted={setCheckCompleted}
        />
        <Home todos={todos} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  )
}
