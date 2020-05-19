(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-report-user-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/user-report/user-report/user-report.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/user-report/user-report/user-report.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-12 user_title\">\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Manage User Report</h6>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                    <thead>\n                        <tr>\n                            <th>Sr. Number</th>\n                            <th>Order No.</th>\n                            <th>User Name</th>\n                            <th>Comment</th>\n                            <th>Date</th>\n                            <th>\n                                Action\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of userList; let i = index\">\n                            <td>{{ i +1 }}</td>\n                            <td>{{item.orderNo}}</td>\n                            <td>{{ item.firstName }} {{ item.lastName }}</td>\n                            <td>\n                                {{ item.comment }} \n                            </td>\n                            <td>  {{ item.date | date: \"yyyy-MM-dd\" }}</td>\n                            <td>\n                                <div class=\"product_action\">\n                                    <button class=\"btn btn-warning mr-1\" title=\"View User\"\n                                        title=\"View\">\n                                        <span class=\"fas fa-fw fa-eye\"></span>\n                                    </button>\n                                    <button class=\"btn btn-success mr-1\" title=\"Edit User\"\n                                        title=\"Edit\">\n                                        <span class=\"fas fa-fw fa-edit\"></span>\n                                    </button>\n                                    <button class=\"btn btn-danger mr-1\" title=\"Delete User\">\n                                        <span class=\"fas fa-fw fa-trash\"></span>\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h4 *ngIf=\"userList && userList.length == 0\" class=\"text-center\">\n                    No records found.\n                </h4>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/idealz/pages/user-report/user-report-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/idealz/pages/user-report/user-report-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UserReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportRoutingModule", function() { return UserReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_report_user_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-report/user-report.component */ "./src/app/idealz/pages/user-report/user-report/user-report.component.ts");




const routes = [
    {
        path: "",
        data: {
            title: "user report "
        },
        children: [
            {
                path: "user-report",
                component: _user_report_user_report_component__WEBPACK_IMPORTED_MODULE_3__["UserReportComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let UserReportRoutingModule = class UserReportRoutingModule {
};
UserReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserReportRoutingModule);



/***/ }),

/***/ "./src/app/idealz/pages/user-report/user-report.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/idealz/pages/user-report/user-report.module.ts ***!
  \****************************************************************/
/*! exports provided: UserReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportModule", function() { return UserReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_report_user_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-report/user-report.component */ "./src/app/idealz/pages/user-report/user-report/user-report.component.ts");
/* harmony import */ var _user_report_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-report-routing.module */ "./src/app/idealz/pages/user-report/user-report-routing.module.ts");





let UserReportModule = class UserReportModule {
};
UserReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_report_user_report_component__WEBPACK_IMPORTED_MODULE_3__["UserReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_report_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserReportRoutingModule"]
        ]
    })
], UserReportModule);



/***/ }),

/***/ "./src/app/idealz/pages/user-report/user-report/user-report.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/idealz/pages/user-report/user-report/user-report.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkZWFsei9wYWdlcy91c2VyLXJlcG9ydC91c2VyLXJlcG9ydC91c2VyLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/idealz/pages/user-report/user-report/user-report.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/idealz/pages/user-report/user-report/user-report.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportComponent", function() { return UserReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserReportComponent = class UserReportComponent {
    constructor() {
        this.userList = [
            {
                firstName: 'Adam',
                lastName: 'Joe',
                orderNo: 1160,
                comment: 'good',
                date: '1586210502269'
            },
            {
                firstName: 'Thomas',
                lastName: 'Joe',
                orderNo: 1159,
                comment: 'good',
                date: '1586210502269'
            },
            {
                firstName: 'Gilcharist',
                lastName: 'Joe',
                orderNo: 1161,
                comment: 'good',
                date: '1586210502269'
            },
            {
                firstName: 'John',
                lastName: 'Joe',
                orderNo: 1163,
                comment: 'good',
                date: '1586210502465'
            },
            {
                firstName: 'Smith',
                lastName: 'Joe',
                orderNo: 1162,
                comment: 'good',
                date: '1587373868792'
            }
        ];
    }
    ngOnInit() {
    }
};
UserReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/user-report/user-report/user-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-report.component.scss */ "./src/app/idealz/pages/user-report/user-report/user-report.component.scss")).default]
    })
], UserReportComponent);



/***/ })

}]);
//# sourceMappingURL=pages-user-report-user-report-module-es2015.js.map