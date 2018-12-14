import React from 'react';
import ToDo from './components/Todo'
import TodoList from './components/TodoList'
import './App.css';

const App = props => {
  return (
    <div>
      <TodoList />
      <ToDo />
    </div>
  )
}

export default App
