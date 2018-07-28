import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './form'
import './App.css';

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
    fetch("https://www.googleapis.com/books/v1/volumes?q=intitle" + q + "&key=AIzaSyDD1qNlBPgSUbyL-t1h6WSBmar7z1Hmywo")
    .then( r => r.json() )
    .then( json => this.setState({ books: json.items }))
  }


  render() {
    console.log(this.state.books)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
      </div>
    );
  }
}

export default App;
