import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'


let BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ props.shelfTitle }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {props.books.filter(
                (book) => (book.shelf === props.shelfName)).map((filteredBook) => (
                  <li key={ filteredBook.id }>
                      <Book book={ filteredBook } moveBook={props.moveBook}/>
                  </li>
                )
              )
            }   
        </ol>
      </div>
    </div>  
  );
}
	
let ListBooks = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf shelfName='currentlyReading' shelfTitle='Currently Reading' books={ props.books } moveBook={props.moveBook}/>
          <BookShelf shelfName='wantToRead' shelfTitle='Want to Read' books={ props.books } moveBook={props.moveBook}/>
          <BookShelf shelfName='read' shelfTitle='Read' books={ props.books } moveBook={props.moveBook}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>  
  );
}
		

export default ListBooks