export default function userReducer(state = null, action){
  switch(action.type){
    case 'USER_REGISTRATION':
    return action.payload.username
    break;

    case 'LOGIN':
    return action.payload
    break

case 'LOGGING_OUT':
return null;
break;

case 'USER_LOCALSTORAGE':
console.log('USER_LOCALSTORAGE',action.payload);
return JSON.parse(action.payload)
break;
    default:
    return state
  }

}
