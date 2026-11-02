import './App.css'
export interface PropsFilm{
  /** Plakat do filmu */
  plakat: string;
  /** Tytuł filmu */
  tytul: string;
  /** Rok produkcji filmu */
  rok: number;
  /** Ocena filmu */
  rating: number;
}

function Film({plakat, tytul, rok, rating}:PropsFilm) {
  return(
    <div className="card h-100" onClick={() => {console.log("Wybrano film: ",tytul);}}>
    <img className="card-img-top" src={plakat} alt={tytul} />
    <div className="card-body">
    {rating>=8 && <div className="card-text"><h4>Polaceny</h4></div>}
    <p className="card-title">{tytul}</p>
    <p className="card-text">{rok}</p>
    <button
      onClick={(event) => {  
        event.stopPropagation();
        console.log("Pokaż szczegóły dla",tytul);}}>
        Pokaż szczegóły
    </button>
    <p className="card-text">Ocena: {rating}</p>
    <br />
    </div>
    </div>
    
  )

}
export default Film;