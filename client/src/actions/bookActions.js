import GOOGLE_API_KEY from '../dev'

export function fetchBooks(q) {
    return function(dispatch) {
      fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:" + q + "&key=" + GOOGLE_API_KEY)
      .then( r => r.json() )
      .then( json => dispatch({
        type: "FETCH_BOOKS",
        payload: json.items
      }))
    }
}
