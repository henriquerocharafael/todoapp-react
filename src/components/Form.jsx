import { useEffect } from "react"

export function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  checkCompleted,
  setCheckCompleted
}) {
  function inputHandler(event) {
    setInputText(event.target.value)
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    setTodos([
      ...todos,
      { completed: false, text: inputText, id: Math.random() * 100 }
    ])
    setInputText('')
  }

  const createdTasks = todos.length

  useEffect(() => {
    let completed = []
    todos.map(todo => {
      if (todo.completed === true) {
        completed.push(todo)
      }
    })
    setCheckCompleted(completed)
  }, [todos])

  function handleInputInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isInputTextEmpty = inputText.length === 0

  return (
    <form>
      <div className="form-input">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={inputHandler}
          value={inputText}
          onInvalid={handleInputInvalid}
          required
        />
        <button
          type="submit"
          disabled={isInputTextEmpty}
          onClick={onSubmitHandler}
        >
          Criar
          <img src="../src/assets/plus-icon.svg" />
        </button>
      </div>

      <div className="form-status">
        <div>
          <h4 className="created">Tarefas criadas</h4>
          <span>{createdTasks}</span>
        </div>
        <div>
          <h4 className="done">Concluídas</h4>
          <span>{checkCompleted.length} de {createdTasks}</span>
        </div>
      </div>
    </form>
  )
}
