export default function userAuthErrors(state = '', action){

switch(action.type){
case 'ERROR_WITH_REGISTRATION_OR_LOGIN':
return action.payload;
break;

case 'ERROR_WITH_REGISTRATION':
return action.payload;
break

default: return state
}

}
