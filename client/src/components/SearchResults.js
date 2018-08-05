import React from 'react'
import SearchBook from './SearchBook'

const SearchResults = (props) => {
  let books = props.books
  if (books === undefined){
    return <h4>No Results Found</h4>
  } else {
    books = books.map( book => {
        return <SearchBook book={book} key={book.id} handleClick={props.handleClick}/>
      }
    )
  }
  return(
    <div>
      <ul className="list-group">{books}</ul>
    </div>
  )
}

export default SearchResults
