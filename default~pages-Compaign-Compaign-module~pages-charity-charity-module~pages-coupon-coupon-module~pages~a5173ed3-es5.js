(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-Compaign-Compaign-module~pages-charity-charity-module~pages-coupon-coupon-module~pages~a5173ed3"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIdealzPagesCompaignAddEditCompaignAddEditCompaignComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h6 class=\"m-0 font-weight-bold text-primary\">\n                                Add Campaign\n                            </h6>\n                        </div>\n                        <div class=\"col-md-6 text-right\">\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\n                                <span class=\"fas fa-arrow-left\"></span> Back\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <form [formGroup]=\"productForm\">\n                <div class=\"usr_profile_inrmain\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                            <div class=\"usr_profile_biodata\">\n                                <label>Campaign Name</label>\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" />\n                                </div>\n                                <div *ngIf=\"submitted && productForm.controls.name.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.name.errors.required\">\n                                    Campaign Name is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-6\">\n                            <div class=\"usr_profile_biodata\">\n                                <label>اسم الحملة</label>\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" type=\"text\" name=\"arabicName\" formControlName=\"arabicName\" />\n                                </div>\n                                <div *ngIf=\"submitted && productForm.controls.arabicName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.arabicName.errors.required\">\n                                        اسم الحملة مطلوب\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                            <div class=\"usr_profile_biodata\">\n                                <label>Select Product</label>\n                                <div class=\"input-group\">\n                                    <select class=\"form-control\" formControlName=\"productName\" *ngIf=\"productList\">\n                                        <option value=\"\" selected disabled hidden>Choose here</option>\n                                        <option *ngFor=\"let type of productList\" [value]=\"type\">\n                                            {{ type }}\n                                        </option>\n                                    </select>\n                                </div>\n                                <div *ngIf=\"submitted && productForm.controls.productName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.productName.errors.required\">\n                                        Product Name is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"fare\">Product Inventory</label>\n                            <div class=\"input-group\">\n                                <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                    formControlName=\"quantity\" placeholder=\"\" />\n                                <div *ngIf=\"submitted && productForm.controls.quantity.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.quantity.errors.required\">\n                                        Product Inventory is required\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <!-- <div class=\"form-group col-md-6\">\n                            <label for=\"fare\">Prize Per Product</label>\n                            <div class=\"input-group\">\n                                <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                    formControlName=\"CompaignPerProductPrice\" placeholder=\"\" />\n                                <div *ngIf=\"submitted && productForm.controls.CompaignPerProductPrice.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.CompaignPerProductPrice.errors.required\">\n                                        Prize Per Product is required\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"fare\">Ticket Count Per Product</label>\n                            <div class=\"input-group\">\n                                <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                    formControlName=\"ticketPerProduct\" placeholder=\"\" />\n                                <div *ngIf=\"submitted && productForm.controls.ticketPerProduct.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.ticketPerProduct.errors.required\">\n                                        Ticket Count Per Product is required\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    \n                    <div class=\"form-group col-md-6\">\n                        <label for=\"fare\">Max User Can Buy Product</label>\n                        <div class=\"input-group\">\n                            <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                formControlName=\"maxUserProduct\" placeholder=\"\" />\n                        </div>\n                    </div>\n                </div> \n                    <div class=\"row\"> \n                        <div class=\"form-group col-md-6\">\n                            <label for=\"title\">Campaign Start Date</label>\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" readonly\n                                    [min]=\"startMinDate\" formControlName=\"startDate\" [owlDateTime]=\"dt1\" placeholder=\"Date\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text trigger\" pickerType=\"calendar\"\n                                        [owlDateTimeTrigger]=\"dt1\"><i class=\"fa fa-calendar\"></i></span>\n                                </div>\n                                <owl-date-time #dt1 [pickerType]=\"'calendar'\"></owl-date-time>\n                            </div>\n                            <div *ngIf=\"submitted && productForm.controls.startDate.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"productForm.controls.startDate.errors.required\">\n                                    Start Date is required\n                                </div>\n                            </div>\n                        </div> \n                        <div class=\"form-group col-6\">\n                            <div class=\"usr_profile_biodata\">\n                                <label>Select Prize</label>\n                                <div class=\"input-group\">\n                                    <select class=\"form-control\" formControlName=\"prizeName\" *ngIf=\"productList\">\n                                        <option value=\"\" selected disabled hidden>Choose here</option>\n                                        <option *ngFor=\"let type of prizeList\" [value]=\"type\">\n                                            {{ type }}\n                                        </option>\n                                    </select>\n                                </div>\n                                <div *ngIf=\"submitted && productForm.controls.prizeName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.prizeName.errors.required\">\n                                        Prize Name is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>           \n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"fare\">Donate</label>\n                            <div class=\"input-group\">\n                                <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                    formControlName=\"perProductDonate\" placeholder=\"\" />\n                                <div *ngIf=\"submitted && productForm.controls.perProductDonate.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.perProductDonate.errors.required\">\n                                        Donate is required\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"usr_profile_img\">\n                                <div class=\"usr_profile_imgbx\">\n                                    <label>Campaign Image</label>\n                                    <div class=\"user_img\">\n                                        <figure *ngIf=\"productImage\">\n                                            <img style=\"height: 50px;width: 50px\" [src]=\"productImage\" />\n                                        </figure>\n                                    </div>\n                                </div>\n                                <div class=\"user_profile_edit\">\n                                    <input type=\"file\" accept=\"image/*\" (change)=\"profilePic($event)\" />\n                                </div>\n                                <div *ngIf=\"submitted && !productImage\" class=\"invalid-feedback\">\n                                Campaign Image is required.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"mt-4\">\n                        <h4>Additional Details</h4>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-6\">\n                                <div class=\"usr_profile_img\">\n                                    <div class=\"usr_profile_imgbx\">\n                                        <label>Early Bird</label>\n                                        <div>\n                                            <ui-switch labelOn=\"ON\" switchColor=\"#000\" id=\"earlyBird\" name=\"earlyBird\"\n                                            formControlName=\"earlyBird\" labelOff=\"OFF\"  (change)=\"onChange($event)\">\n                                            </ui-switch>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6\" *ngIf=\"onStatus\">\n                                <label for=\"fare\">Early Bird Item Number</label>\n                                <div class=\"input-group\">\n                                    <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                        formControlName=\"itemNumber\" placeholder=\"\" />\n                                    <div *ngIf=\"submitted && productForm.controls.itemNumber.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"productForm.controls.itemNumber.errors.required\">\n                                        Early Bird Item Number is required\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"onStatus\">\n                                <div class=\"form-group col-md-6\">\n                                    <label for=\"fare\">Ticket Count</label>\n                                    <div class=\"input-group\">\n                                        <input type=\"number\" min=\"0\" appNumberOnly id=\"ticketAccount\" class=\"form-control\"\n                                            formControlName=\"ticketAccount\" placeholder=\"\" />\n                                        <div *ngIf=\"submitted && productForm.controls.ticketAccount.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"productForm.controls.ticketAccount.errors.required\">\n                                            Ticket Count is required\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- <div class=\"row\">\n                            <div class=\"form-group col-md-6\">\n                                <div class=\"usr_profile_img\">\n                                    <div class=\"usr_profile_imgbx\">\n                                        <label>Donate</label>\n                                        <div>\n                                            <ui-switch labelOn=\"ON\" switchColor=\"#000\" id=\"donate\" name=\"earlyBird\"\n                                            formControlName=\"donate\" labelOff=\"OFF\"  (change)=\"onDonateChange($event)\">\n                                            </ui-switch>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div> \n                            <div class=\"form-group col-md-6\" *ngIf=\"onDonateStatus\">\n                                <label for=\"fare\">Ticket Count</label>\n                                <div class=\"input-group\">\n                                    <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                        formControlName=\"perProductDonate\" placeholder=\"\" />\n                                    <div *ngIf=\"submitted && productForm.controls.perProductDonate.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"productForm.controls.perProductDonate.errors.required\">\n                                        Ticket Count is required\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n                    </div>\n                </div>\n                <div class=\"form-group form-actions\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"onSubmit()\">\n                        Add\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIdealzPagesCompaignAddEditCompaignAddEditCompaignComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWRlYWx6L3BhZ2VzL0NvbXBhaWduL2FkZC1lZGl0LUNvbXBhaWduL0Q6XFxFeGFtcGxlc1xcVG9Eb1xcd2luaWRlYWx6XFx3aW5pZGVhbHovc3JjXFxhcHBcXGlkZWFselxccGFnZXNcXENvbXBhaWduXFxhZGQtZWRpdC1Db21wYWlnblxcYWRkLWVkaXQtQ29tcGFpZ24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lkZWFsei9wYWdlcy9Db21wYWlnbi9hZGQtZWRpdC1Db21wYWlnbi9hZGQtZWRpdC1Db21wYWlnbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pZGVhbHovcGFnZXMvQ29tcGFpZ24vYWRkLWVkaXQtQ29tcGFpZ24vYWRkLWVkaXQtQ29tcGFpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4xNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW07XHJcbiAgICBmb250LXNpemU6IDk1JTtcclxuICAgIGNvbG9yOiAjZjU1MzUzO1xyXG4gIH1cclxuICAiLCIuaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC4xNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcbiAgZm9udC1zaXplOiA5NSU7XG4gIGNvbG9yOiAjZjU1MzUzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AddEditCompaignComponent */

  /***/
  function srcAppIdealzPagesCompaignAddEditCompaignAddEditCompaignComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEditCompaignComponent", function () {
      return AddEditCompaignComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    let AddEditCompaignComponent = class AddEditCompaignComponent {
      constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.productList = ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"];
        this.prizeList = ["Prize 1", "Prize 2", "Prize 3", "Prize 4", "Prize 5"];
        this.onStatus = false;
        this.onDonateStatus = false;
        this.submitted = false;
        this.history = window.history;
        this.startMinDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).subtract(1, 'd').format('YYYY-MM-DD');
      }

      ngOnInit() {
        this.productForm = this.formBuilder.group({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          arabicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          earlyBird: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          donate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          itemNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          ticketPerProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          ticketAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          perProductDonate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          maxUserProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          prizeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
      }

      profilePic(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = event => {
              this.productImage = event.target.result;
              this.productForm.controls['image'].setValue(this.productImage);
            };
          }
        });
      }

      onSubmit() {
        this.submitted = true;

        if (this.submitted && this.productForm.valid) {
          var data = this.productForm.value;

          if (data.earlyBird == false) {
            data['itemNumber'] = 0;
          }

          data['status'] = false;
          this.router.navigate(['/Compaign/Compaign']);
        }
      }

      onChange(event) {
        this.onStatus = event;
      }

      onDonateChange(event) {
        this.onDonateStatus = event;
      }

      afterPickerOpen() {
        document.getElementsByTagName('html')[0].style.top = '';
      }

    };

    AddEditCompaignComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    AddEditCompaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-edit-Compaign',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-edit-Compaign.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-edit-Compaign.component.scss */
      "./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.scss")).default]
    })], AddEditCompaignComponent);
    /***/
  },

  /***/
  "./src/app/idealz/services/popup/popup.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/idealz/services/popup/popup.service.ts ***!
    \********************************************************/

  /*! exports provided: PopupService */

  /***/
  function srcAppIdealzServicesPopupPopupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupService", function () {
      return PopupService;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _pages_main_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pages/main/order/accept-modal/accept-modal.component */
    "./src/app/idealz/pages/main/order/accept-modal/accept-modal.component.ts");
    /* harmony import */


    var _pages_inventory_add_edit_inventory_add_edit_inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pages/inventory/add-edit-inventory/add-edit-inventory.component */
    "./src/app/idealz/pages/inventory/add-edit-inventory/add-edit-inventory.component.ts");
    /* harmony import */


    var _pages_coupon_add_edit_coupon_add_edit_coupon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../pages/coupon/add-edit-coupon/add-edit-coupon.component */
    "./src/app/idealz/pages/coupon/add-edit-coupon/add-edit-coupon.component.ts");
    /* harmony import */


    var _pages_charity_add_edit_charity_add_edit_charity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pages/charity/add-edit-charity/add-edit-charity.component */
    "./src/app/idealz/pages/charity/add-edit-charity/add-edit-charity.component.ts");
    /* harmony import */


    var _pages_Compaign_add_edit_Compaign_add_edit_Compaign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pages/Compaign/add-edit-Compaign/add-edit-Compaign.component */
    "./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.ts");
    /* harmony import */


    var _pages_loyality_add_loyalty_add_loyalty_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../..//pages/loyality/add-loyalty/add-loyalty.component */
    "./src/app/idealz/pages/loyality/add-loyalty/add-loyalty.component.ts");

    let PopupService = class PopupService {
      constructor(dialog) {
        this.dialog = dialog;
      }

      orderAcceptModal() {
        const dialogRef = this.dialog.open(_pages_main_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_3__["AcceptModalComponent"]);
        return dialogRef.afterClosed();
      }

      addProduct() {
        const dialogRef = this.dialog.open(_pages_inventory_add_edit_inventory_add_edit_inventory_component__WEBPACK_IMPORTED_MODULE_4__["AddEditInventoryComponent"]);
        return dialogRef.afterClosed();
      }

      addCoupon() {
        const dialogRef = this.dialog.open(_pages_coupon_add_edit_coupon_add_edit_coupon_component__WEBPACK_IMPORTED_MODULE_5__["AddEditCouponComponent"]);
        return dialogRef.afterClosed();
      }

      addCharity() {
        const dialogRef = this.dialog.open(_pages_charity_add_edit_charity_add_edit_charity_component__WEBPACK_IMPORTED_MODULE_6__["AddEditCharityComponent"]);
        return dialogRef.afterClosed();
      }

      addCompaign() {
        const dialogRef = this.dialog.open(_pages_Compaign_add_edit_Compaign_add_edit_Compaign_component__WEBPACK_IMPORTED_MODULE_7__["AddEditCompaignComponent"]);
        return dialogRef.afterClosed();
      }

      addLoyalty() {
        const dialogRef = this.dialog.open(_pages_loyality_add_loyalty_add_loyalty_component__WEBPACK_IMPORTED_MODULE_8__["AddLoyaltyComponent"]);
        return dialogRef.afterClosed();
      }

    };

    PopupService.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }];

    PopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], PopupService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-Compaign-Compaign-module~pages-charity-charity-module~pages-coupon-coupon-module~pages~a5173ed3-es5.js.map