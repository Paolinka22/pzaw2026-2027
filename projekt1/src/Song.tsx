import './App.css'
export interface PropsSong{
  /** Tytuł utworu */
  tytul: string;
  /** Czas trwania utworu (0:00) */
  czas: string;
  /** Funkcja kliknięcia na utwór */
  songClick?: () => void;
}
function Song({tytul, czas, songClick}:PropsSong) {
  return(
        <tr>
        <td onClick={songClick}>{tytul}</td>
        <td className="text-end">{czas}</td>
        </tr>
  )

}
export default Song;