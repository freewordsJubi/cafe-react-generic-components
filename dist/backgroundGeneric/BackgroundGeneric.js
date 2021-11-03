"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundGeneric = function BackgroundGeneric(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, null));
};

BackgroundGeneric.defaultProps = {
  style: genericStyle.button,
  styleTitle: genericStyle.text
};
var _default = BackgroundGeneric;
exports.default = _default;