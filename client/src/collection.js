import React, { Component } from 'react'

class Collection extends Component {
  constructor(){
    super()

    this.state = {
      myBooks: []
    }
  }

    componentDidMount(){
      fetch('/api/books')
      .then( r => r.json() )
      .then( json => this.setState({ myBooks: json }) )
    }

  render(){
    return(
      <div>
        <ul>{this.state.myBooks.map( book => <li key={book.index}>{book.title}</li> )}</ul>
      </div>
    )
  }

}

export default Collection
