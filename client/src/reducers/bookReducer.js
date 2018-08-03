export default function(state = { books: [] }, action){
  switch(action.type) {
    case "FETCH_BOOKS":
      return Object.assign({}, {books: action.payload} )
    default:
      return state
  }
}
