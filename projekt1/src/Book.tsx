import './App.css'
interface Props{
  /** Okładka książki */
  okladka: string;
  /** Tytuł książki */
  tytul: string;
  /** Rok wydania ksiązki */
  rok: number;
  /** Liczba stron książki */
  strony: number;
}

function Book({okladka, tytul, rok, strony}:Props) {
  return(
    <div>
    <img src={okladka} alt={tytul} />
    <p>{tytul}</p>
    <p>{rok}</p>
    <p>Strony: {strony}</p>
    <br />
    </div>
  )

}
export default Book;