import React from 'react'

const SearchResults = (props) => {
  let books = props.books
  if (books === undefined){
    return <h4>No Results Found</h4>
  } else {
    books = books.map( book => {
      const book_for_sale = book.saleInfo.saleability === "FOR_SALE"
      const description = (book.volumeInfo.description ? book.volumeInfo.description : null)
      return (<li className="list-group-item" key={book.id}>
        <h4 className="title">{book.volumeInfo.title}</h4>
        <p className="author"> { book.volumeInfo.authors ? book.volumeInfo.authors[0] : "No Known Author"} </p>
        <img className="img_link" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null} alt="Not Available"/>
        <p className="short_description">{description ? description.substring(0, 300) + "..." : <i>No Description Available</i>}</p>
        <p className="description">{ description ? description : null }</p>
        <div className="links_div">
          <a target="_blank" href={book.volumeInfo.previewLink} className="prev_link">Preview</a>
          <br/>
          {book_for_sale ? <a target="_blank" href={book.saleInfo.buyLink} className="for_sale">Purchase</a> : <span>Not For Sale</span>}
          <br/>
          <button onClick={props.handleClick}>Add to Collection</button>
        </div>
      </li>)}
    )
  }
  return(
    <div>
      <ul className="list-group">{books}</ul>
    </div>
  )
}

export default SearchResults
