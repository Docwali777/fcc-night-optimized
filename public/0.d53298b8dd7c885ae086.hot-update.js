webpackHotUpdate(0,{

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(189);

var _reactRedux = __webpack_require__(40);

var _yelpSearches = __webpack_require__(68);

var actions = _interopRequireWildcard(_yelpSearches);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listing = function (_Component) {
  _inherits(Listing, _Component);

  function Listing(props) {
    _classCallCheck(this, Listing);

    var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));

    _this.setGoingStatus = function () {
      _this.props.going.map(function (i) {
        if (i.id == _this.props.id) {
          _this.setState({ likes: i.isGoing, isGoing: !_this.state.isGoing });
        }
      });
    };

    _this.isGoing = function () {
      _this.setState({ likes: _this.state.likes + 1 });
      _this.props.isGoing(_this.props.id);
    };

    _this.isNotGoing = function () {
      _this.setState({ likes: _this.state.likes - 1 });
      _this.props.isNotGoing(_this.props.id);
    };

    _this.ifLoggedin = function () {
      if (_this.props.user !== null) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { disabled: _this.state.likes == 0 ? true : false, onClick: function onClick() {
                return _this.isNotGoing();
              }, bsStyle: 'danger', bsSize: 'xsmall' },
            ' - '
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'default', bsSize: 'small' },
            _this.state.likes
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: function onClick() {
                return _this.isGoing();
              }, bsStyle: 'success', bsSize: 'xsmall' },
            ' + '
          )
        );
      }
      return _react2.default.createElement(
        _reactBootstrap.Button,
        { bsStyle: 'default', bsSize: 'small' },
        _this.state.likes
      );
    };

    _this.state = {
      likes: 0,
      isGoing: false
    };
    return _this;
  }

  _createClass(Listing, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setGoingStatus();
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          _reactBootstrap.Well,
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            { className: 'show-grid' },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              null,
              _react2.default.createElement(
                'div',
                { className: 'text-center' },
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  null,
                  'How May People Are Going?  \xA0',
                  this.ifLoggedin()
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 6, md: 3 },
              _react2.default.createElement('img', { style: {
                  height: 100,
                  width: 100
                }, src: this.props.image_url })
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 6, md: 9 },
              _react2.default.createElement(
                'strong',
                null,
                '  ',
                this.props.name
              ),
              ' \xA0 ',
              this.props.location.address1,
              ' \xA0 ',
              this.props.location.city,
              ',',
              this.props.location.state,
              ' \xA0 ',
              this.props.location.zip_code
            )
          )
        )
      );
    }
  }]);

  return Listing;
}(_react.Component);

function mapStateToProps(state) {
  return {
    going: state.going,
    business: state.business,
    user: state.user
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Listing);

/***/ })

})