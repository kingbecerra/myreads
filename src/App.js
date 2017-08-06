import React from 'react'
import { Route } from 'react-router-dom'
import ListBooksOnShelf from './Components/ListBooksOnShelf'
import SearchBooks from './Components/SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooksOnShelf />
        )}/>

        <Route exact path='/search' render={({history}) => (
          <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
