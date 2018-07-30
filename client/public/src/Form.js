import React, { Component } from 'react';

class Form extends Component {


  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input type='text' placeholder="Title" onChange={this.props.handleChange} value={this.props.state.searchTerm}/>
        <input type='submit' value='Search'/>
      </form>
    )
  }
}

export default Form
