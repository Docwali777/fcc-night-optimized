export default function goingReducer(state= {going: []}, action){
  switch(action.type){

    case 'INITIAL_STATE':
    console.log('INITIAL_STATE',action.payload);
    return action.payload
    break

    case 'POST_IS_GOING':
    return {going: action.payload}
    break;

    case 'IS_NOT_GOING':
    return {going: action.payload}
    break;

    default:
    return state
  }
}
