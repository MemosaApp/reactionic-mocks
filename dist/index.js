'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.androidContext = exports.iosContext = exports.context = undefined;

var _ionPlatform = require('./mocks/ionPlatform');

var _ionPlatform2 = _interopRequireDefault(_ionPlatform);

var _Wrapper = require('./components/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simply use this or combine it with your mock
 * context
 *
 * ```
 * import { context } from 'reactionic-mocks';
 *
 * // ...
 *
 * const wrapper = mount(<MyComponent />, { context });
 * ```
 *
 * You can also use `import { iosContext, androidContext } from 'reactionic-mocks';`
 *
 * @see Wrapper
 */
var context = exports.context = {
  ionPlatform: _ionPlatform2.default
};

exports.iosContext = _ionPlatform.iosContext;
exports.androidContext = _ionPlatform.androidContext;
var Wrapper = exports.Wrapper = _Wrapper2.default;