import React from 'react';

const Form = (props) => (
    <form className="search-bar" onSubmit={props.handleSubmit}>
      <div className="input-group">
        <input className="form-control" type='text' placeholder="Book Title" onChange={props.handleChange} value={props.state.searchTerm}/>
        <button type='submit' value='Search'>Search</button>
      </div>
    </form>
  )

export default Form
