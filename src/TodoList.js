import {useState} from 'react'
const TodoList = (props)=>{
  const [todos, setTodos]= useState([{id:1, todo:'finish this'}])
  return (
    <div>
      <h1>{props.name}</h1>
      <div>{JSON.stringify(todos)}</div>
    </div>
  );
};

export default TodoList;