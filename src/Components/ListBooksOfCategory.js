import React, { Component } from 'react'
import ReactStars from 'react-stars'
import Constants from '../Components/Constants'

class ListBooksOfCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooks: this.props.myBooks
    }
  }

  getCategoryTitle = () => {
    switch(this.props.booksCategory) {
      case Constants.CURRENTLY_READING:
        return 'Currently Reading'

      case Constants.WANT_TO_READ:
        return 'Want to Read'

      case Constants.READ:
        return 'Read'

      default:
        return ''
    }
  }

  render() {
    let booksToShow = this.props.myBooks.filter((book) => (book.shelf === this.props.booksCategory))

    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.getCategoryTitle()}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {booksToShow.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <a href={book.canonicalVolumeLink} target="_blank">
                          <div className="book-cover" style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                            }}>
                          </div>
                        </a>
                        <div className="book-shelf-changer">
                          <select value={book.shelf} onChange={(event) => this.props.changeShelf(book, event.target.value)}>
                            <option value="moveTo" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      {book.authors.map((author) => (
                        <div key={author} className="book-authors">{author}</div>
                      ))}
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={book.averageRating}
                        color2={'#ffd700'} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooksOfCategory
