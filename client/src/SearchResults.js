import React from 'react'

const SearchResults = (props) => {
  let books = props.books
  if (books.length > 0){
    books = books.map( book => {
      const book_for_sale = book.saleInfo.saleability === "FOR_SALE"
      return (<li key={book.id}>
        <h4 className="title">{book.volumeInfo.title}</h4>
        <p className="author"> { book.volumeInfo.authors ? book.volumeInfo.authors[0] : "No Known Author"} </p>
        <img className="img_link" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null} alt="Image Not Available"/>
        <p className="for_sale">
          {book_for_sale ? <a target="_blank" href={book.saleInfo.buyLink}>Buy Here</a> : "Not For Sale"}
        </p>
        <br/>
        <button onClick={props.handleClick}>Add to Collection</button>
      </li>)}
    )
  } else {
    return null
  }
  return(
    <div>
      <h2>Search Results</h2>
      <ul>{books}</ul>
    </div>
  )
}

export default SearchResults
