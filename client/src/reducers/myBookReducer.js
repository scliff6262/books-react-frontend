export default function(state = { myBooks: [], booksRead: []}, action){
  switch(action.type) {
    case "FETCH_UNREAD_BOOKS":
      const booksNotRead = action.payload.filter(book => book.has_read === false)
      const booksRead = action.payload.filter(book => book.has_read === true)
      return Object.assign({}, { myBooks: booksNotRead, booksRead: booksRead })
    case "ADD_BOOK":
      return state
    case "DELETE_BOOK":
      alert(action.payload.title + " has been removed from your collection.")
      const booksAfterDelete = state.myBooks.filter( book => book.id !== action.payload.id)
      const finishedBooksAfterDelete = state.booksRead.filter( book => book.id !== action.payload.id)
      return Object.assign({}, { myBooks: booksAfterDelete, booksRead: finishedBooksAfterDelete })
    case "BOOK_READ":
      alert(action.payload.title + " has been marked as complete.")
      const newMyBooks = state.myBooks.filter( book => book.id !== action.payload.id)
      return Object.assign({}, { myBooks: newMyBooks, booksRead: state.booksRead.concat(action.payload) })
    default:
      return state
  }
}
