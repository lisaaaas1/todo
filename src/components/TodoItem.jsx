import './TodoItem.css'

// Компонент для отображения одного дела
function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button 
        onClick={() => onDelete(todo.id)} 
        className="delete-button"
      >
        Удалить
      </button>
    </li>
  )
}

export default TodoItem

