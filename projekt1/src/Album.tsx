import './App.css'
import Song, {type PropsSong} from './Song';
export interface PropsAlbum{
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

function Album({okladka, tytul, wykonawca, gatunek, rok, utwory}:PropsAlbum) {
  return(
    <div className="card h-100">
    <img className="card-img-top" src={okladka} alt={tytul} />
    <div className="card-body">
    <p className="card-title">{tytul}</p>
    <p className="card-text">{wykonawca}</p>
    <p className="card-text">Gatunek: {gatunek}</p>
    <p className="card-text">{rok}</p>

    {utwory.length == 0 ? (<div className="alert alert-primary" role="alert">Brak utworów</div>) : (
        <div>
          <h4>Lista utworów</h4>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Tytuł utworu</th>
                <th scope="col" className="text-end">Długość utworu</th>
              </tr>
            </thead>
            <tbody>
            {utwory.map((utwor, index) => (
              <Song key={index} tytul={utwor.tytul} czas={utwor.czas} />
            ))}
          </tbody>
          </table>
        </div>
    )}
    </div>
    </div>
  )

}
export default Album;