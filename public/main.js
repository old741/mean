(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./photos/photos.module": [
		"./src/app/photos/photos.module.ts",
		"photos-photos-module"
	],
	"./profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"profile-profile-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _share_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share/store/actions/auth.actions */ "./src/app/share/store/actions/auth.actions.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'client';
        this.store.dispatch(new _share_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["TryRefreshToken"]);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _share_modules_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./share/modules/core.module */ "./src/app/share/modules/core.module.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _share_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./share/store */ "./src/app/share/store/index.ts");
/* harmony import */ var _share_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./share/store/effects/auth.effects */ "./src/app/share/store/effects/auth.effects.ts");

// Module natifs




//Modules

// Component

// routing


// NgRx





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _share_modules_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["APP_ROUTING"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_share_store__WEBPACK_IMPORTED_MODULE_12__["reducersMap"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
                    name: 'Ngrx Photos',
                    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production // pour ne pas avoir acces en production au store sinon posez vous des questions ? 
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_share_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_13__["AuthEffects"]]),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _share_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share/guards/auth.guard */ "./src/app/share/guards/auth.guard.ts");



var APP_ROUTING = [
    { path: '',
        pathMatch: 'full',
        redirectTo: 'photos'
    },
    { path: 'photos', loadChildren: './photos/photos.module#PhotosModule' },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_0__["SignupComponent"] },
    { path: 'signin', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"] },
    { path: 'profile', canActivate: [_share_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], loadChildren: './profile/profile.module#ProfileModule' },
];


/***/ }),

/***/ "./src/app/components/signin/signin.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signin/signin.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signin/signin.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signin/signin.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-5 py-5\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <mat-card>Connexion\r\n    <mat-card-content>\r\n      <form [formGroup]=\"form\" fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n        <mat-form-field>\r\n          <input matInput type=\"email\" placeholder=\"email\" formControlName=\"email\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput type=\"password\" placeholder=\"mot de passe\" formControlName=\"password\">\r\n        </mat-form-field>\r\n        <div style=\"color:red;\" *ngIf=\"error$ | async; let error\">{{ error }}</div>\r\n        <button (click)=\"submit()\" color=\"primary\" mat-raised-button>Connexion</button>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_share_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/store/selectors/auth.selectors */ "./src/app/share/store/selectors/auth.selectors.ts");
/* harmony import */ var src_app_share_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/store/actions/auth.actions */ "./src/app/share/store/actions/auth.actions.ts");







var SigninComponent = /** @class */ (function () {
    function SigninComponent(fb, router, store) {
        this.fb = fb;
        this.router = router;
        this.store = store;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: [''],
            password: ['']
        });
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_share_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["errorAuthSelector"]));
    };
    SigninComponent.prototype.submit = function () {
        this.store.dispatch(new src_app_share_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["TrySignin"](this.form.value));
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-5 py-5\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <mat-card>Inscription\r\n    <mat-card-content>\r\n      <form [formGroup]=\"form\" fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n        <mat-form-field>\r\n              <input matInput type=\"email\" placeholder=\"email\" formControlName=\"email\">\r\n            </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput type=\"name\" placeholder=\"name\" formControlName=\"name\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput type=\"password\" placeholder=\"mot de passe\" formControlName=\"password\">\r\n        </mat-form-field>\r\n        <div *ngIf=\"error$ | async; let error\"><pre>{{ error }}</pre></div>\r\n          <button (click)=\"submit()\" color=\"primary\" mat-raised-button>Inscription</button>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_share_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/auth.service */ "./src/app/share/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_share_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/store/actions/auth.actions */ "./src/app/share/store/actions/auth.actions.ts");
/* harmony import */ var src_app_share_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/store/selectors/auth.selectors */ "./src/app/share/store/selectors/auth.selectors.ts");








var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, authService, router, store) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.store = store;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: [''],
            name: [''],
            password: ['']
        });
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(src_app_share_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["errorAuthSelector"]));
    };
    SignupComponent.prototype.submit = function () {
        this.store.dispatch(new src_app_share_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["TrySignup"](this.form.value));
        // this.authService.signup(this.form.value).subscribe( (user:User) => {
        //   // ca marche donc redirection sur la page de connexion
        //   this.router.navigate(['/signin'])
        // },err =>{
        //   console.log('[err] = ', err)
        //   this.error = err.error;
        // });
        // console.log(this.form.value)
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_share_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/photos/shared/store/photos.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/photos/shared/store/photos.actions.ts ***!
  \*******************************************************/
/*! exports provided: PhotosActionTypes, SetFilter, FetchPhotos, FetchPhotosSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosActionTypes", function() { return PhotosActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilter", function() { return SetFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPhotos", function() { return FetchPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPhotosSuccess", function() { return FetchPhotosSuccess; });
var PhotosActionTypes;
(function (PhotosActionTypes) {
    PhotosActionTypes["SetFilter"] = "[ Photos ] - Set filter";
    PhotosActionTypes["FetchPhotos"] = "[ Photos ] - Fetch photos";
    PhotosActionTypes["FetchPhotosSuccess"] = "[ Photos ] - Fetch photos success";
})(PhotosActionTypes || (PhotosActionTypes = {}));
var SetFilter = /** @class */ (function () {
    function SetFilter(payload) {
        this.payload = payload;
        this.type = PhotosActionTypes.SetFilter;
    }
    return SetFilter;
}());

var FetchPhotos = /** @class */ (function () {
    function FetchPhotos() {
        this.type = PhotosActionTypes.FetchPhotos;
    }
    return FetchPhotos;
}());

var FetchPhotosSuccess = /** @class */ (function () {
    function FetchPhotosSuccess(payload) {
        this.payload = payload;
        this.type = PhotosActionTypes.FetchPhotosSuccess;
    }
    return FetchPhotosSuccess;
}());



/***/ }),

/***/ "./src/app/share/components/topbar/topbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/share/components/topbar/topbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n    outline: 0;\r\n    padding: 3px 20px;\r\n    font-size: 14px;\r\n    border-radius:3px ;\r\n    border: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmUvY29tcG9uZW50cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmUvY29tcG9uZW50cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4IDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/share/components/topbar/topbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/share/components/topbar/topbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" fxLayoutGap=\"15px\">\r\n  <span class=\"link\" routerLink=\"/\">Mon Logo</span>\r\n    <input fxFlex=\"auto\" type=\"text\" (keyup)=\"applyFilter($event.target.value)\" >\r\n<!--   <span fxFlex=\"auto\"></span>\r\n -->  <span *ngIf=\"!(isLoggedIn$| async)\">\r\n    <span fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n      <span class=\"link\" routerLink=\"/signin\">Connexion</span>\r\n       <span class=\"link\" routerLink=\"/signup\">Inscription</span>\r\n    </span>\r\n    </span>\r\n    <span *ngIf=\"isLoggedIn$| async\" fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n      <span class=\"link\" routerLink=\"/profile\" >Mon compte</span>\r\n      <mat-icon class=\"link\" (click)=\"logout()\">power_settings_new</mat-icon>\r\n    </span>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/share/components/topbar/topbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/share/components/topbar/topbar.component.ts ***!
  \*************************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/share/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/selectors/auth.selectors */ "./src/app/share/store/selectors/auth.selectors.ts");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/auth.actions */ "./src/app/share/store/actions/auth.actions.ts");
/* harmony import */ var src_app_photos_shared_store_photos_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/photos/shared/store/photos.actions */ "./src/app/photos/shared/store/photos.actions.ts");








var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
    }
    TopbarComponent.prototype.ngOnInit = function () {
        // this.subscription= this.authService.jwtToken.subscribe((jwtToken:JwtToken) =>{
        //   this.jwtToken=jwtToken;
        // })
        this.isLoggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["isLoggedInSelector"]));
    };
    TopbarComponent.prototype.applyFilter = function (filter) {
        // console.log(filter)
        this.store.dispatch(new src_app_photos_shared_store_photos_actions__WEBPACK_IMPORTED_MODULE_7__["SetFilter"](filter));
        this.store.dispatch(new src_app_photos_shared_store_photos_actions__WEBPACK_IMPORTED_MODULE_7__["FetchPhotos"]());
    };
    TopbarComponent.prototype.logout = function () {
        //this.authService.logout();
        this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["Logout"]);
    };
    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/share/components/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/share/components/topbar/topbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/share/guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/share/guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/selectors/auth.selectors */ "./src/app/share/store/selectors/auth.selectors.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // la fonction ci dessous retourne un Observable
        // return this.authService.jwtToken.pipe(
        //   map( (jwtToken:JwtToken)=>{
        //     return jwtToken.isAuthenticated;
        //   })
        // );
        return this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), //take(1) on selectionne que la premiere valeur : 
        //on utilise l’opérateur take pour ne prendre que la première valeur puis couper la subscription à notre store.
        Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["isLoggedInSelector"]));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/share/interceptors/auth.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/share/interceptors/auth.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/selectors/auth.selectors */ "./src/app/share/store/selectors/auth.selectors.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(store) {
        var _this = this;
        this.store = store;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["tokenSelector"]))
            .subscribe(function (token) { return _this.token = token; });
    }
    // intecept la requete que nous allons catch
    AuthInterceptor.prototype.intercept = function (req, next) {
        //const token = localStorage.getItem('jwt');
        if (this.token) {
            // si on a un token on clone la requete pour lui passer le token
            var authReq = req.clone({
                // on set une key que lon appelle authorization avec notre token
                headers: req.headers.set('authorization', this.token)
            });
            // return next.handle(req) permert l'execution de la requete
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/share/modules/core.module.ts":
/*!**********************************************!*\
  !*** ./src/app/share/modules/core.module.ts ***!
  \**********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module */ "./src/app/share/modules/layout.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var src_app_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/topbar/topbar.component */ "./src/app/share/components/topbar/topbar.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "./src/app/share/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/share/services/auth.service.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../interceptors/auth.interceptor */ "./src/app/share/interceptors/auth.interceptor.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/share/guards/auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// Modules natifs




// components



// services


// interceptors

// Guards


// le core module doit contenir les services et guard 
var COMPONENTS = [
    src_app_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
    src_app_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"],
    _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"]
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: COMPONENTS,
            exports: COMPONENTS,
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
                    multi: true
                },
                _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/share/modules/layout.module.ts":
/*!************************************************!*\
  !*** ./src/app/share/modules/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/share/modules/material.module.ts");





var MODULE = [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: MODULE,
            exports: MODULE
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/share/modules/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/share/modules/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MODULE = [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: MODULE,
            exports: MODULE
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/share/services/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/share/services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/auth.actions */ "./src/app/share/store/actions/auth.actions.ts");








var AuthService = /** @class */ (function () {
    function AuthService(httpClient, router, store) {
        this.httpClient = httpClient;
        this.router = router;
        this.store = store;
        this.jwtToken = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            isAuthenticated: false,
            expireDate: null,
            token: null
        });
        this.initToken();
        //this.subscription = this.initTimer();
    }
    // public initTimer() {
    //   // le timer est un type d'observable comme subject ...
    //   //permet de déclancher un observable apres x temps apres 2 sec il va emetre une action toute les 5 secondes
    //   //le ttimer va être a la deuxieme seconde on va récupere un token apres toute les 5 secondes
    //   return timer(2000, 5000).pipe(
    //     //switch map car cela retourne un nouvelle observable
    //     switchMap(() => {
    //       if (localStorage.getItem('jwt')) {
    //         console.log('try refresh token');
    //         //return le nouveau token rafraichit
    //         return this.httpClient.get<string>('/api/auth/refresh-token').pipe(
    //           tap((token: string) => {
    //             this.jwtToken.next({
    //               isAuthenticated: true,
    //               token: token
    //             });
    //             localStorage.setItem('jwt', token);
    //           })
    //         );
    //       } else {
    //         console.log('no token to refresh');
    //         this.subscription.unsubscribe();
    //         // of null renvoie null via a un observable a cause du switchMap
    //         return of(null);
    //       }
    //     })
    //   ).subscribe(() => {}, err => {
    //     //si il y a eu une erreur le refresh n'a pas réussi
    //     // pas de token a refresh
    //     this.jwtToken.next({
    //       isAuthenticated: false,
    //       token: null
    //     });
    //     localStorage.removeItem('jwt');
    //     this.subscription.unsubscribe();
    //   });
    // }
    AuthService.prototype.initRefreshToken = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000, 5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            _this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["TryRefreshToken"]());
        }));
    };
    AuthService.prototype.refreshToken = function () {
        return this.httpClient.get('/api/auth/refresh-token');
    };
    AuthService.prototype.initToken = function () {
        var token = localStorage.getItem('jwt');
        if (token) {
            this.jwtToken.next({
                isAuthenticated: true, token: token
            });
        }
        else {
            this.jwtToken.next({
                isAuthenticated: false, token: null
            });
        }
        // console.log(this.jwtToken.value);
    };
    AuthService.prototype.signup = function (user) {
        return this.httpClient.post('/api/auth/signup', user);
    };
    // A revoir correctement
    // pipe = operateur si un bservable
    // tap recupere la data qui parcour la chaine d'observable nous permet juste d'exuecuter une action comme si il n'éxistait pas
    AuthService.prototype.signin = function (credentials) {
        return this.httpClient.post('/api/auth/signin', credentials);
        // .pipe(
        //   tap( (token:string)=>{
        //     this.jwtToken.next({
        //       isAuthenticated:true,
        //       token: token
        //     });
        //     // méthode pas safe stockage sur l'ordinateur client 
        //     localStorage.setItem('jwt',token)
        //     this.subscription = this.initTimer();
        //   })
        // )
    };
    AuthService.prototype.logout = function () {
        this.jwtToken.next({
            isAuthenticated: false, token: null
        });
        localStorage.removeItem('jwt');
        this.router.navigate(['/signin']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/share/services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/share/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    // public currentUser:BehaviorSubject<User> = new BehaviorSubject(null);
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getCurentUser = function () {
        return this.http.get('/api/user/current');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/share/store/actions/auth.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/share/store/actions/auth.actions.ts ***!
  \*****************************************************/
/*! exports provided: AuthActionTypes, TrySignup, SignupSuccess, SignupError, TrySignin, SigninSuccess, SigninError, TryFetchCurrentUser, SetCurrentUser, TryRefreshToken, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignup", function() { return TrySignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSuccess", function() { return SignupSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupError", function() { return SignupError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignin", function() { return TrySignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninSuccess", function() { return SigninSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninError", function() { return SigninError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchCurrentUser", function() { return TryFetchCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentUser", function() { return SetCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryRefreshToken", function() { return TryRefreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["TrySignup"] = "[ User ] - Try Signup";
    AuthActionTypes["SignupSuccess"] = "[ User ] - Signup success";
    AuthActionTypes["SignupError"] = "[ User ] - Signup error";
    AuthActionTypes["TrySignin"] = "[ User ] - Try Signin";
    AuthActionTypes["SigninSuccess"] = "[ User ] - Signin success";
    AuthActionTypes["SigninError"] = "[ User ] - Signin error";
    AuthActionTypes["TryFetchUser"] = "[ User ] - Try Fetch User";
    AuthActionTypes["SetCurrentUser"] = "[ User ] - Set current User";
    AuthActionTypes["TryRefreshToken"] = "[ User ] - Try refresh token";
    AuthActionTypes["Logout"] = "[ User ] - Logout";
})(AuthActionTypes || (AuthActionTypes = {}));
var TrySignup = /** @class */ (function () {
    function TrySignup(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.TrySignup;
    }
    return TrySignup;
}());

var SignupSuccess = /** @class */ (function () {
    function SignupSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SignupSuccess;
    }
    return SignupSuccess;
}());

var SignupError = /** @class */ (function () {
    function SignupError(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SignupError;
    }
    return SignupError;
}());

var TrySignin = /** @class */ (function () {
    function TrySignin(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.TrySignin;
    }
    return TrySignin;
}());

var SigninSuccess = /** @class */ (function () {
    function SigninSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SigninSuccess;
    }
    return SigninSuccess;
}());

var SigninError = /** @class */ (function () {
    function SigninError(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SigninError;
    }
    return SigninError;
}());

var TryFetchCurrentUser = /** @class */ (function () {
    function TryFetchCurrentUser() {
        this.type = AuthActionTypes.TryFetchUser; // pas de payload car on va juste récupérer le token
    }
    return TryFetchCurrentUser;
}());

var SetCurrentUser = /** @class */ (function () {
    function SetCurrentUser(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SetCurrentUser;
    }
    return SetCurrentUser;
}());

var TryRefreshToken = /** @class */ (function () {
    function TryRefreshToken() {
        this.type = AuthActionTypes.TryRefreshToken;
    }
    return TryRefreshToken;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = AuthActionTypes.Logout;
    }
    return Logout;
}());



/***/ }),

/***/ "./src/app/share/store/effects/auth.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/share/store/effects/auth.effects.ts ***!
  \*****************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/share/store/actions/auth.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/share/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../selectors/auth.selectors */ "./src/app/share/store/selectors/auth.selectors.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/share/services/user.service.ts");











var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, userService, router, store) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.store = store;
        this.trySignup$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].TrySignin) //pour reconnaitre notre action
        , Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }) // on retourne notre payload don un user
        , Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (user) {
            return _this.authService.signup(user);
        }) // retour du call http donc retour de l'observable
        , Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            _this.router.navigate(['/signin']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SignupError"](err));
        }));
        this.signupSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].SignupSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.router.navigate(['/signin']); }));
        this.trySignin$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].TrySignin), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (credentials) {
            return _this.authService
                .signin(credentials)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (token) { return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SigninSuccess"](token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SigninError"](error)); }));
        }));
        this.signinSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].SigninSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (token) {
            localStorage.setItem('token', token);
            if (!_this.subscription) {
                _this.subscription = _this.authService.initRefreshToken().subscribe();
                _this.router.navigate(['/']);
            }
        }));
        this.tryRefreshToken$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].TryRefreshToken), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_9__["tokenSelector"]))), // ça permet de récuperer la derniere variable d'un observable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var action = _a[0], token = _a[1];
            if (token) {
                return _this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (newtoken) {
                    return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SigninSuccess"](newtoken);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                    localStorage.removeItem('token');
                    if (_this.subscription) {
                        _this.subscription.unsubscribe();
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])();
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])();
            }
        }));
        this.Logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].Logout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            if (_this.subscription) {
                _this.subscription.unsubscribe();
            }
            localStorage.removeItem('token');
            _this.router.navigate(['/']);
        }));
        this.TryFetchUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].TryFetchUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.userService.getCurentUser(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SetCurrentUser"](user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log('error in tryFetchCurrentUser');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])();
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "trySignup$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "signupSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "trySignin$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "signinSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "tryRefreshToken$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "Logout$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "TryFetchUser$", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/share/store/index.ts":
/*!**************************************!*\
  !*** ./src/app/share/store/index.ts ***!
  \**************************************/
/*! exports provided: reducersMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducersMap", function() { return reducersMap; });
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/auth.reducer */ "./src/app/share/store/reducers/auth.reducer.ts");

var reducersMap = {
    auth: _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"]
};


/***/ }),

/***/ "./src/app/share/store/reducers/auth.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/share/store/reducers/auth.reducer.ts ***!
  \******************************************************/
/*! exports provided: initialAuthState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAuthState", function() { return initialAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/share/store/actions/auth.actions.ts");


;
var initialAuthState = {
    user: null,
    token: localStorage.getItem('token'),
    error: null,
    isLoggedIn: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialAuthState; }
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SigninError:
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SignupError: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SigninSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { token: action.payload, isLoggedIn: true, error: null });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].Logout: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: null, token: null, error: null, isLoggedIn: false });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SetCurrentUser: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: action.payload });
        }
    }
    return state;
}


/***/ }),

/***/ "./src/app/share/store/selectors/auth.selectors.ts":
/*!*********************************************************!*\
  !*** ./src/app/share/store/selectors/auth.selectors.ts ***!
  \*********************************************************/
/*! exports provided: KEY_AUTH_SELECTOR, authSelector, errorAuthSelector, tokenSelector, isLoggedInSelector, currentUserSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_AUTH_SELECTOR", function() { return KEY_AUTH_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSelector", function() { return authSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorAuthSelector", function() { return errorAuthSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenSelector", function() { return tokenSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedInSelector", function() { return isLoggedInSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUserSelector", function() { return currentUserSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var KEY_AUTH_SELECTOR = 'auth';
var authSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(KEY_AUTH_SELECTOR); //createFeatureSelector pour récupérer une partie du state
var errorAuthSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authSelector, 
// fonction une projection qui doit définir ce que se selctor doit retourner
function (authState) {
    return authState.error;
});
var tokenSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authSelector, function (authState) {
    if (authState.token) {
        return authState.token;
    }
    else {
        return null;
    }
});
var isLoggedInSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authSelector, function (authState) {
    if (authState.isLoggedIn) {
        return authState.isLoggedIn;
    }
    else {
        return null;
    }
});
var currentUserSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authSelector, function (authState) {
    if (authState) {
        return authState.user;
    }
    else {
        return null;
    }
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\dev\Angular\mean\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map