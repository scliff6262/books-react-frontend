import React from 'react'

const SearchResults = (props) => {
  let books = props.books
  if (books !== undefined){
    books = books.map( book => {
      const book_for_sale = book.saleInfo.saleability === "FOR_SALE"
      const description = (book.volumeInfo.description ? book.volumeInfo.description : null)
      return (<li key={book.id}>
        <h4 className="title">{book.volumeInfo.title}</h4>
        <p className="author"> { book.volumeInfo.authors ? book.volumeInfo.authors[0] : "No Known Author"} </p>
        <img className="img_link" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null} alt="Image Not Available"/>
        <br/>
        <a target="_blank" href={book.volumeInfo.previewLink} className="prev_link">Preview</a>
        <br/>
        {book_for_sale ? <a target="_blank" href={book.saleInfo.buyLink} className="for_sale">Buy Here</a> : <span>Not For Sale</span>}
        <br/>
        <p className="description">{ description ? description : null }</p>
        <p className="short_description">{description ? description.substring(0, 300) + "..." : null}</p>
        <button onClick={props.handleClick}>Add to Collection</button>
      </li>)}
    )
  } else {
    return <h4>No Results Found</h4>
  }
  return(
    <div>
      <h2>Search Results</h2>
      <ul>{books}</ul>
    </div>
  )
}

export default SearchResults
