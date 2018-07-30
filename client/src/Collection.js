import React, { Component } from 'react'
import MyBook from './MyBook'

class Collection extends Component {
  constructor(){
    super()

    this.state = {
      searchTerm: "",
      myBooks: []
    }
  }

    componentDidMount(){
      fetch('/api/books')
      .then( r => r.json() )
      .catch( e => console.log(e) )
      .then( json => this.setState({ myBooks: json }) )
    }

    handleChange = (e) => {
      e.persist()
      this.setState({ searchTerm: e.target.value})
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
      })
    }

  render(){
    const searchTermLowerCase = this.state.searchTerm.toLowerCase()
    const collectionList = this.state.myBooks.filter(book => {
        return book.title.toLowerCase().includes(searchTermLowerCase) || book.author.toLowerCase().includes(searchTermLowerCase)
      }).map(book => {
        return <MyBook key={book.id} book={book} handleClick={this.handleClick}/>
      })

    if(this.state.myBooks.length > 0){
      return(
        <div>
          <form>
            <input type="text" placeholder="Search Collection" onChange={this.handleChange}/>
          </form>
          <h2>My Collection</h2>
          <ul>
          {collectionList}
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
