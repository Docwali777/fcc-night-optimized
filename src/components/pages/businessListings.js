import React, {Component} from 'react'
import {connect} from 'react-redux'

import Listing from './Individual-Listing'
import * as actions from '../../redux_actions/yelpSearches'

class Business_Listings extends Component {

  componentDidMount() {
      this.props.initialState()
  }

  empty = () => {
    return (
      <div>Search</div>
    )
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
    if (this.props.searchReturn === null) {

      return this.empty()
    } else {
      return this.viewListingsWithPeopleGoing()
    }

}
}
function mapStateToProps(state) {
  return {searchReturn: state.business, going: state.going}
}
export default connect(mapStateToProps, actions)(Business_Listings)
