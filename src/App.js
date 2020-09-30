import React from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";

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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
        <h1>React tutorial</h1>

        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todos!</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
