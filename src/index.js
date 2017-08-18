import React, { Component } from 'react'
import { render } from 'react-dom'

import App from './App'

import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

console.log('NODE_ENV',process.env.NODE_ENV);
import reducers from './redux_reducers/index'

let store;

if(process.env.NODE_ENV === 'dev'){
   store = createStore(reducers, applyMiddleware(thunk, logger))
} else{
   store = createStore(reducers, applyMiddleware(thunk))
}



render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('wali'))
