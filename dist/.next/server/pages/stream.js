module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		63: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+8Hy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendTipContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("x01j");
/* harmony import */ var _content_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_less__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const tokens = [20, 50, 100, 200];
class SendTipContent extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "inputNumberRef", void 0);

    this.state = {
      radioValue: 20,
      errorMessage: '',
      token: 1
    };
  }

  componentDidMount() {
    this.inputNumberRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  }

  onRadioChange(e) {
    const {
      setDisableOk
    } = this.props;
    setDisableOk(false);
    this.setState({
      radioValue: e.target.value
    });
    if (e.target.value > 0) this.setState({
      token: e.target.value
    });
  }

  onInputChange(value) {
    const {
      setDisableOk
    } = this.props;
    setDisableOk(false);

    if (typeof value !== 'number') {
      return;
    }

    if (value <= 0 || value % 1 !== 0) {
      setDisableOk(true);
      this.setState({
        errorMessage: 'Token must be positive interger number!'
      });
      return;
    }

    this.setState({
      token: value,
      errorMessage: ''
    });
  }

  getValueToken() {
    const {
      token
    } = this.state;
    return token;
  }

  render() {
    const {
      radioValue,
      token,
      errorMessage
    } = this.state;
    return __jsx("div", null, __jsx("strong", null, "Tipping A Model Is Simple!"), __jsx("h3", null, "How Many Tokens Would You Like To Tip?"), errorMessage && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      type: "error",
      message: errorMessage
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
      value: radioValue,
      defaultValue: radioValue,
      onChange: this.onRadioChange.bind(this),
      size: "large"
    }, tokens.map(v => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      value: v,
      key: v
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      className: "token-radio",
      align: "start"
    }, __jsx("span", null, `${v} Tokens`), __jsx("span", {
      className: "tip-description"
    }, `Tip The Model ${v} Tokens!`)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      value: -1
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      className: "token-radio"
    }, __jsx("span", null, "Custom Amount"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
      className: "amount",
      ref: this.inputNumberRef,
      onFocus: () => this.setState({
        radioValue: -1
      }),
      type: "number",
      min: 1,
      max: 1000,
      step: 10,
      placeholder: "Enter Amount",
      onChange: this.onInputChange.bind(this),
      value: token
    })))));
  }

}

/***/ }),

/***/ "+PMe":
/***/ (function(module, exports) {



/***/ }),

/***/ "+wvd":
/***/ (function(module, exports) {



/***/ }),

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

/***/ "04bX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_base_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Acen");
/* harmony import */ var _modal_buy_assets_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FXlV");
/* harmony import */ var _modal_buy_assets_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modal_buy_assets_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("psLn");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CLrh");
/* harmony import */ var _components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TXU+");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-return-assign */







const initialValues = {
  postalCode: '',
  deliveryAddress: '',
  quantity: 1
};

class ModalBuyAssets extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "form", void 0);

    _defineProperty(this, "popup", void 0);

    this.state = _objectSpread(_objectSpread({}, initialValues), {}, {
      type: 'product',
      purchasing: false,
      item: undefined
    });
  }

  async onOk() {
    const {
      loggedIn
    } = this.props;
    const {
      item
    } = this.state;

    if (!loggedIn) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Please login to buy this item!');
      return;
    }

    this.setState({
      purchasing: true
    });
    Object(src_lib__WEBPACK_IMPORTED_MODULE_4__[/* isPhysicalProduct */ "l"])(item) ? this.form.submit() : this.submit();
  }

  async submit() {
    const formError = this.form.getFieldsError().find(f => f.errors.length);
    const {
      onSucess,
      onError,
      updateCurrentUserBalance
    } = this.props;
    if (formError) return;
    const {
      quantity
    } = this.form.getFieldsValue();

    try {
      const {
        type,
        item
      } = this.state;
      await src_services__WEBPACK_IMPORTED_MODULE_5__[/* purchaseItemService */ "o"].purchaseItem(item._id, type, this.form.getFieldsValue());

      if (type === 'product' && item.type === 'digital') {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success('Please check your email to view the digital product');
      } else {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success('Purchased Success');
      }

      updateCurrentUserBalance && updateCurrentUserBalance(parseInt(item.token, 10) * quantity * -1);
      onSucess && onSucess(type, item._id, {
        isBought: true
      });
    } catch (e) {
      const error = await Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_4__[/* getResponseError */ "j"])(error));
      onError && onError(error);
    } finally {
      this.popup && this.popup.setVisible(false);
      this.setState({
        purchasing: false
      });
    }
  }

  showModalBuyAssets(item, type) {
    this.setState({
      item,
      type
    });
    this.popup && this.popup.setVisible(true);
  }

  render() {
    const {
      type,
      item,
      quantity,
      purchasing
    } = this.state;
    const footer = []; // if (type === 'gallery') {
    //   footer.push();
    // }

    return __jsx(_components_common_base_popup__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      footer: footer,
      title: `Buy ${Object(src_lib__WEBPACK_IMPORTED_MODULE_4__[/* capitalizeFirstLetter */ "a"])(type)}`,
      okText: "Purchase",
      ref: ref => this.popup = ref,
      onOk: this.onOk.bind(this),
      loading: purchasing,
      content: item && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        initialValues: initialValues,
        layout: "vertical",
        ref: ref => this.form = ref,
        onValuesChange: (_, values) => this.setState(values),
        hidden: !Object(src_lib__WEBPACK_IMPORTED_MODULE_4__[/* isPhysicalProduct */ "l"])(item),
        onFinish: this.submit.bind(this),
        onFinishFailed: () => this.setState({
          purchasing: false
        })
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "deliveryAddress",
        rules: [{
          required: true,
          message: 'Please provide delivery address!'
        }],
        label: "Delivery Address"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: "Enter your address"
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "postalCode",
        label: "Postal Code"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: "Enter your postal code"
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "quantity",
        label: "Quantity",
        rules: [{
          validator(_, value) {
            if (parseInt(value, 10) < 1) {
              return Promise.reject(new Error('Quantity must be positive!'));
            }

            return Promise.resolve();
          }

        }]
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
        placeholder: "Enter quantity",
        style: {
          width: '100%'
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx("div", null, type === 'video' && __jsx("strong", null, "Available high-res Video"), type === 'gallery' && __jsx("strong", null, "Available high-res Image"), quantity === 1 && __jsx("h3", null, "Buy this", __jsx("span", {
        className: "color"
      }, ' ', item.name || item.title, ' '), "For", __jsx("span", {
        className: "color"
      }, ' ', __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        value: item.token
      }), ' '), "Tokens"), quantity > 1 && __jsx("h3", null, __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        value: parseInt(item.token, 10) * quantity,
        prefix: `Buy x${quantity} ${item.name || item.title} For `,
        suffix: " Tokens"
      }))))), __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        hidden: Object(src_lib__WEBPACK_IMPORTED_MODULE_4__[/* isPhysicalProduct */ "l"])(item),
        value: parseInt(item.token, 10) * quantity,
        prefix: `Buy ${item.name || item.title} For `,
        suffix: " Tokens"
      }))
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (ModalBuyAssets);

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

/***/ "0g3j":
/***/ (function(module, exports) {



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

/***/ "2UW8":
/***/ (function(module, exports) {



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

/***/ "4WNP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("LV70");


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

/***/ "8wR9":
/***/ (function(module, exports) {



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

/***/ "Abbm":
/***/ (function(module, exports) {



/***/ }),

/***/ "Acen":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _popup_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("aE3C");
/* harmony import */ var _popup_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_popup_less__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class Popup extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onOk() {
    const {
      onOk
    } = this.props;
    onOk && onOk();
  }

  onCancel() {
    const {
      onCancel
    } = this.props;
    onCancel && onCancel();
    this.setState({
      visible: false
    });
  }

  setVisible(visible) {
    this.setState({
      visible
    });
  }

  render() {
    const {
      visible
    } = this.state;
    const {
      content,
      loading,
      okText,
      cancelText,
      okButtonProps
    } = this.props;
    let {
      footer
    } = this.props;

    if (footer) {
      footer = [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        key: "back",
        type: "default",
        onClick: this.onCancel.bind(this)
      }, cancelText || 'Cancel'), ...footer, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
        key: "submit",
        type: "primary",
        onClick: this.onOk.bind(this),
        loading: loading
      }, okButtonProps), okText || 'OK')];
    } else {
      footer = [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        key: "back",
        type: "default",
        onClick: this.onCancel.bind(this)
      }, cancelText || 'Cancel'), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
        key: "submit",
        type: "primary",
        onClick: this.onOk.bind(this),
        disabled: loading,
        loading: loading
      }, okButtonProps), okText || 'OK')];
    }

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], _extends({}, this.props, {
      visible: visible,
      centered: true,
      closeIcon: true,
      className: "popup",
      footer: footer,
      onCancel: this.onCancel.bind(this)
    }), content);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Popup);

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

/***/ "CNsz":
/***/ (function(module, exports) {



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

/***/ "D+/t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/common/base/icons.tsx
var icons = __webpack_require__("1Bbz");

// EXTERNAL MODULE: ./src/lib/index.ts + 2 modules
var lib = __webpack_require__("psLn");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./src/components/performer/index.less
var components_performer = __webpack_require__("kpM1");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/components/common/layout/banner.less
var banner = __webpack_require__("men7");

// CONCATENATED MODULE: ./src/components/common/layout/banner.tsx
var __jsx = external_react_default.a.createElement;
 // import Link from 'next/link';




const renderBanner = (banner, styleImage) => {
  const {
    type,
    href,
    _id,
    photo,
    contentHTML
  } = banner;

  if (type === 'html' && contentHTML) {
    // eslint-disable-next-line react/no-danger
    return __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: contentHTML
      },
      style: styleImage || {}
    });
  }

  return __jsx("a", {
    href: href || '#',
    target: "_blank",
    rel: "noreferrer",
    key: _id
  }, __jsx("img", {
    src: photo && photo.url,
    alt: "",
    style: styleImage || {}
  }));
};

const Banner = ({
  banners,
  styleImage,
  classnames
}) => __jsx("div", null, banners && banners.length > 0 && __jsx(external_antd_["Carousel"], {
  autoplay: true,
  arrows: true,
  dots: false,
  effect: "fade",
  className: classnames
}, banners.map(item => renderBanner(item, styleImage))));

Banner.defaultProps = {
  classnames: ''
};
/* harmony default export */ var layout_banner = (Banner);
// EXTERNAL MODULE: ./src/components/common/base/loader.tsx
var loader = __webpack_require__("TW7V");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/lib/string.ts
var string = __webpack_require__("rP/q");

// CONCATENATED MODULE: ./src/components/performer/performer-grid.tsx
var performer_grid_jsx = external_react_["createElement"];













const renderTitle = (gender, name) => performer_grid_jsx("div", {
  className: "p-title"
}, performer_grid_jsx("span", {
  style: {
    marginRight: 5
  }
}, name), gender === 'male' ? performer_grid_jsx("span", {
  className: "anticon"
}, performer_grid_jsx(icons["h" /* MaleSignIcon */], null)) : gender === 'female' ? performer_grid_jsx("span", {
  className: "anticon"
}, performer_grid_jsx(icons["c" /* FemaleSignIcon */], null)) : performer_grid_jsx("span", {
  className: "anticon"
}, performer_grid_jsx(icons["q" /* TransgenderIcon */], null)));

const renderTags = tags => performer_grid_jsx(external_antd_["Space"], {
  className: "tags",
  wrap: true,
  size: [5, 2]
}, tags.map(tag => performer_grid_jsx(link_default.a, {
  href: {
    pathname: '/tag',
    query: {
      tags: tag
    }
  },
  key: tag,
  as: `/tag/${tag}`
}, performer_grid_jsx("a", null, "#", tag))));

const PerformerGrid = ({
  data,
  searching,
  success,
  title,
  onLike,
  loggedIn,
  isPage,
  offset,
  limit,
  total,
  setFilter,
  banners,
  gridCard,
  placeholderAvatarUrl,
  render
}) => {
  const defaultPlaceholderAvatarUrl = placeholderAvatarUrl || '/default-user-icon.png';

  const PerformerCard = ({
    performer,
    className
  }) => {
    var _performer$stats;

    const {
      isOnline,
      streamingStatus
    } = performer;
    const statusClassNames = ['p-status'];
    let status = 'offline';

    if (isOnline) {
      switch (streamingStatus) {
        case 'private':
          statusClassNames.push('private');
          status = 'private chat';
          break;

        case 'group':
          statusClassNames.push('group');
          status = 'group chat';
          break;

        case 'public':
          status = 'live';
          statusClassNames.push('online');
          break;

        default:
          status = 'online';
          statusClassNames.push('online');
          break;
      }
    } else {
      statusClassNames.push('offline');
    }

    return performer_grid_jsx(external_antd_["Card"].Grid, {
      className: className,
      key: performer._id,
      hoverable: false
    }, performer.isBlocked && performer_grid_jsx("div", {
      className: "blocked-thumb"
    }, performer_grid_jsx(icons_["LockOutlined"], null)), performer_grid_jsx(link_default.a, {
      href: {
        pathname: '/stream',
        query: {
          performer: JSON.stringify(performer)
        }
      },
      as: `/profile/${performer.username}`
    }, performer_grid_jsx("a", null, performer_grid_jsx("div", {
      className: "performer-avatar",
      style: {
        backgroundImage: `url(${typeof performer.avatar === 'string' && performer.avatar.length > 0 ? performer.avatar : defaultPlaceholderAvatarUrl})`
      }
    }, performer_grid_jsx("span", {
      className: statusClassNames.join(' ')
    }, status), renderTitle(performer.gender, performer.username), (performer === null || performer === void 0 ? void 0 : (_performer$stats = performer.stats) === null || _performer$stats === void 0 ? void 0 : _performer$stats.views) > 0 && performer_grid_jsx("div", {
      className: "p-viewer"
    }, performer_grid_jsx(icons_["EyeOutlined"], {
      style: {
        marginRight: 5
      }
    }), performer_grid_jsx("span", null, performer.stats.views))))), performer_grid_jsx("div", {
      className: "performer-bottom"
    }, performer_grid_jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
    }, performer_grid_jsx(external_antd_["Col"], null, performer_grid_jsx("div", null, performer.tags && renderTags(performer.tags))), performer_grid_jsx(external_antd_["Col"], null, performer_grid_jsx("div", {
      "aria-hidden": true,
      hidden: !loggedIn,
      className: "p-favorite",
      onClick: () => onLike(performer)
    }, performer.isFavorite ? performer_grid_jsx(icons_["HeartFilled"], {
      className: "icon"
    }) : performer_grid_jsx(icons_["HeartOutlined"], {
      className: "icon"
    })))), performer_grid_jsx("div", {
      className: "about-me"
    }, performer === null || performer === void 0 ? void 0 : performer.aboutMe)));
  };

  const GridCard = gridCard || PerformerCard;

  const RowGrid = ({
    _data
  }) => performer_grid_jsx(external_antd_["Row"], {
    style: {
      width: '100%'
    }
  }, _data && _data.length > 0 && _data.map(performer => performer_grid_jsx(GridCard, {
    className: "performer-box",
    key: performer._id,
    performer: performer
  })));

  const {
    topBanners,
    rightBanners,
    bottomBanners
  } = banners;

  const renderGrid = () => {
    const {
      length
    } = data;

    if (length <= 12) {
      return performer_grid_jsx(external_antd_["Row"], {
        style: {
          width: '100%'
        }
      }, rightBanners && rightBanners.length > 0 ? performer_grid_jsx(external_react_["Fragment"], null, performer_grid_jsx(external_antd_["Col"], {
        lg: 16,
        md: 16,
        xs: 24
      }, performer_grid_jsx(external_antd_["Row"], null, data && data.length > 0 && data.map(performer => performer_grid_jsx(GridCard, {
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer
      })))), performer_grid_jsx(external_antd_["Col"], {
        lg: 8,
        md: 8,
        xs: 24
      }, performer_grid_jsx(layout_banner, {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        }
      }))) : data && data.length > 0 && data.map(performer => performer_grid_jsx(GridCard, {
        className: "performer-box",
        key: performer._id,
        performer: performer
      })));
    }

    if (length > 12 && length <= 24) {
      const dataChunk = Object(external_lodash_["chunk"])(data, 12);
      return performer_grid_jsx(external_react_["Fragment"], null, rightBanners && rightBanners.length > 0 ? performer_grid_jsx(external_react_["Fragment"], null, performer_grid_jsx(external_antd_["Row"], {
        style: {
          width: '100%'
        }
      }, performer_grid_jsx(external_antd_["Col"], {
        lg: 16,
        md: 16,
        xs: 24
      }, performer_grid_jsx(external_antd_["Row"], null, dataChunk[0] && dataChunk[0].length > 0 && dataChunk[0].map(performer => performer_grid_jsx(GridCard, {
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer
      })))), performer_grid_jsx(external_antd_["Col"], {
        lg: 8,
        md: 8,
        xs: 24
      }, rightBanners && rightBanners.length > 0 && performer_grid_jsx(layout_banner, {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        }
      }))), performer_grid_jsx(RowGrid, {
        _data: dataChunk[1]
      })) : performer_grid_jsx(RowGrid, {
        _data: data
      }));
    }

    if (length > 24 && length <= 36) {
      const dataChunk = Object(external_lodash_["chunk"])(data, 12);
      return performer_grid_jsx(external_react_["Fragment"], null, performer_grid_jsx(RowGrid, {
        _data: dataChunk[0]
      }), rightBanners && rightBanners.length > 0 ? performer_grid_jsx(external_antd_["Row"], {
        style: {
          width: '100%'
        }
      }, performer_grid_jsx(external_antd_["Col"], {
        xl: 16,
        lg: 18,
        md: 18,
        xs: 24
      }, performer_grid_jsx(external_antd_["Row"], null, dataChunk[1] && dataChunk[1].length > 0 && dataChunk[1].map(performer => performer_grid_jsx(GridCard, {
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer
      })))), performer_grid_jsx(external_antd_["Col"], {
        xl: 8,
        lg: 6,
        md: 6,
        xs: 24
      }, performer_grid_jsx(layout_banner, {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        }
      }))) : performer_grid_jsx(RowGrid, {
        _data: dataChunk[1]
      }), performer_grid_jsx(RowGrid, {
        _data: dataChunk[2]
      }));
    }

    if (length > 36) {
      const dataChunk = Object(external_lodash_["chunk"])(data, 12);
      const lastDataChunk = dataChunk.slice(3);
      return performer_grid_jsx(external_react_["Fragment"], null, performer_grid_jsx(RowGrid, {
        _data: dataChunk[0]
      }), rightBanners && rightBanners.length > 0 ? performer_grid_jsx(external_antd_["Row"], {
        style: {
          width: '100%'
        }
      }, performer_grid_jsx(external_antd_["Col"], {
        xl: 16,
        lg: 18,
        md: 18,
        xs: 24
      }, performer_grid_jsx(external_antd_["Row"], null, dataChunk[1] && dataChunk[1].length > 0 && dataChunk[1].map(performer => performer_grid_jsx(GridCard, {
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer
      })))), performer_grid_jsx(external_antd_["Col"], {
        xl: 8,
        lg: 6,
        md: 6,
        xs: 24
      }, performer_grid_jsx(layout_banner, {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        }
      }))) : performer_grid_jsx(RowGrid, {
        _data: dataChunk[1]
      }), performer_grid_jsx(RowGrid, {
        _data: dataChunk[2]
      }), lastDataChunk.length > 0 && lastDataChunk.map(v => performer_grid_jsx(RowGrid, {
        key: Object(string["b" /* generateUuid */])(),
        _data: v
      })));
    }

    return performer_grid_jsx(external_react_["Fragment"], null);
  };

  const actions = setFilter && total > 0 ? [total > limit && performer_grid_jsx(external_antd_["Pagination"], {
    disabled: searching,
    current: Math.round(offset / limit) + 1,
    pageSize: limit,
    total: total,
    size: "small",
    onChange: page => setFilter('offset', (page - 1) * limit),
    showSizeChanger: false
  })] : [];

  if (render) {
    /**
     */
    return performer_grid_jsx(external_antd_["Card"], {
      className: "performer-grid",
      title: title,
      bordered: false,
      hoverable: false,
      bodyStyle: {
        padding: '0'
      },
      actions: actions
    }, performer_grid_jsx(loader["a" /* default */], {
      spinning: searching
    }), data.length > 0 && data.map(performer => render(performer)));
  }

  return performer_grid_jsx(external_react_["Fragment"], null, isPage && (topBanners === null || topBanners === void 0 ? void 0 : topBanners.length) > 0 && performer_grid_jsx(layout_banner, {
    banners: topBanners,
    styleImage: {
      padding: '10px',
      width: '100%'
    }
  }), performer_grid_jsx(external_antd_["Card"], {
    className: "performer-grid",
    title: title,
    bordered: false,
    hoverable: false,
    bodyStyle: {
      padding: '0'
    },
    actions: actions
  }, performer_grid_jsx(loader["a" /* default */], {
    spinning: searching
  }), success // eslint-disable-next-line no-nested-ternary
  && (total > 0 ? isPage ? renderGrid() : data.map(performer => performer_grid_jsx(external_antd_["Col"], {
    xl: 6,
    md: 8,
    sm: 10,
    xs: 16,
    key: performer._id
  }, performer_grid_jsx(GridCard, {
    key: performer === null || performer === void 0 ? void 0 : performer._id,
    className: "performer-box",
    performer: performer
  }))) : performer_grid_jsx("div", {
    className: "ant-card-head"
  }, "No model found."))), isPage && (bottomBanners === null || bottomBanners === void 0 ? void 0 : bottomBanners.length) > 0 && performer_grid_jsx(layout_banner, {
    banners: bottomBanners,
    styleImage: {
      padding: '10px',
      width: '100%'
    }
  }));
};

PerformerGrid.defaultProps = {
  loggedIn: false,
  setFilter: null,
  limit: 0,
  offset: 0,
  total: 0,
  success: false,
  searching: false,
  title: '',
  onLike: null,
  render: null,
  isPage: false,
  banners: {},
  gridCard: null,
  placeholderAvatarUrl: ''
};

const bannerSelecter = state => state.banner.listBanners.data;

const filterBanner = Object(lib["c" /* createSelector */])(bannerSelecter, banners => {
  if (!banners.length) return {};
  return {
    topBanners: banners.filter(b => b.position === 'top'),
    rightBanners: banners.filter(b => b.position === 'right'),
    bottomBanners: banners.filter(b => b.position === 'bottom')
  };
});

const mapStates = state => ({
  placeholderAvatarUrl: state.ui.placeholderAvatarUrl,
  banners: filterBanner(state)
});

/* harmony default export */ var performer_grid = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStates)(PerformerGrid));

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

/***/ "FXlV":
/***/ (function(module, exports) {



/***/ }),

/***/ "Fks/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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

/***/ "IIIp":
/***/ (function(module, exports) {



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

/***/ "LV70":
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

// EXTERNAL MODULE: ./src/interfaces/index.ts
var interfaces = __webpack_require__("P8M3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/services/index.ts + 13 modules
var services = __webpack_require__("CLrh");

// EXTERNAL MODULE: ./src/socket/index.ts + 4 modules
var socket = __webpack_require__("AY7M");

// EXTERNAL MODULE: external "next-cookies"
var external_next_cookies_ = __webpack_require__("3i/4");
var external_next_cookies_default = /*#__PURE__*/__webpack_require__.n(external_next_cookies_);

// EXTERNAL MODULE: ./src/components/performer-assets/common/modal-buy-assets.tsx
var modal_buy_assets = __webpack_require__("04bX");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./src/components/products/product-card.tsx
var product_card = __webpack_require__("rq+8");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/components/performer-assets/product-carousel/product-carousel.less
var product_carousel = __webpack_require__("IIIp");

// CONCATENATED MODULE: ./src/components/performer-assets/product-carousel/index.tsx
var __jsx = external_react_["createElement"];







const Products = ({
  performer,
  products,
  searching,
  success,
  purchaseProduct
}) => {
  const ref = external_react_["useRef"](null);
  const [paddleShowing, setPaddleShowing] = external_react_["useState"](false);
  external_react_["useEffect"](() => {
    const productListElement = document.getElementsByClassName('product-list');

    if (productListElement.length && productListElement[0].clientWidth < productListElement[0].scrollWidth) {
      setPaddleShowing(true);
    }
  }, [performer]);

  const scrollTo = width => {
    const e = ref.current;
    e.scroll({
      left: width,
      behavior: 'smooth'
    });
  };

  return !searching && success && performer.products.length > 0 && __jsx("div", {
    className: "product-carousel"
  }, __jsx("div", {
    className: "product-header"
  }, __jsx("span", {
    className: "shop-name"
  }, `${performer.username}'s Shop`), __jsx(external_antd_["Button"], {
    type: "primary",
    onClick: () => {
      router_default.a.push(`/products?username=${performer.username}`);
    }
  }, "See all Items")), __jsx(icons_["LeftCircleFilled"], {
    className: "left-paddle paddle",
    hidden: !paddleShowing,
    onClick: () => scrollTo(-ref.current.clientWidth)
  }), __jsx("div", {
    className: "product-list",
    ref: ref
  }, performer.products.map(id => __jsx(external_antd_["Col"], {
    xl: 6,
    md: 8,
    sm: 10,
    xs: 16,
    key: id,
    className: "pad12-5"
  }, __jsx(product_card["a" /* default */], {
    key: id,
    product: products[id],
    onHandlePurchase: purchaseProduct
  })) // <PerformerProduct
  //   product={products[id]}
  //   key={id}
  //   purchaseProduct={purchaseProduct}
  // />
  )), __jsx(icons_["RightCircleFilled"], {
    hidden: !paddleShowing,
    className: "right-paddle paddle",
    onClick: () => scrollTo(ref.current.clientWidth)
  }));
};

Products.defaultProps = {
  purchaseProduct: null
};
/* harmony default export */ var performer_assets_product_carousel = (Products);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/lib/index.ts + 2 modules
var lib = __webpack_require__("psLn");

// EXTERNAL MODULE: ./src/components/common/layout/numberformat.tsx
var numberformat = __webpack_require__("TXU+");

// CONCATENATED MODULE: ./src/components/performer-assets/video-carousel/video-item.tsx
var video_item_jsx = external_react_default.a.createElement;







const generateToken = (token, isSale) => video_item_jsx(external_antd_["Tag"], {
  color: isSale ? lib["d" /* defaultColor */].primaryColor : lib["d" /* defaultColor */].successColor
}, isSale ? video_item_jsx(numberformat["a" /* default */], {
  value: token,
  suffix: " tokens"
}) : 'FREE');

/* harmony default export */ var video_item = (({
  video
}) => {
  var _video$video;

  return video_item_jsx("div", {
    className: "item"
  }, video_item_jsx("div", {
    className: "item-image",
    style: {
      backgroundImage: `url(${video.thumbnail || (video === null || video === void 0 ? void 0 : (_video$video = video.video) === null || _video$video === void 0 ? void 0 : _video$video.thumbnails[0]) || '/no-image.jpg'})`
    }
  }, video_item_jsx("div", {
    className: "value"
  }, generateToken(video.token, video.isSaleVideo)), video.isSaleVideo && !video.isBought && video_item_jsx("div", {
    className: "item-lock"
  }, video_item_jsx(icons_["LockOutlined"], null)), video.video && video.video.duration && video_item_jsx("div", {
    className: "item-duration ant-tag ant-tag-has-color"
  }, Object(lib["g" /* formatDuration */])(video.video.duration)), video_item_jsx(link_default.a, {
    shallow: false,
    href: {
      pathname: '/videos/detail',
      query: {
        id: video._id,
        data: JSON.stringify(video)
      }
    },
    as: `/video/${video._id}`
  }, video_item_jsx("a", null, video_item_jsx(icons_["PlayCircleOutlined"], {
    className: "icon-play"
  })))), video_item_jsx("div", {
    className: "item-title"
  }, video_item_jsx("span", {
    className: "item-name"
  }, video.title)));
});
// EXTERNAL MODULE: ./src/components/performer-assets/video-carousel/index.less
var video_carousel = __webpack_require__("0g3j");

// CONCATENATED MODULE: ./src/components/performer-assets/video-carousel/index.tsx
var video_carousel_jsx = external_react_["createElement"];






/* harmony default export */ var performer_assets_video_carousel = (({
  performer,
  videos,
  searching,
  success
}) => {
  const ref = external_react_["useRef"](null);
  const [paddleShowing, setPaddleShowing] = external_react_["useState"](false);
  external_react_["useEffect"](() => {
    const videoListElement = document.querySelector('.video-list');

    if (!videoListElement) {
      return;
    }

    if (videoListElement.clientWidth < videoListElement.scrollWidth) {
      setPaddleShowing(true);
    }
  }, [performer]);

  const scrollTo = width => {
    const e = ref.current;
    e.scroll({
      left: width,
      behavior: 'smooth'
    });
  };

  return !searching && success && performer.videos.length > 0 && video_carousel_jsx("div", {
    className: "video-carousel"
  }, video_carousel_jsx("div", {
    className: "video-header"
  }, video_carousel_jsx("span", {
    className: "shop-name"
  }, `${performer.username}'s Videos`), video_carousel_jsx(external_antd_["Button"], {
    type: "primary",
    onClick: () => {
      router_default.a.push(`/videos?username=${performer.username}`);
    }
  }, "See all Items")), video_carousel_jsx(icons_["LeftCircleFilled"], {
    className: "left-paddle paddle",
    hidden: !paddleShowing,
    onClick: () => scrollTo(-ref.current.clientWidth)
  }), video_carousel_jsx("div", {
    className: "video-list",
    ref: ref
  }, performer.videos.map(id => video_carousel_jsx(external_antd_["Col"], {
    xl: 6,
    md: 8,
    sm: 10,
    xs: 16,
    key: id,
    className: "pad12-5"
  }, video_carousel_jsx(video_item, {
    video: videos[id],
    key: id
  })))), video_carousel_jsx(icons_["RightCircleFilled"], {
    hidden: !paddleShowing,
    className: "right-paddle paddle",
    onClick: () => scrollTo(ref.current.clientWidth)
  }));
});
// EXTERNAL MODULE: ./src/components/galleries/gallery-card.tsx
var gallery_card = __webpack_require__("xRqz");

// EXTERNAL MODULE: ./src/components/performer-assets/gallery-carousel/index.less
var gallery_carousel = __webpack_require__("RKg3");

// CONCATENATED MODULE: ./src/components/performer-assets/gallery-carousel/index.tsx
var gallery_carousel_jsx = external_react_["createElement"];







const Gallery = ({
  performer,
  galleries,
  searching,
  success,
  purchaseGallery
}) => {
  const ref = external_react_["useRef"](null);
  const [paddleShowing, setPaddleShowing] = external_react_["useState"](false);
  external_react_["useEffect"](() => {
    const galleryListElement = document.getElementsByClassName('gallery-list');

    if (galleryListElement.length && galleryListElement[0].clientWidth < galleryListElement[0].scrollWidth) {
      setPaddleShowing(true);
    }
  }, [performer]);

  const scrollTo = width => {
    const e = ref.current;
    e.scroll({
      left: width,
      behavior: 'smooth'
    });
  };

  return !searching && success && performer.galleries.length > 0 && gallery_carousel_jsx("div", {
    className: "gallery-carousel"
  }, gallery_carousel_jsx("div", {
    className: "gallery-header"
  }, gallery_carousel_jsx("span", {
    className: "shop-name"
  }, `${performer.username}'s Galleries`), gallery_carousel_jsx(external_antd_["Button"], {
    type: "primary",
    onClick: () => {
      router_default.a.push(`/galleries?username=${performer.username}`);
    }
  }, "See all Items")), gallery_carousel_jsx(icons_["LeftCircleFilled"], {
    className: "left-paddle paddle",
    hidden: !paddleShowing,
    onClick: () => scrollTo(-ref.current.clientWidth)
  }), gallery_carousel_jsx("div", {
    className: "gallery-list",
    ref: ref
  }, performer.galleries.map(id => gallery_carousel_jsx(external_antd_["Col"], {
    xl: 6,
    md: 8,
    sm: 10,
    xs: 16,
    key: id,
    className: "pad12-5"
  }, gallery_carousel_jsx(gallery_card["a" /* default */], {
    gallery: galleries[id],
    key: id,
    onHandlePurchase: purchaseGallery
  })))), gallery_carousel_jsx(icons_["RightCircleFilled"], {
    hidden: !paddleShowing,
    className: "right-paddle paddle",
    onClick: () => scrollTo(ref.current.clientWidth)
  }));
};

Gallery.defaultProps = {
  purchaseGallery: null,
  galleries: null
};
/* harmony default export */ var performer_assets_gallery_carousel = (Gallery);
// EXTERNAL MODULE: ./src/components/performer/profile-card.tsx
var profile_card = __webpack_require__("xXdm");

// EXTERNAL MODULE: ./src/components/performer/performer-grid.tsx + 1 modules
var performer_grid = __webpack_require__("D+/t");

// EXTERNAL MODULE: ./src/components/performer/performer-carousel.less
var performer_carousel = __webpack_require__("vPHa");

// CONCATENATED MODULE: ./src/components/performer/performer-carousel.tsx
var performer_carousel_jsx = external_react_["createElement"];






/* harmony default export */ var performer_performer_carousel = (({
  performers,
  searching,
  success
}) => {
  const ref = external_react_["useRef"](null);
  const [paddleShowing, setPaddleShowing] = external_react_["useState"](false);
  external_react_["useEffect"](() => {
    const performerListElement = document.getElementsByClassName('performer-grid');

    if (performerListElement.length && performerListElement[0].clientWidth < performerListElement[0].scrollWidth) {
      setPaddleShowing(true);
    }
  }, [performers]);

  const scrollTo = width => {
    const e = ref.current;
    e.scroll({
      left: width,
      behavior: 'smooth'
    });
  };

  return !searching && success && performer_carousel_jsx("div", {
    className: "performer-carousel"
  }, performer_carousel_jsx("div", {
    className: "carousel-header"
  }, performer_carousel_jsx("span", {
    className: "carousel-title"
  }, "Related Cams"), performer_carousel_jsx(external_antd_["Button"], {
    type: "primary",
    onClick: () => router_default.a.push('/')
  }, "See all Items")), performer_carousel_jsx(icons_["LeftCircleFilled"], {
    className: "left-paddle paddle",
    hidden: !paddleShowing,
    onClick: () => scrollTo(-ref.current.clientWidth)
  }), performer_carousel_jsx(performer_grid["a" /* default */], {
    total: performers ? performers.length : 0,
    data: performers,
    success: success,
    searching: searching
  }), performer_carousel_jsx(icons_["RightCircleFilled"], {
    hidden: !paddleShowing,
    className: "right-paddle paddle",
    onClick: () => scrollTo(ref.current.clientWidth)
  }));
});
// EXTERNAL MODULE: ./src/components/streaming/header.tsx
var header = __webpack_require__("pENH");

// EXTERNAL MODULE: ./src/components/streaming/footer.tsx
var footer = __webpack_require__("NP7f");

// EXTERNAL MODULE: ./src/components/stream-chat/chat-box.tsx + 6 modules
var chat_box = __webpack_require__("L/eJ");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./src/antmedia/index.tsx
var antmedia = __webpack_require__("HQdG");

// EXTERNAL MODULE: ./src/antmedia/constants.ts
var constants = __webpack_require__("MoJi");

// EXTERNAL MODULE: external "video.js"
var external_video_js_ = __webpack_require__("AzSJ");
var external_video_js_default = /*#__PURE__*/__webpack_require__.n(external_video_js_);

// EXTERNAL MODULE: ./src/components/streaming/index.less
var streaming = __webpack_require__("LJzH");

// CONCATENATED MODULE: ./src/components/streaming/subscriber.tsx
var subscriber_jsx = external_react_["createElement"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable dot-notation */

/* eslint-disable camelcase */








const DEFAULT_OFFLINE_IMAGE_URL = '/offline.png';

class subscriber_Subscriber extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "streamId", void 0);

    _defineProperty(this, "activeStreams", []);

    _defineProperty(this, "getLiveStreamOrVodURLInterval", void 0);
  }

  componentDidMount() {
    window['player'] = external_video_js_default()('subscriber', {
      autoplay: true,
      liveui: true,
      controls: true,
      controlBar: {
        volumePanel: {
          inline: false
        }
      }
    });
    window['player'].error(null);
    window['player'].on('ended', this.ended.bind(this));
    window['player'].on('error', this.ended.bind(this));
  }

  componentWillUnmount() {
    this.getLiveStreamOrVodURLInterval && clearInterval(this.getLiveStreamOrVodURLInterval);
    window['player'] && window['player'].dispose();
  }

  async handler(info, obj) {
    const {
      webRTCAdaptor,
      settings
    } = this.props;

    if (info === constants["a" /* WEBRTC_ADAPTOR_INFORMATIONS */].INITIALIZED) {
      const token = await services["r" /* streamService */].getSubscriberToken({
        streamId: this.streamId,
        settings
      });
      webRTCAdaptor.play(this.streamId, token);
    } else if (info === constants["a" /* WEBRTC_ADAPTOR_INFORMATIONS */].NEW_STREAM_AVAILABLE) {
      const activeStream = this.activeStreams.find(id => id === obj.streamId);

      if (window['player']) {
        window['player'].dispose();
        window['player'] = undefined;
      }

      if (!activeStream) {
        this.activeStreams.push(obj.streamId);
        this.createRemoteVideo(obj.stream);
      }
    } else if (info === constants["a" /* WEBRTC_ADAPTOR_INFORMATIONS */].PLAY_FINISHED) {
      this.activeStreams = this.activeStreams.filter(id => id !== obj.streamId);
      this.removeRemoteVideo();

      if (!window['player']) {
        this.createPlaybackideo();
        window['player'].poster(settings.defaultOfflineModelImage || DEFAULT_OFFLINE_IMAGE_URL);
      }

      setTimeout(() => {
        webRTCAdaptor.getStreamInfo(obj.streamId);
      }, 3000);
    } else if (info === constants["a" /* WEBRTC_ADAPTOR_INFORMATIONS */].STREAM_INFORMATION) {
      if (obj.streamId === this.streamId) {
        const token = await services["r" /* streamService */].getSubscriberToken({
          streamId: obj.streamId,
          settings
        });
        webRTCAdaptor.play(obj.streamId, token);
      }
    }
  }

  createPlaybackideo() {
    const video = document.createElement('video');
    video.setAttribute('id', 'subscriber');
    video.setAttribute('class', 'video-js');
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    video.playsInline = true;
    document.querySelector('.video-container').append(video);
    window['player'] = external_video_js_default()('subscriber', {
      autoplay: true,
      liveui: true,
      controls: true,
      controlBar: {
        volumePanel: {
          inline: false
        }
      }
    });
    window['player'].on('ended', this.ended.bind(this));
    window['player'].on('error', this.ended.bind(this));
    window['player'].controls(false);
  }

  resetPlaybackVideo() {
    var _window$player;

    this.streamId = '';

    if ((_window$player = window['player']) !== null && _window$player !== void 0 && _window$player.src()) {
      window['player'].dispose();
      window['player'] = undefined;
      this.createPlaybackideo();
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
    window['player'] && window['player'].error(null);
    const {
      settings
    } = this.props;

    if (!this.streamId) {
      return;
    }

    const src = await services["r" /* streamService */].getLiveStreamOrVodURL({
      streamId: this.streamId,
      settings,
      appName: settings.AntMediaAppname
    });

    if (src) {
      this.getLiveStreamOrVodURLInterval = setInterval(() => {
        external_isomorphic_unfetch_default()(src, {
          method: 'HEAD'
        }).then(() => {
          this.playHLS(this.streamId);
          this.getLiveStreamOrVodURLInterval && clearInterval(this.getLiveStreamOrVodURLInterval);
        });
      }, 5000);
    }
  }

  createRemoteVideo(stream) {
    const video = document.createElement('video');
    video.setAttribute('id', 'subscriber');
    video.setAttribute('class', 'video-js');
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    video.playsInline = true;
    video.srcObject = stream;
    document.querySelector('.video-container').append(video);
  }

  removeRemoteVideo() {
    const video = document.getElementById('subscriber');

    if (video) {
      video.srcObject = null;
      document.querySelector('.video-container').removeChild(video);
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
      const token = await services["r" /* streamService */].getSubscriberToken({
        streamId,
        settings
      });
      webRTCAdaptor.play(streamId, token);
      return;
    }

    initWebRTCAdaptor(this.handler.bind(this), this.cbErrorHandler.bind(this));
  }

  async playHLS(streamId) {
    const {
      configs,
      settings
    } = this.props;
    const appName = configs.appName || settings.AntMediaAppname;
    this.streamId = streamId;
    this.getLiveStreamOrVodURLInterval && clearInterval(this.getLiveStreamOrVodURLInterval);
    const src = await services["r" /* streamService */].getLiveStreamOrVodURL({
      appName,
      settings,
      streamId
    });

    if (!src) {
      return;
    }

    if (!window['player']) {
      window['player'] = external_video_js_default()('subscriber', {
        autoplay: true,
        liveui: true,
        controls: true,
        controlBar: {
          volumePanel: {
            inline: false
          }
        }
      });
      window['player'].on('ended', this.ended.bind(this));
      window['player'].on('error', this.ended.bind(this));
    } // window['player'].addClass('vjs-waiting');


    setTimeout(() => {
      if (!window['player']) return;
      window['player'].src({
        type: 'application/x-mpegURL',
        src
      });
      window['player'].play();
      window['player'].controls(true);
    }, 1 * 1000);
  }

  stop() {
    this.streamId = '';
  }

  render() {
    const {
      classNames
    } = this.props;
    const videoProps = {
      id: 'subscriber',
      controls: true,
      className: external_classnames_default()('video-js', classNames),
      autoPlay: true,
      muted: true,
      playsInline: true,
      width: '100%'
    };
    return subscriber_jsx("div", {
      className: "video-container"
    }, subscriber_jsx("video", videoProps));
  }

}

/* harmony default export */ var subscriber = (Object(antmedia["a" /* default */])(subscriber_Subscriber));
// EXTERNAL MODULE: ./src/redux/stream-chat/actions.ts
var actions = __webpack_require__("gxiY");

// EXTERNAL MODULE: ./src/redux/performer/actions.ts
var performer_actions = __webpack_require__("WT8E");

// EXTERNAL MODULE: ./src/redux/user/actions.ts
var user_actions = __webpack_require__("x7is");

// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__("NsEo");

// EXTERNAL MODULE: external "http-status-codes"
var external_http_status_codes_ = __webpack_require__("LZqe");

// EXTERNAL MODULE: ./pages/stream/index.less
var stream = __webpack_require__("d8nf");

// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__("MWqi");

// CONCATENATED MODULE: ./src/redux/selectors.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { selectors_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function selectors_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const userSelecter = state => state.user.current;

const performerSelecter = state => state.performer.current;

const studioSelecter = state => state.studio.current;

const authSelecter = state => state.auth;

const currentUserSelecter = Object(external_reselect_["createSelector"])(userSelecter, performerSelecter, studioSelecter, authSelecter, (user, performer, studio, auth) => {
  if (!auth.loggedIn) return null;

  if (user !== null && user !== void 0 && user._id) {
    return _objectSpread(_objectSpread({}, user), {}, {
      role: 'user'
    });
  }

  if (performer !== null && performer !== void 0 && performer._id) {
    return _objectSpread(_objectSpread({}, performer), {}, {
      role: 'performer'
    });
  }

  if (studio !== null && studio !== void 0 && studio._id) {
    return _objectSpread(_objectSpread({}, studio), {}, {
      role: 'studio'
    });
  }

  return null;
});
// CONCATENATED MODULE: ./pages/stream/index.tsx
var stream_jsx = external_react_default.a.createElement;

function stream_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function stream_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { stream_ownKeys(Object(source), true).forEach(function (key) { stream_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { stream_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function stream_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable dot-notation */

























 // eslint-disable-next-line no-shadow

var PERFORMER_ASSETS_TYPE; // eslint-disable-next-line no-shadow

(function (PERFORMER_ASSETS_TYPE) {
  PERFORMER_ASSETS_TYPE["PRODUCT"] = "product";
  PERFORMER_ASSETS_TYPE["GALLERY"] = "gallery";
  PERFORMER_ASSETS_TYPE["VIDEO"] = "video";
})(PERFORMER_ASSETS_TYPE || (PERFORMER_ASSETS_TYPE = {}));

var STREAM_EVENT; // eslint-disable-next-line no-shadow

(function (STREAM_EVENT) {
  STREAM_EVENT["JOIN_BROADCASTER"] = "join-broadcaster";
  STREAM_EVENT["MODEL_LEFT"] = "model-left";
  STREAM_EVENT["ROOM_INFORMATIOM_CHANGED"] = "public-room-changed";
  STREAM_EVENT["MODEL_UPDATE_STREAMING_STATUS"] = "modelUpdateStreamingStatus";
  STREAM_EVENT["USER_LEFT_ROOM"] = "USER_LEFT_ROOM";
})(STREAM_EVENT || (STREAM_EVENT = {}));

var EVENT;

(function (EVENT) {
  EVENT["BLOCK_USERS"] = "nofify_users_block";
})(EVENT || (EVENT = {}));

const stream_DEFAULT_OFFLINE_IMAGE_URL = '/offline.png';
const DEFAULT_PRIVATE_IMAGE_URL = '/private.png';
const DEFAULT_GROUP_IMAGE_URL = '/group.png';
const DEFAULT_ONLINE_IMAGE_URL = '';

class stream_LivePage extends external_react_["PureComponent"] {
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
      } = external_next_cookies_default()(ctx);
      const headers = {
        Authorization: token
      };
      const resp = await services["k" /* performerService */].details(query.username, headers);
      const performer = resp.data;

      if (performer.isBlocked) {
        throw external_http_status_codes_["StatusCodes"].FORBIDDEN;
      }

      return {
        performer
      };
    } catch (e) {
      // const err = await PromisePurchaseItemModelresolve(e);
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

    stream_defineProperty(this, "subscrbierRef", void 0);

    stream_defineProperty(this, "buyAssetsRef", void 0);

    stream_defineProperty(this, "socket", void 0);

    stream_defineProperty(this, "onbeforeunload", () => {
      this.leavePublicRoom();
    });

    this.state = {
      poster: '',
      total: 0,
      members: []
    };
  }

  componentDidMount() {
    this.subscrbierRef = /*#__PURE__*/external_react_default.a.createRef();
    this.buyAssetsRef = /*#__PURE__*/external_react_default.a.createRef();
    const {
      performer,
      user
    } = this.props;

    if (!performer) {
      router_default.a.push('/');
      return;
    }

    if (user && user.role === 'performer') {
      router_default.a.push('/live');
      return;
    }

    if (user && user.role === 'studio') {
      router_default.a.push('/studio/account-settings');
      return;
    }

    this.socket = this.context;
    router_default.a.events.on('routeChangeStart', this.onbeforeunload);
    window.addEventListener('beforeunload', this.onbeforeunload);
    this.initProfilePage();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      poster
    } = this.state;
    const {
      performer,
      data,
      activeConversation
    } = this.props;

    if (poster !== prevState.poster) {
      window['player'] && window['player'].poster(poster);
    }

    if (data && data.isBlocked) {
      router_default.a.push('/403');
      return;
    }

    if (performer && performer._id !== prevProps.performer._id) {
      this.initProfilePage();
    }

    if (prevProps.activeConversation !== activeConversation) {
      var _prevProps$activeConv;

      ((_prevProps$activeConv = prevProps.activeConversation) === null || _prevProps$activeConv === void 0 ? void 0 : _prevProps$activeConv._id) && this.socket.emit('public-stream/leave', {
        conversationId: prevProps.activeConversation._id
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    router_default.a.events.off('routeChangeStart', this.onbeforeunload);
  }

  onChange({
    total,
    members,
    conversationId
  }) {
    var _activeConversation$d;

    const {
      activeConversation
    } = this.props;

    if ((activeConversation === null || activeConversation === void 0 ? void 0 : (_activeConversation$d = activeConversation.data) === null || _activeConversation$d === void 0 ? void 0 : _activeConversation$d._id) === conversationId) {
      this.setState({
        total,
        members
      });
    }
  }

  onBoughtAssetSuccess(type, id, payload) {
    const {
      updatePerformerAsset: dispatchUpdatePerformerAsset
    } = this.props;
    dispatchUpdatePerformerAsset({
      type,
      id,
      payload
    });
  }

  setPoster(status) {
    const {
      settings
    } = this.props;

    switch (status) {
      case 'private':
        this.setState({
          poster: settings.defaultPrivateCallImage || DEFAULT_PRIVATE_IMAGE_URL
        });
        break;

      case 'offline':
        window['player'] && window['player'].controls(false);
        window['player'] && window['player'].reset();
        this.setState({
          poster: settings.defaultOfflineModelImage || stream_DEFAULT_OFFLINE_IMAGE_URL
        });
        break;

      case 'public':
        this.setState({
          poster: DEFAULT_ONLINE_IMAGE_URL
        });
        break;

      case 'group':
        this.setState({
          poster: settings.defaultGroupChatImage || DEFAULT_GROUP_IMAGE_URL
        });
        break;

      default:
        this.setState({
          poster: settings.defaultOfflineModelImage || stream_DEFAULT_OFFLINE_IMAGE_URL
        });
        break;
    }
  }

  async joinPeformerPublicRoom() {
    const {
      performer,
      loadStreamMessages: dispatchLoadStreamMessages,
      getStreamConversationSuccess: dispatchGetStreamConversationSuccess
    } = this.props;

    if (performer) {
      try {
        // this.setState({ loading: true })
        const resp = await services["f" /* messageService */].findPublicConversationPerformer(performer._id);
        const conversation = resp.data;

        if (conversation && conversation._id) {
          dispatchGetStreamConversationSuccess({
            data: conversation
          });
          dispatchLoadStreamMessages({
            conversationId: conversation._id,
            limit: 25,
            offset: 0,
            type: conversation.type
          });
          this.socket = this.context;
          this.socket && this.socket.emit('public-stream/join', {
            conversationId: conversation._id
          });
        } else {
          throw new Promise(resolve => resolve('No available broadcast. Try again later'));
        }
      } catch (e) {
        const error = await Promise.resolve(e);
        external_antd_["message"].error(Object(utils["h" /* getResponseError */])(error));
      } finally {// this.setState({ loading: false});
      }
    }
  }

  initProfilePage() {
    var _this$subscrbierRef$c;

    const {
      performer,
      performer: {
        streamingStatus
      },
      getPerformerDetails: dispatchGetPerformerDetail
    } = this.props;
    (_this$subscrbierRef$c = this.subscrbierRef.current) === null || _this$subscrbierRef$c === void 0 ? void 0 : _this$subscrbierRef$c.resetPlaybackVideo();
    this.setPoster(streamingStatus);
    const content = document.querySelector('.content');
    content.scroll({
      top: 0,
      behavior: 'auto'
    });
    dispatchGetPerformerDetail(performer);
    this.inscreaseView();
    this.joinPeformerPublicRoom();
  }

  async subscribe({
    performerId
  }) {
    try {
      const {
        settings: {
          optionForBroadcast
        },
        performer
      } = this.props;

      if (performer._id !== performerId) {
        return;
      }

      const resp = await services["r" /* streamService */].joinPublicChat(performerId);
      const {
        sessionId
      } = resp.data;

      if (optionForBroadcast === interfaces["HLS"]) {
        var _this$subscrbierRef$c2;

        (_this$subscrbierRef$c2 = this.subscrbierRef.current) === null || _this$subscrbierRef$c2 === void 0 ? void 0 : _this$subscrbierRef$c2.playHLS(sessionId);
      } else if (optionForBroadcast === interfaces["WEBRTC"]) {
        var _this$subscrbierRef$c3;

        (_this$subscrbierRef$c3 = this.subscrbierRef.current) === null || _this$subscrbierRef$c3 === void 0 ? void 0 : _this$subscrbierRef$c3.play(sessionId);
      }
    } catch (err) {
      const error = await Promise.resolve(err);
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(error));
    }
  }

  leavePublicRoom() {
    var _activeConversation$d2;

    if (window['player']) {
      window['player'].reset();
      window['player'].poster('');
    }

    const {
      activeConversation,
      resetStreamMessage: dispatchResetStreamMessage
    } = this.props;
    dispatchResetStreamMessage();

    if (this.socket && activeConversation !== null && activeConversation !== void 0 && (_activeConversation$d2 = activeConversation.data) !== null && _activeConversation$d2 !== void 0 && _activeConversation$d2._id) {
      this.socket.emit('public-stream/leave', {
        conversationId: activeConversation.data._id
      });
    }

    this.setState({
      poster: '',
      total: 0,
      members: []
    });
  }

  modelLeftHandler({
    performerId
  }) {
    var _this$subscrbierRef$c4;

    const {
      performer
    } = this.props;

    if (performerId !== performer._id) {
      return;
    }

    (_this$subscrbierRef$c4 = this.subscrbierRef.current) === null || _this$subscrbierRef$c4 === void 0 ? void 0 : _this$subscrbierRef$c4.stop();
    external_antd_["message"].info('Model has left the room!');
  }

  async showAssetToBuy(type, item) {
    const {
      isBought,
      isSale,
      name,
      type: itemType
    } = item;

    switch (type) {
      case 'gallery':
        if (isBought || !isSale) {
          router_default.a.push({
            pathname: '/photos',
            query: {
              data: JSON.stringify(item),
              id: item._id
            }
          }, `/photos/${item._id}`);
          return;
        }

        break;

      case 'product':
        if (isBought && itemType === 'digital') {
          external_antd_["message"].info(`You have purchased ${name} already. Please check your email!`);
          return;
        }

        break;

      default:
        break;
    }

    this.buyAssetsRef.showModalBuyAssets(item, type);
  }

  userBlockHandler({
    performerId
  }) {
    const {
      performer
    } = this.props;

    if (performerId === performer._id) {
      router_default.a.push('/403');
    }
  }

  modelUpdateStreamingStatusHander({
    status,
    id
  }) {
    const {
      performer
    } = this.props;

    if (id === performer._id) {
      this.setPoster(status);
    }
  }

  async inscreaseView() {
    try {
      const {
        performer: {
          _id: id
        }
      } = this.props;
      await services["k" /* performerService */].increaseView(id); // eslint-disable-next-line no-empty
    } catch {}
  }

  userLeftRoomHandle({
    username,
    conversationId
  }) {
    var _activeConversation$d3;

    const {
      activeConversation
    } = this.props;

    if ((activeConversation === null || activeConversation === void 0 ? void 0 : (_activeConversation$d3 = activeConversation.data) === null || _activeConversation$d3 === void 0 ? void 0 : _activeConversation$d3._id) === conversationId) {
      const {
        total,
        members
      } = this.state;
      const leftMemberIndex = members.findIndex(m => m.username === username);

      if (leftMemberIndex > -1) {
        this.setState({
          total: total - 1,
          members: members.splice(leftMemberIndex, 1)
        });
      }
    }
  }

  render() {
    const {
      performer,
      data,
      searching,
      success,
      products,
      videos,
      galleries,
      ui
    } = this.props;
    const {
      members,
      total
    } = this.state;
    return stream_jsx(external_react_default.a.Fragment, null, stream_jsx(head_default.a, null, stream_jsx("title", null, `${ui === null || ui === void 0 ? void 0 : ui.siteName} | ${performer === null || performer === void 0 ? void 0 : performer.username}`)), stream_jsx(socket["a" /* Event */], {
      event: STREAM_EVENT.JOIN_BROADCASTER,
      handler: this.subscribe.bind(this)
    }), stream_jsx(socket["a" /* Event */], {
      event: STREAM_EVENT.MODEL_LEFT,
      handler: this.modelLeftHandler.bind(this)
    }), stream_jsx(socket["a" /* Event */], {
      event: STREAM_EVENT.USER_LEFT_ROOM,
      handler: this.userLeftRoomHandle.bind(this)
    }), stream_jsx(socket["a" /* Event */], {
      event: STREAM_EVENT.ROOM_INFORMATIOM_CHANGED,
      handler: this.onChange.bind(this)
    }), stream_jsx(socket["a" /* Event */], {
      event: EVENT.BLOCK_USERS,
      handler: this.userBlockHandler.bind(this)
    }), stream_jsx(socket["a" /* Event */], {
      event: STREAM_EVENT.MODEL_UPDATE_STREAMING_STATUS,
      handler: this.modelUpdateStreamingStatusHander.bind(this)
    }), stream_jsx("div", {
      className: "profile-page"
    }, stream_jsx(modal_buy_assets["a" /* default */] // eslint-disable-next-line no-return-assign
    , _extends({
      ref: ref => this.buyAssetsRef = ref,
      onSucess: this.onBoughtAssetSuccess.bind(this)
    }, this.props)), stream_jsx(header["a" /* default */], this.props), stream_jsx(external_antd_["Row"], {
      className: "streaming-container"
    }, stream_jsx(external_antd_["Col"], {
      md: 13,
      xs: 24
    }, stream_jsx(subscriber, _extends({}, this.props, {
      ref: this.subscrbierRef,
      configs: {
        isPlayMode: true
      }
    })), stream_jsx(footer["a" /* default */], this.props)), stream_jsx(external_antd_["Col"], {
      md: 11,
      xs: 24
    }, stream_jsx(chat_box["a" /* default */], _extends({}, this.props, {
      members: members,
      totalParticipant: total
    })))), stream_jsx(external_antd_["Row"], {
      gutter: [{
        sm: 25,
        xs: 0
      }, {
        sm: 10,
        xs: 25
      }]
    }, stream_jsx(external_antd_["Col"], {
      xs: {
        span: 24
      },
      lg: {
        span: 8
      }
    }, stream_jsx(profile_card["a" /* default */], {
      placeholderAvatarUrl: ui === null || ui === void 0 ? void 0 : ui.placeholderAvatarUrl,
      performer: stream_objectSpread(stream_objectSpread({}, performer), data),
      searching: searching,
      success: success
    })), stream_jsx(external_antd_["Col"], {
      xs: {
        span: 24
      },
      lg: {
        span: 16
      }
    }, stream_jsx(performer_assets_product_carousel, {
      performer: data,
      products: products,
      searching: searching,
      success: success,
      purchaseProduct: this.showAssetToBuy.bind(this, 'product')
    }), stream_jsx(performer_assets_video_carousel, {
      performer: data,
      videos: videos,
      searching: searching,
      success: success
    }), stream_jsx(performer_assets_gallery_carousel, {
      performer: data,
      galleries: galleries,
      searching: searching,
      success: success,
      purchaseGallery: this.showAssetToBuy.bind(this, 'gallery')
    }), stream_jsx(performer_performer_carousel, _extends({
      performers: data && data.relatedPerformers
    }, this.props))))));
  }

}

stream_defineProperty(stream_LivePage, "authenticate", false);

stream_LivePage.contextType = socket["c" /* SocketContext */];

const mapStateToProps = state => stream_objectSpread(stream_objectSpread(stream_objectSpread({
  ui: state.ui
}, state.streaming), state.performer.performerDetails), {}, {
  user: currentUserSelecter(state),
  loggedIn: state.auth.loggedIn,
  activeConversation: state.streamMessage.activeConversation
});

const mapDispatch = {
  loadStreamMessages: actions["h" /* loadStreamMessages */],
  getStreamConversationSuccess: actions["e" /* getStreamConversationSuccess */],
  receiveStreamMessageSuccess: actions["j" /* receiveStreamMessageSuccess */],
  resetStreamMessage: actions["l" /* resetStreamMessage */],
  resetAllStreamMessage: actions["k" /* resetAllStreamMessage */],
  updateCurrentUserBalance: user_actions["o" /* updateCurrentUserBalance */],
  getPerformerDetails: performer_actions["z" /* getPerformerDetails */],
  updatePerformerAsset: performer_actions["bb" /* updatePerformerAsset */]
};
/* harmony default export */ var pages_stream = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatch)(stream_LivePage));

/***/ }),

/***/ "LZqe":
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ "MBoG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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

/***/ "N+aS":
/***/ (function(module, exports) {



/***/ }),

/***/ "NP7f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _footer_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("N+aS");
/* harmony import */ var _footer_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fsrY");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NsEo");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_common_base_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Acen");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("CLrh");
/* harmony import */ var _components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("TXU+");
/* harmony import */ var _tip_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("+8Hy");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-return-assign */











const btnStyle = {
  height: 50,
  marginBottom: 1
};

const Footer = ({
  activeConversation,
  performer,
  loggedIn,
  inGroupChat,
  inPrivateChat,
  user,
  updateCurrentUserBalance,
  settings
}) => {
  const tipPopupRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  let contentRef;
  const {
    username,
    _id
  } = performer;
  const [tipping, setTipping] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const [disableOk, setDisableOk] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  const handleError = async e => {
    const error = await Promise.resolve(e);
    antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_5__[/* getResponseError */ "h"])(error));
  };

  const goChatRoom = roomName => {
    if (!Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_5__[/* checkUserLogin */ "b"])(loggedIn, user)) {
      if (false) {}

      return;
    }

    const option = roomName === 'privatechat' ? src_constants__WEBPACK_IMPORTED_MODULE_1__[/* SETTING_KEYS */ "a"].OPTION_FOR_PRIVATE : src_constants__WEBPACK_IMPORTED_MODULE_1__[/* SETTING_KEYS */ "a"].OPTION_FOR_GROUP;
    const path = settings[option] === 'webrtc' ? 'webrtc/' : '';
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
      pathname: `/stream/${path}${roomName}`,
      query: {
        username,
        performer: JSON.stringify(performer)
      }
    }, `/stream/${path}${roomName}/${username}`);
  };

  const getMoreTokens = () => {
    if (!Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_5__[/* checkUserLogin */ "b"])(loggedIn, user)) {
      if (false) {}

      return;
    }

    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/account/user/funds-tokens');
  };

  const sendTip = () => {
    if (!Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_5__[/* checkUserLogin */ "b"])(loggedIn, user)) {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(`Please login to send tip to ${username}!`);
      return;
    }

    tipPopupRef.current && tipPopupRef.current.setVisible(true);
  };

  const onOk = async () => {
    var _activeConversation$d;

    if (activeConversation !== null && activeConversation !== void 0 && (_activeConversation$d = activeConversation.data) !== null && _activeConversation$d !== void 0 && _activeConversation$d._id) {
      const ref = tipPopupRef.current;

      try {
        setTipping(true);
        const token = contentRef ? contentRef.getValueToken() : 0;
        if (parseInt(token, 10) <= 0) return;
        await src_services__WEBPACK_IMPORTED_MODULE_8__[/* transactionService */ "t"].sendTipToken(_id, token, activeConversation.data._id);
        ref && ref.setVisible(false);
        updateCurrentUserBalance && updateCurrentUserBalance(-token);

        const content = __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
          value: token,
          prefix: "You sent ",
          suffix: " tokens"
        });

        antd__WEBPACK_IMPORTED_MODULE_3__["message"].success(content);
      } catch (e) {
        handleError(e);
      } finally {
        setTipping(false);
        ref && ref.setVisible(false);
      }
    }
  };

  return __jsx("div", {
    className: "stream-footer"
  }, __jsx(_components_common_base_popup__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: `Tips to ${username}`,
    okButtonProps: {
      disabled: disableOk
    },
    content: __jsx(_tip_content__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      ref: ref => contentRef = ref,
      setDisableOk: setDisableOk
    }),
    ref: tipPopupRef,
    loading: tipping,
    onOk: onOk,
    width: 567
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [1, 1],
    style: {
      marginBottom: '15px',
      marginTop: '1px'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 6,
    xs: 12,
    md: 12
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: inGroupChat,
    type: "primary",
    style: _objectSpread({}, btnStyle),
    onClick: () => goChatRoom('groupchat'),
    block: true,
    icon: __jsx("img", {
      className: "anticon",
      src: "/icons/group.svg",
      height: 16,
      alt: ""
    })
  }, "Group Chat")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 6,
    xs: 12,
    md: 12
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: inPrivateChat,
    type: "primary",
    style: _objectSpread({}, btnStyle),
    onClick: () => goChatRoom('privatechat'),
    block: true,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UserOutlined"], null)
  }, "Private Chat")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 6,
    xs: 12,
    md: 12
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    style: _objectSpread({}, btnStyle),
    block: true,
    onClick: () => getMoreTokens(),
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CrownOutlined"], null)
  }, "Top-up My Tokens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 6,
    xs: 12,
    md: 12
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    style: _objectSpread({}, btnStyle),
    onClick: () => sendTip(),
    block: true,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PlusCircleOutlined"], null)
  }, "Send Tip"))));
};

Footer.defaultProps = {
  updateCurrentUserBalance: null,
  inGroupChat: false,
  inPrivateChat: false
};
/* harmony default export */ __webpack_exports__["a"] = (Footer);

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

/***/ "P8M3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("t2tm");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_redux__WEBPACK_IMPORTED_MODULE_0__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _redux__WEBPACK_IMPORTED_MODULE_0__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_redux__WEBPACK_IMPORTED_MODULE_0__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _redux__WEBPACK_IMPORTED_MODULE_0__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_redux__WEBPACK_IMPORTED_MODULE_0__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _redux__WEBPACK_IMPORTED_MODULE_0__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_redux__WEBPACK_IMPORTED_MODULE_0__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _redux__WEBPACK_IMPORTED_MODULE_0__["paymentAccountTypes"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8wR9");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_utils__WEBPACK_IMPORTED_MODULE_1__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_utils__WEBPACK_IMPORTED_MODULE_1__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_utils__WEBPACK_IMPORTED_MODULE_1__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_utils__WEBPACK_IMPORTED_MODULE_1__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["paymentAccountTypes"]; });

/* harmony import */ var _ui_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zVAr");
/* harmony import */ var _ui_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_ui_config__WEBPACK_IMPORTED_MODULE_2__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _ui_config__WEBPACK_IMPORTED_MODULE_2__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_ui_config__WEBPACK_IMPORTED_MODULE_2__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _ui_config__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_ui_config__WEBPACK_IMPORTED_MODULE_2__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _ui_config__WEBPACK_IMPORTED_MODULE_2__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_ui_config__WEBPACK_IMPORTED_MODULE_2__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _ui_config__WEBPACK_IMPORTED_MODULE_2__["paymentAccountTypes"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h1hT");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lRMd");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_auth__WEBPACK_IMPORTED_MODULE_4__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _auth__WEBPACK_IMPORTED_MODULE_4__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_auth__WEBPACK_IMPORTED_MODULE_4__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _auth__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_auth__WEBPACK_IMPORTED_MODULE_4__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _auth__WEBPACK_IMPORTED_MODULE_4__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_auth__WEBPACK_IMPORTED_MODULE_4__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _auth__WEBPACK_IMPORTED_MODULE_4__["paymentAccountTypes"]; });

/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MBoG");
/* harmony import */ var _performer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4WNP");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2UW8");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_setting__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_setting__WEBPACK_IMPORTED_MODULE_7__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _setting__WEBPACK_IMPORTED_MODULE_7__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_setting__WEBPACK_IMPORTED_MODULE_7__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _setting__WEBPACK_IMPORTED_MODULE_7__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_setting__WEBPACK_IMPORTED_MODULE_7__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _setting__WEBPACK_IMPORTED_MODULE_7__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_setting__WEBPACK_IMPORTED_MODULE_7__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _setting__WEBPACK_IMPORTED_MODULE_7__["paymentAccountTypes"]; });

/* harmony import */ var _performer_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wnub");
/* harmony import */ var _performer_categories__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_performer_categories__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_performer_categories__WEBPACK_IMPORTED_MODULE_8__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _performer_categories__WEBPACK_IMPORTED_MODULE_8__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_performer_categories__WEBPACK_IMPORTED_MODULE_8__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _performer_categories__WEBPACK_IMPORTED_MODULE_8__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_performer_categories__WEBPACK_IMPORTED_MODULE_8__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _performer_categories__WEBPACK_IMPORTED_MODULE_8__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_performer_categories__WEBPACK_IMPORTED_MODULE_8__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _performer_categories__WEBPACK_IMPORTED_MODULE_8__["paymentAccountTypes"]; });

/* harmony import */ var _peformer_assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("yrd7");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("YRlR");
/* harmony import */ var _favourite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Fks/");
/* harmony import */ var _token_package__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("ikA6");
/* harmony import */ var _token_package__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_token_package__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_token_package__WEBPACK_IMPORTED_MODULE_12__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _token_package__WEBPACK_IMPORTED_MODULE_12__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_token_package__WEBPACK_IMPORTED_MODULE_12__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _token_package__WEBPACK_IMPORTED_MODULE_12__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_token_package__WEBPACK_IMPORTED_MODULE_12__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _token_package__WEBPACK_IMPORTED_MODULE_12__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_token_package__WEBPACK_IMPORTED_MODULE_12__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _token_package__WEBPACK_IMPORTED_MODULE_12__["paymentAccountTypes"]; });

/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ZZ9b");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_transaction__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_transaction__WEBPACK_IMPORTED_MODULE_13__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _transaction__WEBPACK_IMPORTED_MODULE_13__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_transaction__WEBPACK_IMPORTED_MODULE_13__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _transaction__WEBPACK_IMPORTED_MODULE_13__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_transaction__WEBPACK_IMPORTED_MODULE_13__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _transaction__WEBPACK_IMPORTED_MODULE_13__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_transaction__WEBPACK_IMPORTED_MODULE_13__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _transaction__WEBPACK_IMPORTED_MODULE_13__["paymentAccountTypes"]; });

/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("+PMe");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_order__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_order__WEBPACK_IMPORTED_MODULE_14__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _order__WEBPACK_IMPORTED_MODULE_14__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_order__WEBPACK_IMPORTED_MODULE_14__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _order__WEBPACK_IMPORTED_MODULE_14__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_order__WEBPACK_IMPORTED_MODULE_14__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _order__WEBPACK_IMPORTED_MODULE_14__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_order__WEBPACK_IMPORTED_MODULE_14__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _order__WEBPACK_IMPORTED_MODULE_14__["paymentAccountTypes"]; });

/* harmony import */ var _refund_request__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("+wvd");
/* harmony import */ var _refund_request__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_refund_request__WEBPACK_IMPORTED_MODULE_15__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_refund_request__WEBPACK_IMPORTED_MODULE_15__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _refund_request__WEBPACK_IMPORTED_MODULE_15__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_refund_request__WEBPACK_IMPORTED_MODULE_15__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _refund_request__WEBPACK_IMPORTED_MODULE_15__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_refund_request__WEBPACK_IMPORTED_MODULE_15__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _refund_request__WEBPACK_IMPORTED_MODULE_15__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_refund_request__WEBPACK_IMPORTED_MODULE_15__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _refund_request__WEBPACK_IMPORTED_MODULE_15__["paymentAccountTypes"]; });

/* harmony import */ var _payout_request__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("W2TB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _payout_request__WEBPACK_IMPORTED_MODULE_16__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _payout_request__WEBPACK_IMPORTED_MODULE_16__["b"]; });

/* harmony import */ var _studio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("gfZs");
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("jgQt");
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_banner__WEBPACK_IMPORTED_MODULE_18__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_banner__WEBPACK_IMPORTED_MODULE_18__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _banner__WEBPACK_IMPORTED_MODULE_18__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_banner__WEBPACK_IMPORTED_MODULE_18__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _banner__WEBPACK_IMPORTED_MODULE_18__["WEBRTC"]; });

/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("rddh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HLS", function() { return _stream__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _stream__WEBPACK_IMPORTED_MODULE_19__["b"]; });






















/***/ }),

/***/ "RKg3":
/***/ (function(module, exports) {



/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TW7V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Abbm");
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_less__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Loader = ({
  spinning = false,
  fullScreen = false
}) => __jsx("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('loader', {
    hidden: !spinning,
    fullScreen
  })
}, __jsx("div", {
  className: "warpper"
}, __jsx("div", {
  className: "text"
}, __jsx("img", {
  src: "/loading-ico.gif",
  width: "65px",
  alt: ""
}))));

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "TXU+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const NumberFormat = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "uM63", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("uM63")],
    modules: ['react-number-format']
  }
});
/* harmony default export */ __webpack_exports__["a"] = (_ref => {
  let {
    decimalScale
  } = _ref,
      props = _objectWithoutProperties(_ref, ["decimalScale"]);

  return __jsx(NumberFormat, _extends({}, props, {
    displayType: "text",
    decimalScale: decimalScale || 2,
    decimalSeparator: ",",
    thousandSeparator: "."
  }));
});

/***/ }),

/***/ "UTbA":
/***/ (function(module, exports) {



/***/ }),

/***/ "VUsV":
/***/ (function(module, exports) {



/***/ }),

/***/ "Vp32":
/***/ (function(module, exports) {



/***/ }),

/***/ "W2TB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAYMENT_ACCOUNT; });
/* unused harmony export BANKING_SOURCE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return paymentAccountTypes; });
/* unused harmony export PAYOUT_STATUS */
/* eslint-disable no-shadow */
let PAYMENT_ACCOUNT;

(function (PAYMENT_ACCOUNT) {
  PAYMENT_ACCOUNT["WIRE"] = "wire";
  PAYMENT_ACCOUNT["PAYPAL"] = "paypal";
  PAYMENT_ACCOUNT["ISSUE"] = "issue_check_us";
  PAYMENT_ACCOUNT["DEPOSIT"] = "deposit";
  PAYMENT_ACCOUNT["PAYONNEER"] = "payoneer";
  PAYMENT_ACCOUNT["BITPAY"] = "bitpay";
  PAYMENT_ACCOUNT["PAXUM"] = "paxum";
})(PAYMENT_ACCOUNT || (PAYMENT_ACCOUNT = {}));

let BANKING_SOURCE;

(function (BANKING_SOURCE) {
  BANKING_SOURCE["PERFORMER"] = "performer";
  BANKING_SOURCE["STUDIO"] = "studio";
})(BANKING_SOURCE || (BANKING_SOURCE = {}));

const paymentAccountTypes = [{
  value: 'wire',
  title: 'Wire Transfer (Free)'
}, {
  value: 'paypal',
  title: 'Paypal'
}, {
  value: 'issue_check_us',
  title: 'Issue Check (U.S. Only)'
}, {
  value: 'deposit',
  title: 'Direct Deposit'
}, {
  value: 'payoneer',
  title: 'Payoneer'
}, {
  value: 'bitpay',
  title: 'Bitpay'
}];
let PAYOUT_STATUS;

(function (PAYOUT_STATUS) {
  PAYOUT_STATUS["PENDING"] = "pending";
  PAYOUT_STATUS["APPROVED"] = "approved";
  PAYOUT_STATUS["REJECTED"] = "rejected";
  PAYOUT_STATUS["DONE"] = "done";
})(PAYOUT_STATUS || (PAYOUT_STATUS = {}));

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

/***/ "YRlR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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

/***/ "ZZ9b":
/***/ (function(module, exports) {



/***/ }),

/***/ "aE3C":
/***/ (function(module, exports) {



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

/***/ "d8nf":
/***/ (function(module, exports) {



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

/***/ "gfZs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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

/***/ "h1hT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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

/***/ "ikA6":
/***/ (function(module, exports) {



/***/ }),

/***/ "jgQt":
/***/ (function(module, exports) {



/***/ }),

/***/ "kpM1":
/***/ (function(module, exports) {



/***/ }),

/***/ "lRMd":
/***/ (function(module, exports) {



/***/ }),

/***/ "men7":
/***/ (function(module, exports) {



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

/***/ "pENH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_base_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1Bbz");
/* harmony import */ var _components_common_base_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Acen");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("psLn");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("CLrh");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NsEo");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("TXU+");
/* harmony import */ var _tip_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("+8Hy");
/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Vp32");
/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_header_less__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const btnStyle = {
  height: 35,
  margin: 8
};
/* harmony default export */ __webpack_exports__["a"] = (({
  performer,
  ui,
  loggedIn,
  user,
  updateCurrentUserBalance,
  activeConversation
}) => {
  const tipPopupRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  let contentRef;
  const {
    _id,
    username
  } = performer;
  const [isFavorite, setIsFavorite] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(performer.isFavorite || false);
  const [disableOk, setDisableOk] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [tipping, setTipping] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleError = async e => {
    const error = await Promise.resolve(e);
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_7__[/* getResponseError */ "h"])(error));
  };

  const onLike = async () => {
    if (!Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_7__[/* checkUserLogin */ "b"])(loggedIn, user)) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Please login to add favorite!');
      return;
    }

    try {
      await src_services__WEBPACK_IMPORTED_MODULE_6__[/* favouriteService */ "d"].favorite(_id, isFavorite);
      setIsFavorite(!isFavorite);
    } catch (e) {
      handleError(e);
    }
  };

  const sendGift = () => {
    if (!Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_7__[/* checkUserLogin */ "b"])(loggedIn, user)) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`Please login to send gift to ${username}!`);
    }
  };

  const notify = () => {
    if (!Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_7__[/* checkUserLogin */ "b"])(loggedIn, user)) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`Please login to notify ${username}!`);
    }
  };

  const sendMessage = () => {
    if (!Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_7__[/* checkUserLogin */ "b"])(loggedIn, user)) {
      if (false) {}

      return;
    }

    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
      pathname: '/messages',
      query: {
        toSource: 'performer',
        toId: _id || ''
      }
    });
  };

  const sendTip = () => {
    if (!Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_7__[/* checkUserLogin */ "b"])(loggedIn, user)) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`Please login to send tip to ${username}!`);
      return;
    }

    tipPopupRef.current && tipPopupRef.current.setVisible(true);
  };

  const onOk = async () => {
    var _activeConversation$d;

    if (activeConversation !== null && activeConversation !== void 0 && (_activeConversation$d = activeConversation.data) !== null && _activeConversation$d !== void 0 && _activeConversation$d._id) {
      const ref = tipPopupRef.current;

      try {
        setTipping(true);
        const token = contentRef ? contentRef.getValueToken() : 0;
        if (parseInt(token, 10) <= 0) return;
        await src_services__WEBPACK_IMPORTED_MODULE_6__[/* transactionService */ "t"].sendTipToken(_id, token, activeConversation.data._id);
        ref && ref.setVisible(false);
        updateCurrentUserBalance && updateCurrentUserBalance(-token);

        const content = __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
          value: token,
          prefix: "You sent ",
          suffix: " tokens"
        });

        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(content);
      } catch (e) {
        handleError(e);
      } finally {
        setTipping(false);
        ref && ref.setVisible(false);
      }
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_common_base_popup__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: `Tips to ${username}`,
    okButtonProps: {
      disabled: disableOk
    },
    content: __jsx(_tip_content__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      ref: ref => {
        contentRef = ref;
      },
      setDisableOk: setDisableOk
    }),
    loading: tipping,
    ref: tipPopupRef,
    onOk: onOk,
    width: 567
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "stream-header"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    xs: 24
  }, __jsx("div", {
    className: "left-content"
  }, __jsx("img", {
    src: performer.avatar || (ui === null || ui === void 0 ? void 0 : ui.placeholderAvatarUrl) || '/user.png',
    alt: "",
    className: "stream-avatar"
  }), ' ', __jsx("div", {
    className: "stream-title"
  }, __jsx("span", null, performer.username), performer.streamingTitle && __jsx("span", null, performer.streamingTitle)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    xs: 24
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "button-block"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    hidden: true,
    icon: __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_2__[/* GiftIcon */ "e"], null),
    style: btnStyle,
    onClick: () => sendGift()
  }, "Send Gift"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "default",
    hidden: true,
    style: btnStyle,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], null),
    onClick: () => notify()
  }, "Notify me"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "default",
    style: btnStyle,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MailOutlined"], null),
    onClick: () => sendMessage()
  }, "Send message")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "default",
    style: _objectSpread(_objectSpread({}, btnStyle), {}, {
      width: 100,
      flexDirection: 'row',
      justifyContent: 'center'
    }),
    onClick: () => onLike(),
    icon: isFavorite ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartFilled"], {
      style: {
        color: src_lib__WEBPACK_IMPORTED_MODULE_4__[/* defaultColor */ "d"].primaryColor
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
      style: {
        color: src_lib__WEBPACK_IMPORTED_MODULE_4__[/* defaultColor */ "d"].primaryColor
      }
    })
  }, isFavorite ? 'UnLike' : 'Like')), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: btnStyle,
    onClick: () => sendTip(),
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["PlusCircleOutlined"], null)
  }, "Send Tip"))))));
});

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

/***/ "qPo7":
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

/***/ "rddh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PUBLIC_CHAT */
/* unused harmony export PRIVATE_CHAT */
/* unused harmony export GROUP_CHAT */
/* unused harmony export OFFLINE */
/* unused harmony export MODEL_STREAM_CHANNEL */
/* unused harmony export MODEL_STREAM_EVENT_NAME */
/* unused harmony export BroadcastStatus */
/* unused harmony export BroadcastType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WEBRTC; });
/* unused harmony export defaultStreamValue */
/* eslint-disable no-shadow */
const PUBLIC_CHAT = 'public';
const PRIVATE_CHAT = 'private';
const GROUP_CHAT = 'group';
const OFFLINE = 'offline';
const MODEL_STREAM_CHANNEL = 'MODEL_STREAM_CHANNEL';
let MODEL_STREAM_EVENT_NAME;

(function (MODEL_STREAM_EVENT_NAME) {
  MODEL_STREAM_EVENT_NAME["GROUP_START"] = "GROUP_START";
  MODEL_STREAM_EVENT_NAME["PRIVATE_ACCPET"] = "PRIVATE_ACCPET";
})(MODEL_STREAM_EVENT_NAME || (MODEL_STREAM_EVENT_NAME = {}));

let BroadcastStatus;

(function (BroadcastStatus) {
  BroadcastStatus["FINISHED"] = "finished";
  BroadcastStatus["BROADCASTING"] = "broadcasting";
  BroadcastStatus["CREATED"] = "created";
})(BroadcastStatus || (BroadcastStatus = {}));

let BroadcastType;

(function (BroadcastType) {
  BroadcastType["LiveStream"] = "liveStream";
  BroadcastType["IpCamera"] = "ipCamera";
  BroadcastType["StreamSource"] = "streamSource";
  BroadcastType["Vod"] = "Vod";
})(BroadcastType || (BroadcastType = {}));

const HLS = 'hls';
const WEBRTC = 'webrtc';
const defaultStreamValue = {
  publish: true,
  publicStream: true,
  plannedStartDate: 0,
  plannedEndDate: 0,
  duration: 0,
  mp4Enabled: 0,
  webMEnabled: 0,
  expireDurationMS: 0,
  speed: 0,
  pendingPacketSize: 0,
  hlsViewerCount: 0,
  webRTCViewerCount: 0,
  rtmpViewerCount: 0,
  startTime: 0,
  receivedBytes: 0,
  bitrate: 900,
  absoluteStartTimeMs: 0,
  webRTCViewerLimit: -1,
  hlsViewerLimit: -1
};

/***/ }),

/***/ "rq+8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qPo7");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("psLn");
/* harmony import */ var _components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TXU+");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class ProductCard extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      product,
      onHandlePurchase
    } = this.props;

    const generateToken = token => token && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
      color: token > 0 ? src_lib__WEBPACK_IMPORTED_MODULE_3__[/* defaultColor */ "d"].primaryColor : '#ccc'
    }, token > 0 ? __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      value: token,
      suffix: " tokens"
    }) : 'FREE');

    return __jsx("div", {
      className: "product-card",
      "aria-hidden": true,
      onClick: () => onHandlePurchase(product)
    }, __jsx("div", {
      className: "product-thumb"
    }, product.type === 'physical' && __jsx("div", {
      className: "stock ant-tag ant-tag-has-color"
    }, "Stock:", product.stock), __jsx("span", {
      className: "value"
    }, generateToken(product.token)), product.type === 'digital' && __jsx("span", {
      className: "type-digital"
    }, "Digital"), product.type === 'physical' && __jsx("span", {
      className: "type-digital"
    }, "Physical"), __jsx("div", {
      className: "hover-pointer"
    }, __jsx("img", {
      alt: "",
      src: (product === null || product === void 0 ? void 0 : product.image) || '/no-image.jpg'
    }))), __jsx("div", {
      className: "product-name"
    }, product.name));
  }

}

/***/ }),

/***/ "t2tm":
/***/ (function(module, exports) {



/***/ }),

/***/ "uM63":
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "vPHa":
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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wnub":
/***/ (function(module, exports) {



/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x01j":
/***/ (function(module, exports) {



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

/***/ "xRqz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("psLn");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CNsz");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TXU+");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class GalleryCard extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      gallery,
      onHandlePurchase
    } = this.props;
    const {
      isSale,
      token,
      coverPhoto,
      name,
      numOfItems
    } = gallery; // To-do: Should create separate component

    const renderPriceTag = () => isSale && token ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
      color: src_lib__WEBPACK_IMPORTED_MODULE_2__[/* defaultColor */ "d"].primaryColor
    }, __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      value: token,
      suffix: " tokens"
    })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], null, "FREE");

    return __jsx("div", {
      className: "gallery-card",
      "aria-hidden": true,
      onClick: () => {
        onHandlePurchase(gallery, 'gallery');
      }
    }, __jsx("div", {
      className: "gallery-thumb"
    }, __jsx("span", {
      className: "value"
    }, renderPriceTag()), __jsx("img", {
      src: (coverPhoto === null || coverPhoto === void 0 ? void 0 : coverPhoto.thumbnails[0]) || '/no-image.jpg',
      alt: ""
    }), __jsx("span", {
      className: "count"
    }, "Images:", ' ', numOfItems)), __jsx("div", {
      className: "gallery-info"
    }, __jsx("span", {
      className: "name"
    }, name)));
  }

}

/***/ }),

/***/ "xXdm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_base_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1Bbz");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("psLn");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("kpM1");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

/* eslint-disable jsx-a11y/control-has-associated-label */







const renderPerformerTags = (tags = []) => tags.map((tag, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
  key: `performer-tag-${tag}`,
  href: {
    pathname: '/tag',
    query: {
      tags: tag
    }
  },
  as: `/tag/${tag}`
}, __jsx("a", null, __jsx("span", null, "#", index < tags.length - 1 ? `${tag}, ` : tag))));

const ProfileCard = ({
  performer,
  searching,
  success,
  placeholderAvatarUrl
}) => {
  const {
    avatar,
    username,
    createdAt,
    gender,
    ethnicity,
    country,
    height,
    weight,
    dateOfBirth,
    tags,
    socials,
    lastStreamingTime,
    eyes
  } = performer;
  return __jsx("div", {
    className: "profile-card"
  }, searching ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    loading: true,
    paragraph: {
      rows: 4
    }
  }) : success && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "avatar"
  }, __jsx("img", {
    src: avatar || placeholderAvatarUrl,
    alt: ""
  })), __jsx("div", {
    className: "profile"
  }, __jsx("table", null, __jsx("tbody", null, __jsx("tr", null, __jsx("th", {
    style: {
      width: 150,
      minWidth: 150
    }
  }), __jsx("th", null)), __jsx("tr", null, __jsx("td", {
    className: "lable"
  }, "Username"), __jsx("td", {
    className: "text"
  }, username)), gender && __jsx("tr", null, __jsx("td", {
    className: "lable"
  }, "Gender"), __jsx("td", {
    className: "text"
  }, gender)), createdAt && __jsx("tr", null, __jsx("td", {
    className: "lable"
  }, "Member Since"), __jsx("td", {
    className: "text"
  }, Object(src_lib__WEBPACK_IMPORTED_MODULE_3__[/* formatDate */ "f"])(createdAt, 'MMMM DD, YYYY'))), __jsx("tr", null, __jsx("td", {
    className: "lable"
  }, "Last Broadcast"), __jsx("td", {
    className: "text"
  }, Object(src_lib__WEBPACK_IMPORTED_MODULE_3__[/* formatDate */ "f"])(lastStreamingTime, 'LLLL'))), ethnicity && __jsx("tr", null, __jsx("td", {
    className: "lable"
  }, "Ethnicity"), __jsx("td", {
    className: "text"
  }, ethnicity)), dateOfBirth && __jsx("tr", null, __jsx("td", {
    className: "lable"
  }, "Age"), __jsx("td", {
    className: "text"
  }, Object(src_lib__WEBPACK_IMPORTED_MODULE_3__[/* getAge */ "h"])(dateOfBirth))), country && __jsx("tr", null, __jsx("td", {
    className: "lable"
  }, "Country"), __jsx("td", {
    className: "text"
  }, country)), height && __jsx("tr", null, __jsx("td", {
    className: "lable"
  }, "Height"), __jsx("td", {
    className: "text"
  }, height)), weight && __jsx("tr", null, __jsx("td", {
    className: "lable"
  }, "Weight"), __jsx("td", {
    className: "text"
  }, weight)), eyes && __jsx("tr", null, __jsx("td", {
    className: "lable"
  }, "Eyes"), __jsx("td", {
    className: "text"
  }, eyes))))), __jsx("br", null), performer.aboutMe && __jsx("p", null, "About", ' ', username), __jsx("div", {
    className: "bio"
  }, __jsx("span", null, performer.aboutMe)), __jsx("br", null), __jsx("p", null, "What We do on webcam"), tags && tags.length > 0 && __jsx("div", {
    className: "tags"
  }, renderPerformerTags(tags)), performer.schedule && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", null, `Working hours of ${Object(src_lib__WEBPACK_IMPORTED_MODULE_3__[/* capitalizeFirstLetter */ "a"])(performer.username)}`), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "schedule"
  }, performer.schedule && Object.keys(performer.schedule).map(index => {
    var _performer$schedule$i, _performer$schedule$i2, _performer$schedule$i3, _performer$schedule$i4;

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      sm: {
        span: 8
      },
      xs: {
        span: 12
      },
      key: index
    }, __jsx("span", {
      style: {
        color: '#ff0066',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }
    }, `${index}  `), __jsx("span", {
      style: {
        color: '#000000',
        fontWeight: 'bold'
      }
    }, ((_performer$schedule$i = performer.schedule[index]) === null || _performer$schedule$i === void 0 ? void 0 : _performer$schedule$i.start) !== '00:00' && ((_performer$schedule$i2 = performer.schedule[index]) === null || _performer$schedule$i2 === void 0 ? void 0 : _performer$schedule$i2.end) !== '00:00' ? `${((_performer$schedule$i3 = performer.schedule[index]) === null || _performer$schedule$i3 === void 0 ? void 0 : _performer$schedule$i3.start) || 'N/A'} - ${((_performer$schedule$i4 = performer.schedule[index]) === null || _performer$schedule$i4 === void 0 ? void 0 : _performer$schedule$i4.end) || 'N/A'}` : 'N/A'));
  }))), __jsx("br", null), socials && socials.length > 0 && __jsx("p", null, "Find Me On"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "social",
    gutter: 10
  }, socials && socials.facebook && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("a", {
    href: socials.facebook,
    target: "_blank",
    rel: "noreferrer"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      padding: 0,
      width: 36,
      height: 32
    }
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_2__[/* FacebookIcon */ "b"], null)))), socials && socials.twitter && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("a", {
    href: socials.twitter,
    target: "_blank",
    rel: "noreferrer"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      padding: 0,
      width: 36,
      height: 32
    }
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_2__[/* TwitterIcon */ "r"], null)))), socials && socials.instagram && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("a", {
    href: socials.instagram,
    target: "_blank",
    rel: "noreferrer"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      padding: 0,
      width: 36,
      height: 32
    }
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_2__[/* InstagramIcon */ "g"], null)))))));
};

ProfileCard.defaultProps = {
  searching: false,
  success: false,
  placeholderAvatarUrl: '/no-avatar.png'
};
/* harmony default export */ __webpack_exports__["a"] = (ProfileCard);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yrd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PRODUCT_TYPE */
/* unused harmony export PRODUCT_STATUS */
const PRODUCT_TYPE = {
  PHYSICAL: 'physical',
  DIGITAL: 'digital'
};
const PRODUCT_STATUS = {
  // DRAFT: 'draft',
  ACTIVE: 'active',
  INACTIVE: 'inactive'
};

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

/***/ }),

/***/ "zVAr":
/***/ (function(module, exports) {



/***/ })

/******/ });