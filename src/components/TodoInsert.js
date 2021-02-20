import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
//새로운 항목을 입력하고 추가하는 컴포넌트. state를 통해 인풋 상태를 관리한다.
const TodoInsert=({onInsert})=>{
    const [value, setValue]=useState('');

    const onChange=useCallback(e=>{
        setValue(e.target.value);
    },[]); //컴포넌트가 처음 렌더링될때만 함수를 생성하고 리렌더링될때 재사용할 수 있도록 한다.
    
    //onSubmit은 엔터를 눌러도 이벤트가 발생한다.
    const onSubmit=useCallback(e=>{
        onInsert(value);
        setValue('');
        /*submit이벤트는 브라우저에서 새로고침을 발생시키기에 
        이를 방지하기 위해 아래 함수를 호출한다. */
        e.preventDefault(); 
    }, [onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;