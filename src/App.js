import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'To buy 1'},
    {id: 2, completed: true, title: 'To buy 2'},
    {id: 3, completed: false, title: 'To buy 3'}
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
