import React, { Component } from 'react'

import Business_Listings from '../pages/businessListings'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import * as actions from '../../redux_actions/yelpSearches'

class Form_For_Location extends Component{
constructor(props){
  super(props)
  this.state = {
    city_state: '',
    term: '',
    search: '',
    display: false
  }
}

  search =(e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  formData = (e) =>{
    e.preventDefault()
     this.props.search(this.state)
     this.setState({search: `${this.state.city_state}`, display: !this.state.display, city_state: '', term: ''})
  }

  display = () =>{
    this.setState({display: !this.state.display})
    this.props.initialState()
  }

  render(){
    return(
      <div>
        { this.state.display ?  <div>
              <Link to='/search'><button className='btn btn-primary' onClick={()=> this.display()} >New Search</button></Link>
          </div> :
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
          </form>}
          {this.state.city_state !== '' ? <p>Searches in {this.state.search} </p> : false}
          <hr />
          <Business_Listings />
        </div>
    )
  }
}
export default connect(null, actions)(Form_For_Location)
