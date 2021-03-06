"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BackgroundGeneric", {
  enumerable: true,
  get: function get() {
    return _BackgroundGeneric.default;
  }
});
Object.defineProperty(exports, "ButtonGeneric", {
  enumerable: true,
  get: function get() {
    return _ButtonGeneric.default;
  }
});
Object.defineProperty(exports, "ModalGeneric", {
  enumerable: true,
  get: function get() {
    return _ModalGeneric.default;
  }
});
Object.defineProperty(exports, "randomChoice", {
  enumerable: true,
  get: function get() {
    return _functionsExported.randomChoice;
  }
});

var _ButtonGeneric = _interopRequireDefault(require("./buttonGeneric/ButtonGeneric"));

var _BackgroundGeneric = _interopRequireDefault(require("./backgroundGeneric/BackgroundGeneric"));

var _ModalGeneric = _interopRequireDefault(require("./modalGeneric/ModalGeneric"));

var _functionsExported = require("./functionsExported");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }