export function fetchMyBooks() {
  return function(dispatch) {
    fetch('https://bookshelf-app-api.herokuapp.com/api/books', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then( r => r.json() )
    .then( json => dispatch({
      type: "FETCH_UNREAD_BOOKS",
      payload: json
      })
    )
  }
}

export function deleteFromMyBooks(bookId){
  return function(dispatch){
    fetch('https://bookshelf-app-api.herokuapp.com/api/books/' + bookId, {
      method: 'DELETE',
      body: JSON.stringify({}),
      mode: 'no-cors',
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
    fetch('https://bookshelf-app-api.herokuapp.com/api/books', {
      method: 'POST',
      body: JSON.stringify(bookJSON),
      mode: 'no-cors',
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
    fetch('https://bookshelf-app-api.herokuapp.com/api/books/' + bookId, {
      method: 'PUT',
      body: JSON.stringify({}),
      mode: 'no-cors',
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
