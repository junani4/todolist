import React from 'react';
import TodoListItem from './TodoItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle, onTop }) => {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} onTop={onTop} />
            ))}
        </div>
    );
}

export default TodoList;