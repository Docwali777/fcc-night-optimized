import React, { Component } from 'react'

import Business_Listings from '../pages/businessListings'

import { connect } from 'react-redux'
import * as actions from '../../redux_actions/yelpSearches'

class Form_For_Location extends Component{
constructor(props){
  super(props)
  this.state = {
    city_state: '',
    term: '',
    search: ''
  }
}

  search =(e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  formData = (e) =>{
    e.preventDefault()
this.setState({search: `${this.state.city_state}`})
    this.props.search(this.state)

  }

listingsOfNewSearch = () =>{
  if(this.props.searchReturn !== undefined){
    return (
      <div>
          <a href='/'>New Search</a>
      </div>
    )
  }
  return (
    <form onSubmit={this.formData}>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder= 'search by city,state'
          onChange={this.search}
          name='city_state'
          value={this.state.city_state}
        />
      </div>

      <div className='form-group'>
        <input
          className='form-control'
          placeholder= 'Search Term'
          onChange={this.search}
          name='term'
          value={this.state.term}
        />
      </div>

      <button className='btn btn-success'>Sumit</button>
    </form>

  )
}

  render(){
    console.log('MENU',this.props.searchReturn);
    return(
      <div>
          {this.listingsOfNewSearch()}

              {this.state.city_state !== '' ? <p>Searches in {this.state.search} </p> : false}
        <hr />
        <Business_Listings />
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    searchReturn: state.business[0]
  }
}

export default connect(mapStateToProps, actions)(Form_For_Location)
