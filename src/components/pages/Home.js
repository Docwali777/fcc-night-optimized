import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'

class About extends Component{
  render(){
    return(
      <div>
        <LinkContainer to='/search'>
          <Button bsStyle='success'>New Search to HangOut</Button>
        </LinkContainer>

      </div>
    )
  }
}
export default About
