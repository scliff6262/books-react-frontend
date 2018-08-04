import React from 'react'

const MyBook = (props) => {
  const book = props.book
  return(
    <li book-id={book.id}>
      <h4 className="title">{book.title}</h4>
      <p className="author"> {book.author} </p>
      <img className="img_link" src={book.img_link} alt="Image Not Available"/>
      <p>{ book.prev_link ? <a target="_blank" href={book.prev_link}>Preview</a> : "Preview Not Available"}</p>
      <p>{ book.buy_link ? <a target="_blank" href={book.buy_link}>Buy Here</a> : "Not For Sale"}</p>
      <p>{ book.description.substring(0, 300) + "..." }</p>
      <button onClick={props.handleClick}>Remove from Collection</button>
    </li>
  )
}

export default MyBook
