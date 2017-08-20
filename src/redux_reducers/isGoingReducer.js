export default function goingReducer(state= [], action){
  switch(action.type){

    case 'INITIAL_STATE':
    console.log('goingReducer STATE', state);
    console.log('goingReducer ACTION',action.payload);

    return action.payload
    break

    case 'POST_IS_GOING':

    return action.payload
    break;

    case 'IS_NOT_GOING':
    return action.payload
    break;

    default:
    return state
  }
}
