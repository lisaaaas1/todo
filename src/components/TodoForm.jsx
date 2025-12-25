import { useState } from 'react'
import './TodoForm.css'

// Компонент для формы добавления нового дела
function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('')

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Проверяем, что поле не пустое
    if (inputValue.trim() === '') {
      return
    }

    // Вызываем функцию добавления дела из родительского компонента
    onAddTodo(inputValue)
    
    // Очищаем поле ввода
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите новое дело..."
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Добавить
      </button>
    </form>
  )
}

export default TodoForm

