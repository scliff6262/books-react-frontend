import React from 'react'

const MyBook = (props) => {
  const book = props.book
  return(
    <li book-id={book.id}>
      <h4 className="title">{book.title}</h4>
      <p className="author"> {book.author} </p>
      <img className="img_link" src={book.img_link} alt="Image Not Available"/>
      <p>{ book.buy_link ? <a href={book.buy_link}>Buy Here</a> : "Not For Sale"}</p>
      <br/>
      <button onClick={props.handleClick}>Remove from Collection</button>
    </li>
  )
}

export default MyBook
