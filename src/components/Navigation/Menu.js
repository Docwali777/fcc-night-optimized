import React, { Component } from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {connect} from 'react-redux'

import * as actions from '../../redux_actions/yelpSearches'

class Menu extends Component{


loggedIn = () =>{
  if(this.props.user === null){
    return <NavItem  href="/login">Login</NavItem>
  }
return  <NavItem onClick={()=>this.logout()} href="/logout">Logout</NavItem>

}

logout = () =>{
this.props.logOut()
}
initialState = () =>{
this.props.initialState()
}

  render(){

    return (
      <Navbar inverse collapseOnSelect >
   <Navbar.Header>
     <Navbar.Brand>
       <Link onClick={this.props.initialState()} to="/">Let's Go Out</Link>
     </Navbar.Brand>

     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
     <Nav>
       <LinkContainer to='/about'>
         <NavItem eventKey={1} href="/about">About</NavItem>
       </LinkContainer>

      <LinkContainer to='/contact'>
         <NavItem eventKey={2} href="/contact">Contact</NavItem>
      </LinkContainer>
     </Nav>
     <Nav pullRight>

      <LinkContainer to={this.props.user == null ? '/login' : '/logout'} >
          {this.loggedIn()}
      </LinkContainer>
     </Nav>
   </Navbar.Collapse>
 </Navbar>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, actions)(Menu)
