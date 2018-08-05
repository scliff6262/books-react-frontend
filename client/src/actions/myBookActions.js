export function fetchBooksNotRead() {
  return function(dispatch) {
    fetch("/api/books")
    .then( r => r.json() )
    .then( json => dispatch({
      type: "FETCH_UNREAD_BOOKS",
      payload: json
    }))
  }
}

export function deleteFromMyBooks(bookId){
  return function(dispatch){
    fetch('/api/books/' + bookId, {
      method: 'delete',
      body: {},
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then( r => r.json() )
      .then( json => { dispatch({
        type: "DELETE_BOOK",
        payload: json
      })
    })
  }
}

export function addToMyBooks(bookJSON){
  return function(dispatch) {
    fetch('/api/books', {
      method: 'post',
      body: JSON.stringify(bookJSON),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then( r => r.json() )
      .catch(e => alert(e))
      .then( json => { dispatch({
        type: "ADD_BOOK",
        payload: json
      })
        alert(json.title + " has been added to your collection!")
      })
    }
  }

export function completedBook(bookId) {
  return function(dispatch) {
    fetch('')
  }
}
