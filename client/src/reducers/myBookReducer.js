export default function(state = { myBooks: [], booksRead: []}, action){
  switch(action.type) {
    case "FETCH_UNREAD_BOOKS":
      debugger;
      const booksNotRead = action.payload.filter(book => book.has_read === false)
      return Object.assign({}, { myBooks: booksNotRead })
    case "ADD_BOOK":
      return state
    case "DELETE_BOOK":
      alert(action.payload.title + " has been removed from your collection.")
      const booksAfterDelete = state.myBooks.filter( book => book.id !== action.payload.id)
      return Object.assign({}, { myBooks: booksAfterDelete })
    case "BOOK_READ":

    default:
      return state
  }
}
