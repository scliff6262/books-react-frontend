import React, { Component } from 'react';

const Form = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <input type='text' placeholder="Title" onChange={props.handleChange} value={props.state.searchTerm}/>
      <input type='submit' value='Search'/>
    </form>
  )
}

export default Form
