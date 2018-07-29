import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './form'
import './App.css';
import GOOGLE_API_KEY from './dev'
import SearchResults from './searchResults'

class App extends Component {
  constructor(){
    super()

    this.state = {
      searchTerm: "",
      books: [],
      myBooks: []
    }
  }

  handleChange = (e) => {
    e.persist()
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const q = this.state.searchTerm
    fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:" + q + "&key=" + GOOGLE_API_KEY)
    .then( r => r.json() )
    .then( json => this.setState({ books: json.items }))
  }

  handleClick = (e) => {
    e.persist()
    const thisBook = Array.from(e.target.parentElement.children)
    const bookJSON = {}
    thisBook.slice(0,3).forEach( bookProp => {
      if(bookProp.nodeName !== "IMG"){
        bookJSON[bookProp.getAttribute("class")] = bookProp.innerHTML
      } else {
        bookJSON[bookProp.getAttribute("class")] = bookProp.src
      }
    })
    fetch('/api/books', {
      method: 'post',
      body: JSON.stringify(bookJSON),
      //mode: { mode: cors },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then( r => r.json() )
    .catch(e => console.log(e))
    .then( json => console.log(json) )
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
        <SearchResults books={this.state.books} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
