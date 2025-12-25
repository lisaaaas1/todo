import TodoItem from './TodoItem'
import './TodoList.css'

// Компонент для отображения списка всех дел
function TodoList({ todos, onDeleteTodo }) {
  // Если список пуст, показываем сообщение
  if (todos.length === 0) {
    return <p className="empty-message">Список пуст</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDeleteTodo} 
        />
      ))}
    </ul>
  )
}

export default TodoList

