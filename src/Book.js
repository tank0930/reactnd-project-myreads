import React, { Component } from 'react'

let Book = (props) => {  
	
	return (
		<div className="book">
			<div className="book-top">
			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${props.book.imageLinks ? props.book.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'})` }}></div>            
			<div className="book-shelf-changer">
				<select value={ props.book.shelf } onChange={(event) => (props.moveBook(props.book, event.target.value))} >
				<option value="moveTo" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
				</select>
			</div>
			</div>
			<div className="book-title">{ props.book.title }</div>
			<div className="book-authors">{ props.book.authors }</div>
		</div>
	);
}
  
export default Book