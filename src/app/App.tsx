import React from 'react'
import { TodoProvider } from '../context/TodoContext'
import TodoPage from '../pages/TodoPage/TodoPage'

const App: React.FC = () => {
  return (
    <TodoProvider>
      <TodoPage />
    </TodoProvider>
  )
}

export default App
