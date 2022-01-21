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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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

/***/ "1Bbz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FacebookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TwitterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return InstagramIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GiftIcon; });
/* unused harmony export MessageIcon */
/* unused harmony export FavouriteIcon */
/* unused harmony export SendMessageIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FundsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PaymentTokensHistoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return TransactionHistoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return PurchasedImageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return PurchasedVideoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return PurchasedItemIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MyProductIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return VideosIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PhotosIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FemaleSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MaleSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return TransgenderIcon; });
/* unused harmony export TokensIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarningIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PayoutRequestIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Group; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable react/require-default-props */

/* eslint-disable react/no-unused-prop-types */

const FacebookIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/facebook.svg",
  style: style
});
const TwitterIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/twitter.svg",
  style: style
});
const InstagramIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/instagram.svg",
  style: style
});
const GiftIcon = () => __jsx("div", {
  className: "anticon"
}, __jsx("svg", {
  width: "17",
  height: "16",
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M14.6001 4.84375H12.2938C12.5063 4.50938 12.6313 4.1125 12.6313 3.6875C12.6313 2.49844 11.6642 1.53125 10.4751 1.53125C9.82822 1.53125 9.24541 1.81875 8.8501 2.27187C8.45479 1.81875 7.87197 1.53125 7.2251 1.53125C6.03604 1.53125 5.06885 2.49844 5.06885 3.6875C5.06885 4.1125 5.19229 4.50938 5.40635 4.84375H3.1001C2.82354 4.84375 2.6001 5.06719 2.6001 5.34375V8.46875C2.6001 8.5375 2.65635 8.59375 2.7251 8.59375H3.3501V13.9688C3.3501 14.2453 3.57354 14.4688 3.8501 14.4688H13.8501C14.1267 14.4688 14.3501 14.2453 14.3501 13.9688V8.59375H14.9751C15.0438 8.59375 15.1001 8.5375 15.1001 8.46875V5.34375C15.1001 5.06719 14.8767 4.84375 14.6001 4.84375ZM9.38135 3.6875C9.38135 3.08438 9.87197 2.59375 10.4751 2.59375C11.0782 2.59375 11.5688 3.08438 11.5688 3.6875C11.5688 4.29062 11.0782 4.78125 10.4751 4.78125H9.38135V3.6875ZM7.2251 2.59375C7.82822 2.59375 8.31885 3.08438 8.31885 3.6875V4.78125H7.2251C6.62197 4.78125 6.13135 4.29062 6.13135 3.6875C6.13135 3.08438 6.62197 2.59375 7.2251 2.59375ZM3.6626 7.53125V5.90625H8.31885V7.53125H3.6626ZM4.4126 8.59375H8.31885V13.4062H4.4126V8.59375ZM13.2876 13.4062H9.38135V8.59375H13.2876V13.4062ZM14.0376 7.53125H9.38135V5.90625H14.0376V7.53125Z",
  fill: "white"
})));
const MessageIcon = ({
  width,
  height,
  color
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 6.34687V18.5625H3.1875V6.34687L2.54063 5.84297L3.46172 4.65938L4.46484 5.43984H19.5375L20.5406 4.65938L21.4617 5.84297L20.8125 6.34687ZM19.5375 5.4375L12 11.2969L4.4625 5.4375L3.45938 4.65703L2.53828 5.84062L3.18516 6.34453L11.1914 12.5695C11.4217 12.7484 11.7049 12.8455 11.9965 12.8455C12.2881 12.8455 12.5713 12.7484 12.8016 12.5695L20.8125 6.34687L21.4594 5.84297L20.5383 4.65938L19.5375 5.4375Z",
  fill: color
}));
const FavouriteIcon = ({
  width,
  height,
  color
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M14.1855 4.45916C13.9838 3.97793 13.6929 3.54185 13.3292 3.17532C12.9653 2.80769 12.5362 2.51555 12.0652 2.31477C11.5769 2.10575 11.0531 1.99876 10.5243 2.00001C9.78243 2.00001 9.05862 2.20933 8.42961 2.60472C8.27913 2.6993 8.13618 2.80319 8.00074 2.91638C7.86531 2.80319 7.72236 2.6993 7.57188 2.60472C6.94287 2.20933 6.21906 2.00001 5.47719 2.00001C4.94299 2.00001 4.42533 2.10545 3.93627 2.31477C3.46377 2.51634 3.03791 2.80629 2.67224 3.17532C2.30807 3.54143 2.01717 3.97762 1.81601 4.45916C1.60684 4.95998 1.5 5.49182 1.5 6.03916C1.5 6.55549 1.60233 7.09352 1.80547 7.64086C1.97552 8.09827 2.2193 8.57273 2.53079 9.05185C3.02436 9.81006 3.70303 10.6008 4.54572 11.4025C5.94218 12.7313 7.32509 13.6492 7.38378 13.6864L7.74041 13.9221C7.89842 14.026 8.10157 14.026 8.25957 13.9221L8.61621 13.6864C8.6749 13.6476 10.0563 12.7313 11.4543 11.4025C12.297 10.6008 12.9756 9.81006 13.4692 9.05185C13.7807 8.57273 14.026 8.09827 14.1945 7.64086C14.3977 7.09352 14.5 6.55549 14.5 6.03916C14.5015 5.49182 14.3946 4.95998 14.1855 4.45916V4.45916ZM8.00074 12.6956C8.00074 12.6956 2.64365 9.15884 2.64365 6.03916C2.64365 4.45916 3.9122 3.17842 5.47719 3.17842C6.5772 3.17842 7.53125 3.81104 8.00074 4.73516C8.47024 3.81104 9.42429 3.17842 10.5243 3.17842C12.0893 3.17842 13.3578 4.45916 13.3578 6.03916C13.3578 9.15884 8.00074 12.6956 8.00074 12.6956Z",
  fill: color
}));
const SendMessageIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M26.7552 14.6367L3.64018 3.04608C3.54623 2.9991 3.43846 2.98804 3.33622 3.01291C3.10134 3.07095 2.95488 3.30862 3.01291 3.54629L5.39488 13.2797C5.4308 13.4262 5.53857 13.5451 5.68226 13.592L9.76365 14.9932L5.68502 16.3943C5.54133 16.4441 5.43356 16.5602 5.4004 16.7066L3.01291 26.4539C2.98804 26.5562 2.9991 26.6639 3.04607 26.7551C3.15384 26.9735 3.41912 27.0619 3.64018 26.9541L26.7552 15.4298C26.8408 15.3884 26.9099 15.3165 26.9541 15.2336C27.0619 15.0125 26.9735 14.7472 26.7552 14.6367ZM5.73752 23.6848L7.12746 18.0028L15.2847 15.2032C15.3483 15.1811 15.4008 15.1314 15.4229 15.065C15.4616 14.949 15.4008 14.8246 15.2847 14.7832L7.12746 11.9864L5.74305 6.32649L23.0966 15.0291L5.73752 23.6848Z",
  fill: "#FF0066"
}));
const FundsIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 25 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M9.8501 10C9.58488 10 9.33053 10.1054 9.14299 10.2929C8.95545 10.4804 8.8501 10.7348 8.8501 11V13C8.8501 13.2652 8.95545 13.5196 9.14299 13.7071C9.33053 13.8946 9.58488 14 9.8501 14C10.1153 14 10.3697 13.8946 10.5572 13.7071C10.7447 13.5196 10.8501 13.2652 10.8501 13V11C10.8501 10.7348 10.7447 10.4804 10.5572 10.2929C10.3697 10.1054 10.1153 10 9.8501 10ZM21.8501 11C22.1153 11 22.3697 10.8946 22.5572 10.7071C22.7447 10.5196 22.8501 10.2652 22.8501 10V6C22.8501 5.73478 22.7447 5.48043 22.5572 5.29289C22.3697 5.10536 22.1153 5 21.8501 5H3.8501C3.58488 5 3.33053 5.10536 3.14299 5.29289C2.95545 5.48043 2.8501 5.73478 2.8501 6V10C2.8501 10.2652 2.95545 10.5196 3.14299 10.7071C3.33053 10.8946 3.58488 11 3.8501 11C4.11531 11 4.36967 11.1054 4.5572 11.2929C4.74474 11.4804 4.8501 11.7348 4.8501 12C4.8501 12.2652 4.74474 12.5196 4.5572 12.7071C4.36967 12.8946 4.11531 13 3.8501 13C3.58488 13 3.33053 13.1054 3.14299 13.2929C2.95545 13.4804 2.8501 13.7348 2.8501 14V18C2.8501 18.2652 2.95545 18.5196 3.14299 18.7071C3.33053 18.8946 3.58488 19 3.8501 19H21.8501C22.1153 19 22.3697 18.8946 22.5572 18.7071C22.7447 18.5196 22.8501 18.2652 22.8501 18V14C22.8501 13.7348 22.7447 13.4804 22.5572 13.2929C22.3697 13.1054 22.1153 13 21.8501 13C21.5849 13 21.3305 12.8946 21.143 12.7071C20.9555 12.5196 20.8501 12.2652 20.8501 12C20.8501 11.7348 20.9555 11.4804 21.143 11.2929C21.3305 11.1054 21.5849 11 21.8501 11ZM20.8501 9.18C20.2709 9.3902 19.7706 9.77363 19.4169 10.2782C19.0633 10.7827 18.8736 11.3839 18.8736 12C18.8736 12.6161 19.0633 13.2173 19.4169 13.7218C19.7706 14.2264 20.2709 14.6098 20.8501 14.82V17H10.8501C10.8501 16.7348 10.7447 16.4804 10.5572 16.2929C10.3697 16.1054 10.1153 16 9.8501 16C9.58488 16 9.33053 16.1054 9.14299 16.2929C8.95545 16.4804 8.8501 16.7348 8.8501 17H4.8501V14.82C5.42925 14.6098 5.92964 14.2264 6.28326 13.7218C6.63687 13.2173 6.82657 12.6161 6.82657 12C6.82657 11.3839 6.63687 10.7827 6.28326 10.2782C5.92964 9.77363 5.42925 9.3902 4.8501 9.18V7H8.8501C8.8501 7.26522 8.95545 7.51957 9.14299 7.70711C9.33053 7.89464 9.58488 8 9.8501 8C10.1153 8 10.3697 7.89464 10.5572 7.70711C10.7447 7.51957 10.8501 7.26522 10.8501 7H20.8501V9.18Z"
}));
const PaymentTokensHistoryIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M19.958 4.04201C18.9157 2.99684 17.6772 2.16796 16.3135 1.603C14.9499 1.03805 13.488 0.748166 12.012 0.750009C8.93797 0.750009 6.15197 1.98401 4.12297 3.98501L4.12397 3.98401V0.751009H2.62397V6.75101H8.62397V5.25101H4.98097C5.88924 4.30215 6.98033 3.54713 8.1884 3.03153C9.39646 2.51592 10.6965 2.2504 12.01 2.25101C17.38 2.25101 21.748 6.62001 21.748 11.989C21.748 17.358 17.379 21.727 12.01 21.727C6.64097 21.727 2.27197 17.358 2.27197 11.989H0.771973C0.771973 18.196 5.80397 23.227 12.01 23.227C15.113 23.227 17.923 21.969 19.957 19.935C21.991 17.901 23.249 15.092 23.249 11.988C23.249 8.88401 21.991 6.07501 19.957 4.04101L19.958 4.04201Z"
}), __jsx("path", {
  d: "M16.125 7.5H6.375V15H16.125V7.5ZM15.375 14.25H7.125V8.25H15.375V14.25Z"
}), __jsx("path", {
  d: "M16.875 9.375V15.75H8.25V16.5H17.625V9.375H16.875Z",
  fill: "black"
}), __jsx("path", {
  d: "M11.25 13.089C12.1805 13.089 12.9375 12.2655 12.9375 11.253C12.9375 10.2405 12.1805 9.41699 11.25 9.41699C10.3195 9.41699 9.5625 10.2405 9.5625 11.253C9.5625 12.2655 10.3195 13.089 11.25 13.089ZM11.25 10.1675C11.767 10.1675 12.1875 10.6545 12.1875 11.2535C12.1875 11.8525 11.767 12.3395 11.25 12.3395C10.733 12.3395 10.3125 11.8525 10.3125 11.2535C10.3125 10.6545 10.733 10.1675 11.25 10.1675Z"
}), __jsx("path", {
  d: "M7.875 9.1875H8.625V13.3125H7.875V9.1875Z",
  fill: "black"
}), __jsx("path", {
  d: "M13.875 9.1875H14.625V13.3125H13.875V9.1875Z",
  fill: "black"
}));
const TransactionHistoryIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M19.958 4.04201C18.9157 2.99684 17.6772 2.16796 16.3135 1.603C14.9499 1.03805 13.488 0.748166 12.012 0.750009C8.93797 0.750009 6.15197 1.98401 4.12297 3.98501L4.12397 3.98401V0.751009H2.62397V6.75101H8.62397V5.25101H4.98097C5.88924 4.30215 6.98033 3.54713 8.1884 3.03153C9.39646 2.51592 10.6965 2.2504 12.01 2.25101C17.38 2.25101 21.748 6.62001 21.748 11.989C21.748 17.358 17.379 21.727 12.01 21.727C6.64097 21.727 2.27197 17.358 2.27197 11.989H0.771973C0.771973 18.196 5.80397 23.227 12.01 23.227C15.113 23.227 17.923 21.969 19.957 19.935C21.991 17.901 23.249 15.092 23.249 11.988C23.249 8.88401 21.991 6.07501 19.957 4.04101L19.958 4.04201Z"
}), __jsx("path", {
  d: "M12.0003 6.16675C8.77897 6.16675 6.16699 8.77873 6.16699 12.0001C6.16699 15.2214 8.77897 17.8334 12.0003 17.8334C15.2217 17.8334 17.8337 15.2214 17.8337 12.0001C17.8337 8.77873 15.2217 6.16675 12.0003 6.16675ZM12.0003 16.8438C9.32585 16.8438 7.15658 14.6746 7.15658 12.0001C7.15658 9.3256 9.32585 7.15633 12.0003 7.15633C14.6748 7.15633 16.8441 9.3256 16.8441 12.0001C16.8441 14.6746 14.6748 16.8438 12.0003 16.8438ZM12.6214 11.698L12.2907 11.6212V9.87248C12.7855 9.94019 13.0915 10.2501 13.1436 10.6303C13.1501 10.6824 13.1943 10.7201 13.2464 10.7201H13.8311C13.8923 10.7201 13.9404 10.6667 13.9352 10.6056C13.8558 9.79435 13.1878 9.27352 12.2959 9.18368V8.75789C12.2959 8.7006 12.249 8.65373 12.1917 8.65373H11.8258C11.7686 8.65373 11.7217 8.7006 11.7217 8.75789V9.18758C10.7998 9.27743 10.0785 9.78654 10.0785 10.7371C10.0785 11.6173 10.7269 12.0417 11.4079 12.2045L11.7295 12.2865V14.1446C11.154 14.0678 10.8311 13.7605 10.7646 13.3464C10.7568 13.297 10.7126 13.2605 10.6618 13.2605H10.0602C9.99902 13.2605 9.95085 13.3126 9.95606 13.3738C10.0146 14.0899 10.5576 14.7488 11.7165 14.8334V15.2423C11.7165 15.2996 11.7633 15.3464 11.8206 15.3464H12.1904C12.2477 15.3464 12.2946 15.2996 12.2946 15.241L12.292 14.8282C13.3115 14.7384 14.0407 14.1928 14.0407 13.2136C14.0394 12.31 13.4652 11.9063 12.6214 11.698ZM11.7282 11.4871C11.6553 11.4662 11.5941 11.4467 11.5329 11.422C11.0928 11.2631 10.8883 11.0066 10.8883 10.6759C10.8883 10.2032 11.2464 9.93368 11.7282 9.87248V11.4871ZM12.2907 14.1485V12.4076C12.3311 12.4194 12.3675 12.4285 12.4053 12.4363C13.0212 12.6238 13.2282 12.8842 13.2282 13.2839C13.2282 13.7931 12.8454 14.099 12.2907 14.1485Z"
}));
const PurchasedImageIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M7.5 6.75C7.5 6.75 7.5 2.25 12 2.25C16.5 2.25 16.5 6.75 16.5 6.75M3.75 6.75V21.75H20.25V6.75H3.75Z"
}), __jsx("path", {
  d: "M12.4816 13.966L11.5699 15.1285L11.0883 14.5145C11.0795 14.5032 11.0683 14.4942 11.0555 14.488C11.0427 14.4817 11.0287 14.4785 11.0145 14.4785C11.0002 14.4785 10.9862 14.4817 10.9734 14.488C10.9606 14.4942 10.9494 14.5032 10.9406 14.5145L9.77109 16.0051C9.76027 16.0189 9.75356 16.0355 9.75172 16.0529C9.74988 16.0704 9.75299 16.088 9.76069 16.1038C9.76839 16.1195 9.78038 16.1328 9.79527 16.1421C9.81017 16.1514 9.82737 16.1563 9.84492 16.1562H14.1562C14.2348 16.1562 14.2781 16.066 14.2301 16.0051L12.6305 13.966C12.6216 13.9548 12.6103 13.9457 12.5974 13.9395C12.5845 13.9333 12.5704 13.93 12.5561 13.93C12.5417 13.93 12.5276 13.9333 12.5147 13.9395C12.5018 13.9457 12.4905 13.9548 12.4816 13.966ZM10.2188 13.1797C10.2188 13.304 10.2681 13.4232 10.356 13.5111C10.444 13.5991 10.5632 13.6484 10.6875 13.6484C10.8118 13.6484 10.931 13.5991 11.019 13.5111C11.1069 13.4232 11.1562 13.304 11.1562 13.1797C11.1562 13.0554 11.1069 12.9361 11.019 12.8482C10.931 12.7603 10.8118 12.7109 10.6875 12.7109C10.5632 12.7109 10.444 12.7603 10.356 12.8482C10.2681 12.9361 10.2188 13.0554 10.2188 13.1797ZM16.0148 11.382L13.493 8.86016C13.4227 8.78984 13.3277 8.75 13.2281 8.75H8.25C8.04258 8.75 7.875 8.91758 7.875 9.125V18.875C7.875 19.0824 8.04258 19.25 8.25 19.25H15.75C15.9574 19.25 16.125 19.0824 16.125 18.875V11.648C16.125 11.5484 16.0852 11.4523 16.0148 11.382ZM15.2602 11.8203H13.0547V9.61484L15.2602 11.8203ZM15.2812 18.4062H8.71875V9.59375H12.2578V12.125C12.2578 12.2555 12.3097 12.3807 12.402 12.473C12.4943 12.5653 12.6195 12.6172 12.75 12.6172H15.2812V18.4062Z"
}));
const PurchasedVideoIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M7.5 6.75C7.5 6.75 7.5 2.25 12 2.25C16.5 2.25 16.5 6.75 16.5 6.75M3.75 6.75V21.75H20.25V6.75H3.75Z"
}), __jsx("path", {
  d: "M12 9C9.243 9 7 11.243 7 14C7 16.757 9.243 19 12 19C14.757 19 17 16.757 17 14C17 11.243 14.757 9 12 9ZM12 18C9.7945 18 8 16.2055 8 14C8 11.7945 9.7945 10 12 10C14.2055 10 16 11.7945 16 14C16 16.2055 14.2055 18 12 18Z"
}), __jsx("path", {
  d: "M10.5 16.5L14.5 14L10.5 11.5V16.5Z",
  fill: "black"
}));
const PurchasedItemIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M1.5 6.40498V17.61C1.5 18.285 1.95 18.87 2.625 19.065L12.375 21.66C12.615 21.735 12.885 21.735 13.125 21.66L22.875 19.065C23.55 18.87 24 18.285 24 17.61V6.40498C24 5.72998 23.55 5.14498 22.875 4.94998L13.125 2.33998C12.877 2.29498 12.623 2.29498 12.375 2.33998L2.625 4.94998C1.95 5.14498 1.5 5.72998 1.5 6.40498ZM12 20.04L3 17.655V7.49998L12 9.91498V20.04ZM3 5.99998L6.75 4.99498L16.5 7.58998L12.75 8.59498L3 5.99998ZM22.5 17.655L13.5 20.04V9.91498L16.5 9.08998V12.75L19.5 11.955V8.29498L22.5 7.49998V17.655ZM19.5 6.79498L9.75 4.19998L12.75 3.40498L22.5 5.99998L19.5 6.79498Z"
}));
const MyProductIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.5 6.40503V17.61C1.5 18.285 1.95 18.87 2.625 19.065L12.375 21.66C12.615 21.735 12.885 21.735 13.125 21.66L22.875 19.065C23.55 18.87 24 18.285 24 17.61V6.40503C24 5.73003 23.55 5.14503 22.875 4.95003L13.125 2.34003C12.877 2.29502 12.623 2.29502 12.375 2.34003L2.625 4.95003C1.95 5.14503 1.5 5.73003 1.5 6.40503ZM12 20.04L3 17.655V7.50003L12 9.91503V20.04ZM3 6.00003L6.75 4.99503L16.5 7.59003L12.75 8.59503L3 6.00003ZM22.5 17.655L13.5 20.04V9.91503L16.5 9.09003V12.75L19.5 11.955V8.29503L22.5 7.50003V17.655ZM19.5 6.79503L9.75 4.20003L12.75 3.40503L22.5 6.00003L19.5 6.79503Z"
}));
const VideosIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 30 31",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M22.5002 9.14424C22.5002 7.76549 21.3789 6.64424 20.0002 6.64424H5.00018C3.62143 6.64424 2.50018 7.76549 2.50018 9.14424V21.6442C2.50018 23.023 3.62143 24.1442 5.00018 24.1442H20.0002C21.3789 24.1442 22.5002 23.023 22.5002 21.6442V17.478L27.5002 21.6442V9.14424L22.5002 13.3105V9.14424ZM20.0027 21.6442H5.00018V9.14424H20.0002L20.0014 15.393L20.0002 15.3942L20.0014 15.3955L20.0027 21.6442Z"
}));
const PhotosIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 18.5625H3.1875V17.6273L6.43359 13.7766L9.95156 17.9484L15.4242 11.4609L20.8125 17.85V18.5625ZM20.8125 15.5203L15.5672 9.3C15.4922 9.21094 15.3562 9.21094 15.2812 9.3L9.95156 15.6188L6.57656 11.618C6.50156 11.5289 6.36562 11.5289 6.29062 11.618L3.1875 15.2977V5.4375H20.8125V15.5203ZM7.125 10.6875C7.39585 10.6875 7.66405 10.6342 7.91428 10.5305C8.16452 10.4269 8.39189 10.2749 8.58341 10.0834C8.77493 9.89189 8.92685 9.66452 9.0305 9.41428C9.13415 9.16405 9.1875 8.89585 9.1875 8.625C9.1875 8.35415 9.13415 8.08595 9.0305 7.83572C8.92685 7.58548 8.77493 7.35811 8.58341 7.16659C8.39189 6.97507 8.16452 6.82315 7.91428 6.7195C7.66405 6.61585 7.39585 6.5625 7.125 6.5625C6.57799 6.5625 6.05339 6.7798 5.66659 7.16659C5.2798 7.55339 5.0625 8.07799 5.0625 8.625C5.0625 9.17201 5.2798 9.69661 5.66659 10.0834C6.05339 10.4702 6.57799 10.6875 7.125 10.6875ZM7.125 7.96875C7.48828 7.96875 7.78125 8.26172 7.78125 8.625C7.78125 8.98828 7.48828 9.28125 7.125 9.28125C6.76172 9.28125 6.46875 8.98828 6.46875 8.625C6.46875 8.26172 6.76172 7.96875 7.125 7.96875Z"
}));
const FemaleSignIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M8 1.33337C5.794 1.33337 4 3.12737 4 5.33337C4 7.31137 5.44467 8.95471 7.33333 9.27337V11.3334H5.33333V12.6667H7.33333V14.6587H8.66667V12.6667H10.6667V11.3334H8.66667V9.27337C10.5553 8.95404 12 7.31137 12 5.33337C12 3.12737 10.206 1.33337 8 1.33337ZM8 8.00004C6.52933 8.00004 5.33333 6.80404 5.33333 5.33337C5.33333 3.86271 6.52933 2.66671 8 2.66671C9.47067 2.66671 10.6667 3.86271 10.6667 5.33337C10.6667 6.80404 9.47067 8.00004 8 8.00004Z",
  fill: color || 'white'
}));
const MaleSignIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M13.3334 7.33329V2.66663H8.66671L10.5287 4.52863L7.64737 7.40996C6.9726 6.9266 6.16341 6.66667 5.33337 6.66663C3.12737 6.66663 1.33337 8.46063 1.33337 10.6666C1.33337 12.8726 3.12737 14.6666 5.33337 14.6666C7.53937 14.6666 9.33337 12.8726 9.33337 10.6666C9.33337 9.80396 9.05604 9.00663 8.59004 8.35263L11.4714 5.47129L13.3334 7.33329ZM5.33337 13.3333C3.86271 13.3333 2.66671 12.1373 2.66671 10.6666C2.66671 9.19596 3.86271 7.99996 5.33337 7.99996C6.80404 7.99996 8.00004 9.19596 8.00004 10.6666C8.00004 12.1373 6.80404 13.3333 5.33337 13.3333Z",
  fill: color || 'white'
}));
const TransgenderIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M6.66665 10.3333C7.5507 10.3333 8.39855 9.9821 9.02367 9.35698C9.64879 8.73185 9.99998 7.88401 9.99998 6.99995C9.99998 6.1159 9.64879 5.26805 9.02367 4.64293C8.39855 4.01781 7.5507 3.66662 6.66665 3.66662C5.78259 3.66662 4.93474 4.01781 4.30962 4.64293C3.6845 5.26805 3.33331 6.1159 3.33331 6.99995C3.33331 7.88401 3.6845 8.73185 4.30962 9.35698C4.93474 9.9821 5.78259 10.3333 6.66665 10.3333V10.3333ZM10.6753 4.60929C11.0688 5.26924 11.2932 6.0161 11.3288 6.78362C11.3644 7.55113 11.21 8.31556 10.8792 9.00907C10.5485 9.70258 10.0517 10.3037 9.4329 10.7592C8.8141 11.2146 8.09245 11.5103 7.33198 11.62L7.33331 11.6666V12.3333H7.99998C8.17679 12.3333 8.34636 12.4035 8.47138 12.5285C8.59641 12.6536 8.66664 12.8231 8.66664 13C8.66664 13.1768 8.59641 13.3463 8.47138 13.4714C8.34636 13.5964 8.17679 13.6666 7.99998 13.6666H7.33331V14.3333C7.33331 14.5101 7.26307 14.6797 7.13805 14.8047C7.01303 14.9297 6.84346 15 6.66665 15C6.48983 15 6.32026 14.9297 6.19524 14.8047C6.07022 14.6797 5.99998 14.5101 5.99998 14.3333V13.6666H5.33331C5.1565 13.6666 4.98693 13.5964 4.86191 13.4714C4.73688 13.3463 4.66665 13.1768 4.66665 13C4.66665 12.8231 4.73688 12.6536 4.86191 12.5285C4.98693 12.4035 5.1565 12.3333 5.33331 12.3333H5.99998V11.6666C5.99998 11.6506 5.99998 11.6353 6.00131 11.62C4.83545 11.4491 3.77732 10.8437 3.03926 9.92518C2.3012 9.00666 1.93781 7.84299 2.02201 6.66769C2.10622 5.49239 2.63178 4.39242 3.49325 3.58849C4.35471 2.78457 5.48834 2.33617 6.66665 2.33329C7.83906 2.33186 8.96881 2.77304 9.82998 3.56862L11.0633 2.33529H10.0066C9.82983 2.33529 9.66026 2.26505 9.53524 2.14002C9.41022 2.015 9.33998 1.84543 9.33998 1.66862C9.33998 1.49181 9.41022 1.32224 9.53524 1.19722C9.66026 1.07219 9.82983 1.00195 10.0066 1.00195H12.6733C12.8501 1.00195 13.0197 1.07219 13.1447 1.19722C13.2697 1.32224 13.34 1.49181 13.34 1.66862V4.33529C13.34 4.5121 13.2697 4.68167 13.1447 4.80669C13.0197 4.93172 12.8501 5.00195 12.6733 5.00195C12.4965 5.00195 12.3269 4.93172 12.2019 4.80669C12.0769 4.68167 12.0066 4.5121 12.0066 4.33529V3.27795L10.676 4.60929H10.6753Z",
  fill: color || 'white'
}));
const TokensIcon = () => __jsx("svg", {
  width: "25",
  height: "24",
  viewBox: "0 0 25 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M9.8501 10C9.58488 10 9.33053 10.1054 9.14299 10.2929C8.95545 10.4804 8.8501 10.7348 8.8501 11V13C8.8501 13.2652 8.95545 13.5196 9.14299 13.7071C9.33053 13.8946 9.58488 14 9.8501 14C10.1153 14 10.3697 13.8946 10.5572 13.7071C10.7447 13.5196 10.8501 13.2652 10.8501 13V11C10.8501 10.7348 10.7447 10.4804 10.5572 10.2929C10.3697 10.1054 10.1153 10 9.8501 10ZM21.8501 11C22.1153 11 22.3697 10.8946 22.5572 10.7071C22.7447 10.5196 22.8501 10.2652 22.8501 10V6C22.8501 5.73478 22.7447 5.48043 22.5572 5.29289C22.3697 5.10536 22.1153 5 21.8501 5H3.8501C3.58488 5 3.33053 5.10536 3.14299 5.29289C2.95545 5.48043 2.8501 5.73478 2.8501 6V10C2.8501 10.2652 2.95545 10.5196 3.14299 10.7071C3.33053 10.8946 3.58488 11 3.8501 11C4.11531 11 4.36967 11.1054 4.5572 11.2929C4.74474 11.4804 4.8501 11.7348 4.8501 12C4.8501 12.2652 4.74474 12.5196 4.5572 12.7071C4.36967 12.8946 4.11531 13 3.8501 13C3.58488 13 3.33053 13.1054 3.14299 13.2929C2.95545 13.4804 2.8501 13.7348 2.8501 14V18C2.8501 18.2652 2.95545 18.5196 3.14299 18.7071C3.33053 18.8946 3.58488 19 3.8501 19H21.8501C22.1153 19 22.3697 18.8946 22.5572 18.7071C22.7447 18.5196 22.8501 18.2652 22.8501 18V14C22.8501 13.7348 22.7447 13.4804 22.5572 13.2929C22.3697 13.1054 22.1153 13 21.8501 13C21.5849 13 21.3305 12.8946 21.143 12.7071C20.9555 12.5196 20.8501 12.2652 20.8501 12C20.8501 11.7348 20.9555 11.4804 21.143 11.2929C21.3305 11.1054 21.5849 11 21.8501 11ZM20.8501 9.18C20.2709 9.3902 19.7706 9.77363 19.4169 10.2782C19.0633 10.7827 18.8736 11.3839 18.8736 12C18.8736 12.6161 19.0633 13.2173 19.4169 13.7218C19.7706 14.2264 20.2709 14.6098 20.8501 14.82V17H10.8501C10.8501 16.7348 10.7447 16.4804 10.5572 16.2929C10.3697 16.1054 10.1153 16 9.8501 16C9.58488 16 9.33053 16.1054 9.14299 16.2929C8.95545 16.4804 8.8501 16.7348 8.8501 17H4.8501V14.82C5.42925 14.6098 5.92964 14.2264 6.28326 13.7218C6.63687 13.2173 6.82657 12.6161 6.82657 12C6.82657 11.3839 6.63687 10.7827 6.28326 10.2782C5.92964 9.77363 5.42925 9.3902 4.8501 9.18V7H8.8501C8.8501 7.26522 8.95545 7.51957 9.14299 7.70711C9.33053 7.89464 9.58488 8 9.8501 8C10.1153 8 10.3697 7.89464 10.5572 7.70711C10.7447 7.51957 10.8501 7.26522 10.8501 7H20.8501V9.18Z",
  fill: "white"
}));
const EarningIcon = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M20.25 3H0.75V18H20.25V3ZM18.75 16.5H2.25V4.5H18.75V16.5Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M21.75 6.75V19.5H4.5V21H23.25V6.75H21.75Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M10.5 14.178C12.361 14.178 13.875 12.531 13.875 10.506C13.875 8.481 12.361 6.834 10.5 6.834C8.639 6.834 7.125 8.481 7.125 10.506C7.125 12.531 8.639 14.178 10.5 14.178ZM10.5 8.335C11.534 8.335 12.375 9.309 12.375 10.507C12.375 11.705 11.534 12.679 10.5 12.679C9.466 12.679 8.625 11.705 8.625 10.507C8.625 9.309 9.466 8.335 10.5 8.335Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M3.75 6.375H5.25V14.625H3.75V6.375Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M15.75 6.375H17.25V14.625H15.75V6.375Z",
  fill: "currentColor"
}));
const PayoutRequestIcon = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM19.6875 13.5H12.375V10.5H19.6875V13.5ZM19.6875 19.6875H4.3125V4.3125H19.6875V9H11.625C11.2102 9 10.875 9.33516 10.875 9.75V14.25C10.875 14.6648 11.2102 15 11.625 15H19.6875V19.6875ZM13.5938 12C13.5938 12.2486 13.6925 12.4871 13.8683 12.6629C14.0442 12.8387 14.2826 12.9375 14.5312 12.9375C14.7799 12.9375 15.0183 12.8387 15.1942 12.6629C15.37 12.4871 15.4688 12.2486 15.4688 12C15.4688 11.7514 15.37 11.5129 15.1942 11.3371C15.0183 11.1613 14.7799 11.0625 14.5312 11.0625C14.2826 11.0625 14.0442 11.1613 13.8683 11.3371C13.6925 11.5129 13.5938 11.7514 13.5938 12Z",
  fill: "currentColor"
}));
const Group = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 25 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M17.4542 11.048C18.0632 10.0101 18.3262 8.80528 18.2052 7.60797C18.0262 5.82397 17.0302 4.24697 15.4022 3.16797L14.2972 4.83397C15.4162 5.57597 16.0972 6.63297 16.2152 7.80797C16.2696 8.35407 16.2016 8.90543 16.0162 9.42195C15.8307 9.93847 15.5325 10.4072 15.1432 10.794L13.9512 11.986L15.5692 12.461C19.8012 13.701 19.8502 17.957 19.8502 18H21.8502C21.8502 16.211 20.8942 12.715 17.4542 11.048Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M10.3501 12C12.5561 12 14.3501 10.206 14.3501 8C14.3501 5.794 12.5561 4 10.3501 4C8.1441 4 6.3501 5.794 6.3501 8C6.3501 10.206 8.1441 12 10.3501 12ZM10.3501 6C11.4531 6 12.3501 6.897 12.3501 8C12.3501 9.103 11.4531 10 10.3501 10C9.2471 10 8.3501 9.103 8.3501 8C8.3501 6.897 9.2471 6 10.3501 6ZM11.8501 13H8.8501C5.5411 13 2.8501 15.691 2.8501 19V20H4.8501V19C4.8501 16.794 6.6441 15 8.8501 15H11.8501C14.0561 15 15.8501 16.794 15.8501 19V20H17.8501V19C17.8501 15.691 15.1591 13 11.8501 13Z",
  fill: "currentColor"
}));

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9XZ2");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5pvF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MessageService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messageService; });
/* harmony import */ var src_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XwMy");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/bfT");


class MessageService extends _api_request__WEBPACK_IMPORTED_MODULE_1__[/* APIRequest */ "a"] {
  getConversations(query) {
    return this.get(this.buildUrl('/conversations', query));
  }

  searchConversations(query) {
    return this.get(this.buildUrl('/conversations/search', query));
  }

  createConversation(data) {
    return this.post('/conversations', data);
  }

  getConversationDetail(id) {
    return this.get(`/conversations/${id}`);
  }

  getConversationByStreamId(streamId) {
    return this.get(`/conversations/stream/${streamId}`);
  }

  getMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/${conversationId}`, query));
  }

  getPublicMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/public/${conversationId}`, query));
  }

  sendMessage(conversationId, data) {
    return this.post(`/messages/conversations/${conversationId}`, data);
  }

  sendStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/conversations/${conversationId}`, data);
  }

  sendPublicStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/public/conversations/${conversationId}`, data);
  }

  findPublicConversationPerformer(performerId) {
    return this.get(`/conversations/stream/public/${performerId}`);
  }

  countTotalNotRead() {
    return this.get('/messages/counting-not-read-messages');
  }

  readAllInConversation(conversationId, recipientId) {
    return this.post('/messages/read-all', {
      conversationId,
      recipientId
    });
  }

  getMessageUploadUrl() {
    return `${src_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].apiEndpoint}/messages/private/file`;
  }

  deleteMessage(id) {
    return this.del(`/messages/${id}`);
  }

  deleteAllMessageInConversation(conversationId) {
    return this.del(`/messages/${conversationId}/remove-all-message`);
  }

}
const messageService = new MessageService();

/***/ }),

/***/ "62On":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formItemLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return tailFormItemLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultColor; });
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
function backToTop() {
  const content = document.querySelector('.content');
  const container = document.querySelector('.container');
  content.scroll({
    top: 0,
    behavior: 'auto'
  });
  container.scroll({
    top: 0,
    behavior: 'auto'
  });
}
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
const defaultColor = {
  primaryColor: '#ff0066',
  successColor: '#2fb52d',
  whiteColor: '#ffffff'
};

/***/ }),

/***/ "7QX/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PhotoService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return photoService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rP/q");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/bfT");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XwMy");






class PhotoService extends src_services_api_request__WEBPACK_IMPORTED_MODULE_3__[/* APIRequest */ "a"] {
  search(params) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', params));
  }

  searchByGallery(galleryId, params, headers) {
    return this.get(this.buildUrl(`/user/performer-assets/photos/${galleryId}/search`, params), headers);
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/photos/${id}/view`, headers);
  }

  myPhotos(query) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', query));
  }

  remove(id) {
    return this.del(`/performer/performer-assets/photos/${id}`);
  }

  create(url, data, options = {
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

      if (data.photo) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(data, ['photo'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_3__[/* TOKEN */ "f"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  update(url, data, options = {
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

      if (data.photo && data.photo.file) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(data, ['photo'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_3__[/* TOKEN */ "f"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  uploadImages(file, payload, onProgress) {
    return this.upload('/performer/performer-assets/photos/upload', [{
      fieldname: 'photo',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

}
const photoService = new PhotoService();

/***/ }),

/***/ "9Gt4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PerformerCategoriesService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return performerCategories; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class PerformerCategoriesService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  getList(query) {
    return this.get(this.buildUrl('/performer-categories', query));
  }

  details(id) {
    return this.get(`/performer-categories/${id}/view`);
  }

}
const performerCategories = new PerformerCategoriesService();

/***/ }),

/***/ "9XZ2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/common/layout/page-header.tsx
var page_header = __webpack_require__("Y1dN");

// EXTERNAL MODULE: ./src/components/common/base/icons.tsx
var icons = __webpack_require__("1Bbz");

// EXTERNAL MODULE: ./src/components/performer/profile-detail.less
var profile_detail = __webpack_require__("jZsp");

// CONCATENATED MODULE: ./src/components/performer/profile-detail.tsx
var __jsx = external_react_["createElement"];





const ListItem = ({
  description,
  title
}) => __jsx(external_antd_["List"].Item, null, __jsx(external_antd_["Row"], {
  style: {
    width: '100%'
  }
}, __jsx(external_antd_["Col"], {
  className: "light-text",
  sm: {
    span: 6
  },
  xs: {
    span: 12
  }
}, title), __jsx(external_antd_["Col"], {
  style: {
    fontWeight: 'bold'
  },
  sm: {
    span: 18
  },
  xs: {
    span: 12
  }
}, description)));

const ProfileDetail = ({
  performer
}) => {
  var _performer$socials, _performer$socials2, _performer$socials3, _performer$socials4, _performer$socials5, _performer$socials6;

  return __jsx("div", {
    className: "performer-profile-list"
  }, __jsx(external_antd_["Row"], null, __jsx(external_antd_["Col"], {
    sm: {
      span: 12
    },
    xs: {
      span: 24
    }
  }, __jsx(external_antd_["List"], {
    itemLayout: "horizontal"
  }, __jsx(ListItem, {
    description: performer.gender,
    title: "Gender"
  }), __jsx(ListItem, {
    description: performer.sexualReference,
    title: "Sexual Preference"
  }), __jsx(ListItem, {
    description: performer.height,
    title: "Height"
  }), __jsx(ListItem, {
    description: performer.weight,
    title: "Weight"
  }), __jsx(ListItem, {
    description: performer.hair,
    title: "Hair"
  }), __jsx(ListItem, {
    description: performer.eyes,
    title: "Eyes"
  }), __jsx(ListItem, {
    description: performer.ethnicity,
    title: "Ethnicity"
  }), __jsx(ListItem, {
    description: performer.pubicHair,
    title: "Pubic hair"
  }), __jsx(ListItem, {
    description: performer.categories && performer.categories.join(', '),
    title: "Categories"
  }), __jsx(ListItem, {
    description: performer.tags && performer.tags.join(', '),
    title: "Tags"
  }), __jsx(ListItem, {
    description: performer.bust,
    title: "Bust"
  })), __jsx("br", null), __jsx(external_antd_["List"], {
    header: __jsx("strong", null, "Public Location Info")
  }, __jsx(ListItem, {
    description: performer.country,
    title: "Country"
  }), __jsx(ListItem, {
    description: performer.state,
    title: "State"
  }), __jsx(ListItem, {
    description: performer.city,
    title: "City"
  })), __jsx("br", null), __jsx(external_antd_["Card"], {
    title: "About me",
    bordered: false
  }, performer.aboutMe || '...'), __jsx(external_antd_["Card"], {
    title: "Social Media Info",
    bordered: false
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, __jsx("div", {
    className: "social-media"
  }, __jsx(external_antd_["Button"], {
    type: "primary",
    style: {
      padding: 5,
      marginRight: 15
    }
  }, __jsx(icons["b" /* FacebookIcon */], null)), __jsx("a", {
    href: performer === null || performer === void 0 ? void 0 : (_performer$socials = performer.socials) === null || _performer$socials === void 0 ? void 0 : _performer$socials.facebook,
    target: "_blank",
    rel: "noreferrer"
  }, performer === null || performer === void 0 ? void 0 : (_performer$socials2 = performer.socials) === null || _performer$socials2 === void 0 ? void 0 : _performer$socials2.facebook)), __jsx("div", {
    className: "social-media"
  }, __jsx(external_antd_["Button"], {
    type: "primary",
    style: {
      padding: 5,
      marginRight: 15
    }
  }, __jsx(icons["r" /* TwitterIcon */], null)), __jsx("a", {
    href: performer === null || performer === void 0 ? void 0 : (_performer$socials3 = performer.socials) === null || _performer$socials3 === void 0 ? void 0 : _performer$socials3.twitter,
    target: "_blank",
    rel: "noreferrer"
  }, performer === null || performer === void 0 ? void 0 : (_performer$socials4 = performer.socials) === null || _performer$socials4 === void 0 ? void 0 : _performer$socials4.twitter)), __jsx("div", {
    className: "social-media"
  }, __jsx(external_antd_["Button"], {
    type: "primary",
    style: {
      padding: 5,
      marginRight: 15
    }
  }, __jsx(icons["g" /* InstagramIcon */], null)), __jsx("a", {
    href: performer === null || performer === void 0 ? void 0 : (_performer$socials5 = performer.socials) === null || _performer$socials5 === void 0 ? void 0 : _performer$socials5.instagram,
    target: "_blank",
    rel: "noreferrer"
  }, performer === null || performer === void 0 ? void 0 : (_performer$socials6 = performer.socials) === null || _performer$socials6 === void 0 ? void 0 : _performer$socials6.instagram)))))));
};

/* harmony default export */ var performer_profile_detail = (ProfileDetail);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/performer/actions.ts
var actions = __webpack_require__("WT8E");

// EXTERNAL MODULE: ./src/services/index.ts + 13 modules
var services = __webpack_require__("CLrh");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./src/components/performer/index.less
var components_performer = __webpack_require__("kpM1");

// CONCATENATED MODULE: ./src/components/common/base/select/profile.tsx

var profile_jsx = external_react_default.a.createElement;

/* eslint-disable react/react-in-jsx-scope */


class profile_OptionProfile extends external_react_["PureComponent"] {
  render() {
    const {
      label,
      dataSource,
      name
    } = this.props;
    return profile_jsx(external_antd_["Form"].Item, {
      label: label,
      name: name
    }, profile_jsx(external_antd_["Select"], null, dataSource.map(d => profile_jsx(external_antd_["Select"].Option, {
      value: d.value,
      key: d.value
    }, d.label))));
  }

}
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__("NsEo");

// CONCATENATED MODULE: ./src/components/performer/profile-edit-form.tsx
var profile_edit_form_jsx = external_react_["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-shadow */

/* eslint-disable no-return-assign */

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable prefer-const */

/* eslint-disable react/require-default-props */






const {
  TextArea
} = external_antd_["Input"];
const hairDataSource = [{
  label: 'Brown',
  value: 'brown'
}, {
  label: 'Blonde',
  value: 'blonde'
}, {
  label: 'Black',
  value: 'black'
}, {
  label: 'Red',
  value: 'red'
}, {
  label: 'Unknown',
  value: 'unknown'
}];
const pubicHairDataSource = [{
  label: 'Trimmed',
  value: 'trimmed'
}, {
  label: 'Shaved',
  value: 'shaved'
}, {
  label: 'Hairy',
  value: 'hairy'
}, {
  label: 'Unknown',
  value: 'unknown'
}];
const bustDataSource = [{
  label: 'Large',
  value: 'large'
}, {
  label: 'Medium',
  value: 'medium'
}, {
  label: 'Small',
  value: 'small'
}, {
  label: 'Unknown',
  value: 'unknown'
}];
const weightDataSource = Object(utils["d" /* formatDataWeight */])();
const heightDatasource = Object(utils["c" /* formatDataHeight */])();
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
  onFinish,
  firstName,
  lastName,
  countries,
  country,
  city,
  loading,
  address,
  state,
  aboutMe,
  dateOfBirth,
  gender,
  sexualReference,
  ethnicity,
  eyes,
  hair,
  height,
  weight,
  categoryIds,
  tags,
  pubicHair,
  bust,
  categoriesData,
  socials
}) => {
  const [form] = external_antd_["Form"].useForm();
  let [facebook, setFb] = external_react_["useState"]((socials === null || socials === void 0 ? void 0 : socials.facebook) || '');
  let [twitter, setTw] = external_react_["useState"]((socials === null || socials === void 0 ? void 0 : socials.twitter) || '');
  let [instagram, setIta] = external_react_["useState"]((socials === null || socials === void 0 ? void 0 : socials.instagram) || '');
  return profile_edit_form_jsx(external_antd_["Form"], _extends({}, formItemLayout, {
    form: form,
    onFinish: values => {
      const data = _objectSpread(_objectSpread({}, values), {
        socials: {
          facebook,
          twitter,
          instagram
        }
      });

      onFinish(data);
    },
    name: "contactSettingForm",
    className: "performerEditForm",
    initialValues: {
      firstName,
      lastName,
      city,
      address,
      state,
      aboutMe,
      country,
      dateOfBirth: external_moment_default()(dateOfBirth),
      gender,
      sexualReference,
      ethnicity,
      eyes,
      hair,
      height,
      weight,
      categoryIds,
      pubicHair,
      bust,
      tags,
      socials
    },
    layout: "horizontal"
  }), profile_edit_form_jsx(external_antd_["Form"].Item, {
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
  }, profile_edit_form_jsx(external_antd_["Input"], {
    placeholder: "First name"
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
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
  }, profile_edit_form_jsx(external_antd_["Input"], {
    placeholder: "Last name"
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "aboutMe",
    label: "About me"
  }, profile_edit_form_jsx(TextArea, {
    rows: 2,
    placeholder: "Tell your fans something about you"
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "gender",
    label: "Gender"
  }, profile_edit_form_jsx(external_antd_["Select"], null, profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "male",
    key: "male"
  }, "Male"), profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "female",
    key: "female"
  }, "Female"), profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "transgender",
    key: "transgender"
  }, "Transgender"))), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "sexualReference",
    label: "Sexual Preference"
  }, profile_edit_form_jsx(external_antd_["Input"], {
    placeholder: "Sexual Preference"
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
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

        return Promise.reject('Minimum of 18 years');
      }
    }]
  }, profile_edit_form_jsx(external_antd_["DatePicker"], {
    style: {
      width: '100%'
    }
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "ethnicity",
    label: "Ethnicity"
  }, profile_edit_form_jsx(external_antd_["Select"], null, profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "White",
    key: "white"
  }, "White"), profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "Asian",
    key: "asian"
  }, "Asian"), profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "Black",
    key: "black"
  }, "Black"), profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "India",
    key: "india"
  }, "India"), profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "Latin",
    key: "latin"
  }, "Latin"), profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "Unknown",
    key: "unknown"
  }, "Unknown"))), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "eyes",
    label: "Eyes"
  }, profile_edit_form_jsx(external_antd_["Select"], null, profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "Blue",
    key: "blue"
  }, "Blue"), profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "Brown",
    key: "brown"
  }, "Brown"), profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "Green",
    key: "green"
  }, "Green"), profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: "Unknown",
    key: "unknown"
  }, "Unknown"))), profile_edit_form_jsx(profile_OptionProfile, {
    label: "Hair",
    dataSource: hairDataSource,
    name: "hair"
  }), profile_edit_form_jsx(profile_OptionProfile, {
    label: "Weight",
    dataSource: weightDataSource,
    name: "weight"
  }), profile_edit_form_jsx(profile_OptionProfile, {
    label: "Height",
    dataSource: heightDatasource,
    name: "height"
  }), profile_edit_form_jsx(profile_OptionProfile, {
    label: "Pubic Hair",
    dataSource: pubicHairDataSource,
    name: "pubicHair"
  }), profile_edit_form_jsx(profile_OptionProfile, {
    label: "Bust",
    dataSource: bustDataSource,
    name: "bust"
  }), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "categoryIds",
    label: "Categories"
  }, profile_edit_form_jsx(external_antd_["Select"], {
    mode: "multiple"
  }, categoriesData.map(c => profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: c._id,
    key: c._id
  }, c.name)))), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "tags",
    label: "Tags"
  }, profile_edit_form_jsx(external_antd_["Select"], {
    mode: "tags"
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "country",
    label: "Country",
    rules: [{
      required: true,
      message: 'Please input your country!'
    }]
  }, profile_edit_form_jsx(external_antd_["Select"], {
    showSearch: true
  }, countries.length > 0 && countries.map(country => profile_edit_form_jsx(external_antd_["Select"].Option, {
    value: country.name,
    key: country.code
  }, country.name)))), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "state",
    label: "State Name"
  }, profile_edit_form_jsx(external_antd_["Input"], {
    placeholder: "samplestate"
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "city",
    label: "City"
  }, profile_edit_form_jsx(external_antd_["Input"], {
    placeholder: "samplecity"
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "zipcode",
    label: "Zip"
  }, profile_edit_form_jsx(external_antd_["Input"], {
    placeholder: "012345-678"
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
    name: "address",
    label: "Address"
  }, profile_edit_form_jsx(external_antd_["Input"], {
    placeholder: "Address"
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
    label: "Facebook"
  }, profile_edit_form_jsx(external_antd_["Input"], {
    placeholder: "https://www.facebook.com",
    value: facebook,
    onChange: e => setFb(facebook = e.target.value)
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
    label: "Twitter"
  }, profile_edit_form_jsx(external_antd_["Input"], {
    placeholder: "https://www.twitter.com",
    value: twitter,
    onChange: e => setTw(twitter = e.target.value)
  })), profile_edit_form_jsx(external_antd_["Form"].Item, {
    label: "Instagram"
  }, profile_edit_form_jsx(external_antd_["Input"], {
    placeholder: "https://www.instagram.com",
    value: instagram,
    onChange: e => setIta(instagram = e.target.value)
  })), profile_edit_form_jsx(external_antd_["Form"].Item, tailFormItemLayout, profile_edit_form_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    disabled: loading,
    loading: loading
  }, "Save Changes")));
};

/* harmony default export */ var profile_edit_form = (UserProfile);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// CONCATENATED MODULE: ./src/components/file/image-upload.tsx
var image_upload_jsx = external_react_default.a.createElement;

function image_upload_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class image_upload_ImageUpload extends external_react_["PureComponent"] {
  constructor(props) {
    super(props);

    image_upload_defineProperty(this, "handleChange", info => {
      if (info.file.status === 'uploading') {
        this.setState({
          loading: true
        });
        return;
      }

      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.fileList[0].originFileObj, imageUrl => {
          this.setState({
            imageUrl,
            loading: false
          });
          const {
            onUploaded
          } = this.props;
          onUploaded && onUploaded({
            response: info.file.response,
            base64: imageUrl
          });
        });
      }
    });

    const {
      imageUrl: _imageUrl
    } = this.props;
    this.state = {
      loading: false,
      imageUrl: _imageUrl
    };
  }

  render() {
    const {
      options = {},
      beforeUpload
    } = this.props;
    const {
      loading
    } = this.state;

    const uploadButton = image_upload_jsx("div", null, loading ? image_upload_jsx(icons_["LoadingOutlined"], null) : image_upload_jsx(icons_["PlusOutlined"], null), image_upload_jsx("div", {
      className: "ant-upload-text"
    }, "Upload"));

    const {
      imageUrl
    } = this.state;
    const {
      headers,
      uploadUrl
    } = this.props;
    return image_upload_jsx(external_antd_["Upload"], {
      name: options.fieldName || 'file',
      listType: "picture-card",
      className: "avatar-uploader",
      showUploadList: false,
      action: uploadUrl,
      beforeUpload: beforeUpload,
      onChange: this.handleChange,
      headers: headers
    }, imageUrl ? image_upload_jsx("img", {
      src: imageUrl,
      alt: "file",
      style: {
        width: '100%'
      }
    }) : uploadButton);
  }

}
// EXTERNAL MODULE: ./pages/account/performer/profile/index.less
var profile = __webpack_require__("uBU0");

// EXTERNAL MODULE: ./src/lib/file.ts
var file = __webpack_require__("GMeC");

// CONCATENATED MODULE: ./pages/account/performer/profile/index.tsx
var performer_profile_jsx = external_react_default.a.createElement;

function profile_extends() { profile_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return profile_extends.apply(this, arguments); }

function profile_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function profile_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profile_ownKeys(Object(source), true).forEach(function (key) { profile_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profile_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















class profile_PerformerProfilePage extends external_react_["PureComponent"] {
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
  }

  componentDidUpdate(prevProps) {
    const {
      updateSuccess,
      updateError
    } = this.props;

    if (updateSuccess && prevProps.updateSuccess !== updateSuccess) {
      external_antd_["message"].success('Update Profile Success.');
    }

    if (prevProps.updateError !== updateError && updateError) {
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(updateError));
    }
  }

  onTabsChange(key) {
    router_default.a.push({
      pathname: '/account/performer/profile',
      query: {
        action: key
      }
    }, `/account/performer/profile?action=${key}`, {
      shallow: false
    });
  }

  onFinish(data) {
    const {
      performer,
      updatePerformerProfile: dispatchupDatePerformerProfile
    } = this.props;
    dispatchupDatePerformerProfile(profile_objectSpread(profile_objectSpread({}, performer), data));
  }

  onUploadedAvatar(data) {
    const {
      performer,
      updatePerformerProfileSuccess: dispatchUpdatePerformerProfileSuccess,
      setupdatingPerformerProfile: dispatchSetUpdating
    } = this.props;
    dispatchSetUpdating();
    dispatchUpdatePerformerProfileSuccess(profile_objectSpread(profile_objectSpread({}, performer), {}, {
      avatar: data.response.data.url
    }));
  }

  render() {
    const {
      action,
      performer,
      categoriesData,
      updating,
      countries
    } = this.props;
    const uploadHeaders = {
      authorization: services["a" /* authService */].getToken()
    };
    return performer_profile_jsx(external_react_default.a.Fragment, null, performer_profile_jsx(head_default.a, null, performer_profile_jsx("title", null, "My Profile")), performer_profile_jsx("div", {
      className: "performer-profile-page"
    }, performer_profile_jsx(page_header["a" /* default */], {
      title: "My Profile"
    }), performer_profile_jsx(external_antd_["Tabs"], {
      activeKey: action || 'profile-image',
      style: {
        padding: '0 24px'
      },
      size: "large",
      onChange: this.onTabsChange.bind(this)
    }, performer_profile_jsx(external_antd_["Tabs"].TabPane, {
      tab: "Profile Image",
      key: "profile-image"
    }, performer_profile_jsx(external_antd_["Form"].Item, {
      label: "Profile Image"
    }, performer_profile_jsx(image_upload_ImageUpload, {
      options: {
        fieldName: 'avatar'
      },
      imageUrl: performer === null || performer === void 0 ? void 0 : performer.avatar,
      uploadUrl: services["k" /* performerService */].getAvatarUploadUrl(),
      headers: uploadHeaders,
      beforeUpload: file["a" /* beforeAvatarUpload */],
      onUploaded: this.onUploadedAvatar.bind(this)
    }))), performer_profile_jsx(external_antd_["Tabs"].TabPane, {
      tab: "My Profile",
      key: "profile"
    }, performer_profile_jsx(performer_profile_detail, {
      performer: performer
    })), performer_profile_jsx(external_antd_["Tabs"].TabPane, {
      tab: "Edit Profile",
      key: "edit-profile"
    }, performer_profile_jsx(profile_edit_form, profile_extends({}, performer, {
      categoriesData: categoriesData,
      countries: countries,
      onFinish: this.onFinish.bind(this),
      loading: updating
    }))))));
  }

}

profile_defineProperty(profile_PerformerProfilePage, "authenticate", true);

profile_defineProperty(profile_PerformerProfilePage, "layout", 'primary');

const mapStateToProps = state => ({
  performer: state.performer.current,
  updating: state.performer.updating,
  updateSuccess: state.performer.updateSuccess,
  updateError: state.performer.updateError,
  categoriesData: state.performer.categories.data,
  countries: state.settings.countries
});

const mapDispatchs = {
  updatePerformerProfile: actions["db" /* updatePerformerProfile */],
  updateCurrentPerformer: actions["W" /* updateCurrentPerformer */],
  updatePerformerProfileSuccess: actions["fb" /* updatePerformerProfileSuccess */],
  setupdatingPerformerProfile: actions["U" /* setupdatingPerformerProfile */]
};
/* harmony default export */ var performer_profile = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchs)(profile_PerformerProfilePage));

/***/ }),

/***/ "ADto":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return converDuration; });
/* unused harmony export parseAge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatDuration; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function formatDate(date, format = 'DD/MM/YYYY HH:mm:ss') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function converDuration(duration, format = 'HH:mm') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default.a.utc(moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(duration, 'milliseconds').asMilliseconds()).format(format);
}
function parseAge(date, format = 'MMMM DD, YYYY') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function getAge(d) {
  if (!d) return '';
  const age = new Date().getFullYear() - new Date(d).getFullYear();
  return age;
}
function formatDuration(s) {
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s - hours * 3600) / 60);
  const seconds = s - hours * 3600 - minutes * 60;
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

/***/ }),

/***/ "CLrh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ auth_service["a" /* authService */]; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ user_service["a" /* userService */]; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ post_service["a" /* postService */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ perfomer_categories_service["a" /* performerCategories */]; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ perfomer_service["b" /* performerService */]; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ videoService; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ product_service["a" /* productService */]; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ setting_service["a" /* settingService */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ photo_service["a" /* photoService */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ galleryService; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ favouriteService; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ transactionService; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ streamService; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ message_service["a" /* messageService */]; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ purchaseItemService; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ orderService; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ earningService; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ payoutRequestService; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ refundRequestService; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ studioService; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ bannerService; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ payment_information_service["a" /* paymentInformationService */]; });

// UNUSED EXPORTS: AuthService, UserService, PostService, PerformerCategoriesService, PerformerService, GENNDER_PERFORMER, VideoService, ProductService, SettingService, PhotoService, GalleryService, TokenPackageService, tokenPackageService, TransactionService, MessageService, PurchaseItemService, OrderService, RefundRequestService, UtilsService, utilsService, StudioService, BannerService

// EXTERNAL MODULE: ./src/services/auth.service.ts
var auth_service = __webpack_require__("LLt/");

// EXTERNAL MODULE: ./src/services/user.service.ts
var user_service = __webpack_require__("ITiG");

// EXTERNAL MODULE: ./src/services/post.service.ts
var post_service = __webpack_require__("Co7z");

// EXTERNAL MODULE: ./src/services/perfomer-categories.service.ts
var perfomer_categories_service = __webpack_require__("9Gt4");

// EXTERNAL MODULE: ./src/services/perfomer.service.ts
var perfomer_service = __webpack_require__("EC5a");

// EXTERNAL MODULE: ./src/services/api-request.ts
var api_request = __webpack_require__("/bfT");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/lib/string.ts
var string = __webpack_require__("rP/q");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./src/env.ts
var env = __webpack_require__("XwMy");

// CONCATENATED MODULE: ./src/services/video.service.ts






class video_service_VideoService extends api_request["a" /* APIRequest */] {
  search(params) {
    return this.get(this.buildUrl('/user/performer-assets/videos/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/videos', params));
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/videos/${id}/view`, headers);
  }

  myVideos(query) {
    return this.get(this.buildUrl('/performer/performer-assets/videos/search', query));
  }

  removeMyVideo(id) {
    return this.del(`/performer/performer-assets/videos/${id}`);
  }

  create(url, data, options = {
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

      if (data.video) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(Object(external_lodash_["omit"])(data, ['video', 'thumbnail', 'trailer'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(string["c" /* isUrl */])(url) ? url : `${env["a" /* default */].apiEndpoint}${url}`);
      const token = external_js_cookie_default.a.get(api_request["f" /* TOKEN */]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  update(url, data, options = {
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

      if (data.video && data.video.file) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer && data.trailer.file) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail && data.thumbnail.file) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(Object(external_lodash_["omit"])(data, ['video', 'thumbnail', 'trailer'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(string["c" /* isUrl */])(url) ? url : `${env["a" /* default */].apiEndpoint}${url}`);
      const token = external_js_cookie_default.a.get(api_request["f" /* TOKEN */]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  increaseView(id) {
    return this.post(`/user/performer-assets/videos/${id}/inc-view`);
  } // update(videoId, performerId, data) {
  //   return this.put(`/performer/performer-assets/videos/${videoId}`, {
  //     ...data,
  //     performerId
  //   });
  // }


  userFindVideoById(id, headers = {}) {
    return this.get(`/user/performer-assets/videos/${id}`, headers);
  }

}
const videoService = new video_service_VideoService();
// EXTERNAL MODULE: ./src/services/product.service.ts
var product_service = __webpack_require__("HR6+");

// EXTERNAL MODULE: ./src/services/setting.service.ts
var setting_service = __webpack_require__("zM0U");

// EXTERNAL MODULE: ./src/services/photo.service.ts
var photo_service = __webpack_require__("7QX/");

// CONCATENATED MODULE: ./src/services/gallery.service.ts

class gallery_service_GalleryService extends api_request["a" /* APIRequest */] {
  search(params, isPerformer = true) {
    return this.get(this.buildUrl(isPerformer ? '/performer/performer-assets/galleries/search' : '/user/performer-assets/galleries/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/galleries', params));
  }

  create(data) {
    return this.post('/performer/performer-assets/galleries', data);
  }

  update(id, data) {
    return this.put(`/performer/performer-assets/galleries/${id}`, data);
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/galleries/${id}/view`, headers);
  }

  publicdetails(id, headers) {
    return this.get(`/user/performer-assets/galleries/${id}/view`, headers);
  }

  remove(id) {
    return this.del(`/performer/performer-assets/galleries/${id}`);
  }

}
const galleryService = new gallery_service_GalleryService();
// CONCATENATED MODULE: ./src/services/favourite.service.ts


class favourite_service_FavouriteService extends api_request["a" /* APIRequest */] {
  like(id) {
    return this.post(`/favourite/${id}/like`);
  }

  unlike(id) {
    return this.post(`/favourite/${id}/unlike`);
  }

  favorite(id, isFavorited) {
    return this.post(`/favourite/${id}/${isFavorited ? 'unlike' : 'like'}`);
  }

  search(query) {
    return this.get(this.buildUrl('/favourite', query));
  }

}

const favouriteService = new favourite_service_FavouriteService();
// EXTERNAL MODULE: ./src/services/token-package.service.ts
var token_package_service = __webpack_require__("XTf7");

// CONCATENATED MODULE: ./src/services/transaction.service.ts

class transaction_service_TransactionService extends api_request["a" /* APIRequest */] {
  search(params) {
    return this.get(this.buildUrl('/transactions/user/search', params));
  }

  sendTipToken(performerId, token, conversationId) {
    return this.post(`/member/send-tip-token/${performerId}`, {
      token,
      conversationId
    });
  }

  sendPaidToken(conversationId) {
    return this.post(`/member/send-pay-token/${conversationId}`);
  }

}
const transactionService = new transaction_service_TransactionService();
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/lib/index.ts + 2 modules
var lib = __webpack_require__("psLn");

// CONCATENATED MODULE: ./src/services/stream.service.tsx





class stream_service_StreamService extends api_request["a" /* APIRequest */] {
  getSessionId(id, type) {
    return this.get(`/streaming/session/${id}/${type}`);
  }

  goLive() {
    return this.post('/streaming/live');
  }

  joinPublicChat(performerId) {
    return this.post(`/streaming/join/${performerId}`);
  }

  requestPrivateChat(performerId) {
    return this.post(`/streaming/private-chat/${performerId}`);
  }

  acceptPrivateChat(id) {
    return this.get(`/streaming/private-chat/${id}`);
  }

  startGroupChat() {
    return this.post('/streaming/group-chat');
  }

  joinGroupChat(id) {
    return this.get(`/streaming/group-chat/${id}`);
  }

  generateOneTimeToken(data) {
    return this.post('/streaming/token', data);
  }

  async getPublishToken(options, expireDate = external_moment_default()().add(1, 'd').toDate().getTime()) {
    try {
      const {
        settings,
        streamId
      } = options;
      const {
        secureOption
      } = settings;

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'publish',
          expireDate
        });
        return resp.data.tokenId;
      }

      return null;
    } catch (err) {
      const error = await Promise.resolve(err);
      external_antd_["message"].error(Object(lib["j" /* getResponseError */])(error));
      return null;
    }
  }

  async getSubscriberToken(options, expireDate = external_moment_default()().add(1, 'd').toDate().getTime()) {
    try {
      const {
        settings,
        streamId
      } = options;
      const {
        secureOption
      } = settings;

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'play',
          expireDate
        });
        return resp.data.tokenId;
      }

      return null;
    } catch (err) {
      const error = await Promise.resolve(err);
      external_antd_["message"].error(Object(lib["j" /* getResponseError */])(error));
      return null;
    }
  }

  async getLiveStreamOrVodURL(options, expireDate = external_moment_default()().add(1, 'd').toDate().getTime(), _player = 'hls') {
    // http://[IP_Address]/<Application_Name>/streams/streamID.mp4?token=tokenId
    // http://[IP_Address]/<Application_Name>/streams/streamID.m3u8?token=tokenId
    // http://[IP_Address]/<Application_Name>/play.html?name=streamID&playOrder=hls&token=tokenId
    try {
      // const src = `https://${viewerURL}:5443/${appName}/streams/${streamId}.m3u8${oneTimeToken ? `?token=${oneTimeToken}` : ''}`;
      // eslint-disable-next-line no-shadow
      const {
        appName,
        settings,
        streamId
      } = options;
      const {
        secureOption,
        viewerURL
      } = settings;
      const extension = _player === 'hls' ? 'm3u8' : 'mp4';

      if (!viewerURL || !appName) {
        return '';
      }

      let oneTimeToken = '';

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'play',
          expireDate
        });
        oneTimeToken = resp.data.tokenId;
      }

      const {
        protocol
      } = window.location;
      return `${protocol}//${viewerURL}/${appName}/streams/${streamId}.${extension}${oneTimeToken ? `?token=${oneTimeToken}` : ''}`;
    } catch (err) {
      const error = await Promise.resolve(err);
      external_antd_["message"].error(Object(lib["j" /* getResponseError */])(error));
      return '';
    }
  }

}

const streamService = new stream_service_StreamService();
// EXTERNAL MODULE: ./src/services/message.service.ts
var message_service = __webpack_require__("5pvF");

// CONCATENATED MODULE: ./src/services/purchase-item.service.ts

class purchase_item_service_PurchaseItemService extends api_request["a" /* APIRequest */] {
  search(query) {
    return this.get(this.buildUrl('/purchased-items/user/search', query));
  }

  purchaseItem(id, type, data) {
    return this.post(`/purchase-items/${type}/${id}`, data);
  }

  purchaseProduct(id) {
    return this.post(`/purchase-items/product/${id}`);
  }

  purchaseVideo(id) {
    return this.post(`/purchase-items/video/${id}`);
  }

}
const purchaseItemService = new purchase_item_service_PurchaseItemService();
// CONCATENATED MODULE: ./src/services/order.service.ts
// import { IGalleryCreate } from 'src/interfaces';

class order_service_OrderService extends api_request["a" /* APIRequest */] {
  search(payload) {
    return this.get(this.buildUrl('/orders/search', payload));
  }

  details(id) {
    return this.get(`/orders/details/${id}`);
  }

  update(id, data) {
    return this.put(`/orders/${id}/update`, data);
  }

  userSearch(query) {
    return this.get(this.buildUrl('/orders/user/search', query));
  }

  userFindDetails(id) {
    return this.get(`/orders/user/details/${id}`);
  }

}
const orderService = new order_service_OrderService();
// CONCATENATED MODULE: ./src/services/earning.service.ts


class earning_service_EarningService extends api_request["a" /* APIRequest */] {
  search(params, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/search`, params));
  }

  stats(params, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/stats`, params));
  }

}

const earningService = new earning_service_EarningService();
// CONCATENATED MODULE: ./src/services/payout-request.ts


class payout_request_PayoutRequestService extends api_request["a" /* APIRequest */] {
  calculate(params, role) {
    return this.get(this.buildUrl(`/earning/${role || 'performer'}/payout`, params));
  }

  search(query) {
    return this.get(this.buildUrl('/payout-requests/performer/search', query));
  }

  studioSearch(query) {
    return this.get(this.buildUrl('/payout-requests/studio/search', query));
  }

  create(body, role = 'performer') {
    return this.post(`/payout-requests/${role}`, body);
  }

  update(id, body, role = 'performer') {
    return this.put(`/payout-requests/${role}/${id}`, body);
  }

  detail(id, headers, role = 'performer') {
    return this.get(`/payout-requests/${role}/${id}/view`, headers);
  }

}

const payoutRequestService = new payout_request_PayoutRequestService();
// CONCATENATED MODULE: ./src/services/refund-request.service.ts

class refund_request_service_RefundRequestService extends api_request["a" /* APIRequest */] {
  create(data) {
    return this.post('/refund-requests', data);
  }

  search(params) {
    return this.get(this.buildUrl('/refund-requests/search', params));
  }

}
const refundRequestService = new refund_request_service_RefundRequestService();
// CONCATENATED MODULE: ./src/services/utils.service.ts

class utils_service_UtilsService extends api_request["a" /* APIRequest */] {
  countriesList() {
    return this.get('/countries/list');
  }

  languagesList() {
    return this.get('/languages/list');
  }

  phoneCodesList() {
    return this.get('/phone-codes/list');
  }

  statistics() {
    return this.get('/statistics/admin');
  }

}
const utilsService = new utils_service_UtilsService();
// CONCATENATED MODULE: ./src/services/studio.service.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class studio_service_StudioService extends api_request["a" /* APIRequest */] {
  me(headers) {
    return this.get('/studio/me', headers);
  }

  update(payload) {
    return this.put('/studio/update', payload);
  }

  updatePaymentInfo(payload) {
    return this.post('/studio/bank-transfer/update', payload);
  }

  updateDirectDepost(payload) {
    return this.post('/studio/direct-deposit/update', payload);
  }

  updatePaxum(payload) {
    return this.post('/studio/paxum/update', payload);
  }

  updateBitpay(payload) {
    return this.post('/studio/bitpay/update', payload);
  }

  getCommission() {
    return this.get('/settings/studio/commission');
  }

  addModel(payload) {
    return this.post('/studio/members', payload);
  }

  getMembers(params) {
    return this.get(this.buildUrl('/studio/members', params));
  }

  getMemberCommissions(params) {
    return this.get(this.buildUrl('/studio/commission', params));
  }

  updateMemberCommission(id, commission) {
    return this.put(`/studio/commission/member/${id}`, {
      commission
    });
  }

  getPerformerRequest(params) {
    return this.get(this.buildUrl('/payout-requests/studio/performer-request', params));
  }

  updateStatusPerformerRequest(id, payload) {
    return this.put(`/payout-requests/studio/update/${id}`, _objectSpread({}, payload));
  }

  updateMemberStatus(id, status) {
    return this.post(`/studio/members/${id}/active`, {
      status
    });
  }

  stats() {
    return this.get('/studio/stats');
  }

  getDocumentsUploadUrl() {
    return `${env["a" /* default */].apiEndpoint}/studio/documents/upload`;
  }

}
const studioService = new studio_service_StudioService();
// CONCATENATED MODULE: ./src/services/banner.service.ts

class banner_service_BannerService extends api_request["a" /* APIRequest */] {
  search(query) {
    return this.get(this.buildUrl('/banners/search', query));
  }

}
const bannerService = new banner_service_BannerService();
// EXTERNAL MODULE: ./src/services/payment-information.service.ts
var payment_information_service = __webpack_require__("caM8");

// CONCATENATED MODULE: ./src/services/index.ts

























/***/ }),

/***/ "Co7z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PostService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class PostService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  search(query) {
    return this.get(this.buildUrl('/posts/search', query));
  }

  findById(id) {
    return this.get(`/posts/${id}`);
  }

}
const postService = new PostService();

/***/ }),

/***/ "EC5a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PerformerService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GENNDER_PERFORMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return performerService; });
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rP/q");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/bfT");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XwMy");





class PerformerService extends _api_request__WEBPACK_IMPORTED_MODULE_3__[/* APIRequest */ "a"] {
  me(headers) {
    return this.get('/performers/me', headers);
  }

  updateMe(payload) {
    return this.put('/performers', payload);
  }

  search(query) {
    return this.get(this.buildUrl('/performers/search', query));
  }

  details(username, headers = {}) {
    return this.get(`/performers/${username}/view`, headers);
  }

  getAvatarUploadUrl() {
    return `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}/performers/avatar/upload`;
  }

  getDocumentsUploadUrl() {
    return `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}/performers/documents/upload`;
  }

  getReleaseFormUrl() {
    return `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}/performers/release-form/upload`;
  }

  myProduct(query) {
    return this.get(this.buildUrl('/performer/performer-assets/products/search', query));
  }

  createProduct(url, data, options = {
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

      if (data.image) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['image', 'digitalFile'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_0__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_3__[/* TOKEN */ "f"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  updateProduct(url, data, options = {
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

      if (data.image && data.image.file) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile && data.digitalFile.file) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['image', 'digitalFile'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_0__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_3__[/* TOKEN */ "f"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  removeProduct(id) {
    return this.del(`/performer/performer-assets/products/${id}`);
  }

  getCommission() {
    return this.get('/settings/performer/commission');
  }

  updatePaymentInfo(payload) {
    return this.post('/performers/bank-transfer/update', payload);
  }

  updateDirectDepost(payload) {
    return this.post('/performers/direct-deposit/update', payload);
  }

  updatePaxum(payload) {
    return this.post('/performers/paxum/update', payload);
  }

  updateBitpay(payload) {
    return this.post('/performers/bitpay/update', payload);
  }

  updateStreamingStatus(payload) {
    return this.post('/performers/streaming-status/update', payload);
  }

  geoBlock(payload) {
    return this.post('/performers/blocking/update', payload);
  }

  getBlockedList() {
    return this.get(this.buildUrl('/performers/blocking'));
  }

  increaseView(performerId) {
    return this.post(`/performers/${performerId}/inc-view`);
  }

  updateDefaultPrice(payload) {
    return this.post('/performers/default-price/update', payload);
  }

  updateBroadcastSetting(payload) {
    return this.post('/performers/broadcast-setting/update', payload);
  }

  suspendAccount(performerId) {
    return this.post(`/performers/suspend-account/${performerId}`);
  }

  checkBlock(performerId) {
    return this.get(`/performers/${performerId}/check-blocking`);
  }

}
const GENNDER_PERFORMER = ['female', 'transgender', 'male'];
const performerService = new PerformerService();

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

/***/ "HR6+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class ProductService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  details(id, headers) {
    return this.get(`/performer/performer-assets/products/${id}/view`, headers);
  }

  search(params) {
    return this.get(this.buildUrl('/user/performer-assets/products/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/products', params));
  }

  getDownloadLink(id) {
    return this.get(`/user/performer-assets/products/${id}/download-link`);
  }

}
const productService = new ProductService();

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

/***/ "LLt/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authService; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/bfT");


class AuthService extends _api_request__WEBPACK_IMPORTED_MODULE_1__[/* APIRequest */ "a"] {
  login(data) {
    return this.post('/auth/users/login', data);
  }

  setAuthHeader(token, role) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "f"], token, {
      expires: 365
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* ROLE */ "c"], role, {
      expires: 365
    });
    this.setAuthHeaderToken(token);
  }

  performerLogin(data) {
    return this.post('/auth/performers/login', data);
  }

  studioLogin(data) {
    return this.post('/auth/studio/login', data);
  }

  setToken(token) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "f"], token, {
      expires: 365
    });
    this.setAuthHeaderToken(token);
  }

  getToken() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "f"]);
    return token || null;
  }

  getRole() {
    const role = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* ROLE */ "c"]);
    return role || null;
  }

  removeToken() {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "f"]);
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* ROLE */ "c"]);
  }

  removeRemember() {
     false && false;
  }

  updatePassword(body) {
    return this.put('/auth/users/me/password', body);
  }

  performersRegister(data) {
    return this.register('/auth/performers/register', data);
  }

  userRegister(data) {
    return this.post('/auth/users/register', data);
  }

  studioRegister(data) {
    return this.register('/auth/studio/register', data);
  }

  forgotPassword(email, type) {
    const data = {
      email,
      type
    };
    return this.post('/auth/users/forgot', data);
  }

  resendVerificationEmail(data) {
    return this.post('/verification/resend-verification-email', data);
  }

}
const authService = new AuthService();

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

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "WT8E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return getPerformerCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return getPerformerCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return getPerformerCategoriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return searchPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return searchPerformerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return searchPerformerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return setPerformerSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return updatePerformerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return updatePerformerProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return updatePerformerProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return setupdatingPerformerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return updatePaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return updateDirectDeposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return updatePaxum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return updateBitpay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return updateStreamingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return updateDefaultPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return getPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return getPerformerDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return getPerformerDetailsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return setGettingPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return setPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return updatePerformerAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return setFavoritePerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getMyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getMyProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getMyProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return setGettingMyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addMyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return removeMyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getEarningSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getEarningFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return setGettingEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getPayoutRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return getPayoutRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return setGettingPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return removePayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return getMyVideosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getMyVideosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return setgettingMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return removeMyVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getMyPhotosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getMyPhotosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return setgettingMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return removeMyPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMyGalleriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getMyGalleriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return setgettingMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return removeMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return updateCurrentPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return updatePerformerFavourite; });
/* harmony import */ var src_lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vo7w");

const {
  getPerformerCategories,
  getPerformerCategoriesSuccess,
  getPerformerCategoriesFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getPerformerCategories', 'GET_PERFORMER_CATEGORIES');
const {
  searchPerformer,
  searchPerformerSuccess,
  searchPerformerFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('searchPerformer', 'SEARCH_PERFORMER');
const setPerformerSearching = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_PERFORMER_SEARCHING');
const {
  updatePerformerProfile,
  updatePerformerProfileSuccess,
  updatePerformerProfileFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('updatePerformerProfile', 'UPDATE_PERFORMER_PROFILE');
const setupdatingPerformerProfile = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updatingPerformerProfile');
const updatePaymentInfo = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_PAYMENT_INFO');
const updateDirectDeposit = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_DIRECT_DEPOSIT');
const updatePaxum = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_PAXUM');
const updateBitpay = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_BITPAY');
const updateStreamingStatus = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_STREAMING_STATUS');
const updateDefaultPrice = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_DEFAULT_PRICE');
const {
  getPerformerDetails,
  getPerformerDetailsSuccess,
  getPerformerDetailsFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getPerformerDetails', 'GET_PERFORMER_DETAILS');
const setGettingPerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setGettingPerformerDetails');
const setPerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_PERFORMER_DETAILS');
const updatePerformerAsset = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_PERFORMER_ASSET');
const setFavoritePerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_FAVORITE_PERFORMER_DETAILS');
const {
  getMyProducts,
  getMyProductsSuccess,
  getMyProductsFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getMyProducts', 'GET_MY_PRODUCT');
const setGettingMyProducts = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setGettingMyProducts');
const addMyProduct = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('addMyProduct');
const removeMyProduct = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('removeMyProduct');
const {
  getEarning,
  getEarningSuccess,
  getEarningFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getEarning', 'GET_EARNING');
const setGettingEarning = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_GETTING_EARNIG');
const {
  getPayoutRequest,
  getPayoutRequestSuccess,
  getPayoutRequestFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getPayoutRequest', 'GET_PAYOUT_REQUEST');
const setGettingPayoutRequest = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_GETTING_PAYOUT_REQUEST');
const removePayoutRequest = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('REMOVE_PAYOUT_REQUEST');
const {
  getMyVideos,
  getMyVideosSuccess,
  getMyVideosFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getMyVideos', 'GET_MY_VIDEO');
const setgettingMyVideos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setgettingMyVideos');
const addMyVideos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('addMyVideos');
const removeMyVideo = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('removeMyVideo');
const {
  getMyPhotos,
  getMyPhotosSuccess,
  getMyPhotosFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getMyPhotos', 'GET_MY_PHOTO');
const setgettingMyPhotos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setgettingMyPhotos');
const addMyPhotos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('addMyPhotos');
const removeMyPhoto = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('removeMyPhoto');
const {
  getMyGalleries,
  getMyGalleriesSuccess,
  getMyGalleriesFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getMyGalleries', 'GET_MY_GALLERIES');
const setgettingMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setgettingMyGalleries');
const addMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('addMyGalleries');
const removeMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('removeMyGalleries');
const updateCurrentPerformer = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updateCurrentPerformer');
const updatePerformerFavourite = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_PERFORMER_FAVOURITE');

/***/ }),

/***/ "XTf7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TokenPackageService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tokenPackageService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class TokenPackageService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  search(params) {
    return this.get(this.buildUrl('/package/token/search', params));
  }

  buyTokens(id) {
    return this.post(`/payment/purchase-tokens/${id}`);
  }

}
const tokenPackageService = new TokenPackageService();

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

/***/ "YRv5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usernamePatternRule; });
const usernamePatternRule = {
  pattern: new RegExp('^[a-zA-Z0-9]*$'),
  message: 'Dont allow special chars or space'
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "caM8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return paymentInformationService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");


class PaymentInformationService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  create(data) {
    return this.post('/payment-information', data);
  }

  findOne(data) {
    return this.get(this.buildUrl('/payment-information', data));
  }

}

const paymentInformationService = new PaymentInformationService();

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "jZsp":
/***/ (function(module, exports) {



/***/ }),

/***/ "kpM1":
/***/ (function(module, exports) {



/***/ }),

/***/ "nXVM":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "psLn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ redux["f" /* createSelector */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ string["a" /* capitalizeFirstLetter */]; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ string["d" /* unitPrices */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ date["b" /* formatDate */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ date["a" /* converDuration */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ date["d" /* getAge */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ date["c" /* formatDuration */]; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ validateMessages; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ layout["c" /* formItemLayout */]; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ layout["d" /* tailFormItemLayout */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ layout["b" /* defaultColor */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ utils["h" /* getResponseError */]; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ utils["i" /* getSearchData */]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ utils["e" /* getBase64 */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ utils["j" /* isPhysicalProduct */]; });

// UNUSED EXPORTS: isHasInternetConnection, createSagas, createAction, createAsyncAction, createAsyncActions, createSelectorsA, handleActions, createReducers, createSelectors, createJSSelectors, isUrl, generateUuid, parseAge, backToTop, arrayToTree, pathMatchRegexp, queryAncestors, isMobile, getUrlParameter, DAY_OF_WEEK, getDefaultSchedule, getNextShow, convertConnectionData, checkUserLogin, getCurrentUser, chatBoxMessageClassName, formatDataWeight, formatDataHeight, formatPrice, usernamePatternRule, beforeAvatarUpload

// CONCATENATED MODULE: ./src/lib/internet.ts
const INTERNET_CHECK_URL = 'https://google.com';
const isHasInternetConnection = async () => {
  try {
    const res = await fetch(INTERNET_CHECK_URL, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0
      }
    });

    if (res.status === 404 || res.status === 401 || res.status === 403 || res.status === 500 || res.status >= 200 && res.status <= 300) {
      return true;
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }

  return false;
};
// EXTERNAL MODULE: ./src/lib/redux.ts
var redux = __webpack_require__("vo7w");

// EXTERNAL MODULE: ./src/lib/string.ts
var string = __webpack_require__("rP/q");

// EXTERNAL MODULE: ./src/lib/date.ts
var date = __webpack_require__("ADto");

// CONCATENATED MODULE: ./src/lib/message.ts
const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!'
  },
  number: {
    range: 'Must be between min and max'
  }
};
// EXTERNAL MODULE: ./src/lib/layout.ts
var layout = __webpack_require__("62On");

// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__("NsEo");

// EXTERNAL MODULE: ./src/lib/rules.ts
var rules = __webpack_require__("YRv5");

// EXTERNAL MODULE: ./src/lib/file.ts
var file = __webpack_require__("GMeC");

// CONCATENATED MODULE: ./src/lib/index.ts










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

/***/ "uBU0":
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