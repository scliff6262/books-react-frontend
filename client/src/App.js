import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Form from './Form'
import Collection from './Collection'
import './App.css';
import SearchResults from './SearchResults'
import { fetchBooks } from './actions/bookActions'
import { addToMyBooks } from './actions/myBookActions'
import GOOGLE_API_KEY from './dev'


class App extends Component {
  constructor(){
    super()
    this.state = {
      searchTerm: ""
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
    this.props.fetchBooks(q)
  }

  handleClick = (e) => {
    e.persist()
    const thisBook = Array.from(e.target.parentElement.children)
    const bookJSON = {}
    thisBook.slice(0,4).forEach( bookProp => {
      if (bookProp.className === "for_sale") {
        bookProp.innerHTML === "Not For Sale" ? bookJSON["buy_link"] = null : bookJSON["buy_link"] = bookProp.children[0].getAttribute("href")
      } else if (bookProp.nodeName !== "IMG"){
        bookJSON[bookProp.getAttribute("class")] = bookProp.innerHTML
      } else {
        bookJSON[bookProp.getAttribute("class")] = bookProp.src
      }
    })
    this.props.addToMyBooks(bookJSON)
  }


  render() {
    return (
      <Router>
        <div className="App">
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
          <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
          <NavLink style={{ marginRight: '10px' }} to="/search">Search</NavLink>
          <NavLink style={{ marginRight: '10px' }} to="/collection">My Collection</NavLink>
        </div>
          <Switch>
            <Route exact path="/" render={ () => <h1>WELCOME</h1>}/>
            <Route exact path="/search" render={() => {
              return (
                <div>
                  <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
                  <SearchResults books={this.props.books} handleClick={this.handleClick}/>
                </div>
                )
              }
            }/>
            <Route exact path="/collection" component={Collection}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books
})

export default connect(mapStateToProps, { fetchBooks, addToMyBooks })(App);
