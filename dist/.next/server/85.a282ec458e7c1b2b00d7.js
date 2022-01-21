exports.ids = [85];
exports.modules = {

/***/ "D+yk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pHZt");
/* harmony import */ var _left_header_content_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cn7n");
/* harmony import */ var _left_header_content_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_left_header_content_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fsrY");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const LeftHeaderContent = ({
  loggedIn,
  current,
  pluralTextModel,
  performerCategories,
  settings
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const path = settings[src_constants__WEBPACK_IMPORTED_MODULE_6__[/* SETTING_KEYS */ "a"].OPTION_FOR_GROUP] === 'webrtc' ? 'webrtc/' : '';
  let MenuItem = [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "home"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cams",
    shallow: true,
    as: "/"
  }, __jsx("a", null, "Home"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
    title: "Categories",
    key: "left-menu-performer-categories",
    popupClassName: "menu-left-header-submenu-popup"
  }, performerCategories.data.length > 0 && performerCategories.data.map(category => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: `category-${category._id}`
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/performer-category',
      query: {
        slug: category.slug,
        category: JSON.stringify(category)
      }
    },
    as: `/performer-category/${category.slug}`
  }, __jsx("a", null, category.name))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "vip-model"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/performer-category",
    as: "/vip-models"
  }, __jsx("a", null, "Vip Models"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "all-model"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/performer-category",
    as: "/all-models"
  }, __jsx("a", null, `All ${pluralTextModel || 'Models'}`)))];

  if (loggedIn && current !== null && current !== void 0 && current._id && (current === null || current === void 0 ? void 0 : current.role) === 'performer') {
    MenuItem = [...MenuItem, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      disabled: router.route === '/live',
      key: "left-menu-live-chat"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/live"
    }, __jsx("a", null, "Go Live"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      disabled: router.route === '/live/groupchat',
      key: "left-menu-groupchat"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/live/${path}groupchat`
    }, __jsx("a", null, "Group Chat")))];
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "horizontal",
    className: "menu-left-header"
  }, MenuItem));
};

LeftHeaderContent.defaultProps = {
  loggedIn: false,
  current: null,
  settings: null,
  pluralTextModel: '',
  performerCategories: {
    total: 0,
    data: []
  }
};

const mapStateToProps = state => _objectSpread(_objectSpread({
  loggedIn: state.auth.loggedIn
}, state.performer.performers), state.ui);

const mapDispatch = {
  updateUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_4__[/* updateUIValue */ "b"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatch)(LeftHeaderContent));

/***/ }),

/***/ "cn7n":
/***/ (function(module, exports) {



/***/ })

};;