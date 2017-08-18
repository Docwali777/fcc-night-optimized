import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import { connect } from 'react-redux'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/Navigation/Menu'
import Form_For_Location from './components/forms/From_For_Location'
import Business_Listings from './components/pages/businessListings'

//pages folder
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'

class App extends Component{

  render(){
    console.log('APP',this.props.user);
    return(
      <div>

      <Router>
        <div>
          <Menu />
        <div className='container'>

            <Route exact path='/' component={Form_For_Location} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={this.props.user == null  ? Login : Form_For_Location} />
            <Route path='/logout' component={About} />
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
