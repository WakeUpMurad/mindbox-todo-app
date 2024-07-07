import React from 'react'
import { useTodo } from '../../../context/TodoContext'
import { Button, Typography } from 'antd'
import { CSSProperties } from 'styled-components'

const FooterStyle: CSSProperties = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  borderTop: '1px solid #f0f0f0',
  background: '#fff',
}

const FilterButtonStyle: CSSProperties = {
  padding: '0 5px',
  color: 'grey',
  border: 'none',
}
const ClearCompletedButtonStyle: CSSProperties = {
  color: 'grey',
}

const TodoFooter: React.FC = () => {
  const { tasks, filter, setFilter, clearCompleted } = useTodo()

  return (
    <div style={FooterStyle}>
      <Typography.Text style={{ padding: '4px' }}>{tasks.filter((task) => !task.completed).length} items left</Typography.Text>
      <div>
        <Button
          type="link"
          onClick={() => setFilter('all')}
          style={filter === 'all' ? { ...FilterButtonStyle, border: '1px solid #e6e6e6' } : FilterButtonStyle}
        >
          All
        </Button>
        <Button
          type="link"
          onClick={() => setFilter('active')}
          style={filter === 'active' ? { ...FilterButtonStyle, border: '1px solid #e6e6e6' } : FilterButtonStyle}
        >
          Active
        </Button>
        <Button
          type="link"
          onClick={() => setFilter('completed')}
          style={filter === 'completed' ? { ...FilterButtonStyle, border: '1px solid #e6e6e6' } : FilterButtonStyle}
        >
          Completed
        </Button>
      </div>
      <Button
        style={ClearCompletedButtonStyle}
        type="link"
        onClick={clearCompleted}
      >
        Clear completed
      </Button>
      <div style={{ width: '98%', margin: '-5px', height: '5px', position: 'absolute', bottom: '-1%', left: '2%', backgroundColor: '#fff', boxShadow: '0 2px 4px 2px rgba(0, 0, 0, 0.3)' }}></div>
      <div style={{ width: '96%', margin: '-5px', height: '5px', position: 'absolute', bottom: '-10%', left: '3%', backgroundColor: '#fff', boxShadow: '0 2px 4px 2px rgba(0, 0, 0, 0.3)' }}></div>
    </div>
  )
}

export default TodoFooter
