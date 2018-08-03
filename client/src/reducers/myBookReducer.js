export default function(state = { myBooks: [] }, action){
  switch(action.type) {
    case "FETCH_MY_BOOKS":
      return Object.assign({}, { myBooks: action.payload })
    case "ADD_BOOK":
      return state
    case "DELETE_BOOK":
      alert(action.payload.title + " has been removed from your collection.")
      const booksAfterDelete = state.myBooks.filter( book => book.id !== action.payload.id)
      return Object.assign({}, { myBooks: booksAfterDelete })
    default:
      return state
  }
}
