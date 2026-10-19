import './App.css'
interface Props{
  /** Plakat do filmu */
  plakat: string;
  /** Tytuł filmu */
  tytul: string;
  /** Rok produkcji filmu */
  rok: number;
}

function Film({plakat, tytul, rok}:Props) {
  return(
    <div>
    <img src={plakat} alt={tytul} />
    <p>{tytul}</p>
    <p>{rok}</p>
    <br />
    </div>
    
  )

}
export default Film;