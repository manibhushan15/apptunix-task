(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/idealz/services/api/api.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/idealz/services/api/api.service.ts ***!
    \****************************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppIdealzServicesApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _url_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../url/url.service */
    "./src/app/idealz/services/url/url.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/common.service */
    "./src/app/idealz/services/common/common.service.ts");

    let ApiService = class ApiService {
      constructor(http, url, comm) {
        this.http = http;
        this.url = url;
        this.comm = comm;
        this.getCountryCode();
      }

      getCountryCode() {
        return this.http.get("assets/json/countryCode.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
      }

      singIn(body) {
        return this.http.post(this.comm.baseUrl + "/panel/login", body);
      }

      sendToken(token) {
        localStorage.setItem("token", token);
      }

      getToken() {
        return localStorage.getItem("token");
      }

      isLoggedIn() {
        return this.getToken() !== null;
      }

    };

    ApiService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _url_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"]
    }, {
      type: _common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
    }];

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/idealz/services/common/common.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/idealz/services/common/common.service.ts ***!
    \**********************************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppIdealzServicesCommonCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
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


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let CommonService = class CommonService {
      // https://appgrowthcompany.com:3000/
      //http://192.168.1.98:3000
      constructor(spinner, toaster, // private api: ApiService,
      http) {
        this.spinner = spinner;
        this.toaster = toaster;
        this.http = http;
        this.orderStatus = "pending";
        this.dropSetting = {
          enableCheckAll: false,
          singleSelection: false,
          idField: "_id",
          textField: "name",
          selectAllText: "Select All",
          unSelectAllText: "UnSelect All",
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
        this.singleDropSetting = {
          enableCheckAll: false,
          singleSelection: true,
          idField: "_id",
          textField: "name",
          selectAllText: "Select All",
          unSelectAllText: "UnSelect All",
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
        this.baseUrl = "https://appgrowthcompany.com:3000/v1/admin";
        this.imageUrl = "https://appgrowthcompany.com:3000";
      }

      showSpinner() {
        this.spinner.show();
      }

      hideSpinner() {
        this.spinner.hide();
      }

      successToast(message) {
        this.toaster.successToastr(message, "", {
          maxShown: 1
        });
      }

      errorToast(message) {
        this.toaster.errorToastr(message);
      }

    };

    CommonService.ctorParameters = () => [{
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
    }, {
      type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    }];

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/idealz/services/url/url.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/idealz/services/url/url.service.ts ***!
    \****************************************************/

  /*! exports provided: UrlService */

  /***/
  function srcAppIdealzServicesUrlUrlServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlService", function () {
      return UrlService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UrlService = class UrlService {
      constructor() {
        this.baseUrl = "http://192.168.1.98:3000/v1/admin";
        this.imageUrl = "http://192.168.1.98:3000";
        this.login = "".concat(this.baseUrl, "/login");
      }

    };
    UrlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UrlService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map