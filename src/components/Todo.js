import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

import { TiEdit } from 'react-icons/ti';

import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo, updatedTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = value => {
    updatedTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, i) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={i}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
}

export default Todo;
