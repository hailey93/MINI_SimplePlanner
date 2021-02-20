import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App=()=>{
  const [todos, setTodos]=useState([
    {
      id:1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id:2,
      text: '컴포넌트 스타일링 해보기',
      checked: true
    },
    {
      id:3,
      text: '일정관리 앱 만들어보기',
      checked: false
    }
  ]);
  //id값은 렌더링되는 정보가 아닌, 단순히 참조되는 값뿐이기 때문에 useRef를 사용한다.
  const nextId=useRef(4);
  /* 컴포넌트 성능을 위해 useCallback함수를 사용한다.
  onInsert는 todos배열에 새 객체를 추가한다.*/
  const onInsert=useCallback(text=>{
    const todo={
      id:nextId.current,
      text,
      checked:false
    };
    setTodos(todos.concat(todo));
    nextId.current+=1;
  },[todos]);

  const onRemove=useCallback(id=>{
    setTodos(todos.filter(todo=>todo.id!==id)); //받아온 id와 같지 않는 항목들만 새배열로 생성
  },[todos]);

  const onToggle=useCallback(id=>{
    setTodos(todos.map(todo=>
      todo.id===id?{...todo, checked:!todo.checked}:todo));
  },[todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/> {/*props로 전달 */}
    </TodoTemplate>
  );
}

export default App;
