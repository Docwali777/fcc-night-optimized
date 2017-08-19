import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class About extends Component{
  render(){
    return(
      <div>
        About
          <Link  to='/'>New Search</Link>
      </div>
    )
  }
}
export default About
