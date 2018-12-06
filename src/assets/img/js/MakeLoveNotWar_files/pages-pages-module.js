(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/courses/courses.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/courses/courses.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header header-filter\" data-parallax=\"true\"\n     style=\"background-image: url('assets/img/bg.png'); height: 100vh\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 ml-auto mr-auto\">\n          <div class=\"brand text-center\">\n            <h2>Hello!</h2>\n            <h2>Welcome to my Front-end course</h2>\n            <h3>\n              <a href=\"https://t.me/joinchat/EWpmQhJXurOpYX5LJaGV-w\" target=\"_blank\">Telegram chat</a>\n              &nbsp;\n              <a href=\"https://drive.google.com/drive/folders/0B0d7_z1X4qoDaU0wbG53WGRjdlE\" target=\"_blank\">Google drive</a>\n            </h3>\n            <h3>\n              <a routerLink=\"/courses/html\">\n                <i class=\"fa fa fa-html5\"></i> &nbsp;\n                HTML\n              </a>\n              &nbsp;\n              <a routerLink=\"/courses/css\">\n                <i class=\"fa fa fa-css3\"></i> &nbsp;\n                CSS\n              </a>\n            </h3>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/courses/courses.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/courses/courses.component.ts ***!
  \****************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
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

var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/pages/courses/courses.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/pages/courses/courses.component.ts");
/* harmony import */ var _shared_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/custom-material/custom-material.module */ "./src/app/shared/custom-material/custom-material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_4__["CustomMaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_3__["CoursesComponent"] },
                    { path: 'css', loadChildren: './css/css.module#CssModule' },
                    { path: 'html', loadChildren: './html/html.module#HtmlModule' },
                    { path: 'js', loadChildren: './js/js.module#JsModule' },
                ])
            ],
            declarations: [
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_3__["CoursesComponent"],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map