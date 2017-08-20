import React, {Component} from 'react'
import {connect} from 'react-redux'

import Listing from './Individual-Listing'
import * as actions from '../../redux_actions/yelpSearches'

class Business_Listings extends Component {
constructor(){
  super()
  this.state = {
    going: []
  }
}

  componentWillMount() {
        this.props.initialState()
        this.forceUpdate()

  }


  viewListingsWithPeopleGoing = () => {

    return (
      <div>
        {this.props.searchReturn.map(i => {
          return (
            <div key={i.id}>
              <Listing {...i} hasPeopleGoing={this.props.going}/>
            </div>
          )
        })}
      </div>
    )

  }

  render() {
    if (this.props.searchReturn[0]) {
      return this.viewListingsWithPeopleGoing()

    } else {
      return <p></p>
    }

  }
}

function mapStateToProps(state) {
  return {searchReturn: state.business, going: state.going, user: state.user}
}
export default connect(mapStateToProps, actions)(Business_Listings)
