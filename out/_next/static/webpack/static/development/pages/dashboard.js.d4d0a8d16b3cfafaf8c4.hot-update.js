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
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/dist/react-draggable.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_languages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/languages */ "./components/languages.js");


var _jsxFileName = "/home/alan/programy/fuero_games_task/pages/dashboard.js";



 // The default



var ConfigurationsContent = function ConfigurationsContent() {
  var langs = [];

  for (var key in _components_languages__WEBPACK_IMPORTED_MODULE_6__["default"]) {
    langs.push([_components_languages__WEBPACK_IMPORTED_MODULE_6__["default"][key]["name"], _components_languages__WEBPACK_IMPORTED_MODULE_6__["default"][key]["nativeName"]]);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, langs.map(function (lang) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      disabled: !/[a-zA-Z]/.test(lang[1]),
      value: "lang",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, lang[0]);
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "btn btn-sm btn-primary btn-block text-uppercase",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "save"));
};

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
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: open ? "fas fa-minus-square" : "fas fa-plus-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), "\xA0", title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    in: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, children)));
};

function getNotificationClass() {
  var NotificationClasses = ["alert alert-danger", "alert alert-info", "alert alert-warning"]; // random item from array

  return NotificationClasses[Math.floor(Math.random() * NotificationClasses.length)];
}

function useInterval(callback, delay) {
  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(); // Remember the latest callback.

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
}

var HomeContent = function HomeContent() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "draggable",
    style: {
      height: open ? "150px" : "30px",
      background: "#f44"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    type: "button",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "toggle collapse"), "This is DRAGGABLE!"));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: "Dashboard",
    content: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HomeContent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })
  }),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      activePage = _useState6[0],
      setActivePage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      notifications = _useState8[0],
      setNotifications = _useState8[1];
  /*
   * set up an interval
   * to randomize the delay
   * of the other interval =) looked like the easiest way
   * to do it with react hooks
   */


  var delay = 5000;
  useInterval(function () {
    delay = Math.floor(Math.random() * 5000 + 5000);
  }, 5000);
  useInterval(function () {
    setNotifications([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(notifications), [getNotificationClass()]));
  }, delay);

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
        lineNumber: 133
      },
      __self: this
    }, icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
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
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "notifications",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, notifications.map(function (cls) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: cls,
      role: "alert",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "This is a info alert\u2014check it out!");
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return setNotifications([]);
    },
    type: "button",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Clear notifications"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("aside", {
    className: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Dashboard",
    icon: "fas fa-bars",
    content: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HomeContent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Collapsible, {
    title: "Statistics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, StatisticsItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
      title: item.title,
      content: item.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Collapsible, {
    title: "Reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Tests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Devices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Builds",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Configurations",
    icon: "fas fa-cog",
    content: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ConfigurationsContent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Collapsible, {
    title: "Overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Tests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Devices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Builds",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItem, {
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "content",
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, activePage.title), activePage.content));
});

/***/ })

})
//# sourceMappingURL=dashboard.js.d4d0a8d16b3cfafaf8c4.hot-update.js.map