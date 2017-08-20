import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'

class About extends Component {
  render() {
    return (
      <div>
        <LinkContainer to='/search'>
          <Button bsStyle='success'>New Search to HangOut</Button>
        </LinkContainer>
        <div>
          <h1>
            Build a Nightlife Coordination App</h1>
          <h3>Obectives</h3>
          <ul>
            <li>
              Build a full stack JavaScript app that is functionally similar to this: <a>http://whatsgoinontonight.herokuapp.com/ </a> and deploy it to Heroku.</li>
            <hr/>
            <li>*** Modfication - As an unauthenticated user, I can search any location in using the Yelp API (location and search term) - and - I can add myself and as many peope as I want to the list</li>

            <hr/>
            <li>
              As an authenticated user, I can add myself to a bar to indicate I am going there tonight.
            </li>
            <hr />
            <li>
              As an authenticated user, I can remove myself from a bar if I no longer want to go there.
            </li>
            <hr />
            <li>User Story: As an unauthenticated user, when I login I should not have to search again.</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default About
