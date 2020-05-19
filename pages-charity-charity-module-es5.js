(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-charity-charity-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/charity/charity/charity.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/charity/charity/charity.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIdealzPagesCharityCharityCharityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6 user_title\">\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Chairty Management</h6>\n                </div>\n                <div class=\"col-md-6 text-right add_btn\">\n                    <button class=\"btn btn-primary\" (click)=\"addCharity()\">\n                        <span class=\"fas fa-plus\"></span> Add Chairty\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                    <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                    <thead>\n                        <tr>\n                            <th>Sr. Number</th>\n                            <th>Image</th>\n                            <th>Name</th>\n                            <th>Description</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of inventoryList; let i = index\">\n                            <td>{{ i +1 }}</td>\n                            <td>\n                                <ng-container *ngIf=\"item.image; else noImage\">\n                                    <img src=\"{{ item.image }}\" width=\"70px\" height=\"70px\" />\n                                </ng-container>\n                                <ng-template #noImage>\n                                    <img src=\"assets/img/default-user.png\" width=\"70px\" height=\"70px\" />\n                                </ng-template>\n                            </td>\n                            <td>{{ item.name }}</td>\n                            <td>{{ item.description.length < 24\n                    ?  item.description\n                    :   item.description.slice(0, 24) + \"....\"}}</td>\n                            <td>\n                                <div class=\"product_action\">\n                                    <button class=\"btn btn-success mr-1\" title=\"Edit product\"\n                                        title=\"Edit\">\n                                        <span class=\"fas fa-fw fa-edit\"></span>\n                                    </button>\n                                    <button class=\"btn btn-danger mr-1\" title=\"Delete Product\">\n                                        <span class=\"fas fa-fw fa-trash\"></span>\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h4 *ngIf=\"inventoryList && inventoryList.length == 0\" class=\"text-center\">\n                    No records found.\n                </h4>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/idealz/pages/charity/charity-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/idealz/pages/charity/charity-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: CharityRoutingModule */

  /***/
  function srcAppIdealzPagesCharityCharityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharityRoutingModule", function () {
      return CharityRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _charity_charity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./charity/charity.component */
    "./src/app/idealz/pages/charity/charity/charity.component.ts");

    const routes = [{
      path: "",
      data: {
        title: ""
      },
      children: [{
        path: "charity",
        component: _charity_charity_component__WEBPACK_IMPORTED_MODULE_3__["CharityComponent"],
        data: {
          title: ""
        }
      }]
    }];
    let CharityRoutingModule = class CharityRoutingModule {};
    CharityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CharityRoutingModule);
    /***/
  },

  /***/
  "./src/app/idealz/pages/charity/charity.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/idealz/pages/charity/charity.module.ts ***!
    \********************************************************/

  /*! exports provided: CharityModule */

  /***/
  function srcAppIdealzPagesCharityCharityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharityModule", function () {
      return CharityModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _charity_charity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./charity/charity.component */
    "./src/app/idealz/pages/charity/charity/charity.component.ts");
    /* harmony import */


    var _charity_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./charity-routing.module */
    "./src/app/idealz/pages/charity/charity-routing.module.ts");

    let CharityModule = class CharityModule {};
    CharityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_charity_charity_component__WEBPACK_IMPORTED_MODULE_3__["CharityComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _charity_routing_module__WEBPACK_IMPORTED_MODULE_4__["CharityRoutingModule"]]
    })], CharityModule);
    /***/
  },

  /***/
  "./src/app/idealz/pages/charity/charity/charity.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/idealz/pages/charity/charity/charity.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIdealzPagesCharityCharityCharityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkZWFsei9wYWdlcy9jaGFyaXR5L2NoYXJpdHkvY2hhcml0eS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/idealz/pages/charity/charity/charity.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/idealz/pages/charity/charity/charity.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CharityComponent */

  /***/
  function srcAppIdealzPagesCharityCharityCharityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharityComponent", function () {
      return CharityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/popup/popup.service */
    "./src/app/idealz/services/popup/popup.service.ts");

    let CharityComponent = class CharityComponent {
      constructor(dialogService) {
        this.dialogService = dialogService;
        this.inventoryList = [{
          id: '32432',
          name: 'Product 1',
          image: 'assets/img/product2.png',
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }, {
          id: '32433',
          name: 'Product 2',
          image: 'assets/img/product3.png',
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }, {
          id: '32434',
          name: 'Product 3',
          image: 'assets/img/product4.png',
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }, {
          id: '32435',
          name: 'Product 4',
          image: 'assets/img/product5.png',
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }, {
          id: '32436',
          name: 'Product 5',
          image: 'assets/img/product2.png',
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }];
      }

      ngOnInit() {}

      addCharity() {
        this.dialogService.addCharity().subscribe(res => {
          if (res) {
            this.inventoryList.push(res);
          }
        });
      }

    };

    CharityComponent.ctorParameters = () => [{
      type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]
    }];

    CharityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-charity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./charity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/charity/charity/charity.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./charity.component.scss */
      "./src/app/idealz/pages/charity/charity/charity.component.scss")).default]
    })], CharityComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-charity-charity-module-es5.js.map