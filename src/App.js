import React, {useReducer, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array=[];
  for(let i=1; i<=2500; i++){
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked:false
    });
  }
  return array;
}

function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT': return todos.concat(action.todo);
    case 'REMOVE': return todos.filter(todo=>todo.id!==action.id);
    case 'TOGGLE': return todos.map(todo=>todo.id===action.id?{...todo, checked:!todo.checked}:todo);
    default: return todos;
  }
}

const App=()=>{
  /* //useState에 createBulkTodos()가 아닌 createBulkTodos 함수형태로 넣어주었다. 
    //이렇게 파라미터에 함수형태로 넣어주면 처음 렌더링될때만 함수가 실행된다.
  const [todos, setTodos]=useState(createBulkTodos); */
  /*원래 useReducer를 사용할때 두번째 파라미터에 초기값을 넣어주는데 여기서는 undefined를 넣고 세번째 파라미터에 초기값을 만들어
  컴포넌트가 맨 처음 렌더링될때만 createBulkTodos 함수가 호출되도록 하였다. */
  const [todos, dispatch]=useReducer(todoReducer, undefined, createBulkTodos);

  //id값은 렌더링되는 정보가 아닌, 단순히 참조되는 값뿐이기 때문에 useRef를 사용한다.
  const nextId=useRef(2501);

  /* 컴포넌트 성능을 위해 useCallback함수를 사용한다.
  onInsert는 todos배열에 새 객체를 추가한다.*/
  const onInsert=useCallback(text=>{
    const todo={
      id:nextId.current,
      text,
      checked:false
    };
    /* setTodos(todos=>todos.concat(todo)); */
    dispatch({type: 'INSERT', todo});
    nextId.current+=1;
  },[]);

  const onRemove=useCallback(id=>{
    /* setTodos(todos=>todos.filter(todo=>todo.id!==id)); //받아온 id와 같지 않는 항목들만 새배열로 생성 */
    dispatch({type: 'REMOVE', id});
  },[]);

  const onToggle=useCallback(id=>{
    /* setTodos(todos=>todos.map(todo=>
      todo.id===id?{...todo, checked:!todo.checked}:todo)); */
    dispatch({type: 'TOGGLE', id});
  },[]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/> {/*props로 전달 */}
    </TodoTemplate>
  );
}

export default App;
