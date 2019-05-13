webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");


var _jsxFileName = "/home/alan/programy/fuero_games_task/pages/dashboard.js";




var Collapsible = function Collapsible(_ref) {
  var title = _ref.title,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "list-group-item",
    onClick: function onClick() {
      return setOpen(!open);
    },
    "aria-expanded": open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: open ? "fas fa-minus-square" : "fas fa-plus-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), "\xA0", title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    in: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children)));
};

function getNotificationClass() {
  var NotificationClasses = ["alert alert-danger", "alert alert-info", "alert alert-warning"]; // random item from array

  return NotificationClasses[Math.floor(Math.random() * NotificationClasses.length)];
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: "Dashboard",
    content: "Hello, world!"
  }),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      activePage = _useState4[0],
      setActivePage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      notifications = _useState6[0],
      setNotifications = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setInterval(function () {
      setNotifications([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(notifications), [getNotificationClass()]));
    }, 1000);
  }, []);

  var MenuItem = function MenuItem(_ref2) {
    var icon = _ref2.icon,
        title = _ref2.title,
        content = _ref2.content;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "list-group-item",
      onClick: function onClick() {
        return setActivePage({
          title: title,
          content: content
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), title);
  };

  var StatisticsItems = [{
    title: "Tests",
    content: "Tests"
  }, {
    title: "Devices",
    content: "Devices"
  }, {
    title: "Builds",
    content: "Builds"
  }, {
    title: "Services",
    content: "Services"
  }, {
    title: "Projects",
    content: "Projects content"
  }];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "notifications",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, notifications.map(function (cls) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: cls,
      role: "alert",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "This is a info alert\u2014check it out!");
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Log In"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Log Out..."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("aside", {
    className: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Dashboard",
    icon: "fas fa-bars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Collapsible, {
    title: "Statistics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, StatisticsItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
      title: item.title,
      content: item.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Collapsible, {
    title: "Reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Tests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Devices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Builds",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Configurations",
    icon: "fas fa-cog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Collapsible, {
    title: "Overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Tests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Devices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Builds",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "content",
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, activePage.title), activePage.content));
});

/***/ })

})
//# sourceMappingURL=dashboard.js.fab39f9e5c940165f70a.hot-update.js.map