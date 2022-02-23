import {useState} from 'react'
const TodoList = (props)=>{

  const [todos, setTodos]= useState(props.initialTodo || [])
  const [todo, setTodo] = useState('')
  const renderTodos =() => {
    return todos.map((x) => {
      return (
        <div key={x.id} style={{textDecoration: x.completed ? "line-thruogh" : ""}}>
        <p>{x.todo}</p>
        </div>
      );
    });
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e)
    console.log('todo: ', todo)
    const newTodos = [...todos, {id:Math.random(), todo: todo, completed:false}]
    setTodos(newTodos)
  }
  return (
    <div>
      <h1>{props.name}</h1>
      <form onSubmit={handleSubmit}>
        <p>todo: </p>
        <input value={todo} onChande={(e)=> {setTodo(e.target.value)} }/>
        <button type='submit'>Enter</button>
      </form>
      <div>{renderTodos()}</div>
      
    </div>
  );
};

export default TodoList;