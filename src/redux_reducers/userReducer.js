export default function userReducer(state = '', action){
  switch(action.type){
    case 'USER_REGISTRATION':
    return action.payload.username
    break;

    case 'LOGIN':
    let localUser = {}

    localUser.username = localStorage.setItem('token', JSON.stringify(action.payload))
    return localUser;
    break

case 'LOGGING_OUT':
return null;
break;

case 'USER_LOCALSTORAGE':
let local = localStorage.getItem('token')
return JSON.parse(local)
break;
    default:
    return state
  }

}
