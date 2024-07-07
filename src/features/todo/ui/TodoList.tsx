import React from 'react'
import { List } from 'antd'
import { CSSProperties } from 'styled-components'
import { useTodo } from '../../../context/TodoContext'
import TaskItem from '../../../entities/task/ui/TaskItem'

const TodoListStyle: CSSProperties = {
  height: '216px',
  overflowY: 'scroll',
  background: '#f5f5f5',
}
const TodoList: React.FC = () => {
  const { tasks, filter } = useTodo()

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <List
      style={TodoListStyle}
      itemLayout="horizontal"
      dataSource={filteredTasks}
      renderItem={(item) => (
        <TaskItem
          id={item.id}
          text={item.text}
          completed={item.completed}
        />
      )}
    />
  )
}

export default TodoList
