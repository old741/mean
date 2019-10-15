(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-5 py-5\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card>\n      <mat-card-title>Mon compte</mat-card-title>\n      <!-- pipe asyn apres un let user Stock la valeur de l'observable dans user\n      avantage pipe async pas besoin de géré le unsubscribe destroy fait automatiquement -->\n      <mat-card-content *ngIf=\"currentUser$ | async;let user;\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n        <div>email : {{ user.email }} </div>\n        <div>name : {{ user.name }} </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _share_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/store/actions/auth.actions */ "./src/app/share/store/actions/auth.actions.ts");
/* harmony import */ var _share_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/store/selectors/auth.selectors */ "./src/app/share/store/selectors/auth.selectors.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(store) {
        this.store = store;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.currentUser$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_share_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["currentUserSelector"]));
        this.store.dispatch(new _share_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["TryFetchCurrentUser"]());
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.routes */ "./src/app/profile/profile.routes.ts");
/* harmony import */ var _share_modules_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/modules/layout.module */ "./src/app/share/modules/layout.module.ts");






var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_profile_routes__WEBPACK_IMPORTED_MODULE_4__["PROFILE_ROUTES"]),
                _share_modules_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.routes.ts ***!
  \*******************************************/
/*! exports provided: PROFILE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_ROUTES", function() { return PROFILE_ROUTES; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");

var PROFILE_ROUTES = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map