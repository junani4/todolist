import React from 'react';
import './TodoItem.scss';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
import cn from 'classnames';

const TodoItem = ({ todo, onRemove, onToggle}) => {
    const {id, text, checked } = todo;

    return (
        <>
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
        <div className="line"></div>
        </>
    );
};

export default React.memo(TodoItem);