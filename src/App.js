import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [], 
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  updateShelf = (book, shelf) => { 
    BooksAPI.update(book, shelf).then(() => { 
      book.shelf = shelf;
      this.setState((state) => ({ 
        books: state.books.map(
          function(b) {
          if (b.id === book.id) {
            b.shelf = shelf;
          }
          return b;       
        }) 
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} moveBook={this.updateShelf} />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks books={this.state.books} moveBook={this.updateShelf} />
        )}/>
      </div>
    )
  } 
}

export default BooksApp
