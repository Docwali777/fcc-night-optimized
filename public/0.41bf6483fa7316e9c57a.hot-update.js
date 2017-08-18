webpackHotUpdate(0,{

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userReducer;
function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case 'USER_SIGNED_IN':
      return action.payload;
      break;

    case 'LOGGING_OUT':

    default:
      return state;
  }
}

/***/ })

})