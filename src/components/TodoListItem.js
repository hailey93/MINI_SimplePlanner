import React from 'react';
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
//각 할 일 항목에 대한 정보를 보여주는 컴포넌트. todo객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여준다.

const TodoListItem=({todo, onRemove, onToggle, style})=>{
    const {id, text, checked}=todo;
    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                {/*조건부 스타일링을 위해 classnames를 사용한다. */}
                <div className={cn('checkbox', {checked})} onClick={()=>onToggle(id)}> 
                    {checked?<MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={()=>onRemove(id)}>
                    <MdRemoveCircleOutline/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);