import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
import Film, {type PropsFilm} from './Film.tsx'
import Book, {type PropsBook} from './Book.tsx'
import Album, {type PropsAlbum} from './Album.tsx'
import shawshank from './assets/1.jpg'
import mila from './assets/2.jpg'
import nietykalni from './assets/3.jpg'
import rok1984 from './assets/4.webp'
import wladca from './assets/5.jpg'
import drozd from './assets/6.webp'
import thriller from './assets/7.jpg'
import darkside from './assets/8.webp'
import miseducation from './assets/9.webp'

const movies: PropsFilm[] = [
  {plakat: shawshank, tytul: 'Skazani na Shawshank', rok: 1994, rating: 9},
  {plakat: mila, tytul: 'Zielona mila', rok: 1999, rating: 8},
  {plakat: nietykalni, tytul: 'Nietykalni', rok: 2011, rating: 7}

];
const books: PropsBook[] = [
  {okladka: wladca, tytul: 'Władca Pierścieni', rok: 1954, strony: 1000},
  {okladka: rok1984, tytul: 'Rok 1984', rok: 1949, strony: 300},
  {okladka: drozd, tytul: 'Zabić drozda', rok: 1960, strony: 400}
];
const albums: PropsAlbum[] = [
  {okladka: thriller, tytul: 'Thriller', wykonawca: 'Michael Jackson', gatunek: 'Pop', rok: 1982, 
        utwory:[
        {tytul: 'Wanna Be Startin’ Somethin’', czas: '6:04'},
        {tytul: 'Baby Be Mine', czas: '4:21'},
        {tytul: 'The Girl Is Mine', czas: '3:43'},
        {tytul: 'Thriller', czas: '5:58'},
        {tytul: 'Beat It', czas: '4:18'},
        {tytul: 'Billie Jean', czas: '4:54'},
        {tytul: 'Human Nature', czas: '4:07'},
        {tytul: 'P.Y.T. (Pretty Young Thing)', czas: '3:58'},
        {tytul: 'The Lady in My Life', czas: '4:59'},
      ]},
  {okladka: darkside, tytul: 'The Dark Side of the Moon', wykonawca: 'Pink Floyd', gatunek: 'Rock', rok: 1973,
    utwory: [
        {tytul: 'Speak to Me/Breathe', czas: '3:57'},
        {tytul: 'On the Run', czas: '3:50'},
        {tytul: 'Time', czas: '6:49'},
        {tytul: 'The Great Gig in the Sky', czas: '4:44'},
        {tytul: 'Money', czas: '6:22'},
        {tytul: 'Us and Them', czas: '7:49'},
        {tytul: 'Any Colour You Like', czas: '3:26'},
        {tytul: 'Brain Damage', czas: '3:46'},
        {tytul: 'Eclipse', czas: '2:11'},
        {tytul: 'Eclipse', czas: '2:11'}
      ]},
    {okladka: miseducation, tytul: 'The Miseducation of Lauryn Hill', wykonawca: 'Lauryn Hill', gatunek: 'Reggae', rok: 1998,
    utwory: []}
];
const sortMovies = [...movies].sort((a, b) => a.tytul.localeCompare(b.tytul));
const sortBooks = [...books].sort((a, b) => a.tytul.localeCompare(b.tytul));
const sortAlbums = [...albums].sort((a, b) => a.tytul.localeCompare(b.tytul));

const movies2010 = sortMovies.filter((film) => film.rok > 2010);
const booksYear = [...books].sort((a, b) => b.rok - a.rok);
const albumsSongs = albums.sort((a, b) => b.utwory.length - a.utwory.length);
const longestAlbum = albumsSongs[0];

function App() {
  const [filmOpen, setFilm] = useState(true);
  const [film2010Open, setFilm2010] = useState(true);
  const [bookOpen, setBook] = useState(true);
  const [bookYearOpen, setBookYear] = useState(true);
  const [albumOpen, setAlbum] = useState(true);
  const [albumSongOpen, setAlbumSong] = useState(true);
  return(
    <div className="container">
      <h2 onClick={() => setFilm(!filmOpen)}>Filmy {filmOpen ? "▾" : "▸"}</h2>
      {filmOpen && (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
      {sortMovies.map((film) => (
          <Film {...film}/>
      ))}
      </div>)}

      <h2 onClick={()=> setFilm2010(!film2010Open)}>Filmy wydane po 2010 roku {film2010Open ? "▾" : "▸"}</h2>
      {film2010Open && (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
      {movies2010.map((film) => (
          <Film {...film}/>
      ))}
      </div>)}


      <h2 onClick={()=> setBook(!bookOpen)}>Książki {bookOpen ? "▾" : "▸"}</h2>
      {bookOpen && (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
      {sortBooks.map((book) => (
          <Book {...book}/>
      ))}
      </div>)}

      <h2 onClick={()=> setBookYear(!bookYearOpen)}>Książki posortowane według roku wydania {bookYearOpen ? "▾" : "▸"}</h2>
      {bookYearOpen && (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
      {booksYear.map((book) => (
          <Book {...book}/>
      ))}
      </div>)}

      <h2 onClick={()=> setAlbum(!albumOpen)}>Albumy muzyczne {albumOpen ? "▾" : "▸"}</h2>
      {albumOpen && (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
      {sortAlbums.map((album) => (
          <Album {...album}/>
      ))}
      </div>)}

      <h2 onClick={()=> setAlbumSong(!albumSongOpen)}>Album muzyczny z największą ilością utworów {albumSongOpen ? "▾" : "▸"}</h2>
      {albumSongOpen && 
      (<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
      <Album {...longestAlbum}/>
      </div>)}

    </div>
  )
}
export default App;