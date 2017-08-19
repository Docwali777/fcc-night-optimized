export default function userReducer(state = null, action){
  switch(action.type){
    case 'USER_REGISTRATION':
    console.log('userReducer', action.payload);
    return action.payload.username
    break;

    case 'LOGIN':
    let localUser
    localUser.username = action.payload
    localStorage.setItem('token', {username: action.payload})
    return localUser;
    break

case 'LOGGING_OUT':
return null;
break;

case 'USER_LOCALSTORAGE':
let local = {}
local.username  = localStorage.getItem('token')
return JSON.parse(local.username)
break;
    default:
    return state
  }

}
