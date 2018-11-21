import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'


class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.shelfTitle }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.books.filter(
                  (book) => (book.shelf === this.props.shelfName)).map((filteredBook) => (
                    <li key={ filteredBook.id }>
                        <Book book={ filteredBook } moveBook={this.props.moveBook}/>
                    </li>
                  )
                )
              }   
          </ol>
        </div>
      </div>  
    );
  }
}
	
class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelfName='currentlyReading' shelfTitle='Currently Reading' books={ this.props.books } moveBook={this.props.moveBook}/>
            <BookShelf shelfName='wantToRead' shelfTitle='Want to Read' books={ this.props.books } moveBook={this.props.moveBook}/>
            <BookShelf shelfName='read' shelfTitle='Read' books={ this.props.books } moveBook={this.props.moveBook}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>  
    );
  }
}
		

export default ListBooks