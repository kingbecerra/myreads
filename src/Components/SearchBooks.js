import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      booksFound: [],
      myBooks: []
    }
  }

  fetchAllMyBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        myBooks: books
      })
      console.log(this.state.myBooks);
    })
  }

  componentDidMount() {
    this.fetchAllMyBooks()
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })

    if (query === '') {
      this.setState({
        booksFound: []
      })
    } else {
      BooksAPI.search(query, 20).then((books) => {
        //console.log(books)
        this.setState({
          booksFound: books
        })
      })
    }
  }

  getBookImageURL(bookId) {
    return "http://books.google.com/books/content?id=" +
            bookId +
            "&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
  }

  getShelfBook(bookId) {
    var currentShelf = 'none'
    this.state.myBooks.forEach(function(book) {
      if (book.id === bookId) {
        currentShelf = book.shelf
      }
    })

    return currentShelf
  }

  changeShelf = (book, newShelf) => {
    book.rating = 4.5
    BooksAPI.update(book, newShelf).then((res) => {
      this.setState((state) => ({
        booksFound: state.booksFound.map(function(bookFound) {
          if (bookFound.id === book.id) {
            bookFound.shelf = newShelf
          }
          return bookFound
        }
      )}))
      this.fetchAllMyBooks()
    })
  }

  render() {
    let booksFound
    if ((this.state.booksFound.length === 0) || (this.state.booksFound.error === "empty query")) {
      booksFound = []
    } else {
      booksFound = this.state.booksFound
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {booksFound.length > 0 && (
              <div className="showing-books">
                <span>Showing {booksFound.length} books</span>
              </div>
          )}
          <ol className="books-grid">
            {booksFound.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <a href={book.canonicalVolumeLink} target="_blank">
                      <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${this.getBookImageURL(book.id)})`
                      }} />
                    </a>
                    <div className="book-shelf-changer">
                      <select value={this.getShelfBook(book.id)} onChange={(event) => this.changeShelf(book, event.target.value)}>
                        <option value="moveTo" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  {book.authors && book.authors.map((author) => (
                    <div key={author} className="book-authors">{author}</div>
                  ))}
                  <ReactStars
                    count={5}
                    size={20}
                    edit={false}
                    value={book.averageRating}
                    color2={'#ffd700'} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

    )
  }
}

export default SearchBooks
