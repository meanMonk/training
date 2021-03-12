(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VzF":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        // return true;
        const token = localStorage.getItem('ACT');
        if (!!token) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sk/work/development/workspace/codekul/training/todo-ui/src/main.ts */"zUnb");


/***/ }),

/***/ "1jpV":
/*!************************************************************************************!*\
  !*** ./src/app/components/parent-child-com/user-profile/user-profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function UserProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.user.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.city);
} }
class UserProfileComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.user);
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], inputs: { user: "user" }, decls: 1, vars: 1, consts: [["class", "card", "style", "width: 18rem", 4, "ngIf"], [1, "card", 2, "width", "18rem"], ["width", "100%", "height", "120px", "alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserProfileComponent_div_0_Template, 11, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "3BJG":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dataBinding/one-way-data-binding/one-way-data-binding.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OneWayDataBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneWayDataBindingComponent", function() { return OneWayDataBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pipes_text_decorate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/text-decorate.pipe */ "fs/2");


class OneWayDataBindingComponent {
    constructor() {
        this.title = 'Learning Angular!';
        this.color = 'blue';
        this.redColor = 'red';
        this.count = 0;
    }
    ngOnInit() { }
    increaseCount() {
        this.count += 1;
        // this.count = this.count + 1;
    }
    decreaseCount() {
        this.count -= 1;
        // this.count = this.count - 1;
    }
}
OneWayDataBindingComponent.ɵfac = function OneWayDataBindingComponent_Factory(t) { return new (t || OneWayDataBindingComponent)(); };
OneWayDataBindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OneWayDataBindingComponent, selectors: [["app-one-way-data-binding"]], decls: 34, vars: 12, consts: [[3, "innerHtml"], [3, "click"]], template: function OneWayDataBindingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "1. One Way Data binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "textDecorate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Using template interpolation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Using property binding []");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "VIEW to COMPONENT (Model)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Counter getting update on click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OneWayDataBindingComponent_Template_button_click_30_listener() { return ctx.increaseCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Increase Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OneWayDataBindingComponent_Template_button_click_32_listener() { return ctx.decreaseCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Decrease Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, "COMPONENT (Model) TO VIEW"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.redColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);
    } }, pipes: [_shared_pipes_text_decorate_pipe__WEBPACK_IMPORTED_MODULE_1__["TextDecoratePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmUtd2F5LWRhdGEtYmluZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "4jP6":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/forms/template-driven-day-10/user-data-list/user-data-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: UserDataListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataListComponent", function() { return UserDataListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function UserDataListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDataListComponent_li_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.delete(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, user_r1), " ");
} }
class UserDataListComponent {
    constructor() {
        this.data = [];
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    delete(user) {
        this.onDelete.emit(user);
    }
}
UserDataListComponent.ɵfac = function UserDataListComponent_Factory(t) { return new (t || UserDataListComponent)(); };
UserDataListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDataListComponent, selectors: [["app-user-data-list"]], inputs: { data: "data" }, outputs: { onDelete: "onDelete" }, decls: 5, vars: 1, consts: [[1, "container", "border"], [1, "group-list"], ["class", "group-list-item", 4, "ngFor", "ngForOf"], [1, "group-list-item"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"]], template: function UserDataListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "user listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserDataListComponent_li_4_Template, 5, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRhdGEtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "5EJc":
/*!********************************************************************!*\
  !*** ./src/app/layouts/private-layout/private-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: PrivateLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateLayoutComponent", function() { return PrivateLayoutComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return [a0]; };
function PrivateLayoutComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, route_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", route_r1.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", route_r1.label, " ");
} }
class PrivateLayoutComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.applicationRouteList = [
            {
                path: 'databinding-1',
                label: '1 Data binding',
                iconName: 'fa-dashboard',
            },
            {
                path: 'databinding-2',
                label: '2 Data binding',
                iconName: 'fa-arrows-alt',
            },
            {
                path: 'sales',
                label: 'Sales form',
                iconName: 'fa-address-card',
            },
            {
                path: 'feeds',
                label: 'Social Feeds',
                iconName: 'fa-comments',
            },
            {
                path: 'usermanagement',
                label: 'User management',
                iconName: 'fa-users',
            },
            {
                path: 'applicationform',
                label: 'User application',
                iconName: 'fa-file',
            },
        ];
        this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivationEnd"]) {
                console.log(e);
                console.log(e.snapshot.data);
            }
        });
    }
    ngOnInit() { }
    logOut() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
PrivateLayoutComponent.ɵfac = function PrivateLayoutComponent_Factory(t) { return new (t || PrivateLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
PrivateLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrivateLayoutComponent, selectors: [["app-private-layout"]], decls: 15, vars: 2, consts: [[1, "container-fluid"], [1, "row"], ["id", "sidebarMenu", 1, "col-md-3", "col-lg-2", "d-md-block", "bg-light", "sidebar", "collapse"], [1, "position-sticky", "pt-3"], [1, "nav", "flex-column"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "col-md-9", "ms-sm-auto", "col-lg-10", "px-md-4"], [1, "navbar", "bg-dark"], [1, "fs-1", "fw-bolder", 2, "color", "rgb(63, 84, 110)"], [1, "nav-link", 3, "routerLinkActive", "routerLink"], [1, "fa", 3, "ngClass"]], template: function PrivateLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PrivateLayoutComponent_li_5_Template, 4, 6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PrivateLayoutComponent_Template_a_click_7_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " LogOut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "main", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applicationRouteList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Forbes Marshall", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YXRlLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "5r6x":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/forms/nested-forms/application-list/application-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ApplicationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationListComponent", function() { return ApplicationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_applications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/applications.service */ "QHuY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ApplicationListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationListComponent_div_2_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteUser(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.fullname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", user_r1.username, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r1.state, " - ", user_r1.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, user_r1.classlist));
} }
class ApplicationListComponent {
    constructor(appService) {
        this.appService = appService;
        this.applicationsList = [];
    }
    ngOnInit() {
        this.applicationsList = this.appService.getApplication();
    }
    deleteUser(index) {
        this.applicationsList = this.appService.removeUser(index);
    }
}
ApplicationListComponent.ɵfac = function ApplicationListComponent_Factory(t) { return new (t || ApplicationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_applications_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationsService"])); };
ApplicationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationListComponent, selectors: [["app-application-list"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "fa", "fa-trash-o", 3, "click"], [1, "text-sm", "text-primary"]], template: function ApplicationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplicationListComponent_div_2_Template, 11, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.applicationsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Ab24":
/*!****************************************!*\
  !*** ./src/app/services/data/state.ts ***!
  \****************************************/
/*! exports provided: STATE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_LIST", function() { return STATE_LIST; });
const STATE_LIST = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Karnatka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
];


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    API_URL: 'http://localhost:8080',
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

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Successfully submitted form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.done = !ctx_r2.done; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Login Again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_form_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required ex.name@domain.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_form_13_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid Password : 1 Alphanumber 1Capital 1 small 1 number 1special char wit min length 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_form_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_13_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoginComponent_form_13_div_5_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_form_13_div_10_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.controls.email.errors && (ctx_r1.loginForm.controls.email.dirty || ctx_r1.loginForm.controls.email.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r1.loginForm.controls.password.errors && (ctx_r1.loginForm.controls.password.dirty || ctx_r1.loginForm.controls.password.touched));
} }
class LoginComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.done = false;
    }
    ngOnInit() {
        this.initLoginForm();
    }
    initLoginForm() {
        this.loginForm = this.fb.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                ],
            ],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                ],
            ],
        });
    }
    submitForm() {
        if (!!this.loginForm.valid) {
            console.log('login form values', this.loginForm.value);
            this.authService.doLogin(this.loginForm.value).subscribe((res) => {
                console.log('login success!', res);
                localStorage.setItem('ACT', res.accessToken);
                localStorage.setItem('ACT_R', res.refreshToken);
                this.router.navigate(['/resource']);
            }, (err) => {
                console.log('Error while login!', err);
            });
        }
        else {
            console.error('Error login form is invalid!');
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 14, vars: 2, consts: [[1, "container"], [1, "w-100", "login-page", "d-flex", "justify-content-center", "align-items-center"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-6"], ["src", "https://images.unsplash.com/photo-1604222025102-6cc630d7f109?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "alt", "laptop with coffee", 1, "rounded", "mx-auto", "d-block", "w-100"], [1, "container", "py-5", "mx-auto"], [1, "card-title", "text-center", "py-3"], ["class", "text-success", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "text-success"], ["type", "button", 3, "click"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "emailInput", 1, "form-label"], ["type", "email", "id", "emailInput", "placeholder", "name@example.com", "formControlName", "email", 1, "form-control"], ["id", "emailHelp", "class", "form-text tex-danger", 4, "ngIf"], ["for", "passwordInput", 1, "form-label"], ["type", "password", "id", "passwordInput", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["id", "passwordHelp", "class", "form-text tex-danger", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center"], ["type", "submit", 1, "btn", "btn-block", "btn-outline-primary", "login-btn"], ["id", "emailHelp", 1, "form-text", "tex-danger"], ["id", "passwordHelp", 1, "form-text", "tex-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Login to continue!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_form_13_Template, 14, 3, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.done);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".login-page[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.login-page[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtBQUVKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICAubG9naW4tYnRuIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "DiCU":
/*!**********************************************!*\
  !*** ./src/app/services/app-form.service.ts ***!
  \**********************************************/
/*! exports provided: AppFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFormService", function() { return AppFormService; });
/* harmony import */ var _data_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/state */ "Ab24");
/* harmony import */ var _data_state_city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/state-city */ "khzH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppFormService {
    constructor() {
        this.statecity = _data_state_city__WEBPACK_IMPORTED_MODULE_1__["STATE_CITY"];
        this.stateList = _data_state__WEBPACK_IMPORTED_MODULE_0__["STATE_LIST"];
    }
    getCityList(state) {
        return this.statecity[state];
    }
    getStateList() {
        return this.stateList;
    }
}
AppFormService.ɵfac = function AppFormService_Factory(t) { return new (t || AppFormService)(); };
AppFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppFormService, factory: AppFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ERUx":
/*!********************************************************************************!*\
  !*** ./src/app/components/pipes-day-07/pipe-listing/pipe-listing.component.ts ***!
  \********************************************************************************/
/*! exports provided: PipeListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeListingComponent", function() { return PipeListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_text_decorate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/text-decorate.pipe */ "fs/2");



function PipeListingComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", i_r2.userName, " - ", i_r2.email, "- ", i_r2.age, "-", i_r2.name, "");
} }
function PipeListingComponent_button_102_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipeListingComponent_button_102_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addDecoration(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Covert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PipeListingComponent {
    constructor() {
        this.currentDate = new Date();
        this.totalAmount = 34567;
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ';
        this.user = [
            {
                userName: 'John',
                name: 'John Doe',
                email: 'john@doe.com',
                age: 120,
            },
            {
                userName: 'John',
                name: 'John Doe',
                email: 'john@doe.com',
                age: 120,
            },
        ];
        this.title = 'I am learning angular!';
        this.result = '';
    }
    addDecoration() {
        const result = this.title
            .split(' ')
            .map((i) => {
            return `__${i}__`;
        })
            .join(' ');
        console.log('result', result);
        this.result = result;
    }
    ngOnInit() { }
}
PipeListingComponent.ɵfac = function PipeListingComponent_Factory(t) { return new (t || PipeListingComponent)(); };
PipeListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipeListingComponent, selectors: [["app-pipe-listing"]], decls: 123, vars: 78, consts: [[1, "py-1", "container", "mx-auto"], [1, "fs-3", "fw-bolder", "text-center"], [1, "text-primary", "fw-bold"], [1, "row", "py-1"], [1, "col-3", "border"], [1, "text-center"], [1, "fw-bold"], [1, "row"], [1, "col-6", "border", "border-primary"], [4, "ngFor", "ngForOf"], [1, "fw-bolder"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function PipeListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Day-07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "lphabet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PIPES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DatePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CurrencyPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LowercasePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "JsonPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "TitleCasePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "DatePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date after formating with pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "CurrencyPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Currency after formating with pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "LowercasePipe | UpperCase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "After applying lower case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "After applying uppercase case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "After applying title case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Json Pipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, PipeListingComponent_div_90_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "After applying JSONPIPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Custom Logic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, PipeListingComponent_button_102_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Custom Pipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "textDecorate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "textDecorate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](116, "textDecorate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](119, "textDecorate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](122, "textDecorate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 26, ctx.currentDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 28, ctx.currentDate, "medium"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 31, ctx.currentDate, "short"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 34, ctx.currentDate, "long"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 37, ctx.currentDate, "MMM - dd - y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 40, ctx.totalAmount));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](57, 42, ctx.totalAmount, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](60, 45, ctx.totalAmount, "INR", "code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](63, 49, ctx.totalAmount, "GBP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 52, ctx.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 54, ctx.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 56, ctx.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 58, ctx.user));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Input: ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ouput: ", ctx.result, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Input: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 60, ctx.title), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Input: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](113, 62, ctx.title, "@", 2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Input: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](116, 66, "Hello", "$", 3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Input: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](119, 70, "Hey", "-", 2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Input: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](122, 74, "Yess", "#", 1), "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _shared_pipes_text_decorate_pipe__WEBPACK_IMPORTED_MODULE_2__["TextDecoratePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaXBlLWxpc3RpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "F3Tb":
/*!********************************************************!*\
  !*** ./src/app/pages/resources/resources.component.ts ***!
  \********************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/resource.service */ "m88C");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");






function ResourcesComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResourcesComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r12.id);
} }
function ResourcesComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResourcesComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r13.name);
} }
function ResourcesComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CreatedAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResourcesComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.createdAt);
} }
function ResourcesComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UpdatedAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResourcesComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r15.updatedAt);
} }
function ResourcesComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResourcesComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourcesComponent_td_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.editResource(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourcesComponent_td_18_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.removeResource(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResourcesComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
function ResourcesComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
class ResourcesComponent {
    constructor(resourceService, toastr, router) {
        this.resourceService = resourceService;
        this.toastr = toastr;
        this.router = router;
        this.dataSource = [];
        this.displayedColumns = ['id', 'name', 'createdAt', 'updatedAt', 'action'];
        this.error = '';
    }
    ngOnInit() {
        this.getAllResource();
    }
    showSuccess() {
        this.toastr.success('Hello world!', 'Toastr fun!');
    }
    getAllResource() {
        this.resourceService.loadAllResources().subscribe((res) => {
            console.log('Loaded resources are!', res);
            this.dataSource = res;
        }, (err) => {
            console.log('Error occurred while loading resource', err);
        });
    }
    editResource(resource) {
        this.resourceService.setSelected(resource);
        this.router.navigate(['/resource/new']);
    }
    removeResource(resource) {
        this.resourceService.deleteResource(resource.id).subscribe((res) => {
            console.log('removed resource!', res);
            this.toastr.success('Resource Removed!', 'Success!');
            this.getAllResource();
        }, (err) => {
            console.log(err);
        });
    }
    goToResourceForm() {
        this.resourceService.setSelected(null);
        this.router.navigate(['/resource/new']);
    }
}
ResourcesComponent.ɵfac = function ResourcesComponent_Factory(t) { return new (t || ResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourcesComponent, selectors: [["app-resources"]], decls: 21, vars: 3, consts: [[1, "container", "py-3"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", 1, "w-100", "my-3", "mat-elevation-z4", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "createdAt"], ["matColumnDef", "updatedAt"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "btn", "btn-sm", "mx-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], ["mat-header-row", ""], ["mat-row", ""]], template: function ResourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourcesComponent_Template_button_click_1_listener() { return ctx.goToResourceForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " New Resource ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResourcesComponent_th_5_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResourcesComponent_td_6_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResourcesComponent_th_8_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResourcesComponent_td_9_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResourcesComponent_th_11_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResourcesComponent_td_12_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResourcesComponent_th_14_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResourcesComponent_td_15_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ResourcesComponent_th_17_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ResourcesComponent_td_18_Template, 5, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ResourcesComponent_tr_19_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ResourcesComponent_tr_20_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "JdZj":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/forms/nested-forms/user-application-form/user-application-form.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: UserApplicationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApplicationFormComponent", function() { return UserApplicationFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app-form.service */ "DiCU");
/* harmony import */ var src_app_services_data_applications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/applications.service */ "QHuY");
/* harmony import */ var _application_list_application_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../application-list/application-list.component */ "5r6x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UserApplicationFormComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", state_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", state_r3, " ");
} }
function UserApplicationFormComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", city_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", city_r4, " ");
} }
function UserApplicationFormComponent_div_36_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Subject name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserApplicationFormComponent_div_36_div_10_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const j_r9 = ctx.index; const standard_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.removeSubject(standard_r5, j_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", j_r9);
} }
function UserApplicationFormComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserApplicationFormComponent_div_36_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const i_r6 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.removeClass(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserApplicationFormComponent_div_36_div_10_Template, 10, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserApplicationFormComponent_div_36_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const standard_r5 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.addSubject(standard_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " New subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const standard_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.getSubjectListControls(standard_r5));
} }
class UserApplicationFormComponent {
    constructor(fb, appFormService, appService) {
        this.fb = fb;
        this.appFormService = appFormService;
        this.appService = appService;
        this.stateList = [];
        this.cityList = [];
        this.stateList = appFormService.getStateList();
    }
    ngOnInit() {
        console.log(this.stateList);
        this.initAppForm();
    }
    initAppForm() {
        this.appForm = this.fb.group({
            fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            classlist: this.fb.array([]),
        });
        this.addClass();
        this.listenToStateChange();
    }
    listenToStateChange() {
        this.appForm.controls.state.valueChanges.subscribe((res) => {
            this.cityList = this.appFormService.getCityList(res);
        });
    }
    addClass() {
        let control = this.appForm.controls.classlist;
        control.push(this.fb.group({
            classname: [''],
            subjectlist: this.fb.array([
                this.fb.group({
                    subjectName: '',
                    mark: '',
                }),
            ]),
        }));
    }
    removeClass(index) {
        let control = this.appForm.controls.classlist;
        control.removeAt(index);
    }
    getClassListControls() {
        return this.appForm.get('classlist').controls;
    }
    getSubjectListControls(standForm) {
        return standForm.get('subjectlist').controls;
    }
    addSubject(standForm) {
        const formControls = standForm.get('subjectlist').controls;
        formControls.push(this.fb.group({
            subjectName: '',
            mark: '',
        }));
    }
    removeSubject(standardForm, index) {
        // const subjectlistControl = classForm.controls.get('subjectlist');
        const subjectlistControls = standardForm.get('subjectlist');
        subjectlistControls.removeAt(index);
    }
    saveUserApplication() {
        console.log(this.appForm.value);
        this.appService.saveAppForm(this.appForm.value);
        this.appForm.reset();
    }
}
UserApplicationFormComponent.ɵfac = function UserApplicationFormComponent_Factory(t) { return new (t || UserApplicationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_app_form_service__WEBPACK_IMPORTED_MODULE_2__["AppFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_applications_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationsService"])); };
UserApplicationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserApplicationFormComponent, selectors: [["app-user-application-form"]], decls: 43, vars: 4, consts: [[1, "container", "mx-auto", "row"], [1, "col-4", "my-5"], [1, "card", "col-8"], [1, "card-header"], [1, "card-body"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "fullNameInput", 1, "form-label"], ["type", "text", "name", "fullname", "formControlName", "fullname", "id", "fullNameInput", 1, "form-control", "form-control-sm"], ["for", "userNameInput", 1, "form-label"], ["type", "text", "name", "userName", "formControlName", "username", "id", "userNameInput", 1, "form-control", "form-control-sm"], ["for", "emailInput", 1, "form-label"], ["type", "text", "name", "email", "formControlName", "email", "id", "emailInput", 1, "form-control", "form-control-sm"], ["for", "stateInput", 1, "form-label"], ["id", "stateInput", "formControlName", "state", "aria-label", ".form-select-sm example", 1, "form-select", "form-select-sm"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "stateInput", "formControlName", "city", "aria-label", ".form-select-sm example", 1, "form-select", "form-select-sm"], ["formArrayName", "classlist"], ["class", "card border border-primary", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "my-3", "btn", "btn-sm", "rounded", "btn-dark", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "form-action"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], [3, "value"], [1, "card", "border", "border-primary", 3, "formGroupName"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "justify-content-between"], ["for", "classInput", 1, "form-label"], ["type", "text", "name", "class", "id", "classInput", "formControlName", "classname", 1, "form-control", "form-control-sm", "ml-1"], ["aria-hidden", "true", 1, "fa", "fa-times-circle", "text-danger", 3, "click"], [1, "card-content"], ["formArrayName", "subjectlist"], ["class", "form-group d-flex justify-content-between align-items-center", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "rounded", "btn-dark", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], [1, "form-group", "d-flex", "justify-content-between", "align-items-center", 3, "formGroupName"], ["for", "subjectNameInput", 1, "form-label"], ["type", "text", "name", "userName", "formControlName", "subjectName", "id", "subjectNameInput", 1, "form-control", "form-control-sm"], ["for", "marksInput", 1, "form-label"], ["type", "text", "name", "marks", "formControlName", "mark", "id", "marksInput", 1, "form-control", "form-control-sm"]], template: function UserApplicationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-application-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "User Application form!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserApplicationFormComponent_Template_form_ngSubmit_8_listener() { return ctx.saveUserApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Select State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Select state");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UserApplicationFormComponent_option_27_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Select City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Select city");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UserApplicationFormComponent_option_34_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UserApplicationFormComponent_div_36_Template, 14, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserApplicationFormComponent_Template_button_click_37_listener() { return ctx.addClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " New class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.appForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cityList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getClassListControls());
    } }, directives: [_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFwcGxpY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "MrsJ":
/*!************************************************************************************!*\
  !*** ./src/app/components/forms/model-driven/sales-forms/sales-forms.component.ts ***!
  \************************************************************************************/
/*! exports provided: SalesFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesFormsComponent", function() { return SalesFormsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SalesFormsComponent_div_13_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "                    Title is Required\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SalesFormsComponent_div_13_pre_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "                    Max length for title is 3!\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SalesFormsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SalesFormsComponent_div_13_pre_1_Template, 2, 0, "pre", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SalesFormsComponent_div_13_pre_2_Template, 2, 0, "pre", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.salesForm.controls.title.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.salesForm.controls.title.errors.maxlength);
} }
class SalesFormsComponent {
    constructor() { }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        /// set the value for variable called sales form
        /// with formGroup class instance.
        this.salesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    onSalesFormSubmit() {
        var _a, _b, _c;
        if ((_a = this.salesForm) === null || _a === void 0 ? void 0 : _a.valid) {
            console.log('Value for submit form', (_b = this.salesForm) === null || _b === void 0 ? void 0 : _b.value);
            // this.sfService.createPost(this.salesForm.value).subscribe((res)=>{
            //   this.submitted= true
            // }, (err)=>{
            //   console.log('err')
            // })
            (_c = this.salesForm) === null || _c === void 0 ? void 0 : _c.reset();
        }
        else {
            console.error('Invalid forms!');
        }
    }
}
SalesFormsComponent.ɵfac = function SalesFormsComponent_Factory(t) { return new (t || SalesFormsComponent)(); };
SalesFormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SalesFormsComponent, selectors: [["app-sales-forms"]], decls: 26, vars: 2, consts: [[1, "container"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "row"], [1, "col-8", "offset-1"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "titleInputId", 1, "form-label"], ["type", "text", "id", "titleInputId", "aria-describedby", "titleHelp", "formControlName", "title", 1, "form-control"], ["id", "titleHelp", "class", "form-text text-danger", 4, "ngIf"], ["for", "nameInputId", 1, "form-label"], ["type", "text", "id", "nameInputId", "aria-describedby", "nameHelp", "formControlName", "name", 1, "form-control"], ["id", "nameHelp", 1, "form-text", "text-danger"], ["for", "description", 1, "form-label"], ["placeholder", "Leave a comment here", "id", "description", "formControlName", "description", 1, "form-control", 2, "height", "100px"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "titleHelp", 1, "form-text", "text-danger"], [4, "ngIf"]], template: function SalesFormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sales forms!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SalesFormsComponent_Template_form_ngSubmit_8_listener() { return ctx.onSalesFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SalesFormsComponent_div_13_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "User name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Name is Required field ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "User Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.salesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.salesForm.controls.title.errors && (ctx.salesForm.controls.title.dirty || ctx.salesForm.controls.title.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1mb3Jtcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "PVyK":
/*!****************************************************************************************!*\
  !*** ./src/app/components/forms/template-driven-day-10/user-mng/user-mng.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserMngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMngComponent", function() { return UserMngComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-form/user-form.component */ "gDp6");
/* harmony import */ var _user_data_list_user_data_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-data-list/user-data-list.component */ "4jP6");



class UserMngComponent {
    constructor() {
        this.userDataList = [];
    }
    ngOnInit() { }
    saveUser(formValue) {
        this.userDataList.push(formValue);
    }
    onUserDelete(user) {
        console.log('change', user);
        this.userDataList = this.userDataList.filter((item) => item.userName !== user.userName);
    }
}
UserMngComponent.ɵfac = function UserMngComponent_Factory(t) { return new (t || UserMngComponent)(); };
UserMngComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserMngComponent, selectors: [["app-user-mng"]], decls: 8, vars: 1, consts: [[1, "container", "border"], [1, "row"], [1, "col-6"], [3, "onNewUser"], [3, "data", "onDelete"]], template: function UserMngComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "user management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-user-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNewUser", function UserMngComponent_Template_app_user_form_onNewUser_5_listener($event) { return ctx.saveUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-user-data-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function UserMngComponent_Template_app_user_data_list_onDelete_7_listener($event) { return ctx.onUserDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.userDataList);
    } }, directives: [_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__["UserFormComponent"], _user_data_list_user_data_list_component__WEBPACK_IMPORTED_MODULE_2__["UserDataListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1uZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "QFr0":
/*!******************************************************!*\
  !*** ./src/app/services/feed/social-feed.service.ts ***!
  \******************************************************/
/*! exports provided: SocialFeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialFeedService", function() { return SocialFeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class SocialFeedService {
    constructor(http) {
        this.http = http;
        this.userList = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496',
                    },
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets',
                },
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                address: {
                    street: 'Victor Plains',
                    suite: 'Suite 879',
                    city: 'Wisokyburgh',
                    zipcode: '90566-7771',
                    geo: {
                        lat: '-43.9509',
                        lng: '-34.4618',
                    },
                },
                phone: '010-692-6593 x09125',
                website: 'anastasia.net',
                company: {
                    name: 'Deckow-Crist',
                    catchPhrase: 'Proactive didactic contingency',
                    bs: 'synergize scalable supply-chains',
                },
            },
        ];
        this.postList = [
            {
                albumId: 1,
                id: 1,
                title: 'accusamus beatae ad facilis cum similique qui sunt',
                url: 'https://via.placeholder.com/600/92c952',
                thumbnailUrl: 'https://via.placeholder.com/150/92c952',
            },
            {
                albumId: 1,
                id: 2,
                title: 'reprehenderit est deserunt velit ipsam',
                url: 'https://via.placeholder.com/600/771796',
                thumbnailUrl: 'https://via.placeholder.com/150/771796',
            },
            {
                albumId: 1,
                id: 3,
                title: 'officia porro iure quia iusto qui ipsa ut modi',
                url: 'https://via.placeholder.com/600/24f355',
                thumbnailUrl: 'https://via.placeholder.com/150/24f355',
            },
            {
                albumId: 1,
                id: 4,
                title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
                url: 'https://via.placeholder.com/600/d32776',
                thumbnailUrl: 'https://via.placeholder.com/150/d32776',
            },
        ];
    }
    loadUserList() {
        // return this.userList;
        return this.http.get('http://jsonplaceholder.typicode.com/users');
    }
    loadPostList(userId) {
        // return this.postList;
        return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    }
    createPost(payload) {
        this.http.post('https://jsonplaceholder.typicode.com/posts', payload);
    }
}
SocialFeedService.ɵfac = function SocialFeedService_Factory(t) { return new (t || SocialFeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SocialFeedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocialFeedService, factory: SocialFeedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QHuY":
/*!*******************************************************!*\
  !*** ./src/app/services/data/applications.service.ts ***!
  \*******************************************************/
/*! exports provided: ApplicationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsService", function() { return ApplicationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ApplicationsService {
    constructor() {
        this.appFormList = [];
    }
    getApplication() {
        return this.appFormList;
    }
    removeUser(index) {
        this.appFormList = this.appFormList.filter((item, i) => index !== i);
        return this.appFormList;
    }
    saveAppForm(formValue) {
        this.appFormList.push(formValue);
    }
}
ApplicationsService.ɵfac = function ApplicationsService_Factory(t) { return new (t || ApplicationsService)(); };
ApplicationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApplicationsService, factory: ApplicationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sp7u":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/text-design.pipe.ts ***!
  \**************************************************/
/*! exports provided: TextDesignPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDesignPipe", function() { return TextDesignPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TextDesignPipe {
    transform(value, char, color, isBold = true) {
        let result = '';
        if (isBold) {
            console.log(`<b style="color:${color}">${char.toLowerCase()}</b>`);
            result = value
                .split(char.toLowerCase())
                .join(`<b style="color: ${color}">${char.toLowerCase()}</b>`)
                .split(char.toUpperCase())
                .join(`<b style="color: ${color}">${char.toUpperCase()}</b>`);
        }
        else {
            result = value
                .split(char.toLowerCase())
                .join(`<span style="color: ${color}">${char.toLowerCase()}</span>`)
                .split(char.toUpperCase())
                .join(`<span style="color: ${color}">${char.toUpperCase()}</b>`);
        }
        return result;
        // let final = document.createElement('span');
        // final.innerHTML = result;
        // return final;
    }
}
TextDesignPipe.ɵfac = function TextDesignPipe_Factory(t) { return new (t || TextDesignPipe)(); };
TextDesignPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "textDesign", type: TextDesignPipe, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.applicationRouteList = [
            {
                path: 'databinding-1',
                label: '1 Data binding',
                iconName: 'fa-dashboard',
            },
            {
                path: 'databinding-2',
                label: '2 Data binding',
                iconName: 'fa-arrows-alt',
            },
            {
                path: 'sales',
                label: 'Sales form',
                iconName: 'fa-address-card',
            },
            {
                path: 'feeds',
                label: 'Social Feeds',
                iconName: 'fa-comments',
            },
            {
                path: 'usermanagement',
                label: 'User management',
                iconName: 'fa-users',
            },
            {
                path: 'applicationform',
                label: 'User application',
                iconName: 'fa-file',
            },
        ];
        this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivationEnd"]) {
                console.log(e);
                console.log(e.snapshot.data);
            }
        });
    }
    gotoRoute() {
        this.router.navigate(['/usermanagement', 11]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 70vw;\n  border: 1px solid grey;\n  padding: 5px 10px;\n}\n.container[_ngcontent-%COMP%]   .greet-message[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .greet-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #b9b9e2;\n}\n.container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px auto;\n  padding: 5px;\n  border-bottom: 1px solid grey;\n}\n.container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%]   .user-text[_ngcontent-%COMP%] {\n  min-height: 40px;\n  border-radius: 5px;\n  border: 1px solid #7e6c6c;\n  margin: 5px 10px;\n}\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: none;\n  background: #cbcbe0;\n  color: #000;\n  min-width: 200px;\n  margin: 0 10px;\n  min-height: 50px;\n  font-size: 20px;\n}\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button.sahil[_ngcontent-%COMP%] {\n  background: #817b7b;\n}\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button.blueColor[_ngcontent-%COMP%] {\n  background: blue;\n}\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button.greenColor[_ngcontent-%COMP%] {\n  background: green;\n}\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button.surekha[_ngcontent-%COMP%] {\n  background: pink;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNFLGNBQUE7QUFHTjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUVOO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFDSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ047QUFDTTtFQUNFLG1CQUFBO0FBQ1I7QUFFTTtFQUNFLGdCQUFBO0FBQVI7QUFFTTtFQUNFLGlCQUFBO0FBQVI7QUFFTTtFQUNFLGdCQUFBO0FBQVIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwdnc7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICAuZ3JlZXQtbWVzc2FnZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjYjliOWUyO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICAgIC51c2VyLXRleHQge1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3ZTZjNmM7XG4gICAgICBtYXJnaW46IDVweCAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6ICNjYmNiZTA7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICYuc2FoaWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTI5LCAxMjMsIDEyMyk7XG4gICAgICB9XG5cbiAgICAgICYuYmx1ZUNvbG9yIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgIH1cbiAgICAgICYuZ3JlZW5Db2xvciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgfVxuICAgICAgJi5zdXJla2hhIHtcbiAgICAgICAgYmFja2dyb3VuZDogcGluaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Vqoq":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dataBinding/two-data-binding/two-data-binding.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TwoDataBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoDataBindingComponent", function() { return TwoDataBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_applications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/applications.service */ "QHuY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class TwoDataBindingComponent {
    constructor(appService) {
        this.appService = appService;
        this.inputValue = 'default';
        this.ngModelValue = 'model';
        this.redColor = 'tomato';
    }
    ngOnInit() { }
    onInputChange(event) {
        this.inputValue = event.target.value;
    }
}
TwoDataBindingComponent.ɵfac = function TwoDataBindingComponent_Factory(t) { return new (t || TwoDataBindingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_applications_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationsService"])); };
TwoDataBindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwoDataBindingComponent, selectors: [["app-two-data-binding"]], decls: 21, vars: 8, consts: [["type", "text", 3, "value", "input"], ["type", "text", 3, "ngModel", "ngModelChange"]], template: function TwoDataBindingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2. Two Way Data binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Description: Can be possible over an input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Using element property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " User Enter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TwoDataBindingComponent_Template_input_input_12_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Using angular ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " User Enter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TwoDataBindingComponent_Template_input_ngModelChange_20_listener($event) { return ctx.ngModelValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.redColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.redColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ngModelValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngModelValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0d28tZGF0YS1iaW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "lbq7");
/* harmony import */ var _shared_pipes_text_decorate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/pipes/text-decorate.pipe */ "fs/2");
/* harmony import */ var _components_parent_child_com_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/parent-child-com/user-management/user-management.component */ "opDC");
/* harmony import */ var _components_parent_child_com_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/parent-child-com/user-profile/user-profile.component */ "1jpV");
/* harmony import */ var _components_parent_child_com_user_listing_user_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/parent-child-com/user-listing/user-listing.component */ "f5l+");
/* harmony import */ var _components_forms_template_driven_day_10_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forms/template-driven-day-10/user-form/user-form.component */ "gDp6");
/* harmony import */ var _components_forms_template_driven_day_10_user_mng_user_mng_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/forms/template-driven-day-10/user-mng/user-mng.component */ "PVyK");
/* harmony import */ var _components_forms_template_driven_day_10_user_data_list_user_data_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/forms/template-driven-day-10/user-data-list/user-data-list.component */ "4jP6");
/* harmony import */ var _components_forms_model_driven_sales_forms_sales_forms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/forms/model-driven/sales-forms/sales-forms.component */ "MrsJ");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _shared_pipes_text_design_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/pipes/text-design.pipe */ "Sp7u");
/* harmony import */ var _components_forms_nested_forms_user_application_form_user_application_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/forms/nested-forms/user-application-form/user-application-form.component */ "JdZj");
/* harmony import */ var _services_app_form_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/app-form.service */ "DiCU");
/* harmony import */ var _services_data_applications_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/data/applications.service */ "QHuY");
/* harmony import */ var _components_forms_nested_forms_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/forms/nested-forms/application-list/application-list.component */ "5r6x");
/* harmony import */ var _components_social_feed_social_feed_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/social-feed/social-feed.component */ "l26n");
/* harmony import */ var _services_feed_social_feed_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/feed/social-feed.service */ "QFr0");
/* harmony import */ var _components_social_feed_users_listing_users_listing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/social-feed/users-listing/users-listing.component */ "eD5I");
/* harmony import */ var _pages_resources_resources_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/resources/resources.component */ "F3Tb");
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/resource.service */ "m88C");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/resource-form/resource-form.component */ "pJmn");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _layouts_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./layouts/private-layout/private-layout.component */ "5EJc");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/auth.guard */ "+VzF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ "fXoL");





































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _shared_pipes_text_design_pipe__WEBPACK_IMPORTED_MODULE_15__["TextDesignPipe"],
        _services_app_form_service__WEBPACK_IMPORTED_MODULE_17__["AppFormService"],
        _services_data_applications_service__WEBPACK_IMPORTED_MODULE_18__["ApplicationsService"],
        _services_feed_social_feed_service__WEBPACK_IMPORTED_MODULE_21__["SocialFeedService"],
        _services_resource_service__WEBPACK_IMPORTED_MODULE_24__["ResourceService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_33__["AuthService"],
        _services_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_31__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components__WEBPACK_IMPORTED_MODULE_5__["OneWayDataBindingComponent"],
        _components__WEBPACK_IMPORTED_MODULE_5__["TwoDataBindingComponent"],
        _components__WEBPACK_IMPORTED_MODULE_5__["PipeListingComponent"],
        _shared_pipes_text_decorate_pipe__WEBPACK_IMPORTED_MODULE_6__["TextDecoratePipe"],
        _components__WEBPACK_IMPORTED_MODULE_5__["LearnDirectiveComponent"],
        _components_parent_child_com_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__["UserManagementComponent"],
        _components_parent_child_com_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"],
        _components_parent_child_com_user_listing_user_listing_component__WEBPACK_IMPORTED_MODULE_9__["UserListingComponent"],
        _components_forms_template_driven_day_10_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__["UserFormComponent"],
        _components_forms_template_driven_day_10_user_mng_user_mng_component__WEBPACK_IMPORTED_MODULE_11__["UserMngComponent"],
        _components_forms_template_driven_day_10_user_data_list_user_data_list_component__WEBPACK_IMPORTED_MODULE_12__["UserDataListComponent"],
        _components_forms_model_driven_sales_forms_sales_forms_component__WEBPACK_IMPORTED_MODULE_13__["SalesFormsComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _shared_pipes_text_design_pipe__WEBPACK_IMPORTED_MODULE_15__["TextDesignPipe"],
        _components_forms_nested_forms_user_application_form_user_application_form_component__WEBPACK_IMPORTED_MODULE_16__["UserApplicationFormComponent"],
        _components_forms_nested_forms_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_19__["ApplicationListComponent"],
        _components_social_feed_social_feed_component__WEBPACK_IMPORTED_MODULE_20__["SocialFeedComponent"],
        _components_social_feed_users_listing_users_listing_component__WEBPACK_IMPORTED_MODULE_22__["UsersListingComponent"],
        _pages_resources_resources_component__WEBPACK_IMPORTED_MODULE_23__["ResourcesComponent"],
        _components_resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_28__["ResourceFormComponent"],
        _layouts_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_32__["PrivateLayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_31__["ToastrModule"]] }); })();


/***/ }),

/***/ "eD5I":
/*!*********************************************************************************!*\
  !*** ./src/app/components/social-feed/users-listing/users-listing.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UsersListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListingComponent", function() { return UsersListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_feed_social_feed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/feed/social-feed.service */ "QFr0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function UsersListingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListingComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
} }
class UsersListingComponent {
    constructor(sfService, router) {
        this.sfService = sfService;
        this.router = router;
        this.userList = [];
    }
    ngOnInit() {
        this.getUserList();
    }
    getUserList() {
        this.sfService.loadUserList().subscribe((res) => {
            this.userList = res;
        }, (err) => {
            console.log('error while loading user!', err);
        });
    }
    selectUser(user) {
        console.log('user', user);
        this.router.navigate(['feeds/posts', user.id]);
    }
}
UsersListingComponent.ɵfac = function UsersListingComponent_Factory(t) { return new (t || UsersListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_feed_social_feed_service__WEBPACK_IMPORTED_MODULE_1__["SocialFeedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsersListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersListingComponent, selectors: [["app-users-listing"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-12"], ["class", "card p-2 mb-3", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "p-2", "mb-3", 3, "click"]], template: function UsersListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersListingComponent_div_3_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy1saXN0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "f5l+":
/*!************************************************************************************!*\
  !*** ./src/app/components/parent-child-com/user-listing/user-listing.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListingComponent", function() { return UserListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_utils_userlist_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils/userlist.data */ "qFdz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { background: a0 }; };
function UserListingComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListingComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelectUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (ctx_r0.selectedUser == null ? null : ctx_r0.selectedUser.id) == (user_r1 == null ? null : user_r1.id) ? "#8d5a5a" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
} }
class UserListingComponent {
    constructor() {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userList = src_app_shared_utils_userlist_data__WEBPACK_IMPORTED_MODULE_1__["UserList"];
        this.selectedUser = null;
    }
    ngOnInit() { }
    onSelectUser(user) {
        this.selectedUser = user;
        // trigger emit even from child to parent
        this.onSelect.emit(user);
    }
}
UserListingComponent.ɵfac = function UserListingComponent_Factory(t) { return new (t || UserListingComponent)(); };
UserListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListingComponent, selectors: [["app-user-listing"]], outputs: { onSelect: "onSelect" }, decls: 2, vars: 1, consts: [[1, "list-group"], ["class", "list-group-item", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "ngStyle", "click"]], template: function UserListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserListingComponent_li_1_Template, 5, 5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3RpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "fs/2":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/text-decorate.pipe.ts ***!
  \****************************************************/
/*! exports provided: TextDecoratePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDecoratePipe", function() { return TextDecoratePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TextDecoratePipe {
    transform(value, ...args) {
        let count = args[1];
        let formatter = Array(count).fill(args[0]).join('');
        return value
            .split(' ')
            .map((i) => {
            return formatter ? `${formatter}${i}${formatter}` : `__${i}__`;
        })
            .join(' ');
    }
}
TextDecoratePipe.ɵfac = function TextDecoratePipe_Factory(t) { return new (t || TextDecoratePipe)(); };
TextDecoratePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "textDecorate", type: TextDecoratePipe, pure: true });


/***/ }),

/***/ "gDp6":
/*!******************************************************************************************!*\
  !*** ./src/app/components/forms/template-driven-day-10/user-form/user-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function UserFormComponent_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r5, " ");
} }
class UserFormInput {
    constructor(userName, email, phone, city) {
        this.userName = userName;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }
}
class UserFormComponent {
    constructor() {
        this.onNewUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userForm = new UserFormInput('', '', '', '');
        this.cityList = ['Pune', 'Mumbai', 'Nagpur'];
    }
    ngOnInit() { }
    submitUser(formValue) {
        /* console.log('submittedUser', formValue);
        console.log('userForm', this.userForm); */
        this.onNewUser.emit(formValue);
    }
}
UserFormComponent.ɵfac = function UserFormComponent_Factory(t) { return new (t || UserFormComponent)(); };
UserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserFormComponent, selectors: [["app-user-form"]], outputs: { onNewUser: "onNewUser" }, decls: 43, vars: 9, consts: [[1, "container", "mx-auto", "border"], [1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", ""], ["f", "ngForm"], [1, "mb-3"], ["for", "usernameInput", 1, "form-label"], ["type", "text", "id", "usernameInput", "aria-describedby", "userHelp", "required", "", "name", "userName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["usernameInput", "ngModel"], [1, "text-danger", 3, "hidden"], ["for", "userEmailInput", 1, "form-label"], ["type", "email", "id", "userEmailInput", "aria-describedby", "userHelp", "required", "", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["userEmailInput", "ngModel"], ["for", "userPhoneInput", 1, "form-label"], ["type", "text", "id", "userPhoneInput", "aria-describedby", "userHelp", "required", "", "name", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["userPhoneInput", "ngModel"], ["name", "city", "aria-label", "select city", 1, "form-select", 3, "ngModel", "ngModelChange"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-success", 3, "disabled", "click"], [3, "value"]], template: function UserFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "user form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "user name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserFormComponent_Template_input_ngModelChange_16_listener($event) { return ctx.userForm.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " User name is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserFormComponent_Template_input_ngModelChange_23_listener($event) { return ctx.userForm.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " email is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserFormComponent_Template_input_ngModelChange_30_listener($event) { return ctx.userForm.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Enter phone is required and invalid ex. +91345678912! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserFormComponent_Template_select_ngModelChange_37_listener($event) { return ctx.userForm.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UserFormComponent_option_40_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserFormComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); ctx.submitUser(_r0.value); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Save User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userForm.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userForm.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userForm.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userForm.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["input.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoidXNlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "khzH":
/*!*********************************************!*\
  !*** ./src/app/services/data/state-city.ts ***!
  \*********************************************/
/*! exports provided: STATE_CITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_CITY", function() { return STATE_CITY; });
const STATE_CITY = {
    'Andaman and Nicobar Islands': ['Port Blair*'],
    'Andhra Pradesh': [
        'Adoni',
        'Amalapuram',
        'Anakapalle',
        'Anantapur',
        'Bapatla',
        'Bheemunipatnam',
        'Bhimavaram',
        'Bobbili',
        'Chilakaluripet',
        'Chirala',
        'Chittoor',
        'Dharmavaram',
        'Eluru',
        'Gooty',
        'Gudivada',
        'Gudur',
        'Guntakal',
        'Guntur',
        'Hindupur',
        'Jaggaiahpet',
        'Jammalamadugu',
        'Kadapa',
        'Kadiri',
        'Kakinada',
        'Kandukur',
        'Kavali',
        'Kovvur',
        'Kurnool',
        'Macherla',
        'Machilipatnam',
        'Madanapalle',
        'Mandapeta',
        'Markapur',
        'Nagari',
        'Naidupet',
        'Nandyal',
        'Narasapuram',
        'Narasaraopet',
        'Narsipatnam',
        'Nellore',
        'Nidadavole',
        'Nuzvid',
        'Ongole',
        'Palacole',
        'Palasa Kasibugga',
        'Parvathipuram',
        'Pedana',
        'Peddapuram',
        'Pithapuram',
        'Ponnur',
        'Proddatur',
        'Punganur',
        'Puttur',
        'Rajahmundry',
        'Rajam',
        'Rajampet',
        'Ramachandrapuram',
        'Rayachoti',
        'Rayadurg',
        'Renigunta',
        'Repalle',
        'Salur',
        'Samalkot',
        'Sattenapalle',
        'Srikakulam',
        'Srikalahasti',
        'Srisailam Project (Right Flank Colony) Township',
        'Sullurpeta',
        'Tadepalligudem',
        'Tadpatri',
        'Tanuku',
        'Tenali',
        'Tirupati',
        'Tiruvuru',
        'Tuni',
        'Uravakonda',
        'Venkatagiri',
        'Vijayawada',
        'Vinukonda',
        'Visakhapatnam',
        'Vizianagaram',
        'Yemmiganur',
        'Yerraguntla',
    ],
    'Arunachal Pradesh': ['Naharlagun', 'Pasighat'],
    Assam: [
        'Barpeta',
        'Bongaigaon City',
        'Dhubri',
        'Dibrugarh',
        'Diphu',
        'Goalpara',
        'Guwahati',
        'Jorhat',
        'Karimganj',
        'Lanka',
        'Lumding',
        'Mangaldoi',
        'Mankachar',
        'Margherita',
        'Mariani',
        'Marigaon',
        'Nagaon',
        'Nalbari',
        'North Lakhimpur',
        'Rangia',
        'Sibsagar',
        'Silapathar',
        'Silchar',
        'Tezpur',
        'Tinsukia',
    ],
    Bihar: [
        'Araria',
        'Arrah',
        'Arwal',
        'Asarganj',
        'Aurangabad',
        'Bagaha',
        'Barh',
        'Begusarai',
        'Bettiah',
        'Bhabua',
        'Bhagalpur',
        'Buxar',
        'Chhapra',
        'Darbhanga',
        'Dehri-on-Sone',
        'Dumraon',
        'Forbesganj',
        'Gaya',
        'Gopalganj',
        'Hajipur',
        'Jamalpur',
        'Jamui',
        'Jehanabad',
        'Katihar',
        'Kishanganj',
        'Lakhisarai',
        'Lalganj',
        'Madhepura',
        'Madhubani',
        'Maharajganj',
        'Mahnar Bazar',
        'Makhdumpur',
        'Maner',
        'Manihari',
        'Marhaura',
        'Masaurhi',
        'Mirganj',
        'Mokameh',
        'Motihari',
        'Motipur',
        'Munger',
        'Murliganj',
        'Muzaffarpur',
        'Narkatiaganj',
        'Naugachhia',
        'Nawada',
        'Nokha',
        'Patna*',
        'Piro',
        'Purnia',
        'Rafiganj',
        'Rajgir',
        'Ramnagar',
        'Raxaul Bazar',
        'Revelganj',
        'Rosera',
        'Saharsa',
        'Samastipur',
        'Sasaram',
        'Sheikhpura',
        'Sheohar',
        'Sherghati',
        'Silao',
        'Sitamarhi',
        'Siwan',
        'Sonepur',
        'Sugauli',
        'Sultanganj',
        'Supaul',
        'Warisaliganj',
    ],
    Chandigarh: ['Chandigarh*'],
    Chhattisgarh: [
        'Ambikapur',
        'Bhatapara',
        'Bhilai Nagar',
        'Bilaspur',
        'Chirmiri',
        'Dalli-Rajhara',
        'Dhamtari',
        'Durg',
        'Jagdalpur',
        'Korba',
        'Mahasamund',
        'Manendragarh',
        'Mungeli',
        'Naila Janjgir',
        'Raigarh',
        'Raipur*',
        'Rajnandgaon',
        'Sakti',
        'Tilda Newra',
    ],
    'Dadra and Nagar Haveli': ['Silvassa*'],
    Delhi: ['Delhi', 'New Delhi*'],
    Goa: ['Mapusa', 'Margao', 'Marmagao', 'Panaji*'],
    Gujarat: [
        'Adalaj',
        'Ahmedabad',
        'Amreli',
        'Anand',
        'Anjar',
        'Ankleshwar',
        'Bharuch',
        'Bhavnagar',
        'Bhuj',
        'Chhapra',
        'Deesa',
        'Dhoraji',
        'Godhra',
        'Jamnagar',
        'Kadi',
        'Kapadvanj',
        'Keshod',
        'Khambhat',
        'Lathi',
        'Limbdi',
        'Lunawada',
        'Mahesana',
        'Mahuva',
        'Manavadar',
        'Mandvi',
        'Mangrol',
        'Mansa',
        'Mahemdabad',
        'Modasa',
        'Morvi',
        'Nadiad',
        'Navsari',
        'Padra',
        'Palanpur',
        'Palitana',
        'Pardi',
        'Patan',
        'Petlad',
        'Porbandar',
        'Radhanpur',
        'Rajkot',
        'Rajpipla',
        'Rajula',
        'Ranavav',
        'Rapar',
        'Salaya',
        'Sanand',
        'Savarkundla',
        'Sidhpur',
        'Sihor',
        'Songadh',
        'Surat',
        'Talaja',
        'Thangadh',
        'Tharad',
        'Umbergaon',
        'Umreth',
        'Una',
        'Unjha',
        'Upleta',
        'Vadnagar',
        'Vadodara',
        'Valsad',
        'Vapi',
        'Vapi',
        'Veraval',
        'Vijapur',
        'Viramgam',
        'Visnagar',
        'Vyara',
        'Wadhwan',
        'Wankaner',
    ],
    Haryana: [
        'Bahadurgarh',
        'Bhiwani',
        'Charkhi Dadri',
        'Faridabad',
        'Fatehabad',
        'Gohana',
        'Gurgaon',
        'Hansi',
        'Hisar',
        'Jind',
        'Kaithal',
        'Karnal',
        'Ladwa',
        'Mahendragarh',
        'Mandi Dabwali',
        'Narnaul',
        'Narwana',
        'Palwal',
        'Panchkula',
        'Panipat',
        'Pehowa',
        'Pinjore',
        'Rania',
        'Ratia',
        'Rewari',
        'Rohtak',
        'Safidon',
        'Samalkha',
        'Sarsod',
        'Shahbad',
        'Sirsa',
        'Sohna',
        'Sonipat',
        'Taraori',
        'Thanesar',
        'Tohana',
        'Yamunanagar',
    ],
    'Himachal Pradesh': [
        'Mandi',
        'Nahan',
        'Palampur',
        'Shimla*',
        'Solan',
        'Sundarnagar',
    ],
    'Jammu and Kashmir': [
        'Anantnag',
        'Baramula',
        'Jammu',
        'Kathua',
        'Punch',
        'Rajauri',
        'Sopore',
        'Srinagar*',
        'Udhampur',
    ],
    Jharkhand: [
        'Adityapur',
        'Bokaro Steel City',
        'Chaibasa',
        'Chatra',
        'Chirkunda',
        'Medininagar (Daltonganj)',
        'Deoghar',
        'Dhanbad',
        'Dumka',
        'Giridih',
        'Gumia',
        'Hazaribag',
        'Jamshedpur',
        'Jhumri Tilaiya',
        'Lohardaga',
        'Madhupur',
        'Mihijam',
        'Musabani',
        'Pakaur',
        'Patratu',
        'Phusro',
        'Ramgarh',
        'Ranchi*',
        'Sahibganj',
        'Saunda',
        'Simdega',
        'Tenu dam-cum-Kathhara',
    ],
    Karnataka: [
        'Adyar',
        'Afzalpur',
        'Arsikere',
        'Athni',
        'Bengaluru',
        'Belagavi',
        'Ballari',
        'Chikkamagaluru',
        'Davanagere',
        'Gokak',
        'Hubli-Dharwad',
        'Karwar',
        'Kolar',
        'Lakshmeshwar',
        'Lingsugur',
        'Maddur',
        'Madhugiri',
        'Madikeri',
        'Magadi',
        'Mahalingapura',
        'Malavalli',
        'Malur',
        'Mandya',
        'Mangaluru',
        'Manvi',
        'Mudalagi',
        'Mudabidri',
        'Muddebihal',
        'Mudhol',
        'Mulbagal',
        'Mundargi',
        'Nanjangud',
        'Nargund',
        'Navalgund',
        'Nelamangala',
        'Pavagada',
        'Piriyapatna',
        'Puttur',
        'Rabkavi Banhatti',
        'Raayachuru',
        'Ranebennuru',
        'Ramanagaram',
        'Ramdurg',
        'Ranibennur',
        'Robertson Pet',
        'Ron',
        'Sadalagi',
        'Sagara',
        'Sakaleshapura',
        'Sindagi',
        'Sanduru',
        'Sankeshwara',
        'Saundatti-Yellamma',
        'Savanur',
        'Sedam',
        'Shahabad',
        'Shahpur',
        'Shiggaon',
        'Shikaripur',
        'Shivamogga',
        'Surapura',
        'Shrirangapattana',
        'Sidlaghatta',
        'Sindhagi',
        'Sindhnur',
        'Sira',
        'Sirsi',
        'Siruguppa',
        'Srinivaspur',
        'Tarikere',
        'Tekkalakote',
        'Terdal',
        'Talikota',
        'Tiptur',
        'Tumkur',
        'Udupi',
        'Vijayapura',
        'Wadi',
        'Yadgir',
    ],
    Karnatka: ['Mysore'],
    Kerala: [
        'Adoor',
        'Alappuzha',
        'Attingal',
        'Chalakudy',
        'Changanassery',
        'Cherthala',
        'Chittur-Thathamangalam',
        'Guruvayoor',
        'Kanhangad',
        'Kannur',
        'Kasaragod',
        'Kayamkulam',
        'Kochi',
        'Kodungallur',
        'Kollam',
        'Kottayam',
        'Kozhikode',
        'Kunnamkulam',
        'Malappuram',
        'Mattannur',
        'Mavelikkara',
        'Mavoor',
        'Muvattupuzha',
        'Nedumangad',
        'Neyyattinkara',
        'Nilambur',
        'Ottappalam',
        'Palai',
        'Palakkad',
        'Panamattom',
        'Panniyannur',
        'Pappinisseri',
        'Paravoor',
        'Pathanamthitta',
        'Peringathur',
        'Perinthalmanna',
        'Perumbavoor',
        'Ponnani',
        'Punalur',
        'Puthuppally',
        'Koyilandy',
        'Shoranur',
        'Taliparamba',
        'Thiruvalla',
        'Thiruvananthapuram',
        'Thodupuzha',
        'Thrissur',
        'Tirur',
        'Vaikom',
        'Varkala',
        'Vatakara',
    ],
    'Madhya Pradesh': [
        'Alirajpur',
        'Ashok Nagar',
        'Balaghat',
        'Bhopal',
        'Ganjbasoda',
        'Gwalior',
        'Indore',
        'Itarsi',
        'Jabalpur',
        'Lahar',
        'Maharajpur',
        'Mahidpur',
        'Maihar',
        'Malaj Khand',
        'Manasa',
        'Manawar',
        'Mandideep',
        'Mandla',
        'Mandsaur',
        'Mauganj',
        'Mhow Cantonment',
        'Mhowgaon',
        'Morena',
        'Multai',
        'Mundi',
        'Murwara (Katni)',
        'Nagda',
        'Nainpur',
        'Narsinghgarh',
        'Narsinghgarh',
        'Neemuch',
        'Nepanagar',
        'Niwari',
        'Nowgong',
        'Nowrozabad (Khodargama)',
        'Pachore',
        'Pali',
        'Panagar',
        'Pandhurna',
        'Panna',
        'Pasan',
        'Pipariya',
        'Pithampur',
        'Porsa',
        'Prithvipur',
        'Raghogarh-Vijaypur',
        'Rahatgarh',
        'Raisen',
        'Rajgarh',
        'Ratlam',
        'Rau',
        'Rehli',
        'Rewa',
        'Sabalgarh',
        'Sagar',
        'Sanawad',
        'Sarangpur',
        'Sarni',
        'Satna',
        'Sausar',
        'Sehore',
        'Sendhwa',
        'Seoni',
        'Seoni-Malwa',
        'Shahdol',
        'Shajapur',
        'Shamgarh',
        'Sheopur',
        'Shivpuri',
        'Shujalpur',
        'Sidhi',
        'Sihora',
        'Singrauli',
        'Sironj',
        'Sohagpur',
        'Tarana',
        'Tikamgarh',
        'Ujjain',
        'Umaria',
        'Vidisha',
        'Vijaypur',
        'Wara Seoni',
    ],
    Maharashtra: [
        '[[]]',
        'Ahmednagar',
        'Akola',
        'Akot',
        'Amalner',
        'Ambejogai',
        'Amravati',
        'Anjangaon',
        'Arvi',
        'Aurangabad',
        'Bhiwandi',
        'Dhule',
        'Kalyan-Dombivali',
        'Ichalkaranji',
        'Kalyan-Dombivali',
        'Karjat',
        'Latur',
        'Loha',
        'Lonar',
        'Lonavla',
        'Mahad',
        'Malegaon',
        'Malkapur',
        'Mangalvedhe',
        'Mangrulpir',
        'Manjlegaon',
        'Manmad',
        'Manwath',
        'Mehkar',
        'Mhaswad',
        'Mira-Bhayandar',
        'Morshi',
        'Mukhed',
        'Mul',
        'Greater Mumbai*',
        'Murtijapur',
        'Nagpur',
        'Nanded-Waghala',
        'Nandgaon',
        'Nandura',
        'Nandurbar',
        'Narkhed',
        'Nashik',
        'Navi Mumbai',
        'Nawapur',
        'Nilanga',
        'Osmanabad',
        'Ozar',
        'Pachora',
        'Paithan',
        'Palghar',
        'Pandharkaoda',
        'Pandharpur',
        'Panvel',
        'Parbhani',
        'Parli',
        'Partur',
        'Pathardi',
        'Pathri',
        'Patur',
        'Pauni',
        'Pen',
        'Phaltan',
        'Pulgaon',
        'Pune',
        'Purna',
        'Pusad',
        'Rahuri',
        'Rajura',
        'Ramtek',
        'Ratnagiri',
        'Raver',
        'Risod',
        'Sailu',
        'Sangamner',
        'Sangli',
        'Sangole',
        'Sasvad',
        'Satana',
        'Satara',
        'Savner',
        'Sawantwadi',
        'Shahade',
        'Shegaon',
        'Shendurjana',
        'Shirdi',
        'Shirpur-Warwade',
        'Shirur',
        'Shrigonda',
        'Shrirampur',
        'Sillod',
        'Sinnar',
        'Solapur',
        'Soyagaon',
        'Talegaon Dabhade',
        'Talode',
        'Tasgaon',
        'Thane',
        'Tirora',
        'Tuljapur',
        'Tumsar',
        'Uchgaon',
        'Udgir',
        'Umarga',
        'Umarkhed',
        'Umred',
        'Uran',
        'Uran Islampur',
        'Vadgaon Kasba',
        'Vaijapur',
        'Vasai-Virar',
        'Vita',
        'Wadgaon Road',
        'Wai',
        'Wani',
        'Wardha',
        'Warora',
        'Warud',
        'Washim',
        'Yavatmal',
        'Yawal',
        'Yevla',
    ],
    Manipur: ['Imphal*', 'Lilong', 'Mayang Imphal', 'Thoubal'],
    Meghalaya: ['Nongstoin', 'Shillong*', 'Tura'],
    Mizoram: ['Aizawl', 'Lunglei', 'Saiha'],
    Nagaland: [
        'Dimapur',
        'Kohima*',
        'Mokokchung',
        'Tuensang',
        'Wokha',
        'Zunheboto',
    ],
    Odisha: [
        'Balangir',
        'Baleshwar Town',
        'Barbil',
        'Bargarh',
        'Baripada Town',
        'Bhadrak',
        'Bhawanipatna',
        'Bhubaneswar*',
        'Brahmapur',
        'Byasanagar',
        'Cuttack',
        'Dhenkanal',
        'Jatani',
        'Jharsuguda',
        'Kendrapara',
        'Kendujhar',
        'Malkangiri',
        'Nabarangapur',
        'Paradip',
        'Parlakhemundi',
        'Pattamundai',
        'Phulabani',
        'Puri',
        'Rairangpur',
        'Rajagangapur',
        'Raurkela',
        'Rayagada',
        'Sambalpur',
        'Soro',
        'Sunabeda',
        'Sundargarh',
        'Talcher',
        'Tarbha',
        'Titlagarh',
    ],
    Puducherry: ['Karaikal', 'Mahe', 'Pondicherry*', 'Yanam'],
    Punjab: [
        'Amritsar',
        'Barnala',
        'Batala',
        'Bathinda',
        'Dhuri',
        'Faridkot',
        'Fazilka',
        'Firozpur',
        'Firozpur Cantt.',
        'Gobindgarh',
        'Gurdaspur',
        'Hoshiarpur',
        'Jagraon',
        'Jalandhar Cantt.',
        'Jalandhar',
        'Kapurthala',
        'Khanna',
        'Kharar',
        'Kot Kapura',
        'Longowal',
        'Ludhiana',
        'Malerkotla',
        'Malout',
        'Mansa',
        'Moga',
        'Mohali',
        'Morinda, India',
        'Mukerian',
        'Muktsar',
        'Nabha',
        'Nakodar',
        'Nangal',
        'Nawanshahr',
        'Pathankot',
        'Patiala',
        'Pattran',
        'Patti',
        'Phagwara',
        'Phillaur',
        'Qadian',
        'Raikot',
        'Rajpura',
        'Rampura Phul',
        'Rupnagar',
        'Samana',
        'Sangrur',
        'Sirhind Fatehgarh Sahib',
        'Sujanpur',
        'Sunam',
        'Talwara',
        'Tarn Taran',
        'Urmar Tanda',
        'Zira',
        'Zirakpur',
    ],
    Rajasthan: [
        'Ajmer',
        'Alwar',
        'Bikaner',
        'Bharatpur',
        'Bhilwara',
        'Jaipur*',
        'Jodhpur',
        'Lachhmangarh',
        'Ladnu',
        'Lakheri',
        'Lalsot',
        'Losal',
        'Makrana',
        'Malpura',
        'Mandalgarh',
        'Mandawa',
        'Mangrol',
        'Merta City',
        'Mount Abu',
        'Nadbai',
        'Nagar',
        'Nagaur',
        'Nasirabad',
        'Nathdwara',
        'Neem-Ka-Thana',
        'Nimbahera',
        'Nohar',
        'Nokha',
        'Pali',
        'Phalodi',
        'Phulera',
        'Pilani',
        'Pilibanga',
        'Pindwara',
        'Pipar City',
        'Prantij',
        'Pratapgarh',
        'Raisinghnagar',
        'Rajakhera',
        'Rajaldesar',
        'Rajgarh (Alwar)',
        'Rajgarh (Churu)',
        'Rajsamand',
        'Ramganj Mandi',
        'Ramngarh',
        'Ratangarh',
        'Rawatbhata',
        'Rawatsar',
        'Reengus',
        'Sadri',
        'Sadulshahar',
        'Sadulpur',
        'Sagwara',
        'Sambhar',
        'Sanchore',
        'Sangaria',
        'Sardarshahar',
        'Sawai Madhopur',
        'Shahpura',
        'Shahpura',
        'Sheoganj',
        'Sikar',
        'Sirohi',
        'Sojat',
        'Sri Madhopur',
        'Sujangarh',
        'Sumerpur',
        'Suratgarh',
        'Taranagar',
        'Todabhim',
        'Todaraisingh',
        'Tonk',
        'Udaipur',
        'Udaipurwati',
        'Vijainagar, Ajmer',
    ],
    'Tamil Nadu': [
        'Arakkonam',
        'Aruppukkottai',
        'Chennai*',
        'Coimbatore',
        'Erode',
        'Gobichettipalayam',
        'Kancheepuram',
        'Karur',
        'Lalgudi',
        'Madurai',
        'Manachanallur',
        'Nagapattinam',
        'Nagercoil',
        'Namagiripettai',
        'Namakkal',
        'Nandivaram-Guduvancheri',
        'Nanjikottai',
        'Natham',
        'Nellikuppam',
        'Neyveli (TS)',
        "O' Valley",
        'Oddanchatram',
        'P.N.Patti',
        'Pacode',
        'Padmanabhapuram',
        'Palani',
        'Palladam',
        'Pallapatti',
        'Pallikonda',
        'Panagudi',
        'Panruti',
        'Paramakudi',
        'Parangipettai',
        'Pattukkottai',
        'Perambalur',
        'Peravurani',
        'Periyakulam',
        'Periyasemur',
        'Pernampattu',
        'Pollachi',
        'Polur',
        'Ponneri',
        'Pudukkottai',
        'Pudupattinam',
        'Puliyankudi',
        'Punjaipugalur',
        'Ranipet',
        'Rajapalayam',
        'Ramanathapuram',
        'Rameshwaram',
        'Rasipuram',
        'Salem',
        'Sankarankoil',
        'Sankari',
        'Sathyamangalam',
        'Sattur',
        'Shenkottai',
        'Sholavandan',
        'Sholingur',
        'Sirkali',
        'Sivaganga',
        'Sivagiri',
        'Sivakasi',
        'Srivilliputhur',
        'Surandai',
        'Suriyampalayam',
        'Tenkasi',
        'Thammampatti',
        'Thanjavur',
        'Tharamangalam',
        'Tharangambadi',
        'Theni Allinagaram',
        'Thirumangalam',
        'Thirupuvanam',
        'Thiruthuraipoondi',
        'Thiruvallur',
        'Thiruvarur',
        'Thuraiyur',
        'Tindivanam',
        'Tiruchendur',
        'Tiruchengode',
        'Tiruchirappalli',
        'Tirukalukundram',
        'Tirukkoyilur',
        'Tirunelveli',
        'Tirupathur',
        'Tirupathur',
        'Tiruppur',
        'Tiruttani',
        'Tiruvannamalai',
        'Tiruvethipuram',
        'Tittakudi',
        'Udhagamandalam',
        'Udumalaipettai',
        'Unnamalaikadai',
        'Usilampatti',
        'Uthamapalayam',
        'Uthiramerur',
        'Vadakkuvalliyur',
        'Vadalur',
        'Vadipatti',
        'Valparai',
        'Vandavasi',
        'Vaniyambadi',
        'Vedaranyam',
        'Vellakoil',
        'Vellore',
        'Vikramasingapuram',
        'Viluppuram',
        'Virudhachalam',
        'Virudhunagar',
        'Viswanatham',
    ],
    Telangana: [
        'Adilabad',
        'Bellampalle',
        'Bhadrachalam',
        'Bhainsa',
        'Bhongir',
        'Bodhan',
        'Farooqnagar',
        'Gadwal',
        'Hyderabad*',
        'Jagtial',
        'Jangaon',
        'Kagaznagar',
        'Kamareddy',
        'Karimnagar',
        'Khammam',
        'Koratla',
        'Kothagudem',
        'Kyathampalle',
        'Mahbubnagar',
        'Mancherial',
        'Mandamarri',
        'Manuguru',
        'Medak',
        'Miryalaguda',
        'Nagarkurnool',
        'Narayanpet',
        'Nirmal',
        'Nizamabad',
        'Palwancha',
        'Ramagundam',
        'Sadasivpet',
        'Sangareddy',
        'Siddipet',
        'Sircilla',
        'Suryapet',
        'Tandur',
        'Vikarabad',
        'Wanaparthy',
        'Warangal',
        'Yellandu',
    ],
    Tripura: [
        'Agartala*',
        'Belonia',
        'Dharmanagar',
        'Kailasahar',
        'Khowai',
        'Pratapgarh',
        'Udaipur',
    ],
    'Uttar Pradesh': [
        'Achhnera',
        'Agra',
        'Aligarh',
        'Allahabad',
        'Amroha',
        'Azamgarh',
        'Bahraich',
        'Chandausi',
        'Etawah',
        'Firozabad',
        'Fatehpur Sikri',
        'Hapur',
        'Hardoi *',
        'Jhansi',
        'Kalpi',
        'Kanpur',
        'Khair',
        'Laharpur',
        'Lakhimpur',
        'Lal Gopalganj Nindaura',
        'Lalitpur',
        'Lalganj',
        'Lar',
        'Loni',
        'Lucknow*',
        'Mathura',
        'Meerut',
        'Modinagar',
        'Moradabad',
        'Nagina',
        'Najibabad',
        'Nakur',
        'Nanpara',
        'Naraura',
        'Naugawan Sadat',
        'Nautanwa',
        'Nawabganj',
        'Nehtaur',
        'Niwai',
        'Noida',
        'Noorpur',
        'Obra',
        'Orai',
        'Padrauna',
        'Palia Kalan',
        'Parasi',
        'Phulpur',
        'Pihani',
        'Pilibhit',
        'Pilkhuwa',
        'Powayan',
        'Pukhrayan',
        'Puranpur',
        'Purquazi',
        'Purwa',
        'Rae Bareli',
        'Rampur',
        'Rampur Maniharan',
        'Rampur Maniharan',
        'Rasra',
        'Rath',
        'Renukoot',
        'Reoti',
        'Robertsganj',
        'Rudauli',
        'Rudrapur',
        'Sadabad',
        'Safipur',
        'Saharanpur',
        'Sahaspur',
        'Sahaswan',
        'Sahawar',
        'Sahjanwa',
        'Saidpur',
        'Sambhal',
        'Samdhan',
        'Samthar',
        'Sandi',
        'Sandila',
        'Sardhana',
        'Seohara',
        'Shahabad, Hardoi',
        'Shahabad, Rampur',
        'Shahganj',
        'Shahjahanpur',
        'Shamli',
        'Shamsabad, Agra',
        'Shamsabad, Farrukhabad',
        'Sherkot',
        'Shikarpur, Bulandshahr',
        'Shikohabad',
        'Shishgarh',
        'Siana',
        'Sikanderpur',
        'Sikandra Rao',
        'Sikandrabad',
        'Sirsaganj',
        'Sirsi',
        'Sitapur',
        'Soron',
        'Suar',
        'Sultanpur',
        'Sumerpur',
        'Tanda',
        'Thakurdwara',
        'Thana Bhawan',
        'Tilhar',
        'Tirwaganj',
        'Tulsipur',
        'Tundla',
        'Ujhani',
        'Unnao',
        'Utraula',
        'Varanasi',
        'Vrindavan',
        'Warhapur',
        'Zaidpur',
        'Zamania',
    ],
    Uttarakhand: [
        'Bageshwar',
        'Dehradun',
        'Haldwani-cum-Kathgodam',
        'Hardwar',
        'Kashipur',
        'Manglaur',
        'Mussoorie',
        'Nagla',
        'Nainital',
        'Pauri',
        'Pithoragarh',
        'Ramnagar',
        'Rishikesh',
        'Roorkee',
        'Rudrapur',
        'Sitarganj',
        'Srinagar',
        'Tehri',
    ],
    'West Bengal': [
        'Adra',
        'Alipurduar',
        'Arambagh',
        'Asansol',
        'Baharampur',
        'Balurghat',
        'Bankura',
        'Darjiling',
        'English Bazar',
        'Gangarampur',
        'Habra',
        'Hugli-Chinsurah',
        'Jalpaiguri',
        'Jhargram',
        'Kalimpong',
        'Kharagpur',
        'Kolkata',
        'Mainaguri',
        'Malda',
        'Mathabhanga',
        'Medinipur',
        'Memari',
        'Monoharpur',
        'Murshidabad',
        'Nabadwip',
        'Naihati',
        'Panchla',
        'Pandua',
        'Paschim Punropara',
        'Purulia',
        'Raghunathpur',
        'Raghunathganj',
        'Raiganj',
        'Rampurhat',
        'Ranaghat',
        'Sainthia',
        'Santipur',
        'Siliguri',
        'Sonamukhi',
        'Srirampore',
        'Suri',
        'Taki',
        'Tamluk',
        'Tarakeswar',
    ],
};


/***/ }),

/***/ "l26n":
/*!*****************************************************************!*\
  !*** ./src/app/components/social-feed/social-feed.component.ts ***!
  \*****************************************************************/
/*! exports provided: SocialFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialFeedComponent", function() { return SocialFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_feed_social_feed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/feed/social-feed.service */ "QFr0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SocialFeedComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.body);
} }
class SocialFeedComponent {
    constructor(sfService, router, route) {
        this.sfService = sfService;
        this.router = router;
        this.route = route;
        this.route.params.subscribe((params) => {
            this.getPostList(params.id);
        });
    }
    ngOnInit() {
        this.startInterval();
    }
    startInterval() {
        this.intervalId = setInterval(() => {
            console.log('hi');
        }, 5000);
    }
    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
    getPostList(id) {
        this.postList = this.sfService.loadPostList(id);
    }
    gotBack() {
        this.router.navigate(['/feeds']);
    }
}
SocialFeedComponent.ɵfac = function SocialFeedComponent_Factory(t) { return new (t || SocialFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_feed_social_feed_service__WEBPACK_IMPORTED_MODULE_1__["SocialFeedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SocialFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialFeedComponent, selectors: [["app-social-feed"]], decls: 8, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "btn", "btn-block", "btn-outline-dark", 3, "click"], [1, "fa", "fa-arrow-back"], ["class", "card mb-3 p-2", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "p-2"]], template: function SocialFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialFeedComponent_Template_button_click_3_listener() { return ctx.gotBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SocialFeedComponent_div_6_Template, 5, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.postList));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtZmVlZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AuthService {
    constructor(http) {
        this.http = http;
    }
    doLogin(payload) {
        return this.http.post('http://localhost:8080/api/login', payload);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lbq7":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: OneWayDataBindingComponent, TwoDataBindingComponent, PipeListingComponent, LearnDirectiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataBinding_one_way_data_binding_one_way_data_binding_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataBinding/one-way-data-binding/one-way-data-binding.component */ "3BJG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OneWayDataBindingComponent", function() { return _dataBinding_one_way_data_binding_one_way_data_binding_component__WEBPACK_IMPORTED_MODULE_0__["OneWayDataBindingComponent"]; });

/* harmony import */ var _dataBinding_two_data_binding_two_data_binding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataBinding/two-data-binding/two-data-binding.component */ "Vqoq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwoDataBindingComponent", function() { return _dataBinding_two_data_binding_two_data_binding_component__WEBPACK_IMPORTED_MODULE_1__["TwoDataBindingComponent"]; });

/* harmony import */ var _pipes_day_07_pipe_listing_pipe_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes-day-07/pipe-listing/pipe-listing.component */ "ERUx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipeListingComponent", function() { return _pipes_day_07_pipe_listing_pipe_listing_component__WEBPACK_IMPORTED_MODULE_2__["PipeListingComponent"]; });

/* harmony import */ var _directive_day_08_learn_directive_learn_directive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive-day-08/learn-directive/learn-directive.component */ "oAOq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LearnDirectiveComponent", function() { return _directive_day_08_learn_directive_learn_directive_component__WEBPACK_IMPORTED_MODULE_3__["LearnDirectiveComponent"]; });







/***/ }),

/***/ "m88C":
/*!**********************************************!*\
  !*** ./src/app/services/resource.service.ts ***!
  \**********************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ResourceService {
    constructor(http) {
        this.http = http;
        this.selectedResource = null;
    }
    getSelected() {
        return this.selectedResource;
    }
    setSelected(payload) {
        this.selectedResource = payload;
    }
    // loadAllResource
    loadAllResources() {
        const token = localStorage.getItem('ACT');
        return this.http.get('http://localhost:8080/api/resources', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    // loadSingleResource
    // createResource
    createResource(payload) {
        const token = localStorage.getItem('ACT');
        return this.http.post('http://localhost:8080/api/resource', payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    /**
     * Assignment
     *
     */
    // updateResource
    updateResource(id, payload) {
        const token = localStorage.getItem('ACT');
        return this.http.put(`http://localhost:8080/api/resources/${id}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    // deleteResource
    deleteResource(id) {
        const token = localStorage.getItem('ACT');
        return this.http.delete(`http://localhost:8080/api/resources/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}
ResourceService.ɵfac = function ResourceService_Factory(t) { return new (t || ResourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ResourceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResourceService, factory: ResourceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oAOq":
/*!******************************************************************************************!*\
  !*** ./src/app/components/directive-day-08/learn-directive/learn-directive.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LearnDirectiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnDirectiveComponent", function() { return LearnDirectiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { background: a0 }; };
function LearnDirectiveComponent_div_7_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function LearnDirectiveComponent_div_7_li_5_Template_li_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.currenthoverElement = item_r3; })("mouseleave", function LearnDirectiveComponent_div_7_li_5_Template_li_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.currenthoverElement = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r3 == ctx_r2.currenthoverElement ? "#8d5a5a" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r4, " ", item_r3, " ");
} }
function LearnDirectiveComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LearnDirectiveComponent_div_7_li_5_Template, 2, 5, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.selectedDirective, " Directives");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.strDirectives);
} }
function LearnDirectiveComponent_div_8_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r10, " ", item_r9, " ");
} }
function LearnDirectiveComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LearnDirectiveComponent_div_8_li_6_Template, 2, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r1.selectedDirective), " Directives");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.atrDirective);
} }
const _c1 = function (a0) { return { active: a0 }; };
class LearnDirectiveComponent {
    constructor() {
        this.selectedDirective = 'structural';
        this.currenthoverElement = '';
        this.strDirectives = [
            'Ng If',
            'Ng for',
            'Ng Switch',
            'Ng SwitchCase',
            'Ng SwitchDefault',
            'Ng Plural',
            'Ng CmponentOutlet',
            'Ng TemplateOutlet',
        ];
        this.atrDirective = ['Ng Class', 'Ng Style'];
    }
    ngOnInit() { }
    onChangeDirective(param) {
        this.selectedDirective = param;
    }
}
LearnDirectiveComponent.ɵfac = function LearnDirectiveComponent_Factory(t) { return new (t || LearnDirectiveComponent)(); };
LearnDirectiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LearnDirectiveComponent, selectors: [["app-learn-directive"]], decls: 9, vars: 8, consts: [[1, "py-1", "container", "mx-auto"], [1, "text-secondary"], [1, "btn", "btn-outline-primary", "mx-5", 3, "ngClass", "click"], [1, "btn", "btn-outline-primary", 3, "ngClass", "click"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "text-capitalize"], [1, "col-12"], [1, "list-group"], ["class", "list-group-item", 3, "ngStyle", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "ngStyle", "mouseenter", "mouseleave"], [1, ""], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]], template: function LearnDirectiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LearnDirectiveComponent_Template_button_click_3_listener() { return ctx.onChangeDirective("structural"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Show Structural ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LearnDirectiveComponent_Template_button_click_5_listener() { return ctx.onChangeDirective("attribute"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Show Attribute ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LearnDirectiveComponent_div_7_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LearnDirectiveComponent_div_8_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.selectedDirective === "structural"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.selectedDirective === "attribute"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDirective === "structural");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDirective === "attribute");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFybi1kaXJlY3RpdmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "opDC":
/*!******************************************************************************************!*\
  !*** ./src/app/components/parent-child-com/user-management/user-management.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_listing_user_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-listing/user-listing.component */ "f5l+");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "1jpV");



class UserManagementComponent {
    constructor() {
        this.currentUser = null;
    }
    ngOnInit() { }
    onUserChange(user) {
        this.currentUser = user;
    }
}
UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) { return new (t || UserManagementComponent)(); };
UserManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserManagementComponent, selectors: [["app-user-management"]], decls: 6, vars: 1, consts: [[1, "container", "border", "m-5", "px-4"], [1, "row"], [1, "col-8", "user-listing-container"], [3, "onSelect"], [1, "col-4", "user-details"], [3, "user"]], template: function UserManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-user-listing", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function UserManagementComponent_Template_app_user_listing_onSelect_3_listener($event) { return ctx.onUserChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-user-profile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.currentUser);
    } }, directives: [_user_listing_user_listing_component__WEBPACK_IMPORTED_MODULE_1__["UserListingComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "pJmn":
/*!*********************************************************************!*\
  !*** ./src/app/components/resource-form/resource-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResourceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceFormComponent", function() { return ResourceFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/resource.service */ "m88C");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ResourceFormComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
} }
function ResourceFormComponent_div_14_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "                    Title is Required\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResourceFormComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResourceFormComponent_div_14_pre_1_Template, 2, 0, "pre", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.resourceForm.controls.name.errors.required);
} }
class ResourceFormComponent {
    constructor(fb, resourceService, toastr, router) {
        this.fb = fb;
        this.resourceService = resourceService;
        this.toastr = toastr;
        this.router = router;
        this.error = null;
    }
    ngOnInit() {
        this.data = this.resourceService.getSelected();
        if (!!this.data && Object.keys(this.data).length > 0) {
            this.initForm(this.data);
        }
        else {
            this.initForm({});
        }
    }
    initForm(payload) {
        this.resourceForm = this.fb.group({
            name: [payload.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    saveForm() {
        var _a;
        if ((_a = this.resourceForm) === null || _a === void 0 ? void 0 : _a.valid) {
            if (!!this.data) {
                this.resourceService
                    .updateResource(this.data.id, this.resourceForm.value)
                    .subscribe((res) => {
                    var _a;
                    this.toastr.success('Resource updated!', 'Success!');
                    (_a = this.resourceForm) === null || _a === void 0 ? void 0 : _a.reset();
                    this.goToResource();
                }, (err) => {
                    console.log(err);
                });
            }
            else {
                this.resourceService.createResource(this.resourceForm.value).subscribe((res) => {
                    var _a;
                    this.toastr.success('Resource Created!', 'Success!');
                    (_a = this.resourceForm) === null || _a === void 0 ? void 0 : _a.reset();
                    this.goToResource();
                }, (err) => {
                    console.log(err);
                    this.error = err.error.message;
                });
            }
        }
        else {
            console.error('Invalid forms!');
        }
    }
    goToResource() {
        this.router.navigate(['resource']);
    }
}
ResourceFormComponent.ɵfac = function ResourceFormComponent_Factory(t) { return new (t || ResourceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ResourceFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResourceFormComponent, selectors: [["app-resource-form"]], decls: 17, vars: 3, consts: [[1, "container", "mx-auto"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "resource-card"], ["class", "text-sm text-danger", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "titleInputId", 1, "form-label"], ["type", "text", "id", "titleInputId", "aria-describedby", "titleHelp", "formControlName", "name", 1, "form-control"], ["id", "titleHelp", "class", "form-text text-danger", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "primary"], [1, "text-sm", "text-danger"], ["id", "titleHelp", 1, "form-text", "text-danger"], [4, "ngIf"]], template: function ResourceFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResourceFormComponent_Template_button_click_1_listener() { return ctx.goToResource(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Create Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ResourceFormComponent_p_8_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ResourceFormComponent_Template_form_ngSubmit_9_listener() { return ctx.saveForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ResourceFormComponent_div_14_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.resourceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resourceForm.controls.name.errors && (ctx.resourceForm.controls.name.dirty || ctx.resourceForm.controls.name.touched));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".resource-card[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc291cmNlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJyZXNvdXJjZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc291cmNlLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iXX0= */"] });


/***/ }),

/***/ "qFdz":
/*!***********************************************!*\
  !*** ./src/app/shared/utils/userlist.data.ts ***!
  \***********************************************/
/*! exports provided: UserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
const UserList = [
    {
        id: '6024a033ec4cfe2f7238aa68',
        picture: 'http://placehold.it/32x32',
        score: 79,
        name: 'Hyde Ortega',
        email: 'hydeortega@pearlessa.com',
        phone: '+1 (873) 416-2162',
        city: 'Beason',
    },
    {
        id: '6024a033c0031fc483f5c66a',
        picture: 'http://placehold.it/32x32',
        score: 46,
        name: 'Sheryl Owen',
        email: 'sherylowen@pearlessa.com',
        phone: '+1 (977) 592-3198',
        city: 'Winfred',
    },
    {
        id: '6024a033a2f3f9a6b0f2ff46',
        picture: 'http://placehold.it/32x32',
        score: 45,
        name: 'Vilma Dillard',
        email: 'vilmadillard@pearlessa.com',
        phone: '+1 (970) 469-3691',
        city: 'Limestone',
    },
    {
        id: '6024a03370072be5959cfaf7',
        picture: 'http://placehold.it/32x32',
        score: 24,
        name: 'Bowman Kelly',
        email: 'bowmankelly@pearlessa.com',
        phone: '+1 (837) 597-2799',
        city: 'Dale',
    },
    {
        id: '6024a033f0d76721082d473e',
        picture: 'http://placehold.it/32x32',
        score: 53,
        name: 'Merritt Tate',
        email: 'merritttate@pearlessa.com',
        phone: '+1 (945) 457-2269',
        city: 'Jardine',
    },
    {
        id: '6024a03326312271d5ecec43',
        picture: 'http://placehold.it/32x32',
        score: 96,
        name: 'Marva Roy',
        email: 'marvaroy@pearlessa.com',
        phone: '+1 (861) 409-2446',
        city: 'Tetherow',
    },
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/resource-form/resource-form.component */ "pJmn");
/* harmony import */ var _layouts_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/private-layout/private-layout.component */ "5EJc");
/* harmony import */ var _pages_resources_resources_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/resources/resources.component */ "F3Tb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        redirectTo: 'resource',
        pathMatch: 'full',
    },
    {
        path: 'resource',
        // canActivate: [AuthGuard],
        component: _layouts_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_2__["PrivateLayoutComponent"],
        children: [
            {
                path: '',
                component: _pages_resources_resources_component__WEBPACK_IMPORTED_MODULE_3__["ResourcesComponent"],
            },
            {
                path: 'new',
                component: _components_resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_1__["ResourceFormComponent"],
            },
        ],
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | customModules-login-login-module */ "customModules-login-login-module").then(__webpack_require__.bind(null, /*! ./customModules/login/login.module */ "v0tJ")).then(m => m.LoginModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map