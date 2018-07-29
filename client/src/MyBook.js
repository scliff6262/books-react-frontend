import React from 'react'

const MyBook = (props) => {
  const book = props.book
  return(
    <li key={book.id} book-id={book.id}>
      <h4 className="title">{book.title}</h4>
      <p className="author"> {book.author} </p>
      <img className="img_link" src={book.img_link} alt="Image Not Available"/>
      <br/>
      <button onClick={props.handleClick}>Remove from Collection</button>
    </li>
  )
}

export default MyBook
