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
    axios.post('/api/yelp/isNotGoing', {going}).then(whoIsGoing => {
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


export function logOut(){
  return dispatch =>{
    axios.get('/logout')
      .then(log =>{
      localStorage.setItem('token', JSON.parse(null))
        dispatch({
          type: 'LOGGING_OUT',
          payload: log
        })
      }).catch(e =>{
        console.log('error loggin out');
      })
  }
}
export function USER_LOCALSTORAGE(){
  const local = localStorage.getItem('token')
  console.log('LOCAL STORGE',local);
  return {
    type: 'USER_LOCALSTORAGE',
    payload: local
  }
}
export function userLogin(user){

  return dispatch =>{

    axios.post('/login', user)
      .then(userLogin =>{
        localStorage.setItem("token", JSON.stringify(userLogin.data))
        dispatch({
          type: 'LOGIN',
          payload: userLogin.data
        })
      }).catch(e =>{
        dispatch({
          type: 'ERROR_WITH_REGISTRATION_OR_LOGIN',
          payload: 'Please check username and/or password'
        })
      })
  }
}
export function userRegistration(user){
  return dispatch =>{
    axios.post('/register', user)
      .then(user =>{

        if(user.data.message){
        return  dispatch({
            type: 'ERROR_WITH_REGISTRATION',
            payload: user.data.message
          })

        }
          localStorage.setItem("token", JSON.stringify(user.data.username))
        dispatch({type: 'USER_REGISTRATION', payload: user.data})
      }).catch(e =>console.log(e))
  }
}
