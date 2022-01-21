exports.ids = [86];
exports.modules = {

/***/ "WoeR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/no-array-index-key */





class SiderMenu extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedKeys: ['dashboard'],
      openKeys: []
    });

    _defineProperty(this, "onOpenChange", openKeys => {
      const {
        menus
      } = this.props;
      const rootSubmenuKeys = menus.filter(_ => !_.menuParentId).map(_ => _.id);
      const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);
      let newOpenKeys = openKeys;

      if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
        newOpenKeys = latestOpenKey ? [latestOpenKey] : [];
      }

      this.setState({
        openKeys: newOpenKeys
      });
    });

    _defineProperty(this, "generateMenus", data => {
      const {
        totalNotReadMessage
      } = this.props;
      return data.map((item, index) => {
        if (item.children) {
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
            icon: item.icon,
            key: `sub-${index}`,
            title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, item.name))
          }, this.generateMenus(item.children));
        }

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          key: item.id,
          icon: item.icon
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: item.route,
          as: item.as || item.route
        }, __jsx("a", null, item.name, ' ', item.id === 'messages' && `(${totalNotReadMessage})`)));
      });
    });
  }

  componentDidMount() {
    // Router.events.on('routeChangeStart', this.routerChange.bind(this));
    const {
      menus
    } = this.props;
    const selectedKeys = false ? undefined : [];
    this.setSelectedKeys(selectedKeys);
  }

  componentDidUpdate(prevProps) {
    const {
      menus,
      router
    } = this.props;

    if (router.pathname !== prevProps.router.pathname) {
      const selectedKeys = false ? undefined : [];
      this.setSelectedKeys(selectedKeys);
    }
  }

  onSelect({
    key
  }) {
    const {
      menus
    } = this.props;
    const flatTree = this.flatten(menus);
    const selectedKeys = flatTree.filter(m => m.id === key).map(m => m.id);
    this.setSelectedKeys(selectedKeys);
  }

  getSelectedKeys(menus) {
    const pathname = false ? undefined : '';
    const flatTree = this.flatten(menus);
    return flatTree // .filter((m) => pathname.includes(m.as || m.route))
    .filter(m => pathname === m.route || pathname === m.as).map(m => m.id);
  }

  setSelectedKeys(selectedKeys) {
    this.setState({
      selectedKeys
    });
  }

  flatten(menus, flattenMenus = []) {
    menus.forEach(m => {
      if (m.children) {
        this.flatten(m.children, flattenMenus);
      }

      const tmp = _objectSpread({}, m);

      delete tmp.children;
      flattenMenus.push(tmp);
    });
    return flattenMenus;
  }

  render() {
    const {
      theme,
      menus,
      collapsed,
      onClick
    } = this.props;
    const {
      selectedKeys,
      openKeys
    } = this.state;
    const menuProps = collapsed ? {} : {
      openKeys
    };
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], _extends({
      key: "profile-menu",
      mode: "inline",
      theme: theme,
      selectedKeys: selectedKeys,
      onOpenChange: this.onOpenChange.bind(this),
      onSelect: this.onSelect.bind(this),
      onClick: onClick // onClick={
      //   isMobile
      //     ? () => {
      //         onCollapseChange(true);
      //       }
      //     : undefined
      // }

    }, menuProps), this.generateMenus(menus));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(SiderMenu));

/***/ })

};;