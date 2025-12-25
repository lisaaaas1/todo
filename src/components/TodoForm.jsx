import { useState } from 'react'
import './TodoForm.css'

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('')
  //  через setInputValue меняем значение

  // обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (inputValue.trim() === '') {
      return
    }

    onAddTodo(inputValue)

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

