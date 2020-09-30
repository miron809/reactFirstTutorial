import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    {id: 1, completed: false, title: 'To buy 1'},
    {id: 2, completed: false, title: 'To buy 2'},
    {id: 3, completed: false, title: 'To buy 3'}
  ]

  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>

      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
