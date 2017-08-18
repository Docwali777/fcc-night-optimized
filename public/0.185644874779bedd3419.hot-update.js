webpackHotUpdate(0,{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(40);

var _IndividualListing = __webpack_require__(575);

var _IndividualListing2 = _interopRequireDefault(_IndividualListing);

var _yelpSearches = __webpack_require__(68);

var actions = _interopRequireWildcard(_yelpSearches);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Business_Listings = function (_Component) {
  _inherits(Business_Listings, _Component);

  function Business_Listings() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Business_Listings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Business_Listings.__proto__ || Object.getPrototypeOf(Business_Listings)).call.apply(_ref, [this].concat(args))), _this), _this.empty = function () {
      return _react2.default.createElement(
        'div',
        null,
        'Search'
      );
    }, _this.viewListingsWithPeopleGoing = function () {

      return _react2.default.createElement(
        'div',
        null,
        _this.props.searchReturn.map(function (i) {
          return _react2.default.createElement(
            'div',
            { key: i.id },
            _react2.default.createElement(_IndividualListing2.default, _extends({}, i, { hasPeopleGoing: _this.props.going }))
          );
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Business_Listings, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.initialState();
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('THIS PROPS', this.props.searchReturn);
      if (this.props.searchReturn[0]) {

        return this.empty();
      } else {}
    }
  }]);

  return Business_Listings;
}(_react.Component);

function mapStateToProps(state) {
  return { searchReturn: state.business, going: state.going };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Business_Listings);

/***/ })

})