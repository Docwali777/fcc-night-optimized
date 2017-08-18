import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

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
    return(
      <div>

      <Router>
        <div>
          <Menu />
        <div className='container'>

            <Route exact path='/' component={Form_For_Location} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
        </div>
        </div>
      </Router>
      </div>
    )
  }
}
export default App
