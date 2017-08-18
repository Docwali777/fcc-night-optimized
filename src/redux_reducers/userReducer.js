export default function userReducer(state = null, action){
  switch(action.type){
    case 'USER_SIGNED_IN':
    return action.payload
    break;

case 'LOGGING_OUT':
return null;
break;

    default:
    return state
  }

}
