import React, { Component } from 'react'

import { connect } from 'react-redux'

import Register from './Register'
import Login from './Login'
import * as actions from '../../redux_actions/yelpSearches'

class UserAuth extends Component{
constructor(){
  super()
  this.state = {
    registeredUser: true
  }
}


previouslyRegisterUser = () =>{
if(this.state.registeredUser){
  return <Login />
}
return <Register />
}

registerNewUser = () =>{
  this.setState({registeredUser: !this.state.registeredUser})
}

  render(){
return (
  <div>
    <button onClick={()=>this.registerNewUser()} className='btn btn-info'>{!this.state.registeredUser ? 'Login' : 'Register New User'}</button>
    {this.previouslyRegisterUser()}

  </div>
)

}
}

function mapStateToProps(state){
  return {
    userAuthErrors: state.userAuthErrors
  }
}
export default connect(null, actions)(UserAuth)
