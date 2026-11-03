import './App.css'
export interface PropsTask{
  /** id zadania */
    id: number;
  /** Czy zadanie jest wykonane czy nie*/
  status: string;
  /** Treść zadania */
  tresc: string;
  /** Funkcja zaznaczenia zadania */
  onToggle?: (id: number) => void;
}

function Task({id, status, tresc, onToggle}:PropsTask) {
  return(
    <div className="card h-100">
    <div className="card-body">
    <div className="form-check">
    <input className="form-check-input" type="checkbox" checked={status === 'wykonane'} onChange={() => onToggle(id)}/>
    <label className="card-title">{tresc}</label>
    <br />
    </div>
    </div>
    </div>
    
  )

}
export default Task;