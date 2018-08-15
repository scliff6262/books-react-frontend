export function fetchMyBooks() {
  return function(dispatch) {
    fetch("/api/books.json")
    .then( r => r.json() )
    .then( json => dispatch({
      type: "FETCH_UNREAD_BOOKS",
      payload: json
    }))
  }
}

export function deleteFromMyBooks(bookId){
  return function(dispatch){
    fetch('/api/books/' + bookId + ".json", {
      method: 'delete',
      body: JSON.stringify({}),
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
    fetch('/api/books.json', {
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
    fetch('/api/books/' + bookId + ".json", {
      method: 'put',
      body: JSON.stringify({}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then( r => r.json() )
      .catch( e => alert(e))
      .then( json => { dispatch({
        type: "BOOK_READ",
        payload: json
      })
    })
  }
}
