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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
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

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lM/c");


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

/***/ "9njb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LJzH");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_antmedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HQdG");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CLrh");
/* harmony import */ var src_antmedia_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MoJi");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("AzSJ");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rP/q");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable dot-notation */

/* eslint-disable camelcase */










class AntVideoPlayer extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "videoContainerRef", void 0);

    _defineProperty(this, "streamId", void 0);

    _defineProperty(this, "player", void 0);

    _defineProperty(this, "activeStreams", []);

    _defineProperty(this, "getLiveStreamOrVodURLInterval", void 0);

    _defineProperty(this, "id", `player-${Object(_lib_string__WEBPACK_IMPORTED_MODULE_8__[/* generateUuid */ "b"])()}`);
  }

  componentDidMount() {
    this.videoContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
  }

  componentWillUnmount() {
    this.getLiveStreamOrVodURLInterval && clearInterval(this.getLiveStreamOrVodURLInterval);
    this.player && this.player.dispose();
  }

  async handler(info, obj) {
    const {
      webRTCAdaptor,
      settings
    } = this.props;

    if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_6__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].INITIALIZED) {
      const token = await src_services__WEBPACK_IMPORTED_MODULE_5__[/* streamService */ "r"].getSubscriberToken({
        streamId: this.streamId,
        settings
      });
      webRTCAdaptor.play(this.streamId, token);
    } else if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_6__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].NEW_STREAM_AVAILABLE) {
      const activeStream = this.activeStreams.find(id => id === obj.streamId);

      if (this.player) {
        this.player.dispose();
        this.player = undefined;
      }

      if (!activeStream) {
        this.activeStreams.push(obj.streamId);
        this.createRemoteVideo(obj.stream);
      }
    } else if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_6__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].PLAY_FINISHED) {
      this.activeStreams = this.activeStreams.filter(id => id !== obj.streamId);
      this.removeRemoteVideo();
      setTimeout(() => {
        webRTCAdaptor.getStreamInfo(obj.streamId);
      }, 3000);
    } else if (info === src_antmedia_constants__WEBPACK_IMPORTED_MODULE_6__[/* WEBRTC_ADAPTOR_INFORMATIONS */ "a"].STREAM_INFORMATION) {
      if (obj.streamId === this.streamId) {
        const token = await src_services__WEBPACK_IMPORTED_MODULE_5__[/* streamService */ "r"].getSubscriberToken({
          streamId: obj.streamId,
          settings
        });
        webRTCAdaptor.play(obj.streamId, token);
      }
    }
  }

  createPlaybackideo(streamId) {
    const {
      classNames
    } = this.props;
    const video = document.createElement('video');
    video.setAttribute('id', this.id);
    video.setAttribute('class', classnames__WEBPACK_IMPORTED_MODULE_2___default()(classNames, 'subscriber video-js'));
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    video.playsInline = true;
    video.width = this.videoContainerRef.current.offsetWidth;
    this.videoContainerRef.current.append(video);
    this.player = video_js__WEBPACK_IMPORTED_MODULE_7___default()(this.id, {
      autoplay: true,
      liveui: true
    });
    this.player.on('ended', this.ended.bind(this));
    this.player.on('error', this.ended.bind(this));
    this.player.controls(true);
    streamId && this.playHLS(streamId);
  }

  resetPlaybackVideo() {
    var _this$player;

    this.streamId = '';

    if ((_this$player = this.player) !== null && _this$player !== void 0 && _this$player.src()) {
      this.player.dispose();
      this.player = undefined;
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
        this.streamId && webRTCAdaptor.getStreamInfo(this.streamId);
      }
    }
  }

  async ended() {
    const {
      settings
    } = this.props;

    if (!this.streamId) {
      return;
    }

    const src = await src_services__WEBPACK_IMPORTED_MODULE_5__[/* streamService */ "r"].getLiveStreamOrVodURL({
      streamId: this.streamId,
      settings,
      appName: settings.AntMediaAppname
    });

    if (src) {
      this.getLiveStreamOrVodURLInterval = setInterval(() => {
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(src, {
          method: 'HEAD'
        }).then(() => {
          this.playHLS(this.streamId);
          this.getLiveStreamOrVodURLInterval && clearInterval(this.getLiveStreamOrVodURLInterval);
        });
      }, 5000);
    }
  }

  createRemoteVideo(stream) {
    const {
      classNames
    } = this.props;
    const video = document.createElement('video');
    video.setAttribute('id', this.id);
    video.setAttribute('class', classnames__WEBPACK_IMPORTED_MODULE_2___default()(classNames));
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    video.playsInline = true;
    video.srcObject = stream;
    video.width = this.videoContainerRef.current.offsetWidth;
    this.videoContainerRef.current.append(video);
  }

  removeRemoteVideo() {
    const video = document.getElementById(this.id);

    if (video) {
      video.srcObject = null; // document.querySelector('.video-container').removeChild(video);

      this.videoContainerRef.current.removeChild(video);
    }
  }

  async play(streamId) {
    const {
      initWebRTCAdaptor,
      initialized,
      webRTCAdaptor,
      settings
    } = this.props;
    this.streamId = streamId;

    if (initialized) {
      const token = await src_services__WEBPACK_IMPORTED_MODULE_5__[/* streamService */ "r"].getSubscriberToken({
        streamId,
        settings
      });
      webRTCAdaptor.play(streamId, token);
      return;
    }

    initWebRTCAdaptor(this.handler.bind(this), this.cbErrorHandler.bind(this));
  }

  async playHLS(streamId) {
    if (!this.player) {
      this.createPlaybackideo(streamId);
    }

    const {
      configs,
      settings
    } = this.props;
    const appName = configs.appName || settings.AntMediaAppname;
    this.streamId = streamId;
    this.getLiveStreamOrVodURLInterval && clearInterval(this.getLiveStreamOrVodURLInterval);
    const src = await src_services__WEBPACK_IMPORTED_MODULE_5__[/* streamService */ "r"].getLiveStreamOrVodURL({
      appName,
      settings,
      streamId
    });

    if (!src) {
      return;
    } // this.player.addClass('vjs-waiting');


    setTimeout(() => {
      if (!this.player) return;
      this.player.src({
        type: 'application/x-mpegURL',
        src
      });
      this.player.play();
      this.player.controls(true);
    }, 1 * 1000);
  }

  stop() {
    const {
      leaveSession
    } = this.props;
    this.streamId = '';
    leaveSession && leaveSession();
  }

  render() {
    const {
      containerClassName
    } = this.props;
    return __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('video-container', containerClassName),
      ref: this.videoContainerRef
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["memo"](Object(src_antmedia__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AntVideoPlayer)));

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

/***/ "AzSJ":
/***/ (function(module, exports) {

module.exports = require("video.js");

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

/***/ "LJzH":
/***/ (function(module, exports) {



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

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "lM/c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rP/q");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_streaming_ant_video_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9njb");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-return-assign */






class Xcams extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "playerRefs", {});

    _defineProperty(this, "state", {
      streamIds: []
    });
  }

  componentDidMount() {
    const {
      streamIds
    } = this.state;
    const arr = [...streamIds];

    for (let i = 0; i < 5; i += 1) {
      arr.push(Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__[/* generateUuid */ "b"])());
    }

    this.setState({
      streamIds: arr
    });
  }

  play() {
    Object.keys(this.playerRefs).forEach(id => {
      var _this$playerRefs$id;

      (_this$playerRefs$id = this.playerRefs[id]) === null || _this$playerRefs$id === void 0 ? void 0 : _this$playerRefs$id.playHLS(id);
    });
  }

  render() {
    const {
      streamIds
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "primary",
      onClick: this.play.bind(this),
      disabled: true
    }, "Play"), streamIds.length > 0 && streamIds.map(id => __jsx(_components_streaming_ant_video_player__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _extends({}, this.props, {
      sessionId: id,
      configs: {
        isPlayMode: true
      },
      ref: ref => this.playerRefs[id] = ref
    }))));
  }

}

const mapStateProps = state => _objectSpread({}, state.streaming);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateProps)(Xcams));

/***/ }),

/***/ "nXVM":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

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