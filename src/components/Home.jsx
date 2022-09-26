export function Home({ todos }) {
  return (
    <div className={`home ${todos.length > 0 ? 'off' : ''}`}>
      <img src="../src/assets/home-icon.svg" />
      <h4>Você ainda não tem tarefas cadastradas</h4>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}