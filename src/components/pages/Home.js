import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

class About extends Component{
  render(){
    return(
      <div>
        <LinkContainer to='/search'>
          <button>New Search to HangOut</button>
        </LinkContainer>

      </div>
    )
  }
}
export default About
