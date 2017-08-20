import React, { Component } from 'react'

import Register from './Register'
import Login from './Login'

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
    <button onClick={()=>this.registerNewUser()} className='btn btn-info'>Register New User</button>
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
export default UserAuth
