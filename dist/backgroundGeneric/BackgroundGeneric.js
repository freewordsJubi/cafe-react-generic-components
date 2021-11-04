"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _genericStyle = _interopRequireDefault(require("../styles/genericStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundGeneric = function BackgroundGeneric(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.style
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    style: props.styleImg,
    source: props.source
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.stylecontentContainer
  }, props.children))));
};

BackgroundGeneric.defaultProps = {
  style: _genericStyle.default.container,
  stylecontentContainer: _genericStyle.default.contentContainer,
  styleImg: _genericStyle.default.imgBg,
  styleTitle: _genericStyle.default.textTitle
};
var _default = BackgroundGeneric;
exports.default = _default;