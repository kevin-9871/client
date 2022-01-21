module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
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

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cJ20");


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

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "OVUx":
/***/ (function(module, exports) {



/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "UTbA":
/***/ (function(module, exports) {



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

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cJ20":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/components/stream-chat/Messenger.less
var stream_chat_Messenger = __webpack_require__("OVUx");

// EXTERNAL MODULE: ./src/redux/message/actions.ts
var actions = __webpack_require__("wqbU");

// EXTERNAL MODULE: ./src/components/messages/ConversationList.less
var messages_ConversationList = __webpack_require__("od0E");

// EXTERNAL MODULE: ./src/socket/index.ts + 4 modules
var socket = __webpack_require__("AY7M");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/services/message.service.ts
var message_service = __webpack_require__("5pvF");

// EXTERNAL MODULE: ./src/components/messages/ConversationSearch.less
var ConversationSearch = __webpack_require__("jcEp");

// CONCATENATED MODULE: ./src/components/messages/ConversationSearch.tsx
var __jsx = external_react_default.a.createElement;


function ConversationSearch_ConversationSearch({
  onSearch
}) {
  return __jsx("div", {
    className: "conversation-search"
  }, __jsx("input", {
    onChange: onSearch,
    type: "search",
    className: "conversation-search-input",
    placeholder: "Search conversation..."
  }));
}
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./src/components/messages/ConversationListItem.less
var ConversationListItem = __webpack_require__("oYE4");

// CONCATENATED MODULE: ./src/components/messages/ConversationListItem.tsx
var ConversationListItem_jsx = external_react_default.a.createElement;




function ConversationListItem_ConversationListItem(props) {
  const {
    setActive,
    selected,
    data
  } = props;
  const {
    recipientInfo,
    lastMessage,
    _id,
    updatedAt,
    lastMessageCreatedAt,
    totalNotSeenMessages = 0
  } = data;
  const className = selected ? 'conversation-list-item active' : 'conversation-list-item';
  return ConversationListItem_jsx("div", {
    "aria-hidden": "true",
    className: className,
    onClick: () => setActive(_id)
  }, ConversationListItem_jsx("div", {
    className: "conversation-left-corner"
  }, ConversationListItem_jsx("img", {
    className: "conversation-photo",
    src: (recipientInfo === null || recipientInfo === void 0 ? void 0 : recipientInfo.avatar) || '/default-user-icon.png',
    alt: "conversation"
  })), ConversationListItem_jsx("div", {
    className: "conversation-info"
  }, ConversationListItem_jsx("h1", {
    className: "conversation-title"
  }, (recipientInfo === null || recipientInfo === void 0 ? void 0 : recipientInfo.username) || 'N/A'), ConversationListItem_jsx("p", {
    className: "conversation-snippet"
  }, lastMessage), ConversationListItem_jsx("p", {
    className: "conversation-time"
  }, external_moment_default()(lastMessageCreatedAt || updatedAt).fromNow())), ConversationListItem_jsx(external_antd_["Badge"], {
    className: "notification-badge",
    count: totalNotSeenMessages
  }));
}
// CONCATENATED MODULE: ./src/components/messages/ConversationList.tsx
var ConversationList_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class ConversationList_ConversationList extends external_react_["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "conversationsRef", void 0);

    _defineProperty(this, "state", {
      conversationPage: 1,
      keyword: ''
    });

    _defineProperty(this, "onMessage", async message => {
      if (!message) {
        return;
      }

      const {
        conversation,
        currentPerformer,
        currentUser,
        getConversationDetail: getConversationDetailHandler,
        receiveMessageSuccess: receiveMessageSuccessHandler,
        updateLastMessage: handleUpdateLastMessage
      } = this.props;
      const {
        mapping
      } = conversation;
      const {
        conversationId,
        text
      } = message;

      if (!mapping[message.conversationId]) {
        getConversationDetailHandler({
          id: message.conversationId
        });
      }

      receiveMessageSuccessHandler(message);
      handleUpdateLastMessage({
        conversationId,
        lastMessage: text
      });
      await message_service["a" /* messageService */].readAllInConversation(conversationId, currentUser._id ? currentUser._id : currentPerformer._id);
    });

    _defineProperty(this, "onSearchConversation", Object(external_lodash_["debounce"])(async e => {
      const {
        value
      } = e.target;
      const {
        searchConversations: getConversationsHandler
      } = this.props;
      await this.setState({
        keyword: value,
        conversationPage: 0
      });

      if (value) {
        return getConversationsHandler({
          keyword: value,
          limit: 25,
          offset: 0,
          type: 'private'
        });
      }

      return getConversationsHandler({
        limit: 25,
        offset: 0,
        type: 'private'
      });
    }, 500));

    _defineProperty(this, "handleScroll", async event => {
      const {
        conversation,
        getConversations: getConversationsHandler
      } = this.props;
      const {
        requesting,
        data,
        total
      } = conversation.list;
      const {
        conversationPage,
        keyword
      } = this.state;
      const canloadmore = total > data.length;
      const ele = event.target;
      if (!canloadmore) return;

      if (ele.scrollHeight - ele.scrollTop === ele.clientHeight && !requesting && canloadmore) {
        this.setState({
          conversationPage: conversationPage + 1
        }, () => {
          getConversationsHandler({
            keyword,
            limit: 25,
            offset: conversationPage * 25,
            type: 'private'
          });
        });
      }
    });

    _defineProperty(this, "setActive", conversationId => {
      const {
        setActiveConversation: setActiveConversationHandler,
        currentPerformer,
        currentUser
      } = this.props;
      setActiveConversationHandler({
        conversationId,
        recipientId: currentUser._id ? currentUser._id : currentPerformer._id
      });
    });
  }

  async componentDidMount() {
    if (!this.conversationsRef) this.conversationsRef = /*#__PURE__*/Object(external_react_["createRef"])();
    const {
      getConversations: getConversationsHandler,
      setActiveConversation: setActiveConversationHandler,
      toSource,
      toId,
      currentUser,
      currentPerformer
    } = this.props;
    const {
      conversationPage,
      keyword
    } = this.state;
    getConversationsHandler({
      limit: 25,
      offset: conversationPage * 25,
      type: 'private',
      keyword
    });

    if (toSource && toId) {
      setTimeout(() => {
        setActiveConversationHandler({
          source: toSource,
          sourceId: toId,
          recipientId: currentUser._id ? currentUser._id : currentPerformer._id
        });
      }, 1000);
    }
  }

  render() {
    const {
      conversation
    } = this.props;
    const {
      data: conversations,
      requesting
    } = conversation.list;
    const {
      mapping,
      activeConversation = {}
    } = conversation;
    if (!this.conversationsRef) this.conversationsRef = /*#__PURE__*/Object(external_react_["createRef"])();
    return ConversationList_jsx("div", {
      className: "conversation-list",
      ref: this.conversationsRef,
      onScroll: this.handleScroll.bind(this)
    }, ConversationList_jsx(socket["a" /* Event */], {
      event: "message_created",
      handler: this.onMessage
    }), ConversationList_jsx("h4", {
      className: "text-center",
      style: {
        fontSize: '22px'
      }
    }, "Messenger"), ConversationList_jsx(ConversationSearch_ConversationSearch, {
      onSearch: e => {
        e.persist();
        this.onSearchConversation(e);
      }
    }), conversations.length > 0 && conversations.map(conversationId => ConversationList_jsx(ConversationListItem_ConversationListItem, {
      key: conversationId,
      data: mapping[conversationId],
      setActive: this.setActive.bind(this),
      selected: activeConversation._id === conversationId
    })), requesting && ConversationList_jsx("div", {
      className: "text-center"
    }, ConversationList_jsx("img", {
      alt: "loading",
      src: "/loading-ico.gif",
      width: "50px"
    })), !requesting && !conversations.length && ConversationList_jsx("p", {
      className: "text-center"
    }, "No conversation found."));
  }

}

const mapStates = state => ({
  conversation: state.conversation,
  message: state.message,
  currentUser: state.user.current,
  currentPerformer: state.performer.current
});

const mapDispatch = {
  searchConversations: actions["r" /* searchConversations */],
  getConversations: actions["f" /* getConversations */],
  setActiveConversation: actions["y" /* setActiveConversation */],
  getConversationDetail: actions["d" /* getConversationDetail */],
  receiveMessageSuccess: actions["p" /* receiveMessageSuccess */],
  updateLastMessage: actions["B" /* updateLastMessage */]
};
/* harmony default export */ var components_messages_ConversationList = (Object(external_react_redux_["connect"])(mapStates, mapDispatch)(ConversationList_ConversationList));
// EXTERNAL MODULE: ./src/components/stream-chat/MessageList.less
var stream_chat_MessageList = __webpack_require__("UTbA");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");

// EXTERNAL MODULE: ./src/components/stream-chat/Compose.less
var stream_chat_Compose = __webpack_require__("qMfs");

// CONCATENATED MODULE: ./src/components/messages/emotions.tsx
var emotions_jsx = external_react_default.a.createElement;

function emotions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let Picker;

if (false) {}

class emotions_Emotions extends external_react_["PureComponent"] {
  constructor(props) {
    super(props);

    emotions_defineProperty(this, "uploadRef", void 0);

    this.uploadRef = /*#__PURE__*/external_react_default.a.createRef();
  }

  onEmojiClick(event, emoji) {
    const {
      onEmojiClick
    } = this.props;
    onEmojiClick(emoji);
  }

  render() {
    return emotions_jsx(external_react_default.a.Fragment, null, emotions_jsx(Picker, {
      onEmojiClick: this.onEmojiClick.bind(this),
      disableAutoFocus: true,
      disableSearchBar: true,
      disableSkinTonePicker: true
    }));
  }

}
// CONCATENATED MODULE: ./src/components/messages/Compose.tsx
var Compose_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Compose_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Compose_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-return-assign */




 // import { ImageMessageUpload } from '@components/messages/uploadPhoto';
// import { authService } from '@services/index';




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
      this.setState({
        text: evt.target.value
      });
    });

    Compose_defineProperty(this, "onEmojiClick", emojiObject => {
      const {
        text
      } = this.state;
      this.setMessage(text + emojiObject.emoji);
    });

    Compose_defineProperty(this, "onPhotoUploaded", data => {
      const {
        sentFileSuccess: handleSendFile
      } = this.props;

      if (!data || !data.response) {
        return;
      }

      const imageUrl = data.response.data && data.response.data.imageUrl || data.base64;
      handleSendFile(_objectSpread(_objectSpread({}, data.response.data), {
        imageUrl
      }));
    });

    this.uploadRef = /*#__PURE__*/external_react_default.a.createRef();
  }

  componentDidMount() {
    if (!this.uploadRef) this.uploadRef = /*#__PURE__*/external_react_default.a.createRef();
    if (!this._input) this._input = /*#__PURE__*/external_react_default.a.createRef();
  }

  componentDidUpdate(previousProps) {
    const {
      sendMessageStatus
    } = this.props;

    if (sendMessageStatus.success !== previousProps.sendMessageStatus.success) {
      this.setMessage('');
      this._input && this._input.focus();
    }
  }

  setMessage(msg) {
    this.setState({
      text: msg
    });
  }

  send() {
    const {
      text
    } = this.state;
    if (!text) return;
    const {
      conversation,
      sendMessage: handleSend
    } = this.props;
    handleSend({
      conversationId: conversation._id,
      data: {
        text
      }
    });
  }

  render() {
    const {
      text
    } = this.state;
    const {
      sendMessageStatus: status,
      conversation
    } = this.props; // const uploadHeaders = {
    //   authorization: authService.getToken()
    // };

    if (!this.uploadRef) this.uploadRef = /*#__PURE__*/external_react_default.a.createRef();
    if (!this._input) this._input = /*#__PURE__*/external_react_default.a.createRef();
    return Compose_jsx("div", {
      className: "compose"
    }, Compose_jsx(external_antd_["Input"], {
      value: text,
      className: "compose-input",
      placeholder: "Type a message",
      onKeyDown: this.onKeyDown,
      onChange: this.onChange,
      disabled: status.sending || !conversation._id,
      ref: c => this._input = c
    }), Compose_jsx("div", {
      className: "grp-icons"
    }, Compose_jsx(icons_["SendOutlined"], {
      onClick: this.send.bind(this),
      disabled: status.sending,
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

const Compose_mapStates = state => ({
  sendMessageStatus: state.message.sendMessage,
  currentUser: state.user.current
});

const Compose_mapDispatch = {
  sendMessage: actions["u" /* sendMessage */],
  sentFileSuccess: actions["x" /* sentFileSuccess */]
};
/* harmony default export */ var messages_Compose = (Object(external_react_redux_["connect"])(Compose_mapStates, Compose_mapDispatch)(Compose_Compose));
// EXTERNAL MODULE: ./src/components/stream-chat/Message.less
var Message = __webpack_require__("iZf9");

// CONCATENATED MODULE: ./src/components/messages/Message.tsx
var Message_jsx = external_react_default.a.createElement;



function Message_Message(props) {
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp
  } = props;
  const friendlyTimestamp = external_moment_default()(data.createdAt).format('LLLL');
  return Message_jsx("div", {
    className: ['message', `${isMine ? 'mine' : ''}`, `${startsSequence ? 'start' : ''}`, `${endsSequence ? 'end' : ''}`].join(' ')
  }, data.text && Message_jsx("div", {
    className: "bubble-container"
  }, Message_jsx("div", {
    className: "bubble",
    title: friendlyTimestamp
  }, !data.imageUrl && data.text, ' ', data.imageUrl && Message_jsx("a", {
    title: "Click to view full content",
    href: data.imageUrl,
    target: "_blank",
    rel: "noreferrer"
  }, Message_jsx("img", {
    src: data.imageUrl,
    width: "180px",
    alt: ""
  })))), showTimestamp && Message_jsx("div", {
    className: "timestamp"
  }, friendlyTimestamp));
}
// CONCATENATED MODULE: ./src/components/messages/MessageList.tsx
var MessageList_jsx = external_react_default.a.createElement;

function MessageList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MessageList_MessageList extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    MessageList_defineProperty(this, "messagesRef", void 0);

    MessageList_defineProperty(this, "state", {
      offset: 1,
      onloadmore: false
    });

    MessageList_defineProperty(this, "renderMessages", () => {
      const {
        message,
        currentUser,
        currentPerformer
      } = this.props;
      const messages = message.items;
      let i = 0;
      const messageCount = messages.length;
      const tempMessages = [];

      while (i < messageCount) {
        const previous = messages[i - 1];
        const current = messages[i];
        const next = messages[i + 1];
        const isMine = current.senderId === (currentUser && currentUser._id || currentPerformer && currentPerformer._id);
        const currentMoment = external_moment_default()(current.createdAt);
        let prevBySameAuthor = false;
        let nextBySameAuthor = false;
        let startsSequence = true;
        let endsSequence = true;
        let showTimestamp = true;

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
  }

  async componentDidMount() {
    if (!this.messagesRef) this.messagesRef = /*#__PURE__*/Object(external_react_["createRef"])();
  }

  async componentDidUpdate(prevState) {
    const {
      conversation
    } = this.props;

    if (prevState && prevState.conversation && prevState.conversation._id !== conversation._id) {
      this.setOffset();
    }
  }

  async handleScroll(conversation, event) {
    const {
      message,
      loadMoreMessages: dispatchLoadMoreMessages
    } = this.props;
    const {
      fetching,
      items,
      total
    } = message;
    const {
      offset
    } = this.state;
    const canloadmore = total > items.length;
    const ele = event.target;
    if (!canloadmore) return;

    if (ele.scrollTop === 0 && conversation._id && !fetching && canloadmore) {
      await this.setState({
        offset: offset + 1,
        onloadmore: true
      });
      dispatchLoadMoreMessages({
        conversationId: conversation._id,
        limit: 20,
        offset: (offset - 1) * 20
      });
    }
  }

  async setOffset() {
    this.setState({
      offset: 1
    });
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
        ele.scrollTop = ele.scrollHeight;
      }, 300);
    }
  }

  render() {
    const {
      conversation,
      message
    } = this.props;
    const {
      fetching
    } = message;
    if (!this.messagesRef) this.messagesRef = /*#__PURE__*/Object(external_react_["createRef"])();
    return MessageList_jsx("div", {
      className: "message-list custom"
    }, conversation && conversation._id ? MessageList_jsx(external_react_default.a.Fragment, null, MessageList_jsx("div", {
      className: "message-list-container",
      ref: this.messagesRef,
      onScroll: this.handleScroll.bind(this, conversation)
    }, fetching && MessageList_jsx("p", {
      className: "text-center"
    }, "fetching..."), this.renderMessages()), MessageList_jsx(messages_Compose, {
      conversation: conversation
    })) : MessageList_jsx("div", {
      className: "start-conversation"
    }, MessageList_jsx("p", null, "Click conversation to start")));
  }

}

const MessageList_mapStates = state => {
  const {
    conversationMap
  } = state.message;
  const {
    activeConversation
  } = state.conversation;
  const messages = conversationMap[activeConversation._id] ? conversationMap[activeConversation._id].items || [] : [];
  const totalMessages = conversationMap[activeConversation._id] ? conversationMap[activeConversation._id].total || 0 : 0;
  const fetching = conversationMap[activeConversation._id] ? conversationMap[activeConversation._id].fetching || false : false;
  return {
    message: {
      items: messages,
      total: totalMessages,
      fetching
    },
    conversation: activeConversation,
    currentUser: state.user.current,
    currentPerformer: state.performer.current
  };
};

const MessageList_mapDispatch = {
  loadMoreMessages: actions["l" /* loadMoreMessages */]
};
/* harmony default export */ var messages_MessageList = (Object(external_react_redux_["connect"])(MessageList_mapStates, MessageList_mapDispatch)(MessageList_MessageList));
// CONCATENATED MODULE: ./src/components/messages/Messenger.tsx
var Messenger_jsx = external_react_default.a.createElement;








class Messenger_Messenger extends external_react_["PureComponent"] {
  onClose() {
    const {
      deactiveConversation: dispatchDeactiveConversation
    } = this.props;
    dispatchDeactiveConversation();
  }

  render() {
    const {
      toSource,
      toId,
      activeConversation
    } = this.props;
    return Messenger_jsx("div", {
      className: "messenger"
    }, Messenger_jsx("div", {
      className: !activeConversation._id ? 'sidebar' : 'sidebar active'
    }, Messenger_jsx(components_messages_ConversationList, {
      toSource: toSource,
      toId: toId
    })), Messenger_jsx("div", {
      className: !activeConversation._id ? 'chat-content' : 'chat-content active'
    }, Messenger_jsx(external_antd_["Button"], {
      onClick: this.onClose.bind(this),
      className: "close-btn"
    }, "close"), Messenger_jsx(messages_MessageList, null)));
  }

}

const Messenger_mapStates = state => {
  const {
    activeConversation
  } = state.conversation;
  return {
    activeConversation
  };
};

const Messenger_mapDispatch = {
  deactiveConversation: actions["b" /* deactiveConversation */]
};
/* harmony default export */ var messages_Messenger = (Object(external_react_redux_["connect"])(Messenger_mapStates, Messenger_mapDispatch)(Messenger_Messenger));
// CONCATENATED MODULE: ./pages/messages/index.tsx

var messages_jsx = external_react_default.a.createElement;

function messages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function messages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { messages_ownKeys(Object(source), true).forEach(function (key) { messages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { messages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function messages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/react-in-jsx-scope */






const {
  Content
} = external_antd_["Layout"];

class messages_Messages extends external_react_["PureComponent"] {
  static getInitialProps({
    ctx
  }) {
    return {
      query: ctx.query
    };
  }

  componentWillUnmount() {
    const {
      resetMessageState: resetStateHandler
    } = this.props;
    resetStateHandler();
  }

  render() {
    const {
      query = {}
    } = this.props;
    return messages_jsx(external_react_default.a.Fragment, null, messages_jsx(head_default.a, null, messages_jsx("title", null, "Messages")), messages_jsx(external_antd_["Layout"], null, messages_jsx(Content, null, messages_jsx("div", {
      className: "main-container"
    }, messages_jsx(messages_Messenger, {
      toSource: query.toSource,
      toId: query.toId
    })))));
  }

}

messages_defineProperty(messages_Messages, "authenticate", true);

messages_defineProperty(messages_Messages, "layout", 'primary');

const messages_mapStates = state => ({
  ui: messages_objectSpread({}, state.ui)
});

const messages_mapDispatch = {
  resetMessageState: actions["q" /* resetMessageState */]
};
/* harmony default export */ var pages_messages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(messages_mapStates, messages_mapDispatch)(messages_Messages));

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iZf9":
/***/ (function(module, exports) {



/***/ }),

/***/ "jcEp":
/***/ (function(module, exports) {



/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "oYE4":
/***/ (function(module, exports) {



/***/ }),

/***/ "od0E":
/***/ (function(module, exports) {



/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

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

/***/ "wqbU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getConversations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getConversationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getConversationsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return searchConversations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return searchConversationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return searchConversationsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return readMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return sendMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return sendMessageFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return receiveMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return sentFileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deactiveConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return updateLastMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return setActiveConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return setActiveConversationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return setActiveConversationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return loadMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return loadMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loadMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadMoreMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return loadMoreMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return loadMoreMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchingMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return resetMessageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getConversationDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getConversationDetailSuccess; });
/* unused harmony export getConversationDetailFail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countNotReadMessage; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vo7w");

const {
  getConversations,
  getConversationsSuccess,
  getConversationsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getConversations', 'LOAD_CONVERSATIONS');
const {
  searchConversations,
  searchConversationsSuccess,
  searchConversationsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('searchConversations', 'SEARCH_CONVERSATIONS');
const {
  readMessages
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('readMessages', 'READ_MESSAGES');
const {
  sendMessage,
  sendMessageSuccess,
  sendMessageFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('sendMessage', 'SEND_MESSAGE');
const {
  receiveMessageSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('receiveMessageSuccess', 'RECEIVE_MESSAGE_SUCCESS');
const {
  sentFileSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('sentFileSuccess', 'SENT_FILE_SUCCESS');
const {
  deactiveConversation
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('deactiveConversation', 'DEACTIVE_CONVERSATION');
const updateLastMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updateLastMessage');
const {
  setActiveConversation,
  setActiveConversationSuccess,
  setActiveConversationFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('setActiveConversation', 'SET_ACTIVE_CONVERSATION_RECEIVER');
const {
  loadMessages,
  loadMessagesSuccess,
  loadMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('loadMessages', 'LOAD_MESSAGES');
const {
  loadMoreMessages,
  loadMoreMessagesSuccess,
  loadMoreMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('loadMoreMessages', 'LOAD_MORE_MESSAGES');
const fetchingMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('fetchingMessage');
const resetMessageState = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('resetMessageState');
const {
  getConversationDetail,
  getConversationDetailSuccess,
  getConversationDetailFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getConversationDetail', 'LOAD_CONVERSATION_ITEM');
const countNotReadMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('COUNT_TOTAL_NOT_READ_MESSAGE');

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });