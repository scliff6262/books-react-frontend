import React, { Component } from 'react'
import MyBook from './MyBook'
import { fetchMyBooks, deleteFromMyBooks } from './actions/myBookActions'
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
      this.props.deleteFromMyBooks(bookId)
    }

  render(){
    const searchTermLowerCase = this.state.searchTerm.toLowerCase()
    const collectionList = this.props.myBooks.filter(book => {
        return book.title.toLowerCase().includes(searchTermLowerCase) || book.author.toLowerCase().includes(searchTermLowerCase)
      }).map(book => {
        return <MyBook key={book.id} book={book} handleClick={this.handleClick}/>
      })

    if(this.props.myBooks.length > 0){
      return(
        <div>
          <form>
            <input type="text" className="form-control" placeholder="Search Collection" onChange={this.handleChange}/>
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

const mapStateToProps = (state) => ({
  myBooks: state.myBooks.myBooks
})

export default connect(mapStateToProps, { fetchMyBooks, deleteFromMyBooks })(Collection)
