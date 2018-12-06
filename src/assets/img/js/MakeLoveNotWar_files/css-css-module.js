(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["css-css-module"],{

/***/ "./src/app/pages/css/components/adaptation/adaptation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/css/components/adaptation/adaptation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h3>Резинова верстка</h3>\n    <ul class=\"list\">\n      <li>% for width</li>\n      <li>vh vw use viewport units</li>\n      <li>min/max-width  min/max-height</li>\n      <li>...</li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>Адаптивна верстка <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\" target=\"_blank\">media queries</a></h3>\n    <ul class=\"list\">\n      <li>\n        <p>Пропорційне відображення сторінки на мобільних пристроях</p>\n        <p class=\"tag\">meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"</p>\n      </li>\n      <li>\n        @media (min-width: 700px) &#123; ... &#125;\n      </li>\n      <li>\n        @media (min-width: 700px) and (orientation: landscape) &#123; ... &#125;\n      </li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>Tools</h3>\n    <img src=\"assets/img/css/webinspector.png\" style=\"max-width: 500px; width: 100%; text-align: center\" alt=\"\">\n    <br> <br>\n    <img src=\"assets/img/css/websizer.png\" style=\"max-width: 500px; width: 100%; text-align: center\" alt=\"\">\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/adaptation/adaptation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/css/components/adaptation/adaptation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/adaptation/adaptation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/css/components/adaptation/adaptation.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdaptationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptationComponent", function() { return AdaptationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdaptationComponent = /** @class */ (function () {
    function AdaptationComponent() {
    }
    AdaptationComponent.prototype.ngOnInit = function () {
    };
    AdaptationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adaptation',
            template: __webpack_require__(/*! ./adaptation.component.html */ "./src/app/pages/css/components/adaptation/adaptation.component.html"),
            styles: [__webpack_require__(/*! ./adaptation.component.scss */ "./src/app/pages/css/components/adaptation/adaptation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdaptationComponent);
    return AdaptationComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/box-model/box-model.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/css/components/box-model/box-model.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h3>\n      Блочна модель\n    </h3>\n    <img src=\"assets/img/css/box_model.png\" style=\"width: 100%\" alt=\"\">\n  </div>\n</section>\n<section>\n  <div>\n    <h3><kbd>box-sizing: border-box | content-box(default)</kbd></h3>\n    <img src=\"assets/img/css/box-model.png\" style=\"width: 100%\" alt=\"\">\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/box-model/box-model.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/css/components/box-model/box-model.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/box-model/box-model.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/css/components/box-model/box-model.component.ts ***!
  \***********************************************************************/
/*! exports provided: BoxModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxModelComponent", function() { return BoxModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoxModelComponent = /** @class */ (function () {
    function BoxModelComponent() {
    }
    BoxModelComponent.prototype.ngOnInit = function () {
    };
    BoxModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-box-model',
            template: __webpack_require__(/*! ./box-model.component.html */ "./src/app/pages/css/components/box-model/box-model.component.html"),
            styles: [__webpack_require__(/*! ./box-model.component.scss */ "./src/app/pages/css/components/box-model/box-model.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BoxModelComponent);
    return BoxModelComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/colors/colors.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/css/components/colors/colors.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n  <div>\n    <h3>\n      Кольори в верстці\n    </h3>\n    <p>\n      Способи задання кольору\n    </p>\n    <ol>\n      <li>за назвою (black, white...)</li>\n      <li>шістнадцятковому форматі (#000000, #ffffff)</li>\n      <li>в RGB форматі (rgb(0, 0, 0), rgba(255, 255, 255, 0.5))</li>\n    </ol>\n    <br>\n    <h4>\n      1) За назвою:\n    </h4>\n    <img src=\"assets/img/css/color-name.png\" alt=\"\">\n    <br>\n    <h4>\n      2) У шістнадцятковому форматі (HEX):\n    </h4>\n    <img src=\"assets/img/css/color-hex.png\" alt=\"\">\n    <br>\n    <h4>\n      3) В RGB форматі :\n    </h4>\n    <img src=\"assets/img/css/color-rgb.png\" alt=\"\">\n    <br>\n    <h4>\n      Загальне представлення\n    </h4>\n    <img src=\"assets/img/css/color-all.png\" alt=\"\">\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/colors/colors.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/css/components/colors/colors.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/colors/colors.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/css/components/colors/colors.component.ts ***!
  \*****************************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
    }
    ColorsComponent.prototype.ngOnInit = function () {
    };
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/pages/css/components/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.scss */ "./src/app/pages/css/components/colors/colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/css-animations/css-animations.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/css/components/css-animations/css-animations.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h3>\n      Transitions Transform\n    </h3>\n    <blockquote class=\"blockquote\">\n      <code>\n        .box &#x7b;<br>\n        &nbsp;width: 100px;<br>\n        &nbsp;height: 100px;<br>\n        &nbsp;background-color: #0000FF;<br>\n        &nbsp;transition: width 2s, height 2s, background-color 2s, transform 2s;<br>\n        &#x7d;\n        <br>\n        .box:hover &#x7b;<br>\n        &nbsp;background-color: #FFCCCC; <br>\n        &nbsp;width: 200px; <br>\n        &nbsp;height: 200px; <br>\n        &nbsp;transform: rotate(180deg);<br>\n        &#x7d;\n      </code>\n    </blockquote>\n    <div class=\"box\"></div>\n  </div>\n</section>\n\n<section>\n  <div>\n    <h3>Keyframes</h3>\n    <blockquote class=\"blockquote\">\n      <code>\n        .box2 &#x7b;<br>\n        &nbsp;width: 100px;<br>\n        &nbsp;height: 100px;<br>\n        &nbsp;background-color: red;<br>\n        &#x7d;\n        <br>\n        .box2:hover &#x7b;<br>\n        &nbsp;animation-name: anim1;<br>\n        &nbsp;animation-duration: 4s;<br>\n        &#x7d;\n        <br>\n        @keyframes anim1 &#x7b;<br>\n        &nbsp;from &#x7b;background-color: red;&#x7d; <br>\n        &nbsp;to &#x7b;background-color: yellow;&#x7d; <br>\n        &#x7d;\n      </code>\n    </blockquote>\n    <div class=\"box2\"></div>\n  </div>\n</section>\n\n<section>\n  <div>\n    <h3>Keyframes pro</h3>\n    <blockquote class=\"blockquote\">\n      <code>\n        .box3 &#x7b;<br>\n        &nbsp;width: 100px;<br>\n        &nbsp;height: 100px;<br>\n        &nbsp;background-color: red;<br>\n        animation: anim2 5s infinite;<br>\n        &#x7d;\n        <br>\n        @keyframes anim2 &#x7b;<br>\n        &nbsp;0%&#x7b;background-color: red;&#x7d; <br>\n        &nbsp;15% &#x7b;background-color: yellow;&#x7d; <br>\n        &nbsp;40% &#x7b;background-color: blue;&#x7d; <br>\n        &nbsp;65% &#x7b;background-color: green;&#x7d; <br>\n        &nbsp;90% &#x7b;background-color: red;&#x7d; <br>\n        &#x7d;\n      </code>\n    </blockquote>\n    <div class=\"box3\"></div>\n  </div>\n</section>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/css/components/css-animations/css-animations.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/css/components/css-animations/css-animations.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  width: 100px;\n  height: 100px;\n  background-color: #0000FF;\n  transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;\n  transition: width 2s, height 2s, background-color 2s, transform 2s;\n  transition: width 2s, height 2s, background-color 2s, transform 2s, -webkit-transform 2s; }\n  .box:hover {\n    background-color: #FFCCCC;\n    width: 200px;\n    height: 200px;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .box2 {\n  width: 100px;\n  height: 100px;\n  background-color: red; }\n  .box2:hover {\n    -webkit-animation-name: anim1;\n            animation-name: anim1;\n    -webkit-animation-duration: 4s;\n            animation-duration: 4s; }\n  .box3 {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  -webkit-animation: anim2 5s infinite;\n          animation: anim2 5s infinite; }\n  @-webkit-keyframes anim1 {\n  from {\n    background-color: red; }\n  to {\n    background-color: yellow; } }\n  @keyframes anim1 {\n  from {\n    background-color: red; }\n  to {\n    background-color: yellow; } }\n  @-webkit-keyframes anim2 {\n  0% {\n    background-color: red; }\n  15% {\n    background-color: yellow; }\n  40% {\n    background-color: blue; }\n  65% {\n    background-color: green; }\n  90% {\n    background-color: red; } }\n  @keyframes anim2 {\n  0% {\n    background-color: red; }\n  15% {\n    background-color: yellow; }\n  40% {\n    background-color: blue; }\n  65% {\n    background-color: green; }\n  90% {\n    background-color: red; } }\n"

/***/ }),

/***/ "./src/app/pages/css/components/css-animations/css-animations.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/css/components/css-animations/css-animations.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CssAnimationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssAnimationsComponent", function() { return CssAnimationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CssAnimationsComponent = /** @class */ (function () {
    function CssAnimationsComponent() {
    }
    CssAnimationsComponent.prototype.ngOnInit = function () {
    };
    CssAnimationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-css-animations',
            template: __webpack_require__(/*! ./css-animations.component.html */ "./src/app/pages/css/components/css-animations/css-animations.component.html"),
            styles: [__webpack_require__(/*! ./css-animations.component.scss */ "./src/app/pages/css/components/css-animations/css-animations.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CssAnimationsComponent);
    return CssAnimationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/css-pro/css-pro.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/css/components/css-pro/css-pro.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h2><a href=\"https://ru.bem.info/methodology/key-concepts/\" target=\"_blank\">BEM</a></h2>\n    <h3>block-element__modificator</h3>\n    <img src=\"https://ru.bem.info/kFetIbKxQdABHhUecbic45Il0Bg.png\" alt=\"\">\n  </div>\n</section>\n\n<section>\n  <div>\n    <h3>Препроцесори</h3>\n    <ul class=\"list\">\n      <li><a href=\"http://lesscss.org/\" target=\"_blank\">LESS</a></li>\n      <li><a href=\"http://sass-lang.com/install\" target=\"_blank\">SASS</a></li>\n      <li><a href=\"http://stylus-lang.com/\" target=\"_blank\">STYLUS</a></li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/css-pro/css-pro.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/css/components/css-pro/css-pro.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/css-pro/css-pro.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/css/components/css-pro/css-pro.component.ts ***!
  \*******************************************************************/
/*! exports provided: CssProComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssProComponent", function() { return CssProComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CssProComponent = /** @class */ (function () {
    function CssProComponent() {
    }
    CssProComponent.prototype.ngOnInit = function () {
    };
    CssProComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-css-pro',
            template: __webpack_require__(/*! ./css-pro.component.html */ "./src/app/pages/css/components/css-pro/css-pro.component.html"),
            styles: [__webpack_require__(/*! ./css-pro.component.scss */ "./src/app/pages/css/components/css-pro/css-pro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CssProComponent);
    return CssProComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/flexbox/flexbox.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/css/components/flexbox/flexbox.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h3>\n      Flexbox\n    </h3>\n    <a href=\"https://codepen.io/babysgotatemper/pen/yxYJGj\" target=\"_blank\">\n      <img src=\"assets/img/css/flexbox.png\" alt=\"\">\n    </a>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/flexbox/flexbox.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/css/components/flexbox/flexbox.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/flexbox/flexbox.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/css/components/flexbox/flexbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: FlexboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexboxComponent", function() { return FlexboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlexboxComponent = /** @class */ (function () {
    function FlexboxComponent() {
    }
    FlexboxComponent.prototype.ngOnInit = function () {
    };
    FlexboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flexbox',
            template: __webpack_require__(/*! ./flexbox.component.html */ "./src/app/pages/css/components/flexbox/flexbox.component.html"),
            styles: [__webpack_require__(/*! ./flexbox.component.scss */ "./src/app/pages/css/components/flexbox/flexbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexboxComponent);
    return FlexboxComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/fonts/fonts.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/css/components/fonts/fonts.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n  <div>\n    <h3>\n      Нестандартні шрифти і їх підключення\n    </h3>\n    <h4>\n      Родові сімейства шрифтів\n    </h4>\n    <ul class=\"list\">\n      <li><kbd style=\"font-family: serif\">serif</kbd> - шрифти із зарубками на кінцях;</li>\n      <li><kbd style=\"font-family: sans-serif\">sans-serif</kbd> - шрифти без зарубок;</li>\n      <li><kbd style=\"font-family: cursive\">cursive</kbd> - шрифти курсиву;</li>\n      <li><kbd style=\"font-family: fantasy\">fantasy</kbd> - декоративні шрифти;</li>\n      <li><kbd style=\"font-family: monospace\">monospace</kbd> - моно шрифт (з буквами однакової ширини).</li>\n    </ul>\n    <br>\n    <h4>\n      Безпечні шрифти\n    </h4>\n    <ul class=\"list\">\n      <li>Arial</li>\n      <li>Arial Black</li>\n      <li>Comic Sans MS</li>\n      <li>Courier New</li>\n      <li>Georgia</li>\n      <li>Impact</li>\n      <li>Times New Roman</li>\n      <li>Trebuchet MS</li>\n      <li>Verdana</li>\n    </ul>\n    <br>\n    <h4>\n      Розмір шрифту\n    </h4>\n    <p>\n      Що таке «розмір шрифту»? Це зовсім не «розмір самої великої літери в ньому», як можна було б подумати.\n      <br><br>\n      Розмір шрифту - це деяка «умовна одиниця», яка вбудована в шрифт.\n      <br><br>\n      Вона зазвичай трохи більше, ніж відстань від верху самої великої літери до низу найменшою. Тобто, передбачається, що в цю висоту поміщається будь-яка буква або їх поєднання. Але при цьому «хвости» букв, таких як р, g можуть заходити за це значення, тобто вилазити знизу. Тому зазвичай висоту рядка роблять трохи більше, ніж розмір шрифту.\n    </p>\n    <img src=\"assets/img/css/line-h.png\" alt=\"\">\n    <br>\n    <h4>\n      Формати контейнерів шрифтів:\n    </h4>\n    <ul class=\"list\">\n      <li>Використовуйте WOFF 2.0 в тих браузерах, які його підтримують.</li>\n      <li><strong>Додайте WOFF для більшості браузерів.</strong></li>\n      <li>Застосовуйте TTF в застарілих браузерах Android (для версій до 4.4).</li>\n      <li>Додайте EOT для підтримки застарілих версій IE (до IE9).</li>\n      <li>Теоретично, існує ще один формат контейнера шрифтів - SVG .</li>\n    </ul>\n    <br>\n    <h4>\n      CSS-правило @ font-face\n    </h4>\n    <pre>\n          @ font-face  &#123;\n            font-family :  '...' ;\n            font-style :  ...;\n            font-weight :  .... ;\n            src :  local ( '...' ),\n            url ( '/fonts/….' )  format ( '...' ),\n          &#125;\n        </pre>\n    <br>\n    <h4>\n      Генератори шрифтів\n    </h4>\n    <ul class=\"list\">\n      <li><a href=\"https://www.fontsquirrel.com/\" target=\"_blank\">https://www.fontsquirrel.com/</a></li>\n      <li><a href=\"https://onlinefontconverter.com/\" target=\"_blank\">https://onlinefontconverter.com/</a></li>\n      <li><a href=\"https://fonts.google.com/\" target=\"_blank\">https://fonts.google.com/</a></li>\n      <li><a href=\"http://fontello.com/\" target=\"_blank\">http://fontello.com/</a></li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/fonts/fonts.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/css/components/fonts/fonts.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/fonts/fonts.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/css/components/fonts/fonts.component.ts ***!
  \***************************************************************/
/*! exports provided: FontsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontsComponent", function() { return FontsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FontsComponent = /** @class */ (function () {
    function FontsComponent() {
    }
    FontsComponent.prototype.ngOnInit = function () {
    };
    FontsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fonts',
            template: __webpack_require__(/*! ./fonts.component.html */ "./src/app/pages/css/components/fonts/fonts.component.html"),
            styles: [__webpack_require__(/*! ./fonts.component.scss */ "./src/app/pages/css/components/fonts/fonts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FontsComponent);
    return FontsComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/html5-css3/html5-css3.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/css/components/html5-css3/html5-css3.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h3>\n      HTML5 <a href=\"http://html5doctor.com/ \" target=\"_blank\">http://html5doctor.com/ </a> <br>\n      HTML4 page\n    </h3>\n    <kbd>DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\"\n      \"http://www.w3.org/TR/html4/strict.dtd</kbd>\n    <hr>\n    <kbd>link rel=\"stylesheet\" type=\"text/css\" href=\"theme.css\"</kbd>\n    <hr>\n    <kbd>script type=\"text/javascript\"</kbd>\n    <hr>\n    <img src=\"assets/img/css/html4.png\" alt=\"\">\n  </div>\n</section>\n<section>\n  <div>\n    <h3>HTML5 page</h3>\n    <kbd>!doctype html</kbd>\n    <hr>\n    <kbd>\n      meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\n    </kbd>\n    <hr>\n    <kbd>link rel=\"stylesheet\" href=\"theme.css\"</kbd>\n    <hr>\n    <kbd>script</kbd>\n    <hr>\n    <img src=\"assets/img/css/html5.png\" alt=\"\">\n  </div>\n</section>\n<section>\n  <div>\n    <h3>DIV розширили семантичними тегами</h3>\n    <ul class=\"list\">\n      <li><span class=\"tag\">section</span></li>\n      <li><span class=\"tag\">header</span></li>\n      <li><span class=\"tag\">footer</span></li>\n      <li><span class=\"tag\">aside</span></li>\n      <li><span class=\"tag\">nav</span></li>\n      <li><span class=\"tag\">article</span></li>\n      <li><span class=\"tag\">main</span></li>\n      <li><span class=\"tag\">figure/figurcaption</span></li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>Нові атрибути для input/form</h3>\n    <ul class=\"list\">\n      <li>placeholder <input type=\"text\" placeholder=\"placeholder\"></li>\n      <li>autofocus <button autofocus>autofocus</button></li>\n      <li>autocomplete <input type=\"email\" name=\"email\" autocomplete></li>\n      <li>required</li>\n      <li>pattern</li>\n      <li>list</li>\n      <li>multiple</li>\n      <li>novalidate</li>\n      <li>formnovalidate</li>\n      <li>form</li>\n      <li>formaction</li>\n      <li>formenctype</li>\n      <li>formmethod</li>\n      <li>formtarget</li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>\n      Відмова від Flash\n    </h3>\n    <ul class=\"list\">\n      <li>\n        <kbd>audio</kbd>\n        <br>\n        <audio controls>\n          <source src=\"assets/img/css/horse.ogg\" type=\"audio/ogg\">\n          Your browser does not support the audio tag.\n        </audio>\n      </li>\n      <li>\n        <a href=\"https://www.w3schools.com/tags/tag_video.asp\" target=\"_blank\">\n          <kbd>video</kbd>\n        </a>\n        <br>\n        <video width=\"320\" height=\"240\" controls>\n          <source src=\"assets/img/css/movie.mp4\" type=\"video/mp4\">\n          Your browser does not support the video tag.\n        </video>\n      </li>\n      <li>\n        <a href=\"https://www.w3schools.com/html/html5_canvas.asp\" target=\"_blank\">\n          <kbd>canvas</kbd>\n        </a>\n      </li>\n    </ul>\n\n  </div>\n</section>\n\n<section>\n  <div>\n    <h3>\n      CSS3\n    </h3>\n    <ul class=\"list\">\n      <li>\n        <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius\" target=\"_blank\">\n          <kbd>border-radius</kbd>\n        </a>\n        - Заокруглення рамок\n      </li>\n      <li>\n        <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow\" target=\"_blank\">\n          <kbd>text-shadow</kbd>\n        </a>\n        <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow\" target=\"_blank\">\n          <kbd>box-shadow</kbd>\n        </a>\n        - Тінь\n      </li>\n      <li>\n        <a>\n          <kbd>rgba(0,0,0,0.5)</kbd>\n        </a>\n        - RGBA coloring\n      </li>\n      <li>\n        <a href=\"https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions\" target=\"_blank\">\n          <kbd>transitions</kbd>\n        </a>\n        <br>\n        <a href=\"\" target=\"_blank\">\n          <kbd>transforms</kbd>\n        </a>\n        - Анімація\n      </li>\n      <li>\n        <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient\" target=\"_blank\">\n          <kbd>linear-gradient</kbd>\n        </a>\n        <br>\n        <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient\" target=\"_blank\">\n          <kbd>radial-gradient</kbd>\n        </a>\n        <br>\n        <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient\" target=\"_blank\">\n          <kbd>repeating-linear-gradient</kbd>\n        </a>\n        <br>\n        <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-radial-gradient\" target=\"_blank\">\n          <kbd>repeating-radial-gradient</kbd>\n        </a>\n        - Градієнти\n      </li>\n      <li>\n        <a href=\"https://www.w3schools.com/css/css3_backgrounds.asp\" target=\"_blank\">\n          <kbd>background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;</kbd>\n        </a>\n        - Множинні бекграунди\n      </li>\n      <li>\n        <a href=\"\" target=\"_blank\">\n          <kbd>\n            @font-face\n          </kbd>\n        </a>\n        - Шрифты\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/html5-css3/html5-css3.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/css/components/html5-css3/html5-css3.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/html5-css3/html5-css3.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/css/components/html5-css3/html5-css3.component.ts ***!
  \*************************************************************************/
/*! exports provided: Html5Css3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html5Css3Component", function() { return Html5Css3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Html5Css3Component = /** @class */ (function () {
    function Html5Css3Component() {
    }
    Html5Css3Component.prototype.ngOnInit = function () {
    };
    Html5Css3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-html5-css3',
            template: __webpack_require__(/*! ./html5-css3.component.html */ "./src/app/pages/css/components/html5-css3/html5-css3.component.html"),
            styles: [__webpack_require__(/*! ./html5-css3.component.scss */ "./src/app/pages/css/components/html5-css3/html5-css3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Html5Css3Component);
    return Html5Css3Component;
}());



/***/ }),

/***/ "./src/app/pages/css/components/inherit/inherit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/css/components/inherit/inherit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n  <div>\n    <h3>\n      Успадкування\n    </h3>\n    <p>\n      Успадкуванням називається перенесення правил форматування для елементів, що знаходяться всередині інших. <br>\n      Такі елементи є дочірніми, і вони успадковують деякі стильові властивості своїх батьків, усередині яких розташовуються.\n    </p>\n    <h4>Властивості які унаслідуються:</h4>\n    <ul class=\"list\">\n      <li>колір тексту</li>\n      <li>шрифт</li>\n      <li>міжрядкові інтервали</li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>\n      Правила підрахунку специфічності\n    </h3>\n    <h4>\n      Специфічність рахується по селектору.\n    </h4>\n    <ul class=\"list\">\n      <li>кожен присутній в селекторі ідентифікатор додає до специфічності <kbd>0,1,0,0</kbd>;</li>\n      <li>кожен клас, псевдоклас або атрибут додає до специфічності <kbd>0,0,1,0</kbd>;</li>\n      <li>кожен елемент або псевдоелемент додає до специфічності <kbd>0,0,0,1</kbd>;</li>\n    </ul>\n    <table>\n      <tr>\n        <td>p</td>\n        <td>0,0,0,1</td>\n      </tr>\n      <tr>\n        <td>div p</td>\n        <td>0,0,0,2</td>\n      </tr>\n      <tr>\n        <td>p.note</td>\n        <td>0,0,1,1</td>\n      </tr>\n      <tr>\n        <td>form.feedbackForm input [type = \"text\" ]</td>\n        <td>0,0,2,2</td>\n      </tr>\n      <tr>\n        <td>#conten a: hover</td>\n        <td>0,1,1,1</td>\n      </tr>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/inherit/inherit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/css/components/inherit/inherit.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/inherit/inherit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/css/components/inherit/inherit.component.ts ***!
  \*******************************************************************/
/*! exports provided: InheritComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InheritComponent", function() { return InheritComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InheritComponent = /** @class */ (function () {
    function InheritComponent() {
    }
    InheritComponent.prototype.ngOnInit = function () {
    };
    InheritComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inherit',
            template: __webpack_require__(/*! ./inherit.component.html */ "./src/app/pages/css/components/inherit/inherit.component.html"),
            styles: [__webpack_require__(/*! ./inherit.component.scss */ "./src/app/pages/css/components/inherit/inherit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InheritComponent);
    return InheritComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/link/link.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/css/components/link/link.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h3>\n      Способи підключення на сторінку\n    </h3>\n    <ol class=\"list\">\n      <li>Внутрішні таблиці стилів. При цьому стилі задаються за допомогою атрибуту style в середині HTML елементу\n      </li>\n      <li>Вбудовані таблиці. Його ми вже розглянули. При цьому способі таблиця стилів вбудовується в заголовок\n        html-сторінки. через тег <kbd>style</kbd></li>\n      <li>Підключення зовнішнього файлу стилів. Це відбувається за допомогою тегу link в заголовку сторінки з\n        атрибутами rel який вказує на тип файлу що підключається і href що вказує на шлях до файлу стилів\n      </li>\n    </ol>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>\n      Селектори\n    </h3>\n    <ul class=\"list\">\n      <li><kbd>* &#123;...&#125;</kbd>\n        <br>вибір всіх елементів на сторінці (обнулення)\n      </li>\n      <li><kbd>тег &#123;...&#125;</kbd><var>селектор тегів</var>\n        <br>Вибір всіх тегів даного виду на сторінці\n      </li>\n      <li><kbd>#назва &#123;...&#125;</kbd><var>селектор id ‘айді’</var>\n        <br>Вибір єдиного елемента на сторінці в якого id=”назва”\n      </li>\n      <li><kbd>.назва &#123;...&#125;</kbd><var>селектор класів</var>\n        <br>Вибір всіх елементів на сторінці в яких class=”назва”\n      </li>\n      <li><kbd>[атрибут=значення] &#123;...&#125;</kbd><var>селектор атрибутів</var>\n        <br>Вибір всіх елементів на сторінці в яких атрибут=”значення”\n      </li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>Комбінований селектор або селектор відношення</h3>\n    <ul class=\"list\">\n      <li><kbd>div p</kbd>-елементи p , що є нащадками div (знаходяться всередині блоку div).</li>\n      <li><kbd>div,p</kbd>-всі div і всі p елементи.</li>\n      <li><kbd>div,p</kbd>-всі div і всі p елементи.</li>\n      <li><kbd>div,p</kbd>-всі div і всі p елементи.</li>\n      <li><kbd>div>p</kbd>-тільки безпосередні нащадки</li>\n      <li></li>\n      <li><kbd>div ~ p</kbd>всі p на тому ж рівні вкладеності, які йдуть після div</li>\n      <li><kbd>div + p</kbd>перший p на тому ж рівні вкладеності, який йде відразу після div (якщо є)</li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/link/link.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/css/components/link/link.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/link/link.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/css/components/link/link.component.ts ***!
  \*************************************************************/
/*! exports provided: LinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkComponent", function() { return LinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinkComponent = /** @class */ (function () {
    function LinkComponent() {
    }
    LinkComponent.prototype.ngOnInit = function () {
    };
    LinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-link',
            template: __webpack_require__(/*! ./link.component.html */ "./src/app/pages/css/components/link/link.component.html"),
            styles: [__webpack_require__(/*! ./link.component.scss */ "./src/app/pages/css/components/link/link.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkComponent);
    return LinkComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/position/position.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/css/components/position/position.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n  <div>\n    <h3>\n      CSS позиціонування (position)\n    </h3>\n    <ul class=\"list\">\n      <li><kbd>position:static</kbd>\tзначення за замовчуванням, означає відсутність позиціонування.Елементи відображаються послідовно один за іншим в тому порядку, в якому вони визначені в html-документі.</li>\n      <li><kbd>position:relative</kbd>\tдозволяє зміщувати елемент щодо його поточного становища в структурі html-документа вгору, вправо, вниз або вліво (залежить від того, яке встановлено значення: top / right / bottom / left ).</li>\n      <li><kbd>position:absolute</kbd>\tзадається лише для блокових display: block і рядково-блоковихdisplay: inline-block елементів. Положення елемента зміщується щодо батьківського елементу вгору, вправо, вниз або вліво в залежності від того, яке встановлено значення: top / right / bottom / left , при цьому порушується порядок відображення елементів. Елементи, які йдуть за ним, можуть потрапити під нього.</li>\n      <li><kbd>position:fixed</kbd>\tфіксує елемент в потрібному місці сторінки. При прокручуванні сторінки становище елемента на сторінці не змінюється. Елемент можна змістити вгору, вправо, вниз або вліво в залежності від заданого значення: top / right / bottom / left .</li>\n      <li><kbd>z-index:</kbd> імітує 3тій вимір для елементів з position:fixed, absolute, relative. для того щоб визначити який з них буде вижче/нижче при накладанні один на одного</li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/position/position.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/css/components/position/position.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/position/position.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/css/components/position/position.component.ts ***!
  \*********************************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PositionComponent = /** @class */ (function () {
    function PositionComponent() {
    }
    PositionComponent.prototype.ngOnInit = function () {
    };
    PositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/pages/css/components/position/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.scss */ "./src/app/pages/css/components/position/position.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/properties/properties.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/css/components/properties/properties.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h3>\n      Властивості фону\n    </h3>\n    <ul class=\"ul\">\n      <li>background-color: колір фону елемента</li>\n      <li>background-image: зображення фону елемента</li>\n      <li>background-repeat : повтор фонового зображення (по замовчуванню стоїть значення повтору, можна зробити без\n        повтору, і повтор по осі Х або У)використовується для паттернів\n      </li>\n      <li>background-position: позиція фонового зображення</li>\n      <li>background-attachment: вказує прокручувати фонове зображення разом з текстом чи ні</li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>Розміри елементів</h3>\n    <ul class=\"ul\">\n      <li>height: висота елемента</li>\n      <li>width: ширина елемента</li>\n    </ul>\n    <ul class=\"ul\">\n      <li>border-style: Стиль всіх рамок елемента</li>\n      <li>border-color: колір рамки</li>\n      <li>border-width: ширина рамки</li>\n      <li>border-(top right left bottom)-властивість: окремі стилі для кожної з сторін</li>\n    </ul>\n    <ul class=\"ul\">\n      <li>padding-(top right left bottom): задає внутрішні відступи від кожної сторони елементу</li>\n      <li>margin-(top right left bottom): задає зовнішні відступи від кожної сторони елементу</li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>Властивості шрифтів</h3>\n    <ul class=\"ul\">\n      <li>font-size: розмір шрифту</li>\n      <li>font-style: стиль шрифту (normal italic)</li>\n      <li>font-weight: жирність шрифту(lighter, normal, bold, bolder) або (100-900) з кроком 100, 400 відповідає\n        нормальному шрифту, а 700 - напівжирний\n      </li>\n      <li>font-family: задає сімейство шрифту для елемента (\"Times New Roman\", Georgia, Serif)</li>\n    </ul>\n    <ul class=\"ul\">\n      <li>text-align: (left right center justify) задає спосіб вирівнювання тексту по горизонталі.</li>\n      <li>color: колір тексту</li>\n      <li>letter-spacing: відстань між буквами</li>\n      <li>text-transform: (none, capitalize, uppercase, lowercase)перетворення тексту в заголовні або рядкові\n        літери.\n      </li>\n      <li>text-decoration: (none, underline, overline, line-through)оформлення підкреслення тексту.</li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>Властивості списків</h3>\n    <ul class=\"ul\">\n      <li>list-style-image: замінює маркер пункту списку на зображення</li>\n      <li>list-style-position: (inside, outside)визначає положення маркера списку.</li>\n      <li>list-style-type: визначає тип маркера пункту списку.</li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>\n      Універсальні властивості\n    </h3>\n    <ul class=\"ul\">\n      <li>background: (background-attachment background-color background-image background-position background-repeat\n        inherit)\n      </li>\n      <li>border: (border-width border-style border-color inherit)</li>\n      <li>margin: (top right botton left), (top-bottom left-right), (auto)</li>\n      <li>padding: (top right botton left), (top-bottom left-right)</li>\n      <li>text-shadow: (зсувХ зсувY розмиття колір) додає тінь до тексту.</li>\n      <li>box-shadow: (зсувХ зсувY розмиття колір) додає тінь до блоку.</li>\n      <li>font: weight size/line-height family</li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/properties/properties.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/css/components/properties/properties.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/properties/properties.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/css/components/properties/properties.component.ts ***!
  \*************************************************************************/
/*! exports provided: PropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesComponent", function() { return PropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertiesComponent = /** @class */ (function () {
    function PropertiesComponent() {
    }
    PropertiesComponent.prototype.ngOnInit = function () {
    };
    PropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties',
            template: __webpack_require__(/*! ./properties.component.html */ "./src/app/pages/css/components/properties/properties.component.html"),
            styles: [__webpack_require__(/*! ./properties.component.scss */ "./src/app/pages/css/components/properties/properties.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertiesComponent);
    return PropertiesComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/pseudo/pseudo.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/css/components/pseudo/pseudo.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n  <div>\n    <h3>\n      Псевдокласи - це селектори, які визначають стан вже існуючих елементів, який може змінюватися за певних умов.\n    </h3>\n    <ul class=\"list\">\n      <li><kbd>селектор:active &#123;...&#125;</kbd> <br>при активації користувачем елементу (клік на посилання).</li>\n      <li><kbd>селектор:link &#123;...&#125;</kbd> <br>застосовується до невідвідуваних посилань, на які користувач ще не натискав.</li>\n      <li><kbd>селектор:focus &#123;...&#125;</kbd> <br>застосовується до елемента при отриманні ним фокусу (курсор встановлений в полі, і за допомогою клавіатури можна вводити в нього текст )</li>\n      <li><kbd>селектор:hover &#123;...&#125;</kbd> <br>активізується коли курсор миші знаходиться в межах елемента але клацання по ньому не відбувається.</li>\n      <li><kbd>селектор:visited &#123;...&#125;</kbd> <br>застосовується до відвіданих посилань.</li>\n      <li>Псевдокласи що мають відношення до дерева документа</li>\n      <li><kbd>селектор:first | last | nth()-child &#123;...&#125;</kbd><br>застосовується до певного дочірнього елементу селектора який розташований в дереві елементів документа.          </li>\n    </ul>\n\n  </div>\n</section>\n<section>\n  <div>\n    <h3>\n      Псевдоелементи - це селектори, які визначають область елементів , яка спочатку відсутня в дереві документа. Ця область створюється штучно за допомогою CSS .\n    </h3>\n    <ul class=\"list\">\n      <li><kbd>селектор : after &#123;...&#125;</kbd> <br>застосовується для вставки призначеного контенту після вмісту елемента. Цей псевдоелемент працює спільно зі стильовим властивістю content , яке визначає вміст для вставки.</li>\n      <li><kbd>селектор : before &#123;...&#125;</kbd> <br>аналогічний псевдоелементу : after , але вставляє контент до вмісту елементу.</li>\n      <li><kbd>селектор : first-letter &#123;...&#125;</kbd> <br>визначає стиль першого символу в тексті елемента, до якого додається.</li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/pseudo/pseudo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/css/components/pseudo/pseudo.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/pseudo/pseudo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/css/components/pseudo/pseudo.component.ts ***!
  \*****************************************************************/
/*! exports provided: PseudoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PseudoComponent", function() { return PseudoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PseudoComponent = /** @class */ (function () {
    function PseudoComponent() {
    }
    PseudoComponent.prototype.ngOnInit = function () {
    };
    PseudoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pseudo',
            template: __webpack_require__(/*! ./pseudo.component.html */ "./src/app/pages/css/components/pseudo/pseudo.component.html"),
            styles: [__webpack_require__(/*! ./pseudo.component.scss */ "./src/app/pages/css/components/pseudo/pseudo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PseudoComponent);
    return PseudoComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/reset/reset.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/css/components/reset/reset.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h3>\n      Онулення стилів\n    </h3>\n    <h4>\n      За допомогою селектора *\n    </h4>\n    <blockquote class=\"blockquote\">\n      <code>\n        * &#x7b;<br>\n        &nbsp;margin: 0;<br>\n        &nbsp;padding: 0;<br>\n        &#x7d;\n      </code>\n    </blockquote>\n    <ul class=\"list\">\n      <li><strong>переваги:</strong> простота, скорочення коду CSS,</li>\n      <li><strong>недоліки:</strong> не охоплює всі можливі властивості, які потрібно скинути</li>\n    </ul>\n  </div>\n</section>\n<section>\n  <div>\n    <h3>\n      За допомогою таблиць готових стилів\n    </h3>\n    <ul class=\"list\">\n      <li>\n        <a href=\"https://meyerweb.com/eric/tools/css/reset/reset.css\" target=\"_blank\" class=\"link\">\n          reset.css\n        </a>\n      </li>\n      <li>\n        <a href=\"https://necolas.github.io/normalize.css/8.0.0/normalize.css\" target=\"_blank\" class=\"link\">\n          normalize.css\n        </a>\n      </li>\n    </ul>\n    <p>\n      прописуються перед основними стилями\n    </p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/reset/reset.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/css/components/reset/reset.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/reset/reset.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/css/components/reset/reset.component.ts ***!
  \***************************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetComponent = /** @class */ (function () {
    function ResetComponent() {
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/pages/css/components/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.scss */ "./src/app/pages/css/components/reset/reset.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/units/units.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/css/components/units/units.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n  <div>\n    <h3>\n      Одиниці розмірів в CSS\n    </h3>\n    <h4>\n      Давно забуті одиниці:\n    </h4>\n    <ul class=\"list\">\n      <li>1mm (мм) = 3.8px</li>\n      <li>1cm (см) = 38px</li>\n      <li>1pt (друкарський пункт) = 4/3 px</li>\n      <li>1pc (друкарський піку) = 16px</li>\n    </ul>\n    <br>\n    <h4>Піксель (px) - це базова, абсолютна і остаточна одиниця виміру</h4>\n    <ul class=\"list\">\n      <li>+ чіткість і зрозумілість</li>\n      <li>- інші одиниці вимірювання - в деякому сенсі «могутніші», вони є відносними і дозволяють встановлювати співвідношення між різними розмірами</li>\n    </ul>\n    <!--        < Div  style = \" font-size : 24 px \" >  страуси\n            < Div  style = \" font-size : 24 px \" > живуть також в Африці </ div >\n        </ div >-->\n    <br>\n    <h4>\n      1em - поточний розмір шрифту\n    </h4>\n    <p>\n      Розміри в em - відносні , вони визначаються за поточним контекстом.\n    </p>\n    <!--        < Div  style = \" font-size : 2em \" >  страуси\n            < Div  style = \" font-size : 2em \" > живуть також в Африці </ div >\n        </ div >-->\n    <br>\n    <h4>\n      Відсотки %\n    </h4>\n    <p>\n      Відсотки % , як і em - відносні одиниці, відсоток буде від такої ж властивості батьківського елементу <br>\n      Використовуються для резинової верстки\n    </p>\n    <!--\n    < Div  style = \" font-size : 200% \" >  страуси\n< Div  style = \" font-size : 200% \" > живуть також в Африці </ div >\n</ div >\n    -->\n    <p>\n      Але не коректно працює для:\n      margin-left\n      line-height\n      height\n    </p>\n    <br>\n    <h4>\n      Одиниця rem: суміш px і em\n    </h4>\n    <p>\n      Задає розмір щодо розміру шрифту елемента html\n    </p>\n    <!--        < Div  style = \" font-size : 2rem \" >  страуси\n            < Div  style = \" font-size : 2rem \" > живуть також в Африці </ div >\n        </ div >-->\n    <br>\n    <h4>\n      Одиниці відносно розмірів екрану\n    </h4>\n    <p>\n      У всіх сучасних браузерах, виключаючи IE8-, підтримуються нові одиниці :\n    </p>\n    <ul class=\"list\">\n      <li>vw - 1% ширини вікна</li>\n      <li>vh - 1% висоти вікна</li>\n      <li>vmin - найменше з ( vw , vh ), в IE9 позначається vm</li>\n      <li>vmax - найбільше з ( vw , vh )</li>\n    </ul>\n\n\n\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/units/units.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/css/components/units/units.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/components/units/units.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/css/components/units/units.component.ts ***!
  \***************************************************************/
/*! exports provided: UnitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsComponent", function() { return UnitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnitsComponent = /** @class */ (function () {
    function UnitsComponent() {
    }
    UnitsComponent.prototype.ngOnInit = function () {
    };
    UnitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-units',
            template: __webpack_require__(/*! ./units.component.html */ "./src/app/pages/css/components/units/units.component.html"),
            styles: [__webpack_require__(/*! ./units.component.scss */ "./src/app/pages/css/components/units/units.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UnitsComponent);
    return UnitsComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/components/vendor/vendor.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/css/components/vendor/vendor.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h3>\n      Вендорні префікси\n    </h3>\n    <h4>\n      для найпоширеніших браузерів\n    </h4>\n    <ul class=\"list\">\n      <li><kbd>-o-</kbd>, <kbd>-op-</kbd>, <kbd>-xv-</kbd> - Opera Softwara</li>\n      <li><kbd>-moz-</kbd> - проект Mozilla</li>\n      <li><kbd>-ms-</kbd> - Internet Explorer 8 || Trident</li>\n      <li><kbd>-webkit-</kbd> - Apple Safari 3+, Google Chrome і ін.</li>\n    </ul>\n\n  </div>\n</section>\n\n<section>\n  <div>\n    <h3>/* Cross-browser CSS3 linear-gradient */</h3>\n    <blockquote class=\"blockquote\">\n      <code>\n        .linear-gradient &#x7b;\n        <div style=\"padding-left: 20px; padding-top: 20px; padding-bottom: 20px;\">\n          /* Gecko browser (Firefox) */<br>\n          background-image: -moz-linear-gradient(top, #D7D 0%, #068 100%);<br>\n          <br>\n          /* Opera */\n          background-image: -o-linear-gradient(top, #D7D 0%, #068 100%);<br>\n          <br>\n          /* older Webkit syntax */<br>\n          background-image: -webkit-gradient(linear, left top, left bottom,<br>\n          color-stop(0, #D7D), color-stop(1, #068));<br>\n          <br>\n          /* Webkit (Safari, Chrome, iOS, Android) */<br>\n          background-image: -webkit-linear-gradient(top, #D7D 0%, #068 100%);<br>\n          <br>\n          /* W3C */<br>\n          background-image: linear-gradient(to bottom, #D7D 0%, #068 100%);<br>\n        </div>\n        &#x7d;\n      </code>\n    </blockquote>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/css/components/vendor/vendor.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/css/components/vendor/vendor.component.ts ***!
  \*****************************************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VendorComponent = /** @class */ (function () {
    function VendorComponent() {
    }
    VendorComponent.prototype.ngOnInit = function () {
    };
    VendorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor',
            template: __webpack_require__(/*! ./vendor.component.html */ "./src/app/pages/css/components/vendor/vendor.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], VendorComponent);
    return VendorComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/css.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/css/css.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" hasBackdrop=\"true\">\n  <mat-drawer #drawer mode=\"over\" class=\"pageNav\">\n    <nav>\n      <a *ngFor=\"let item of pages\"\n         class=\"pageNav-link\"\n         routerLinkActive=\"pageNav-link--active\"\n         [routerLink]=\"item.link\">\n        {{item.title}}\n      </a>\n    </nav>\n  </mat-drawer>\n  <mat-drawer-content>\n    <button class=\"pageNav-toggle btn btn-primary btn-fab btn-fab-mini btn-round\"\n            (click)=\"drawer.toggle()\">\n      <i class=\"material-icons\">\n        compare_arrows\n      </i>\n    </button>\n    <div class=\"page-header header-filter\"\n         data-parallax=\"true\"\n         style=\"background-image: url('assets/img/IOT/css3.jpg')\">\n    </div>\n\n    <div class=\"main main-raised\">\n      <div class=\"container\">\n        <div class=\"section text-center\">\n          <h2 class=\"title\">CSS3</h2>\n          <h4>(англ. Cascading Style Sheets) — спеціальна мова, що використовується для опису сторінок, написаних мовами\n            розмітки даних (HTML).</h4>\n        </div>\n        <img src=\"assets/img/css/css.gif\" alt=\"\">\n        <div class=\"section\">\n          <blockquote class=\"blockquote\">\n            <code>\n              селектор &#x7b;<br>\n              властивість: значення;<br>\n              &#x7d;\n            </code>\n          </blockquote>\n        </div>\n        <router-outlet></router-outlet>\n        <br>\n      </div>\n    </div>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/pages/css/css.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/css/css.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/css/css.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/css/css.component.ts ***!
  \********************************************/
/*! exports provided: CssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssComponent", function() { return CssComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CssComponent = /** @class */ (function () {
    function CssComponent() {
        this.pages = [
            {
                'link': 'link',
                'title': 'Підключення',
            },
            {
                'link': 'properties',
                'title': 'Властивості',
            },
            {
                'link': 'reset',
                'title': 'Онулення стилів',
            },
            {
                'link': 'box-model',
                'title': 'Блочна модель',
            }, {
                'link': 'pseudo',
                'title': 'Псевдокласи & Псевдоелементи',
            }, {
                'link': 'inherit',
                'title': 'Спецефічність і успадкування',
            }, {
                'link': 'units',
                'title': 'Одиниці',
            }, {
                'link': 'colors',
                'title': 'Кольори',
            }, {
                'link': 'fonts',
                'title': 'Шрифти',
            }, {
                'link': 'position',
                'title': 'Позиціонування',
            },
            {
                'link': 'flexbox',
                'title': 'Flexbox',
            },
            {
                'link': 'html5-css3',
                'title': 'HTML5/CSS3',
            },
            {
                'link': 'animations',
                'title': 'CSS3 animations',
            },
            {
                'link': 'vendor',
                'title': 'Vendor prefix',
            },
            {
                'link': 'adaptation',
                'title': 'Адаптація',
            }, {
                'link': 'css-pro',
                'title': 'CSS-pro',
            }
        ];
    }
    CssComponent.prototype.ngOnInit = function () {
    };
    CssComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-css',
            template: __webpack_require__(/*! ./css.component.html */ "./src/app/pages/css/css.component.html"),
            styles: [__webpack_require__(/*! ./css.component.scss */ "./src/app/pages/css/css.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CssComponent);
    return CssComponent;
}());



/***/ }),

/***/ "./src/app/pages/css/css.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/css/css.module.ts ***!
  \*****************************************/
/*! exports provided: CssModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssModule", function() { return CssModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _css_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css.component */ "./src/app/pages/css/css.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_properties_properties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/properties/properties.component */ "./src/app/pages/css/components/properties/properties.component.ts");
/* harmony import */ var _components_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/link/link.component */ "./src/app/pages/css/components/link/link.component.ts");
/* harmony import */ var _components_box_model_box_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/box-model/box-model.component */ "./src/app/pages/css/components/box-model/box-model.component.ts");
/* harmony import */ var _components_pseudo_pseudo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pseudo/pseudo.component */ "./src/app/pages/css/components/pseudo/pseudo.component.ts");
/* harmony import */ var _components_inherit_inherit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inherit/inherit.component */ "./src/app/pages/css/components/inherit/inherit.component.ts");
/* harmony import */ var _components_units_units_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/units/units.component */ "./src/app/pages/css/components/units/units.component.ts");
/* harmony import */ var _components_colors_colors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/colors/colors.component */ "./src/app/pages/css/components/colors/colors.component.ts");
/* harmony import */ var _components_fonts_fonts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/fonts/fonts.component */ "./src/app/pages/css/components/fonts/fonts.component.ts");
/* harmony import */ var _components_position_position_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/position/position.component */ "./src/app/pages/css/components/position/position.component.ts");
/* harmony import */ var _components_flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/flexbox/flexbox.component */ "./src/app/pages/css/components/flexbox/flexbox.component.ts");
/* harmony import */ var _components_html5_css3_html5_css3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/html5-css3/html5-css3.component */ "./src/app/pages/css/components/html5-css3/html5-css3.component.ts");
/* harmony import */ var _components_css_animations_css_animations_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/css-animations/css-animations.component */ "./src/app/pages/css/components/css-animations/css-animations.component.ts");
/* harmony import */ var _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/reset/reset.component */ "./src/app/pages/css/components/reset/reset.component.ts");
/* harmony import */ var _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/vendor/vendor.component */ "./src/app/pages/css/components/vendor/vendor.component.ts");
/* harmony import */ var _shared_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/custom-material/custom-material.module */ "./src/app/shared/custom-material/custom-material.module.ts");
/* harmony import */ var _components_css_pro_css_pro_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/css-pro/css-pro.component */ "./src/app/pages/css/components/css-pro/css-pro.component.ts");
/* harmony import */ var _components_adaptation_adaptation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/adaptation/adaptation.component */ "./src/app/pages/css/components/adaptation/adaptation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var CssModule = /** @class */ (function () {
    function CssModule() {
    }
    CssModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_18__["CustomMaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '', component: _css_component__WEBPACK_IMPORTED_MODULE_2__["CssComponent"], children: [
                            { path: '', redirectTo: 'properties' },
                            { path: 'properties', component: _components_properties_properties_component__WEBPACK_IMPORTED_MODULE_4__["PropertiesComponent"] },
                            { path: 'link', component: _components_link_link_component__WEBPACK_IMPORTED_MODULE_5__["LinkComponent"] },
                            { path: 'box-model', component: _components_box_model_box_model_component__WEBPACK_IMPORTED_MODULE_6__["BoxModelComponent"] },
                            { path: 'pseudo', component: _components_pseudo_pseudo_component__WEBPACK_IMPORTED_MODULE_7__["PseudoComponent"] },
                            { path: 'inherit', component: _components_inherit_inherit_component__WEBPACK_IMPORTED_MODULE_8__["InheritComponent"] },
                            { path: 'units', component: _components_units_units_component__WEBPACK_IMPORTED_MODULE_9__["UnitsComponent"] },
                            { path: 'colors', component: _components_colors_colors_component__WEBPACK_IMPORTED_MODULE_10__["ColorsComponent"] },
                            { path: 'fonts', component: _components_fonts_fonts_component__WEBPACK_IMPORTED_MODULE_11__["FontsComponent"] },
                            { path: 'position', component: _components_position_position_component__WEBPACK_IMPORTED_MODULE_12__["PositionComponent"] },
                            { path: 'flexbox', component: _components_flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_13__["FlexboxComponent"] },
                            { path: 'html5-css3', component: _components_html5_css3_html5_css3_component__WEBPACK_IMPORTED_MODULE_14__["Html5Css3Component"] },
                            { path: 'animations', component: _components_css_animations_css_animations_component__WEBPACK_IMPORTED_MODULE_15__["CssAnimationsComponent"] },
                            { path: 'reset', component: _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_16__["ResetComponent"] },
                            { path: 'vendor', component: _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_17__["VendorComponent"] },
                            { path: 'css-pro', component: _components_css_pro_css_pro_component__WEBPACK_IMPORTED_MODULE_19__["CssProComponent"] },
                            { path: 'adaptation', component: _components_adaptation_adaptation_component__WEBPACK_IMPORTED_MODULE_20__["AdaptationComponent"] },
                        ],
                    },
                ]),
            ],
            declarations: [
                _css_component__WEBPACK_IMPORTED_MODULE_2__["CssComponent"],
                _components_properties_properties_component__WEBPACK_IMPORTED_MODULE_4__["PropertiesComponent"],
                _components_link_link_component__WEBPACK_IMPORTED_MODULE_5__["LinkComponent"],
                _components_box_model_box_model_component__WEBPACK_IMPORTED_MODULE_6__["BoxModelComponent"],
                _components_pseudo_pseudo_component__WEBPACK_IMPORTED_MODULE_7__["PseudoComponent"],
                _components_inherit_inherit_component__WEBPACK_IMPORTED_MODULE_8__["InheritComponent"],
                _components_units_units_component__WEBPACK_IMPORTED_MODULE_9__["UnitsComponent"],
                _components_colors_colors_component__WEBPACK_IMPORTED_MODULE_10__["ColorsComponent"],
                _components_fonts_fonts_component__WEBPACK_IMPORTED_MODULE_11__["FontsComponent"],
                _components_position_position_component__WEBPACK_IMPORTED_MODULE_12__["PositionComponent"],
                _components_flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_13__["FlexboxComponent"],
                _components_html5_css3_html5_css3_component__WEBPACK_IMPORTED_MODULE_14__["Html5Css3Component"],
                _components_css_animations_css_animations_component__WEBPACK_IMPORTED_MODULE_15__["CssAnimationsComponent"],
                _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_16__["ResetComponent"],
                _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_17__["VendorComponent"],
                _components_css_pro_css_pro_component__WEBPACK_IMPORTED_MODULE_19__["CssProComponent"],
                _components_adaptation_adaptation_component__WEBPACK_IMPORTED_MODULE_20__["AdaptationComponent"],
            ]
        })
    ], CssModule);
    return CssModule;
}());



/***/ })

}]);
//# sourceMappingURL=css-css-module.js.map