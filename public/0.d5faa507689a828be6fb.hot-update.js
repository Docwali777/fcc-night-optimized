webpackHotUpdate(0,{

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;
exports.isGoing = isGoing;
exports.isNotGoing = isNotGoing;
exports.initialState = initialState;
exports.userSignedIn = userSignedIn;

var _axios = __webpack_require__(555);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function search(search) {
  return function (dispatch) {
    _axios2.default.post('/api/yelp/search', search).then(function (info) {
      dispatch({ type: 'BUSINESS_SEARCH', payload: info.data.businesses });
    }).catch(function (e) {
      console.log('Error posting to yelp search', e);
    });
  };
}

function isGoing(going) {
  return function (dispatch) {
    _axios2.default.post('/api/yelp/going', { going: going }).then(function (whoIsGoing) {
      dispatch({ type: 'POST_IS_GOING', payload: whoIsGoing.data });
    }).catch(function (e) {
      return console.log('error posting api/yelp/going', e);
    });
  };
}

function isNotGoing(going) {
  return function (dispatch) {
    _axios2.default.post('/api/yelp/isNotGoing', { going: going }).then(function (whoIsGoing) {
      dispatch({ type: 'IS_NOT_GOING', payload: whoIsGoing.data });
    }).catch(function (e) {
      return console.log('error posting api/yelp/going', e);
    });
  };
}

function initialState() {
  return function (dispatch) {
    _axios2.default.get('/api/yelp/initialState').then(function (allGoing) {
      dispatch({
        type: 'INITIAL_STATE',
        payload: allGoing.data
      });
    }).catch(function (e) {
      console.log('Axios error getting data', e);
    });
  };
}
function userSignedIn(user) {
  return function (dispatch) {
    _axios2.default.post('/register', user).then(function (user) {
      if (user.data.message) {
        console.log('there was a');
      }
      dispatch({ type: 'USER_SIGNED_IN', payload: user.data });
    });
  };
}

/***/ })

})