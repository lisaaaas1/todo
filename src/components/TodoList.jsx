import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({ todos, onDeleteTodo }) {
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

