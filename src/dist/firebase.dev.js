"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.provider = exports.firestore = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/storage");

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyA1OTb0X8hgMc0zlciQnNVZTlJNLvFs2Bc",
  authDomain: "random-recipie.firebaseapp.com",
  databaseURL: "https://random-recipie.firebaseio.com",
  projectId: "random-recipie",
  storageBucket: "random-recipie.appspot.com",
  messagingSenderId: "1031019304024",
  appId: "1:1031019304024:web:1d84c54792a4487998e62d"
};

_app["default"].initializeApp(firebaseConfig);

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
exports.provider = provider;
var _default = _app["default"];
exports["default"] = _default;