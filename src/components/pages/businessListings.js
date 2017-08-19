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
        New Search
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
    console.log('THIS PROPS',this.props.searchReturn);
    if (this.props.searchReturn[0]) {
return this.viewListingsWithPeopleGoing()

    } else {
  return this.empty()
    }

}
}
function mapStateToProps(state) {
  return {searchReturn: state.business, going: state.going}
}
export default connect(mapStateToProps, actions)(Business_Listings)
