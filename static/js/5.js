(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/service/home */ \"./src/service/home.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      QRcodeShow: false\n    };\n  },\n  methods: {\n    handleClick: function handleClick() {\n      console.log(111);\n      this.QRcodeShow = true;\n      this.$refs.child.startRecognize();\n    },\n    handleRouter: function handleRouter() {\n      this.$router.push({\n        path: \"Scancodedetails\"\n      });\n    },\n    handle1: function handle1() {\n      this.$router.push({\n        path: \"Monthlysignature\"\n      });\n    }\n  },\n  mounted: function mounted() {\n    Object(_service_home__WEBPACK_IMPORTED_MODULE_0__[\"asyncBanner\"])();\n    Object(_service_home__WEBPACK_IMPORTED_MODULE_0__[\"asyncCan\"])();\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Home/index.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1f9336c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home/index.vue?vue&type=template&id=1d9b105c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1f9336c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home/index.vue?vue&type=template&id=1d9b105c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"div\", { staticClass: \"wrapper\" }, [_vm._v(\"??????\")]),\n      _c(\n        \"van-button\",\n        { attrs: { type: \"danger\" }, on: { click: _vm.handleClick } },\n        [_vm._v(\"????????????\")]\n      ),\n      _c(\n        \"van-button\",\n        { attrs: { type: \"danger\" }, on: { click: _vm.handleRouter } },\n        [_vm._v(\"????????????\")]\n      ),\n      _c(\n        \"van-button\",\n        { attrs: { type: \"danger\" }, on: { click: _vm.handle1 } },\n        [_vm._v(\"???????????????\")]\n      ),\n      _c(\"QRcode\", {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.QRcodeShow,\n            expression: \"QRcodeShow\"\n          }\n        ],\n        ref: \"child\"\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Home/index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221f9336c0-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/service/home.js":
/*!*****************************!*\
  !*** ./src/service/home.js ***!
  \*****************************/
/*! exports provided: asyncBanner, asyncCan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asyncBanner\", function() { return asyncBanner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asyncCan\", function() { return asyncCan; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\");\n\nvar asyncBanner = function asyncBanner() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/banner\",\n    methord: \"GET\"\n  });\n};\nvar asyncCan = function asyncCan() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/canji\",\n    methord: \"GET\"\n  });\n};\n\n//# sourceURL=webpack:///./src/service/home.js?");

/***/ }),

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vant_es_toast_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vant/es/toast/style */ \"./node_modules/vant/es/toast/style/index.js\");\n/* harmony import */ var vant_es_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant/es/toast */ \"./node_modules/vant/es/toast/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.js\");\n\n\n\n\n // ??????loading\n\nvar toast = function toast() {\n  return vant_es_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading({\n    duration: 0,\n    // ???????????? toast\n    forbidClick: true,\n    loadingType: \"spinner\",\n    className: \"loading-icon\",\n    message: \"?????????...\"\n  });\n};\n\nvar instance = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({\n  //   baseURL: process.env.VUE_APP_BASE_URL, // ?????????????????????,????????????\n  baseURL: \"/api\",\n  // ??????????????????????????????\n  timeout: 3500\n}); // ??????????????????\n\ninstance.interceptors.request.use(function (config) {\n  toast(); // ????????????????????? ????????????????????????????????????\n\n  var Cancel = axios__WEBPACK_IMPORTED_MODULE_3___default.a.CancelToken; // ????????????????????????\n\n  config.headers[\"token\"] = \"token\";\n  config.cancelToken = new Cancel(function (c) {\n    return _store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].commit(\"ajax/push\", c);\n  });\n  return config;\n}, function (error) {\n  vant_es_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clear();\n\n  Promise.reject(error);\n}); // ??????????????????\n\ninstance.interceptors.response.use(function (response) {\n  vant_es_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clear(); // ?????????????????????????????????, ?????????????????????????????????{code:\"\", data:\"\",msg:\"\"}\n\n\n  var _response$data = response.data,\n      code = _response$data.code,\n      data = _response$data.data,\n      msg = _response$data.msg; // ??????code??????\n\n  if (code === 200) {\n    msg && Object(vant_es_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      message: msg,\n      duration: 5200\n    });\n    return data;\n  }\n}, function (error) {\n  vant_es_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clear();\n\n  Promise.reject(error);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/utils/request.js?");

/***/ }),

/***/ "./src/views/Home/index.vue":
/*!**********************************!*\
  !*** ./src/views/Home/index.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1d9b105c&scoped=true& */ \"./src/views/Home/index.vue?vue&type=template&id=1d9b105c&scoped=true&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./src/views/Home/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1d9b105c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Home/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/Home/index.vue?");

/***/ }),

/***/ "./src/views/Home/index.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/Home/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/Home/index.vue?");

/***/ }),

/***/ "./src/views/Home/index.vue?vue&type=template&id=1d9b105c&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/views/Home/index.vue?vue&type=template&id=1d9b105c&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1f9336c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1f9336c0-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1d9b105c&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1f9336c0-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home/index.vue?vue&type=template&id=1d9b105c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1f9336c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1f9336c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Home/index.vue?");

/***/ })

}]);