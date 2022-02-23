
import './App.css';
import ToDoList from './TodoList';

function App() {
  return (
    <div className="App">
      <ToDoList name='books' initialTodos={[{id:1, todo:'figure this out', complete:true}]}/>
      <ToDoList name='articles'/>
      <ToDoList name='magazines'/>
    </div>
  );
}

export default App;
