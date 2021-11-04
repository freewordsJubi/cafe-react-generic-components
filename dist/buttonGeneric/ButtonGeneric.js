"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _genericStyle = _interopRequireDefault(require("../../assets/styles/genericStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGeneric = function ButtonGeneric(props) {
  var handleCallback = function handleCallback() {
    props.callBackPress();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: props.style,
    onPress: handleCallback
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.styleTitle
  }, props.title), /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    style: props.styleImg,
    source: props.source
  }), props.children);
};

ButtonGeneric.defaultProps = {
  style: _genericStyle.default.button,
  styleTitle: _genericStyle.default.text,
  styleImg: _genericStyle.default.img
};
var _default = ButtonGeneric;
exports.default = _default;