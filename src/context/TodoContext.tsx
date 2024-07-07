import React, { createContext, useState, useContext, ReactNode } from 'react'

interface Task {
  id: number
  text: string
  completed: boolean
}

interface TodoContextType {
  tasks: Task[]
  addTask: (text: string) => void
  toggleTask: (id: number) => void
  clearCompleted: () => void
  filter: 'all' | 'active' | 'completed'
  setFilter: (filter: 'all' | 'active' | 'completed') => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }])
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed))
  }

  return <TodoContext.Provider value={{ tasks, addTask, toggleTask, clearCompleted, filter, setFilter }}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }
  return context
}
