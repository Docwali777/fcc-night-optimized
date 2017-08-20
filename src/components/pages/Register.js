import React, { Component } from 'react'

import * as actions from '../../redux_actions/yelpSearches'
import { connect } from 'react-redux'

class Register extends Component{
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
    e.preventDefault()
  this.props.userRegistration(this.state)
this.setState({username: '',password: ''})
}

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
<h3>Register New User</h3>
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

        <button>Submit</button>
      <p className='danger'>  {this.props.userAuthErrors}</p>
      </form>
    )
  }
}

function mapStateToProps(state){
  return {
    userAuthErrors: state.userAuthErrors
  }
}
export default connect(mapStateToProps, actions)(Register)
