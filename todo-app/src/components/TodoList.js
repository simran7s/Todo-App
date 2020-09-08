import React from 'react';
import Todo from '../components/Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {/* Only maps the filtered todos */}
          {filteredTodos.map((todo) => (
            <Todo
              todo={todo}
              setTodos={setTodos}
              todos={todos}
              text={todo.text}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
