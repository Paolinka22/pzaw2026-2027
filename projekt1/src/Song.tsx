import './App.css'
export interface PropsSong{
  /** Tytuł utworu */
  tytul: string;
  /** Czas trwania utworu (0:00) */
  czas: string;
}

function Song({tytul, czas}:PropsSong) {
  return(
        <tr>
        <td>{tytul}</td>
        <td className="text-end">{czas}</td>
        </tr>
  )

}
export default Song;