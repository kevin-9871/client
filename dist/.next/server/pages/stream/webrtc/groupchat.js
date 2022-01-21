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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

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

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lCOc");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

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

/***/ "AY7M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ socket_Socket; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ socket_Event; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ SocketContext; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// EXTERNAL MODULE: ./src/services/auth.service.ts
var auth_service = __webpack_require__("LLt/");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./src/socket/utils.ts
/* eslint-disable prefer-spread */

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
const warning = (...args) => {
  // debug on development and staging.
  if (true) return;
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error.apply(console, args);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(args.join(' '));
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

};
const debug = (...args) => {
  // debug on development and staging.
  if (true) return;
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.debug === 'function') {
    console.debug.apply(console, args);
  }
};
// CONCATENATED MODULE: ./src/socket/SocketContext.tsx

const SocketContext = /*#__PURE__*/external_react_default.a.createContext('socket');
// EXTERNAL MODULE: ./src/env.ts
var env = __webpack_require__("XwMy");

// CONCATENATED MODULE: ./src/socket/Socket.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Socket_Socket extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    this.connect();
  }

  componentDidUpdate(nextProps) {
    const {
      loggedIn
    } = this.props;

    if (nextProps.loggedIn !== loggedIn) {
      this.connect();
    }

    return true;
  }

  componentWillUnmount() {
    this.socket && this.socket.close();
  }

  connect() {
    const {
      loggedIn
    } = this.props;
    const token = loggedIn && auth_service["a" /* authService */].getToken();

    if (true) {
      return;
    }

    const {
      uri = env["a" /* default */].socketEndpoint
    } = this.props;
    const options = {
      transports: ['websocket', 'polling', 'long-polling'],
      query: token ? `token=${token}` : ''
    };
    this.socket && this.socket.close();
    this.socket = external_socket_io_client_default()(uri, this.mergeOptions(options));
    this.socket.status = 'initialized';
    this.socket.on('connect', () => {
      this.socket.status = 'connected';
      debug('connected');
    });
    this.socket.on('disconnect', () => {
      this.socket.status = 'disconnected';
      debug('disconnect');
    });
    this.socket.on('error', err => {
      this.socket.status = 'failed';
      warning('error', err);
    });
    this.socket.on('reconnect', data => {
      this.socket.status = 'connected';
      debug('reconnect', data);
    });
    this.socket.on('reconnect_attempt', () => {
      debug('reconnect_attempt');
    });
    this.socket.on('reconnecting', () => {
      this.socket.status = 'reconnecting';
      debug('reconnecting');
    });
    this.socket.on('reconnect_failed', error => {
      this.socket.status = 'failed';
      warning('reconnect_failed', error);
    });
  }

  mergeOptions(options = {}) {
    const defaultOptions = {
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1 * 1000,
      reconnectionDelayMax: 5 * 1000,
      autoConnect: true,
      transports: ['websocket', 'polling', 'long-polling'],
      rejectUnauthorized: true
    };
    return _objectSpread(_objectSpread({}, defaultOptions), options);
  }

  render() {
    const {
      children
    } = this.props;
    return __jsx(SocketContext.Provider, {
      value: this.socket
    }, external_react_default.a.Children.only(children));
  }

}

const mapStates = state => ({
  loggedIn: state.auth.loggedIn
});

/* harmony default export */ var socket_Socket = (Object(external_react_redux_["connect"])(mapStates)(Socket_Socket));
// CONCATENATED MODULE: ./src/socket/Event.tsx




class Event_Event extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      event,
      handler
    } = this.props;
    const socket = this.context;

    if (!socket) {
      warning('Socket IO connection has not been established.');
      return;
    }

    socket.on(event, handler);
  }

  componentWillUnmount() {
    const {
      event
    } = this.props;
    const socket = this.context;

    if (!socket) {
      warning('Socket IO connection has not been established.');
      return;
    }

    socket.off(event);
  }

  render() {
    return false;
  }

}

Event_Event.contextType = SocketContext;
/* harmony default export */ var socket_Event = (Event_Event);
// CONCATENATED MODULE: ./src/socket/index.ts




if (false) {}



/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "AzSJ":
/***/ (function(module, exports) {

module.exports = require("video.js");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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

/***/ "HQdG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withAntmedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fsrY");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XwMy");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MoJi");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable dot-notation */

/* eslint-disable camelcase */

 // import { connect } from 'react-redux';





function withAntmedia(Component) {
  class AntMediaComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(ctx) {
      const pageProps = Component.getInitialProps && (await Component.getInitialProps(ctx)); // Return props.

      return _objectSpread({}, pageProps);
    }

    constructor(props) {
      super(props);

      _defineProperty(this, "webRTCAdaptor", void 0);

      _defineProperty(this, "autoRepublishIntervalJob", void 0);

      _defineProperty(this, "onbeforeunload", () => {
        this.leaveSession();
      });

      const {
        sessionId
      } = this.props;
      this.state = {
        initialized: false,
        publish_started: false,
        isMicMuted: false,
        streamId: sessionId
      };
    }

    componentDidMount() {
      const {
        initImmediately
      } = this.props;
      initImmediately && this.initWebRTCAdaptor();
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeStart', this.onbeforeunload); // window.addEventListener('beforeunload', this.onbeforeunload);
    }

    componentWillUnmount() {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.off('routeChangeStart', this.onbeforeunload); // window.removeEventListener('beforeunload', this.onbeforeunload);
    }

    leaveSession() {
      const {
        streamId,
        initialized
      } = this.state;
      const {
        configs: {
          isPlayMode
        }
      } = this.props;

      if (this.autoRepublishIntervalJob) {
        window.clearInterval(this.autoRepublishIntervalJob);
      }

      if (this.webRTCAdaptor) {
        if (streamId) {
          this.webRTCAdaptor.stop(streamId);
          this.webRTCAdaptor.closePeerConnection(streamId);

          if (!isPlayMode) {
            this.webRTCAdaptor.closeStream(streamId);
          }
        }

        if (initialized) {
          this.webRTCAdaptor.closeWebSocket();
        }

        this.webRTCAdaptor = undefined;
      }

      this.setState({
        streamId: '',
        initialized: false,
        isMicMuted: false
      });
    }

    initWebRTCAdaptor(cb, cbError) {
      const {
        configs,
        settings,
        autoRepublishDisabled,
        callback
      } = this.props;
      const {
        isPlayMode
      } = configs;
      const {
        debug
      } = _env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"];
      const publisherURL = isPlayMode ? settings[src_constants__WEBPACK_IMPORTED_MODULE_2__[/* SETTING_KEYS */ "a"].SUBSCRIBER_URL] : settings[src_constants__WEBPACK_IMPORTED_MODULE_2__[/* SETTING_KEYS */ "a"].PUBLISHER_URL];

      if (!publisherURL) {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].error('Undefined WebsocketURL!');

        return;
      }

      if (!this.webRTCAdaptor && autoRepublishDisabled) return;
      const pc_config = {
        iceServers: [{
          urls: 'stun:stun.l.google.com:19302'
        }]
      };
      const sdpConstraints = {
        OfferToReceiveAudio: false,
        OfferToReceiveVideo: false
      };
      const mediaConstraints = {
        video: true,
        audio: true
      };
      const appName = configs.appName || settings.AntMediaAppname;
      const path = `${publisherURL}/${appName}/websocket`;
      let websocketURL = `ws://${path}`;

      if (window.location.protocol.startsWith('https')) {
        websocketURL = `wss://${path}`;
      }

      this.setState({
        cb,
        cbError
      });
      this.webRTCAdaptor = new window['WebRTCAdaptor'](_objectSpread(_objectSpread({
        websocket_url: websocketURL,
        mediaConstraints,
        debug,
        peerconnection_config: pc_config,
        sdp_constraints: sdpConstraints,
        bandwidth: _env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].maxVideoBitrateKbps,
        isPlayMode: false
      }, configs), {}, {
        callback: (info, obj) => {
          if (info === 'initialized') {
            this.setState({
              initialized: true
            });
          } else if (info === 'publish_started') {
            this.setState({
              publish_started: true,
              streamId: obj.streamId
            });

            if (!this.autoRepublishIntervalJob && !autoRepublishDisabled) {
              this.autoRepublishIntervalJob = setInterval(this.checkAndRepublishIfRequired.bind(this), 5000);
            }
          } else if (info === 'publish_finished') {
            this.setState({
              publish_started: false,
              streamId: ''
            }); // if (this.autoRepublishIntervalJob) {
            //   window.clearInterval(this.autoRepublishIntervalJob);
            // }
          } else if (info === _constants__WEBPACK_IMPORTED_MODULE_5__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].ICE_CONNECTION_STATE_CHANGED) {
            this.setState({
              iceConnectionState: obj.state
            });
          } else if (info === _constants__WEBPACK_IMPORTED_MODULE_5__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].REFRESH_CONNECTION) {
            const {
              publish_started
            } = this.state;

            if (publish_started && !autoRepublishDisabled) {
              this.checkAndRepublishIfRequired();
            }
          } else if (info === _constants__WEBPACK_IMPORTED_MODULE_5__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].CLOSED) {
            // this.leaveSession();
            if (typeof obj !== 'undefined') {
              // eslint-disable-next-line no-console
              console.log(`Connecton closed: ${JSON.stringify(obj)}`);
            }
          }

          callback && typeof callback === 'function' && callback(info, obj); // props

          cb && typeof cb === 'function' && cb(info, obj); // param
        },
        callbackError: (error, message) => {
          cbError && typeof cbError === 'function' && cbError(error, message);
          this.callbackError(error, message, {
            websocketURL
          });
        }
      }));
    }

    checkAndRepublishIfRequired() {
      try {
        const {
          streamId,
          cb,
          cbError
        } = this.state;
        if (!this.webRTCAdaptor || !streamId) return;
        const iceState = this.webRTCAdaptor.iceConnectionState(streamId);

        if (iceState == null || iceState === 'failed' || iceState === 'disconnected') {
          // eslint-disable-next-line no-console
          console.error('Publish has stopped and will try to re-publish');
          this.webRTCAdaptor.stop(streamId);
          this.webRTCAdaptor.closePeerConnection(streamId);
          this.webRTCAdaptor.closeWebSocket();
          this.initWebRTCAdaptor(cb, cbError);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('error republish', e);
      }
    }

    callbackError(error, message, options) {
      // some of the possible errors, NotFoundError, SecurityError,PermissionDeniedError
      // eslint-disable-next-line no-console
      console.error(`error callback: ${JSON.stringify(error)}`);
      const {
        websocketURL
      } = options;

      if (typeof message === 'string') {
        // eslint-disable-next-line no-console
        console.error('error message:', message);

        antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(message, 3);

        return;
      }

      let errorMessage = JSON.stringify(error);

      if (errorMessage.indexOf('noStreamNameSpecified') !== -1) {
        // eslint-disable-next-line no-console
        console.warn(errorMessage);
        return;
      }

      if (errorMessage.indexOf('NotFoundError') !== -1) {
        errorMessage = 'Camera or Mic are not found or not allowed in your device';
      } else if (errorMessage.indexOf('NotReadableError') !== -1 || errorMessage.indexOf('TrackStartError') !== -1) {
        errorMessage = 'Camera or Mic is being used by some other process that does not let read the devices';
      } else if (errorMessage.indexOf('OverconstrainedError') !== -1 || errorMessage.indexOf('ConstraintNotSatisfiedError') !== -1) {
        errorMessage = 'There is no device found that fits your video and audio constraints. You may change video and audio constraints';
      } else if (errorMessage.indexOf('NotAllowedError') !== -1 || errorMessage.indexOf('PermissionDeniedError') !== -1) {
        errorMessage = 'You are not allowed to access camera and mic.';
      } else if (errorMessage.indexOf('TypeError') !== -1) {
        errorMessage = 'Video/Audio is required';
      } else if (errorMessage.indexOf('ScreenSharePermissionDenied') !== -1) {
        errorMessage = 'You are not allowed to access screen share';
      } else if (errorMessage.indexOf('WebSocketNotConnected') !== -1) {
        errorMessage = 'WebRTCAdaptor Connection is disconnected';
      } else if (errorMessage.indexOf('unauthorized_access') !== -1) {
        errorMessage = 'Access Denied. You don’t have permission to access';
      } else if (errorMessage.indexOf('streamIdInUse') !== -1) {
        errorMessage = 'Stream have been already published. Please close the previous connection.';
      } else if (errorMessage.indexOf('publishTimeoutError') !== -1) {
        errorMessage = 'WebRTC Publishing Timeout Error';
      } else if (errorMessage.indexOf('not_allowed_unregistered_streams') !== -1) {
        errorMessage = 'Stream with an unregistered id is not allowed';
      } else if (errorMessage.indexOf('UnsecureContext') !== -1) {
        errorMessage = 'Fatal Error: Browser cannot access camera and mic because of unsecure context. Please install SSL and access via https';
      } else if (errorMessage.indexOf('WebSocketNotSupported') !== -1) {
        errorMessage = 'Fatal Error: WebSocket not supported in this browser';
      } else if (errorMessage.indexOf('AudioAlreadyActive') !== -1) {
        errorMessage = 'AudioAlreadyActive';
      } else if (errorMessage.indexOf('isTrusted') !== -1) {
        errorMessage = `WebSocket connection to ${websocketURL} failed`;
        window.location.reload();
      } else {
        errorMessage = 'WebRTCAdaptor Connection Error';
      }

      errorMessage && antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(errorMessage, 3);
    }

    muteLocalMic() {
      if (this.webRTCAdaptor) {
        this.webRTCAdaptor.muteLocalMic();
        this.setState({
          isMicMuted: true
        });

        antd__WEBPACK_IMPORTED_MODULE_3__["message"].success('Muted local mic successfully');
      }
    }

    unmuteLocalMic() {
      if (this.webRTCAdaptor) {
        this.webRTCAdaptor.unmuteLocalMic();
        this.setState({
          isMicMuted: false
        });

        antd__WEBPACK_IMPORTED_MODULE_3__["message"].success('Unmuted local mic successfully');
      }
    }

    render() {
      const {
        forwardedRef
      } = this.props;
      return __jsx(Component, _extends({}, this.props, this.state, {
        webRTCAdaptor: this.webRTCAdaptor,
        initWebRTCAdaptor: this.initWebRTCAdaptor.bind(this),
        muteLocalMic: this.muteLocalMic.bind(this),
        unmuteLocalMic: this.unmuteLocalMic.bind(this),
        leaveSession: this.leaveSession.bind(this),
        ref: forwardedRef
      }));
    }

  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => __jsx(AntMediaComponent, _extends({}, props, {
    forwardedRef: ref
  }))); // const mapStateToProps = (state) => ({ settings: state.streaming.settings });
  // const MapComponent = connect(mapStateToProps)(AntMediaComponent);
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

/***/ "KSuR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ plugin_MicControlsPlugin; });

// EXTERNAL MODULE: external "video.js"
var external_video_js_ = __webpack_require__("AzSJ");
var external_video_js_default = /*#__PURE__*/__webpack_require__.n(external_video_js_);

// CONCATENATED MODULE: ./src/videojs/mic-controls/audio-mute-toggle-button.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Button = external_video_js_default.a.getComponent('Button');

class AudioMuteToggleButton extends Button {
  constructor(player, options) {
    super(player, options);

    _defineProperty(this, "initialized", false);

    _defineProperty(this, "isMicMuted", false);

    _defineProperty(this, "_options", void 0);

    this._options = options;

    if (typeof this._options.isMicMuted !== 'undefined') {
      this.isMicMuted = this._options.isMicMuted;
    }

    if (player.readyState()) {
      this.initialized = true;
      const text = this.isMicMuted ? 'Unmute Local Mic' : 'Mute Local Mic';
      this.controlText(text);
    }

    this.on(player, 'timeupdate', () => {
      if (this.initialized) {
        this.update();
      }
    });
  }

  update() {}

  buildCSSClass() {
    return `vjs-audio  ${super.buildCSSClass()}`;
  }

  handleClick() {
    const {
      muteLocalMic,
      unmuteLocalMic
    } = this._options;

    if (this.initialized) {
      const audio = document.querySelector('.vjs-audio');
      audio.classList.toggle('vjs-audio-off');
      let controlText = '';

      if (this.isMicMuted) {
        unmuteLocalMic();
        controlText = 'Mute Local Mic';
      } else {
        muteLocalMic();
        controlText = 'Unmute Local Mic';
      }

      if (this.controlText() !== controlText) {
        this.controlText(controlText);
      }

      this.isMicMuted = !this.isMicMuted;
    }
  }

}

external_video_js_default.a.registerComponent('AudioMuteToggleButton', AudioMuteToggleButton);
/* harmony default export */ var audio_mute_toggle_button = (AudioMuteToggleButton);
// CONCATENATED MODULE: ./src/videojs/mic-controls/plugin.ts
function plugin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Plugin = external_video_js_default.a.getPlugin('plugin');
class plugin_MicControlsPlugin extends Plugin {
  constructor(player, options) {
    super(player, options);

    plugin_defineProperty(this, "muteTogglesButton", void 0);

    this.muteTogglesButton = new audio_mute_toggle_button(this.player, options);
    this.player.controlBar.addChild(this.muteTogglesButton, {
      componentClass: 'muteToggleButton'
    });
  }

  dispose() {
    super.dispose();
  }

}

/***/ }),

/***/ "L/eJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/stream-chat/Messenger.less
var Messenger = __webpack_require__("OVUx");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/stream-chat/actions.ts
var actions = __webpack_require__("gxiY");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/stream-chat/MessageList.less
var stream_chat_MessageList = __webpack_require__("UTbA");

// EXTERNAL MODULE: ./src/socket/index.ts + 4 modules
var src_socket = __webpack_require__("AY7M");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");

// EXTERNAL MODULE: ./src/components/stream-chat/Compose.less
var stream_chat_Compose = __webpack_require__("qMfs");

// CONCATENATED MODULE: ./src/components/stream-chat/emotions.tsx
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let Picker;

if (false) {}

class emotions_Emotions extends external_react_["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "uploadRef", void 0);

    this.uploadRef = /*#__PURE__*/external_react_default.a.createRef();
  }

  onEmojiClick(event, emoji) {
    const {
      onEmojiClick
    } = this.props;
    onEmojiClick(emoji);
  }

  render() {
    return __jsx(external_react_default.a.Fragment, null, __jsx(Picker, {
      onEmojiClick: this.onEmojiClick.bind(this),
      disableAutoFocus: true,
      disableSearchBar: true,
      disableSkinTonePicker: true
    }));
  }

}
// CONCATENATED MODULE: ./src/components/stream-chat/Compose.tsx
var Compose_jsx = external_react_default.a.createElement;

function Compose_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-return-assign */








class Compose_Compose extends external_react_["PureComponent"] {
  constructor(props) {
    super(props);

    Compose_defineProperty(this, "uploadRef", void 0);

    Compose_defineProperty(this, "_input", void 0);

    Compose_defineProperty(this, "state", {
      text: ''
    });

    Compose_defineProperty(this, "onKeyDown", evt => {
      if (evt.keyCode === 13) {
        this.send();
      }
    });

    Compose_defineProperty(this, "onChange", evt => {
      this.setText(evt.target.value);
    });

    Compose_defineProperty(this, "onEmojiClick", emojiObject => {
      const {
        text
      } = this.state;
      this.setText(text + emojiObject.emoji);
    });

    this.uploadRef = /*#__PURE__*/external_react_default.a.createRef();
  }

  componentDidMount() {
    if (!this.uploadRef) this.uploadRef = /*#__PURE__*/external_react_default.a.createRef();
    if (!this._input) this._input = /*#__PURE__*/external_react_default.a.createRef();
  }

  componentDidUpdate(previousProps) {
    const {
      sendMessage
    } = this.props;

    if (sendMessage.success !== previousProps.sendMessage.success) {
      this.setText('');
      this._input && this._input.focus();
    }
  }

  setText(text) {
    this.setState({
      text
    });
  }

  send() {
    const {
      text
    } = this.state;
    const {
      loggedIn
    } = this.props;

    if (!loggedIn) {
      external_antd_["message"].error('Please login');
      return;
    }

    if (!text) {
      return;
    }

    const {
      conversation,
      isPublic,
      sendStreamMessage: dispatchSendStreamMessage
    } = this.props;
    const {
      _id,
      type
    } = conversation;
    dispatchSendStreamMessage({
      conversationId: _id,
      data: {
        text
      },
      type,
      isPublic
    });
  }

  render() {
    const {
      loggedIn
    } = this.props;
    const {
      text
    } = this.state;
    const {
      sendMessage,
      conversation
    } = this.props;
    if (!this.uploadRef) this.uploadRef = /*#__PURE__*/external_react_default.a.createRef();
    if (!this._input) this._input = /*#__PURE__*/external_react_default.a.createRef();
    return Compose_jsx("div", {
      className: "compose",
      hidden: !loggedIn || !conversation._id
    }, Compose_jsx(external_antd_["Input"], {
      value: text,
      className: "compose-input",
      placeholder: "Enter message here.",
      onKeyDown: this.onKeyDown,
      onChange: this.onChange,
      disabled: sendMessage.sending,
      autoFocus: true,
      ref: c => this._input = c
    }), Compose_jsx("div", {
      className: "grp-icons"
    }, Compose_jsx(icons_["SendOutlined"], {
      onClick: this.send.bind(this),
      style: {
        fontSize: '25px',
        marginRight: '10px',
        color: '#fe26b3'
      }
    }), Compose_jsx("div", {
      className: "grp-emotions"
    }, Compose_jsx("img", {
      src: "/emotion-ico.png",
      width: "25px",
      alt: ""
    }), Compose_jsx(emotions_Emotions, {
      onEmojiClick: this.onEmojiClick.bind(this)
    }))));
  }

}

const mapStates = state => ({
  loggedIn: state.auth.loggedIn,
  sendMessage: state.streamMessage.sendMessage
});

const mapDispatch = {
  sendStreamMessage: actions["m" /* sendStreamMessage */]
};
/* harmony default export */ var components_stream_chat_Compose = (Object(external_react_redux_["connect"])(mapStates, mapDispatch)(Compose_Compose));
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__("NsEo");

// EXTERNAL MODULE: ./src/components/stream-chat/Message.less
var Message = __webpack_require__("iZf9");

// CONCATENATED MODULE: ./src/components/stream-chat/Message.tsx
var Message_jsx = external_react_default.a.createElement;






function Message_Message(dataProps) {
  const {
    data,
    // isMine,
    // startsSequence,
    // endsSequence,
    showTimestamp,
    isOwner,
    canDelete,
    onDelete // data: { type }

  } = dataProps;
  const friendlyTimestamp = external_moment_default()(data.timestamp).format('LLLL'); // const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const menu = Message_jsx(external_antd_["Menu"], null, Message_jsx(external_antd_["Menu"].Item, {
    onClick: onDelete
  }, Message_jsx("a", null, "delete")));

  return Message_jsx("div", {
    className: Object(utils["a" /* chatBoxMessageClassName */])(dataProps) // className={[
    //   'message',
    //   `${isMine && data.type !== 'tip' ? 'mine' : ''}`,
    //   `${data.type === 'tip' ? 'tip' : ''}`,
    //   `${startsSequence ? 'start' : ''}`,
    //   `${endsSequence ? 'end' : ''}`
    // ].join(' ')}

  }, data.text && !data.isSystem && Message_jsx("div", {
    className: "bubble-container"
  }, Message_jsx("div", {
    className: "bubble",
    title: friendlyTimestamp
  }, canDelete && Message_jsx(external_antd_["Dropdown"], {
    overlay: menu,
    placement: "topRight"
  }, Message_jsx("span", null, Message_jsx(icons_["InfoCircleOutlined"], null), ' ')), data.senderInfo && Message_jsx("span", {
    className: "u-name"
  }, isOwner && Message_jsx(icons_["CrownTwoTone"], {
    twoToneColor: "#eb2f96"
  }), data.senderInfo.username, data.type !== 'tip' ? ': ' : ' '), !data.imageUrl && data.text, ' ', data.imageUrl && Message_jsx("a", {
    title: "Click to view full content",
    href: data.imageUrl.indexOf('http') === -1 ? '#' : data.imageUrl,
    target: "_blank",
    rel: "noreferrer"
  }, Message_jsx("img", {
    src: data.imageUrl,
    width: "180px",
    alt: ""
  })))), data.text && data.isSystem && Message_jsx("p", {
    style: {
      textAlign: 'center',
      fontSize: '14px'
    }
  }, data.text), showTimestamp && !data.isSystem && Message_jsx("div", {
    className: "timestamp"
  }, friendlyTimestamp));
}
// CONCATENATED MODULE: ./src/components/stream-chat/MessageList.tsx
var MessageList_jsx = external_react_default.a.createElement;

function MessageList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-nested-ternary */











class MessageList_MessageList extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    MessageList_defineProperty(this, "messagesRef", void 0);

    MessageList_defineProperty(this, "state", {
      page: 1,
      onloadmore: false
    });

    MessageList_defineProperty(this, "onbeforeunload", () => {
      const {
        conversation,
        resetStreamMessage: dispatchResetStreamMessage
      } = this.props;

      if (conversation && conversation._id) {
        dispatchResetStreamMessage();
      }
    });

    MessageList_defineProperty(this, "onMessage", (message, type) => {
      const {
        receiveStreamMessageSuccess: dispatchReceiveStreamMessageSuccess,
        deleteMessageSuccess: dispatchDeleteMessageSuccess
      } = this.props;

      if (!message) {
        return;
      }

      type === 'created' && dispatchReceiveStreamMessageSuccess(message);
      type === 'deleted' && dispatchDeleteMessageSuccess(message);
    });

    MessageList_defineProperty(this, "onDelete", messageId => {
      const {
        deleteMessage: dispatchDeleteMessage
      } = this.props;
      if (!messageId) return;
      dispatchDeleteMessage({
        messageId
      });
    });

    MessageList_defineProperty(this, "renderMessages", () => {
      const {
        message,
        currentUser,
        currentPerformer,
        conversation,
        loggedIn
      } = this.props;
      const messages = message.items;
      const {
        fetching
      } = message;
      let i = 0;
      const messageCount = messages && messages.length;

      if (!messages.length && !fetching) {
        const text = loggedIn ? 'There are no chat!' : MessageList_jsx(external_react_default.a.Fragment, null, "There are no chat, please", MessageList_jsx(link_default.a, {
          href: "/auth/register"
        }, MessageList_jsx("a", null, " register ")), "or", MessageList_jsx(link_default.a, {
          href: "/auth/login"
        }, MessageList_jsx("a", null, " login ")), "to send message!");
        return MessageList_jsx(Message_Message, {
          data: {
            isSystem: true,
            text
          }
        });
      }

      const tempMessages = [];

      while (i < messageCount) {
        const previous = messages[i - 1];
        const current = messages[i];
        const next = messages[i + 1];
        const userId = currentUser && currentUser._id ? currentUser._id : currentPerformer && currentPerformer._id ? currentPerformer._id : null;
        const isMine = current.senderId === userId;
        const currentMoment = external_moment_default()(current.createdAt);
        let prevBySameAuthor = false;
        let nextBySameAuthor = false;
        let startsSequence = true;
        let endsSequence = true;
        let showTimestamp = true;
        const isOwner = conversation && conversation.performerId === current.senderId;
        const canDelete = !current.isDeleted && currentPerformer && currentPerformer._id === conversation.performerId || !current.isDeleted && currentUser._id === current.senderId || !current.isDeleted && currentUser.roles && currentUser.roles.includes('admin');

        if (previous) {
          const previousMoment = external_moment_default()(previous.createdAt);
          const previousDuration = external_moment_default.a.duration(currentMoment.diff(previousMoment));
          prevBySameAuthor = previous.senderId === current.senderId;

          if (prevBySameAuthor && previousDuration.as('hours') < 1) {
            startsSequence = false;
          }

          if (previousDuration.as('hours') < 1) {
            showTimestamp = false;
          }
        }

        if (next) {
          const nextMoment = external_moment_default()(next.createdAt);
          const nextDuration = external_moment_default.a.duration(nextMoment.diff(currentMoment));
          nextBySameAuthor = next.senderId === current.senderId;

          if (nextBySameAuthor && nextDuration.as('hours') < 1) {
            endsSequence = false;
          }
        }

        if (current._id) {
          tempMessages.push(MessageList_jsx(Message_Message, {
            onDelete: this.onDelete.bind(this, current._id),
            canDelete: canDelete,
            isOwner: isOwner,
            key: i,
            isMine: isMine,
            startsSequence: startsSequence,
            endsSequence: endsSequence,
            showTimestamp: showTimestamp,
            data: current
          }));
        } // Proceed to the next message.


        i += 1;
      }

      this.scrollToBottom();
      return tempMessages;
    });

    MessageList_defineProperty(this, "rejoin", () => {
      const {
        conversation
      } = this.props;

      if (conversation && conversation._id) {
        const socket = this.context;
        conversation.type === 'stream_public' && socket.emit('public-stream/rejoin', {
          conversationId: conversation._id
        });
        (conversation.type === 'stream_group' || conversation.type === 'stream_private') && socket.emit('REJOIN_ROOM', {
          conversationId: conversation._id
        });
      }
    });
  }

  async componentDidMount() {
    if (!this.messagesRef) this.messagesRef = /*#__PURE__*/Object(external_react_["createRef"])();
    const {
      conversation
    } = this.props;
    const socket = this.context;

    if (conversation && conversation._id) {
      socket && socket.on && socket.on(`message_created_conversation_${conversation._id}`, data => {
        this.onMessage(data, 'created');
      });
      socket && socket.on && socket.on(`message_deleted_conversation_${conversation._id}`, data => {
        this.onMessage(data, 'deleted');
      });
    }

    router_default.a.events.on('routeChangeStart', this.onbeforeunload);
    window.addEventListener('beforeunload', this.onbeforeunload);
    this.reconnect();
  }

  componentWillUnmount() {
    const {
      conversation
    } = this.props;
    const socket = this.context;
    socket && socket.off(`message_created_conversation_${conversation._id}`);
    socket && socket.off(`message_deleted_conversation_${conversation._id}`);
    socket && socket.off('reconnect', this.rejoin);
    router_default.a.events.on('routeChangeStart', this.onbeforeunload);
    window.addEventListener('beforeunload', this.onbeforeunload);
  }

  async handleScroll(conversation, event) {
    const {
      message,
      isPublic,
      loadMoreStreamMessages: dispatchLoadMoreStreamMessages
    } = this.props;
    const {
      page
    } = this.state;
    const {
      fetching,
      items,
      total
    } = message;
    const canloadmore = total > items.length;
    const ele = event.target;
    if (!canloadmore) return;

    if (ele.scrollTop === 0 && conversation._id && !fetching && canloadmore) {
      await this.setState({
        page: page + 1,
        onloadmore: true
      });
      dispatchLoadMoreStreamMessages({
        conversationId: conversation._id,
        type: conversation.type,
        limit: 25,
        offset: page * 25,
        isPublic
      });
    }
  }

  scrollToBottom() {
    const {
      onloadmore
    } = this.state;

    if (onloadmore) {
      return;
    }

    if (this.messagesRef && this.messagesRef.current) {
      const ele = this.messagesRef.current;
      window.setTimeout(() => {
        ele.scroll({
          top: ele.scrollHeight,
          behavior: 'smooth'
        });
      }, 200);
    }
  }

  reconnect() {
    const socket = this.context;

    if (socket) {
      socket.on('reconnect', this.rejoin);
    }
  }

  render() {
    const {
      conversation,
      isPublic,
      message
    } = this.props;
    const {
      fetching
    } = message;
    if (!this.messagesRef) this.messagesRef = /*#__PURE__*/Object(external_react_["createRef"])();
    return MessageList_jsx("div", {
      className: "message-list",
      onScroll: this.handleScroll.bind(this, conversation)
    }, conversation && conversation._id && MessageList_jsx(external_react_default.a.Fragment, null, MessageList_jsx("div", {
      className: "message-list-container",
      ref: this.messagesRef
    }, fetching && MessageList_jsx("p", {
      className: "text-center"
    }, "fetching..."), this.renderMessages()), MessageList_jsx(components_stream_chat_Compose, {
      conversation: conversation,
      isPublic: isPublic
    })));
  }

}

MessageList_MessageList.contextType = src_socket["c" /* SocketContext */];

const MessageList_mapStates = state => {
  const {
    conversationMap,
    activeConversation
  } = state.streamMessage;
  const messages = activeConversation.data && conversationMap[activeConversation.data._id] ? conversationMap[activeConversation.data._id].items || [] : [];
  const totalMessages = activeConversation.data && conversationMap[activeConversation.data._id] ? conversationMap[activeConversation.data._id].total || 0 : 0;
  const fetching = activeConversation.data && conversationMap[activeConversation.data._id] ? conversationMap[activeConversation.data._id].fetching || false : false;
  return {
    message: {
      items: messages,
      total: totalMessages,
      fetching
    },
    conversation: activeConversation.data,
    currentUser: state.user.current,
    currentPerformer: state.performer.current,
    loggedIn: state.auth.loggedIn
  };
};

const MessageList_mapDispatch = {
  loadMoreStreamMessages: actions["f" /* loadMoreStreamMessages */],
  receiveStreamMessageSuccess: actions["j" /* receiveStreamMessageSuccess */],
  deleteMessage: actions["a" /* deleteMessage */],
  deleteMessageSuccess: actions["b" /* deleteMessageSuccess */],
  resetStreamMessage: actions["l" /* resetStreamMessage */]
};
/* harmony default export */ var components_stream_chat_MessageList = (Object(external_react_redux_["connect"])(MessageList_mapStates, MessageList_mapDispatch)(MessageList_MessageList));
// CONCATENATED MODULE: ./src/components/stream-chat/Messenger.tsx

var Messenger_jsx = external_react_default.a.createElement;







class Messenger_StreamMessenger extends external_react_["PureComponent"] {
  componentDidMount() {
    const {
      streamId,
      activeConversation,
      getStreamConversation: dispatchGetStreamConversation
    } = this.props;

    if (!activeConversation && streamId) {
      dispatchGetStreamConversation({
        conversation: activeConversation.data,
        isPublic: true
      });
    }
  }

  render() {
    const {
      activeConversation,
      isPublic,
      loggedIn
    } = this.props;
    return Messenger_jsx("div", {
      className: external_classnames_default()('message-stream', loggedIn ? 'user-logged-in' : '')
    }, activeConversation && activeConversation.data && activeConversation.data.streamId ? Messenger_jsx(components_stream_chat_MessageList, {
      isPublic: isPublic
    }) : Messenger_jsx("p", null, "No conversation found."));
  }

}

const Messenger_mapStates = state => ({
  activeConversation: state.streamMessage.activeConversation,
  loggedIn: state.auth.loggedIn
});

const mapDispatchs = {
  getStreamConversation: actions["d" /* getStreamConversation */]
};
/* harmony default export */ var stream_chat_Messenger = (Object(external_react_redux_["connect"])(Messenger_mapStates, mapDispatchs)(Messenger_StreamMessenger));
// EXTERNAL MODULE: ./src/services/perfomer.service.ts
var perfomer_service = __webpack_require__("EC5a");

// CONCATENATED MODULE: ./src/components/stream-chat/UserList.tsx
var UserList_jsx = external_react_["createElement"];







const StreamingChatUsers = ({
  loggedIn,
  members,
  currentPerformer,
  placeholderAvatarUrl
}) => {
  const blockUser = external_react_["useCallback"](async ({
    key
  }) => {
    if (!window.confirm('Are you sure to block this user?')) return;

    try {
      await perfomer_service["b" /* performerService */].geoBlock({
        userIds: [key]
      });
    } catch (e) {
      const error = await Promise.resolve(e);
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(error));
    }
  }, [members]);
  return UserList_jsx("div", {
    className: "conversation-users"
  }, UserList_jsx("div", {
    className: "users"
  }, members.length > 0 && members.map(m => UserList_jsx("div", {
    className: "user",
    key: m._id
  }, loggedIn && currentPerformer && currentPerformer._id ? UserList_jsx(external_antd_["Dropdown"], {
    overlay: UserList_jsx(external_antd_["Menu"], null, UserList_jsx(external_antd_["Menu"].Item, {
      onClick: blockUser,
      key: m._id
    }, UserList_jsx("span", null, UserList_jsx(icons_["StopOutlined"], {
      size: 16
    }), ' ', "Block this user"))),
    placement: "bottomLeft",
    trigger: ['hover', 'click']
  }, UserList_jsx("span", {
    className: "username"
  }, UserList_jsx("img", {
    alt: "avatar",
    src: (m === null || m === void 0 ? void 0 : m.avatar) || placeholderAvatarUrl,
    width: "35px",
    style: {
      borderRadius: '50%',
      marginRight: '5px'
    }
  }), m.username, ' ', UserList_jsx(icons_["DownOutlined"], null))) : UserList_jsx("span", {
    className: "username"
  }, UserList_jsx("img", {
    alt: "avatar",
    src: (m === null || m === void 0 ? void 0 : m.avatar) || '/default-user-icon.png',
    width: "35px",
    style: {
      borderRadius: '50%',
      marginRight: '5px'
    }
  }), m.username)))));
};

const UserList_mapStates = state => ({
  placeholderAvatarUrl: state.ui.placeholderAvatarUrl
});

/* harmony default export */ var UserList = (Object(external_react_redux_["connect"])(UserList_mapStates)(StreamingChatUsers));
// EXTERNAL MODULE: ./src/components/stream-chat/chat-box.less
var chat_box = __webpack_require__("VUsV");

// CONCATENATED MODULE: ./src/components/stream-chat/chat-box.tsx
var chat_box_jsx = external_react_default.a.createElement;






const ChatBox = ({
  isPublic,
  activeConversation,
  totalParticipant,
  currentPerformer,
  loggedIn,
  members
}) => chat_box_jsx("div", {
  className: "conversation-stream"
}, chat_box_jsx(external_antd_["Tabs"], {
  defaultActiveKey: "chat_content"
}, chat_box_jsx(external_antd_["Tabs"].TabPane, {
  tab: "CHAT",
  key: "chat_content"
}, activeConversation && activeConversation.data && activeConversation.data.streamId && chat_box_jsx(stream_chat_Messenger, {
  isPublic: isPublic,
  streamId: activeConversation.data.streamId
})), chat_box_jsx(external_antd_["Tabs"].TabPane, {
  tab: `USER (${totalParticipant || 0})`,
  key: "chat_user"
}, chat_box_jsx(UserList, {
  currentPerformer: currentPerformer,
  loggedIn: loggedIn,
  members: members
}))));

ChatBox.defaultProps = {
  isPublic: false,
  totalParticipant: 0,
  activeConversation: null,
  currentPerformer: null,
  loggedIn: false,
  members: []
};
/* harmony default export */ var stream_chat_chat_box = __webpack_exports__["a"] = (ChatBox);

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

/***/ "LZqe":
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "MoJi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WEBRTC_ADAPTOR_INFORMATIONS; });
// https://github.com/ant-media/Ant-Media-Server/wiki/WebRTC-WebSocket-Messaging-Reference
// eslint-disable-next-line no-shadow
let WEBRTC_ADAPTOR_INFORMATIONS;

(function (WEBRTC_ADAPTOR_INFORMATIONS) {
  WEBRTC_ADAPTOR_INFORMATIONS["INITIALIZED"] = "initialized";
  WEBRTC_ADAPTOR_INFORMATIONS["AVAILABLE_DEVICES"] = "available_devices";
  WEBRTC_ADAPTOR_INFORMATIONS["PUBLISH_STARTED"] = "publish_started";
  WEBRTC_ADAPTOR_INFORMATIONS["PUBLISH_FINISHED"] = "publish_finished";
  WEBRTC_ADAPTOR_INFORMATIONS["SCREEN_SHARE_EXTENSION_AVAILABLE"] = "screen_share_extension_available";
  WEBRTC_ADAPTOR_INFORMATIONS["SCREEN_SHARE_STOPPED"] = "screen_share_stopped";
  WEBRTC_ADAPTOR_INFORMATIONS["CLOSED"] = "closed";
  WEBRTC_ADAPTOR_INFORMATIONS["PONG"] = "pong";
  WEBRTC_ADAPTOR_INFORMATIONS["REFRESH_CONNECTION"] = "refreshConnection";
  WEBRTC_ADAPTOR_INFORMATIONS["ICE_CONNECTION_STATE_CHANGED"] = "ice_connection_state_changed";
  WEBRTC_ADAPTOR_INFORMATIONS["UPDATED_STATS"] = "updated_stats";
  WEBRTC_ADAPTOR_INFORMATIONS["PLAY_FINISHED"] = "play_finished";
  WEBRTC_ADAPTOR_INFORMATIONS["PLAY_STARTED"] = "play_started";
  WEBRTC_ADAPTOR_INFORMATIONS["JOINED_THE_ROOM"] = "joinedTheRoom";
  WEBRTC_ADAPTOR_INFORMATIONS["STREAM_JOINED"] = "streamJoined";
  WEBRTC_ADAPTOR_INFORMATIONS["NEW_STREAM_AVAILABLE"] = "newStreamAvailable";
  WEBRTC_ADAPTOR_INFORMATIONS["STREAM_LEAVED"] = "streamLeaved";
  WEBRTC_ADAPTOR_INFORMATIONS["LEAVED_FROM_ROOM"] = "leavedFromRoom";
  WEBRTC_ADAPTOR_INFORMATIONS["STREAM_INFORMATION"] = "streamInformation";
})(WEBRTC_ADAPTOR_INFORMATIONS || (WEBRTC_ADAPTOR_INFORMATIONS = {}));

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

/***/ "OVUx":
/***/ (function(module, exports) {



/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "UTbA":
/***/ (function(module, exports) {



/***/ }),

/***/ "VUsV":
/***/ (function(module, exports) {



/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


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

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "avRv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CLrh");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_antmedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HQdG");
/* harmony import */ var src_antmedia_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MoJi");
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("AY7M");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("AzSJ");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_videojs_mic_controls_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("KSuR");
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable dot-notation */

/* eslint-disable camelcase */










class Publisher extends react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "publisher", void 0);

    _defineProperty(this, "onbeforeunload", () => {
      const {
        publish_started,
        webRTCAdaptor
      } = this.props;
      const {
        conversationId,
        streamId
      } = this.state;

      if (streamId && publish_started) {
        webRTCAdaptor && webRTCAdaptor.leaveFromRoom(conversationId);
        this.socket.emit('private-stream/leave', {
          conversationId,
          streamId
        });
      }

      if (this.publisher) {
        this.publisher.dispose();
        this.publisher = undefined;
      }

      this.setState({
        conversationId: null,
        streamId: null
      });
    });

    this.state = {
      conversationId: null,
      streamId: null
    };
  }

  componentDidMount() {
    const {
      id,
      containerClassName
    } = this.props;
    video_js__WEBPACK_IMPORTED_MODULE_7___default.a.registerPlugin('webRTCMicControlsPlugin', src_videojs_mic_controls_plugin__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);
    this.socket = this.context;
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeStart', this.onbeforeunload);
    window.addEventListener('beforeunload', this.onbeforeunload);
    const video = document.getElementById(id);
    const container = document.getElementsByClassName(containerClassName)[0];
    video.width = container.clientWidth / 4;
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.off('routeChangeStart', this.onbeforeunload);
  }

  async handelWebRTCAdaptorCallback(info, obj) {
    const {
      webRTCAdaptor,
      settings,
      id,
      muteLocalMic,
      unmuteLocalMic
    } = this.props;
    const {
      conversationId,
      streamId
    } = this.state;

    if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_5__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].INITIALIZED) {
      webRTCAdaptor.joinRoom(conversationId, streamId);
    } else if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_5__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].JOINED_THE_ROOM) {
      const token = await src_services__WEBPACK_IMPORTED_MODULE_0__[/* streamService */ "r"].getPublishToken({
        streamId,
        settings
      });
      webRTCAdaptor.publish(streamId, token);
    } else if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_5__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].PUBLISH_STARTED) {
      const player = video_js__WEBPACK_IMPORTED_MODULE_7___default()(id, {
        liveui: true,
        controls: true,
        muted: true,
        controlBar: {
          playToggle: false,
          currentTimeDisplay: false,
          fullscreenToggle: false,
          pictureInPictureToggle: false,
          volumePanel: false
        }
      });
      player.error(null);
      player.one('play', () => {
        this.publisher = player; // eslint-disable-next-line dot-notation

        this.publisher['webRTCMicControlsPlugin']({
          muteLocalMic,
          unmuteLocalMic,
          isMicMuted: false
        });
      });
      this.socket.emit('private-stream/join', {
        conversationId,
        streamId: obj.streamId
      });
    } else if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_5__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].PUBLISH_FINISHED) {
      this.socket.emit('private-stream/leave', {
        conversationId,
        streamId: obj.streamId
      });
    }
  }

  start(conversationId) {
    this.setState({
      conversationId
    });
  }

  publish(streamId) {
    const {
      initWebRTCAdaptor
    } = this.props;
    this.setState({
      streamId
    });
    initWebRTCAdaptor(this.handelWebRTCAdaptorCallback.bind(this));
  }

  stop() {
    const {
      leaveSession
    } = this.props;
    leaveSession();
  }

  render() {
    const {
      publish_started,
      id,
      classNames
    } = this.props;
    return __jsx("video", {
      id: id,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('video-js', classNames),
      hidden: !publish_started,
      autoPlay: true,
      playsInline: true,
      muted: true
    });
  }

}

Publisher.contextType = src_socket__WEBPACK_IMPORTED_MODULE_6__[/* SocketContext */ "c"];
/* harmony default export */ __webpack_exports__["a"] = (Object(src_antmedia__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Publisher));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

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

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "fsrY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SETTING_CHANNEL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SETTING_KEYS; });
/* unused harmony export MENU_SECTION */
const SETTING_CHANNEL = 'SETTINGS';
const SETTING_KEYS = {
  SITE_NAME: 'siteName',
  LOGO_URL: 'logoUrl',
  BANNER_URL: 'bannerUrl',
  PLACEHOLDER_LOGIN_URL: 'placeholderLoginUrl',
  PLACEHOLDER_AVATAR_URL: 'placeholderAvatarUrl',
  FAVICON: 'favicon',
  META_KEYWORDS: 'metaKeywords',
  META_DESCRIPTION: 'metaDescription',
  HEADER_SCRIPT: 'headerScript',
  AFTER_BODY_SCRIPT: 'afterBodyScript',
  CURRENCY: 'currency',
  GOOGLE_ANALYTICS_CODE: 'gaCode',
  MAINTENANCE_MODE: 'maintenanceMode',
  TIP_SOUND: 'tipSound',
  DEFAULT_OFFLINE_MODEL_IMAGE: 'defaultOfflineModelImage',
  DEFAULT_MODEL_PRIVATECALL_WITH_USER_IMAGE: 'defaultPrivateCallImage',
  DEFAULT_MODEL_IN_GROUP_CHAT_IMAGE: 'defaultGroupChatImage',
  VIEWER_URL: 'viewerURL',
  PUBLISHER_URL: 'publisherURL',
  SUBSCRIBER_URL: 'subscriberUrl',
  OPTION_FOR_BROADCAST: 'optionForBroadcast',
  OPTION_FOR_PRIVATE: 'optionForPrivate',
  OPTION_FOR_GROUP: 'optionForGroup',
  SECURE_OPTION: 'secureOption',
  ANT_MEDIA_APPNAME: 'AntMediaAppname'
};
const MENU_SECTION = {
  MAIN: 'main',
  HEADER: 'header',
  FOOTER: 'footer'
};

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gxiY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStreamConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getStreamConversationSuccess; });
/* unused harmony export getStreamConversationFail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return sendStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return sendStreamMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return sendStreamMessageFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return receiveStreamMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return loadStreamMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return loadStreamMessagesSuccess; });
/* unused harmony export loadStreamMessagesFail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loadMoreStreamMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return loadMoreStreamMessagesSuccess; });
/* unused harmony export loadMoreStreamMessagesFail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchingStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return resetStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return resetAllStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteMessageSuccess; });
/* unused harmony export deleteMessageFail */
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vo7w");

const {
  getStreamConversation,
  getStreamConversationSuccess,
  getStreamConversationFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getStreamConversation', 'GET_STREAM_CONVERSATION');
const {
  sendStreamMessage,
  sendStreamMessageSuccess,
  sendStreamMessageFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('sendStreamMessage', 'SEND_STREAM_MESSAGE');
const {
  receiveStreamMessageSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('receiveStreamMessageSuccess', 'RECEIVE_STREAM_MESSAGE_SUCCESS');
const {
  loadStreamMessages,
  loadStreamMessagesSuccess,
  loadStreamMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('loadStreamMessages', 'LOAD_STREAM_MESSAGES');
const {
  loadMoreStreamMessages,
  loadMoreStreamMessagesSuccess,
  loadMoreStreamMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('loadMoreStreamMessages', 'LOAD_MORE_STREAM_MESSAGES');
const fetchingStreamMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('fetchingStreamMessage');
const resetStreamMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('resetStreamMessage');
const resetAllStreamMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('resetAllStreamMessage');
const {
  deleteMessage,
  deleteMessageSuccess,
  deleteMessageFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('deleteMessage', 'DELETE_MESSAGE');

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iZf9":
/***/ (function(module, exports) {



/***/ }),

/***/ "lCOc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CLrh");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_stream_chat_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("gxiY");
/* harmony import */ var _redux_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("x7is");
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("AY7M");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_stream_chat_chat_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("L/eJ");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("NsEo");
/* harmony import */ var _components_streaming_webrtc_groupchat_publisher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("avRv");
/* harmony import */ var _components_streaming_webrtc_groupchat_subscriber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("nL36");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("LZqe");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_14__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // import './index.less';
// eslint-disable-next-line no-shadow

var EVENT;

(function (EVENT) {
  EVENT["JOINED_THE_ROOM"] = "JOINED_THE_ROOM";
  EVENT["JOIN_ROOM"] = "JOIN_ROOM";
  EVENT["LEAVE_ROOM"] = "LEAVE_ROOM";
  EVENT["STREAM_INFORMATION_CHANGED"] = "private-stream/streamInformationChanged";
  EVENT["MODEL_JOIN_ROOM"] = "MODEL_JOIN_ROOM";
  EVENT["SEND_PAID_TOKEN"] = "SEND_PAID_TOKEN";
})(EVENT || (EVENT = {}));

const STREAM_JOINED = 'private-stream/streamJoined';
const STREAM_LEAVED = 'private-stream/streamLeaved';
const JOINED_THE_ROOM = 'JOINED_THE_ROOM';

const ListItem = ({
  description,
  title
}) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  style: {
    width: '100%'
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  className: "light-text",
  sm: {
    span: 6
  },
  xs: {
    span: 12
  }
}, title), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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

class UserPrivateChat extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  static async getInitialProps({
    ctx
  }) {
    try {
      const {
        query
      } = ctx;

      if (false) {}

      const {
        token
      } = next_cookies__WEBPACK_IMPORTED_MODULE_9___default()(ctx);
      const headers = {
        Authorization: token
      };
      const resp = await src_services__WEBPACK_IMPORTED_MODULE_4__[/* performerService */ "k"].details(query.username, headers);
      const performer = resp.data;

      if (performer.isBlocked) {
        throw http_status_codes__WEBPACK_IMPORTED_MODULE_14__["StatusCodes"].FORBIDDEN;
      }

      return {
        performer
      };
    } catch (e) {
      // const err = await Promise.resolve(e);
      if (false) {}

      ctx.res.writeHead && ctx.res.writeHead(302, {
        Location: '/'
      });
      ctx.res.end && ctx.res.end();
      return {};
    }
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "localVideoId", 'group-publisher');

    _defineProperty(this, "remoteVideoContainerClassname", 'group-video-container');

    _defineProperty(this, "mainVideoRef", void 0);

    _defineProperty(this, "publisherRef", void 0);

    _defineProperty(this, "subscriberRef", void 0);

    _defineProperty(this, "streamId", void 0);

    _defineProperty(this, "streamList", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "onbeforeunload", () => {
      this.leaveSession();
    });

    this.state = {
      processing: false,
      roomJoined: false,
      total: 0,
      callTime: 0,
      paidToken: 0,
      members: []
    };
  }

  componentDidMount() {
    this.publisherRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.subscriberRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.mainVideoRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.socket = this.context;
    window.addEventListener('beforeunload', this.onbeforeunload);
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeStart', this.onbeforeunload);
  }

  componentDidUpdate(prevProps) {
    var _activeConversation$d;

    const {
      activeConversation
    } = this.props;

    if (activeConversation !== null && activeConversation !== void 0 && (_activeConversation$d = activeConversation.data) !== null && _activeConversation$d !== void 0 && _activeConversation$d._id && activeConversation !== prevProps.activeConversation) {
      this.initSocketEvent();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.off('routeChangeStart', this.onbeforeunload);
  }

  handler({
    total,
    members,
    conversationId
  }) {
    var _activeConversation$d2;

    const {
      activeConversation
    } = this.props;

    if ((activeConversation === null || activeConversation === void 0 ? void 0 : (_activeConversation$d2 = activeConversation.data) === null || _activeConversation$d2 === void 0 ? void 0 : _activeConversation$d2._id) === conversationId) {
      this.setState({
        total,
        members
      });
    }
  }

  handleRemoteVideo(event) {
    const {
      srcObject
    } = event.target;
    this.mainVideoRef.current.srcObject = srcObject;
    this.mainVideoRef.current.hidden = false;
    this.mainVideoRef.current.play();
  }

  leaveSession() {
    const {
      activeConversation,
      resetStreamMessage: dispatchResetStreamMessage
    } = this.props;
    dispatchResetStreamMessage();

    if (this.socket && activeConversation && activeConversation.data) {
      this.socket.off(JOINED_THE_ROOM);
      this.socket.off(STREAM_JOINED);
      this.socket.off(STREAM_LEAVED);
      this.socket.emit(EVENT.LEAVE_ROOM, {
        conversationId: activeConversation.data._id
      });
    }

    if (this.interval) {
      clearInterval(this.interval);
    }

    this.setState({
      processing: false,
      roomJoined: false,
      total: 0,
      members: []
    });
  }

  async joinGroupChat() {
    const {
      performer,
      getStreamConversationSuccess: dispatchGetStreamConversationSuccess,
      loadMoreStreamMessages: dispatchLoadStreamMessages
    } = this.props;

    try {
      this.setState({
        processing: true
      });
      const resp = await src_services__WEBPACK_IMPORTED_MODULE_4__[/* streamService */ "r"].joinGroupChat(performer._id);

      if (resp && resp.data) {
        this.socket = this.context;
        const {
          sessionId,
          conversation
        } = resp.data;
        this.publisherRef.current && this.publisherRef.current.start(conversation._id, sessionId);
        dispatchGetStreamConversationSuccess({
          data: conversation
        });
        dispatchLoadStreamMessages({
          conversationId: conversation._id,
          limit: 25,
          offset: 0,
          type: conversation.type
        });
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success('Success');
        this.socket.emit(EVENT.JOIN_ROOM, {
          conversationId: conversation._id
        });
      }
    } catch (e) {
      const error = await Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_11__[/* getResponseError */ "h"])(error));
    } finally {
      this.setState({
        processing: false
      });
    }
  }

  roomJoinedHandler({
    total,
    members,
    conversationId
  }) {
    var _activeConversation$d3;

    const {
      activeConversation,
      performer,
      user
    } = this.props;

    if ((activeConversation === null || activeConversation === void 0 ? void 0 : (_activeConversation$d3 = activeConversation.data) === null || _activeConversation$d3 === void 0 ? void 0 : _activeConversation$d3._id) === conversationId) {
      this.interval = setInterval(() => {
        const {
          callTime
        } = this.state;

        if (user.balance < performer.groupCallPrice) {
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].warn('Your balance is not enough token.');
          setTimeout(() => window.location.reload(), 10 * 1000);
          return;
        }

        this.setState({
          callTime: callTime + 1
        });
        this.sendPaidToken(conversationId);
      }, 60 * 1000);
      this.setState({
        total,
        members,
        roomJoined: true,
        callTime: 0
      });
    }
  }

  leave() {
    this.publisherRef.current && this.publisherRef.current.stop();
    this.subscriberRef.current && this.subscriberRef.current.stop();
    setTimeout(() => {
      window.location.href = '/';
    }, 10 * 1000);
  }

  async sendPaidToken(conversationId) {
    try {
      const {
        performer,
        updateCurrentUserBalance: dispatchUpdateBalance
      } = this.props;
      const {
        paidToken
      } = this.state;
      await src_services__WEBPACK_IMPORTED_MODULE_4__[/* transactionService */ "t"].sendPaidToken(conversationId);
      const newState = {
        paidToken: paidToken + performer.groupCallPrice
      };
      this.setState(newState);
      dispatchUpdateBalance(performer.groupCallPrice * -1);
    } catch (err) {
      const error = await Promise.resolve(err);

      if (error.statusCode === 400) {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('Your tokens do not enough, please buy more.');
        clearInterval(this.interval);
        this.leave();
      }
    }
  }

  initSocketEvent() {
    this.socket = this.context;
    this.socket.on(JOINED_THE_ROOM, ({
      streamId,
      streamList,
      conversationId
    }) => {
      const {
        activeConversation
      } = this.props;
      if (conversationId !== activeConversation.data._id) return;
      this.streamId = streamId;
      this.streamList = streamList;
      this.publisherRef.current && this.publisherRef.current.publish(streamId);

      if (streamList.length) {
        this.subscriberRef.current && this.subscriberRef.current.play(streamList);
      }
    });
    this.socket.on(STREAM_JOINED, data => {
      if (this.streamId !== data.streamId) {
        this.subscriberRef.current && this.subscriberRef.current.play([data.streamId]);
      }
    });
    this.socket.on(STREAM_LEAVED, data => {
      this.streamList = this.streamList.filter(id => id !== data.streamId);

      if (this.streamId !== data.streamId) {
        this.subscriberRef.current && this.subscriberRef.current.close(data.streamId);
      }
    });
  }

  render() {
    const {
      performer
    } = this.props;
    const {
      processing,
      total,
      members,
      roomJoined,
      callTime,
      paidToken
    } = this.state;
    const dataSource = [{
      title: 'Call time',
      description: `${callTime} minute(s)`
    }, {
      title: 'Status',
      description: roomJoined ? 'Live' : ''
    }, {
      title: 'Paid Token',
      description: `${paidToken} token(s)`
    }, {
      title: 'Token per minute',
      description: `${performer.groupCallPrice} token(s)` || 'N/A'
    }];
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Group Chat")), __jsx(src_socket__WEBPACK_IMPORTED_MODULE_8__[/* Event */ "a"], {
      event: EVENT.STREAM_INFORMATION_CHANGED,
      handler: this.handler.bind(this)
    }), __jsx(src_socket__WEBPACK_IMPORTED_MODULE_8__[/* Event */ "a"], {
      event: EVENT.JOINED_THE_ROOM,
      handler: this.roomJoinedHandler.bind(this)
    }), __jsx("div", {
      className: "container"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 12,
      xs: 24
    }, !roomJoined ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      onClick: this.joinGroupChat.bind(this),
      loading: processing,
      block: true
    }, "Join Conversation") : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      onClick: this.leave.bind(this),
      block: true,
      disabled: processing
    }, "Stop Streaming"), __jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, __jsx("video", {
      id: "subscriber",
      ref: this.mainVideoRef,
      hidden: true,
      controls: true
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: this.remoteVideoContainerClassname
    }, __jsx(_components_streaming_webrtc_groupchat_publisher__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], _extends({}, this.props, {
      id: this.localVideoId,
      ref: this.publisherRef,
      classNames: "ant-col ant-col-6",
      containerClassName: this.remoteVideoContainerClassname,
      configs: {
        localVideoId: this.localVideoId
      }
    })), __jsx(_components_streaming_webrtc_groupchat_subscriber__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], _extends({}, this.props, {
      ref: this.subscriberRef,
      classNames: "ant-col ant-col-6",
      onClick: this.handleRemoteVideo.bind(this),
      containerClassName: this.remoteVideoContainerClassname,
      configs: {
        isPlayMode: true
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
      dataSource: dataSource,
      renderItem: item => __jsx(ListItem, {
        description: item.description,
        title: item.title
      })
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 24,
      md: 12
    }, __jsx(_components_stream_chat_chat_box__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], _extends({}, this.props, {
      totalParticipant: total,
      members: members
    }))))));
  }

}

_defineProperty(UserPrivateChat, "authenticate", true);

UserPrivateChat.contextType = src_socket__WEBPACK_IMPORTED_MODULE_8__[/* SocketContext */ "c"];

const mapStateToProps = state => _objectSpread(_objectSpread({}, state.streaming), {}, {
  ui: state.ui,
  user: state.user.current,
  loggedIn: state.auth.loggedIn,
  activeConversation: state.streamMessage.activeConversation
});

const mapDispatchs = {
  getStreamConversationSuccess: _redux_stream_chat_actions__WEBPACK_IMPORTED_MODULE_6__[/* getStreamConversationSuccess */ "e"],
  loadMoreStreamMessages: _redux_stream_chat_actions__WEBPACK_IMPORTED_MODULE_6__[/* loadMoreStreamMessages */ "f"],
  resetStreamMessage: _redux_stream_chat_actions__WEBPACK_IMPORTED_MODULE_6__[/* resetStreamMessage */ "l"],
  updateCurrentUserBalance: _redux_user_actions__WEBPACK_IMPORTED_MODULE_7__[/* updateCurrentUserBalance */ "o"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchs)(Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(UserPrivateChat)));

/***/ }),

/***/ "nL36":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CLrh");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_antmedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HQdG");
/* harmony import */ var src_antmedia_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MoJi");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable dot-notation */

/* eslint-disable camelcase */






class Subscriber extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "streamIds", []);

    _defineProperty(this, "availableStreamIds", []);
  }

  async handler(info, obj) {
    const {
      webRTCAdaptor,
      settings
    } = this.props;

    if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_4__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].INITIALIZED) {
      if (Array.isArray(this.streamIds)) {
        const tokens = await Promise.all(this.streamIds.map(streamId => src_services__WEBPACK_IMPORTED_MODULE_1__[/* streamService */ "r"].getSubscriberToken({
          streamId,
          settings
        })));
        this.streamIds.map((id, i) => webRTCAdaptor.play(id, tokens[i]));
        return;
      }

      const token = await src_services__WEBPACK_IMPORTED_MODULE_1__[/* streamService */ "r"].getSubscriberToken({
        streamId: this.streamIds,
        settings
      });
      webRTCAdaptor.play(this.streamIds, token);
    } else if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_4__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].NEW_STREAM_AVAILABLE) {
      const availableStream = this.availableStreamIds.find(id => id === obj.streamId);

      if (!availableStream) {
        this.availableStreamIds.push(obj.streamId);
        this.createRemoteVideo(obj);
      }
    } else if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_4__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].PLAY_FINISHED) {
      this.availableStreamIds = this.availableStreamIds.filter(id => id !== obj.streamId);
      this.removeRemoteVideo(obj.streamId);
      setTimeout(() => {
        webRTCAdaptor.getStreamInfo(obj.streamId);
      }, 3000);
    } else if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_4__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].STREAM_INFORMATION) {
      if (this.streamIds.includes(obj.streamId)) {
        const token = await src_services__WEBPACK_IMPORTED_MODULE_1__[/* streamService */ "r"].getSubscriberToken({
          streamId: obj.streamId,
          settings
        });
        webRTCAdaptor.play(obj.streamId, token);
      }
    }
  }

  async cbErrorHandler(error) {
    if (error === 'no_stream_exist') {
      const {
        webRTCAdaptor,
        initWebRTCAdaptor
      } = this.props;

      if (!webRTCAdaptor) {
        initWebRTCAdaptor(this.handler.bind(this), this.cbErrorHandler.bind(this));
      } else {
        this.streamIds.forEach(id => webRTCAdaptor.getStreamInfo(id));
      }
    }
  }

  createRemoteVideo({
    stream,
    streamId
  }) {
    const {
      classNames,
      containerClassName,
      onClick: handleClick
    } = this.props;
    const video = document.createElement('video');
    const container = document.getElementsByClassName(containerClassName)[0];
    video.setAttribute('id', `streamId-subscriber-${streamId}`);
    video.setAttribute('class', classnames__WEBPACK_IMPORTED_MODULE_2___default()('video-js', classNames));
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    video.playsInline = true;
    video.width = container.clientWidth / 4;
    video.srcObject = stream;
    video.addEventListener('click', handleClick);
    container.append(video);
  }

  removeRemoteVideo(streamId) {
    const {
      containerClassName
    } = this.props;
    const video = document.getElementById(`streamId-subscriber-${streamId}`);

    if (video) {
      video.srcObject = null;
      const container = document.getElementsByClassName(containerClassName)[0];
      container.removeChild(video);
    }
  }

  async play(streamIds) {
    const {
      initWebRTCAdaptor,
      initialized,
      webRTCAdaptor,
      settings
    } = this.props;
    this.streamIds = [...this.streamIds, ...streamIds];

    if (initialized) {
      if (Array.isArray(streamIds)) {
        const tokens = await Promise.all(streamIds.map(streamId => src_services__WEBPACK_IMPORTED_MODULE_1__[/* streamService */ "r"].getSubscriberToken({
          streamId,
          settings
        })));
        streamIds.map((id, i) => webRTCAdaptor.play(id, tokens[i]));
      }

      return;
    }

    initWebRTCAdaptor(this.handler.bind(this), this.cbErrorHandler.bind(this));
  }

  close(streamId) {
    this.streamIds = this.streamIds.filter(id => id !== streamId);
  }

  stop() {
    const {
      leaveSession
    } = this.props;
    this.streamIds = [];
    this.availableStreamIds = [];
    leaveSession();
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Object(src_antmedia__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Subscriber));

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nXVM":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

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

/***/ "qMfs":
/***/ (function(module, exports) {



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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

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