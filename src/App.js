import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import { connect } from 'react-redux'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/Navigation/Menu'
import Form_For_Location from './components/forms/From_For_Location'
import Business_Listings from './components/pages/businessListings'

//pages folder
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import UserAuth from './components/pages/UserAuth'

class App extends Component{

  render(){
    return(
      <div>

      <Router>
        <div>
          <Menu />
        <div className='container'>

            <Route exact path='/search' component={Form_For_Location} />
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={this.props.user == null  ? UserAuth : Form_For_Location} />
            <Route path='/logout' component={Home} />
        </div>
        </div>
      </Router>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
