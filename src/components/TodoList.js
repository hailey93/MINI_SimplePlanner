import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss'
//todos 배열을 props로 받아온후 배열내장함수 map을 사용해 여러개의 TodoListItem 컴포넌트로 변환하여 보여준다

const TodoList=()=>{
    return (
        <div className="TodoList">
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
        </div>
    );
};

export default TodoList;