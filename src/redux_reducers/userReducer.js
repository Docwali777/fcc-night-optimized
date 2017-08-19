export default function userReducer(state = null, action){
  switch(action.type){
    case 'USER_SIGNED_IN':
    console.log('userReducer', action.payload);
    return action.payload.username
    break;

case 'LOGGING_OUT':
return null;
break;

case 'USER_LOCALSTORAGE':
let local = {}
local.username  = localStorage.getItem('token')
return local.username
break;
    default:
    return state
  }

}
