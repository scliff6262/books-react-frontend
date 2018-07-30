import React, { Component } from 'react'
import MyBook from './MyBook'

class Collection extends Component {
  constructor(){
    super()

    this.state = {
      myBooks: []
    }
  }

    componentDidMount(){
      fetch('/api/books')
      .then( r => r.json )
      .catch( e => console.log(e) )
      .then( json => console.log(json) )
    }

  handleClick = (e) => {
    e.persist()
    const bookId = e.target.parentElement.getAttribute("book-id")
    fetch('/api/books/' + bookId, {
      method: 'delete',
      body: {},
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then( r => r.json() )
    .then( json => {
      const books = this.state.myBooks.filter( book => book.id !== parseInt(bookId))
      this.setState({ myBooks: books })
      alert(json.title + " has been removed from your collection.")
      debugger;
    })
  }

  render(){
    console.log(this.state.myBooks)
    if(this.state.myBooks.length > 0){
      return(
        <div>
          <h2>My Collection</h2>
          <ul>
            {this.state.myBooks.map( book => <MyBook key={book.id} book={book} handleClick={this.handleClick}/> )}
          </ul>
        </div>
      )
    } else {
      return(
        <h2>Your Collection is Empty</h2>
      )
    }
  }

}

export default Collection
