import './App.css'
import Film from './Film.tsx'
import Book from './Book.tsx'
import Album from './Album.tsx'
import shawshank from './1.jpg'
import mila from './2.jpg'
import nietykalni from './3.jpg'
import rok1984 from './4.webp'
import wladca from './5.jpg'
import drozd from './6.webp'
import thriller from './7.jpg'
import darkside from './8.webp'



function App() {
  return(
    <div>
      <h2>Filmy</h2>
      <Film plakat={shawshank} tytul='Skazani na Shawshank' rok={1994}/>
      <Film plakat={mila} tytul='Zielona mila' rok={1999}/>
      <Film plakat={nietykalni} tytul='Nietykalni' rok={2011}/>
      <br/>

      <h2>Książki</h2>
      <Book okladka={rok1984} tytul='Rok 1984' rok={1949} strony={300}/>
      <Book okladka={wladca} tytul='Władca Pierścieni' rok={1954} strony={1000}/>
      <Book okladka={drozd} tytul='Zabić drozda' rok={1960} strony={400}/>
      <br/>

      <h2>Albumy muzyczne</h2>
      <Album okladka={thriller} tytul='Thriller' wykonawca='Michael Jackson' gatunek='Pop' rok={1982}
      utwory={[
        {tytul: 'Wanna Be Startin’ Somethin’', czas: '6:04'},
        {tytul: 'Baby Be Mine', czas: '4:21'},
        {tytul: 'The Girl Is Mine', czas: '3:43'},
        {tytul: 'Thriller', czas: '5:58'},
        {tytul: 'Beat It', czas: '4:18'},
        {tytul: 'Billie Jean', czas: '4:54'},
        {tytul: 'Human Nature', czas: '4:07'},
        {tytul: 'P.Y.T. (Pretty Young Thing)', czas: '3:58'},
        {tytul: 'The Lady in My Life', czas: '4:59'},
      ]}/>
      <Album okladka={darkside} tytul='The Dark Side of the Moon' wykonawca='Pink Floyd' gatunek='Rock' rok={1973}
      utwory={[
        {tytul: 'Speak to Me/Breathe', czas: '3:57'},
        {tytul: 'On the Run', czas: '3:50'},
        {tytul: 'Time', czas: '6:49'},
        {tytul: 'The Great Gig in the Sky', czas: '4:44'},
        {tytul: 'Money', czas: '6:22'},
        {tytul: 'Us and Them', czas: '7:49'},
        {tytul: 'Any Colour You Like', czas: '3:26'},
        {tytul: 'Brain Damage', czas: '3:46'},
        {tytul: 'Eclipse', czas: '2:11'}
      ]}/>

      <br/>
    </div>
  )

}
export default App;