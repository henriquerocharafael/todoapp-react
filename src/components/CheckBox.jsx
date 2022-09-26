export function CheckBox({ isChecked, setIsChecked, todo, todos, setTodos }) {
  function handleStatus() {
    setIsChecked(state => !state)
    
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }

  return (
    <input 
      onChange={handleStatus} 
      type="checkbox" 
      className={isChecked ? "checked" : ""}
    />
  )
}
