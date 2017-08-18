import axios from 'axios'

export function search(search) {
  return dispatch => {
    axios.post('/api/yelp/search', search).then(info => {
      dispatch({type: 'BUSINESS_SEARCH', payload: info.data.businesses})
    }).catch(e => {
      console.log('Error posting to yelp search', e);
    })
  }
}

export function isGoing(going) {
  return dispatch => {
    axios.post('/api/yelp/going', {going}).then(whoIsGoing => {
      dispatch({type: 'POST_IS_GOING', payload: whoIsGoing.data})
    }).catch(e => console.log('error posting api/yelp/going', e))
  }
}

export function isNotGoing(going) {
  return dispatch => {
    axios.post('/api/yelp/isNotGoing', going).then(whoIsGoing => {
      dispatch({type: 'IS_NOT_GOING', payload: whoIsGoing.data})
    }).catch(e => console.log('error posting api/yelp/going', e))
  }
}

export function initialState(){
  return dispatch =>{
    axios.get('/api/yelp/initialState')
      .then(allGoing =>{
        dispatch({
          type: 'INITIAL_STATE',
          payload: allGoing.data
        })
      }).catch(e =>{
        console.log('Axios error getting data', e);
      })
  }
}
export function userSignedIn(user){
  return dispatch =>{
    axios.post('/register', user)
      .then(user =>{
        console.log(user.data);
        if(user.data.message){
        return   console.log('there was an error with loggin in');

        }
        dispatch({type: 'USER_SIGNED_IN', payload: user.data})
      })
  }
}
export function logOut(){
  return dispatch =>{
    axios.get('/logout')
      .then(log =>{
        console.log(log);
        dispatch({
          type: 'LOGGING_OUT',
          payload: log
        })
      }).catch(e =>{
        console.log('error loggin out');
      })
  }
}
