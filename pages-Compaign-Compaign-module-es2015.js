(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Compaign-Compaign-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/Compaign/Compaign.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/Compaign/Compaign.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6 user_title\">\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Campaign Management</h6>\n                </div>\n                <div class=\"col-md-6 text-right add_btn\">\n                    <button class=\"btn btn-primary\" (click)=\"addCompaign()\">\n                        <span class=\"fas fa-plus\"></span> Add Campaign\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                    <thead>\n                        <tr>\n                            <th>Sr. Number</th>\n                            <th>Campaign Image</th>\n                            <th>Campaign Name</th>\n                            <th>Product Name</th>\n                            <th>Prize Name</th>\n                            <th>Campaign Start Date</th>\n                            <th>Product Invertory</th>\n                            <th>Prize Per Product</th>\n                            <th>Early Bird</th>\n                            <th>Early Bird Item Number</th>\n                            <!-- <th>Ticket Count</th> -->\n                            <th>Donate</th>\n                            <!-- <th>Ticket Count</th> -->\n                            <th>Status</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of inventoryList; let i = index\">\n                            <td>{{ i +1 }}</td>\n                            <td>\n                                <ng-container *ngIf=\"item.image; else noImage\">\n                                    <img src=\"{{ item.image }}\" width=\"70px\" height=\"70px\" />\n                                </ng-container>\n                                <ng-template #noImage>\n                                    <img src=\"assets/img/default-user.png\" width=\"70px\" height=\"70px\" />\n                                </ng-template>\n                            </td>\n                            <td>{{ item.name }}</td>\n                            <td>\n                                {{item.productName}}\n                            </td>\n                            <td>{{item.prizeName}}</td>\n                            <td>{{ item.startDate | date: \"yyyy-MM-dd\" }}</td>\n                            <td>{{ item.productInventory}}</td>\n                            <td>\n                                {{ item.prizePerProduct}} \n                            </td>\n                            <td *ngIf=\"item.earlyBird\">Yes</td>\n                            <td *ngIf=\"!item.earlyBird\">No</td>\n                            <td *ngIf=\"item.itemNumber>0\">\n                                {{item.itemNumber}}\n                            </td>\n                             <td *ngIf=\"item.itemNumber==0\">\n                                -\n                            </td>\n                            <!-- <td *ngIf=\"item.ticketCount>0\">\n                                {{item.ticketCount}}\n                            </td>\n                             <td *ngIf=\"item.ticketCount==0\">\n                                -\n                            </td> -->\n                            <td *ngIf=\"item.donate\">Yes</td>\n                            <td *ngIf=\"!item.donate\">No</td>\n                            <!-- <td *ngIf=\"item.donatePerProduct>0\">\n                                {{item.donatePerProduct}}\n                            </td>\n                             <td *ngIf=\"item.donatePerProduct==0\">\n                                -\n                            </td> -->\n                            <td *ngIf=\"item.status\">Complete</td>\n                            <td *ngIf=\"!item.status\">Pending</td>\n                            <td>\n                                <div class=\"product_action\">\n                                    <button class=\"btn btn-warning mr-1\" title=\"View Campaign\" (click)=\"onViewCampaign(item)\"\n                                        title=\"View\">\n                                        <span class=\"fas fa-fw fa-eye\"></span>\n                                    </button>\n                                    <button class=\"btn btn-success mr-1\" title=\"Edit product\"\n                                        title=\"Edit\">\n                                        <span class=\"fas fa-fw fa-edit\"></span>\n                                    </button>\n                                    <button class=\"btn btn-danger mr-1\" title=\"Delete Product\">\n                                        <span class=\"fas fa-fw fa-trash\"></span>\n                                    </button>\n                                    <button class=\"btn btn-primary mr-1\" title=\"Dowload All Tickets\">\n                                        <span class=\"fa fa-download\"></span>\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h4 *ngIf=\"inventoryList && inventoryList.length == 0\" class=\"text-center\">\n                    No records found.\n                </h4>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/view/view.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/view/view.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h6 class=\"m-0 font-weight-bold text-primary\">View Campaign</h6>\n                        </div>\n                        <div class=\"col-md-6 text-right\">\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\n                                <span class=\"fas fa-arrow-left\"></span> Back\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\" *ngIf=\"compaignDetail\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Campaign Name</label>\n                        <input type=\"text\" name=\"Name\" value=\"{{compaignDetail.name}}\"\n                            class=\"form-control\" disabled />\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Prize Name</label>\n                        <input type=\"text\" name=\"Name\" value=\"{{compaignDetail.prizeName}}\"\n                            class=\"form-control\" disabled />\n                    </div>\n                </div>\n                 <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Product Name</label>\n                        <input type=\"text\" name=\"Name\" value=\"{{compaignDetail.productName}}\"\n                            class=\"form-control\" disabled />\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Product Inventory</label>\n                        <input type=\"text\" name=\"Email\" value=\"{{compaignDetail.productInventory}}\" class=\"form-control\"\n                            disabled />\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Ticket Count Per Product</label>\n                        <input type=\"text\" name=\"Ticket Per Product\" value=\"{{compaignDetail.ticketPerProduct}}\" class=\"form-control\"\n                            disabled />\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Prize Per Product</label>\n                        <input type=\"text\" name=\"per product\" value=\"{{compaignDetail.prizePerProduct}}\"\n                            class=\"form-control\" disabled />\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Max User Can Buy Product</label>\n                        <input type=\"text\" name=\"per product\" value=\"{{compaignDetail.naxUserCanBuy}}\"\n                            class=\"form-control\" disabled />\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Campaign Start Date</label>\n                        <input type=\"text\" name=\"per product\" value=\"{{compaignDetail.startDate | date: 'yyyy-MM-dd'}}\"\n                            class=\"form-control\" disabled />\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Campaign Image</label>\n                        <div>\n                            <ng-container *ngIf=\"compaignDetail.image; else noImage\">\n                                <img [src]=\"compaignDetail.image\"\n                                    style=\"height: 150px; width: 150px;\" />\n                            </ng-container>\n                                <ng-template #noImage>\n                                <img src=\"assets/img/default-user.png\"  style=\"height: 150px; width: 150px;\"/>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n            </div>\n             <div class=\"mt-4\">\n                <h4>Additional Details</h4>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Early Bird</label>\n                            <input type=\"text\" name=\"Name\" value=\"Yes\"\n                                class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Early Bird Item Number</label>\n                            <input type=\"text\" name=\"Email\" value=\"{{compaignDetail.itemNumber}}\" class=\"form-control\"\n                                disabled />\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Ticket Count</label>\n                            <input type=\"text\" name=\"Ticket Per Product\" value=\"{{compaignDetail.ticketCount}}\" class=\"form-control\"\n                                disabled />\n                        </div>\n                    </div>\n                </div>\n                 <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Donate</label>\n                            <input type=\"text\" name=\"Email\" value=\"yes\" class=\"form-control\"\n                                disabled />\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Ticket Count</label>\n                            <input type=\"text\" name=\"Ticket Per Product\" value=\"{{compaignDetail.donatePerProduct}}\" class=\"form-control\"\n                                disabled />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/idealz/pages/Compaign/Compaign-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/idealz/pages/Compaign/Compaign-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CompaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaignRoutingModule", function() { return CompaignRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Compaign_Compaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Compaign/Compaign.component */ "./src/app/idealz/pages/Compaign/Compaign/Compaign.component.ts");
/* harmony import */ var _add_edit_Compaign_add_edit_Compaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-Compaign/add-edit-Compaign.component */ "./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "./src/app/idealz/pages/Compaign/view/view.component.ts");






const routes = [
    {
        path: "",
        data: {
            title: "campaign"
        },
        children: [
            {
                path: "campaign",
                component: _Compaign_Compaign_component__WEBPACK_IMPORTED_MODULE_3__["CompaignComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add-campaign",
                component: _add_edit_Compaign_add_edit_Compaign_component__WEBPACK_IMPORTED_MODULE_4__["AddEditCompaignComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view-campaign",
                component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let CompaignRoutingModule = class CompaignRoutingModule {
};
CompaignRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CompaignRoutingModule);



/***/ }),

/***/ "./src/app/idealz/pages/Compaign/Compaign.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/idealz/pages/Compaign/Compaign.module.ts ***!
  \**********************************************************/
/*! exports provided: CompaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaignModule", function() { return CompaignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _Compaign_Compaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Compaign/Compaign.component */ "./src/app/idealz/pages/Compaign/Compaign/Compaign.component.ts");
/* harmony import */ var _Compaign_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Compaign-routing.module */ "./src/app/idealz/pages/Compaign/Compaign-routing.module.ts");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es2015.js");
/* harmony import */ var _add_edit_Compaign_add_edit_Compaign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-Compaign/add-edit-Compaign.component */ "./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/view.component */ "./src/app/idealz/pages/Compaign/view/view.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");










let CompaignModule = class CompaignModule {
};
CompaignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_Compaign_Compaign_component__WEBPACK_IMPORTED_MODULE_3__["CompaignComponent"],
            _view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"],
            _add_edit_Compaign_add_edit_Compaign_component__WEBPACK_IMPORTED_MODULE_6__["AddEditCompaignComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Compaign_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompaignRoutingModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlNativeDateTimeModule"],
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__["UiSwitchModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]
    })
], CompaignModule);



/***/ }),

/***/ "./src/app/idealz/pages/Compaign/Compaign/Compaign.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/idealz/pages/Compaign/Compaign/Compaign.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkZWFsei9wYWdlcy9Db21wYWlnbi9Db21wYWlnbi9Db21wYWlnbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/idealz/pages/Compaign/Compaign/Compaign.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/idealz/pages/Compaign/Compaign/Compaign.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaignComponent", function() { return CompaignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/idealz/services/popup/popup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CompaignComponent = class CompaignComponent {
    constructor(dialogService, router) {
        this.dialogService = dialogService;
        this.router = router;
        this.inventoryList = [
            {
                id: '32432',
                name: 'Campaign 1',
                startDate: 1586436607054,
                productName: 'Product 1',
                cost: '1450',
                image: 'assets/img/product2.png',
                status: true,
                productInventory: 40,
                earlyBird: true,
                prizePerProduct: 20,
                itemNumber: 1,
                prizeName: "Prize 1",
                donate: true,
                donatePerProduct: 5,
                ticketCount: 10
            },
            {
                name: 'Campaign 2',
                id: '32433',
                startDate: 1584178476021,
                productName: 'Product 2',
                productInventory: 55,
                prizePerProduct: 90,
                status: true,
                earlyBird: false,
                image: 'assets/img/product3.png',
                itemNumber: 0,
                prizeName: "Prize 2",
                donate: false,
                donatePerProduct: 0,
                ticketCount: 0
            },
            {
                name: 'Campaign 3',
                id: '32434',
                startDate: 1584178476021,
                productName: 'Product 3',
                productInventory: 10,
                prizePerProduct: 100,
                image: 'assets/img/product4.png',
                status: false,
                earlyBird: true,
                itemNumber: 7,
                prizeName: "Prize 3",
                donate: true,
                donatePerProduct: 8,
                ticketCount: 6
            },
            {
                name: 'Campaign 4',
                id: '32435',
                startDate: 1586436607054,
                productName: 'Product 4',
                image: 'assets/img/product5.png',
                status: true,
                productInventory: 50,
                prizePerProduct: 200,
                earlyBird: true,
                itemNumber: 3,
                prizeName: "Prize 4",
                donate: true,
                donatePerProduct: 2,
                ticketCount: 4
            },
            {
                name: 'Campaign 5',
                id: '32436',
                startDate: 1584178476021,
                productName: 'Product 5',
                productInventory: 20,
                prizePerProduct: 20,
                image: 'assets/img/product2.png',
                status: false,
                earlyBird: false,
                itemNumber: 0,
                prizeName: "Prize 5",
                donate: false,
                donatePerProduct: 0,
                ticketCount: 0
            }
        ];
    }
    ngOnInit() {
    }
    addCompaign() {
        this.router.navigate(['/campaign/add-campaign']);
        // this.dialogService.addCompaign().subscribe(res => {
        //   if(res){
        //   this.inventoryList.push(res);}
        // });
    }
    onViewCampaign(item) {
        this.router.navigate(['/campaign/view-campaign']);
    }
};
CompaignComponent.ctorParameters = () => [
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CompaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-Compaign',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Compaign.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/Compaign/Compaign.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Compaign.component.scss */ "./src/app/idealz/pages/Compaign/Compaign/Compaign.component.scss")).default]
    })
], CompaignComponent);



/***/ }),

/***/ "./src/app/idealz/pages/Compaign/view/view.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/idealz/pages/Compaign/view/view.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkZWFsei9wYWdlcy9Db21wYWlnbi92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/idealz/pages/Compaign/view/view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/idealz/pages/Compaign/view/view.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ViewComponent = class ViewComponent {
    constructor(router) {
        this.router = router;
        this.history = window.history;
    }
    ngOnInit() {
        this.compaignDetail = {
            name: 'Campaign 1',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            productName: 'Product 1',
            cost: '1450',
            image: 'assets/img/product2.png',
            status: true,
            productInventory: 40,
            earlyBird: true,
            prizePerProduct: 20,
            itemNumber: 1,
            prizeName: "Prize 1",
            donate: true,
            donatePerProduct: 5,
            ticketCount: 10,
            ticketPerProduct: 15,
            naxUserCanBuy: 5,
            prizeDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            specification: [{
                    name: "Brand",
                    value: "watch"
                }],
            prizeImage: 'assets/img/product3.png',
            note: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
            startDate: 1584178476021
        };
    }
};
ViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/view/view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.scss */ "./src/app/idealz/pages/Compaign/view/view.component.scss")).default]
    })
], ViewComponent);



/***/ })

}]);
//# sourceMappingURL=pages-Compaign-Compaign-module-es2015.js.map