import React, { Component } from 'react'

import * as actions from '../../redux_actions/yelpSearches'
import { connect } from 'react-redux'

class Login extends Component{
constructor(props){
  super(props)
  this.state = {
    username: '',
    password: ''
  }
}
handleChange = (e) =>{
  this.setState({[e.target.name]: e.target.value})
}
handleSubmit = (e) =>{

  console.log('USER STATE',this.state);
  this.props.userSignedIn(this.state)
    e.preventDefault()
}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>

        <div className='form-group'>
          <input
            className='form-control'
            placeholder='username'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>

        <div className='form-group'>
          <input
            className='form-control'
            placeholder='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    )
  }
}
export default connect(null, actions)(Login)
