import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { CSSProperties } from 'styled-components'
import { useTodo } from '../../../context/TodoContext'
import Input from '../../../shared/ui/Input'
import Button from '../../../shared/ui/Button'

const TodoInputStyles: CSSProperties = {
  position: 'relative',
  display: 'flex',
  width: '100%',
}

const ButtonStyles: CSSProperties = {
  position: 'absolute',
  zIndex: 1,
  width: '50px',
  height: '100%',
  padding: '5px 10px',
  fontSize: '14px',
  border: 'none',
  background: 'none',
  boxShadow: 'none',
}

const IconStyle: CSSProperties = {
  color: 'rgba(175, 47, 47, 0.15)',
  fontSize: '18px',
}

const InputStyles: CSSProperties = {
  width: '100%',
  flexGrow: 1,
  padding: '8px 8px 8px 50px',
  border: 'none',
  outline: 'none',
  fontSize: '24px',
  borderRadius: '5px 5px 0 0',
  borderBottom: '1px solid #ededed',
}

const TodoInput: React.FC = () => {
  const [todo, setTodo] = useState('')
  const { addTask } = useTodo()

  const handleAddTask = () => {
    if (todo.trim()) {
      addTask(todo)
      setTodo('')
    }
  }

  return (
    <div style={TodoInputStyles}>
      <Button
        style={ButtonStyles}
        onClick={handleAddTask}
        children={<DownOutlined style={IconStyle} />}
      />

      <Input
        style={InputStyles}
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onPressEnter={handleAddTask}
      />
    </div>
  )
}

export default TodoInput
