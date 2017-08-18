webpackHotUpdate(0,{

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(181);

var _reactRouterDom = __webpack_require__(103);

var _reactRouterBootstrap = __webpack_require__(529);

var _reactRedux = __webpack_require__(53);

var _yelpSearches = __webpack_require__(68);

var actions = _interopRequireWildcard(_yelpSearches);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.loggedIn = function () {
      if (_this.props.user === null) {
        return _react2.default.createElement(
          _reactBootstrap.NavItem,
          { href: '/login' },
          'Login'
        );
      }
      return _react2.default.createElement(
        _reactBootstrap.NavItem,
        { onClick: function onClick() {
            return _this.logout();
          }, href: '/logout' },
        'Logout'
      );
    }, _this.logout = function () {
      browserHistory;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('USER', this.props.user);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Navbar,
        { inverse: true, collapseOnSelect: true },
        _react2.default.createElement(
          _reactBootstrap.Navbar.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Navbar.Brand,
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'Let\'s Go Out'
            )
          ),
          _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
        ),
        _react2.default.createElement(
          _reactBootstrap.Navbar.Collapse,
          null,
          _react2.default.createElement(
            _reactBootstrap.Nav,
            null,
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/about' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 1, href: '/about' },
                'About'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/contact' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 2, href: '/contact' },
                'Contact'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { pullRight: true },
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: this.props.user == null ? '/login' : '/logout' },
              this.loggedIn()
            )
          )
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Menu);

/***/ })

})