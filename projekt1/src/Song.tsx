import './App.css'
export interface PropsSong{
  /** Tytuł utworu */
  tytul: string;
  /** Czas trwania utworu (0:00) */
  czas: string;
}

function Song({tytul, czas}:PropsSong) {
  return(
    <div>
      <li>
        {tytul}: {czas}
      </li>
    <br />
    </div>
    
  )

}
export default Song;