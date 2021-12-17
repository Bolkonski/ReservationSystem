"use strict";
(self["webpackChunkClientApp"] = self["webpackChunkClientApp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ 29);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);





function AppComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "reservation_list"));
} }
function AppComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "reservation_create"));
} }
function AppComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "contact_list"));
} }
function AppComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "contact_create"));
} }
class AppComponent {
    constructor(router, translator) {
        this.router = router;
        this.translator = translator;
        router.events.subscribe((val) => {
            this.url = this.router.url;
        });
    }
    ngOnInit() {
        this.activeLang = this.translator.getActiveLang();
        this.availableLangs = this.translator.getAvailableLangs();
    }
    changeLang(lang) {
        this.translator.setActiveLang(lang);
        this.activeLang = lang;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TranslocoService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 8, consts: [["id", "banner"], ["id", "banner-container", 1, "container"], ["id", "company-name", "routerLink", "/"], ["id", "company-description"], ["routerLink", "/"], ["id", "banner-nav"], ["routerLink", "/reservations", 4, "ngIf"], ["routerLink", "/reservations/create", 4, "ngIf"], ["routerLink", "/contacts", 4, "ngIf"], ["routerLink", "/contacts/create", 4, "ngIf"], ["id", "select-language", 3, "ngModel", "ngModelChange"], ["value", "es"], ["value", "en"], [1, "container"], ["routerLink", "/reservations"], ["routerLink", "/reservations/create"], ["routerLink", "/contacts"], ["routerLink", "/contacts/create"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ISU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Corp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_p_12_Template, 3, 3, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_p_13_Template, 3, 3, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_p_14_Template, 3, 3, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_p_15_Template, 3, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_16_listener($event) { return ctx.changeLang($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Espa\u00F1ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, "company_description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url != "/" && ctx.url != "/reservations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url == "/reservations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url != "/contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url == "/contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.activeLang);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TranslocoPipe], styles: [".container[_ngcontent-%COMP%]{\r\n    max-width: 70%;\r\n    margin: auto;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n#banner[_ngcontent-%COMP%]{\r\n    background-image: url('https://cdn.pixabay.com/photo/2020/05/18/10/56/banner-5185674_960_720.jpg'),\r\n    url('/dist/assets/images/banner.webp');\r\n    background-size: cover;\r\n    height: 150px;\r\n}\r\n\r\n#banner-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    color: white;\r\n    background-color: transparent;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n#select-language[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 0;\r\n    margin: 2px;\r\n}\r\n\r\n#company-name[_ngcontent-%COMP%]{\r\n    flex-grow: 0.1;\r\n    font-size: 60px;\r\n    margin: auto;\r\n}\r\n\r\n#company-description[_ngcontent-%COMP%]{\r\n    flex-grow: 1;\r\n    font-size: 20px;\r\n    margin: auto;\r\n    white-space: pre-wrap;\r\n}\r\n\r\n#company-name[_ngcontent-%COMP%] > p[_ngcontent-%COMP%], #company-description[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n#banner-nav[_ngcontent-%COMP%]{\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: right;\r\n    margin: auto;\r\n}\r\n\r\n#banner-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n@media (max-width:480px) {\r\n    .container[_ngcontent-%COMP%]{\r\n        max-width: 95%;\r\n    }\r\n    #company-description[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUEsU0FBUzs7QUFDVDtJQUNJOzBDQUNzQztJQUN0QyxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFDQTs7SUFFSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBLFNBQVM7O0FBQ1Q7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKkJhbm5lciovXHJcbiNiYW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjAvMDUvMTgvMTAvNTYvYmFubmVyLTUxODU2NzRfOTYwXzcyMC5qcGcnKSxcclxuICAgIHVybCgnL2Rpc3QvYXNzZXRzL2ltYWdlcy9iYW5uZXIud2VicCcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuI2Jhbm5lci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI3NlbGVjdC1sYW5ndWFnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuI2NvbXBhbnktbmFtZXtcclxuICAgIGZsZXgtZ3JvdzogMC4xO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiNjb21wYW55LWRlc2NyaXB0aW9ue1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbiNjb21wYW55LW5hbWU+cCxcclxuI2NvbXBhbnktZGVzY3JpcHRpb24+cHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jYmFubmVyLW5hdntcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuI2Jhbm5lci1uYXYgcHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLypNb2JpbGUqL1xyXG5AbWVkaWEgKG1heC13aWR0aDo0ODBweCkge1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgIH1cclxuICAgICNjb21wYW55LWRlc2NyaXB0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 9560);
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ 5022);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9372);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-stars */ 9557);
/* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transloco-root.module */ 4274);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _components_reservation_list_reservation_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/reservation-list/reservation-list.component */ 1315);
/* harmony import */ var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact-list/contact-list.component */ 9913);
/* harmony import */ var _components_contact_create_edit_contact_create_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact-create-edit/contact-create-edit.component */ 2188);
/* harmony import */ var _components_reservation_create_edit_reservation_create_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/reservation-create-edit/reservation-create-edit.component */ 4813);
/* harmony import */ var _components_reservation_item_reservation_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reservation-item/reservation-item.component */ 6436);
/* harmony import */ var _components_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact-item/contact-item.component */ 443);
/* harmony import */ var _components_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/text-editor/text-editor.component */ 7408);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav/nav.component */ 1414);
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ 9330);
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page-header/page-header.component */ 860);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routes */ 4964);
/* harmony import */ var _helpers_sort_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/sort.pipe */ 2186);
/* harmony import */ var _helpers_date_translation_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/date-translation.pipe */ 763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 4001);




























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [_helpers_sort_pipe__WEBPACK_IMPORTED_MODULE_15__.SortPipe, _helpers_date_translation_pipe__WEBPACK_IMPORTED_MODULE_16__.FrenchDatePipe], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_14__.APP_ROUTES),
            _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_22__.RichTextEditorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule,
            ngx_stars__WEBPACK_IMPORTED_MODULE_26__.NgxStarsModule,
            _transloco_root_module__WEBPACK_IMPORTED_MODULE_2__.TranslocoRootModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _components_reservation_list_reservation_list_component__WEBPACK_IMPORTED_MODULE_4__.ReservationListComponent,
        _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_5__.ContactListComponent,
        _components_contact_create_edit_contact_create_edit_component__WEBPACK_IMPORTED_MODULE_6__.ContactCreateEditComponent,
        _components_reservation_create_edit_reservation_create_edit_component__WEBPACK_IMPORTED_MODULE_7__.ReservationCreateEditComponent,
        _components_reservation_item_reservation_item_component__WEBPACK_IMPORTED_MODULE_8__.ReservationItemComponent,
        _components_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_9__.ContactItemComponent,
        _components_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_10__.TextEditorComponent,
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__.NavComponent,
        _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_12__.ContactFormComponent,
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__.PageHeaderComponent,
        _helpers_sort_pipe__WEBPACK_IMPORTED_MODULE_15__.SortPipe,
        _helpers_date_translation_pipe__WEBPACK_IMPORTED_MODULE_16__.FrenchDatePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_22__.RichTextEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule,
        ngx_stars__WEBPACK_IMPORTED_MODULE_26__.NgxStarsModule,
        _transloco_root_module__WEBPACK_IMPORTED_MODULE_2__.TranslocoRootModule] }); })();


/***/ }),

/***/ 4964:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_ROUTES": () => (/* binding */ APP_ROUTES)
/* harmony export */ });
/* harmony import */ var _components_contact_create_edit_contact_create_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/contact-create-edit/contact-create-edit.component */ 2188);
/* harmony import */ var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact-list/contact-list.component */ 9913);
/* harmony import */ var _components_reservation_create_edit_reservation_create_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/reservation-create-edit/reservation-create-edit.component */ 4813);
/* harmony import */ var _components_reservation_list_reservation_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/reservation-list/reservation-list.component */ 1315);




const APP_ROUTES = [
    { path: '', component: _components_reservation_list_reservation_list_component__WEBPACK_IMPORTED_MODULE_3__.ReservationListComponent },
    { path: 'reservations', component: _components_reservation_list_reservation_list_component__WEBPACK_IMPORTED_MODULE_3__.ReservationListComponent },
    { path: 'reservations/create', component: _components_reservation_create_edit_reservation_create_edit_component__WEBPACK_IMPORTED_MODULE_2__.ReservationCreateEditComponent },
    { path: 'reservations/edit/:id', component: _components_reservation_create_edit_reservation_create_edit_component__WEBPACK_IMPORTED_MODULE_2__.ReservationCreateEditComponent },
    { path: 'contacts', component: _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_1__.ContactListComponent },
    { path: 'contacts/create', component: _components_contact_create_edit_contact_create_edit_component__WEBPACK_IMPORTED_MODULE_0__.ContactCreateEditComponent },
    { path: 'contacts/edit/:id', component: _components_contact_create_edit_contact_create_edit_component__WEBPACK_IMPORTED_MODULE_0__.ContactCreateEditComponent },
];


/***/ }),

/***/ 2188:
/*!*********************************************************************************!*\
  !*** ./src/app/components/contact-create-edit/contact-create-edit.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactCreateEditComponent": () => (/* binding */ ContactCreateEditComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 29);
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact-form/contact-form.component */ 9330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contact.service */ 2319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-header/page-header.component */ 860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);









class ContactCreateEditComponent {
    constructor(contactService, route) {
        this.contactService = contactService;
        this.route = route;
        this.checkInputs = false;
    }
    ngOnInit() {
        //get contact id from url
        this.contactId = Number(this.route.snapshot.paramMap.get('id'));
        if (this.contactId) {
            this.contactService.getContactById(this.contactId)
                .subscribe((contact) => {
                this.contactForm.contactIdControl.setValue(contact.id);
                this.contactForm.nameControl.setValue(contact.name);
                this.contactForm.contactTypeIdControl.setValue(contact.contactTypeId);
                this.contactForm.phoneControl.setValue(contact.phone);
                const date = new Date(contact.birthDate);
                const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                this.contactForm.birthDateControl.setValue(dateString);
            });
        }
    }
    onSubmit() {
        if (!this.contactForm.formGroup.valid) {
            this.checkInputs = true;
        }
        else {
            (this.contactForm.contactIdControl.value)
                ? this.editContact()
                : this.addContact();
        }
    }
    addContact() {
        this.contactService.addContact({
            name: this.contactForm.nameControl.value,
            contactTypeId: this.contactForm.contactTypeIdControl.value,
            phone: this.contactForm.phoneControl.value,
            birthDate: this.contactForm.birthDateControl.value
        })
            .subscribe((data) => {
            console.log(data);
            alert((0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.translate)('contact_created'));
            this.contactForm.clear();
        });
    }
    editContact() {
        this.contactService.updateContact({
            id: this.contactForm.contactIdControl.value,
            name: this.contactForm.nameControl.value,
            contactTypeId: this.contactForm.contactTypeIdControl.value,
            phone: this.contactForm.phoneControl.value,
            birthDate: this.contactForm.birthDateControl.value
        })
            .subscribe(() => {
            alert((0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.translate)('contact_updated'));
            this.contactForm.clear();
        });
    }
}
ContactCreateEditComponent.ɵfac = function ContactCreateEditComponent_Factory(t) { return new (t || ContactCreateEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
ContactCreateEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ContactCreateEditComponent, selectors: [["app-contact-create-edit"]], viewQuery: function ContactCreateEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__.ContactFormComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.contactForm = _t.first);
    } }, decls: 8, vars: 10, consts: [["goToUrl", "/contacts", 3, "title", "goToLabel"], ["id", "contact-create-edit-form", 3, "ngSubmit"], [3, "checkInputs"], ["id", "actions"], ["type", "submit", 1, "btn", "btn-red", 3, "value"]], template: function ContactCreateEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ContactCreateEditComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-contact-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, "contact_create"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("goToLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 6, "contact_list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checkInputs", ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 8, "send"));
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__.ContactFormComponent], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoPipe], styles: ["@media (max-width:480px) {\r\n    #actions[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin-top: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtY3JlYXRlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7SUFDSTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJjb250YWN0LWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk1vYmlsZSovXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQ4MHB4KSB7XHJcbiAgICAjYWN0aW9ucyBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9330:
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactFormComponent": () => (/* binding */ ContactFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/contact.service */ 2319);
/* harmony import */ var src_app_services_contact_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contact-type.service */ 2717);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9372);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ 29);









function ContactFormComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "contact_search"), " ");
} }
function ContactFormComponent_div_9_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "field_required"), " ");
} }
function ContactFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactFormComponent_div_9_p_1_Template, 3, 3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nameControl.hasError("required"));
} }
function ContactFormComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", type_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](type_r7.name);
} }
function ContactFormComponent_div_19_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "field_required"), " ");
} }
function ContactFormComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactFormComponent_div_19_p_1_Template, 3, 3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.contactTypeIdControl.hasError("required"));
} }
function ContactFormComponent_div_26_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "invalid_phone"), " ");
} }
function ContactFormComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactFormComponent_div_26_p_1_Template, 3, 3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.phoneControl.hasError("pattern"));
} }
function ContactFormComponent_div_33_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "field_required"), " ");
} }
function ContactFormComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactFormComponent_div_33_p_1_Template, 3, 3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.birthDateControl.hasError("required"));
} }
class ContactFormComponent {
    constructor(contactService, contactTypeService, fb) {
        this.contactService = contactService;
        this.contactTypeService = contactTypeService;
        this.fb = fb;
        this.searchingContact = false;
        this.today = new Date();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.dateInputType = 'text';
    }
    ngOnInit() {
        this.contactTypeService.getContactTypes().subscribe((types) => {
            this.contactTypes = types;
        });
        this.formGroup = this.fb.group({
            contactId: [null],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            contactTypeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]{3}-[0-9]{3}-[0-9]{3}$")]],
            birthDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        });
        this.contactIdControl = this.formGroup.controls['contactId'];
        this.nameControl = this.formGroup.controls['name'];
        this.contactTypeIdControl = this.formGroup.controls['contactTypeId'];
        this.phoneControl = this.formGroup.controls['phone'];
        this.birthDateControl = this.formGroup.controls['birthDate'];
    }
    searchExistingContact() {
        this.ngUnsubscribe.next();
        this.searchingContact = true;
        this.contactService.getContactByName({ name: this.nameControl.value })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe))
            .subscribe((data) => {
            this.contactIdControl.setValue(data.id);
            this.contactTypeIdControl.setValue(data.contactTypeId);
            this.phoneControl.setValue(data.phone);
            const date = new Date(data.birthDate);
            const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            this.birthDateControl.setValue(dateString);
            this.ngUnsubscribe.next();
            this.searchingContact = false;
        }, (err) => {
            console.log(err);
            this.ngUnsubscribe.next();
            this.searchingContact = false;
            this.clearAutocompletion();
        }, () => {
            //tryed to unsuscribe here, but somehow doesn't hit the complete statement
        });
    }
    clear() {
        this.nameControl.setValue('');
        this.contactIdControl.setValue(null);
        this.phoneControl.setValue('');
        this.birthDateControl.setValue('');
        this.dateInputType = 'text';
        this.contactTypeIdControl.setValue('');
        this.checkInputs = false;
    }
    clearAutocompletion() {
        this.contactIdControl.setValue(null);
        this.phoneControl.setValue('');
        this.birthDateControl.setValue('');
        this.dateInputType = 'text';
        this.contactTypeIdControl.setValue('');
        this.checkInputs = false;
    }
    //Input validation
    phoneKeyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_0__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_contact_type_service__WEBPACK_IMPORTED_MODULE_1__.ContactTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
ContactFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], inputs: { checkInputs: "checkInputs" }, decls: 34, vars: 32, consts: [["id", "info"], ["id", "search-contact", 4, "ngIf"], ["id", "contact-inputs", 3, "formGroup"], [1, "material-icons"], ["type", "text", "name", "name", "formControlName", "name", 3, "placeholder", "keyup"], [4, "ngIf"], ["name", "contactTypeId", "formControlName", "contactTypeId"], ["value", "", "selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "tel", "name", "phone", "formControlName", "phone", 3, "placeholder", "keypress"], [2, "position", "relative"], [1, "calendar-icon"], ["formControlName", "birthDate", "name", "birthDate", 3, "type", "placeholder", "max", "click"], ["id", "search-contact"], ["color", "white", "diameter", "20"], ["class", "validation-msg", 4, "ngIf"], [1, "validation-msg"], [3, "value"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactFormComponent_p_1_Template, 4, 3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function ContactFormComponent_Template_input_keyup_7_listener() { return ctx.searchExistingContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ContactFormComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ContactFormComponent_option_18_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ContactFormComponent_div_19_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function ContactFormComponent_Template_input_keypress_24_listener($event) { return ctx.phoneKeyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ContactFormComponent_div_26_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactFormComponent_Template_input_click_30_listener() { return ctx.dateInputType = "date"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ContactFormComponent_div_33_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchingContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid-input", !ctx.nameControl.valid && ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 21, "contact_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nameControl.valid && ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid-input", !ctx.contactTypeIdControl.valid && ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 23, "contact_type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contactTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.contactTypeIdControl.valid && ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid-input", !ctx.phoneControl.valid && ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 25, "contact_phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.phoneControl.valid && ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalid-input", !ctx.birthDateControl.valid && ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", ctx.dateInputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 27, "contact_birth"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](32, 29, ctx.today, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.birthDateControl.valid && ctx.checkInputs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatSpinner], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["#contact-inputs[_ngcontent-%COMP%]{\r\n    margin: 5px 0 5px 0;\r\n    background-color: white;\r\n    padding: 5px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n#contact-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #contact-inputs[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px 0 5px 24px;\r\n    width: 100%;\r\n}\r\n#contact-inputs[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]\r\n{\r\n    padding: 4px 0 4px 24px;\r\n}\r\n#contact-inputs[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    padding-top: 4px;\r\n    padding-left: 2px;\r\n    color: gray;\r\n}\r\n.calendar-icon[_ngcontent-%COMP%]{ \r\n    position: absolute;\r\n    width: 24px;\r\n    height: 24px; \r\n    left: 0; \r\n    margin-left: 2px;\r\n    top: 0;\r\n    margin-top: 4px;\r\n    background: url('/dist/assets/images/calendar.png') no-repeat;\r\n}\r\n#search-contact[_ngcontent-%COMP%]     .mat-spinner circle {\r\n    stroke: blue;\r\n}\r\n#search-contact[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n@media (max-width:480px) {\r\n    #contact-inputs[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n\r\n    #contact-inputs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{\r\n        padding: 5px 0 5px 0;\r\n        margin: 5px 0 5px 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBOzs7SUFHSSx1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7O0lBRUksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGVBQWU7SUFDZiw2REFBNkQ7QUFDakU7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksb0JBQW9CO1FBQ3BCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6ImNvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3QtaW5wdXRze1xyXG4gICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbiNjb250YWN0LWlucHV0cyBpbnB1dCxcclxuI2NvbnRhY3QtaW5wdXRzIHNlbGVjdFxyXG57XHJcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNjb250YWN0LWlucHV0cyBpbnB1dFt0eXBlPWRhdGVdXHJcbntcclxuICAgIHBhZGRpbmc6IDRweCAwIDRweCAyNHB4O1xyXG59XHJcbiNjb250YWN0LWlucHV0cyAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4uY2FsZW5kYXItaWNvbnsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDsgXHJcbiAgICBsZWZ0OiAwOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9kaXN0L2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIucG5nJykgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4jc2VhcmNoLWNvbnRhY3QgL2RlZXAvIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gICAgc3Ryb2tlOiBibHVlO1xyXG59XHJcbiNzZWFyY2gtY29udGFjdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQ4MHB4KSB7XHJcbiAgICAjY29udGFjdC1pbnB1dHN7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdC1pbnB1dHM+KntcclxuICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcclxuICAgICAgICBtYXJnaW46IDVweCAwIDVweCAwO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 443:
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-item/contact-item.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactItemComponent": () => (/* binding */ ContactItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ 29);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _helpers_date_translation_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/date-translation.pipe */ 763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);






const _c0 = function (a1) { return ["../contacts/edit", a1]; };
class ContactItemComponent {
    constructor(translator) {
        this.translator = translator;
        this.onDeleteContact = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        //checking on language changes to reload 'dateTranslated' pipe
        this.translator.langChanges$.subscribe(language => {
            this.activeLang = language;
        });
    }
    onDelete(contact) {
        this.onDeleteContact.emit(contact);
    }
}
ContactItemComponent.ɵfac = function ContactItemComponent_Factory(t) { return new (t || ContactItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TranslocoService)); };
ContactItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactItemComponent, selectors: [["app-contact-item"]], inputs: { contact: "contact" }, outputs: { onDeleteContact: "onDeleteContact" }, decls: 24, vars: 20, consts: [[1, "row"], [1, "cell"], [1, "cell", "type-col"], [1, "cell", "phone-col"], [1, "cell", "date-col"], [1, "cell", 2, "width", "26%"], [1, "cell-btns"], [1, "btn", "btn-gray", 3, "routerLink"], [1, "btn", "btn-red", 3, "click"]], template: function ContactItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "dateTranslated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactItemComponent_Template_button_click_20_listener() { return ctx.onDelete(ctx.contact); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contact.contactType && ctx.contact.contactType.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contact.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 7, ctx.contact.birthDate, ctx.activeLang));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx.contact.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 12, "edit")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 16, "delete")), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], pipes: [_helpers_date_translation_pipe__WEBPACK_IMPORTED_MODULE_0__.FrenchDatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.UpperCasePipe, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TranslocoPipe], styles: ["@media (max-width:480px) {\r\n    .type-col[_ngcontent-%COMP%], .phone-col[_ngcontent-%COMP%], .date-col[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoiY29udGFjdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDo0ODBweCkge1xyXG4gICAgLnR5cGUtY29sLC5waG9uZS1jb2wsLmRhdGUtY29se1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9913:
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-list/contact-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactListComponent": () => (/* binding */ ContactListComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ 29);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/contact.service */ 2319);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-header/page-header.component */ 860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 9560);
/* harmony import */ var _contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-item/contact-item.component */ 443);
/* harmony import */ var _helpers_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/sort.pipe */ 2186);









function ContactListComponent_div_9_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ContactListComponent_div_9_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ContactListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ContactListComponent_div_9_i_1_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ContactListComponent_div_9_i_2_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.sortAscending);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.sortAscending);
} }
function ContactListComponent_div_13_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ContactListComponent_div_13_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ContactListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ContactListComponent_div_13_i_1_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ContactListComponent_div_13_i_2_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.sortAscending);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.sortAscending);
} }
function ContactListComponent_div_17_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ContactListComponent_div_17_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ContactListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ContactListComponent_div_17_i_1_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ContactListComponent_div_17_i_2_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.sortAscending);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.sortAscending);
} }
function ContactListComponent_div_21_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ContactListComponent_div_21_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ContactListComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ContactListComponent_div_21_i_1_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ContactListComponent_div_21_i_2_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.sortAscending);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.sortAscending);
} }
function ContactListComponent_app_contact_item_23_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-contact-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onDeleteContact", function ContactListComponent_app_contact_item_23_Template_app_contact_item_onDeleteContact_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const contact_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.deleteContact(contact_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("contact", contact_r13);
} }
const _c0 = function (a1) { return { itemsPerPage: 8, currentPage: a1 }; };
class ContactListComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.contacts = [];
        this.currentPage = 1;
        this.sortOptions = '';
        this.sortAscending = true;
        this.sortDirection = '';
        this.sortField = '';
    }
    ngOnInit() {
        this.loadContacts();
    }
    loadContacts() {
        this.contactService.getContacts().subscribe((contacts) => {
            this.contacts = contacts.map(x => {
                var _a;
                x.nameSortable = x.name.toLowerCase();
                x.contactTypeNameSortable = ((_a = x.contactType) === null || _a === void 0 ? void 0 : _a.name.toLowerCase()) || '';
                return x;
            });
        });
    }
    deleteContact(contact) {
        if (confirm((0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.translate)('contact_delete_confirm'))) {
            this.contactService.deleteContact(contact.id)
                .subscribe(() => {
                alert((0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.translate)('contact_deleted'));
                this.loadContacts();
            });
        }
    }
    sortContactsBy(field) {
        if (this.sortField === field) {
            this.sortAscending = !this.sortAscending;
        }
        this.sortDirection = this.sortAscending ? 'asc' : 'desc';
        this.sortField = field;
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_0__.ContactService)); };
ContactListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["app-contact-list"]], decls: 27, vars: 32, consts: [["goToUrl", "/contacts/create", 3, "title", "goToLabel"], ["id", "contact-thead"], [1, "row"], [1, "cell", 3, "click"], [4, "ngIf"], [1, "cell", "type-col", 3, "click"], [1, "cell", "phone-col", 3, "click"], [1, "cell", "date-col", 3, "click"], [1, "cell"], [3, "contact", "onDeleteContact", 4, "ngFor", "ngForOf"], ["previousLabel", "", "nextLabel", "", 1, "app-pagination", 3, "pageChange"], ["class", "material-icons is-favorite", 4, "ngIf"], [1, "material-icons", "is-favorite"], [3, "contact", "onDeleteContact"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactListComponent_Template_th_click_6_listener() { return ctx.sortContactsBy("nameSortable"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ContactListComponent_div_9_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactListComponent_Template_th_click_10_listener() { return ctx.sortContactsBy("contactTypeNameSortable"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ContactListComponent_div_13_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactListComponent_Template_th_click_14_listener() { return ctx.sortContactsBy("phone"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ContactListComponent_div_17_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactListComponent_Template_th_click_18_listener() { return ctx.sortContactsBy("birthDate"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ContactListComponent_div_21_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ContactListComponent_app_contact_item_23_Template, 1, 1, "app-contact-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "pagination-controls", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ContactListComponent_Template_pagination_controls_pageChange_26_listener($event) { return ctx.currentPage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 11, "contact_list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("goToLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 13, "contact_create"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 15, "contact_name_short"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortField === "nameSortable");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 17, "contact_type"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortField === "contactTypeNameSortable");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 19, "contact_phone"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortField === "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 21, "contact_birth"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortField === "birthDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](24, 23, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](25, 26, ctx.contacts, ctx.sortDirection, ctx.sortField), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](30, _c0, ctx.currentPage)));
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationControlsComponent, _contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_3__.ContactItemComponent], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginatePipe, _helpers_sort_pipe__WEBPACK_IMPORTED_MODULE_4__.SortPipe], styles: ["#contact-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n}\r\n#contact-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    display: flex;\r\n}\r\n#contact-thead[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n\r\n.app-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n    background: rgb(173, 168, 168);\r\n    border-radius: 4px;\r\n}\r\n.app-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n    background: rgb(88, 83, 83);\r\n}\r\n.app-pagination[_ngcontent-%COMP%]{\r\n    margin-top: 100px;\r\n}\r\n\r\n@media (max-width:480px) {\r\n    .type-col[_ngcontent-%COMP%], .phone-col[_ngcontent-%COMP%], .date-col[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUEsYUFBYTtBQUNiO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQSxTQUFTO0FBQ1Q7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJjb250YWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qVGFibGUgc29ydGluZyovXHJcbiNjb250YWN0LXRoZWFkPnRye1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiNjb250YWN0LXRoZWFkIHRoe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4jY29udGFjdC10aGVhZCAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi8qUGFnaW5hdGlvbiovXHJcbi5hcHAtcGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNzMsIDE2OCwgMTY4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXBwLXBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODgsIDgzLCA4Myk7XHJcbn1cclxuLmFwcC1wYWdpbmF0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi8qTW9iaWxlKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6NDgwcHgpIHtcclxuICAgIC50eXBlLWNvbCwucGhvbmUtY29sLC5kYXRlLWNvbHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 1414:
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 0, vars: 0, template: function NavComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 860:
/*!*****************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);



class PageHeaderComponent {
    constructor() {
        this.title = 'Page Title';
        this.description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
        this.goToUrl = '/';
        this.goToLabel = 'Next page';
    }
    ngOnInit() {
    }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(); };
PageHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["app-page-header"]], inputs: { title: "title", description: "description", goToUrl: "goToUrl", goToLabel: "goToLabel" }, decls: 8, vars: 6, consts: [[1, "page-header"], [1, "ph-title"], [1, "ph-description"], [1, "ph-btn", "btn", "btn-gray", 3, "routerLink"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.goToUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.goToLabel));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe], styles: [".page-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin: 5px 0 5px 0; \r\n    background-color: white;\r\n}\r\n.ph-title[_ngcontent-%COMP%]{\r\n    color:red;\r\n    font-size:18px;\r\n    flex-grow: 2;\r\n}\r\n.ph-description[_ngcontent-%COMP%]{\r\n    flex-grow: 1;\r\n}\r\n.ph-btn[_ngcontent-%COMP%]{\r\n    flex-grow: 1;\r\n}\r\n@media (max-width:480px) {\r\n    .page-header[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    .ph-btn[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksU0FBUztJQUNULGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InBhZ2UtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA1cHggMCA1cHggMDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucGgtdGl0bGV7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGZsZXgtZ3JvdzogMjtcclxufVxyXG4ucGgtZGVzY3JpcHRpb257XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuLnBoLWJ0bntcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo0ODBweCkge1xyXG4gICAgLnBhZ2UtaGVhZGVye1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAucGgtYnRue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4813:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/reservation-create-edit/reservation-create-edit.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationCreateEditComponent": () => (/* binding */ ReservationCreateEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ 29);
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact-form/contact-form.component */ 9330);
/* harmony import */ var _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text-editor/text-editor.component */ 7408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_reservation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/reservation.service */ 7332);
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contact.service */ 2319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page-header/page-header.component */ 860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8267);














function ReservationCreateEditComponent_div_11_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "field_required"), " ");
} }
function ReservationCreateEditComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ReservationCreateEditComponent_div_11_p_1_Template, 3, 3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.reservationDateControl.hasError("required"));
} }
class ReservationCreateEditComponent {
    constructor(reservationService, contactService, route, fb) {
        this.reservationService = reservationService;
        this.contactService = contactService;
        this.route = route;
        this.fb = fb;
        this.today = new Date();
        this.dateInputType = 'text';
        this.checkInputs = false;
    }
    ngOnInit() {
        //set contact form group for input validation
        this.formGroup = this.fb.group({
            reservationDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
        this.reservationDateControl = this.formGroup.controls['reservationDate'];
        //get id from url and load reservation if necessary
        this.reservationId = Number(this.route.snapshot.paramMap.get('id'));
        if (this.reservationId) {
            this.reservationService.getReservationById(this.reservationId)
                .subscribe((reservation) => {
                var _a, _b, _c, _d;
                this.contactForm.contactIdControl.setValue(reservation.contactId);
                this.contactForm.nameControl.setValue((_a = reservation.contact) === null || _a === void 0 ? void 0 : _a.name);
                this.contactForm.contactTypeIdControl.setValue((_b = reservation.contact) === null || _b === void 0 ? void 0 : _b.contactTypeId);
                this.contactForm.phoneControl.setValue((_c = reservation.contact) === null || _c === void 0 ? void 0 : _c.phone);
                const date = new Date(((_d = reservation.contact) === null || _d === void 0 ? void 0 : _d.birthDate) || '');
                const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                this.contactForm.birthDateControl.setValue(dateString);
                this.editor.rteObj.value = reservation.description || '';
            });
        }
    }
    onSubmit() {
        if (!this.formGroup.valid) {
            this.checkInputs = true;
            return;
        }
        if (this.contactForm.contactIdControl.value) {
            this.contactService.updateContact({
                id: this.contactForm.contactIdControl.value,
                name: this.contactForm.nameControl.value,
                contactTypeId: this.contactForm.contactTypeIdControl.value,
                birthDate: this.contactForm.birthDateControl.value,
                phone: this.contactForm.phoneControl.value,
            }).subscribe(() => {
                this.reservationMethod();
            });
        }
        else {
            this.contactService.addContact({
                name: this.contactForm.nameControl.value,
                contactTypeId: this.contactForm.contactTypeIdControl.value,
                birthDate: this.contactForm.birthDateControl.value,
                phone: this.contactForm.phoneControl.value,
            }).subscribe((contact) => {
                this.contactForm.contactIdControl.setValue(contact.id);
                this.reservationMethod();
            });
        }
    }
    reservationMethod() {
        (this.reservationId)
            ? this.editReservation()
            : this.addReservation();
    }
    addReservation() {
        this.reservationService.addReservation({
            description: this.editor.rteObj.value,
            date: this.reservationDateControl.value,
            contactId: this.contactForm.contactIdControl.value
        })
            .subscribe((data) => {
            console.log(data);
            this.clearForm();
            this.editor.rteObj.value = '';
            this.checkInputs = false;
            alert((0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.translate)('reservation_created'));
        }, (error) => {
            alert(error);
        });
    }
    editReservation() {
        this.reservationService.updateReservation({
            id: this.reservationId,
            description: this.editor.rteObj.value,
            date: this.reservationDateControl.value,
            contactId: this.contactForm.contactIdControl.value,
            contact: {
                name: this.contactForm.nameControl.value,
                contactTypeId: this.contactForm.contactTypeIdControl.value,
                birthDate: this.contactForm.birthDateControl.value,
                phone: this.contactForm.phoneControl.value
            }
        })
            .subscribe(() => {
            alert((0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.translate)('reservation_updated'));
            this.clearForm();
            this.editor.rteObj.value = '';
        });
    }
    clearForm() {
        this.contactForm.clear();
        this.reservationDateControl.setValue('');
        this.dateInputType = 'text';
        this.checkInputs = false;
    }
}
ReservationCreateEditComponent.ɵfac = function ReservationCreateEditComponent_Factory(t) { return new (t || ReservationCreateEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_reservation_service__WEBPACK_IMPORTED_MODULE_2__.ReservationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_3__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder)); };
ReservationCreateEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ReservationCreateEditComponent, selectors: [["app-reservation-create-edit"]], viewQuery: function ReservationCreateEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_1__.TextEditorComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__.ContactFormComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.contactForm = _t.first);
    } }, decls: 15, vars: 22, consts: [["goToUrl", "/reservations", 3, "title", "goToLabel"], ["id", "reservation-form", 3, "formGroup", "ngSubmit"], [3, "checkInputs"], [2, "position", "relative"], [1, "calendar-icon"], ["id", "reservation-date", "name", "reservationDate", "formControlName", "reservationDate", 3, "type", "placeholder", "min", "click"], [4, "ngIf"], ["id", "actions"], ["type", "submit", 1, "btn", "btn-red", 3, "value"], ["class", "validation-msg", 4, "ngIf"], [1, "validation-msg"]], template: function ReservationCreateEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ReservationCreateEditComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-contact-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-text-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReservationCreateEditComponent_Template_input_click_8_listener() { return ctx.dateInputType = "date"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ReservationCreateEditComponent_div_11_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 11, "reservation_create"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("goToLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 13, "reservation_list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checkInputs", ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalid-input", !ctx.reservationDateControl.valid && ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("type", ctx.dateInputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 15, "reservation_date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("min", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 17, ctx.today, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.reservationDateControl.valid && ctx.checkInputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 20, "send"));
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__.ContactFormComponent, _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_1__.TextEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["#reservation-form[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: lightgray;\r\n}\r\n#reservation-date[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px 0 5px 24px;\r\n    margin-top: 5px;\r\n}\r\n.calendar-icon[_ngcontent-%COMP%]{ \r\n    position: absolute;\r\n    width: 24px;\r\n    height: 24px; \r\n    left: 0; \r\n    margin-left: 2px;\r\n    top: 0;\r\n    margin-top: 9px;\r\n    background: url('/dist/assets/images/calendar.png') no-repeat;\r\n}\r\n\r\n@media (max-width:480px) {\r\n    #actions[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #reservation-date[_ngcontent-%COMP%]\r\n    {\r\n        width: 100%;\r\n    }\r\n    #actions[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]{\r\n        margin-top: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjtBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixlQUFlO0lBQ2YsNkRBQTZEO0FBQ2pFO0FBRUEsU0FBUztBQUNUO0lBQ0k7OztRQUdJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoicmVzZXJ2YXRpb24tY3JlYXRlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZXNlcnZhdGlvbi1mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuI3Jlc2VydmF0aW9uLWRhdGVcclxue1xyXG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmNhbGVuZGFyLWljb257IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7IFxyXG4gICAgbGVmdDogMDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvZGlzdC9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnBuZycpIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLypNb2JpbGUqL1xyXG5AbWVkaWEgKG1heC13aWR0aDo0ODBweCkge1xyXG4gICAgI2FjdGlvbnMgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuICAgICNyZXNlcnZhdGlvbi1kYXRlXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAjYWN0aW9ucyBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6436:
/*!***************************************************************************!*\
  !*** ./src/app/components/reservation-item/reservation-item.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationItemComponent": () => (/* binding */ ReservationItemComponent)
/* harmony export */ });
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-stars */ 9557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_reservation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/reservation.service */ 7332);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 29);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9372);
/* harmony import */ var _helpers_date_translation_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/date-translation.pipe */ 763);









function ReservationItemComponent_mat_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner", 14);
} }
function ReservationItemComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ReservationItemComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["../reservations/edit", a1]; };
class ReservationItemComponent {
    constructor(reservationService, translator) {
        this.reservationService = reservationService;
        this.translator = translator;
        this.rankingLoader = false;
    }
    ngOnInit() {
        //checking on language changes to reload 'dateTranslated' pipe
        this.translator.langChanges$.subscribe(language => {
            this.activeLang = language;
        });
    }
    toggleFavorite() {
        this.reservation.favorite = !this.reservation.favorite;
    }
    setFavorite() {
        this.toggleFavorite();
        this.reservationService.updateReservation(this.reservation)
            .subscribe(() => { }, () => { this.toggleFavorite(); });
    }
    rateReservation(rating) {
        this.rankingLoader = true;
        this.reservation.ranking = rating;
        this.reservationService.rateReservation(this.reservation)
            .subscribe(ranking => {
            this.reservation.ranking = ranking;
            this.starsComponent.setRating(ranking);
            this.rankingLoader = false;
        });
    }
}
ReservationItemComponent.ɵfac = function ReservationItemComponent_Factory(t) { return new (t || ReservationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_reservation_service__WEBPACK_IMPORTED_MODULE_0__.ReservationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoService)); };
ReservationItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReservationItemComponent, selectors: [["app-reservation-item"]], viewQuery: function ReservationItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ngx_stars__WEBPACK_IMPORTED_MODULE_4__.NgxStarsComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.starsComponent = _t.first);
    } }, inputs: { reservation: "reservation" }, decls: 26, vars: 25, consts: [[1, "row"], [1, "cell", "main"], [1, "reservation-date"], [1, "cell", "ranking"], [2, "display", "flex"], [3, "readonly", "size", "initialStars", "color", "ratingOutput"], ["color", "'#fab025'", "diameter", "20", 4, "ngIf"], [1, "cell", "favorite"], [1, "favorite-btn", 3, "click"], ["class", "material-icons is-favorite", 4, "ngIf"], ["class", "material-icons", 4, "ngIf"], [1, "cell"], [1, "cell-btns"], [1, "btn", "btn-gray", 3, "routerLink"], ["color", "'#fab025'", "diameter", "20"], [1, "material-icons", "is-favorite"], [1, "material-icons"]], template: function ReservationItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "dateTranslated");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ngx-stars", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ratingOutput", function ReservationItemComponent_Template_ngx_stars_ratingOutput_11_listener($event) { return ctx.rateReservation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ReservationItemComponent_mat_spinner_12_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReservationItemComponent_Template_div_click_17_listener() { return ctx.setFavorite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ReservationItemComponent_i_18_Template, 2, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ReservationItemComponent_i_19_Template, 2, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.reservation.contact && ctx.reservation.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 14, ctx.reservation.date, ctx.activeLang));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", false)("size", 1)("initialStars", ctx.reservation.ranking || 0)("color", "#fab025");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rankingLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-favorite", ctx.reservation.favorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 17, "add_favorites"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.reservation.favorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.reservation.favorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c0, ctx.reservation.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 21, "edit")));
    } }, directives: [ngx_stars__WEBPACK_IMPORTED_MODULE_4__.NgxStarsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatSpinner], pipes: [_helpers_date_translation_pipe__WEBPACK_IMPORTED_MODULE_1__.FrenchDatePipe, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe], styles: [".reservation-date[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\r\n.favorite[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.favorite-btn[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    margin-left: 4px;\r\n}\r\np.is-favorite[_ngcontent-%COMP%]{\r\n    color: gray;\r\n}\r\ni.is-favorite[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\r\n\r\n@media (max-width:480px) {\r\n    .ranking[_ngcontent-%COMP%], .favorite[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .cell.main[_ngcontent-%COMP%]{\r\n        flex-grow: 2;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0EsU0FBUztBQUNUO0lBQ0k7O1FBRUksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InJlc2VydmF0aW9uLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNlcnZhdGlvbi1kYXRle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mYXZvcml0ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmZhdm9yaXRlLWJ0bntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxucC5pcy1mYXZvcml0ZXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcbmkuaXMtZmF2b3JpdGV7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi8qTW9iaWxlKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6NDgwcHgpIHtcclxuICAgIC5yYW5raW5nLFxyXG4gICAgLmZhdm9yaXRlIHB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jZWxsLm1haW57XHJcbiAgICAgICAgZmxleC1ncm93OiAyO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 1315:
/*!***************************************************************************!*\
  !*** ./src/app/components/reservation-list/reservation-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationListComponent": () => (/* binding */ ReservationListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_reservation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/reservation.service */ 7332);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-header/page-header.component */ 860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 9560);
/* harmony import */ var _reservation_item_reservation_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reservation-item/reservation-item.component */ 6436);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ 29);
/* harmony import */ var _helpers_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/sort.pipe */ 2186);









function ReservationListComponent_app_reservation_item_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-reservation-item", 13);
} if (rf & 2) {
    const reservation_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("reservation", reservation_r2);
} }
function ReservationListComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "reservation_list_empty"));
} }
const _c0 = function (a1) { return { itemsPerPage: 8, currentPage: a1 }; };
class ReservationListComponent {
    constructor(reservationService) {
        this.reservationService = reservationService;
        this.reservations = [];
        this.currentPage = 1;
        this.sortOptions = '';
        this.sortDirection = '';
        this.sortField = '';
    }
    ngOnInit() {
        this.reservationService.getReservations().subscribe((reservations) => {
            this.reservations =
                reservations.map(x => {
                    var _a;
                    x.contactNameSortable = ((_a = x.contact) === null || _a === void 0 ? void 0 : _a.name.toLowerCase()) || '';
                    return x;
                });
        });
    }
    sortReservations(options) {
        [this.sortDirection, this.sortField] = options.split('-');
    }
}
ReservationListComponent.ɵfac = function ReservationListComponent_Factory(t) { return new (t || ReservationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_reservation_service__WEBPACK_IMPORTED_MODULE_0__.ReservationService)); };
ReservationListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ReservationListComponent, selectors: [["app-reservation-list"]], decls: 32, vars: 36, consts: [["goToUrl", "/reservations/create", 3, "title", "goToLabel"], ["id", "sort-reservations"], [1, "material-icons"], [3, "ngModel", "ngModelChange"], ["value", "", "hidden", ""], ["value", "asc-date"], ["value", "desc-date"], ["value", "asc-contactNameSortable"], ["value", "desc-contactNameSortable"], ["value", "desc-ranking"], [3, "reservation", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["previousLabel", "", "nextLabel", "", 1, "app-pagination", 3, "pageChange"], [3, "reservation"]], template: function ReservationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ReservationListComponent_Template_select_ngModelChange_6_listener($event) { return ctx.sortReservations($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ReservationListComponent_app_reservation_item_27_Template, 1, 1, "app-reservation-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ReservationListComponent_p_30_Template, 3, 3, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "pagination-controls", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ReservationListComponent_Template_pagination_controls_pageChange_31_listener($event) { return ctx.currentPage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 11, "reservation_list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("goToLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 13, "reservation_create"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.sortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 15, "sort_by"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 17, "sort_by_date_ascending"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 19, "sort_by_date_descending"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 21, "sort_by_alphabetic_ascending"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 23, "sort_by_alphabetic_descending"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 25, "sort_by_ranking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](28, 27, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](29, 30, ctx.reservations, ctx.sortDirection, ctx.sortField), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c0, ctx.currentPage)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reservations.length == 0);
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationControlsComponent, _reservation_item_reservation_item_component__WEBPACK_IMPORTED_MODULE_3__.ReservationItemComponent], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginatePipe, _helpers_sort_pipe__WEBPACK_IMPORTED_MODULE_4__.SortPipe], styles: ["#sort-reservations[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{\r\n    padding: 5px 0 5px 24px;\r\n}\r\n#sort-reservations[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    padding-top: 4px;\r\n    padding-left: 2px;\r\n    color: gray;\r\n}\r\n\r\n.app-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n    background: rgb(173, 168, 168);\r\n    border-radius: 4px;\r\n}\r\n.app-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n    background: rgb(88, 83, 83);\r\n}\r\n.app-pagination[_ngcontent-%COMP%]{\r\n    margin-top: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FBQ1Y7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUVBLGFBQWE7QUFDYjtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InJlc2VydmF0aW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qU29ydGluZyovXHJcbiNzb3J0LXJlc2VydmF0aW9ucz5zZWxlY3R7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMjRweDtcclxufVxyXG4jc29ydC1yZXNlcnZhdGlvbnMgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi8qUGFnaW5hdGlvbiovXHJcbi5hcHAtcGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNzMsIDE2OCwgMTY4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXBwLXBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODgsIDgzLCA4Myk7XHJcbn1cclxuLmFwcC1wYWdpbmF0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 7408:
/*!*****************************************************************!*\
  !*** ./src/app/components/text-editor/text-editor.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEditorComponent": () => (/* binding */ TextEditorComponent)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ 5022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);




const _c0 = ["objRTE"];
class TextEditorComponent {
    constructor() { }
    ngOnInit() {
    }
}
TextEditorComponent.ɵfac = function TextEditorComponent_Factory(t) { return new (t || TextEditorComponent)(); };
TextEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextEditorComponent, selectors: [["app-text-editor"]], viewQuery: function TextEditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rteObj = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_1__.ToolbarService, _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_1__.LinkService, _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_1__.ImageService, _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_1__.HtmlEditorService, _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_1__.QuickToolbarService])], decls: 2, vars: 0, consts: [["id", "objRTE"], ["objRTE", ""]], template: function TextEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ejs-richtexteditor", 0, 1);
    } }, directives: [_syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_1__.RichTextEditorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWVkaXRvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 763:
/*!**************************************************!*\
  !*** ./src/app/helpers/date-translation.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrenchDatePipe": () => (/* binding */ FrenchDatePipe)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco */ 29);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


var Days;
(function (Days) {
    Days[Days["monday"] = 0] = "monday";
    Days[Days["tuesday"] = 1] = "tuesday";
    Days[Days["wednesday"] = 2] = "wednesday";
    Days[Days["thursday"] = 3] = "thursday";
    Days[Days["friday"] = 4] = "friday";
    Days[Days["saturday"] = 5] = "saturday";
    Days[Days["sunday"] = 6] = "sunday";
})(Days || (Days = {}));
var Months;
(function (Months) {
    Months[Months["january"] = 0] = "january";
    Months[Months["february"] = 1] = "february";
    Months[Months["mars"] = 2] = "mars";
    Months[Months["april"] = 3] = "april";
    Months[Months["may"] = 4] = "may";
    Months[Months["june"] = 5] = "june";
    Months[Months["july"] = 6] = "july";
    Months[Months["august"] = 7] = "august";
    Months[Months["september"] = 8] = "september";
    Months[Months["october"] = 9] = "october";
    Months[Months["november"] = 10] = "november";
    Months[Months["december"] = 11] = "december";
})(Months || (Months = {}));
class FrenchDatePipe {
    constructor() { }
    transform(dateString, lang) {
        const date = new Date(dateString);
        const dayOfMonth = date.getDate();
        const nameOfDay = Days[date.getDay()];
        const nameOfMonth = Months[date.getMonth()];
        const year = date.getFullYear();
        const result = (0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__.translate)(nameOfDay)
            + ' ' +
            (0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__.translate)(nameOfMonth)
            + ' ' +
            dayOfMonth
            + ' ' +
            (0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__.translate)('at')
            + ' ' + year;
        return result;
    }
}
FrenchDatePipe.ɵfac = function FrenchDatePipe_Factory(t) { return new (t || FrenchDatePipe)(); };
FrenchDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dateTranslated", type: FrenchDatePipe, pure: true });


/***/ }),

/***/ 2186:
/*!**************************************!*\
  !*** ./src/app/helpers/sort.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortPipe": () => (/* binding */ SortPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class SortPipe {
    transform(value, sortOrder = 'asc', sortKey) {
        sortOrder = sortOrder && sortOrder.toLowerCase();
        if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc'))
            return value;
        let numberArray = [];
        let stringArray = [];
        if (!sortKey) {
            numberArray = value.filter(item => typeof item === 'number').sort();
            stringArray = value.filter(item => typeof item === 'string').sort();
        }
        else {
            numberArray = value.filter(item => typeof item[sortKey] === 'number').sort((a, b) => a[sortKey] - b[sortKey]);
            stringArray = value
                .filter(item => typeof item[sortKey] === 'string')
                .sort((a, b) => {
                if (a[sortKey] < b[sortKey])
                    return -1;
                else if (a[sortKey] > b[sortKey])
                    return 1;
                else
                    return 0;
            });
        }
        const sorted = numberArray.concat(stringArray);
        return sortOrder === 'asc' ? sorted : sorted.reverse();
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: SortPipe, pure: true });
SortPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SortPipe, factory: SortPipe.ɵfac });


/***/ }),

/***/ 2717:
/*!**************************************************!*\
  !*** ./src/app/services/contact-type.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactTypeService": () => (/* binding */ ContactTypeService)
/* harmony export */ });
/* harmony import */ var variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! variables */ 4402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class ContactTypeService {
    constructor(http) {
        this.http = http;
    }
    getContactTypes() {
        return this.http.get(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/contacttypes`);
    }
}
ContactTypeService.ɵfac = function ContactTypeService_Factory(t) { return new (t || ContactTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ContactTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactTypeService, factory: ContactTypeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2319:
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! variables */ 4402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class ContactService {
    constructor(http) {
        this.http = http;
    }
    getContacts() {
        return this.http.get(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/contacts`);
    }
    getContactById(id) {
        return this.http.get(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/contacts/${id}`);
    }
    getContactByName(name) {
        return this.http.post(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/contacts/getbyname`, name);
    }
    addContact(contact) {
        return this.http.post(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/contacts`, contact);
    }
    updateContact(contact) {
        return this.http.put(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/contacts/${contact.id}`, contact);
    }
    deleteContact(id) {
        return this.http.delete(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/contacts/${id}`);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ContactService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7332:
/*!*************************************************!*\
  !*** ./src/app/services/reservation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationService": () => (/* binding */ ReservationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! variables */ 4402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json',
    }),
};
class ReservationService {
    constructor(http) {
        this.http = http;
    }
    getReservations() {
        return this.http.get(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/reservations`);
    }
    getReservationById(id) {
        return this.http.get(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/reservations/${id}`);
    }
    addReservation(reservation) {
        return this.http.post(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/reservations`, reservation, httpOptions);
    }
    updateReservation(reservation) {
        return this.http.put(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/reservations/${reservation.id}`, reservation, httpOptions);
    }
    rateReservation(reservation) {
        return this.http.post(`${variables__WEBPACK_IMPORTED_MODULE_0__.API_URL}/reservations/rate`, reservation, httpOptions);
    }
}
ReservationService.ɵfac = function ReservationService_Factory(t) { return new (t || ReservationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ReservationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReservationService, factory: ReservationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4274:
/*!******************************************!*\
  !*** ./src/app/transloco-root.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslocoHttpLoader": () => (/* binding */ TranslocoHttpLoader),
/* harmony export */   "TranslocoRootModule": () => (/* binding */ TranslocoRootModule)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 29);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);




class TranslocoHttpLoader {
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        return this.http.get(`/dist/assets/i18n/${lang}.json`);
    }
}
TranslocoHttpLoader.ɵfac = function TranslocoHttpLoader_Factory(t) { return new (t || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TranslocoHttpLoader.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TranslocoHttpLoader, factory: TranslocoHttpLoader.ɵfac, providedIn: 'root' });
class TranslocoRootModule {
}
TranslocoRootModule.ɵfac = function TranslocoRootModule_Factory(t) { return new (t || TranslocoRootModule)(); };
TranslocoRootModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TranslocoRootModule });
TranslocoRootModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TRANSLOCO_CONFIG,
            useValue: (0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.translocoConfig)({
                availableLangs: ['en', 'es'],
                defaultLang: 'en',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production,
            })
        },
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
    ], imports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TranslocoRootModule, { exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule] }); })();


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 4402:
/*!**********************!*\
  !*** ./variables.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL)
/* harmony export */ });
let apiURL = "/api";
//Uncomment line bellow for using json-server's mock API
//apiURL = "http://localhost:5000";
const API_URL = apiURL;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map