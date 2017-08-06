import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooksOfCategory from '../Components/ListBooksOfCategory'
import Constants from '../Components/Constants'
import * as BooksAPI from '../BooksAPI'

class ListBooksOnShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooks: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({myBooks : books }, function() {
      })
    })
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((res) => {
      // console.log(res)
    })

    this.setState((state) => ({
      myBooks: state.myBooks.map(function(myBook) {
        if (myBook.id === book.id) {
          myBook.shelf = newShelf
        }
        return myBook
      }
    )}))
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Books Library</h1>
        </div>
        <ListBooksOfCategory
          myBooks={this.state.myBooks}
          booksCategory={Constants.CURRENTLY_READING}
          changeShelf={this.changeShelf}
          />
        <ListBooksOfCategory
          myBooks={this.state.myBooks}
          booksCategory={Constants.WANT_TO_READ}
          changeShelf={this.changeShelf}
        />
        <ListBooksOfCategory
          myBooks={this.state.myBooks}
          booksCategory={Constants.READ}
          changeShelf={this.changeShelf}
        />
        <div className='open-search'>
          <Link
            to='/search'
          >Add a Book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooksOnShelf
