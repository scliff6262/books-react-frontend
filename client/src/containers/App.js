import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Form from '../components/Form'
import Collection from './Collection'
import SearchResults from '../components/SearchResults'
import NavBar from '../components/NavBar'
import { fetchBooks } from '../actions/bookActions'
import { addToMyBooks } from '../actions/myBookActions'


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
    const thisBook = Array.from(e.target.parentElement.parentElement.children)
    const bookJSON = {}
    bookJSON["title"] = thisBook[0].innerHTML
    bookJSON["author"] = thisBook[1].innerHTML
    bookJSON["img_link"] = thisBook[2].src
    bookJSON["prev_link"] = thisBook[5].children[0].href
    thisBook[5].children[2].href ? (bookJSON["buy_link"] = thisBook[5].children[2].href) : null
    bookJSON["description"] = thisBook[4].innerHTML
    this.props.addToMyBooks(bookJSON)
  }

  render() {
    return (
      <Router>
        <div className="App container">
          <NavBar/>
          <Switch>
            <Route exact path="/" render={ () => {
              return (
                <div>
                  <h1>Welcome to Bookshelf!</h1>
                  <p>
                  This application allows you to keep track of books you would like to read, as well as ones you have already completed
                  </p>
                  <p>
                  Select 'Add to List' to search through the Google Books library. Once a book is selected it will appear on your "Reading List".
                  Once you have finished reading this book, select "Finished Reading" and it will save to your list of "Completed Books".
                  </p>
                </div>
                )
              }
            }/>
            <Route exact path="/collection" component={Collection}/>
            <Route exact path="/complete" component={Collection}/>
            <Route exact path="/search" render={ () => {
              return (
                <div>
                  <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
                  <SearchResults books={this.props.books} handleClick={this.handleClick}/>
                </div>
                )
              }
            }/>
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
