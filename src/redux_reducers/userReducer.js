export default function userReducer(state = null, action){
  switch(action.type){
    case 'USER_REGISTRATION':
    console.log('userReducer', action.payload);
    return action.payload.username
    break;

    case 'LOGIN':
    let localUser = {}

    console.log(localUser);
    console.log(JSON.stringify(localUser));
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
