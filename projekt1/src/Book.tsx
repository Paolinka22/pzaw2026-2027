import './App.css'
export interface PropsBook{
  /** Okładka książki */
  okladka: string;
  /** Tytuł książki */
  tytul: string;
  /** Rok wydania ksiązki */
  rok: number;
  /** Liczba stron książki */
  strony: number;
}

function Book({okladka, tytul, rok, strony}:PropsBook ) {
  return(
    <div className="card h-100">
    <img className="card-img-top" src={okladka} alt={tytul} />
    <div className="card-body">
    {rok < 2000 && <div className="card-text"><h4>Klasyka</h4></div>}
    <p className="card-title">{tytul}</p>
    <p className="card-text">{rok}</p>
    <p className="card-text">Strony: {strony}</p>
    <br />
    </div>
    </div>
  )

}
export default Book;