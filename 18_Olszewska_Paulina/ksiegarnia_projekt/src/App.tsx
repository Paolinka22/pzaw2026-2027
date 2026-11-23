import React, { useState } from 'react'
import Book, { type BookProps } from './Book.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import json from './books.json'

import './App.css'

function App() {
  const [text, setText] = useState("");
  const [selectCategory, setSelectCategory] = useState("Wszystkie")

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setText(value);
  }
  const books: BookProps[] = json;
    const filteredBooks = books.filter((book) => (book.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()) || book.authors.join(',').toLocaleLowerCase().includes(text.toLocaleLowerCase())) && (selectCategory==="Wszystkie" || selectCategory===(book.category)));

  const categories = ["Wszystkie", ...new Set(books.map(book => book.category ))];

  return (
    <div className="bg-light">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-book-half me-2"></i>e-Księgarnia</a>

          <button className="btn btn-outline-light position-relative">
            <i className="bi bi-cart3"></i>
            <span id="headerCount" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
          </button>
        </div>
      </nav>

      <main className="col-lg-9">
        <section className="card mb-3">
          <div className="card-body">
            <div className="input-group mb-3">
              <input type="text" id="searchInput" className="form-control" placeholder="Szukaj książki po tytule lub autorze..." value = {text} onChange={handleChange} />
              <button className="btn btn-secondary" onClick={()=>setText("")}>
                <i className="bi bi-x"></i>
              </button>
            </div>

            <div id="categoryFilter" className="btn-group flex-wrap" role="group">
              {categories.map((category) =>
              <button key={category} 
              className={`btn btn-sm ${
                selectCategory === category
                ? "btn-primary"
                : "btn-outline-secondary"
              }`}
              onClick={()=>setSelectCategory(category)}
              >{category}</button>
              )}
            </div>
          </div>
        </section>

        <section id="bookGrid" className="row g-3">
          <h2>Książki ({filteredBooks.length})</h2>
          {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Book key={book.id} {...book} />
          ))) : (
          <div className="col-12 text-center text-secondary py-5">
            Nie znaleziono pasujących książek.
          </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
