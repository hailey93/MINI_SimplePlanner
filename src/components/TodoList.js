import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss'
//todos 배열을 props로 받아온후 배열내장함수 map을 사용해 여러개의 TodoListItem 컴포넌트로 변환하여 보여준다

const TodoList=({todos, onRemove, onToggle})=>{
    return (
        <div className="TodoList">
            {todos.map(todo=>(
                /*todo데이터는 통째로 props로 전달한다. 여러 종류의 값을 전달해야 하는 경우, 
                객체로 통째로 전달하는 편이 성능 최적화할때 편리하다. */
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/> 
            ))}
        </div>
    );
};

export default TodoList;