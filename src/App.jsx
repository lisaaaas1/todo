import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  // Состояние для списка дел
  const [todos, setTodos] = useState([])

  // Загрузка данных из localStorage при первом запуске
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Сохранение данных в localStorage при каждом изменении списка
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Функция добавления нового дела
  const addTodo = (text) => {
    // Создаем новое дело с уникальным ID
    const newTodo = {
      id: Date.now(),
      text: text
    }

    // Добавляем в список
    setTodos([...todos, newTodo])
  }

  // Функция удаления дела
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Список ваших дел</h1>
        
        {/* Форма добавления дела */}
        <TodoForm onAddTodo={addTodo} />

        {/* Список дел */}
        <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      </div>
    </div>
  )
}

export default App
