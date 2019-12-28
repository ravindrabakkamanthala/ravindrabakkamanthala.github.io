(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\" style=\"width:100%;height:100%\">\r\n  <br />\r\n  <br />\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <mat-card class=\"example-card\">\r\n        <img mat-card-image src=\"/assets/myphoto.PNG\" />\r\n        <header>\r\n          <h3 class=\"header-text\"></h3>\r\n        </header>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"introduction\">\r\n        <h1>Hello,</h1>\r\n        <h2 class=\"sub-header\">I'm Ravindra. A Full Stack Developer.</h2>\r\n        <p><b>My Motto: Research, Design and Develop</b></p>\r\n      </div>\r\n      <br />\r\n      <br />\r\n      <div class=\"sub-header\">\r\n        <p *ngFor=\"let data of aboutdata\">\r\n          {{data}}\r\n        </p>\r\n        <p>\r\n          <b>My Goal:</b>\r\n          Make technology more accessible.\r\n          I believe technology can be a game changer if it is accessible to all,\r\n          and can help solve some of the deep-rooted problems we are facing.\r\n          I believe I am in a position to make difference in this area, and I intend to capitalize on it.\r\n        </p>\r\n        <p><b>My Principles:</b> \"Think Big\", \"Invent and Simplify\" and \"Be a Constant Learner\".</p>\r\n        <p>You can reach me @\"<b>ravindrab240@gmail.com</b>\"</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experiences/experiences.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experiences/experiences.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\" style=\"width:100%;height:100%\">\r\n  <br />\r\n  <br />\r\n  <br />\r\n  <h3>Professional Experience</h3>\r\n  <div class=\"timeline\" *ngFor=\"let data of experiencedatas\">\r\n    <div class=\"tcontainer {{data.align}}\">\r\n      <div class=\"content\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                {{data.companyname}}\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                {{data.date}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div>\r\n              <p *ngFor=\"let desc of data.description\">\r\n               {{desc}}\r\n              </p>\r\n              <p *ngIf=\"data.opensource != null\"><b>Open Source Wiki:</b><a href={{data.opensource}} target=\"_blank\">wiki link</a></p>\r\n              <p><b>Responsibilities:</b></p>\r\n              <div *ngFor=\"let jobr of data.responsibilites\">\r\n                <p>{{jobr}}</p>\r\n              </div>\r\n            </div>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer -->\r\n<footer class=\"page-footer font-small black darken-3\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 py-3\">\r\n        <div class=\"mb-5 flex-center\">\r\n          <!--Linkedin -->\r\n          <a class=\"li-ic\" href=\"https://www.linkedin.com/in/ravindrabakkamanthala/\" target=\"_blank\">\r\n            <i class=\"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\r\n          </a>\r\n          <!--github-->\r\n          <a class=\"ins-ic\" href=\"https://github.com/ravindrabakkamanthala\" target=\"_blank\">\r\n            <i class=\"fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\r\n          </a>\r\n          <span><a href=\"/assets/RavindraB_Resume.pdf\" target=\"_blank\" mat-raised-button color=\"primary\">Resume</a></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-copyright text-center py-3\">\r\n    © 2020 Copyright:\r\n    <a href=\"https://ravindrabakkamanthala.github.io\">Ravindra Bakkamanthala</a>\r\n  </div>\r\n</footer>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Navbar -->\r\n<nav class=\"mb-1 navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand tfont\" [routerLink]=\"'/about'\">Ravindra Bakkamanthala</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" data-target=\"#navbarSupportedContent-333\"\r\n          aria-controls=\"navbarSupportedContent-333\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  \r\n  <div [ngbCollapse]=\"isNavbarCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-333\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"  [routerLink]=\"'/about'\">\r\n          About\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" [routerLink]=\"'/skills'\">Skills</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" [routerLink]=\"'/experience'\">Experience</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" [routerLink]=\"'/projects'\">Projects</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto nav-flex-icons\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-effect waves-light\" href=\"https://github.com/ravindrabakkamanthala\" target=\"_blank\">\r\n          <i class=\"fab fa-github\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-effect waves-light\" href=\"https://www.linkedin.com/in/ravindrabakkamanthala/\" target=\"_blank\">\r\n          <i class=\"fab fa-linkedin\"></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<!--/.Navbar -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\" >\r\n  <br />\r\n  <br />\r\n  <br />\r\n  <mat-grid-list [cols]=\"colstotal\" rowHeight=\"100px\" (window:resize)=\"onResize($event)\">\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"6\" *ngFor=\"let data of projectsdata\">\r\n      <mat-card class=\"example-card\" style=\"width:100%; height:100%\">\r\n        <mat-card-header>\r\n          <mat-card-title>{{data.name}}</mat-card-title>\r\n          <mat-card-subtitle>{{data.description}}</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image style=\"height:300px\" src={{data.image}}>\r\n        <mat-card-content>\r\n          <p>\r\n            {{data.content}}\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <a href={{data.githublink}} target=\"_blank\" mat-button>Github</a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"\" style=\"width:100%;height:100%\">\r\n  <br />\r\n  <br />\r\n  <br />\r\n  <h3 align=\"center\" class=\"notefont\"><b>Note:</b> All Skills are rated by score 10.</h3>\r\n  <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"100px\" (window:resize)=\"onResize($event)\">\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"4\">\r\n      <mat-card style=\"width:100%; height:100%\">\r\n        <mat-card-title>Languages:</mat-card-title>\r\n        <div id=\"languageSkillsDiv\" style=\"width: 100%; height: 300px\"></div>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"4\">\r\n      <mat-card style=\"width:100%; height:100%\">\r\n        <mat-card-title>Scripting Languages:</mat-card-title>\r\n        <div id=\"scriptingLanguageSkillsDiv\" style=\"width: 100%; height: 300px\"></div>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"4\">\r\n      <mat-card style=\"width:100%; height:100%\">\r\n        <mat-card-title>Databases:</mat-card-title>\r\n        <div id=\"databaseSkillsDiv\" style=\"width: 100%; height: 300px\"></div>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"4\">\r\n      <mat-card style=\"width:100%; height:100%\">\r\n        <mat-card-title>Frameworks:</mat-card-title>\r\n        <div id=\"frameworkSkillsDiv\" style=\"width: 100%; height: 300px\"></div>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"colspoint == 0 ? 2 : 1\" [rowspan]=\"4\">\r\n      <mat-card style=\"width:100%; height:100%\">\r\n        <mat-card-title>Technologies:</mat-card-title>\r\n        <div id=\"technologySkillsDiv\" style=\"width: 100%; height: 300px\"></div>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"colspoint == 0 ? 2 : 1\" [rowspan]=\"4\">\r\n      <mat-card style=\"width:100%; height:100%\">\r\n        <mat-card-title>Servers/Version Control/Testing Frameworks:</mat-card-title>\r\n        <div id=\"serverAndVersionControlSkillsDiv\" style=\"width: 100%; height: 300px\"></div>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"4\">\r\n      <mat-card style=\"width:100%; height:100%\">\r\n        <mat-card-title>Cloud Technologies:</mat-card-title>\r\n        <div id=\"cloudTechnologySkillsDiv\" style=\"width: 100%; height: 300px\"></div>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"colspoint == 0 ? 3 : 1\" [rowspan]=\"4\">\r\n      <mat-card style=\"width:100%; height:100%\">\r\n        <mat-card-title>Tools:</mat-card-title>\r\n        <div id=\"toolsSkillsDiv\" style=\"width: 100%; height: 300px\"></div>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".introduction {\r\n  text-align: center;\r\n}\r\n.sub-header {\r\n  font-size: 1.3rem;\r\n  font-weight: lighter;\r\n  color: #505050;\r\n}\r\n* {\r\n  font-family: Helvetica, sans-serif, Arial;\r\n}\r\n.example-card {\r\n  max-width: 400px;\r\n  margin-top: 30px;\r\n  margin-left:20px;\r\n  margin-right:20px;\r\n}\r\n#header-text {\r\n  -webkit-animation-duration: 4s;\r\n  -webkit-animation-timing-function: linear;\r\n  -webkit-animation-name: rotate;\r\n  -webkit-animation-iteration-count: infinite;\r\n  -moz-animation-duration: 4s;\r\n  -moz-animation-timing-function: linear;\r\n  -moz-animation-name: rotate;\r\n  -moz-animation-iteration-count: infinite;\r\n  -ms-animation-duration: 4s;\r\n  -ms-animation-timing-function: linear;\r\n  -ms-animation-name: rotate;\r\n  -ms-animation-iteration-count: infinite;\r\n  -o-animation-duration: 4s;\r\n  -o-animation-timing-function: linear;\r\n  -o-animation-name: rotate;\r\n  -o-animation-iteration-count: infinite;\r\n  animation-duration: 4s;\r\n  animation-timing-function: linear;\r\n  animation-name: rotate;\r\n  animation-iteration-count: infinite;\r\n}\r\n.header-text:after {\r\n  content: \"\";\r\n  -webkit-animation: spin 20s linear infinite;\r\n          animation: spin 20s linear infinite;\r\n}\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    content: \"I am Ravindra Bakkamanthala\";\r\n    color: aqua;\r\n  }\r\n\r\n  20% {\r\n    content: \"I am a Full Stack Developer\";\r\n    color: brown;\r\n  }\r\n\r\n  40% {\r\n    content: \"I am a Constant Learner\";\r\n    color: chartreuse;\r\n  }\r\n\r\n  60% {\r\n    content: \"I am a Smart Coder\";\r\n    color: chartreuse;\r\n  }\r\n\r\n  80% {\r\n    content: \"I am a Visionary Leader\";\r\n    color: darkorange;\r\n  }\r\n\r\n  100% {\r\n    content: \"I am a dedicated team player\";\r\n    color: darkorange;\r\n  }\r\n}\r\n@keyframes spin {\r\n  0% {\r\n    content: \"I am Ravindra Bakkamanthala\";\r\n    color: aqua;\r\n  }\r\n\r\n  20% {\r\n    content: \"I am a Full Stack Developer\";\r\n    color: brown;\r\n  }\r\n\r\n  40% {\r\n    content: \"I am a Constant Learner\";\r\n    color: chartreuse;\r\n  }\r\n\r\n  60% {\r\n    content: \"I am a Smart Coder\";\r\n    color: chartreuse;\r\n  }\r\n\r\n  80% {\r\n    content: \"I am a Visionary Leader\";\r\n    color: darkorange;\r\n  }\r\n\r\n  100% {\r\n    content: \"I am a dedicated team player\";\r\n    color: darkorange;\r\n  }\r\n}\r\n.mat-grid-tile {\r\n  position:relative;\r\n}\r\n.row {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.block {\r\n  width: 100px;\r\n  float: left;\r\n}\r\nb {\r\n  font-weight:bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHlDQUF5QztFQUN6Qyw4QkFBOEI7RUFDOUIsMkNBQTJDO0VBQzNDLDJCQUEyQjtFQUMzQixzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLDBCQUEwQjtFQUMxQix1Q0FBdUM7RUFDdkMseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsV0FBVztFQUNYLDJDQUFtQztVQUFuQyxtQ0FBbUM7QUFDckM7QUFFQTtFQUNFO0lBQ0Usc0NBQXNDO0lBQ3RDLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNDQUFzQztJQUN0QyxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtDQUFrQztJQUNsQyxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1Q0FBdUM7SUFDdkMsaUJBQWlCO0VBQ25CO0FBQ0Y7QUE5QkE7RUFDRTtJQUNFLHNDQUFzQztJQUN0QyxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQ0FBc0M7SUFDdEMsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBSUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJvZHVjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdWItaGVhZGVyIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBjb2xvcjogIzUwNTA1MDtcclxufVxyXG4qIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBBcmlhbDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjIwcHg7XHJcbn1cclxuXHJcbiNoZWFkZXItdGV4dCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAtbW96LWFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XHJcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb24tbmFtZTogcm90YXRlO1xyXG4gIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtby1hbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG4gIC1vLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAtby1hbmltYXRpb24tbmFtZTogcm90YXRlO1xyXG4gIC1vLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuLmhlYWRlci10ZXh0OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAyMHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIGNvbnRlbnQ6IFwiSSBhbSBSYXZpbmRyYSBCYWtrYW1hbnRoYWxhXCI7XHJcbiAgICBjb2xvcjogYXF1YTtcclxuICB9XHJcblxyXG4gIDIwJSB7XHJcbiAgICBjb250ZW50OiBcIkkgYW0gYSBGdWxsIFN0YWNrIERldmVsb3BlclwiO1xyXG4gICAgY29sb3I6IGJyb3duO1xyXG4gIH1cclxuXHJcbiAgNDAlIHtcclxuICAgIGNvbnRlbnQ6IFwiSSBhbSBhIENvbnN0YW50IExlYXJuZXJcIjtcclxuICAgIGNvbG9yOiBjaGFydHJldXNlO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIGNvbnRlbnQ6IFwiSSBhbSBhIFNtYXJ0IENvZGVyXCI7XHJcbiAgICBjb2xvcjogY2hhcnRyZXVzZTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICBjb250ZW50OiBcIkkgYW0gYSBWaXNpb25hcnkgTGVhZGVyXCI7XHJcbiAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgY29udGVudDogXCJJIGFtIGEgZGVkaWNhdGVkIHRlYW0gcGxheWVyXCI7XHJcbiAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtZ3JpZC10aWxlIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5cclxuXHJcbmIge1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(appService) {
        var _this = this;
        appService.getAboutData().subscribe(function (data) {
            _this.aboutdata = data;
        });
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    };
    AboutComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/experiences/experiences.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");







var routes = [
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: "skills", component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"] },
    { path: "experience", component: _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__["ExperiencesComponent"] },
    { path: "projects", component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: "", component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myprofile';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/experiences/experiences.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_12__["ExperiencesComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_14__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getProjectData = function () {
        return this.http.get("/assets/projectsdata.json");
    };
    AppService.prototype.getExperienceData = function () {
        return this.http.get("/assets/experiencedata.json");
    };
    AppService.prototype.getAboutData = function () {
        return this.http.get("/assets/aboutdata.json");
    };
    AppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/experiences/experiences.component.css":
/*!*******************************************************!*\
  !*** ./src/app/experiences/experiences.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  font-family: Helvetica, sans-serif, Arial;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #474e5d;\r\n  font-family: Helvetica, sans-serif;\r\n}\r\n\r\n/* The actual timeline (the vertical ruler) */\r\n\r\n.timeline {\r\n  position: relative;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* The actual timeline (the vertical ruler) */\r\n\r\n.timeline::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    background-color: white;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -3px;\r\n  }\r\n\r\n/* Container around content */\r\n\r\n.tcontainer {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n}\r\n\r\n/* The circles on the timeline */\r\n\r\n.tcontainer::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 25px;\r\n  height: 25px;\r\n  right: -17px;\r\n  background-color: white;\r\n  border: 4px solid #FF9F55;\r\n  top: 15px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n\r\n/* Place the container to the left */\r\n\r\n.left {\r\n  left: 0;\r\n}\r\n\r\n/* Place the container to the right */\r\n\r\n.right {\r\n  left: 50%;\r\n}\r\n\r\n/* Add arrows to the left container (pointing right) */\r\n\r\n.left::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  right: 30px;\r\n  border: medium solid white;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent white;\r\n}\r\n\r\n/* Add arrows to the right container (pointing left) */\r\n\r\n.right::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  left: 30px;\r\n  border: medium solid white;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent white transparent transparent;\r\n}\r\n\r\n/* Fix the circle for containers on the right side */\r\n\r\n.right::after {\r\n  left: -16px;\r\n}\r\n\r\n/* The actual content */\r\n\r\n.content {\r\n  padding: 20px 30px;\r\n  background-color: white;\r\n  position: relative;\r\n  border-radius: 6px;\r\n}\r\n\r\n/* Media queries - Responsive timeline on screens less than 600px wide */\r\n\r\n@media screen and (max-width: 600px) {\r\n  /* Place the timelime to the left */\r\n  .timeline::after {\r\n    left: 31px;\r\n  }\r\n\r\n  /* Full-width containers */\r\n  .tcontainer {\r\n    width: 100%;\r\n    padding-left: 70px;\r\n    padding-right: 25px;\r\n  }\r\n\r\n    /* Make sure that all arrows are pointing leftwards */\r\n    .tcontainer::before {\r\n      left: 60px;\r\n      border: medium solid white;\r\n      border-width: 10px 10px 10px 0;\r\n      border-color: transparent white transparent transparent;\r\n    }\r\n\r\n  /* Make sure all circles are at the same spot */\r\n  .left::after, .right::after {\r\n    left: 15px;\r\n  }\r\n\r\n  /* Make all right containers behave like the left ones */\r\n  .right {\r\n    left: 0%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZXMvZXhwZXJpZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQ0FBa0M7QUFDcEM7O0FBRUEsNkNBQTZDOztBQUM3QztFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFRSw2Q0FBNkM7O0FBQzdDO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixTQUFTO0lBQ1QsU0FBUztJQUNULGlCQUFpQjtFQUNuQjs7QUFFRiw2QkFBNkI7O0FBQzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVFLGdDQUFnQzs7QUFDbEM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUEsb0NBQW9DOztBQUNwQztFQUNFLE9BQU87QUFDVDs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0UsU0FBUztBQUNYOztBQUVBLHNEQUFzRDs7QUFDdEQ7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5Qix1REFBdUQ7QUFDekQ7O0FBRUEsc0RBQXNEOztBQUN0RDtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHVEQUF1RDtBQUN6RDs7QUFFQSxvREFBb0Q7O0FBQ3BEO0VBQ0UsV0FBVztBQUNiOztBQUVBLHVCQUF1Qjs7QUFDdkI7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUEsd0VBQXdFOztBQUN4RTtFQUNFLG1DQUFtQztFQUNuQztJQUNFLFVBQVU7RUFDWjs7RUFFQSwwQkFBMEI7RUFDMUI7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7SUFFRSxxREFBcUQ7SUFDckQ7TUFDRSxVQUFVO01BQ1YsMEJBQTBCO01BQzFCLDhCQUE4QjtNQUM5Qix1REFBdUQ7SUFDekQ7O0VBRUYsK0NBQStDO0VBQy9DO0lBQ0UsVUFBVTtFQUNaOztFQUVBLHdEQUF3RDtFQUN4RDtJQUNFLFFBQVE7RUFDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZXMvZXhwZXJpZW5jZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIEFyaWFsO1xyXG59XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLnRpbWVsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbiAgLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4gIC50aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcclxuICB9XHJcblxyXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cclxuLnRjb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4gIC8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xyXG4udGNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgcmlnaHQ6IC0xN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNGRjlGNTU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcbi5sZWZ0IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSByaWdodCAqL1xyXG4ucmlnaHQge1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIGFycm93cyB0byB0aGUgbGVmdCBjb250YWluZXIgKHBvaW50aW5nIHJpZ2h0KSAqL1xyXG4ubGVmdDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjJweDtcclxuICB3aWR0aDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlO1xyXG59XHJcblxyXG4vKiBBZGQgYXJyb3dzIHRvIHRoZSByaWdodCBjb250YWluZXIgKHBvaW50aW5nIGxlZnQpICovXHJcbi5yaWdodDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjJweDtcclxuICB3aWR0aDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgYm9yZGVyOiBtZWRpdW0gc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIEZpeCB0aGUgY2lyY2xlIGZvciBjb250YWluZXJzIG9uIHRoZSByaWdodCBzaWRlICovXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gIGxlZnQ6IC0xNnB4O1xyXG59XHJcblxyXG4vKiBUaGUgYWN0dWFsIGNvbnRlbnQgKi9cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4vKiBNZWRpYSBxdWVyaWVzIC0gUmVzcG9uc2l2ZSB0aW1lbGluZSBvbiBzY3JlZW5zIGxlc3MgdGhhbiA2MDBweCB3aWRlICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbiAgLnRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG4gIH1cclxuXHJcbiAgLyogRnVsbC13aWR0aCBjb250YWluZXJzICovXHJcbiAgLnRjb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCBhbGwgYXJyb3dzIGFyZSBwb2ludGluZyBsZWZ0d2FyZHMgKi9cclxuICAgIC50Y29udGFpbmVyOjpiZWZvcmUge1xyXG4gICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAvKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuICAubGVmdDo6YWZ0ZXIsIC5yaWdodDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIC8qIE1ha2UgYWxsIHJpZ2h0IGNvbnRhaW5lcnMgYmVoYXZlIGxpa2UgdGhlIGxlZnQgb25lcyAqL1xyXG4gIC5yaWdodCB7XHJcbiAgICBsZWZ0OiAwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/experiences/experiences.component.ts":
/*!******************************************************!*\
  !*** ./src/app/experiences/experiences.component.ts ***!
  \******************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



var ExperiencesComponent = /** @class */ (function () {
    function ExperiencesComponent(appService) {
        var _this = this;
        appService.getExperienceData().subscribe(function (data) {
            _this.experiencedatas = data;
        });
    }
    ExperiencesComponent.prototype.ngOnInit = function () {
    };
    ExperiencesComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    ExperiencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experiences',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experiences.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experiences/experiences.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experiences.component.css */ "./src/app/experiences/experiences.component.css")).default]
        })
    ], ExperiencesComponent);
    return ExperiencesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-spacer {\r\n  flex-grow: 1;\r\n}\r\n\r\n.tfont {\r\n  font-family: \"Source Sans Pro\",sans-serif;\r\n  font-size: 20px;\r\n  -webkit-text-decoration: double;\r\n          text-decoration: double;\r\n  cursor: pointer;\r\n}\r\n\r\n.tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 140px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 150%;\r\n    left: 50%;\r\n    margin-left: -75px;\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n }\r\n\r\n.tooltip .tooltiptext::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      top: 100%;\r\n      left: 50%;\r\n      margin-left: -5px;\r\n      border-width: 5px;\r\n      border-style: solid;\r\n      border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3QjtDQUMzQjs7QUFFRDtNQUNNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFNBQVM7TUFDVCxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixzREFBc0Q7QUFDNUQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtc3BhY2VyIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi50Zm9udCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBkb3VibGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDE1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTc1cHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG4gfVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjNTU1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isNavbarCollapsed = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n  max-width: 400px;\r\n  margin-top: 50px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n.mat-card {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubWF0LWNhcmQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(appService) {
        var _this = this;
        this.colstotal = 0;
        appService.getProjectData().subscribe(function (data) {
            _this.projectsdata = data;
        });
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.colstotal = (window.innerWidth <= 400) ? 1 : 3;
    };
    ProjectsComponent.prototype.onResize = function (event) {
        this.colstotal = (event.target.innerWidth <= 400) ? 1 : 3;
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")).default]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card {\r\n  border-color: aqua;\r\n  border-bottom:solid;\r\n  border-left:solid;\r\n}\r\n\r\n.mat-card-title {\r\n  color: darkgreen;\r\n  font-family: \"proxima-nova\";\r\n  font-size: 18px;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  letter-spacing: 3px;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  line-height: 2em;\r\n}\r\n\r\n.notefont {\r\n  font-family: \"proxima-nova\";\r\n  font-size: 18px;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  letter-spacing: 3px;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  line-height: 2em;\r\n  color: brown;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICBib3JkZXItY29sb3I6IGFxdWE7XHJcbiAgYm9yZGVyLWJvdHRvbTpzb2xpZDtcclxuICBib3JkZXItbGVmdDpzb2xpZDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICBjb2xvcjogZGFya2dyZWVuO1xyXG4gIGZvbnQtZmFtaWx5OiBcInByb3hpbWEtbm92YVwiO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07XHJcbn1cclxuXHJcbi5ub3RlZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICBjb2xvcjogYnJvd247XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");





_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(zone) {
        this.zone = zone;
        this.colspoint = 0;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
        this.colspoint = (window.innerWidth <= 400) ? 1 : 0;
    };
    SkillsComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
    };
    SkillsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.languageSkills();
            _this.toolsSkills();
            _this.scriptingLanguageSkills();
            _this.frameworkSkills();
            _this.databaseSkills();
            _this.technologySkills();
            _this.serverAndVersionControlSkills();
            _this.cloudTechnologySkills();
        });
    };
    SkillsComponent.prototype.cloudTechnologySkills = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("cloudTechnologySkillsDiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart"]);
        chart.hiddenState.properties.opacity = 0;
        chart.data = [
            { technology: " AWS EC2", rate: 6 },
            { technology: "S3", rate: 6 },
            { technology: "Dynamo DB", rate: 5 }
        ];
        chart.radius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](70);
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](40);
        chart.startAngle = 180;
        chart.endAngle = 360;
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]());
        series.dataFields.value = "rate";
        series.dataFields.category = "technology";
        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        series.alignLabels = false;
        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
    };
    SkillsComponent.prototype.serverAndVersionControlSkills = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("serverAndVersionControlSkillsDiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["TreeMap"]);
        chart.hiddenState.properties.opacity = 0;
        chart.data = [{
                name: "Web / Application Servers",
                children: [{ name: "Tomcat", value: 9 }, { name: "Web Sphere", value: 6 }, { name: "JBOSS", value: 6 }]
            },
            {
                name: "Version Control",
                children: [{ name: "GIT", value: 8 }, { name: "SVN", value: 6 }]
            },
            {
                name: "Testing Frameworks",
                children: [{ name: "JUnit", value: 8 }, { name: "Mockito", value: 8 }]
            }
        ];
        chart.colors.step = 2;
        // define data fields
        chart.dataFields.value = "value";
        chart.dataFields.name = "name";
        chart.dataFields.children = "children";
        chart.zoomable = false;
        var bgColor = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["InterfaceColorSet"]().getFor("background");
        // level 0 series template
        var level0SeriesTemplate = chart.seriesTemplates.create("0");
        var level0ColumnTemplate = level0SeriesTemplate.columns.template;
        level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
        level0ColumnTemplate.fillOpacity = 0;
        level0ColumnTemplate.strokeWidth = 4;
        level0ColumnTemplate.strokeOpacity = 0;
        // level 1 series template
        var level1SeriesTemplate = chart.seriesTemplates.create("1");
        var level1ColumnTemplate = level1SeriesTemplate.columns.template;
        level1SeriesTemplate.tooltip.animationDuration = 0;
        level1SeriesTemplate.strokeOpacity = 1;
        level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
        level1ColumnTemplate.fillOpacity = 1;
        level1ColumnTemplate.strokeWidth = 4;
        level1ColumnTemplate.stroke = bgColor;
        var bullet1 = level1SeriesTemplate.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        bullet1.locationY = 0.5;
        bullet1.locationX = 0.5;
        bullet1.label.text = "{name}";
        bullet1.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#ffffff");
        chart.maxLevels = 2;
    };
    SkillsComponent.prototype.technologySkills = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("technologySkillsDiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart3D"]);
        // Add data
        chart.data = [
            { "technology": "Servlets", "rate": 8 },
            { "technology": "JSP", "rate": 6 },
            { "technology": "JSF", "rate": 5 },
            { "technology": "CSS", "rate": 7 },
            { "technology": "Web Services", "rate": 8 },
            { "technology": "Kafka", "rate": 7 },
            { "technology": "XACML", "rate": 8 },
            { "technology": "Drools", "rate": 6 },
            { "technology": "AEM", "rate": 6 }
        ];
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "technology";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.renderer.labels.template.hideOversized = false;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.tooltip.label.rotation = 270;
        categoryAxis.tooltip.label.horizontalCenter = "right";
        categoryAxis.tooltip.label.verticalCenter = "middle";
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.title.text = "Technology";
        valueAxis.title.fontWeight = "bold";
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries3D"]());
        series.dataFields.valueY = "rate";
        series.dataFields.categoryX = "technology";
        series.name = "Visits";
        series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;
        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        columnTemplate.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FFFFFF");
        columnTemplate.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        columnTemplate.adapter.add("stroke", function (stroke, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        chart.cursor.lineX.strokeOpacity = 0;
        chart.cursor.lineY.strokeOpacity = 0;
    };
    SkillsComponent.prototype.frameworkSkills = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("frameworkSkillsDiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart"]);
        // Add data
        chart.data = [
            { "technology": "Spring", "rate": 8 },
            { "technology": "Hibernate", "rate": 8 },
            { "technology": "Struts", "rate": 7 },
            { "technology": "Vaadin", "rate": 7 }
        ];
        // Set inner radius
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](50);
        // Add and configure Series
        var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]());
        pieSeries.dataFields.value = "rate";
        pieSeries.dataFields.category = "technology";
        pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
    };
    SkillsComponent.prototype.databaseSkills = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("databaseSkillsDiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"]();
        chart.data = [
            { "technology": "MySQL", "rate": 7 },
            { "technology": "PostgreSQL", "rate": 7 },
            { "technology": "H2", "rate": 7 },
            { "technology": "Maria DB", "rate": 7 },
            { "technology": "Mongo DB", "rate": 7 },
            { "technology": "Elastic Search", "rate": 6 }
        ];
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "technology";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.minWidth = 50;
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "rate";
        series.dataFields.categoryX = "technology";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;
        series.tooltip.pointerOrientation = "vertical";
        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;
        // on hover, make corner radiuses bigger
        var hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;
        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        // Cursor
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
    };
    SkillsComponent.prototype.toolsSkills = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("toolsSkillsDiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart3D"]);
        chart.paddingBottom = 30;
        chart.angle = 35;
        // Add data
        chart.data = [
            { "technology": "Eclipse", "rate": 10 },
            { "technology": "Intellij", "rate": 9 },
            { "technology": "Visual Studio", "rate": 9 },
            { "technology": "Maven", "rate": 8 },
            { "technology": "Ivy", "rate": 8 },
            { "technology": "Jenkins", "rate": 7 },
            { "technology": "Docker", "rate": 6 },
            { "technology": "Kubernetes", "rate": 6 },
            { "technology": "Jira", "rate": 8 },
            { "technology": "Rally", "rate": 8 },
            { "technology": "Bit Bucket", "rate": 8 },
            { "technology": "Sonar", "rate": 8 },
            { "technology": "Fortify", "rate": 5 },
            { "technology": "Confluence", "rate": 8 }
        ];
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "technology";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.inside = true;
        categoryAxis.renderer.grid.template.disabled = true;
        var labelTemplate = categoryAxis.renderer.labels.template;
        labelTemplate.rotation = -90;
        labelTemplate.horizontalCenter = "left";
        labelTemplate.verticalCenter = "middle";
        labelTemplate.dy = 10;
        labelTemplate.inside = false;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.grid.template.disabled = true;
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ConeSeries"]());
        series.dataFields.valueY = "rate";
        series.dataFields.categoryX = "technology";
        var columnTemplate = series.columns.template;
        columnTemplate.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        columnTemplate.adapter.add("stroke", function (stroke, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        this.chart = chart;
    };
    SkillsComponent.prototype.scriptingLanguageSkills = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("scriptingLanguageSkillsDiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart"]);
        // Add data
        chart.data = [
            { "technology": "Angular", "rate": 8 },
            { "technology": "Angular JS", "rate": 8 },
            { "technology": "Ajax", "rate": 8 },
            { "technology": "Javascript", "rate": 8 },
            { "technology": "HTML", "rate": 8 }
        ];
        // Add and configure Series
        var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]());
        pieSeries.dataFields.value = "rate";
        pieSeries.dataFields.category = "technology";
        pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
    };
    SkillsComponent.prototype.languageSkills = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("languageSkillsDiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart3D"]);
        chart.hiddenState.properties.opacity = 0;
        chart.data = [
            { "technology": "Java", "rate": 8 },
            { "technology": "Pyhton", "rate": 5 },
            { "technology": "C", "rate": 5 },
        ];
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](40);
        chart.depth = 120;
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries3D"]());
        series.dataFields.value = "rate";
        series.dataFields.depthValue = "rate";
        series.dataFields.category = "technology";
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
    };
    SkillsComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart) {
                _this.chart.dispose();
            }
        });
    };
    SkillsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")).default]
        })
    ], SkillsComponent);
    return SkillsComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rb7147\github-projects\angularprojects\myprofile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map