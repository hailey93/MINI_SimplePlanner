import React from 'react';
import {List} from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss'
import { useCallback } from '../../node_modules/react/cjs/react.development';
//todos 배열을 props로 받아온후 배열내장함수 map을 사용해 여러개의 TodoListItem 컴포넌트로 변환하여 보여준다

const TodoList=({todos, onRemove, onToggle})=>{
    const rowRenderer=useCallback(({index, key, style})=>{
        const todo=todos[index];
        return(
            <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
            />
        );
    }, [todos, onRemove, onToggle]);

    return (
        <List
            className="TodoList"
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer} //항목을 렌더링할때 쓰는 함수
            list={todos}
            style={{outline:'none'}} //List에 기본 적용되는 outline 스타일 제거
        />
        /* <div className="TodoList">
            {todos.map(todo=>(
                //todo데이터는 통째로 props로 전달한다. 여러 종류의 값을 전달해야 하는 경우, 
                //객체로 통째로 전달하는 편이 성능 최적화할때 편리하다. 
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/> 
            ))}
        </div> */
    );
};

export default React.memo(TodoList);