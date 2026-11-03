import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
import Task, {type PropsTask} from './Task.tsx'

function App() {
const [tasks, setTasks] = useState<PropsTask[]>([
  { id: 1, tresc: 'Zadanie 1', status: 'wykonane'},
  { id: 2, tresc: 'Zadanie 2', status: 'niewykonane'},
  { id: 3, tresc: 'Zadanie 3', status: 'wykonane'},
]);
const [filter, setFilter] = useState("wszystko");
const toggle = (id:number) => {
  setTasks(prevTasks => prevTasks.map(
    task => task.id === id
  ? {
    ...task, status: task.status==='wykonane'
    ? 'niewykonane' : 'wykonane'
  } : task
))
}
const filtrowanie = tasks.filter(task =>{
  if(filter === 'wykonane'){
    return task.status === 'wykonane';
  }
  if(filter === 'niewykonane'){
    return task.status === 'niewykonane';
  }
  return true;
})
const niewykonane = tasks.filter(task => task.status ==='niewykonane').length;
  return(
    <div className="container">

      <div>
      <select className="form-select" value={filter} onChange={event => setFilter(event.target.value)}>
          <option value="wszystko">Wszystko</option>
          <option value="wykonane">Wykonane</option>
          <option value="niewykonane">Niewykonane</option>
        </select>

      {tasks.map((task, id) => (
          <Task key={id} {...task} onToggle={toggle}/>
      ))
      }
      <p>Liczba zadań do wykonania {niewykonane}</p>
      </div>

    </div>
  )
}
export default App;