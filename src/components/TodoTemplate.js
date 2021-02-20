import React from 'react';
import './TodoTemplate.scss';
//app-title을 보여주고 children으로 내부 JSX를 props으로 받아와 렌더링해준다.
const TodoTemplate=({children})=>{
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;