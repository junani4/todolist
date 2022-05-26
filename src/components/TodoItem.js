import React from 'react';
import './TodoItem.scss';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdStar } from 'react-icons/md';
import cn from 'classnames';

const TodoItem = ({ todo, onRemove, onToggle, onTop }) => {
    const {id, text, checked } = todo;

    return (
        <>
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="import" onClick={() => onTop}>
                <MdStar />
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
        <div className="line"></div>
        </>
    );
};

export default TodoItem;