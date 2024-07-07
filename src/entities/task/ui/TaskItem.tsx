import React from 'react'
import { List, Typography } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import { CSSProperties } from 'styled-components'
import { useTodo } from '../../../context/TodoContext'
import Button from '../../../shared/ui/Button'

interface TaskItemProps {
  id: number
  text: string
  completed: boolean
}

const TaskItemStyle: CSSProperties = {
  position: 'relative',
  height: '54px',
  padding: '15px 15px 15px 60px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  boxShadow: 'inset 0 -2px 1px rgba(0, 0, 0, 0.03)',
  transition: 'background-color 0.3s ease',
}

const TaskItemButtonStyle: CSSProperties = {
  position: 'absolute',
  left: '10px',
  height: '34px',
  width: '34px',
  background: 'none',
  border: '2px solid #d9d9d9',
  borderRadius: '50%',
  cursor: 'pointer',
}

const TaskItemTextStyle: CSSProperties = {
  fontSize: '24px',
}

const TaskItemIconStyle: CSSProperties = {
  position: 'absolute',
  top: '-2px',
  left: '-2px',
  width: '34px',
  height: '34px',
  color: 'green',
  padding: '10px',
}
const TaskItem: React.FC<TaskItemProps> = ({ id, text, completed }) => {
  const { toggleTask } = useTodo()

  return (
    <List.Item style={TaskItemStyle}>
      <Button
        onClick={() => toggleTask(id)}
        style={TaskItemButtonStyle}
      >
        {completed ? <CheckOutlined style={TaskItemIconStyle} /> : <div />}
      </Button>
      <Typography.Text
        delete={completed}
        style={TaskItemTextStyle}
      >
        {completed ? <del style={{ color: 'grey' }}>{text}</del> : text}
      </Typography.Text>
    </List.Item>
  )
}

export default TaskItem
