module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/bfT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PERFORMER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return USER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return STUDIO_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIRequest; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rP/q");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XwMy");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const TOKEN = 'token';
const ROLE = 'role';
const PERFORMER_ROLE = 'performer';
const USER_ROLE = 'user';
const STUDIO_ROLE = 'studio';
const SORT = {
  descend: 'desc',
  ascend: 'asc'
};
class APIRequest {
  setAuthHeaderToken(token) {
    APIRequest.token = token;
  }
  /**
   * Parses the JSON returned by a network request
   *
   * @param  {object} response A response from a network request
   *
   * @return {object}          The parsed JSON from the request
   */


  parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }

    return response.json();
  }
  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */


  async checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    if (response.status === 403) {
      if (false) {}
    } // const error = new Error(response.statusText) as any;
    // error.response = response;
    // throw error;


    throw response.clone().json();
  }

  request(url, method, body, headers) {
    const verb = (method || 'get').toUpperCase();

    const updatedHeader = _objectSpread({
      'Content-Type': 'application/json',
      // TODO - check me
      Authorization: APIRequest.token || (false ? undefined : '')
    }, headers || {});

    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`, {
      method: verb,
      headers: updatedHeader,
      body: body ? JSON.stringify(body) : null
    }).then(this.checkStatus).then(this.parseJSON);
  }

  buildUrl(baseUrl, params) {
    if (!params) {
      return baseUrl;
    }

    const queryString = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    return `${baseUrl}?${queryString}`;
  }

  get(url, headers) {
    return this.request(url, 'get', null, headers);
  }

  post(url, data, headers) {
    return this.request(url, 'post', data, headers);
  }

  put(url, data, headers) {
    return this.request(url, 'put', data, headers);
  }

  del(url, data, headers) {
    return this.request(url, 'delete', data, headers);
  }

  upload(url, files, options = {
    onProgress() {},

    method: 'POST'
  }) {
    const uploadUrl = Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`;
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData();
      files.forEach(f => formData.append(f.fieldname, f.file, f.file.name));
      options.customData && Object.keys(options.customData).forEach(fieldname => typeof options.customData[fieldname] !== 'undefined' && formData.append(fieldname, options.customData[fieldname]));
      req.responseType = 'json';
      req.open(options.method || 'POST', uploadUrl);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  register(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.documentVerification) {
        const documentVerificationFile = data.documentVerification.file.originFileObj;
        formData.append('documentVerification', documentVerificationFile, documentVerificationFile.name);
      }

      if (data.idVerification) {
        const idVerificationDile = data.idVerification.file.originFileObj;
        formData.append('idVerification', idVerificationDile, idVerificationDile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['documentVerification', 'idVerification'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

}

_defineProperty(APIRequest, "token", '');

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("grZg");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4xUc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  }
};

const PasswordChange = ({
  onFinish,
  submiting
}) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
  layout: "vertical",
  onFinish: onFinish
}, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "prePassword",
  label: "Old Password",
  rules: [{
    required: true,
    message: 'Please input your old password!'
  }, {
    min: 6,
    max: 14,
    message: '6-14 characters'
  }],
  hasFeedback: true
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
  placeholder: "Old Password"
})), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "password",
  label: "New Password",
  rules: [{
    required: true,
    message: 'Please input your password!'
  }, {
    min: 6,
    max: 14,
    message: '6-14 characters'
  }],
  hasFeedback: true
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
  placeholder: "Password"
})), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "confirm",
  dependencies: ['password'],
  hasFeedback: true,
  label: "Retype password",
  rules: [{
    required: true,
    message: 'Please confirm your password!'
  }, ({
    getFieldValue
  }) => ({
    validator(rule, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }

      return Promise.reject(new Error('The two passwords that you entered do not match!'));
    }

  })]
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
  placeholder: "Confirm Password"
})), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  type: "primary",
  htmlType: "submit",
  loading: submiting,
  disabled: submiting,
  className: "btn-submit"
}, "Save Changes")));

PasswordChange.defaultProps = {
  submiting: false
};
/* harmony default export */ __webpack_exports__["a"] = (PasswordChange);

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "GMeC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return beforeAvatarUpload; });
/* harmony import */ var src_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XwMy");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


function beforeAvatarUpload(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const isImageAccept = src_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].imageAccept.split(',').map(item => item.trim()).indexOf(`.${ext}`);

  if (isImageAccept === -1) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`You can only upload ${src_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].imageAccept} file!`);
    return false;
  }

  const isLt2M = file.size / 1024 / 1024 < (src_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].maximumSizeUploadAvatar || 2);

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`Image must smaller than ${src_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].maximumSizeUploadAvatar || 2}MB!`);
    return false;
  }

  return true;
}

/***/ }),

/***/ "ITiG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XwMy");


class UserService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  me(headers) {
    return this.get('/users/me', headers);
  }

  updateMe(payload) {
    return this.put('/users', payload);
  }

  getAvatarUploadUrl(userId) {
    if (userId) {
      return `${_env__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].apiEndpoint}/users/${userId}/avatar/upload`;
    }

    return `${_env__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].apiEndpoint}/users/avatar/upload`;
  }

  search(query) {
    return this.get(this.buildUrl('/users/search', query));
  }

  findById(id) {
    return this.get(`/users/view/${id}`);
  }

}
const userService = new UserService();

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "NsEo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export arrayToTree */
/* unused harmony export pathMatchRegexp */
/* unused harmony export queryAncestors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getResponseError; });
/* unused harmony export isMobile */
/* unused harmony export getUrlParameter */
/* unused harmony export DAY_OF_WEEK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getDefaultSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getNextShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getBase64; });
/* unused harmony export convertConnectionData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkUserLogin; });
/* unused harmony export getCurrentUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isPhysicalProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatBoxMessageClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formatDataWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatDataHeight; });
/* unused harmony export formatPrice */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVM");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/bfT");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */

function arrayToTree(array, id = 'id', parentId = 'pid', children = 'children') {
  const result = [];
  const hash = {};
  const data = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(array);
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index];
  });
  data.forEach(item => {
    const hashParent = hash[item[parentId]];

    if (hashParent) {
      !hashParent[children] && (hashParent[children] = []);
      hashParent[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
/**
 * Whether the path matches the regexp if the language prefix is ignored, https://github.com/pillarjs/path-to-regexp.
 * @param   {string|regexp|array}     regexp     Specify a string, array of strings, or a regular expression.
 * @param   {string}                  pathname   Specify the pathname to match.
 * @return  {array|null}              Return the result of the match or null.
 */

function pathMatchRegexp(regexp, pathname) {
  return path_to_regexp__WEBPACK_IMPORTED_MODULE_1__["pathToRegexp"](regexp).exec(pathname);
}
/**
 * In an array of objects, specify an object that traverses the objects whose parent ID matches.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    current   Specify the object that needs to be queried.
 * @param   {string}    parentId  The alias of the parent ID of the object in the array.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @return  {array}    Return a key array.
 */

function queryAncestors(array, current, parentId, id = 'id') {
  const result = [current];
  const hashMap = new Map();
  array.forEach(item => hashMap.set(item[id], item)); // eslint-disable-next-line no-shadow

  const getPath = current => {
    const currentParentId = hashMap.get(current[id])[parentId];

    if (currentParentId) {
      result.push(hashMap.get(currentParentId));
      getPath(hashMap.get(currentParentId));
    }
  };

  getPath(current);
  return result;
}
function getResponseError(data) {
  if (!data) {
    return '';
  }

  if (typeof data === 'string') {
    return data;
  }

  if (Array.isArray(data.message)) {
    const item = data.message[0];

    if (!item.constraints) {
      return data.error || 'Bad request!';
    }

    return Object.values(item.constraints)[0];
  } // TODO - parse for langauge or others


  return typeof data.message === 'string' ? data.message : 'Bad request!';
}
function isMobile() {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    return true;
  }

  return false;
} // eslint-disable-next-line consistent-return

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  let sParameterName;
  let i;

  for (i = 0; i < sURLVariables.length; i += 1) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}
const DAY_OF_WEEK = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday'
};
function getDefaultSchedule() {
  const defaultVal = {
    start: null,
    end: null,
    closed: true
  };
  return {
    mon: _objectSpread({}, defaultVal),
    tue: _objectSpread({}, defaultVal),
    wed: _objectSpread({}, defaultVal),
    thu: _objectSpread({}, defaultVal),
    fri: _objectSpread({}, defaultVal),
    sat: _objectSpread({}, defaultVal),
    sun: _objectSpread({}, defaultVal)
  };
}
function getNextShow(schedule) {
  let weekDay = parseInt(moment__WEBPACK_IMPORTED_MODULE_2___default()().format('e'), 10);
  let i = 0;
  let nextShow;
  const performerShows = Object.keys(schedule).filter(key => !schedule[key].closed);

  do {
    const date = moment__WEBPACK_IMPORTED_MODULE_2___default()().day(weekDay).format('ddd').toLowerCase();

    if (performerShows.indexOf(date) > -1) {
      nextShow = date;
    }

    weekDay += 1;
    i += 1;
  } while (i < 7 && !nextShow);

  if (nextShow) {
    return `${schedule[nextShow].start} ${moment__WEBPACK_IMPORTED_MODULE_2___default()().day(weekDay - 1).format('DD/MM/YYYY')}`;
  }

  return '';
}
function getSearchData(pagination, filters, sorter, state) {
  let {
    sort,
    sortBy,
    filter
  } = state;
  const {
    limit
  } = state;

  if (filters) {
    Object.keys(filters).forEach(key => {
      if (filters[key] && filters[key].length) {
        // eslint-disable-next-line prefer-destructuring
        filter[key] = filters[key][0];
      }

      if (!filters[key]) {
        filter[key] = '';
      }
    });
  } else {
    filter = {};
  }

  if (sorter) {
    if (sorter.order) {
      const {
        field,
        order
      } = sorter;
      sort = _services_api_request__WEBPACK_IMPORTED_MODULE_3__[/* SORT */ "d"][order];
      sortBy = field;
    } else {
      sortBy = 'createdAt';
      sort = 'desc';
    }
  }

  return _objectSpread(_objectSpread(_objectSpread({}, state), filter), {}, {
    sort,
    sortBy,
    offset: (pagination.current - 1) * limit
  });
}
function getBase64(originFileObj, status = 'uploading', file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    if (originFileObj) {
      reader.readAsDataURL(originFileObj);

      reader.onload = () => resolve(_objectSpread(_objectSpread({}, originFileObj), {}, {
        status,
        name: originFileObj.name,
        url: reader.result,
        originFileObj
      }));

      reader.onerror = error => reject(error);
    } else {
      resolve(file);
    }
  });
}
function convertConnectionData(data) {
  const arr = data.split('%/%');
  const serverData = arr[1] && JSON.parse(arr[1]);
  const clientData = arr[0] && JSON.parse(arr[0]);
  return {
    serverData,
    clientData
  };
}
function checkUserLogin(isLoggedIn, user) {
  if (!isLoggedIn) return false;
  if (!user && !user._id) return false;
  return true;
}
function getCurrentUser(user, performer) {
  if (user && user._id) return user;
  if (performer && performer._id) return performer;
  return null;
}
function isPhysicalProduct(item) {
  if (item && item.type === 'physical') return true;
  return false;
}
function chatBoxMessageClassName(req) {
  const {
    isMine,
    startsSequence,
    endsSequence,
    data: {
      type
    }
  } = req;
  return classnames__WEBPACK_IMPORTED_MODULE_4___default()('message', {
    mine: isMine && type !== 'tip'
  }, {
    tip: type === 'tip'
  }, {
    start: !!startsSequence
  }, {
    end: !!endsSequence
  });
}

function convertFeetToCm(feet, inch) {
  const [f] = feet.split('.');
  const [i] = inch.split('.');
  return (parseInt(f, 10) * 12 + parseInt(i, 10)) * 2.54;
}

function formatDataWeight(min = 99, max = 319) {
  let i = min;
  const result = [];

  do {
    result[i] = (i * 0.45).toFixed(2);
    i += 1;
  } while (i < max);

  return result.map((v, index) => ({
    label: `${index}  lbs (${v}kg)`,
    value: `${index} lbs`
  }));
}
function formatDataHeight(min = 4, max = 7) {
  const result = [];

  for (let feet = min; feet < max; feet += 1) {
    for (let inch = 0; inch <= 11; inch += 1) {
      const a = convertFeetToCm(feet.toFixed(1).toString(), inch.toFixed(1).toString());
      result.push(`${feet}'${inch}" (${a.toFixed(2)} cm)`);
    }
  }

  return result.map(f => ({
    label: `${f}`,
    value: `${f}`
  }));
}
function formatPrice(price, fractionDigits = 2) {
  if (price) {
    return price.toFixed(fractionDigits);
  }

  return '';
}

/***/ }),

/***/ "Pje9":
/***/ (function(module, exports) {



/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "XwMy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  apiEndpoint: 'https://api.hasasecret.com',
  socketEndpoint: 'https://api.hasasecret.com',
  debug: false,
  maxVideoBitrateKbps: 900,
  imageAccept: '.jpeg, .jpg, .png',
  maximumSizeUploadAvatar: 2
});

/***/ }),

/***/ "Y1dN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["a"] = (({
  title,
  extra
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], {
  title: title,
  extra: extra
}), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null)));

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "grZg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/common/layout/page-header.tsx
var page_header = __webpack_require__("Y1dN");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./src/services/api-request.ts
var api_request = __webpack_require__("/bfT");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./src/components/user/profile.less
var profile = __webpack_require__("Pje9");

// EXTERNAL MODULE: ./src/lib/file.ts
var file = __webpack_require__("GMeC");

// CONCATENATED MODULE: ./src/components/user/profile.tsx
var __jsx = external_react_["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};

const UserProfile = ({
  username,
  firstName,
  lastName,
  gender,
  onFinish,
  countries,
  email,
  country,
  phone,
  city,
  state,
  dateOfBirth,
  onChangeAvatar,
  uploadAvatarUrl,
  uploadedAvatar,
  avatarUploading,
  avatar,
  loading
}) => {
  const [form] = external_antd_["Form"].useForm();

  const uploadButton = __jsx(external_antd_["Button"], {
    type: "dashed",
    loading: avatarUploading,
    disabled: avatarUploading,
    icon: __jsx(icons_["UploadOutlined"], null)
  }, "Upload");

  return __jsx(external_antd_["Form"], _extends({}, formItemLayout, {
    form: form,
    onFinish: onFinish,
    name: "performerRegisterForm",
    className: "performerRegisterForm",
    initialValues: {
      dateOfBirth: external_moment_default()(dateOfBirth),
      country,
      firstName,
      lastName,
      gender,
      email,
      avatar,
      username,
      phone,
      city,
      state
    },
    layout: "vertical"
  }), __jsx(external_antd_["Row"], {
    gutter: 25
  }, __jsx(external_antd_["Col"], {
    sm: 12,
    xs: 24
  }, __jsx(external_antd_["Form"].Item, {
    name: "username",
    label: "Username",
    rules: [{
      required: true,
      message: 'Please input your username!'
    }]
  }, __jsx(external_antd_["Input"], {
    disabled: true
  })), __jsx(external_antd_["Form"].Item, {
    name: "gender",
    label: "Sex"
  }, __jsx(external_antd_["Select"], null, __jsx(external_antd_["Select"].Option, {
    value: "male",
    key: "male"
  }, "Male"), __jsx(external_antd_["Select"].Option, {
    value: "female",
    key: "female"
  }, "Female"), __jsx(external_antd_["Select"].Option, {
    value: "transgender",
    key: "transgender"
  }, "Transgender"))), __jsx(external_antd_["Form"].Item, {
    name: "firstName",
    label: "First Name",
    rules: [{
      pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
      message: 'Alphanumeric'
    }, {
      whitespace: true,
      message: 'Please input your first name!'
    }, {
      required: true,
      message: 'Please input your first name!'
    }]
  }, __jsx(external_antd_["Input"], {
    placeholder: "First name"
  })), __jsx(external_antd_["Form"].Item, {
    name: "lastName",
    label: "Last Name",
    rules: [{
      pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
      message: 'Alphanumeric'
    }, {
      whitespace: true,
      message: 'Please input your last name!'
    }, {
      required: true,
      message: 'Please input your first name!'
    }]
  }, __jsx(external_antd_["Input"], {
    placeholder: "Last name"
  })), __jsx(external_antd_["Form"].Item, {
    name: "phone",
    label: "Phone Number",
    rules: [{
      min: 9
    }, {
      max: 14
    }, {
      pattern: new RegExp(/^[0-9\b\\+ ]+$/),
      message: 'The phone number is not in the correct format'
    }]
  }, __jsx(external_antd_["Input"], {
    placeholder: "Phone Number"
  }))), __jsx(external_antd_["Col"], {
    sm: 12,
    xs: 24
  }, __jsx(external_antd_["Form"].Item, {
    name: "email",
    label: "E-mail",
    rules: [{
      type: 'email',
      message: 'The input is not valid E-mail!'
    }, {
      required: true,
      message: 'Please input your E-mail!'
    }]
  }, __jsx(external_antd_["Input"], {
    disabled: true,
    placeholder: "test@example.com"
  })), __jsx(external_antd_["Form"].Item, {
    name: "dateOfBirth",
    label: "Date of Birth",
    rules: [{
      required: true,
      message: 'Please input date of birth!'
    }, {
      validator: (rule, value) => {
        if (!value) return Promise.resolve();
        const years = external_moment_default()().diff(value, 'years');

        if (years >= 18) {
          return Promise.resolve();
        }

        return Promise.reject(new Error('Minimum of 18 years'));
      }
    }]
  }, __jsx(external_antd_["DatePicker"], {
    style: {
      width: '100%'
    }
  })), __jsx(external_antd_["Form"].Item, {
    name: "country",
    label: "Country",
    rules: [{
      required: true,
      message: 'Please input your country!'
    }]
  }, __jsx(external_antd_["Select"], {
    showSearch: true
  }, countries.length > 0 && countries.map(c => __jsx(external_antd_["Select"].Option, {
    value: c.name,
    key: c.code
  }, c.name)))), __jsx(external_antd_["Form"].Item, {
    name: "state",
    label: "State"
  }, __jsx(external_antd_["Input"], {
    placeholder: "State Name"
  })), __jsx(external_antd_["Form"].Item, {
    name: "city",
    label: "City"
  }, __jsx(external_antd_["Input"], {
    placeholder: "City Name"
  })), __jsx(external_antd_["Form"].Item, {
    label: "Profile Avatar" // valuePropName="fileList"

  }, __jsx(external_antd_["Upload"], {
    onChange: onChangeAvatar,
    accept: "image/*",
    action: uploadAvatarUrl,
    headers: {
      Authorization: false ? undefined : ''
    },
    name: "avatar",
    showUploadList: false,
    beforeUpload: file["a" /* beforeAvatarUpload */]
  }, avatar || uploadedAvatar ? __jsx("div", {
    style: {
      height: 60,
      width: 60,
      position: 'relative'
    }
  }, __jsx("img", {
    src: uploadedAvatar || avatar,
    style: {
      height: 60,
      width: 60,
      borderRadius: 30
    },
    alt: ""
  }), __jsx(icons_["EditOutlined"], {
    className: "edit-icon"
  })) : uploadButton)))), __jsx(external_antd_["Form"].Item, tailFormItemLayout, __jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    disabled: loading,
    loading: loading
  }, "Save Changes")));
};

/* harmony default export */ var user_profile = (UserProfile);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/services/setting.service.ts
var setting_service = __webpack_require__("zM0U");

// EXTERNAL MODULE: ./src/services/user.service.ts
var user_service = __webpack_require__("ITiG");

// EXTERNAL MODULE: ./src/redux/user/actions.ts
var actions = __webpack_require__("x7is");

// EXTERNAL MODULE: ./src/redux/auth/actions.ts
var auth_actions = __webpack_require__("kXO4");

// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__("NsEo");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/components/auth/password-change.tsx
var password_change = __webpack_require__("4xUc");

// EXTERNAL MODULE: ./pages/account/user/account-settings/index.less
var account_settings = __webpack_require__("vXTS");

// CONCATENATED MODULE: ./pages/account/user/account-settings/index.tsx
var account_settings_jsx = external_react_default.a.createElement;

function account_settings_extends() { account_settings_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return account_settings_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















class account_settings_UserProfilePage extends external_react_["PureComponent"] {
  static getInitialProps({
    ctx
  }) {
    const {
      query
    } = ctx;
    return {
      action: query.action
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      uploadedAvatar: '',
      avatarUploading: false
    };
  }

  componentDidMount() {
    const {
      action
    } = this.props;
    if (!action || action === 'account-information') this.getCountries();
  }

  componentDidUpdate(prevProps) {
    const {
      success,
      updateUserError,
      auth,
      action
    } = this.props;
    const {
      countries
    } = this.state;

    if (prevProps.success !== success && success) {
      external_antd_["message"].success('Update Profile Success.');
    }

    if (prevProps.updateUserError !== updateUserError && updateUserError) {
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(updateUserError));
    }

    if (prevProps.auth.updatePassword.success !== auth.updatePassword.success && auth.updatePassword.success) {
      external_antd_["message"].success('Update Password Success.');
    }

    if (prevProps.auth.updatePassword.error !== auth.updatePassword.error && auth.updatePassword.error) {
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(auth.updatePassword.error));
    }

    if (!countries.length && action === 'account-information') {
      this.getCountries();
    }
  }

  onFinish(data) {
    const {
      user,
      updateUser: dispatchUpdateUser
    } = this.props;
    dispatchUpdateUser(_objectSpread(_objectSpread({}, user), data));
  }

  onChangeAvatar({
    file
  }) {
    if (file.status === 'uploading') {
      this.setState({
        avatarUploading: true
      });
      return;
    }

    if (file.status === 'done') {
      this.setState({
        avatarUploading: false
      });

      if (file.response) {
        this.setState({
          uploadedAvatar: file.response.data.url
        });
      }
    }
  }

  onTabsChange(key) {
    router_default.a.push({
      pathname: '/account/user/account-settings',
      query: {
        action: key
      }
    }, `/account/user/account-settings?action=${key}`, {
      shallow: false
    });
  }

  onPasswordChange(data) {
    const {
      updatePassword: dispatchUpdatePassword
    } = this.props;
    dispatchUpdatePassword(data);
  }

  async getCountries() {
    try {
      const countries = await setting_service["a" /* settingService */].getCountries();
      this.setState({
        countries: countries.data
      });
    } catch (error) {
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(error));
    }
  }

  render() {
    const {
      user,
      action,
      auth,
      userUpdating
    } = this.props;
    const {
      countries,
      uploadedAvatar,
      avatarUploading
    } = this.state;
    return account_settings_jsx(external_react_default.a.Fragment, null, account_settings_jsx(head_default.a, null, account_settings_jsx("title", null, `${user.username} Profile`)), account_settings_jsx("div", {
      className: "account-setting-page"
    }, account_settings_jsx(page_header["a" /* default */], {
      title: "Account Settings"
    }), account_settings_jsx(external_antd_["Tabs"], {
      activeKey: action || 'account-information',
      style: {
        padding: '0 24px'
      },
      size: "large",
      onChange: this.onTabsChange.bind(this)
    }, account_settings_jsx(external_antd_["Tabs"].TabPane, {
      tab: "Account Information",
      key: "account-information"
    }, account_settings_jsx(user_profile, account_settings_extends({}, user, {
      onFinish: this.onFinish.bind(this),
      countries: countries,
      onChangeAvatar: this.onChangeAvatar.bind(this),
      uploadAvatarUrl: user_service["a" /* userService */].getAvatarUploadUrl(),
      uploadedAvatar: uploadedAvatar,
      avatarUploading: avatarUploading,
      loading: userUpdating
    }))), account_settings_jsx(external_antd_["Tabs"].TabPane, {
      key: "change-password",
      tab: "Change Password"
    }, account_settings_jsx(password_change["a" /* default */], account_settings_extends({
      onFinish: this.onPasswordChange.bind(this)
    }, auth.updatePassword))))));
  }

}

_defineProperty(account_settings_UserProfilePage, "authenticate", true);

_defineProperty(account_settings_UserProfilePage, "layout", 'primary');

const mapStateToProps = state => ({
  user: state.user.current,
  userUpdating: state.user.userUpdating,
  success: state.user.updateUserSuccess,
  updateUserError: state.user.updateUserError,
  auth: state.auth
});

const mapDispatch = {
  updateUser: actions["p" /* updateUser */],
  updatePassword: auth_actions["s" /* updatePassword */]
};
/* harmony default export */ var user_account_settings = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatch)(account_settings_UserProfilePage));

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kXO4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return performerlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return performerloginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return performerloginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return resetLoginData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return studioLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return studioLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return studioLoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return performerRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return performerRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return performerRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return setPerformerRegisterSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return userRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return userRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return userRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return setUserRegisterSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return updatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return updatePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return updatePasswordFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return setUpdatePasswordSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logout; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vo7w");

const {
  login,
  loginSuccess,
  loginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('login', 'LOGIN');
const loginRequesting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('LOGIN_REQUESTING');
const {
  performerlogin,
  performerloginSuccess,
  performerloginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('performerlogin', 'PERFORMER_LOGIN');
const resetLoginData = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('resetLoginData');
const {
  studioLogin,
  studioLoginSuccess,
  studioLoginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('studioLogin', 'STUDIO_LOGIN');
const {
  performerRegister,
  performerRegisterSuccess,
  performerRegisterFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('performerRegister', 'PERFORMER_REGISTER');
const setPerformerRegisterSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_PERFORMER_REGISTER_SUBMITTING');
const {
  userRegister,
  userRegisterSuccess,
  userRegisterFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('userRegister', 'USER_REGISTER');
const setUserRegisterSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_USER_REGISTER_SUBMITTING');
const {
  updatePassword,
  updatePasswordSuccess,
  updatePasswordFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('updatePassword', 'UPDATE_PASSWORD');
const setUpdatePasswordSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_UPDATE_PASSWORD_SUBMITTING');
const logout = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('logout');

/***/ }),

/***/ "nXVM":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "rP/q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unitPrices; });
function isUrl(url) {
  return url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g) !== null;
}
const generateUuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  /* eslint-disable */
  const r = Math.random() * 16 | 0;
  const v = c === 'x' ? r : r & 0x3 | 0x8;
  return v.toString(16);
  /* eslint-enable */
});
function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const unitPrices = [{
  value: 15,
  text: '15 tokens'
}, {
  value: 20,
  text: '20 tokens'
}, {
  value: 25,
  text: '25 tokens'
}, {
  value: 30,
  text: '30 tokens'
}, {
  value: 35,
  text: '35 tokens'
}, {
  value: 40,
  text: '40 tokens'
}, {
  value: 45,
  text: '45 tokens'
}, {
  value: 50,
  text: '50 tokens'
} // {
//   value: 55,
//   text: '55 tokens'
// },
// {
//   value: 60,
//   text: '60 tokens'
// },
// {
//   value: 65,
//   text: '65 tokens'
// },
// {
//   value: 70,
//   text: '70 tokens'
// },
// {
//   value: 75,
//   text: '75 tokens'
// },
// {
//   value: 80,
//   text: '80 tokens'
// },
// {
//   value: 85,
//   text: '85 tokens'
// },
// {
//   value: 90,
//   text: '90 tokens'
// },
// {
//   value: 95,
//   text: '95 tokens'
// },
// {
//   value: 100,
//   text: '100 tokens'
// },
// {
//   value: 120,
//   text: '120 tokens'
// },
// {
//   value: 140,
//   text: '140 tokens'
// },
// {
//   value: 160,
//   text: '160 tokens'
// },
// {
//   value: 180,
//   text: '180 tokens'
// },
// {
//   value: 200,
//   text: '200 tokens'
// },
// {
//   value: 220,
//   text: '220 tokens'
// },
// {
//   value: 240,
//   text: '240 tokens'
// },
// {
//   value: 260,
//   text: '260 tokens'
// },
// {
//   value: 280,
//   text: '280 tokens'
// },
// {
//   value: 300,
//   text: '300 tokens'
// },
// {
//   value: 320,
//   text: '320 tokens'
// },
// {
//   value: 340,
//   text: '340 tokens'
// },
// {
//   value: 360,
//   text: '360 tokens'
// },
// {
//   value: 380,
//   text: '380 tokens'
// },
// {
//   value: 400,
//   text: '400 tokens'
// },
// {
//   value: 420,
//   text: '420 tokens'
// },
// {
//   value: 440,
//   text: '440 tokens'
// },
// {
//   value: 460,
//   text: '460 tokens'
// },
// {
//   value: 480,
//   text: '480 tokens'
// },
// {
//   value: 500,
//   text: '500 tokens'
// },
// {
//   value: 550,
//   text: '550 tokens'
// },
// {
//   value: 600,
//   text: '600 tokens'
// },
// {
//   value: 650,
//   text: '650 tokens'
// },
// {
//   value: 700,
//   text: '700 tokens'
// },
// {
//   value: 750,
//   text: '750 tokens'
// },
// {
//   value: 800,
//   text: '800 tokens'
// },
// {
//   value: 850,
//   text: '850 tokens'
// },
// {
//   value: 900,
//   text: '900 tokens'
// },
// {
//   value: 950,
//   text: '950 tokens'
// },
// {
//   value: 1000,
//   text: '1000 tokens'
// }
];

/***/ }),

/***/ "vXTS":
/***/ (function(module, exports) {



/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vo7w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createSagas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createAsyncAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createAsyncActions; });
/* unused harmony export createSelectorsA */
/* unused harmony export handleActions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createReducers; });
/* unused harmony export createSelectors */
/* unused harmony export createJSSelectors */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MWqi");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"]; });

/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RmXt");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable func-names */

/* eslint-disable no-param-reassign */





function createAction(type) {
  const action = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])(type);

  action.is = aType => action.toString() === aType;

  return action;
}
/* tslint:disable-next-line */


function createAsyncAction(action, type) {
  return {
    [action]: createAction(type),
    [`${action}Success`]: createAction(`${type}_SUCCESS`),
    [`${action}Fail`]: createAction(`${type}_FAIL`)
  };
}

function createAsyncActions(type) {
  return [createAction(type), createAction(`${type}_SUCCESS`), createAction(`${type}_FAIL`)];
}
/* tslint:disable */


function handleActions(actions, initialState) {
  return Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(actions, (reducer, handler, action) => {
    reducer[action] = (state, act) => handler(state.set('action', action), act);

    return reducer;
  }, {}), initialState);
}

function createReducers(stateContext, reducers, initialState, preventResetting = false) {
  return {
    [stateContext]: Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(reducers), (reducer, action) => {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(action.on)) {
        action.on.forEach(act => {
          reducer[act] = action.reducer;
        });
      } else reducer[action.on] = action.reducer;

      return reducer;
    }, preventResetting ? {} : {
      APP_STATE_RESET: () => initialState
    }), initialState)
  };
}

function createSagas(sagas) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(sagas).map(saga => {
    const {
      on,
      effect = redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"],
      worker
    } = saga;
    return function* () {
      yield effect(on, function* (action) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(0);
        yield worker(action);
      });
    };
  });
}

function createSelectorsA(context, keys = []) {
  const stateSelector = state => state[context];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(keys)) return stateSelector;
  return keys.map(key => state => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(key) ? stateSelector(state).getIn(key) : stateSelector(state).get(key));
}

function createSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state).get(key);

    return selectors;
  }, {});
}

function createJSSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state)[key];

    return selectors;
  }, {});
}



/***/ }),

/***/ "wfgH":
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x7is":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updateCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return updateCurrentUserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return updateCurrentUserBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return updateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return updateUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return setUpdating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return setReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buyTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFavoritePerformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getFavoritePerformersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFavoritePerformersFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return gettingFavoritePerformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return removeFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPaymentTokenHistroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPaymentTokenHistroySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getPaymentTokenHistroyFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return gettigPaymentTokenHistory; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vo7w");

const updateCurrentUser = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updateCurrentUser');
const updateCurrentUserAvatar = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updateCurrentUserAvatar');
const updateCurrentUserBalance = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updateCurrentUserBalance');
const {
  updateUser,
  updateUserSuccess,
  updateUserFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('updateUser', 'UPDATE_USER');
const setUpdating = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updatingUser');
const setReducer = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setUserReducer');
const buyTokenSuccess = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('buyTokenSuccess');
const {
  getFavoritePerformers,
  getFavoritePerformersSuccess,
  getFavoritePerformersFailed
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getFavoritePerformers', 'GET_FAVOURITE');
const gettingFavoritePerformers = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('GETTING_FAVORITE');
const removeFavorite = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('REMOVE_FAVORITE');
const {
  getPaymentTokenHistroy,
  getPaymentTokenHistroySuccess,
  getPaymentTokenHistroyFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getPaymentTokenHistroy', 'GET_PAYMET_TOKE_HISTORY');
const gettigPaymentTokenHistory = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('GETTING_PAYMET_TOKE_HISTORY');

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zM0U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SettingService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settingService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class SettingService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  all(group = '') {
    return this.get(this.buildUrl('/settings/public', {
      group
    }));
  }

  getCountries() {
    return this.get('/countries/list');
  }

  getTimezones() {
    return this.get('/timezones/list');
  }

}
const settingService = new SettingService();

/***/ })

/******/ });