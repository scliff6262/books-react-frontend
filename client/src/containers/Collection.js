import React, { Component } from 'react'
import MyBook from '../components/MyBook'
import {
  fetchMyBooks,
  deleteFromMyBooks,
  completedBook
} from '../actions/myBookActions'
import { connect } from 'react-redux'


class Collection extends Component {
  constructor(){
    super()
    this.state = {
      searchTerm: ""
    }
  }

    componentDidMount(){
      this.props.fetchMyBooks()
    }

    handleChange = (e) => {
      e.preventDefault()
      this.setState({ searchTerm: e.target.value})
    }

    handleClick = (e) => {
      const bookId = e.target.parentElement.getAttribute("book-id")
      if (e.target.innerHTML === "Delete"){
        this.props.deleteFromMyBooks(bookId)
      } else {
        this.props.completedBook(bookId)
      }
    }

  render(){
    const greeting = (this.props.location.pathname === "/collection" ? <h4>Up Next:</h4> : <h4>Books Finished:</h4>)
    const booksToRender = (this.props.location.pathname === "/collection" ? this.props.myBooks : this.props.booksRead)
    const searchTermLowerCase = this.state.searchTerm.toLowerCase()
    const collectionList = booksToRender.filter(book => {
        return book.title.toLowerCase().includes(searchTermLowerCase) || book.author.toLowerCase().includes(searchTermLowerCase)
      }).map(book => {
        return <MyBook key={book.id} book={book} handleClick={this.handleClick}/>
      })
    if(booksToRender.length > 0){
      return(
        <div>
          <form>
            <input type="text" className="form-control" placeholder="Search Collection" onChange={this.handleChange}/>
          </form>
          {greeting}
          <ul>
          {collectionList}
          </ul>
        </div>
      )
    } else {
      return(
        <h2>Your Reading List is Empty</h2>
      )
    }
  }

}

const mapStateToProps = (state) => ({
  myBooks: state.myBooks.myBooks,
  booksRead: state.myBooks.booksRead
})

export default connect(mapStateToProps, { fetchMyBooks, deleteFromMyBooks, completedBook })(Collection)
