import React from 'react'

const SearchResults = (props) => {
  let books = props.books
  if (books.length > 0){
    books = books.map( book => {
      console.log(book)
      return (<li key={book.id}>
        <h5>{book.volumeInfo.title}</h5>
        <p> by { book.volumeInfo.authors ? book.volumeInfo.authors[0] : "No Known Author"} </p>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
      </li>)}
    )
  } else {
    return null
  }
  return(
    <div>
      <h3>Search Results</h3>
      <ul>{books}</ul>
    </div>
  )
}

export default SearchResults
