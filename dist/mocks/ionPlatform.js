"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var baseContext = {
  isIos: false,
  isAndroid: false
};

var iosContext = exports.iosContext = _extends({}, baseContext, {
  isIos: true,
  isAndroid: false
});

var androidContext = exports.androidContext = _extends({}, baseContext, {
  isIos: false,
  isAndroid: true
});

exports.default = baseContext;