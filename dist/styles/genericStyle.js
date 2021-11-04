"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reactNative.StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  contentContainer: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    height: '100%'
  },
  containerModal: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0099FF',
    width: '100%',
    padding: 5
  },
  img: {
    width: 0,
    height: 0
  },
  imgBg: {
    height: _reactNative.Dimensions.get('window').height * 0.999
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});

exports.default = _default;