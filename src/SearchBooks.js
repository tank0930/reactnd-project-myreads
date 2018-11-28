import React, { Component } from 'react'
import Book from './Book' 
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	state = {
		query: '',
		searchResult: [] 
	}
	
	updateQuery = (query) => {
		this.setState( { query }, () => {
			BooksAPI.search(this.state.query).then((searchResult) => {
				if (Array.isArray(searchResult)) {
					for (let result of searchResult) {
						for (let book of this.props.books) {
							if (book.id === result.id) {
								result.shelf = book.shelf;
							}
						}
						if (result.shelf == null || result.shelf === undefined) {
							result.shelf = 'none';
						}
					}
					this.setState({ searchResult })
				}
				else {
					this.setState({ searchResult: [] })
				}	
			})
		})
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />

					</div>
				</div>
				<div className="search-bo absoks-results">
					<ol className="books-grid">
						{this.state.searchResult.map((result) => (
									<li key={ result.id }>
											<Book book={ result } moveBook={this.props.moveBook}/>
									</li>
								)
							)
						}   
					</ol>	
				</div>
			</div>
		)
	}
}


export default SearchBooks