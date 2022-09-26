import { Todo } from "./Todo"

export function TodoList({ todos, setTodos }) {
  return (
    <div className={`todo-container ${todos.length > 0 ? '' : 'off'}`}>
      <ul className="todo-list">
        {todos.map(todo => {
          return (
            <Todo
              content={todo.text}
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          )
        })}
      </ul>
    </div>
  )
}
