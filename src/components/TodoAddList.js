import React, { useState, useCallback } from 'react';
import './TodoAddList.scss';
import TodoHeader from './TodoHeader';

const TodoAddList = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');

            e.preventDefault();
        },
        [onInsert, value]
    );
    
    return (
        <>
        <TodoHeader />
        <form className="TodoAdd" onSubmit={onSubmit}>
            <input placeholder="오늘 할 일을 추가해봐요" value={value} onChange={onChange}></input>
            <button type="submit" onSubmit={onSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#87cefa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </button>
        </form>
        </>
    );
};

export default TodoAddList;

