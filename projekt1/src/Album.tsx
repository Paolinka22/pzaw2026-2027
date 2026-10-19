import './App.css'
import Song, {type PropsSong} from './Song';
interface Props{
  /** Okładka albumu */
  okladka: string;
  /** Tytuł albumu */
  tytul: string;
  /** Wykonawca albumu */
  wykonawca: string;
  /** Gatunek albumu */
  gatunek: string;
  /** Rok wydania albumu */
  rok: number;
  /** Lista utworów w albumie z czasem trwania utworów */
  utwory: PropsSong[];
}

function Album({okladka, tytul, wykonawca, gatunek, rok, utwory}:Props) {
  return(
    <div>
    <img src={okladka} alt={tytul} />
    <p>{tytul}</p>
    <p>{wykonawca}</p>
    <p>Gatunek: {gatunek}</p>
    <p>{rok}</p>

    <h4>Lista utworów</h4>
    <ul>
      {utwory.map((utwor, index) => (
          <Song key={index} tytul={utwor.tytul} czas={utwor.czas} />
      ))}
    </ul>
    <br />
    </div>
    
  )

}
export default Album;