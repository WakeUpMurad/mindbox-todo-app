import React from 'react'
import TodoInput from '../../features/todo/ui/TodoInput'
import TodoList from '../../features/todo/ui/TodoList'
import TodoFooter from '../../features/todo/ui/TodoFooter'
import { Layout, Typography } from 'antd'
import { CSSProperties } from 'styled-components'

const { Header, Content } = Layout

const LayoutStyle: CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#f0f2f5',
}

const HeaderStyle: CSSProperties = {
  textAlign: 'center',
  padding: '20px 0',
  backgroundColor: '#f0f2f5',
  height: 'auto',
}
const HeaderTitleStyle: CSSProperties = {
  fontSize: '100px',
  fontWeight: 80,
  textAlign: 'center',
  color: 'rgba(175, 47, 47, 0.15)',
  margin: 0,
}

const ContentStyle: CSSProperties = {
  maxHeight: '324px',
  width: '500px',
  margin: '0 auto',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
}

const TodoPage: React.FC = () => {
  return (
    <Layout style={LayoutStyle}>
      <Header style={HeaderStyle}>
        <Typography.Title style={HeaderTitleStyle}>todos</Typography.Title>
      </Header>
      <Content style={ContentStyle}>
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </Content>
    </Layout>
  )
}

export default TodoPage
