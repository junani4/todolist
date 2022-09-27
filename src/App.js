import React, { useState, useCallback, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoAddList from './components/TodoAddList';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background:	#f5f5dc;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'React 공부',
      checked: true
    },
    {
      id: 2,
      text: '친구랑 영화보기',
      checked: false
    },
    {
      id: 3,
      text: '운동하기',
      checked: false
    }
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    }, []);

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);

  const onToggle = useCallback(
    (id) => {
      setTodos((todos) => 
        todos.map((todo) => 
          (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    }, []);

  const onTop = useCallback(
    
  );

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoAddList onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onTop={onTop} />
      </TodoTemplate>
    </>
  );
}

export default App;