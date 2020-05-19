(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loyality-loyality-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/loyality/loyality/loyality.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/loyality/loyality/loyality.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Loyalty Monetisation</h6>\n                </div>\n                <div class=\"col-md-6 text-right\">\n                    <button class=\"btn btn-primary\" (click)=\"addLoyalty()\">\n                        <span class=\"fas fa-plus\"></span> Add Loyalty\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                    <thead>\n                        <tr>\n                            <th>Sr. Number</th>\n                            <!-- <th>Image</th> -->\n                            <th>Name</th>\n                            <th>Code</th>\n                            <th>Type</th>\n                            <th>Discount</th>\n                            <th>Start Date</th>\n                            <th>End Date</th>\n                            <th>\n                                Action\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of couponList; let i = index\">\n                            <td>{{ i  + 1 }}</td>\n                            <td>{{ item.name }}</td>\n                            <td>{{item.code}}</td>\n                            <td *ngIf=\"item.type== 0\">Percentage</td>\n                            <td *ngIf=\"item.type== 1\">Flat</td>\n                            <td *ngIf=\"item.type== 2\">Percentage & Flat</td>\n                            <td>{{item.discount}}\n                            </td>\n                            <td>\n                                {{ item.startDate| date: \"yyyy-MM-dd\"}}\n                            </td>\n                            <td>\n                                {{ item.endDate| date: \"yyyy-MM-dd\"}}\n                            </td>\n                            <td>\n                                <div class=\"product_action\">\n                                    <button class=\"btn btn-warning mr-1\" title=\"View Coupon\"\n                                        title=\"View\">\n                                        <span class=\"fas fa-fw fa-eye\"></span>\n                                    </button>\n                                    <button class=\"btn btn-success mr-1\" title=\"Edit Coupon\"\n                                        title=\"Edit\">\n                                        <span class=\"fas fa-fw fa-edit\"></span>\n                                    </button>\n                                    <button class=\"btn btn-danger mr-1\" title=\"Delete Coupon\"\n                                        >\n                                        <span class=\"fas fa-fw fa-trash\"></span>\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h4 *ngIf=\"couponList && couponList.length == 0\" class=\"text-center\">\n                    No records found.\n                </h4>\n            </div>\n    \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/idealz/pages/loyality/loyality-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/idealz/pages/loyality/loyality-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: LoyalityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyalityRoutingModule", function() { return LoyalityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loyality_loyality_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loyality/loyality.component */ "./src/app/idealz/pages/loyality/loyality/loyality.component.ts");




const routes = [
    {
        path: "",
        data: {
            title: "loyalty"
        },
        children: [
            {
                path: "loyalty",
                component: _loyality_loyality_component__WEBPACK_IMPORTED_MODULE_3__["LoyalityComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let LoyalityRoutingModule = class LoyalityRoutingModule {
};
LoyalityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoyalityRoutingModule);



/***/ }),

/***/ "./src/app/idealz/pages/loyality/loyality.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/idealz/pages/loyality/loyality.module.ts ***!
  \**********************************************************/
/*! exports provided: LoyalityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyalityModule", function() { return LoyalityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _loyality_loyality_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loyality/loyality.component */ "./src/app/idealz/pages/loyality/loyality/loyality.component.ts");
/* harmony import */ var _loyality_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loyality-routing.module */ "./src/app/idealz/pages/loyality/loyality-routing.module.ts");





let LoyalityModule = class LoyalityModule {
};
LoyalityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_loyality_loyality_component__WEBPACK_IMPORTED_MODULE_3__["LoyalityComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _loyality_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoyalityRoutingModule"]
        ]
    })
], LoyalityModule);



/***/ }),

/***/ "./src/app/idealz/pages/loyality/loyality/loyality.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/idealz/pages/loyality/loyality/loyality.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkZWFsei9wYWdlcy9sb3lhbGl0eS9sb3lhbGl0eS9sb3lhbGl0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/idealz/pages/loyality/loyality/loyality.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/idealz/pages/loyality/loyality/loyality.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoyalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyalityComponent", function() { return LoyalityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/idealz/services/popup/popup.service.ts");



let LoyalityComponent = class LoyalityComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.history = window.history;
        this.couponList = [
            {
                "restaurantId": [],
                "userId": [],
                "storeId": [],
                "verticalType": 0,
                "type": 2,
                "status": true,
                "_id": "5e8ddf508b54d8621c631296",
                "name": "sve54",
                "code": "sve54",
                "description": "loream ipsum",
                "discount": 2,
                "maxDiscount": 1,
                "startDate": 1586457000000,
                "endDate": 1586889000000,
                "createdAt": "2020-04-08T14:27:28.517Z",
                "updatedAt": "2020-04-10T13:29:04.839Z",
                "__v": 0,
                "id": "5e8ddf508b54d8621c631296"
            },
            {
                "restaurantId": [],
                "userId": [],
                "storeId": [],
                "verticalType": 2,
                "type": 0,
                "status": true,
                "_id": "5e906d8f3de58264a4766e6e",
                "name": "sve154",
                "code": "sve154",
                "description": "loram",
                "discount": 9,
                "maxDiscount": 18,
                "startDate": 1586457000000,
                "endDate": 1587407400000,
                "createdAt": "2020-04-10T12:58:55.150Z",
                "updatedAt": "2020-04-10T13:05:18.350Z",
                "__v": 0,
                "id": "5e906d8f3de58264a4766e6e"
            },
            {
                "restaurantId": [],
                "userId": [],
                "storeId": [],
                "verticalType": 0,
                "type": 1,
                "status": true,
                "_id": "5e906eab3de58264a4766e6f",
                "name": "save 65",
                "code": "save65",
                "description": "tom",
                "discount": 2,
                "maxDiscount": 5,
                "startDate": 1586457000000,
                "endDate": 1586543400000,
                "createdAt": "2020-04-10T13:03:39.474Z",
                "updatedAt": "2020-04-10T13:03:39.474Z",
                "__v": 0,
                "id": "5e906eab3de58264a4766e6f"
            }
        ];
    }
    ngOnInit() {
    }
    addLoyalty() {
        this.dialogService.addLoyalty().subscribe(res => {
            if (res) {
                this.couponList.push(res);
            }
        });
    }
};
LoyalityComponent.ctorParameters = () => [
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"] }
];
LoyalityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loyality',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loyality.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/loyality/loyality/loyality.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loyality.component.scss */ "./src/app/idealz/pages/loyality/loyality/loyality.component.scss")).default]
    })
], LoyalityComponent);



/***/ })

}]);
//# sourceMappingURL=pages-loyality-loyality-module-es2015.js.map