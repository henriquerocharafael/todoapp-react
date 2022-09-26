import { useState } from "react"

import { CheckBox } from "./CheckBox"

export function Todo({ content, todo, todos, setTodos }) {
  const [isChecked, setIsChecked] = useState(false);

  function deleteHandler() {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  return (
    <div className={`todo ${isChecked ? "completed" : ""}`}>
      <div className="status-check">
        <CheckBox 
          isChecked={isChecked}
          setIsChecked={setIsChecked} 
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <li className={`todo-item ${isChecked ? "completed" : ""}`}>{content}</li>
      <button onClick={deleteHandler} className="trash-btn"></button>
    </div>
  )
}
