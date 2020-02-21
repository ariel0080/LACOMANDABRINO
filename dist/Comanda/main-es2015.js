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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/admin-productos/admin-productos.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/admin-productos/admin-productos.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row page-title\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6\">\n            <button class=\"btn btn-success full-width\" data-toggle=\"modal\" data-target=\"#productModal\">Agregar\n                Producto</button>\n        </div>\n\n\n       \n    </div>\n\n    <hr>\n    <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Producto</th>\n                    <th scope=\"col\">Precio</th>\n                    <th scope=\"col\">Imagen</th>\n                    <th scope=\"col\">Habilitar/Desabilitar</th>\n                    <th scope=\"col\">Editar</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"products\">\n                 <tr class=\"product\" *ngFor=\"let prod of showingProducts | async\">\n                    <td><label>{{prod.name}}</label></td>\n                    <td>${{prod.price}}</td>\n                    <td><img [src]=\"prod.image\" width=\"70px\" height=\"70px\">\n                    </td>\n\n                    <td><button class=\"btn btn-danger btn-lg\" *ngIf=\"prod.state != 'Deshabilitado'\"\n                            (click)=\"changeState(prod.codeID, prod.state)\">Deshabilitar</button>\n                        <button class=\"btn btn-success btn-lg\" *ngIf=\"prod.state == 'Deshabilitado'\"\n                            (click)=\"changeState(prod.codeID, prod.state)\">Habilitar</button>\n                    </td>\n                    <td>\n                        <button class=\"btn btn-warning btn-lg\" data-toggle=\"modal\" data-target=\"#productModal\"\n                            (click)=\"editarProducto(prod)\">Editar</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <hr>\n\n</div>\n\n<!-- Product modal -->\n<div class=\"modal fade\" id=\"productModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\" *ngIf=\"!this.haySeleccionado\">\n                            <h3 class=\"align-center\">Agregar Producto</h3>\n                        </div>\n                        <div class=\"col-8\" *ngIf=\"this.haySeleccionado\">\n                            <h3 class=\"align-center\">Editar Producto</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n\n                    <hr class=\"mar-top-1\">\n                    <form [formGroup]=\"productForm\" (ngSubmit)=\"SendProduct()\">\n\n\n                        <div class=\"row\" *ngIf=\"this.haySeleccionado\">\n                            <div class=\"col-5\"></div>\n                            <div class=\"col-2\">\n                                <img [src]=\"this.productoSeleccionado.image\" width=\"60px\" height=\"60px\">\n                            </div>\n                            <div class=\"col-5\"></div>\n                        </div>\n\n\n                        <div class=\"row\">\n                            <div class=\"col-1\"></div>\n                            <div class=\"col-10\">\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Nombre:</label>\n                                    </div>\n                                    <div class=\"col-12\">\n                                        <input formControlName=\"productName\"\n                                            class=\"form-control full-width align-center\" type=\"text\"\n                                            placeholder=\"Nombre del producto\" required>\n                                    </div>\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Precio:</label>\n                                    </div>\n                                    <div class=\"col-12\">\n                                        <input formControlName=\"productPrice\"\n                                            class=\"form-control full-width align-center\" type=\"text\"\n                                            placeholder=\"Precio del producto\" required>\n                                    </div>\n                                </div>\n\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Descripción:</label>\n                                    </div>\n                                    <div class=\"col-12\">\n                                        <input formControlName=\"productDescription\"\n                                            class=\"form-control full-width align-center\" type=\"text\"\n                                            placeholder=\"Descripción del producto\" required>\n                                    </div>\n                                </div>\n\n\n                                <div class=\"row middle-row\">\n                                    <!-- <fieldset class=\"scheduler-border\">\n                                        <legend class=\"scheduler-border\">Tipo de producto</legend> -->\n                                    <label class=\"mr-sm-2\">Tipo de producto</label>\n\n                                    <div class=\"input-group mb-3 col-12\">\n\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeComida\"\n                                                formControlName=\"typeComida\" value=\"comida\">\n                                            <label class=\"custom-control-label\" for=\"typeComida\">Comida</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeBebida\"\n                                                formControlName=\"typeBebida\">\n                                            <label class=\"custom-control-label\" for=\"typeBebida\">Bebida</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeAlcohol\"\n                                                formControlName=\"typeAlcohol\">\n                                            <label class=\"custom-control-label\" for=\"typeAlcohol\">Alcohol</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typePostre\"\n                                                formControlName=\"typePostre\">\n                                            <label class=\"custom-control-label\" for=\"typePostre\">Postre</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeCeliaco\"\n                                                formControlName=\"typeCeliaco\">\n                                            <label class=\"custom-control-label\" for=\"typeCeliaco\">Celiaco</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeVegano\"\n                                                formControlName=\"typeVegano\">\n                                            <label class=\"custom-control-label\" for=\"typeVegano\">Vegano</label>\n                                        </div>\n\n                                    </div>\n                                    <!-- </fieldset> -->\n                                    <!-- <input type=\"button\" (click)=\"traerFoodTypes()\"> -->\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\"\n                                        formControlName=\"productCook\" *ngIf=\"this.role == 'socio'\">\n                                        <!-- <option selected>Encargado</option> -->\n                                        <option value=\"cocinero\">Cocinero</option>\n                                        <option value=\"cervecero\">Cervecero</option>\n                                        <option value=\"bartender\">Bartender</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <h4 *ngIf=\"this.role != 'socio'\" >El producto será para un {{ this.role }}</h4>\n                                </div>\n\n                                <div class=\"row middle-row\">\n\n                                    <div class=\"btn btn-primary btn-sm float-left\">\n                                        <input type=\"file\" (change)=\"onFileChanged($event)\"\n                                            formControlName=\"productImage\" name=\"productImage\">\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"col-1\"></div>\n                        </div>\n\n\n\n                    </form>\n\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <div class=\"btn-group full-width\">\n                                <button class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"Cancel()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" *ngIf=\"!this.haySeleccionado\"\n                                    title=\"Agregar producto\" (click)=\"addProduct()\" data-dismiss=\"modal\"><i\n                                        class=\"fas fa-check\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" *ngIf=\"this.haySeleccionado\"\n                                    title=\"Actualizar producto\" (click)=\"updateProduct()\" data-dismiss=\"modal\"><i\n                                        class=\"fas fa-check\"></i></button>\n                            </div>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/food-card/food-card.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/food-card/food-card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"product.state !== 'Deshabilitado'\" class=\"card outside-shadow\">\n    <div class=\"card-body align-center\">\n        <div class=\"card-title\">{{product.name}}</div>\n        <img src=\"{{product.image}}\" class=\"img-shadow\" (click)=\"AddToOrder(product)\">\n        <div class=\"price\">\n            <div class=\"row\">\n                <div class=\"col-3\">\n                    <span class=\"ordered\" *ngIf=\"ordered\"><i class=\"fas fa-clipboard-check\"></i></span>\n                </div>\n                <div class=\"col-6\">\n                    ${{product.price}}.00\n                </div>\n                <div class=\"col-3\">\n                    <span class=\"quant\" *ngIf=\"quantity > 1\">x{{quantity}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/footer/footer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/footer/footer.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer footer-shadow mar-top-3\">\n    <div class=\"row no-side-margin\">\n        <div class=\"col-6 no-side-margin align-left\">\n            <!-- Trabajo práctico - Laboratorio IV -->\n        </div>\n        <div class=\"col-6 no-side-margin align-right\">\n            <!-- Iván Rojas \t&copy; -->\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/order-list/order-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/order-list/order-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <th scope=\"col\">ID</th>\n                <th scope=\"col\">Cliente</th>\n                <th scope=\"col\">Estado</th>\n                <th scope=\"col\">Mozo</th>\n                <th scope=\"col\">Foto</th>\n                <th *ngIf=\"solomozo\" scope=\"col\">Cancelar</th>\n                <th *ngIf=\"solomozo\" scope=\"col\">Aprobar</th>\n            </tr>\n        </thead>\n        <tbody *ngIf=\"orders\">\n            <tr class=\"order\" *ngFor=\"let or of orders | async\" (click)=\"SelectOrder(or)\">\n                \n                <td class=\"arial\">{{or.codeID}}</td>\n                <td>{{or.client.name}}</td>\n                <td>{{or.state}}</td>\n                <td>{{or.waiter.name}}</td>\n                <td><img [src]=\"or.image\" width=\"40\" height=\"40\"></td>\n                \n                <td><button  (click)=\"mozoCancelar(or)\" *ngIf=\"solomozo && (or.state === 'Verificar')\" class=\"btn-outline-danger btn-sm\">Cancelar</button></td>\n                <td><button  (click)=\"mozoAprueba(or)\"*ngIf=\"solomozo && (or.state === 'Verificar')\" class=\"btn-outline-info btn-sm\" >Aprobar</button></td>\n            \n            </tr>\n        \n        </tbody>\n    </table>\n    <div *ngIf=\"!orders\" class=\"align-center mar-top-1\">\n        <app-spinner></app-spinner>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/sidebar-option/sidebar-option.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/sidebar-option/sidebar-option.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button *ngIf=\"!logOut\" class=\"btn btn-outline-secondary full-width option\" [ngClass]=\"lastOne ? 'last' : ''\" routerLink=\"{{link}}\">{{name}}</button>\n<button *ngIf=\"logOut\" class=\"btn btn-outline-primary full-width option last\" (click)=\"LogOut()\">Salir</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/spinner/spinner.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/spinner/spinner.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/img/load.gif\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/table-card/table-card.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/table-card/table-card.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card outside-shadow\">\n    <div class=\"card-body align-center\">\n        <div class=\"card-title\">Mesa {{table.tableID}}</div>\n        <div class=\"row\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8 icon\" [ngSwitch]=\"table.state\">\n                <i class=\"fas fa-user-check green\" *ngSwitchCase=\"'Disponible'\"></i>\n                <i class=\"fas fa-user-clock orange\" *ngSwitchCase=\"'Cliente esperando pedido'\"></i>\n                <i class=\"fas fa-utensils orange\" *ngSwitchCase=\"'Cliente comiendo'\"></i>\n                <i class=\"fas fa-money-bill-wave orange\" *ngSwitchCase=\"'Cliente pagando'\"></i>\n                <i class=\"fas fa-window-close red\" *ngSwitchCase=\"'Cerrada'\"></i>\n            </div>\n            <div class=\"col-2\"></div>\n        </div>\n        <div class=\"row mar-top-half\">\n            <div class=\"col-12\">\n                {{table.state}}\n            </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <b>Cambiar estado</b>\n            </div>\n        </div>\n        <div class=\"row mar-top-1\">\n            <div class=\"col-12\">\n                <div class=\"btn-group\">\n                    <button class=\"btn btn-primary\" (click)=\"ChangeStatus(1)\"><i class=\"fas fa-user-check\"></i></button>\n                    <button class=\"btn btn-primary\" (click)=\"ChangeStatus(2)\"><i class=\"fas fa-user-clock\"></i></button>\n                    <button class=\"btn btn-primary\" (click)=\"ChangeStatus(3)\"><i class=\"fas fa-utensils\"></i></button>\n                    <button class=\"btn btn-primary\" (click)=\"ChangeStatus(4)\"><i class=\"fas fa-money-bill-wave\"></i></button>\n                    <button *ngIf=\"isAdmin\" class=\"btn btn-danger\" (click)=\"ChangeStatus(5)\"><i class=\"fas fa-window-close\"></i></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/work-order/work-order.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/work-order/work-order.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card outside-shadow\">\n    <div class=\"card-body align-center\">\n        <h5 class=\"card-title\">Pedido</h5>\n        <hr>\n        <div *ngIf=\"order\" class=\"order-body align-center\">\n\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Código:</b> {{order.codeID}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Cliente:</b> {{order.client.name}} {{order.client.lastname}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Mozo:</b> {{order.waiter.name}} {{order.waiter.lastname}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Está:</b> {{order.state}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Tiempo restante: </b> \n                    <span *ngIf=\"remainingTime\">{{remainingTime | timeleft}}</span>\n                    <span *ngIf=\"!remainingTime\">No tiene un tiempo asignado.</span>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Mesa:</b> {{order.tableID}}\n                </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <select class=\"form-control\" [ngModel]=\"selectedItem\" (ngModelChange)=\"SelectItem($event)\">\n                        <option [ngValue]=\"it\" *ngFor=\"let it of itemsRol\">{{it.name}}</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"row mar-top-1\" *ngIf=\"!selectedItem\">\n                <div class=\"col-12\">\n                    <label>No se seleccionó nada.</label>\n                </div>\n            </div>\n            <div class=\"item mar-top-1\" *ngIf=\"selectedItem\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <b>Es para un {{selectedItem.cook}}.</b>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <b>Estado:</b> {{selectedItem.state}}\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <b>Lo tiene:</b> \n                        <span *ngIf=\"selectedItem.worker\">\n                        {{selectedItem.worker.name}} {{selectedItem.worker.lastname}} \n                        </span>\n                        <span *ngIf=\"!selectedItem.worker\">\n                            Nadie por ahora.\n                        </span>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"row mar-top-1\" *ngIf=\"IsAvailableForMe()\">\n                    <div class=\"col-12\">\n                        <div class=\"btn-group\">\n                            <button [disabled]=\"!IsPending()\" class=\"btn btn-sm btn-info full-width\" data-toggle=\"modal\" data-target=\"#prodModal\">Comenzar a preparar</button>\n                            <button [disabled]=\"!IsCooking()\" (click)=\"ReadyToServe()\" class=\"btn btn-sm btn-success full-width\">Listo para servir</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!order\">\n            <div class=\"col-12\">\n                <label>Seleccione un pedido.</label>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"prodModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-3\"></div>\n                        <div class=\"col-6\">\n                            <h5>Empezar a preparar</h5>\n                        </div>\n                        <div class=\"col-3\"></div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\" *ngIf=\"order\">\n                            <b>Tiempo restante actual:</b> {{remainingTime | timeleft}}\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <div class=\"row middle-row\">\n                        <div class=\"col-1\"></div>\n                        <div class=\"col-10\">\n                            ¿Llegás a completarlo en este tiempo o necesitás agregar más?\n                        </div>\n                        <div class=\"col-1\"></div>\n                    </div>\n                    <div class=\"row middle-row\">\n                        <div class=\"col-6\">\n                            <input type=\"number\" class=\"form-control full-width form-control-sm\" [(ngModel)]=\"addedTime\" placeholder=\"Minutos\">\n                        </div>\n                        <div class=\"col-6\">\n                            <button class=\"btn btn-success full-width btn-sm\" (click)=\"BeginCook(true)\" data-dismiss=\"modal\">Agregar tiempo</button>\n                        </div>\n                    </div>\n                    <div class=\"or\">\n                        o\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <button class=\"btn btn-primary full-width btn-sm\" (click)=\"BeginCook(false)\" data-dismiss=\"modal\">El tiempo actual es suficiente</button>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/error/error.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/error/error.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Error</h2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/login/login.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/login/login.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row top-row\">\n    <div class=\"col-3\"></div>\n    <div class=\"col-6\">\n      <div class=\"card\">\n        <div class=\"card-body align-center\">\n          <h4 class=\"form-title\">Ingresar</h4>\n          <hr />\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <input\n              type=\"text\"\n              formControlName=\"email\"\n              class=\"form-control separate-top-input align-center\"\n              placeholder=\"Email\"\n              autofocus\n            />\n            <input\n              type=\"password\"\n              formControlName=\"password\"\n              class=\"form-control separate-top-input align-center\"\n              placeholder=\"Contraseña\"\n            />\n            <div class=\"row mar-top-2\">\n              <div class=\"col-2\"></div>\n              <div class=\"col-8 align-center\">\n                <ngx-recaptcha2\n                  formControlName=\"captcha\"\n                  #captchaElem\n                  [siteKey]=\"'6LfkNMgUAAAAAKL-SQOpiC8bI18fZFeW4U3cYniE'\"\n                  [useGlobalDomain]=\"false\"\n                >\n                </ngx-recaptcha2>\n\n                <!-- <ngx-recaptcha2  formControlName=\"captcha\" #captchaElem [siteKey]=\"'6Le9VcYUAAAAAK4z-Fj0YlhKfrNIc9eqvsNuMSsy'\" [useGlobalDomain]=\"false\"></ngx-recaptcha2> -->\n              </div>\n              <div class=\"col-2\"></div>\n            </div>\n            <button\n              *ngIf=\"!loading\"\n              [disabled]=\"!loginForm.valid\"\n              type=\"submit\"\n              class=\"btn btn-success full-width separate-top-input\"\n            >\n              Entrar\n            </button>\n            <div class=\"mar-top-1\">\n              <app-spinner *ngIf=\"loading\"></app-spinner>\n            </div>\n\n            <!-- hola -->\n            <div class=\"row mar-top-2\">\n              <div class=\"col-2\"></div>\n              <div class=\"col-12 align-center\">\n                <div class=\"btn-group-toggle\" data-toggle=\"buttons\">\n\t\t\t\t\t<label class=\"btn btn-sm btn-outline-info\">\n                    <input\n                      type=\"checkbox\"\n                      id=\"chkHorario\"\n                      formControlName=\"chkHorario\"\n                      unchecked\n                      autocomplete=\"off\"\n                    />FORZAR INGRESO\n                  </label>\n\n\t\t\t\t  <label class=\"btn btn-sm btn-outline-info\">\n                    <input\n                      type=\"checkbox\"\n                      id=\"chkLunes\"\n                      formControlName=\"chkLunes\"\n                      unchecked\n                      autocomplete=\"off\"\n                    />\n                    ESTAMOS CERRADOS\n                  </label>\n                </div>\n              </div>\n              <div class=\"col-2\"></div>\n            </div>\n\n            <!-- chau -->\n          </form>\n          <hr />\n          <button routerLink=\"/app/register\" class=\"btn btn-primary full-width\">\n            Registrarse\n          </button>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"col-3\"></div> -->\n  </div>\n  <div class=\"row middle-row\" [isProd]>\n    <div class=\"col-3\"></div>\n    <div class=\"col-6\">\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n        <button\n          class=\"btn btn-info\"\n          type=\"button\"\n          name=\"opcliente1\"\n          value=\"cliente1\"\n          (click)=\"ue('cliente1')\"\n        >\n          Cli1\n        </button>\n\n        <button\n          class=\"btn btn-info\"\n          type=\"button\"\n          name=\"opcliente2\"\n          value=\"cliente2\"\n          (click)=\"ue('cliente2')\"\n        >\n          Cli2\n        </button>\n\n        <button\n          class=\"btn btn-info\"\n          type=\"button\"\n          name=\"opmozo\"\n          value=\"mozo\"\n          (click)=\"ue('mozo')\"\n        >\n          Mozo\n        </button>\n\n        <button\n          class=\"btn btn-info\"\n          type=\"button\"\n          name=\"opbartender\"\n          value=\"bartender\"\n          (click)=\"ue('bartender')\"\n        >\n          Bartender\n        </button>\n\n        <button\n          class=\"btn btn-info\"\n          type=\"button\"\n          name=\"opcervecero\"\n          value=\"cervecero\"\n          (click)=\"ue('cervecero')\"\n        >\n          Cervecero\n        </button>\n\n        <button\n          class=\"btn btn-info\"\n          type=\"button\"\n          name=\"opcocinero\"\n          value=\"cocinero\"\n          (click)=\"ue('cocinero')\"\n        >\n          Cocinero\n        </button>\n\n        <button\n          class=\"btn btn-info\"\n          type=\"button\"\n          name=\"opsocio\"\n          value=\"socio\"\n          (click)=\"ue('socio')\"\n        >\n          Socio\n        </button>\n      </div>\n    </div>\n    <div class=\"col-3\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/main-general/main-general.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/main-general/main-general.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"bottom-shadow\">\n    <div class=\"row main-bar general-color\">\n        <div class=\"col-12 align-center no-padding\">\n            <h1 class=\"main-title no-side-margin\">La Comanda</h1>\n        </div>\n    </div>\n</nav> -->\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/profile/profile.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/profile/profile.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"user\">\n    <div class=\"row top-row\">\n        <div class=\"col-4 align-center\">\n            <img src=\"{{user.image}}\">\n        </div>\n        <div class=\"col-6\">\n            <h1 class=\"tprincipal\">\n                {{user.name}} {{user.lastname}}\n            </h1>\n        </div>\n        <div class=\"col-2\"></div>\n    </div>\n    <div class=\"row middle-row\">\n        <p>Tu privacidad está segura en este sitio. La información detallada anteriormente no se expone ni es visible\n            para nadie público. Solamente un administrador del sistema tiene acceso a estos datos.</p>\n    </div>\n    <div class=\"row middle-row\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8\">\n            <div class=\"card outside-shadow\">\n                <div class=\"card-header align-center\">\n                    <b>Editar perfil</b>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-6 align-center\">\n                            <h5 class=\"card-title\">Foto</h5>\n                            <p class=\"card-text\">Actualizar foto de perfil</p>\n                            <div class=\"btn-group\">\n                                <button class=\"btn btn-primary\" (click)=\"fileInput.click()\">Elegir imagen</button>\n                                <button [disabled]=\"!isLoaded\" class=\"btn btn-success\" (click)=\"Upload()\">Cargar imagen</button>\n                            </div>\n                        </div>\n                        <!-- aca arranca lo nuevo y termina en el otro comentario -->\n\n                        <div *ngIf=\"isAdmin\" class=\"col-4 align-center\">\n                        <select class=\"form-control\"  (ngModelChange)=\"completarUsuario($event)\" [(ngModel)]=\"userOption\">\n\n                            <option *ngFor=\"let usuario of listaUsuarios\" [ngValue]=\"usuario\">{{usuario}}</option>\n                            \n                        </select>\n                        <form [formGroup]=\"UpdateForm\" (ngSubmit)=\"onSubmit()\">\n                                <input type=\"text\" formControlName=\"nombre\" class=\"form-control separate-top-input align-center\" placeholder=\"Nombre\" autofocus>\n                                <input type=\"text\" formControlName=\"apellido\" class=\"form-control separate-top-input align-center\" placeholder=\"Apellido\">\n                                <button [disabled]=\"!UpdateForm.valid\" type=\"submit\" class=\"btn btn-danger full-width separate-top-input\">Modificar</button>\n                         </form></div>\n\n\n\n                        <!-- <div class=\"col-6 align-center\">\n                            <h5 class=\"card-title\">Nombre</h5>\n                            <p class=\"card-text\">Modificá tu nombre, apellido y/o email de una forma simple.</p>\n                            <button class=\"btn btn-primary\" disabled>Cambiar mis datos</button>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-2\"></div>\n    </div>\n    <input accept=\".png,.jpg\" type=\"file\" #fileInput style=\"display: none;\" (change)=\"OnFileSelected($event)\">\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/redirect/redirect.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/redirect/redirect.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4 align-center\">\n            <app-spinner></app-spinner>\n        </div>\n        <div class=\"col-4\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/register/register.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/register/register.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<div class=\"row top-row\">\n\t\t<div class=\"col-3\"></div>\n\t\t<div class=\"col-6\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body align-center\">\n\t\t\t\t\t<h4 class=\"form-title\">Registrarse</h4>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control separate-top-input align-center\" placeholder=\"Nombre\" autofocus>\n                        <input type=\"text\" formControlName=\"lastname\" class=\"form-control separate-top-input align-center\" placeholder=\"Apellido\">\n\t\t\t\t\t\t<input type=\"text\" formControlName=\"email\" class=\"form-control separate-top-input align-center\" placeholder=\"Email\">\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control separate-top-input align-center\" placeholder=\"Contraseña\">\n\t\t\t\t\t\t<input type=\"password\" formControlName=\"repPassword\" class=\"form-control separate-top-input align-center\" placeholder=\"Repita la contraseña\">\n\t\t\t\t\t\t<div class=\"row mar-top-2\">\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\n\t\t\t\t\t\t\t<div class=\"col-8 align-center\">\n\t\t\t\t\t\t\t\t<ngx-recaptcha2  formControlName=\"captcha\" #captchaElem [siteKey]=\"'6LfkNMgUAAAAAKL-SQOpiC8bI18fZFeW4U3cYniE'\" [useGlobalDomain]=\"false\"></ngx-recaptcha2>\n\t\t\t\t\t\t\t\t<!-- <ngx-recaptcha2  formControlName=\"captcha\" #captchaElem [siteKey]=\"'6Le9VcYUAAAAAK4z-Fj0YlhKfrNIc9eqvsNuMSsy'\" [useGlobalDomain]=\"false\"></ngx-recaptcha2> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row mar-top-2\">\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\n\t\t\t\t\t\t\t<div class=\"col-8 align-center\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t\t<label class=\"mr-sm-2\">Seleccione el numero {{ this.random }}</label>\n\t\t\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t\t\t<select class=\"browser-default custom-select\" formControlName=\"customCaptcha\">\n\t\t\t\t\t\t\t\t\t<option value=\"1\">1</option>\n\t\t\t\t\t\t\t\t\t<option value=\"2\">2</option>\n\t\t\t\t\t\t\t\t\t<option value=\"3\">3</option>\n\t\t\t\t\t\t\t\t\t<option value=\"4\">4</option>\n\t\t\t\t\t\t\t\t\t<option value=\"5\">5</option>\n\t\t\t\t\t\t\t\t\t<option value=\"6\">6</option>\n\t\t\t\t\t\t\t\t </select>\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button *ngIf=\"!loading\" [disabled]=\"!registerForm.valid\" type=\"submit\" class=\"btn btn-success full-width separate-top-input\">Registrarse</button>\n\t\t\t\t\t\t<div class=\"mar-top-2\" *ngIf=\"loading\">\n\t\t\t\t\t\t\t<app-spinner></app-spinner>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<button routerLink=\"/app/login\" class=\"btn btn-secondary full-width\">¿Ya tenés una cuenta?</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-3\"></div>\n\t</div>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/home-bartender/home-bartender.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/home-bartender/home-bartender.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <h1 class=\"tprincipal\"> Pedidos </h1>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row middle-row\">\n        <div class=\"col-6\">\n            <app-order-list role=\"bartender\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\n        </div>\n        <div class=\"col-2\"></div>\n        <div class=\"col-4\">\n            <app-work-order [order]=\"currentOrder\"></app-work-order>\n        </div>\n    </div>\n    <div class=\"row blank-row\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/main-bartender/main-bartender.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/main-bartender/main-bartender.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"bottom-shadow\">\n    <div class=\"row main-bar bartender-color\">\n        <div class=\"col-6\">\n            <h1 class=\"main-title\">La Comanda</h1>\n        </div>\n        <div class=\"col-6 profile\">\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n        </div>\n    </div>\n</nav> -->\n\n<nav>\n    <div class=\"row main-bar bc\">\n        <div class=\"col-6\"></div>\n        <div class=\"col-5 profile\">\n            \n                <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n    \n                <label *ngIf=\"user\">{{user.name}} {{user.lastname}}</label>\n            \n        </div>\n    </div>\n</nav>\n\n<div class=\"sidebar bc\" [ngClass]=\"open ? '' : 'collapsed'\">\n    <div class=\"top-row\">\n        <app-sidebar-option name=\"Perfil\" link=\"/bartender/profile\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de pedidos\" link=\"/bartender\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de productos\" link=\"/bartender/productos\"></app-sidebar-option>\n        <app-sidebar-option logOut=true></app-sidebar-option>\n    </div>\n</div>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bienvenida/bienvenida.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bienvenida/bienvenida.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ngb-carousel *ngIf=\"images\" [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\n    <ng-template ngbSlide *ngFor=\"let image of images\">\n      <div class=\"picsum-img-wrapper\">\n        <img [src]=\"image\" width=\"100%\" height=\"80%\" alt=\"Random slide\">\n      </div>\n      <div class=\"carousel-caption\">\n        <h3 class=\"titulo\">LA FAROLA DE BERAZATEGUI</h3>\n        <p>RECETAS TRADICIONALES</p>\n       \n\n        <p>Av. Siempre Viva 123, Berazategui</p>\n        <div><button class=\"btn btn-outline-info\" (click)='ingreso()'>Comenzar a disfrutar</button></div>\n      </div>\n    </ng-template>\n  </ngb-carousel>\n  \n\n  <div class=\"row fondo\" >\n    <div class=\"col-3\">\n\n  <div class=\"card fondo\" style=\"width: 18rem;\">\n    <img src=\"../../../assets/img/cava.jpeg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"card-text color\">Especialidad en vinos</p>\n    </div>\n  </div>\n  </div>\n\n  <div class=\"col-3\">\n  <div class=\"card fondo\" style=\"width: 18rem;\">\n    <img src=\"../../../assets/img/asador.jpeg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"card-text color\">Asador Criollo</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-3\">\n  <div class=\"card fondo\" style=\"width: 18rem;\">\n    <img src=\"../../../assets/img/postres.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"card-text color\">No dejes de probar nuestros postres</p>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col-3\">\n    <div class=\"card fondo\" style=\"width: 18rem;\">\n      <img src=\"../../../assets/img/artesanal.jpg\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <p class=\"card-text color\">Elaboramos nuestra propia cerveza</p>\n      </div>\n    </div>\n  </div>\n\n</div>\n  \n\n  \n  <!-- <div class=\"btn-group\" role=\"group\" aria-label=\"Carousel toggle controls\">\n    <button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\n    <button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\n  </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <h1 class=\"tprincipal\"> Pedidos </h1>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row middle-row\">\n        <div class=\"col-6\">\n            <app-order-list role=\"cervecero\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\n        </div>\n        <div class=\"col-2\"></div>\n        <div class=\"col-4\">\n            <app-work-order [order]=\"currentOrder\"></app-work-order>\n        </div>\n    </div>\n    <div class=\"row blank-row\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"bottom-shadow\">\n    <div class=\"row main-bar cervecero-color\">\n        <div class=\"col-6\">\n            <h1 class=\"main-title\">La Comanda</h1>\n        </div>\n        <div class=\"col-6 profile\">\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n        </div>\n    </div>\n</nav> -->\n\n\n<nav>\n    <div class=\"row main-bar bc\">\n        <div class=\"col-6\"></div>\n        <div class=\"col-5 profile\">\n            \n                <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n    \n                <label *ngIf=\"user\">{{user.name}} {{user.lastname}}</label>\n            \n        </div>\n    </div>\n</nav>\n\n<div class=\"sidebar bc\" [ngClass]=\"open ? '' : 'collapsed'\">\n    <div class=\"top-row\">\n        <app-sidebar-option name=\"Perfil\" link=\"/cervecero/profile\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de pedidos\" link=\"/cervecero\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de productos\" link=\"/cervecero/productos\"></app-sidebar-option>\n        <app-sidebar-option logOut=true></app-sidebar-option>\n    </div>\n</div>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/home-cliente/home-cliente.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/home-cliente/home-cliente.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n        <div class=\"row top-row page-title\">\n            <div class=\"col-3\"></div>\n            <div class=\"col-6\"></div>\n            <div class=\"col-3\"></div>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-3 align-center\">\n                <div class=\"btn-group full-width\" *ngIf=\"order\">\n                    <button class=\"btn btn-info\" disabled>${{order.totalPrice}}</button>\n                    \n                </div>\n                <app-spinner *ngIf=\"!order\"></app-spinner>\n            </div>\n            <div class=\"col-6\">\n                <button class=\"btn btn-success full-width\" data-toggle=\"modal\" data-target=\"#orderModal\">Ver pedido</button>\n            </div>\n            <div class=\"col-3\">\n                <div class=\"btn-group full-width\">\n                    <button title=\"Todo\" class=\"btn btn-outline-success\" (click)=\"ClearFilters()\"><i class=\"fas fa-asterisk\"></i></button>\n                    <button title=\"Comida\" class=\"btn btn-outline-success\" (click)=\"Filter('comida')\"><i class=\"fas fa-utensils\"></i></button>\n                    <button title=\"Bebidas\" class=\"btn btn-outline-success\" (click)=\"Filter('bebida')\"><i class=\"fas fa-wine-glass-alt\"></i></button>\n                    <button title=\"Postres\" class=\"btn btn-outline-success\" (click)=\"Filter('postre')\"><i class=\"fas fa-ice-cream\"></i></button>\n                    <button title=\"Alcohol\" class=\"btn btn-outline-success\" (click)=\"Filter('alcohol')\"><i class=\"fas fa-beer\"></i></button>\n                    <button title=\"Sin TACC\" class=\"btn btn-outline-success\" (click)=\"Filter('celiaco')\"><i class=\"fas fa-seedling\"></i></button>\n                    <button title=\"Vegana\" class=\"btn btn-outline-success\" (click)=\"Filter('vegano')\"><i class=\"fas fa-carrot\"></i></button>\n                </div>\n            </div>\n        </div>\n        <div class=\"ordered align-center\" *ngIf=\"hasOrder\" style=\"color:#FFFFFF\">\n            <hr>\n            Tu código de pedido es <b>{{order.codeID}}</b> y tu mozo es <b>{{order.waiter.name}} {{order.waiter.lastname}}</b>.\n        </div>\n        <div>\n            \n        </div>\n        <hr>\n        <div class=\"row card-group\">\n            <div class=\"col-3 mar-top-2\"  *ngFor=\"let prod of showingProducts | async\">\n                <app-food-card (added)=\"AddToOrder($event)\" [resetEvent]=\"onReset\" [product]=\"prod\"></app-food-card>\n            </div>\n        </div>\n        <hr>\n    \n        \n    </div>\n    \n    <!-- Order modal -->\n    <div class=\"modal fade\" id=\"orderModal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <h3 class=\"align-center\">Pedido</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-1\"></div>\n                        <div class=\"col-10\">\n                            <div *ngIf=\"somethingOrdered\" class=\"resume\">\n                                <ul>\n                                    <li *ngFor=\"let item of order.items\">\n                                            {{item.name}} - \n                                        <span class=\"price\">\n                                            ${{item.price}}\n                                        </span>\n                                    </li>\n                                </ul>\n                                <div class=\"align-center\">\n                                    <span style=\"font-weight: bold;\">Precio total: </span>\n                                    <span class=\"price\" style=\"font-weight: bold;\">${{order.totalPrice}}</span>\n                                </div>\n                            </div>\n                            <div *ngIf=\"!somethingOrdered\" class=\"align-center\">\n                                <span>Todavía no hay nada pedido</span>\n                            </div>\n                        </div>\n                        <div class=\"col-1\"></div>\n                    </div>\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <div class=\"btn-group full-width\">\n                                <button class=\"btn btn-outline-danger\" title=\"Borrar pedido\" (click)=\"CancelOrder()\" data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\n                                <button class=\"btn btn-outline-success\" title=\"Confirmar pedido\" (click)=\"MakeOrder()\" data-dismiss=\"modal\"><i class=\"fas fa-check\"></i></button>\n                                <button class=\"btn btn-outline-secondary\" title=\"Seguir pidiendo\" data-dismiss=\"modal\"><i class=\"fas fa-long-arrow-alt-left\"></i></button>\n                            </div>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/main-cliente/main-cliente.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/main-cliente/main-cliente.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- <nav>\n    <div class=\"row main-bar\"> \n        \n        <div class=\"col-6 profile\">\n            <tr>\n            <td><img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\"></td>\n\n            <td><label *ngIf=\"user\">{{user.name}}</label></td>\n        </tr>\n        </div>\n    </div>\n</nav> -->\n\n\n<nav>\n    <div class=\"row main-bar bc\">\n        <div class=\"col-6\"></div>\n        <div class=\"col-5 profile\">\n            \n                <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n    \n                <label *ngIf=\"user\">{{user.name}} {{user.lastname}}</label>\n            \n        </div>\n    </div>\n</nav>\n\n\n\n\n<div class=\"sidebar bc\" [ngClass]=\"open ? '' : 'collapsed'\">\n    <div class=\"top-row\">\n        <app-sidebar-option name=\"Mi perfil\" link=\"/cliente/profile\"></app-sidebar-option>\n        <app-sidebar-option name=\"Realizar pedido\" link=\"/cliente\"></app-sidebar-option>\n        <app-sidebar-option name=\"Buscar pedido\" link=\"buscar\"></app-sidebar-option>\n        <app-sidebar-option logOut=true></app-sidebar-option>\n    </div>\n</div>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/search-order/search-order.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/search-order/search-order.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <h1 class=\"tprincipal\">Buscar pedidos</h1>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row middle-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <input [(ngModel)]=\"orderID\" class=\"form-control full-width\" type=\"text\"\n                placeholder=\"Ingrese el código de su pedido\">\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <div class=\"row mar-top-1\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <button [disabled]=\"!orderID\" class=\"btn btn-outline-primary full-width\"\n                (click)=\"FindOrder()\">Buscar</button>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <div class=\"row mar-top-1\" *ngIf=\"alreadyPaid\">\n   \n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <button [disabled]=\"surveyDone\" class=\"btn btn-info full-width\" data-toggle=\"modal\"\n                data-target=\"#questionsModal\">Hacer encuesta</button>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n\n    <div class=\"row middle-row\" *ngIf=\"waitingOrder\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4 align-center\">\n            <app-spinner></app-spinner>\n        </div>\n        <div class=\"col-4\"></div>\n    </div>\n\n    <div class=\"row middle-row\" *ngIf=\"order\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <div class=\"card outside-shadow\">\n                <div class=\"card-body align-center\">\n                    <h5 class=\"card-title\">Pedido</h5>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <b>Código: </b>{{order.codeID}}\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <b>Mozo: </b>{{order.waiter.name}} {{order.waiter.lastname}}\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"!IsServed()\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <b>Tiempo estimado: </b>{{remainingTime | timeleft}}\n                        </div>\n\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"!IsServed()\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <b>Estado del Pedido: </b>{{order.state}}\n                        </div>\n\n\n\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <b>Comida</b>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <ul>\n                                <li *ngFor=\"let i of order.items\">{{i.name}} - ${{i.price}}</li>\n                            </ul>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <b>Precio total: </b> <span class=\"price\">${{order.totalPrice}}</span>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n\n                    <hr>\n\n                    <!-- desde aca -->\n                    \n                    <!-- <div class=\"row\"> -->\n                            <div class=\"col-12\">\n\n                                    <div class=\"row\">\n                                            <div class=\"col-12\">\n                <hr>               \n                                    <button [disabled]=\"CanPayNow()\" (click)=\"Cancel()\" *ngIf=\"!notCancelled()\"\n                                    class=\"btn btn-outline-danger full-width\">Cancelar Pedido</button>\n                                </div>\n                            </div>\n                <hr>\n                              \n                <hr>\n\n                                    <button [disabled]=\"this.file == null\" (click)=\"cambiarImagen()\" *ngIf=\"!notCancelled()\"\n                                class=\"btn btn-outline-info\">Agregar foto</button>\n\n                                <div class=\"btn btn-primary btn-sm align-center\">\n                                        <input type=\"file\" (change)=\"onFileChanged($event)\" [(ngModel)]=\"imagen\">\n                                </div>\n                               \n                <hr>       \n\n                            </div>\n                    <!-- </div> -->\n                    \n                   \n                    <div class=\"row\">\n                            <div class=\"col-12\">\n                                    \n                                    <button [disabled]=\"!CanPayNow()\" (click)=\"Pay()\"\n                                    class=\"btn btn-outline-success\">Pagar cuenta</button>\n\n                                    <button [disabled]=\"!CanPayNow()\" (click)=\"ticketPDF()\"\n                                    class=\"btn btn-outline-warning\">Descargar Ticket</button>\n                            \n                            </div>\n                    </div>\n\n                    <hr>\n                    \n               \n\n<div class=\"modal fade\" id=\"questionsModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <h3 class=\"align-center\">Encuesta</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <hr class=\"mar-top-1\">\n                    <form [formGroup]=\"surveyForm\" (ngSubmit)=\"SendAnswers()\">\n                        <div class=\"row\">\n                            <div class=\"col-2\"></div>\n                            <div class=\"col-8\">\n                                <input formControlName=\"tableScore\" class=\"form-control full-width align-center\"\n                                    type=\"number\" placeholder=\"Puntée del 1 al 10 a la mesa.\">\n                            </div>\n                            <div class=\"col-2\"></div>\n                        </div>\n                        <div class=\"row middle-row\">\n                            <div class=\"col-2\"></div>\n                            <div class=\"col-8\">\n                                <input formControlName=\"waiterScore\" class=\"form-control full-width align-center\"\n                                    type=\"number\" placeholder=\"Puntée del 1 al 10 al mozo.\">\n                            </div>\n                            <div class=\"col-2\"></div>\n                        </div>\n                        <div class=\"row middle-row\">\n                            <div class=\"col-2\"></div>\n                            <div class=\"col-8\">\n                                <input formControlName=\"restaurantScore\" class=\"form-control full-width align-center\"\n                                    type=\"number\" placeholder=\"Puntée del 1 al 10 al restaurante.\">\n                            </div>\n                            <div class=\"col-2\"></div>\n                        </div>\n                        <div class=\"row middle-row\">\n                            <div class=\"col-2\"></div>\n                            <div class=\"col-8\">\n                                <input formControlName=\"cookScore\" class=\"form-control full-width align-center\"\n                                    type=\"number\" placeholder=\"Puntée del 1 al 10 al cocinero.\">\n                            </div>\n                            <div class=\"col-2\"></div>\n                        </div>\n                        <div class=\"row middle-row\">\n                            <div class=\"col-2\"></div>\n                            <div class=\"col-8\">\n                                <textarea class=\"form-control\" cols=\"30\" rows=\"3\" maxlength=\"66\" formControlName=\"comment\"\n                                    placeholder=\"Escribe un breve comentario (máximo de 66 caracteres).\"></textarea>\n                            </div>\n                            <div class=\"col-2\"></div>\n                        </div>\n                        <div class=\"row mar-top-1\">\n                            <div class=\"col-2\"></div>\n                            <div class=\"col-4 align-center\">\n                                <div class=\"form-check form-check-inline\">\n                                    <input class=\"form-check-input\" type=\"radio\" formControlName=\"commentType\" name=\"commentType\"\n                                        id=\"negative\" value=\"false\">\n                                    <label class=\"form-check-label negative\" for=\"negative\">Malo</label>\n                                </div>\n                            </div>\n                            <div class=\"col-4 align-center\">\n                                <div class=\"form-check form-check-inline\">\n                                    <input class=\"form-check-input\" type=\"radio\" formControlName=\"commentType\" name=\"commentType\"\n                                        id=\"positive\" value=\"true\">\n                                    <label class=\"form-check-label positive\" for=\"positive\">Bueno</label>\n                                </div>\n                            </div>\n                            <div class=\"col-2\"></div>\n                        </div>\n                        <div class=\"row middle-row\">\n                            <div class=\"col-2\"></div>\n                            <div class=\"col-8\">\n                                <button [disabled]=\"!surveyForm.valid\" class=\"btn btn-success full-width\"\n                                    data-dismiss=\"modal\" (click)=\"SendAnswers()\">Enviar encuesta</button>\n                            </div>\n                            <div class=\"col-2\"></div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <h1 class=\"tprincipal\"> Pedidos  </h1>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row middle-row\">\n        <div class=\"col-6\">\n            <app-order-list role=\"cocinero\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\n        </div>\n        <div class=\"col-2\"></div>\n        <div class=\"col-4\">\n            <app-work-order [order]=\"currentOrder\"></app-work-order>\n        </div>\n    </div>\n    <div class=\"row blank-row\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"bottom-shadow\">\n    <div class=\"row main-bar cocinero-color\">\n        <div class=\"col-6\">\n            <h1 class=\"main-title\">La Comanda</h1>\n        </div>\n        <div class=\"col-6 profile\">\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n        </div>\n    </div>\n</nav> -->\n\n<nav>\n    <div class=\"row main-bar bc\">\n        <div class=\"col-6\"></div>\n        <div class=\"col-5 profile\">\n            \n                <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n    \n                <label  class=\"tc\"   *ngIf=\"user\">{{user.name}} {{user.lastname}}</label>\n            \n        </div>\n    </div>\n</nav>\n\n\n\n<div class=\"sidebar bc\" [ngClass]=\"open ? '' : 'collapsed'\">\n    <div class=\"top-row\">\n        <app-sidebar-option name=\"Perfil\" link=\"/cocinero/profile\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de pedidos\" link=\"/cocinero\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de productos\" link=\"/cocinero/productos\"></app-sidebar-option>\n        <app-sidebar-option logOut=true></app-sidebar-option>\n    </div>\n</div>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/main/select-order/select-order.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/main/select-order/select-order.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card outside-shadow\">\n    <div class=\"card-body align-center\">\n        <h5 class=\"card-title\">Pedido</h5>\n        <hr>\n        <div *ngIf=\"order\" class=\"order-body align-center\">\n\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Código:</b> {{order.codeID}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Cliente:</b> {{order.client.name}} {{order.client.lastname}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Mesa:</b> {{order.tableID}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Precio total:</b> ${{order.totalPrice}}\n                </div>\n            </div>\n            <hr>\n\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Está:</b> {{order.state}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Mozo:</b> {{order.waiter.name}} {{order.waiter.lastname}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <b>Tiempo restante:</b> {{remainingTime | timeleft}}\n                </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <select class=\"form-control\" [ngModel]=\"selectedItem\" (ngModelChange)=\"SelectItem($event)\">\n                        <option [ngValue]=\"it\" *ngFor=\"let it of order.items\">{{it.name}}</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"row mar-top-1\" *ngIf=\"!selectedItem\">\n                <div class=\"col-12\">\n                    <label>No se seleccionó nada.</label>\n                </div>\n            </div>\n            <div class=\"item mar-top-1\" *ngIf=\"selectedItem\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <b>Estado:</b> {{selectedItem.state}}\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <b>Lo tiene:</b> \n                        <span *ngIf=\"selectedItem.worker\">\n                        {{selectedItem.worker.name}} {{selectedItem.worker.lastname}} \n                        </span>\n                        <span *ngIf=\"!selectedItem.worker\">\n                            Nadie por ahora.\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <button [disabled]=\"!CanBeServed()\" (click)=\"CompleteOrder()\" class=\"btn btn-success full-width\">Pasar a servido</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!order\">\n            <div class=\"col-12\">\n                <label>Seleccione un pedido.</label>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/home-mozo/home-mozo.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/home-mozo/home-mozo.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <h1 class=\"tprincipal\"> Pedidos </h1>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row middle-row\">\n        <div class=\"col-7\">\n            <app-order-list role=\"mozo\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\n        </div>\n        <div class=\"col-2\"></div>\n        <div class=\"col-3\">\n            <app-select-order [order]=\"currentOrder\"></app-select-order>\n        </div>\n    </div>\n    <div class=\"row blank-row\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/main-mozo/main-mozo.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/main-mozo/main-mozo.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"bottom-shadow\">\n    <div class=\"row main-bar mozo-color\">\n        <div class=\"col-6\">\n            <h1 class=\"main-title\">La Comanda</h1>\n        </div>\n        <div class=\"col-6 profile\">\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n        </div>\n    </div>\n</nav> -->\n\n<nav>\n    <div class=\"row main-bar bc\">\n        <div class=\"col-6\"></div>\n        <div class=\"col-5 profile\">\n            \n                <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n    \n                <label *ngIf=\"user\">{{user.name}} {{user.lastname}}</label>\n            \n        </div>\n    </div>\n</nav>\n\n\n<div class=\"sidebar bc\" [ngClass]=\"open ? '' : 'collapsed'\">\n    <div class=\"top-row\">\n        <app-sidebar-option name=\"Perfil\" link=\"/mozo/profile\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de pedidos\" link=\"/mozo\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de mesas\" link=\"/mozo/tables\"></app-sidebar-option>\n        <app-sidebar-option logOut=true></app-sidebar-option>\n    </div>\n</div>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/manage-tables/manage-tables.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/manage-tables/manage-tables.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <h1 class=\"tprincipal\">Mesas</h1>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row middle-row card-group\">\n        <div class=\"col-3 mar-top-2\" *ngFor=\"let tab of tables | async\">\n            <app-table-card [table]=\"tab\"></app-table-card>\n        </div>\n    </div>\n    <hr>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/estadisticas-mesas/estadisticas-mesas.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/estadisticas-mesas/estadisticas-mesas.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"align-center mar-top-1\" *ngIf=\"this.mesaMasUsada == null && this.mesaMenosUsada == null\">\n    <div class=\"row top-row page-title\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6\">\n\n        </div>\n        <div class=\"col-3\">\n\n        </div>\n    </div>\n\n    <hr>\n    <app-spinner></app-spinner>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n        <hr>\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n        <hr>\n        <div class=\"col-3\">\n        </div>\n        <div class=\"col-6\" *ngIf=\"this.mesaMasUsada\">\n            <button class=\"btn btn-outline-info full-width\" data-toggle=\"modal\" data-target=\"#settingsModal\">Personalizar</button>\n        </div>\n        <div class=\"col-3\" *ngIf=\"this.mesaMasUsada\">\n            <button type=\"button\" class=\"btn btn-info full-width\" (click)=\"exportCSV()\">Exportar a CSV<i\n                class=\"fas fa-angle-double-down\" ></i></button>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-3 align-center\">\n            </div>\n            <div class=\"col-6 align-center\">\n            </div>\n            <div class=\"col-3 align-center\">\n            </div>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMasUsada\">\n            <img src=\"../../../../../assets/img/1.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa más usada</h5>\n                <p class=\"card-text\">La mesa {{ this.mesaMasUsada[0] }} fue utilizada {{ this.mesaMasUsada[1] }} veces\n                </p>\n            </div>\n        </div>\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMenosUsada\">\n            <img src=\"../../../../../assets/img/ultimo.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa menos usada</h5>\n                <p class=\"card-text\">La mesa {{ this.mesaMenosUsada[0] }} fue utilizada {{ this.mesaMenosUsada[1] }}\n                    veces </p>\n            </div>\n        </div>\n\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMayorFacturacion\">\n            <img src=\"../../../../../assets/img/billetes.jpeg\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa con mayor recaudación</h5>\n                <p class=\"card-text\">La mesa {{ this.arrayAcumulador.indexOf(this.mesaMayorFacturacion) }} recaudó\n                    {{ this.mesaMayorFacturacion }} pesos </p>\n            </div>\n        </div>\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMenorFacturacion\">\n            <img src=\"../../../../../assets/img/sinplata.jpeg\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa con menor recaudación</h5>\n                <p class=\"card-text\">La mesa {{ this.arrayAcumulador.indexOf(this.mesaMenorFacturacion) }} recaudó\n                    {{ this.mesaMenorFacturacion }} pesos </p>\n            </div>\n        </div>\n\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMenorFacturacion\">\n            <img src=\"../../../../../assets/img/muchaprop.jpeg\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa con mayor importe de factura</h5>\n                <p class=\"card-text\">La mesa {{ facturaMayorImporte.tableID }} tuvo una factura por\n                    {{ facturaMayorImporte.totalPrice }} pesos </p>\n            </div>\n        </div>\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMenorFacturacion\">\n            <img src=\"../../../../../assets/img/monedas.jpeg\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa con menor importe de factura</h5>\n                <p class=\"card-text\">La mesa {{ facturaMenorImporte.tableID }} tuvo una factura por\n                    {{ facturaMenorImporte.totalPrice }} pesos </p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row middle-row\" *ngIf=\"mesaMenorFacturacion\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-10\">\n            <h3 class=\"align-center\">Mejores Comentarios</h3>\n\n        </div>\n        <div class=\"col-1\"></div>\n    </div>\n    <div class=\"row middle-row\" *ngIf=\"mesaMenorFacturacion\">\n        <div class=\"col-12\">\n\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead class=\"align-center\">\n                        <tr>\n                            <th scope=\"col\">Pedido</th>\n                            <th scope=\"col\">Cliente</th>\n                            <th scope=\"col\">Mesa</th>\n                            <th scope=\"col\">Mozo</th>\n                            <th scope=\"col\">Comentario</th>\n\n                            <!-- <th scope=\"col\">Punt. mesa</th>\n                            <th scope=\"col\">Punt. mozo</th>\n                            <th scope=\"col\">Punt. restaurante</th>\n                            <th scope=\"col\">Punt. cocinero</th> -->\n                            <!-- <th scope=\"col\">Fecha</th> -->\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr [surveyAverage]=\"sur\" *ngFor=\"let sur of surveysGood | async\" class=\"survey align-center\"\n                            data-toggle=\"modal\" data-target=\"#surveyModal\" (click)=\"SelectSurvey(sur)\">\n                            \n                            <td>{{sur.order.codeID}}</td>\n                            <td>{{sur.order.client.name}} {{sur.order.client.lastname}}</td>\n                            <td>{{sur.order.tableID}}</td>\n                            <td>{{sur.order.waiter.name}} {{sur.order.waiter.lastname}}</td>\n                            <td>{{sur.comment}}</td>\n\n                            <!-- <td>{{sur.tableScore}}</td>\n                            <td>{{sur.waiterScore}}</td>\n                            <td>{{sur.restaurantScore}}</td>\n                            <td>{{sur.cookScore}}</td> -->\n                            <!-- <td>{{sur.order.timeLeft | neatDate}}</td> -->\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"row middle-row\" *ngIf=\"mesaMenorFacturacion\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-10\">\n            <h3 class=\"align-center\">Peores Comentarios</h3>\n\n        </div>\n        <div class=\"col-1\"></div>\n    </div>\n    <div class=\"row middle-row\" *ngIf=\"mesaMenorFacturacion\">\n        <div class=\"col-12\">\n\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead class=\"align-center\">\n                        <tr>\n                            <th scope=\"col\">Pedido</th>\n                            <th scope=\"col\">Cliente</th>\n                            <th scope=\"col\">Mesa</th>\n                            <th scope=\"col\">Mozo</th>\n                            <th scope=\"col\">Comentario</th>\n\n                            <!-- <th scope=\"col\">Punt. mesa</th>\n                            <th scope=\"col\">Punt. mozo</th>\n                            <th scope=\"col\">Punt. restaurante</th>\n                            <th scope=\"col\">Punt. cocinero</th> -->\n                            <!-- <th scope=\"col\">Fecha</th> -->\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr [surveyAverage]=\"sur\" *ngFor=\"let sur of surveysBad | async\" class=\"survey align-center\"\n                            data-toggle=\"modal\" data-target=\"#surveyModal\" (click)=\"SelectSurvey(sur)\">\n                            \n                            <td>{{sur.order.codeID}}</td>\n                            <td>{{sur.order.client.name}} {{sur.order.client.lastname}}</td>\n                            <td>{{sur.order.tableID}}</td>\n                            <td>{{sur.order.waiter.name}} {{sur.order.waiter.lastname}}</td>\n                            <td>{{sur.comment}}</td>\n\n                            <!-- <td>{{sur.tableScore}}</td>\n                            <td>{{sur.waiterScore}}</td>\n                            <td>{{sur.restaurantScore}}</td>\n                            <td>{{sur.cookScore}}</td> -->\n                            <!-- <td>{{sur.order.timeLeft | neatDate}}</td> -->\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<!-- Settings modal -->\n<div class=\"modal fade\" id=\"settingsModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <h3 class=\"align-center\">Personalizar Busqueda</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n\n                    <hr class=\"mar-top-1\">\n                    <form [formGroup]=\"settingsForm\" (ngSubmit)=\"SendSettings()\">\n\n                        <div class=\"row\">\n                            <div class=\"col-1\"></div>\n                            <div class=\"col-10\">\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-6\">\n                                        <div class=\"col-12\">\n                                            <label>Desde fecha:</label>\n                                        </div>\n                                        <div>\n                                            <input type=\"date\" name=\"fechaInicio\" formControlName=\"fechaInicio\"\n                                                (change)=\"setDate()\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-6\">\n                                        <div class=\"col-12\">\n                                            <label>Hasta fecha:</label>\n                                        </div>\n                                        <div>\n                                            <input type=\"date\" name=\"fechaFin\" formControlName=\"fechaFin\"\n                                                (change)=\"setDate(false)\">\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class=\"col-1\"></div>\n                        </div>\n                    </form>\n\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <div class=\"btn-group full-width\">\n                                <button class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"Cancel()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" title=\"Filtrar tabla\" (click)=\"search()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-check\"></i></button>\n\n                            </div>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Survey modal -->\n<div class=\"modal fade\" id=\"surveyModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\" *ngIf=\"survey\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <h3 class=\"align-center\">Pedido {{survey.order.codeID}}</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-12 align-center\">\n                            <b>Promedio de los puntajes: </b> <span [surveyAverage]=\"survey\"\n                                returnAverage=\"true\"></span>\n                        </div>\n                    </div>\n                    <div class=\"row middle-row\">\n                        <div class=\"col-12 align-center\" [surveyComment]='survey.commentType'></div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <span [surveyComment]=\"survey.commentType\" isIcon=\"true\"></span> - {{survey.comment}}\n                        </div>\n                    </div>\n                    <div class=\"row mar-top-1\">\n                        <div class=\"col-1\"></div>\n                        <div class=\"col-10 align-right\">\n                            {{survey.order.client.name}} {{survey.order.client.lastname}}\n                        </div>\n                        <div class=\"col-1\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"align-center mar-top-1\" *ngIf=\"this.topBest == null && this.topWorst == null\">\n    <div class=\"row top-row page-title\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6\">\n\n        </div>\n        <div class=\"col-3\">\n\n        </div>\n    </div>\n\n    <hr>\n    <app-spinner></app-spinner>\n</div>\n<div class=\"container\" *ngIf=\"this.cancelledOrders != null\">\n    <div class=\"row\" *ngIf=\"this.topBest != null && this.topWorst != null\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n        <hr>\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n        <hr>\n        <div class=\"col-3\">\n        </div>\n        <div class=\"col-6\">\n            <button class=\"btn btn-outline-info full-width\" data-toggle=\"modal\" data-target=\"#settingsModal\">Buscar por fecha</button>\n        </div>\n        <div class=\"col-3\">\n            <button type=\"button\" class=\"btn btn-info full-width\" (click)=\"exportCSV()\">Exportar a CSV<i\n                class=\"fas fa-angle-double-down\" ></i></button>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-3 align-center\">\n            </div>\n            <div class=\"col-6 align-center\">\n            </div>\n            <div class=\"col-3 align-center\">\n            </div>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\" *ngIf=\"this.topBest\">\n        <div class=\"col-3 align-center\">\n        </div>\n        <div class=\"col-6 align-center\">\n            <h2>Top 3 mas vendidos</h2>\n        </div>\n        <div class=\"col-3 align-center\">\n        </div>\n\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topBest[0] != null\">\n            <img src=\"../../../../../assets/img/1.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{this.topBest[0][0]}}</h5>\n                <p class=\"card-text\">El articulo {{this.topBest[0][0]}} fue el mas solicitado con {{this.topBest[0][1]}}\n                    ventas </p>\n            </div>\n        </div>\n\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topBest[1] != null\">\n            <img src=\"../../../../../assets/img/2.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{this.topBest[1][0]}}</h5>\n                <p class=\"card-text\">En segundo lugar se encuentra {{this.topBest[1][0]}} con {{this.topBest[1][1]}}\n                    ventas</p>\n            </div>\n        </div>\n\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topBest[2] != null\">\n            <img src=\"../../../../../assets/img/3.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{this.topBest[2][0]}}</h5>\n                <p class=\"card-text\">El tercer puesto es para {{this.topBest[2][0]}} con {{this.topBest[2][1]}} ventas\n                </p>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"row\" *ngIf=\"this.topWorst\">\n        <div class=\"col-3 align-center\">\n        </div>\n        <div class=\"col-6 align-center\">\n            <h2>Top 3 menos vendidos</h2>\n        </div>\n        <div class=\"col-3 align-center\">\n        </div>\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topWorst[0] != null\">\n            <img src=\"../../../../../assets/img/antesqueelante.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{this.topWorst[0][0]}}</h5>\n                    <p class=\"card-text\">El articulo {{this.topWorst[0][0]}} no se vendió tanto, tuvo\n                        {{this.topWorst[0][1]}} ventas </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topWorst[1] != null\">\n            <img src=\"../../../../../assets/img/anteultimo.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{this.topWorst[1][0]}}</h5>\n                <p class=\"card-text\">El articulo {{this.topWorst[1][0]}} fue un poco menos solicitado que el anterior\n                    con\n                    {{this.topWorst[1][1]}} ventas </p>\n            </div>\n        </div>\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topWorst[2] != null\">\n            <img src=\"../../../../../assets/img/ultimo.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{this.topWorst[2][0]}}</h5>\n                <p class=\"card-text\">El articulo {{this.topWorst[2][0]}} fue lo menos solicitado con\n                    {{this.topWorst[2][1]}} ventas </p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6 align-center\">\n            <h2>Pedidos Cancelados</h2>\n        </div>\n        <div class=\"col-3 align-center\">\n\n        </div>\n\n\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">Codigo de pedido</th>\n                        <th scope=\"col\">Fecha</th>\n                        <th scope=\"col\">Estado</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr class=\"order\" *ngFor=\"let order of cancelledOrders | async\">\n                        <td><label>{{order.codeID}}</label></td>\n                        <td>{{order.timestamp | date:'hh:mm dd/MM/yyyy'}}</td>\n                        <td>{{order.state}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <hr>\n\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n        </div>\n        <div class=\"col-6 align-center\">\n            <h2>Pedidos no entregados en tiempo estipulado</h2>\n        </div>\n        <div class=\"col-3 align-center\">\n        </div>\n\n\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">Codigo de pedido</th>\n                        <th scope=\"col\">Fecha</th>\n                        <th scope=\"col\">Demora</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr class=\"order\" *ngFor=\"let order of delayedOrders | async\">\n                        <td><label>{{order.codeID}}</label></td>\n                        <td>{{order.timestamp | date:'hh:mm dd/MM/yyyy'}}</td>\n                        <td>{{order.delayed | timeleft}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <hr>\n</div>\n\n\n<!-- Settings modal -->\n<div class=\"modal fade\" id=\"settingsModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <h3 class=\"align-center\">Personalizar Busqueda</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n\n                    <hr class=\"mar-top-1\">\n                    <form [formGroup]=\"settingsForm\" (ngSubmit)=\"SendSettings()\">\n\n                        <div class=\"row\">\n                            <div class=\"col-1\"></div>\n                            <div class=\"col-10\">\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-6\">\n                                        <div class=\"col-12\">\n                                            <label>Desde fecha:</label>\n                                        </div>\n                                        <div>\n                                            <input type=\"date\" name=\"fechaInicio\" formControlName=\"fechaInicio\"\n                                                (change)=\"setDate()\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-6\">\n                                        <div class=\"col-12\">\n                                            <label>Hasta fecha:</label>\n                                        </div>\n                                        <div>\n                                            <input type=\"date\" name=\"fechaFin\" formControlName=\"fechaFin\"\n                                                (change)=\"setDate(false)\">\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class=\"col-1\"></div>\n                        </div>\n                    </form>\n\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <div class=\"btn-group full-width\">\n                                <button class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"Cancel()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" title=\"Filtrar tabla\" (click)=\"search()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-check\"></i></button>\n\n                            </div>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/home-socio/home-socio.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/home-socio/home-socio.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <!-- <div class=\"col-4 align-center\">\n            <h3>Control de roles</h3>\n            <hr>\n            <p>Desde esta opción podés administrar los roles de los usuarios registrados en la aplicación.</p>\n            <hr>\n            <div class=\"role-panel\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <input [(ngModel)]=\"changeRoleEmail\" type=\"text\" class=\"form-control input-titanic role-input\" placeholder=\"Email del usuario\">\n                    </div>\n                </div>\n                <div class=\"row middle-row\">\n                    <div class=\"col-12\">\n                        <select [(ngModel)]=\"changeRoleNewRole\" class=\"form-control input-titanic role-input\">\n                            <option value=\"socio\">Socio</option>\n                            <option value=\"mozo\">Mozo</option>\n                            <option value=\"cocinero\">Cocinero</option>\n                            <option value=\"cervecero\">Cervecero</option>\n                            <option value=\"bartender\">Bartender</option>\n                            <option value=\"cliente\">Cliente</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row middle-row\">\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-primary full-width\" (click)=\"ChangeRole()\">Cambiar rol</button>\n                    </div>\n                </div>\n            </div>      \n\n        </div> -->\n        <div class=\"col-4 align-center\">\n            <h3>Lista de usuarios</h3>\n            <hr>\n            <p>Desde acá podés ver un listado completo de los usuarios registrados en la aplicación</p>\n            <hr>\n            <div class=\"btn-group full-width\">\n                <button class=\"btn btn-danger full-width\" (click)=\"GeneratePDF()\">Generar PDF</button>\n            </div>\n        </div>\n        <div class=\"col-4 align-center\">\n            <h3>Facturación</h3>\n            <hr>\n            <p>Desde acá podés ver todo lo que se facturó en detalle.</p>\n            <hr>\n            <div class=\"btn-group full-width\">\n                <button class=\"btn btn-success full-width\" (click)=\"GenerateCSV()\">Generar CSV</button>\n            </div>\n        </div>\n    </div>\n</div>\n      ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/main-socio/main-socio.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/main-socio/main-socio.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"bottom-shadow\">\n    <div class=\"row main-bar socio-color\">\n        <div class=\"col-6\">\n            <h1 class=\"main-title\">La Comanda</h1>\n        </div>\n        <div class=\"col-6 profile\">\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n        </div>\n    </div>\n</nav> -->\n\n<nav>\n    <div class=\"row main-bar bc\">\n        <div class=\"col-6\"></div>\n        <div class=\"col-5 profile\">\n            \n                <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\n    \n                <label *ngIf=\"user\">{{user.name}} {{user.lastname}}</label>\n            \n        </div>\n    </div>\n</nav>\n\n\n\n<div class=\"sidebar bc\" [ngClass]=\"open ? '' : 'collapsed'\">\n    <div class=\"top-row\">\n        <app-sidebar-option name=\"Perfil\" link=\"/socio/profile\"></app-sidebar-option>\n        <app-sidebar-option name=\"Panel de control\" link=\"/socio\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de mesas\" link=\"/socio/tables\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de pedidos\" link=\"/socio/orders\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de productos\" link=\"/socio/products\"></app-sidebar-option>\n        <app-sidebar-option name=\"Gestión de usuarios\" link=\"/socio/usuarios\"></app-sidebar-option>\n        <app-sidebar-option name=\"Ver encuestas\" link=\"/socio/surveys\"></app-sidebar-option>\n        <app-sidebar-option name=\"Logs del Sistema\" link=\"/socio/logs\"></app-sidebar-option>\n        <app-sidebar-option name=\"Estadisticas de pedidos\" link=\"/socio/estPedidos\"></app-sidebar-option>\n        <app-sidebar-option name=\"Estadisticas de mesas\" link=\"/socio/estMesas\"></app-sidebar-option>\n        <app-sidebar-option logOut=true></app-sidebar-option>\n    </div>\n</div>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <h1 class=\"tprincipal\"> Pedidos </h1>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row middle-row\">\n        <div class=\"col-6\">\n            <app-order-list role=\"socio\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\n        </div>\n        <div class=\"col-2\"></div>\n        <div class=\"col-4\">\n            <app-select-order [order]=\"currentOrder\"></app-select-order>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-products/manage-products.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-products/manage-products.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            \n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n        <app-admin-productos></app-admin-productos>\n    <hr>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <h1 class=\"tprincipal\">  Mesas  </h1>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row middle-row card-group\">\n        <div class=\"col-3 mar-top-2\" *ngFor=\"let tab of tables | async\">\n            <app-table-card [table]=\"tab\" [isAdmin]=\"true\"></app-table-card>\n        </div>\n    </div>\n    <hr>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-usr/manage-usr.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-usr/manage-usr.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n        <div class=\"row top-row page-title\">\n            <div class=\"col-3\"></div>\n            <div class=\"col-6\"></div>\n            <div class=\"col-3\"></div>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-3 align-center\">\n    \n            </div>\n            <div class=\"col-6\">\n                <button class=\"btn btn-info full-width\" data-toggle=\"modal\" data-target=\"#userModal\">Alta\n                    Usuario</button>\n            </div>\n            <div class=\"col-3\">\n                <div class=\"btn-group full-width\">\n    \n                    <button title=\"Todos\" class=\"btn btn-info\" (click)=\"ClearFilters()\"><i\n                            class=\"fas fa-asterisk\"></i></button>\n                    <button title=\"Socios\" class=\"btn btn-info\" (click)=\"Filter('socio')\"><i\n                            class=\"fa fa-user-circle\"></i></button>\n                    <button title=\"Bartenders\" class=\"btn btn-info\" (click)=\"Filter('bartender')\"><i\n                            class=\"fas fa-wine-glass-alt\"></i></button>\n                    <button title=\"Cerveceros\" class=\"btn btn-info\" (click)=\"Filter('cervecero')\"><i\n                            class=\"fas fa-beer\"></i></button>\n                    <button title=\"Cocineros\" class=\"btn btn-info\" (click)=\"Filter('cocinero')\"><i\n                            class=\"fas fa-fire\"></i></button>\n                            <button title=\"Mozos\" class=\"btn btn-info\" (click)=\"Filter('mozo')\"><i\n                                class=\"fas fa-book\"></i></button>\n                    <button title=\"Suspendidos\" class=\"btn btn-info\" (click)=\"Filter('suspendidos')\"><i\n                            class=\"fas fa-ban\"></i></button>\n                    <button title=\"Habilitados\" class=\"btn btn-info\" (click)=\"Filter('habilitados')\"><i\n                            class=\"fas fa-check\"></i></button>\n    \n                </div>\n            </div>\n        </div>\n    \n        <hr>\n    \n        <div class=\"row\">\n            <div class=\"col-3 align-center\">\n    \n            </div>\n            <div class=\"form-group col-6 align-center full-width\">\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"busqueda\" (input)=\"search()\" placeholder=\"Buscar...\">\n            </div>\n            <div class=\"col-3 align-center\">\n    \n            </div>\n            \n            \n        </div>\n    \n        <hr>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">Foto</th>\n                        <th scope=\"col\">Nombre</th>\n                        <th scope=\"col\">Apellido</th>\n                        <th scope=\"col\">Usuario</th>\n                        <th scope=\"col\">Rol</th>\n                        <th scope=\"col\">Suspender</th>\n                        <th scope=\"col\">Borrar</th>\n                        <th scope=\"col\">Editar</th>\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"users\">\n                    <tr class=\"user\" *ngFor=\"let user of showingUsers | async | sortPipe:'email'\">\n                        <td><img [src]=\"user.image\" width=\"30px\" height=\"30px\">\n                        </td>\n                        <td>{{user.name}}</td>\n                        <td>{{user.lastname}}</td>\n                        <td>{{user.email}}</td>\n                        <td>{{user.role}}</td>\n                        <td><button class=\"btn btn-warning\" *ngIf=\"user.state != 'deshabilitado'\"\n                                (click)=\"changeState(user.id, user.state)\">Suspender</button>\n                            <button class=\"btn btn-success\" *ngIf=\"user.state == 'deshabilitado'\"\n                                (click)=\"changeState(user.id, user.state)\">Reincorporar</button>\n                        </td>\n                        <td><button class=\"btn btn-danger\" (click)=\"deleteUser(user.id)\">Borrar</button>\n                        </td>\n                        <td>\n                            <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#userModal\"\n                                (click)=\"editarUsuario(user)\">Editar</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <hr>\n    </div>\n    \n    <!-- Product modal -->\n    <div class=\"modal fade\" id=\"userModal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <div class=\"col-2\"></div>\n                            <div class=\"col-8\" *ngIf=\"!this.haySeleccionado\">\n                                <h3 class=\"align-center\">Agregar Usuario</h3>\n                            </div>\n                            <div class=\"col-8\" *ngIf=\"this.haySeleccionado\">\n                                <h3 class=\"align-center\">Editar Usuario</h3>\n                            </div>\n                            <div class=\"col-2\"></div>\n                        </div>\n    \n                        <hr class=\"mar-top-1\">\n                        <form [formGroup]=\"userForm\" (ngSubmit)=\"SendUser()\">\n    \n                            <div class=\"row\" *ngIf=\"this.haySeleccionado\">\n                                <div class=\"col-5\"></div>\n                                <div class=\"col-2\">\n                                    <img [src]=\"this.usuarioSeleccionado.image\" width=\"60px\" height=\"60px\">\n                                </div>\n                                <div class=\"col-5\"></div>\n                            </div>\n    \n                            <div class=\"row\">\n                                <div class=\"col-1\"></div>\n                                <div class=\"col-10\">\n    \n                                    <div class=\"row middle-row\">\n                                        <div class=\"col-12\">\n                                            <label>Nombre:</label>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <input formControlName=\"userName\" class=\"form-control full-width align-center\"\n                                                type=\"text\" placeholder=\"Nombre del usuario\" required>\n                                        </div>\n                                    </div>\n    \n                                    <div class=\"row middle-row\">\n                                        <div class=\"col-12\">\n                                            <label>Apellido:</label>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <input formControlName=\"userLastname\"\n                                                class=\"form-control full-width align-center\" type=\"text\"\n                                                placeholder=\"Apellido del usuario\" required>\n                                        </div>\n                                    </div>\n    \n                                    <div class=\"row middle-row\">\n                                        <div class=\"col-12\">\n                                            <label>Email:</label>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <input formControlName=\"userMail\" class=\"form-control full-width align-center\"\n                                                type=\"email\" placeholder=\"Email del usuario\" required [readonly]=\"this.haySeleccionado\">\n                                        </div>\n                                    </div>\n    \n                                    <div class=\"row middle-row\">\n    \n                                        <div class=\"col-12\">\n                                            <label>Rol:</label>\n                                        </div>\n    \n                                        <div class=\"col-12\">\n                                            <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\"\n                                                formControlName=\"userRole\">\n                                                <option value=\"bartender\">Bartender</option>\n                                                <option value=\"cocinero\">Cocinero</option>\n                                                <option value=\"cervecero\">Cervecero</option>\n                                                <option value=\"mozo\">Mozo</option>\n                                                <option value=\"socio\">Socio</option>\n                                                <option value=\"mozo\">Mozo</option>\n                                                <option value=\"cliente\">Cliente</option>\n                                            </select>\n                                        </div>\n    \n                                    </div>\n    \n                                    <div class=\"row middle-row\">\n                                        <div class=\"col-12\">\n                                            <label>Foto de perfil:</label>\n                                        </div>\n    \n                                        <div class=\"col-12\">\n                                            <div class=\"btn btn-primary btn-sm float-left\">\n                                                <input type=\"file\" (change)=\"onFileChanged($event)\"\n                                                    formControlName=\"userImage\" name=\"userImage\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-1\"></div>\n                            </div>\n                        </form>\n    \n                        <hr class=\"mar-top-1\">\n                        <div class=\"row\">\n                            <div class=\"col-2\"></div>\n                            <div class=\"col-8\">\n                                <div class=\"btn-group full-width\">\n                                    <button type=\"reset\" class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"Cancel()\"\n                                        data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\n    \n                                    <button class=\"btn btn-outline-success\" *ngIf=\"!this.haySeleccionado\"\n                                        title=\"Agregar usuario\" (click)=\"addUser()\" data-dismiss=\"modal\"><i\n                                            class=\"fas fa-check\"></i></button>\n    \n                                    <button class=\"btn btn-outline-success\" *ngIf=\"this.haySeleccionado\"\n                                        title=\"Actualizar usuario\" (click)=\"updateUser()\" data-dismiss=\"modal\"><i\n                                            class=\"fas fa-check\"></i></button>\n                                </div>\n                            </div>\n                            <div class=\"col-2\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manejo-logs/manejo-logs.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manejo-logs/manejo-logs.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"align-center mar-top-1\" *ngIf=\"showingLogs == null\">\n    <div class=\"row top-row page-title\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6\">\n\n        </div>\n        <div class=\"col-3\">\n\n        </div>\n    </div>\n\n    <hr>\n    <app-spinner></app-spinner>\n</div>\n<div class=\"container\">\n    <div class=\"row top-row page-title\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6\">\n            <button class=\"btn btn-outline-info full-width\" data-toggle=\"modal\" data-target=\"#logModal\">Busqueda Detallada </button>\n        </div>\n        <div class=\"col-3\">\n            <button type=\"button\" class=\"btn btn-info full-width\" (click)=\"exportCSV()\">Exportar a CSV  <i\n                class=\"fas fa-angle-double-down\" ></i></button>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"form-group col-6 align-center full-width\">\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"busqueda\" (input)=\"search()\"\n                placeholder=\"Buscar por...\">\n            <label *ngIf=\"busqueda || !this.todos\">\n                <h4>Cantidad de coincidencias: {{this.coincidencias}}</h4>\n            </label>\n        </div>\n        <div class=\"col-3 align-center\">\n\n\n\n        </div>\n\n\n    </div>\n\n    <hr>\n    <div class=\"table-responsive\">\n        <!-- <table class=\"table table-hover\"> -->\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Usuario</th>\n                    <th scope=\"col\">Fecha</th>\n                    <th scope=\"col\">Detalle</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"logs\">\n                <tr class=\"log\" *ngFor=\"let log of showingLogs | async | sortPipe:'fecha'\">\n                    <td>{{log.usuario}}</td>\n                    <td>{{log.fecha | date: 'hh:mm dd-MM-yyyy'}}</td>\n                    <td>{{log.observacion}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <hr>\n</div>\n\n<!-- Logs modal -->\n<div class=\"modal fade\" id=\"logModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <h3 class=\"align-center\">Personalizar Busqueda</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n\n                    <hr class=\"mar-top-1\">\n                    <form [formGroup]=\"logForm\" (ngSubmit)=\"SendSettings()\">\n\n                        <div class=\"row\">\n                            <div class=\"col-1\"></div>\n                            <div class=\"col-10\">\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Filtrar por Areas:</label>\n                                    </div>\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"input-group mb-3 col-12\">\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeTodos\"\n                                                formControlName=\"typeTodos\" [(ngModel)]=\"todos\"\n                                                (change)=\"enableDisable()\">\n                                            <label class=\"custom-control-label\" for=\"typeTodos\">Todos</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeCocinero\"\n                                                formControlName=\"typeCocinero\">\n                                            <label class=\"custom-control-label\" for=\"typeCocinero\">Cocinero</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeMozo\"\n                                                formControlName=\"typeMozo\">\n                                            <label class=\"custom-control-label\" for=\"typeMozo\">Mozo</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeSocio\"\n                                                formControlName=\"typeSocio\">\n                                            <label class=\"custom-control-label\" for=\"typeSocio\">Socio</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeCervecero\"\n                                                formControlName=\"typeCervecero\">\n                                            <label class=\"custom-control-label\" for=\"typeCervecero\">Cervecero</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeBartender\"\n                                                formControlName=\"typeBartender\">\n                                            <label class=\"custom-control-label\" for=\"typeBartender\">Bartender</label>\n                                        </div>\n                                        <!-- <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeDelivery\"\n                                                formControlName=\"typeDelivery\">\n                                            <label class=\"custom-control-label\" for=\"typeDelivery\">Delivery</label>\n                                        </div> -->\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeCliente\"\n                                                formControlName=\"typeCliente\">\n                                            <label class=\"custom-control-label\" for=\"typeCliente\">Cliente</label>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-6\">\n                                        <div class=\"col-12\">\n                                            <label>Desde fecha:</label>\n                                        </div>\n                                        <div>\n                                            <input type=\"date\" name=\"fechaInicio\" formControlName=\"fechaInicio\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-6\">\n                                        <div class=\"col-12\">\n                                            <label>Hasta fecha:</label>\n                                        </div>\n                                        <div>\n                                            <input type=\"date\" name=\"fechaFin\" formControlName=\"fechaFin\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-1\"></div>\n                        </div>\n                    </form>\n\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <div class=\"btn-group full-width\">\n                                <button class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"Cancel()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" title=\"Filtrar tabla\" (click)=\"search()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-check\"></i></button>\n\n                            </div>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/survey-table/survey-table.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/survey-table/survey-table.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <h1 class=\"tprincipal\">\n                  Encuestas  \n            </h1>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <div class=\"row middle-row\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-10\">\n            <p>Cada encuesta está coloreada según el promedio de puntaje realizado sobre las cuatro categorías: el color es <span class=\"red\">rojo</span> si el promedio está por debajo del 4, el color es <span class=\"yellow\">amarillo</span> si es mayor o igual que 4 pero menor a 7 y por último <span class=\"green\">verde</span>, si el promedio es mayor a 7. Haga click en una encuesta para ver más detalles.</p>\n        </div>\n        <div class=\"col-1\"></div>\n    </div>\n    <div class=\"row middle-row\">\n        <div class=\"col-12\">\n\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead class=\"align-center\">\n                        <tr>\n                            <th scope=\"col\">Pedido</th>\n                            <th scope=\"col\">Cliente</th>\n                            <th scope=\"col\">Mesa</th>\n                            <th scope=\"col\">Mozo</th>\n                            <th scope=\"col\">Punt. mesa</th>\n                            <th scope=\"col\">Punt. mozo</th>\n                            <th scope=\"col\">Punt. restaurante</th>\n                            <th scope=\"col\">Punt. cocinero</th>\n                            <th scope=\"col\">Fecha</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr [surveyAverage]=\"sur\" *ngFor=\"let sur of surveys | async\" class=\"survey align-center\" data-toggle=\"modal\" data-target=\"#surveyModal\" (click)=\"SelectSurvey(sur)\">\n                            <td>{{sur.order.codeID}}</td>\n                            <td>{{sur.order.client.name}} {{sur.order.client.lastname}}</td>\n                            <td>{{sur.order.tableID}}</td>\n                            <td>{{sur.order.waiter.name}} {{sur.order.waiter.lastname}}</td>\n                            <td>{{sur.tableScore}}</td>\n                            <td>{{sur.waiterScore}}</td>\n                            <td>{{sur.restaurantScore}}</td>\n                            <td>{{sur.cookScore}}</td>\n                            <td>{{sur.fecha |  date:'dd/MM/yyyy'}} - {{sur.fecha | date: 'HH:mm'}}</td>  \n                                <!-- Hora: {{ sur.fecha.toMillis() | date: 'HH:mm' }}\n                            </td> -->\n                            <!-- <td>{{sur.order.timeLeft | neatDate}}</td> -->\n\n\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"surveyModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body\">\n            <div class=\"container-fluid\" *ngIf=\"survey\">\n                <div class=\"row\">\n                    <div class=\"col-2\"></div>\n                    <div class=\"col-8\">\n                        <h3 class=\"align-center\">Pedido {{survey.order.codeID}}</h3>\n                    </div>\n                    <div class=\"col-2\"></div>\n                </div>\n                <hr class=\"mar-top-1\">\n                <div class=\"row\">\n                    <div class=\"col-12 align-center\">\n                        <b>Promedio de los puntajes: </b> <span [surveyAverage]=\"survey\" returnAverage=\"true\"></span>\n                    </div>\n                </div>\n                <div class=\"row middle-row\">\n                    <div class=\"col-12 align-center\" [surveyComment]='survey.commentType'></div>\n                </div>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <span [surveyComment]=\"survey.commentType\" isIcon=\"true\"></span> - {{survey.comment}}\n                    </div>\n                </div>\n                <div class=\"row mar-top-1\">\n                    <div class=\"col-1\"></div>\n                    <div class=\"col-10 align-right\">\n                        {{survey.order.client.name}} {{survey.order.client.lastname}}\n                    </div>\n                    <div class=\"col-1\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_socio_views_main_socio_main_socio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/socio/views/main-socio/main-socio.component */ "./src/app/components/socio/views/main-socio/main-socio.component.ts");
/* harmony import */ var _components_socio_views_home_socio_home_socio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/socio/views/home-socio/home-socio.component */ "./src/app/components/socio/views/home-socio/home-socio.component.ts");
/* harmony import */ var _components_mozo_views_main_mozo_main_mozo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mozo/views/main-mozo/main-mozo.component */ "./src/app/components/mozo/views/main-mozo/main-mozo.component.ts");
/* harmony import */ var _components_mozo_views_home_mozo_home_mozo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mozo/views/home-mozo/home-mozo.component */ "./src/app/components/mozo/views/home-mozo/home-mozo.component.ts");
/* harmony import */ var _components_all_views_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/all/views/login/login.component */ "./src/app/components/all/views/login/login.component.ts");
/* harmony import */ var _components_all_views_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/all/views/register/register.component */ "./src/app/components/all/views/register/register.component.ts");
/* harmony import */ var _components_all_views_main_general_main_general_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/all/views/main-general/main-general.component */ "./src/app/components/all/views/main-general/main-general.component.ts");
/* harmony import */ var _components_all_views_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/all/views/error/error.component */ "./src/app/components/all/views/error/error.component.ts");
/* harmony import */ var _components_cliente_views_main_cliente_main_cliente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cliente/views/main-cliente/main-cliente.component */ "./src/app/components/cliente/views/main-cliente/main-cliente.component.ts");
/* harmony import */ var _components_cliente_views_home_cliente_home_cliente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cliente/views/home-cliente/home-cliente.component */ "./src/app/components/cliente/views/home-cliente/home-cliente.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_mozo_views_manage_tables_manage_tables_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/mozo/views/manage-tables/manage-tables.component */ "./src/app/components/mozo/views/manage-tables/manage-tables.component.ts");
/* harmony import */ var _components_cervecero_views_main_cervecero_main_cervecero_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cervecero/views/main-cervecero/main-cervecero.component */ "./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.ts");
/* harmony import */ var _components_cervecero_views_home_cervecero_home_cervecero_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cervecero/views/home-cervecero/home-cervecero.component */ "./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.ts");
/* harmony import */ var _components_cocinero_views_main_cocinero_main_cocinero_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/cocinero/views/main-cocinero/main-cocinero.component */ "./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.ts");
/* harmony import */ var _components_cocinero_views_home_cocinero_home_cocinero_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cocinero/views/home-cocinero/home-cocinero.component */ "./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.ts");
/* harmony import */ var _components_bartender_views_main_bartender_main_bartender_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/bartender/views/main-bartender/main-bartender.component */ "./src/app/components/bartender/views/main-bartender/main-bartender.component.ts");
/* harmony import */ var _components_bartender_views_home_bartender_home_bartender_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/bartender/views/home-bartender/home-bartender.component */ "./src/app/components/bartender/views/home-bartender/home-bartender.component.ts");
/* harmony import */ var _components_cliente_views_search_order_search_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cliente/views/search-order/search-order.component */ "./src/app/components/cliente/views/search-order/search-order.component.ts");
/* harmony import */ var _components_all_views_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/all/views/redirect/redirect.component */ "./src/app/components/all/views/redirect/redirect.component.ts");
/* harmony import */ var _components_socio_views_manage_orders_admin_manage_orders_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/socio/views/manage-orders-admin/manage-orders-admin.component */ "./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.ts");
/* harmony import */ var _components_socio_views_manage_tables_admin_manage_tables_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/socio/views/manage-tables-admin/manage-tables-admin.component */ "./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.ts");
/* harmony import */ var _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/all/views/profile/profile.component */ "./src/app/components/all/views/profile/profile.component.ts");
/* harmony import */ var _components_socio_views_survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/socio/views/survey-table/survey-table.component */ "./src/app/components/socio/views/survey-table/survey-table.component.ts");
/* harmony import */ var _components_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/bienvenida/bienvenida.component */ "./src/app/components/bienvenida/bienvenida.component.ts");
/* harmony import */ var _components_socio_views_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/socio/views/manage-products/manage-products.component */ "./src/app/components/socio/views/manage-products/manage-products.component.ts");
/* harmony import */ var _components_socio_views_manage_usr_manage_usr_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/socio/views/manage-usr/manage-usr.component */ "./src/app/components/socio/views/manage-usr/manage-usr.component.ts");
/* harmony import */ var _components_socio_views_manejo_logs_manejo_logs_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/socio/views/manejo-logs/manejo-logs.component */ "./src/app/components/socio/views/manejo-logs/manejo-logs.component.ts");
/* harmony import */ var _components_socio_views_estadisticas_pedidos_estadisticas_pedidos_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component */ "./src/app/components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component.ts");
/* harmony import */ var _components_socio_views_estadisticas_mesas_estadisticas_mesas_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/socio/views/estadisticas-mesas/estadisticas-mesas.component */ "./src/app/components/socio/views/estadisticas-mesas/estadisticas-mesas.component.ts");

































const routes = [
    { path: '', component: _components_all_views_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_22__["RedirectComponent"] },
    { path: 'b', component: _components_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_27__["BienvenidaComponent"] },
    { path: 'app', component: _components_all_views_main_general_main_general_component__WEBPACK_IMPORTED_MODULE_9__["MainGeneralComponent"],
        children: [
            { path: 'login', component: _components_all_views_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
            { path: 'register', component: _components_all_views_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] }
        ] },
    { path: 'socio', component: _components_socio_views_main_socio_main_socio_component__WEBPACK_IMPORTED_MODULE_3__["MainSocioComponent"],
        children: [
            { path: '', component: _components_socio_views_home_socio_home_socio_component__WEBPACK_IMPORTED_MODULE_4__["HomeSocioComponent"] },
            { path: 'tables', component: _components_socio_views_manage_tables_admin_manage_tables_admin_component__WEBPACK_IMPORTED_MODULE_24__["ManageTablesAdminComponent"] },
            { path: 'orders', component: _components_socio_views_manage_orders_admin_manage_orders_admin_component__WEBPACK_IMPORTED_MODULE_23__["ManageOrdersAdminComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
            { path: 'products', component: _components_socio_views_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_28__["ManageProductsComponent"] },
            { path: 'surveys', component: _components_socio_views_survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_26__["SurveyTableComponent"] },
            { path: 'usuarios', component: _components_socio_views_manage_usr_manage_usr_component__WEBPACK_IMPORTED_MODULE_29__["ManageUsrComponent"] },
            { path: 'logs', component: _components_socio_views_manejo_logs_manejo_logs_component__WEBPACK_IMPORTED_MODULE_30__["ManejoLogsComponent"] },
            { path: 'estPedidos', component: _components_socio_views_estadisticas_pedidos_estadisticas_pedidos_component__WEBPACK_IMPORTED_MODULE_31__["EstadisticasPedidosComponent"] },
            { path: 'estMesas', component: _components_socio_views_estadisticas_mesas_estadisticas_mesas_component__WEBPACK_IMPORTED_MODULE_32__["EstadisticasMesasComponent"] },
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'mozo', component: _components_mozo_views_main_mozo_main_mozo_component__WEBPACK_IMPORTED_MODULE_5__["MainMozoComponent"],
        children: [
            { path: '', component: _components_mozo_views_home_mozo_home_mozo_component__WEBPACK_IMPORTED_MODULE_6__["HomeMozoComponent"] },
            { path: 'tables', component: _components_mozo_views_manage_tables_manage_tables_component__WEBPACK_IMPORTED_MODULE_14__["ManageTablesComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'cervecero', component: _components_cervecero_views_main_cervecero_main_cervecero_component__WEBPACK_IMPORTED_MODULE_15__["MainCerveceroComponent"],
        children: [
            { path: '', component: _components_cervecero_views_home_cervecero_home_cervecero_component__WEBPACK_IMPORTED_MODULE_16__["HomeCerveceroComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
            { path: 'productos', component: _components_socio_views_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_28__["ManageProductsComponent"] },
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'cocinero', component: _components_cocinero_views_main_cocinero_main_cocinero_component__WEBPACK_IMPORTED_MODULE_17__["MainCocineroComponent"],
        children: [
            { path: '', component: _components_cocinero_views_home_cocinero_home_cocinero_component__WEBPACK_IMPORTED_MODULE_18__["HomeCocineroComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
            { path: 'productos', component: _components_socio_views_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_28__["ManageProductsComponent"] },
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'bartender', component: _components_bartender_views_main_bartender_main_bartender_component__WEBPACK_IMPORTED_MODULE_19__["MainBartenderComponent"],
        children: [
            { path: '', component: _components_bartender_views_home_bartender_home_bartender_component__WEBPACK_IMPORTED_MODULE_20__["HomeBartenderComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
            { path: 'productos', component: _components_socio_views_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_28__["ManageProductsComponent"] },
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'cliente', component: _components_cliente_views_main_cliente_main_cliente_component__WEBPACK_IMPORTED_MODULE_11__["MainClienteComponent"],
        children: [
            { path: '', component: _components_cliente_views_home_cliente_home_cliente_component__WEBPACK_IMPORTED_MODULE_12__["HomeClienteComponent"] },
            { path: 'buscar', component: _components_cliente_views_search_order_search_order_component__WEBPACK_IMPORTED_MODULE_21__["SearchOrderComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: '**', component: _components_all_views_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Comanda';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_socio_views_main_socio_main_socio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/socio/views/main-socio/main-socio.component */ "./src/app/components/socio/views/main-socio/main-socio.component.ts");
/* harmony import */ var _components_socio_views_home_socio_home_socio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/socio/views/home-socio/home-socio.component */ "./src/app/components/socio/views/home-socio/home-socio.component.ts");
/* harmony import */ var _components_mozo_views_main_mozo_main_mozo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/mozo/views/main-mozo/main-mozo.component */ "./src/app/components/mozo/views/main-mozo/main-mozo.component.ts");
/* harmony import */ var _components_mozo_views_home_mozo_home_mozo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mozo/views/home-mozo/home-mozo.component */ "./src/app/components/mozo/views/home-mozo/home-mozo.component.ts");
/* harmony import */ var _components_all_views_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/all/views/login/login.component */ "./src/app/components/all/views/login/login.component.ts");
/* harmony import */ var _components_all_views_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/all/views/register/register.component */ "./src/app/components/all/views/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_all_views_main_general_main_general_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/all/views/main-general/main-general.component */ "./src/app/components/all/views/main-general/main-general.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_all_views_error_error_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/all/views/error/error.component */ "./src/app/components/all/views/error/error.component.ts");
/* harmony import */ var _components_cliente_views_home_cliente_home_cliente_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cliente/views/home-cliente/home-cliente.component */ "./src/app/components/cliente/views/home-cliente/home-cliente.component.ts");
/* harmony import */ var _components_cliente_views_main_cliente_main_cliente_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/cliente/views/main-cliente/main-cliente.component */ "./src/app/components/cliente/views/main-cliente/main-cliente.component.ts");
/* harmony import */ var _components_all_main_food_card_food_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/all/main/food-card/food-card.component */ "./src/app/components/all/main/food-card/food-card.component.ts");
/* harmony import */ var _components_all_main_sidebar_option_sidebar_option_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/all/main/sidebar-option/sidebar-option.component */ "./src/app/components/all/main/sidebar-option/sidebar-option.component.ts");
/* harmony import */ var _components_all_main_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/all/main/order-list/order-list.component */ "./src/app/components/all/main/order-list/order-list.component.ts");
/* harmony import */ var _components_mozo_main_select_order_select_order_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/mozo/main/select-order/select-order.component */ "./src/app/components/mozo/main/select-order/select-order.component.ts");
/* harmony import */ var _components_mozo_views_manage_tables_manage_tables_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/mozo/views/manage-tables/manage-tables.component */ "./src/app/components/mozo/views/manage-tables/manage-tables.component.ts");
/* harmony import */ var _components_all_main_table_card_table_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/all/main/table-card/table-card.component */ "./src/app/components/all/main/table-card/table-card.component.ts");
/* harmony import */ var _components_cocinero_views_main_cocinero_main_cocinero_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/cocinero/views/main-cocinero/main-cocinero.component */ "./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.ts");
/* harmony import */ var _components_cocinero_views_home_cocinero_home_cocinero_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/cocinero/views/home-cocinero/home-cocinero.component */ "./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.ts");
/* harmony import */ var _components_bartender_views_home_bartender_home_bartender_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/bartender/views/home-bartender/home-bartender.component */ "./src/app/components/bartender/views/home-bartender/home-bartender.component.ts");
/* harmony import */ var _components_bartender_views_main_bartender_main_bartender_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/bartender/views/main-bartender/main-bartender.component */ "./src/app/components/bartender/views/main-bartender/main-bartender.component.ts");
/* harmony import */ var _components_cervecero_views_main_cervecero_main_cervecero_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/cervecero/views/main-cervecero/main-cervecero.component */ "./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.ts");
/* harmony import */ var _components_cervecero_views_home_cervecero_home_cervecero_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/cervecero/views/home-cervecero/home-cervecero.component */ "./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.ts");
/* harmony import */ var _components_all_main_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/all/main/work-order/work-order.component */ "./src/app/components/all/main/work-order/work-order.component.ts");
/* harmony import */ var _pipes_timeleft_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pipes/timeleft.pipe */ "./src/app/pipes/timeleft.pipe.ts");
/* harmony import */ var _pipes_table_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/table.pipe */ "./src/app/pipes/table.pipe.ts");
/* harmony import */ var _components_cliente_views_search_order_search_order_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/cliente/views/search-order/search-order.component */ "./src/app/components/cliente/views/search-order/search-order.component.ts");
/* harmony import */ var _components_all_main_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/all/main/spinner/spinner.component */ "./src/app/components/all/main/spinner/spinner.component.ts");
/* harmony import */ var _components_all_views_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/all/views/redirect/redirect.component */ "./src/app/components/all/views/redirect/redirect.component.ts");
/* harmony import */ var _components_socio_views_manage_tables_admin_manage_tables_admin_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/socio/views/manage-tables-admin/manage-tables-admin.component */ "./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.ts");
/* harmony import */ var _components_socio_views_manage_orders_admin_manage_orders_admin_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/socio/views/manage-orders-admin/manage-orders-admin.component */ "./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.ts");
/* harmony import */ var _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/all/views/profile/profile.component */ "./src/app/components/all/views/profile/profile.component.ts");
/* harmony import */ var _components_all_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/all/main/footer/footer.component */ "./src/app/components/all/main/footer/footer.component.ts");
/* harmony import */ var _components_socio_views_survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/socio/views/survey-table/survey-table.component */ "./src/app/components/socio/views/survey-table/survey-table.component.ts");
/* harmony import */ var _directives_survey_average_directive__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./directives/survey-average.directive */ "./src/app/directives/survey-average.directive.ts");
/* harmony import */ var _directives_survey_comment_directive__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./directives/survey-comment.directive */ "./src/app/directives/survey-comment.directive.ts");
/* harmony import */ var _pipes_neat_date_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pipes/neat-date.pipe */ "./src/app/pipes/neat-date.pipe.ts");
/* harmony import */ var _directives_is_prod_directive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./directives/is-prod.directive */ "./src/app/directives/is-prod.directive.ts");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/fesm2015/ngx-captcha.js");
/* harmony import */ var _components_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/bienvenida/bienvenida.component */ "./src/app/components/bienvenida/bienvenida.component.ts");
/* harmony import */ var _pipes_sort_pipe_pipe__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pipes/sort-pipe.pipe */ "./src/app/pipes/sort-pipe.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_all_main_admin_productos_admin_productos_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/all/main/admin-productos/admin-productos.component */ "./src/app/components/all/main/admin-productos/admin-productos.component.ts");
/* harmony import */ var _components_socio_views_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/socio/views/manage-products/manage-products.component */ "./src/app/components/socio/views/manage-products/manage-products.component.ts");
/* harmony import */ var _components_socio_views_manage_usr_manage_usr_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/socio/views/manage-usr/manage-usr.component */ "./src/app/components/socio/views/manage-usr/manage-usr.component.ts");
/* harmony import */ var _components_socio_views_manejo_logs_manejo_logs_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/socio/views/manejo-logs/manejo-logs.component */ "./src/app/components/socio/views/manejo-logs/manejo-logs.component.ts");
/* harmony import */ var _components_socio_views_estadisticas_pedidos_estadisticas_pedidos_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component */ "./src/app/components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component.ts");
/* harmony import */ var _components_socio_views_estadisticas_mesas_estadisticas_mesas_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/socio/views/estadisticas-mesas/estadisticas-mesas.component */ "./src/app/components/socio/views/estadisticas-mesas/estadisticas-mesas.component.ts");





























































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _components_socio_views_main_socio_main_socio_component__WEBPACK_IMPORTED_MODULE_12__["MainSocioComponent"],
            _components_socio_views_home_socio_home_socio_component__WEBPACK_IMPORTED_MODULE_13__["HomeSocioComponent"],
            _components_mozo_views_main_mozo_main_mozo_component__WEBPACK_IMPORTED_MODULE_14__["MainMozoComponent"],
            _components_mozo_views_home_mozo_home_mozo_component__WEBPACK_IMPORTED_MODULE_15__["HomeMozoComponent"],
            _components_all_views_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _components_all_views_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
            _components_all_views_main_general_main_general_component__WEBPACK_IMPORTED_MODULE_19__["MainGeneralComponent"],
            _components_all_views_error_error_component__WEBPACK_IMPORTED_MODULE_21__["ErrorComponent"],
            _components_cliente_views_home_cliente_home_cliente_component__WEBPACK_IMPORTED_MODULE_22__["HomeClienteComponent"],
            _components_cliente_views_main_cliente_main_cliente_component__WEBPACK_IMPORTED_MODULE_23__["MainClienteComponent"],
            _components_all_main_food_card_food_card_component__WEBPACK_IMPORTED_MODULE_24__["FoodCardComponent"],
            _components_all_main_sidebar_option_sidebar_option_component__WEBPACK_IMPORTED_MODULE_25__["SidebarOptionComponent"],
            _components_all_main_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_26__["OrderListComponent"],
            _components_mozo_main_select_order_select_order_component__WEBPACK_IMPORTED_MODULE_27__["SelectOrderComponent"],
            _components_mozo_views_manage_tables_manage_tables_component__WEBPACK_IMPORTED_MODULE_28__["ManageTablesComponent"],
            _components_all_main_table_card_table_card_component__WEBPACK_IMPORTED_MODULE_29__["TableCardComponent"],
            _components_cocinero_views_main_cocinero_main_cocinero_component__WEBPACK_IMPORTED_MODULE_30__["MainCocineroComponent"],
            _components_cocinero_views_home_cocinero_home_cocinero_component__WEBPACK_IMPORTED_MODULE_31__["HomeCocineroComponent"],
            _components_bartender_views_home_bartender_home_bartender_component__WEBPACK_IMPORTED_MODULE_32__["HomeBartenderComponent"],
            _components_bartender_views_main_bartender_main_bartender_component__WEBPACK_IMPORTED_MODULE_33__["MainBartenderComponent"],
            _components_cervecero_views_main_cervecero_main_cervecero_component__WEBPACK_IMPORTED_MODULE_34__["MainCerveceroComponent"],
            _components_cervecero_views_home_cervecero_home_cervecero_component__WEBPACK_IMPORTED_MODULE_35__["HomeCerveceroComponent"],
            _components_all_main_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_36__["WorkOrderComponent"],
            _pipes_timeleft_pipe__WEBPACK_IMPORTED_MODULE_37__["TimeleftPipe"],
            _pipes_table_pipe__WEBPACK_IMPORTED_MODULE_38__["TablePipe"],
            _components_cliente_views_search_order_search_order_component__WEBPACK_IMPORTED_MODULE_39__["SearchOrderComponent"],
            _components_all_main_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_40__["SpinnerComponent"],
            _components_all_views_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_41__["RedirectComponent"],
            _components_socio_views_manage_tables_admin_manage_tables_admin_component__WEBPACK_IMPORTED_MODULE_42__["ManageTablesAdminComponent"],
            _components_socio_views_manage_orders_admin_manage_orders_admin_component__WEBPACK_IMPORTED_MODULE_43__["ManageOrdersAdminComponent"],
            _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_44__["ProfileComponent"],
            _components_all_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__["FooterComponent"],
            _components_socio_views_survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_46__["SurveyTableComponent"],
            _directives_survey_average_directive__WEBPACK_IMPORTED_MODULE_47__["SurveyAverageDirective"],
            _directives_survey_comment_directive__WEBPACK_IMPORTED_MODULE_48__["SurveyCommentDirective"],
            _pipes_neat_date_pipe__WEBPACK_IMPORTED_MODULE_49__["NeatDatePipe"],
            _pipes_sort_pipe_pipe__WEBPACK_IMPORTED_MODULE_53__["SortPipePipe"],
            _directives_is_prod_directive__WEBPACK_IMPORTED_MODULE_50__["IsProdDirective"],
            _components_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_52__["BienvenidaComponent"],
            _components_all_main_admin_productos_admin_productos_component__WEBPACK_IMPORTED_MODULE_55__["AdminProductosComponent"],
            _components_socio_views_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_56__["ManageProductsComponent"],
            _components_socio_views_manage_usr_manage_usr_component__WEBPACK_IMPORTED_MODULE_57__["ManageUsrComponent"],
            _components_socio_views_manejo_logs_manejo_logs_component__WEBPACK_IMPORTED_MODULE_58__["ManejoLogsComponent"],
            _components_socio_views_estadisticas_pedidos_estadisticas_pedidos_component__WEBPACK_IMPORTED_MODULE_59__["EstadisticasPedidosComponent"],
            _components_socio_views_estadisticas_mesas_estadisticas_mesas_component__WEBPACK_IMPORTED_MODULE_60__["EstadisticasMesasComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_54__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["FirebaseConfig"]),
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctionsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_captcha__WEBPACK_IMPORTED_MODULE_51__["NgxCaptchaModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                timeOut: 2300,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true
            })
        ],
        providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        exports: [_directives_is_prod_directive__WEBPACK_IMPORTED_MODULE_50__["IsProdDirective"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/classes/helpers/common-helper.ts":
/*!**************************************************!*\
  !*** ./src/app/classes/helpers/common-helper.ts ***!
  \**************************************************/
/*! exports provided: CommonHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHelper", function() { return CommonHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CommonHelper {
    static ConvertToObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    static ConvertDate(date) {
        let firstPart = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        let secondPart = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return firstPart + ' ' + secondPart;
    }
    static GenerateProfileImageName(user) {
        return user.name.trim().toUpperCase()
            + user.lastname.trim().toUpperCase()
            + user.role.charAt(0).toUpperCase()
            + Math.floor((Math.random() * 10000) + 1);
    }
}


/***/ }),

/***/ "./src/app/components/all/main/admin-productos/admin-productos.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/all/main/admin-productos/admin-productos.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vYWRtaW4tcHJvZHVjdG9zL2FkbWluLXByb2R1Y3Rvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/all/main/admin-productos/admin-productos.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/all/main/admin-productos/admin-productos.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductosComponent", function() { return AdminProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_services_firebase_producto_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/producto-service.service */ "./src/app/services/firebase/producto-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/firebase/logging.service */ "./src/app/services/firebase/logging.service.ts");
/* harmony import */ var src_app_models_logging__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/logging */ "./src/app/models/logging.ts");











let AdminProductosComponent = class AdminProductosComponent {
    // tslint:disable-next-line: max-line-length
    constructor(productService, authService, movimientoService) {
        this.productService = productService;
        this.authService = authService;
        this.movimientoService = movimientoService;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.role = "null";
    }
    ngOnInit() {
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            productDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            typeComida: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typeBebida: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typeAlcohol: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typePostre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typeCeliaco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typeVegano: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            productCook: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
        this.products = new Array();
        this.products = this.productService.listado;
        this.ClearFilters();
        this.haySeleccionado = false;
        this.productoSeleccionado = null;
    }
    laFuncion() {
        this.products = new Array();
        this.products = this.productService.listado;
        this.ClearFilters();
    }
    showProd() {
        if (this.role === 'socio') {
            this.showingProducts = this.products;
        }
    }
    addProduct() {
        let product;
        let array;
        array = this.traerFoodTypes();
        this.traerCook();
        product = src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["Product"].Create('', this.productForm.value.productName, '', Number.parseFloat(this.productForm.value.productPrice), array, this.productForm.value.productCook, this.productForm.value.productDescription);
        this.productService.persistirProducto(product, this.file).then(value => {
            if (value) {
                this.Cancel();
            }
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} dió de alta el producto ${product.name}`;
                this.movimientoService.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_10__["TargetMovimiento"].producto, src_app_models_logging__WEBPACK_IMPORTED_MODULE_10__["TipoMovimiento"].alta, mensaje);
            });
        });
    }
    onFileChanged(event) {
        this.file = event.target.files[0];
    }
    traerFoodTypes() {
        let retorno = new Array();
        if (this.productForm.value.typeComida) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["FoodType"].comida);
        }
        if (this.productForm.value.typeBebida) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["FoodType"].bebida);
        }
        if (this.productForm.value.typePostre) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["FoodType"].postre);
        }
        if (this.productForm.value.typeAlcohol) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["FoodType"].alcohol);
        }
        if (this.productForm.value.typeCeliaco) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["FoodType"].celiaco);
        }
        if (this.productForm.value.typeVegano) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["FoodType"].vegano);
        }
        return retorno;
    }
    traerCook() {
        if (this.role == null) {
            this.authService.GetCurrentUser().then(user => {
                this.role = user.role;
                if (this.role !== "socio") {
                    this.productForm.controls["productCook"].setValue(this.role);
                }
            });
        }
        else {
            if (this.role != "socio") {
                this.productForm.controls["productCook"].setValue(this.role);
            }
        }
    }
    changeState(uid, state) {
        this.productService.GetProductByID(uid).then(prod => {
            if (state === "Pendiente") {
                this.productService.updateState(uid, "Deshabilitado");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} deshabilitó el producto ${prod.name}`;
                    this.movimientoService.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_10__["TargetMovimiento"].producto, src_app_models_logging__WEBPACK_IMPORTED_MODULE_10__["TipoMovimiento"].deshabilitacion, mensaje);
                });
                this.laFuncion();
            }
            if (state === "Deshabilitado") {
                this.productService.updateState(uid, "Pendiente");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} habilitó el producto ${prod.name}`;
                    this.movimientoService.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_10__["TargetMovimiento"].producto, src_app_models_logging__WEBPACK_IMPORTED_MODULE_10__["TipoMovimiento"].habilitacion, mensaje);
                });
            }
        });
    }
    editarProducto(producto) {
        this.productoSeleccionado = producto;
        this.haySeleccionado = true;
        this.productForm.controls["productName"].setValue(producto.name);
        this.productForm.controls["productPrice"].setValue(producto.price);
        this.productForm.controls["productCook"].setValue(producto.cook);
        this.productForm.controls["productDescription"].setValue(producto.description);
        this.traerTipos(producto.foodTypes);
    }
    updateProduct() {
        let producto;
        let array;
        array = this.traerFoodTypes();
        this.productoSeleccionado.name = this.productForm.value.productName;
        this.productoSeleccionado.price = this.productForm.value.productPrice;
        this.productoSeleccionado.foodTypes = array;
        this.productoSeleccionado.cook = this.productForm.value.productCook;
        this.productoSeleccionado.description = this.productForm.value.productDescription;
        this.productService
            .updateProd(this.productoSeleccionado, this.file)
            .then(() => {
            this.haySeleccionado = false;
            this.file = null;
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} modificó el producto ${this.productoSeleccionado.name}`;
                this.movimientoService.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_10__["TargetMovimiento"].producto, src_app_models_logging__WEBPACK_IMPORTED_MODULE_10__["TipoMovimiento"].modificacion, mensaje);
            });
            //this.productoSeleccionado = null;
        });
    }
    traerTipos(tipos) {
        tipos.forEach(tipo => {
            switch (tipo) {
                case "comida":
                    this.productForm.controls.typeComida.setValue(true);
                    break;
                case "bebida":
                    this.productForm.controls.typeBebida.setValue(true);
                    break;
                case "alcohol":
                    this.productForm.controls.typeAlcohol.setValue(true);
                    break;
                case "postre":
                    this.productForm.controls["typePostre"].setValue(true);
                    break;
                case "celiaco":
                    this.productForm.controls["typeCeliaco"].setValue(true);
                    break;
                case "vegano":
                    this.productForm.controls["typeVegano"].setValue(true);
                    break;
            }
        });
    }
    // ##### FILTER FUNCTIONS #####
    Filter(type) {
        this.showingProducts = this.products.filter(element => {
            //if (element.cook === this.role || this.role === Role.socio) {
            if (element.IsFoodType(type)) {
                return element;
            }
            // }
        });
    }
    ClearFilters() {
        this.authService.GetCurrentUser().then(user => {
            this.role = user.role;
            this.showingProducts = this.productService
                .GetAll2()
                .valueChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(products => {
                return products.filter(product => {
                    product = Object.assign(new src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["Product"](), product);
                    if (product["cook"] === this.role || this.role === src_app_models_user__WEBPACK_IMPORTED_MODULE_7__["Role"].socio) {
                        return product;
                    }
                });
            }));
            this.productoSeleccionado = null;
            this.haySeleccionado = false;
            this.file = null;
        });
    }
    Cancel() {
        this.productForm.reset();
        this.onReset.next();
        this.laFuncion();
    }
};
AdminProductosComponent.ctorParameters = () => [
    { type: src_app_services_firebase_producto_service_service__WEBPACK_IMPORTED_MODULE_3__["ProductoServiceService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_9__["LoggingService"] }
];
AdminProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-admin-productos",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-productos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/admin-productos/admin-productos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-productos.component.scss */ "./src/app/components/all/main/admin-productos/admin-productos.component.scss")).default]
    })
], AdminProductosComponent);



/***/ }),

/***/ "./src/app/components/all/main/food-card/food-card.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/all/main/food-card/food-card.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-shadow {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.img-shadow:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.price {\n  margin-top: 0.5rem;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nimg {\n  height: 100px;\n  width: 100px;\n  border-radius: 100%;\n  border: solid 3px lightseagreen;\n  cursor: pointer;\n}\n\n.card-title {\n  font-weight: bold;\n}\n\n.ordered {\n  color: green;\n}\n\n.quant {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9mb29kLWNhcmQvZm9vZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL2Zvb2QtY2FyZC9mb29kLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3RUFBQTtFQUNGLHFEQUFBO0FDQ0Y7O0FERUE7RUFDSSw0RUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5Q0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL2Zvb2QtY2FyZC9mb29kLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbn1cblxuLmltZy1zaGFkb3c6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XG59XG5cbi5wcmljZSB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggbGlnaHRzZWFncmVlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9yZGVyZWQge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLnF1YW50IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIuaW1nLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG59XG5cbi5pbWctc2hhZG93OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn1cblxuLnByaWNlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDNweCBsaWdodHNlYWdyZWVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vcmRlcmVkIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucXVhbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/all/main/food-card/food-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/all/main/food-card/food-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: FoodCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCardComponent", function() { return FoodCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FoodCardComponent = class FoodCardComponent {
    constructor() {
        this.added = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ordered = false;
        this.quantity = 0;
    }
    ngOnInit() {
        this.eventSubscriptions = this.resetEvent.subscribe(() => {
            this.ordered = false;
            this.quantity = 0;
        });
    }
    ngOnDestroy() {
        this.eventSubscriptions.unsubscribe();
    }
    AddToOrder(prod) {
        this.ordered = true;
        this.quantity++;
        this.added.emit(prod);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FoodCardComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FoodCardComponent.prototype, "resetEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FoodCardComponent.prototype, "added", void 0);
FoodCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-food-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/food-card/food-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-card.component.scss */ "./src/app/components/all/main/food-card/food-card.component.scss")).default]
    })
], FoodCardComponent);



/***/ }),

/***/ "./src/app/components/all/main/footer/footer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/all/main/footer/footer.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  width: 100%;\n  background: #333;\n  color: white;\n  font-size: 0.9rem;\n  padding: 0.3rem 0 0.3rem 0;\n}\n\n.footer-shadow {\n  box-shadow: 2px 2px 31px 0px rgba(0, 0, 0, 0.96);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBR0ksZ0RBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIHBhZGRpbmc6IC4zcmVtIDAgLjNyZW0gMDtcbn1cblxuLmZvb3Rlci1zaGFkb3cge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAzMXB4IDBweCByZ2JhKDAsMCwwLDAuOTYpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAzMXB4IDBweCByZ2JhKDAsMCwwLDAuOTYpO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMzFweCAwcHggcmdiYSgwLDAsMCwwLjk2KTtcbn0iLCIuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmc6IDAuM3JlbSAwIDAuM3JlbSAwO1xufVxuXG4uZm9vdGVyLXNoYWRvdyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAzMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuOTYpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMzFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjk2KTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuOTYpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/all/main/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/all/main/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/all/main/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/all/main/order-list/order-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/all/main/order-list/order-list.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".order {\n  cursor: pointer;\n}\n\ntable {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\n\ntable th {\n  border: none;\n  text-align: center;\n}\n\ntable tr {\n  text-align: center;\n}\n\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vb3JkZXItbGlzdC9vcmRlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBREdBO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg3Nyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIHRoIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIHRyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmFyaWFsIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLm9yZGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NzcpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxudGFibGUgdGgge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRhYmxlIHRyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXJpYWwge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/all/main/order-list/order-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/all/main/order-list/order-list.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let OrderListComponent = class OrderListComponent {
    constructor(orderService, authService) {
        this.orderService = orderService;
        this.authService = authService;
        this.orderSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.solomozo = false;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(u => { if (u.role === src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].mozo) {
            this.solomozo = true;
        } });
        const cancelado = "Cancelado";
        const pagado = "Pagado";
        switch (this.role) {
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].mozo:
                this.authService
                    .GetCurrentUser()
                    .then(user => (this.me = user))
                    .then(() => {
                    this.orders = this.orderService
                        .GetAllByWaiterOrderByTime(this.me.email)
                        .valueChanges()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
                        return orders.filter(order => {
                            order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), order);
                            if (order["state"] != cancelado) {
                                this.showingOrders = false;
                                return order;
                            }
                        });
                    }));
                });
                break;
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cervecero:
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].bartender:
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cocinero:
                const cook = this.role;
                console.log(cook);
                this.orders = this.orderService.GetAllByCook(cook).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
                    return orders.filter(order => {
                        order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), order);
                        console.log(order["state"]);
                        if (order["state"] != cancelado && order["state"] != "Verificar") {
                            this.showingOrders = false;
                            return order;
                        }
                    });
                }));
                break;
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].socio:
                this.orders = this.orderService
                    .GetAllOrderByTime()
                    .valueChanges()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
                    return orders.filter(order => {
                        order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), order);
                        if (order["state"] != cancelado) {
                            this.showingOrders = false;
                            return order;
                        }
                    });
                }));
                break;
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cliente:
                this.authService
                    .GetCurrentUser()
                    .then(user => (this.me = user))
                    .then(() => {
                    this.orders = this.orderService
                        .GetAllByWaiterOrderByTime2(this.me.email)
                        .valueChanges()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
                        return orders.filter(order => {
                            order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), order);
                            var hasRole = false;
                            if (order["state"] != pagado &&
                                order["state"] != cancelado) {
                                hasRole = true;
                                this.showingOrders = false;
                            }
                            if (hasRole)
                                return order;
                        });
                    }));
                });
        }
    }
    SelectOrder(order) {
        this.orderSelected.emit(order);
    }
    mozoCancelar(order) {
        order.state = src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["OrderState"].cancelled;
        this.orderService.Update(order);
    }
    mozoAprueba(order) {
        order.state = src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["OrderState"].pending;
        this.orderService.Update(order);
    }
};
OrderListComponent.ctorParameters = () => [
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderListComponent.prototype, "role", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OrderListComponent.prototype, "orderSelected", void 0);
OrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-order-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/order-list/order-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-list.component.scss */ "./src/app/components/all/main/order-list/order-list.component.scss")).default]
    })
], OrderListComponent);



/***/ }),

/***/ "./src/app/components/all/main/sidebar-option/sidebar-option.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/all/main/sidebar-option/sidebar-option.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".option {\n  border-color: blue;\n  border-right: none;\n  border-left: none;\n  border-bottom: none;\n  border-radius: 0;\n  font-size: 1rem;\n}\n\n.last {\n  border-bottom: 1px solid blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9zaWRlYmFyLW9wdGlvbi9zaWRlYmFyLW9wdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9zaWRlYmFyLW9wdGlvbi9zaWRlYmFyLW9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9zaWRlYmFyLW9wdGlvbi9zaWRlYmFyLW9wdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb24ge1xuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xufVxuXG4ubGFzdCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsdWU7XG59IiwiLm9wdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubGFzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/all/main/sidebar-option/sidebar-option.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/all/main/sidebar-option/sidebar-option.component.ts ***!
  \********************************************************************************/
/*! exports provided: SidebarOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOptionComponent", function() { return SidebarOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase/logging.service */ "./src/app/services/firebase/logging.service.ts");
/* harmony import */ var src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/logging */ "./src/app/models/logging.ts");






let SidebarOptionComponent = class SidebarOptionComponent {
    constructor(authService, router, lS) {
        this.authService = authService;
        this.router = router;
        this.lS = lS;
    }
    ngOnInit() {
    }
    LogOut() {
        this.authService.GetCurrentUser().then(user => {
            const msj = `El usuario ${user.email} finalizo sesion `;
            console.log(msj);
            this.lS.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TargetMovimiento"].usuario, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TipoMovimiento"].egreso, msj);
        });
        this.authService.LogoutEmail();
        this.router.navigate(['/app/login']);
    }
};
SidebarOptionComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_4__["LoggingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarOptionComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarOptionComponent.prototype, "link", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarOptionComponent.prototype, "lastOne", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarOptionComponent.prototype, "logOut", void 0);
SidebarOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-option',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar-option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/sidebar-option/sidebar-option.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar-option.component.scss */ "./src/app/components/all/main/sidebar-option/sidebar-option.component.scss")).default]
    })
], SidebarOptionComponent);



/***/ }),

/***/ "./src/app/components/all/main/spinner/spinner.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/all/main/spinner/spinner.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: 60px;\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG59IiwiaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/all/main/spinner/spinner.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/all/main/spinner/spinner.component.ts ***!
  \******************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/spinner/spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.scss */ "./src/app/components/all/main/spinner/spinner.component.scss")).default]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/app/components/all/main/table-card/table-card.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/all/main/table-card/table-card.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n  font-size: 2rem;\n}\n\n.card-title {\n  font-size: 1.5rem;\n}\n\n.green {\n  color: green;\n}\n\n.red {\n  color: red;\n}\n\n.orange {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi90YWJsZS1jYXJkL3RhYmxlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vdGFibGUtY2FyZC90YWJsZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vdGFibGUtY2FyZC90YWJsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZ3JlZW4ge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLnJlZCB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLm9yYW5nZSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbn0iLCIuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLm9yYW5nZSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/all/main/table-card/table-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/all/main/table-card/table-card.component.ts ***!
  \************************************************************************/
/*! exports provided: TableCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableCardComponent", function() { return TableCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/table */ "./src/app/models/table.ts");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/logging.service */ "./src/app/services/firebase/logging.service.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_models_logging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/logging */ "./src/app/models/logging.ts");








let TableCardComponent = class TableCardComponent {
    constructor(tableService, toastr, authService, movimientoService) {
        this.tableService = tableService;
        this.toastr = toastr;
        this.authService = authService;
        this.movimientoService = movimientoService;
    }
    ngOnInit() {
    }
    ChangeStatus(option) {
        let status;
        switch (option) {
            case 1:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].available;
                break;
            case 2:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].waitingOrder;
                break;
            case 3:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].eating;
                break;
            case 4:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].paying;
                break;
            case 5:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].closed;
                break;
            default:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].available;
                break;
        }
        this.tableService.UpdateStatus(this.table.tableID, status).then(() => {
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `${user.email} cambia el estado de la mesa ${this.table.tableID} a ${status}`;
                this.movimientoService.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_7__["TargetMovimiento"].mesa, src_app_models_logging__WEBPACK_IMPORTED_MODULE_7__["TipoMovimiento"].modificacion, mensaje);
            });
        })
            .then(() => {
            this.toastr.success('Se cambió el estado de la mesa.');
        })
            .catch(() => {
            this.toastr.error('Ha ocurrido un error al actualizar.');
        });
    }
};
TableCardComponent.ctorParameters = () => [
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_5__["LoggingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableCardComponent.prototype, "table", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableCardComponent.prototype, "isAdmin", void 0);
TableCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/table-card/table-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-card.component.scss */ "./src/app/components/all/main/table-card/table-card.component.scss")).default]
    })
], TableCardComponent);



/***/ }),

/***/ "./src/app/components/all/main/work-order/work-order.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/all/main/work-order/work-order.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("select {\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n\ninput {\n  text-align: center;\n}\n\ninput::-webkit-input-placeholder {\n  text-align: center;\n}\n\ninput::-moz-placeholder {\n  text-align: center;\n}\n\ninput::-ms-input-placeholder {\n  text-align: center;\n}\n\ninput::placeholder {\n  text-align: center;\n}\n\nh5 {\n  margin-top: 1rem;\n  font-weight: bold;\n}\n\n.or {\n  text-align: center;\n  margin: 0.5rem 0 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi93b3JrLW9yZGVyL3dvcmstb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vd29yay1vcmRlci93b3JrLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7T0FBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERkE7RUFDSSxrQkFBQTtBQ0NKOztBREZBO0VBQ0ksa0JBQUE7QUNDSjs7QURGQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL3dvcmstb3JkZXIvd29yay1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMDtcbn0iLCJzZWxlY3Qge1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn1cblxuaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDUge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/all/main/work-order/work-order.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/all/main/work-order/work-order.component.ts ***!
  \************************************************************************/
/*! exports provided: WorkOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderComponent", function() { return WorkOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/logging.service */ "./src/app/services/firebase/logging.service.ts");
/* harmony import */ var src_app_models_logging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/logging */ "./src/app/models/logging.ts");









let WorkOrderComponent = class WorkOrderComponent {
    constructor(authService, orderService, toastr, logService) {
        this.authService = authService;
        this.orderService = orderService;
        this.toastr = toastr;
        this.logService = logService;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(user => (this.me = user));
        this.itemsRol = new Array();
        setInterval(() => {
            if (this.order) {
                let now = new Date();
                this.remainingTime =
                    new Date(this.order.timeLeft).getTime() - now.getTime();
                ///-OJOACA//
                //   if (this.remainingTime < 0) {
                //     this.order.delayed =
                //       now.getTime() - new Date(this.order.timeLeft).getTime();
                //     this.orderService.Update(this.order);
                //	}
                ///-OJOACA//
            }
        }, 10);
    }
    ngOnChanges() {
        this.selectedItem = null;
        if (this.order !== null) {
            this.itemsRol = this.filtrarPorRol();
        }
    }
    IsPending() {
        let is = false;
        if (this.selectedItem.state === src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["FoodState"].pending) {
            is = true;
        }
        return is;
    }
    IsCooking() {
        let is = false;
        if (this.selectedItem.state == src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["FoodState"].preparing)
            is = true;
        return is;
    }
    IsAvailableForMe() {
        let available = false;
        if (this.selectedItem) {
            let myRole = this.me.role;
            if (this.selectedItem.cook == myRole &&
                this.selectedItem.state != src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["FoodState"].finished) {
                available = true;
            }
        }
        return available;
    }
    SelectItem(item) {
        this.selectedItem = item;
    }
    BeginCook(withTime) {
        if (withTime)
            this.AddMoreTime();
        // Add more time
        else
            this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), this.order);
        this.AssignToMe();
        this.selectedItem.state = src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["FoodState"].preparing;
        this.order.UpdateOrderState();
        this.orderService
            .Update(this.order)
            .then(() => {
            this.toastr.success("El pedido se actualizó con éxito", "Hecho!");
        })
            .catch(() => {
            this.toastr.error("Se ha producido un error.", "Error");
        });
    }
    ReadyToServe() {
        this.selectedItem.state = src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["FoodState"].finished;
        this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), this.order);
        this.order.UpdateOrderState();
        let mensaje = `El usuario ${this.me.email} (${this.me.role}) comenzó a preparar ${this.selectedItem.name} del pedido ${this.order.codeID}`;
        this.logService.persistirMovimiento(this.me, src_app_models_logging__WEBPACK_IMPORTED_MODULE_8__["TargetMovimiento"].pedido, src_app_models_logging__WEBPACK_IMPORTED_MODULE_8__["TipoMovimiento"].preparacion, mensaje);
        this.orderService
            .Update(this.order)
            .then(() => {
            this.toastr.success("El pedido se actualizó con éxito", "Hecho!");
        })
            .catch(() => {
            this.toastr.error("Se ha producido un error.", "Error");
        });
    }
    AssignToMe() {
        this.selectedItem.worker = this.me;
    }
    AddMoreTime() {
        this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), this.order);
        this.order.AddMinutes(this.addedTime);
        this.addedTime = null;
    }
    filtrarPorRol() {
        const resultado = new Array();
        this.order.items.forEach(element => {
            if (JSON.stringify(element.cook) === JSON.stringify(this.me.role)) {
                resultado.push(element);
            }
        });
        return resultado;
    }
};
WorkOrderComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WorkOrderComponent.prototype, "order", void 0);
WorkOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-work-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/work-order/work-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-order.component.scss */ "./src/app/components/all/main/work-order/work-order.component.scss")).default]
    })
], WorkOrderComponent);



/***/ }),

/***/ "./src/app/components/all/views/error/error.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/all/views/error/error.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/all/views/error/error.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/all/views/error/error.component.ts ***!
  \***************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ErrorComponent = class ErrorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ErrorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/components/all/views/error/error.component.scss")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/components/all/views/login/login.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/all/views/login/login.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("select {\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n\n.centrado {\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9hbGwvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7T0FBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7T0FBQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGwvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuXG4uY2VudHJhZG8ge1xuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufSIsInNlbGVjdCB7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuXG4uY2VudHJhZG8ge1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/all/views/login/login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/all/views/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firebase/logging.service */ "./src/app/services/firebase/logging.service.ts");
/* harmony import */ var src_app_models_logging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/logging */ "./src/app/models/logging.ts");








let LoginComponent = class LoginComponent {
    constructor(authService, toastr, userService, lS) {
        this.authService = authService;
        this.toastr = toastr;
        this.userService = userService;
        this.lS = lS;
        this.userOption = 'none';
        this.loading = false;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            chkHorario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            chkLunes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            captcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onSubmit() {
        this.loading = true;
        const usr = this.loginForm.get('email').value;
        const pass = this.loginForm.get('password').value;
        let restriccion = this.restriccionHoraria(this.loginForm.get('chkHorario').value);
        this.userService
            .GetUserByEmail(usr)
            .then(usuario => {
            console.log('esta en la base');
            if (!usuario.deleted && usuario.state === 'habilitado') {
                if (usuario.role === 'cliente' && !restriccion) {
                    this.toastr.info('El horario de atencion es de Miercoles a Domingo de 18:00 a 2:00');
                    setTimeout(() => {
                        this.loading = false;
                        this.loginForm.get('email').setValue('');
                        this.loginForm.get('password').setValue('');
                        this.loginForm.get('email').enable();
                        this.loginForm.get('password').enable();
                    }, 2000);
                }
                else {
                    this.authService.GetCurrentUser().then(user => {
                        const msj = `El usuario ${user.email} inicio sesion`;
                        this.lS.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_7__["TargetMovimiento"].usuario, src_app_models_logging__WEBPACK_IMPORTED_MODULE_7__["TipoMovimiento"].ingreso, msj);
                    });
                    this.authService
                        .LoginWithEmail(usr, pass)
                        .then(() => {
                        this.toastr.success('¡Bienvenido!');
                    })
                        .catch(() => {
                        console.log('no estaba auth asi que lo creo');
                        this.authService.RegisterWithEmailAdmin(usr);
                    });
                }
            }
            else {
                this.toastr.error('Usuario deshabilitado o inexistente');
            }
        })
            .catch(() => {
            this.toastr.error('Usuario y/o contraseña incorrecto.');
            this.loading = false;
        })
            .finally(() => {
            this.userOption = 'none';
            this.loginForm.get('email').disable();
            this.loginForm.get('password').disable();
        });
    }
    ue(u) {
        this.userOption = u;
        console.log('esta en la base', u);
        this.LoadUser();
    }
    LoadUser() {
        let isNull = false;
        switch (this.userOption) {
            case 'cliente1':
                this.loginForm.get('email').setValue('cliente1@gmail.com');
                break;
            case 'cliente2':
                this.loginForm.get('email').setValue('cliente2@gmail.com');
                break;
            case 'mozo':
                this.loginForm.get('email').setValue('mozo@gmail.com');
                break;
            case 'bartender':
                this.loginForm.get('email').setValue('bartender@gmail.com');
                break;
            case 'cervecero':
                this.loginForm.get('email').setValue('cervecero@gmail.com');
                break;
            case 'cocinero':
                this.loginForm.get('email').setValue('cocinero@gmail.com');
                break;
            case 'socio':
                this.loginForm.get('email').setValue('socio@gmail.com');
                break;
            default:
                this.loginForm.get('email').setValue('');
                this.loginForm.get('password').setValue('');
                isNull = true;
                break;
        }
        if (!isNull) {
            this.loginForm.get('password').setValue('password');
        }
    }
    restriccionHoraria(chk) {
        let retorno = true;
        const date = new Date();
        let day = date.getDay();
        const hour = date.getHours();
        const min = date.getMinutes();
        if (this.loginForm.get('chkLunes').value) {
            day = 1;
        }
        console.log('dia: ' + day);
        console.log('hora: ' + hour);
        console.log('minuto: ' + min);
        if (!chk || chk == null || this.loginForm.get('chkLunes').value) {
            if (day === 1 || day === 2) {
                retorno = false;
            }
            else if (hour >= 2 && hour <= 17) {
                retorno = false;
            }
        }
        console.log(this.loginForm.get('chkLunes').value);
        console.log(retorno);
        return retorno;
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_6__["LoggingService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/all/views/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/all/views/main-general/main-general.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/all/views/main-general/main-general.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".general-color {\n  background-color: #83f174;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9hbGwvdmlld3MvbWFpbi1nZW5lcmFsL21haW4tZ2VuZXJhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGwvdmlld3MvbWFpbi1nZW5lcmFsL21haW4tZ2VuZXJhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUhhO0FDRWpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGwvdmlld3MvbWFpbi1nZW5lcmFsL21haW4tZ2VuZXJhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRnZW5lcmFsUHJpbWFyeTogcmdiKDEzMSwgMjQxLCAxMTYpO1xuXG4uZ2VuZXJhbC1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdlbmVyYWxQcmltYXJ5O1xufSIsIi5nZW5lcmFsLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZjE3NDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/all/views/main-general/main-general.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/all/views/main-general/main-general.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MainGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGeneralComponent", function() { return MainGeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainGeneralComponent = class MainGeneralComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainGeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-general',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-general.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/main-general/main-general.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-general.component.scss */ "./src/app/components/all/views/main-general/main-general.component.scss")).default]
    })
], MainGeneralComponent);



/***/ }),

/***/ "./src/app/components/all/views/profile/profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/all/views/profile/profile.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: 150px;\n  width: 150px;\n  border-radius: 100%;\n  border: 1px solid #333;\n}\n\nh1 {\n  margin: 0 auto;\n  position: absolute;\n  top: 30%;\n}\n\n.tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9hbGwvdmlld3MvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC92aWV3cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xufVxuXG5oMSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xufVxuXG4udHByaW5jaXBhbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udDogYm9sZDtcbn0iLCJpbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG59XG5cbi50cHJpbmNpcGFsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/all/views/profile/profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/all/views/profile/profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firestorage_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/firebase/logging.service */ "./src/app/services/firebase/logging.service.ts");









let ProfileComponent = class ProfileComponent {
    constructor(userService, fileService, authService, toastr, movimientoService) {
        this.userService = userService;
        this.fileService = fileService;
        this.authService = authService;
        this.toastr = toastr;
        this.movimientoService = movimientoService;
        this.isAdmin = false;
        this.isLoaded = false;
        this.selectedFile = null;
        this.listaUsuarios = new Array();
        this.usuario = "none";
        this.userService.GetAll_InArray().then(usuarios => {
            usuarios.forEach(element => {
                this.listaUsuarios.push(element.email);
            });
        });
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(usr => {
            this.user = usr;
            if (this.user.email === "socio@gmail.com") {
                this.isAdmin = true;
            }
        });
        this.UpdateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        });
    }
    OnFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.isLoaded = true;
        this.toastr.success("Seleccionaste el archivo " + this.selectedFile.name);
    }
    Upload() {
        let name = src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].GenerateProfileImageName(this.user);
        console.log(name);
        this.fileService
            .Upload(name, this.selectedFile)
            .then(() => {
            setTimeout(() => {
                this.ChangeProfilePic(name);
            }, 1000);
        })
            .catch(() => this.toastr.error("Se ha producido un error al cargar la imagen."));
    }
    completarUsuario($event) {
        console.log("SI!", $event);
        this.userService.GetAll_InArray().then(u => {
            u.forEach(e => {
                if (e.email === $event) {
                    this.UpdateForm.get("nombre").setValue(e.name);
                    this.e = e.email;
                    this.UpdateForm.get("apellido").setValue(e.lastname);
                }
            });
        });
    }
    onSubmit() {
        this.userService.actualizarUsuario(this.e, this.UpdateForm.value.nombre, this.UpdateForm.value.apellido);
        this.vaciarForm();
    }
    vaciarForm() {
        this.UpdateForm.get("nombre").setValue("");
        this.UpdateForm.get("apellido").setValue("");
    }
    ChangeProfilePic(imgName) {
        this.fileService.GetImageURL(imgName).then(img => {
            this.userService.ModifyProfileImage(this.user.email, img).then(() => {
                this.toastr.success("Imagen cargada con éxito.");
                setTimeout(() => {
                    //location.reload();
                    location.assign("http://localhost:4200/");
                }, 1000);
            });
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: src_app_services_firestorage_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_8__["LoggingService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/all/views/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/all/views/redirect/redirect.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/all/views/redirect/redirect.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL3JlZGlyZWN0L3JlZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/all/views/redirect/redirect.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/all/views/redirect/redirect.component.ts ***!
  \*********************************************************************/
/*! exports provided: RedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectComponent", function() { return RedirectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");





let RedirectComponent = class RedirectComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(user => {
            switch (user.role) {
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cliente:
                    this.router.navigate(['/cliente']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].bartender:
                    this.router.navigate(['/bartender']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cocinero:
                    this.router.navigate(['/cocinero']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cervecero:
                    this.router.navigate(['/cervecero']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].mozo:
                    this.router.navigate(['/mozo']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].socio:
                    this.router.navigate(['/socio']);
                    break;
            }
        })
            .catch(() => {
            this.router.navigate(['/b']);
        });
    }
};
RedirectComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RedirectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redirect',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./redirect.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/redirect/redirect.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./redirect.component.scss */ "./src/app/components/all/views/redirect/redirect.component.scss")).default]
    })
], RedirectComponent);



/***/ }),

/***/ "./src/app/components/all/views/register/register.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/all/views/register/register.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/all/views/register/register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/all/views/register/register.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/logging.service */ "./src/app/services/firebase/logging.service.ts");
/* harmony import */ var src_app_models_logging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/logging */ "./src/app/models/logging.ts");









let RegisterComponent = class RegisterComponent {
    constructor(authService, router, toastr, logService) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.logService = logService;
        this.loading = false;
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'repPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'customCaptcha': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'captcha': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.random = this.randomNumber();
    }
    onSubmit() {
        if (this.registerForm.get('customCaptcha').value == this.random) {
            this.loading = true;
            let user = src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"].CreateUserWithParams(this.registerForm.get('name').value, this.registerForm.get('lastname').value, this.registerForm.get('email').value, this.registerForm.get('password').value, src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["Role"].cliente);
            this.authService.RegisterWithEmail(user)
                .then(() => {
                let mensaje = `El usuario ${user.email} se dió de alta`;
                this.logService.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_8__["TargetMovimiento"].usuario, src_app_models_logging__WEBPACK_IMPORTED_MODULE_8__["TipoMovimiento"].alta, mensaje);
                this.toastr.success('Te has registrado con éxito.');
                this.router.navigate(['app/login']);
            })
                .catch(error => {
                this.toastr.error(error.message, 'Ha ocurrido un error.');
            });
        }
        else {
            this.toastr.info("Captcha invalido");
        }
    }
    randomNumber() {
        let retorno;
        retorno = Math.floor(Math.random() * 6) + 1;
        return retorno;
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/components/all/views/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/bartender/views/home-bartender/home-bartender.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/bartender/views/home-bartender/home-bartender.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9iYXJ0ZW5kZXIvdmlld3MvaG9tZS1iYXJ0ZW5kZXIvaG9tZS1iYXJ0ZW5kZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmFydGVuZGVyL3ZpZXdzL2hvbWUtYmFydGVuZGVyL2hvbWUtYmFydGVuZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYXJ0ZW5kZXIvdmlld3MvaG9tZS1iYXJ0ZW5kZXIvaG9tZS1iYXJ0ZW5kZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHByaW5jaXBhbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDAsIDAsMCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250OiBib2xkO1xufSIsIi50cHJpbmNpcGFsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/bartender/views/home-bartender/home-bartender.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/bartender/views/home-bartender/home-bartender.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HomeBartenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBartenderComponent", function() { return HomeBartenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeBartenderComponent = class HomeBartenderComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
HomeBartenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-bartender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-bartender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/home-bartender/home-bartender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-bartender.component.scss */ "./src/app/components/bartender/views/home-bartender/home-bartender.component.scss")).default]
    })
], HomeBartenderComponent);



/***/ }),

/***/ "./src/app/components/bartender/views/main-bartender/main-bartender.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/bartender/views/main-bartender/main-bartender.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bartender-color {\n  background-color: #d840dd;\n}\n\n.bc {\n  background-color: #ddb281;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9iYXJ0ZW5kZXIvdmlld3MvbWFpbi1iYXJ0ZW5kZXIvbWFpbi1iYXJ0ZW5kZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmFydGVuZGVyL3ZpZXdzL21haW4tYmFydGVuZGVyL21haW4tYmFydGVuZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBSGU7QUNFbkI7O0FESUE7RUFDSSx5QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYXJ0ZW5kZXIvdmlld3MvbWFpbi1iYXJ0ZW5kZXIvbWFpbi1iYXJ0ZW5kZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFydGVuZGVyUHJpbWFyeTogcmdiKDIxNiwgNjQsIDIyMSk7XG5cbi5iYXJ0ZW5kZXItY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXJ0ZW5kZXJQcmltYXJ5O1xufVxuXG4uYmN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMTc4LCAxMjkpO1xufSIsIi5iYXJ0ZW5kZXItY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDg0MGRkO1xufVxuXG4uYmMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRiMjgxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/bartender/views/main-bartender/main-bartender.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/bartender/views/main-bartender/main-bartender.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MainBartenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBartenderComponent", function() { return MainBartenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainBartenderComponent = class MainBartenderComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainBartenderComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainBartenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-bartender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-bartender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/main-bartender/main-bartender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-bartender.component.scss */ "./src/app/components/bartender/views/main-bartender/main-bartender.component.scss")).default]
    })
], MainBartenderComponent);



/***/ }),

/***/ "./src/app/components/bienvenida/bienvenida.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/bienvenida/bienvenida.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo {\n  font-family: Arial, Helvetica, sans-serif;\n  color: lightseagreen;\n  font-size: 36px;\n}\n\n.color {\n  color: lightseagreen;\n  background-color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  text-align: center;\n}\n\n.fondo {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9iaWVudmVuaWRhL2JpZW52ZW5pZGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmllbnZlbmlkYS9iaWVudmVuaWRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmllbnZlbmlkYS9iaWVudmVuaWRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsbyB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG4gICAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4uY29sb3Ige1xuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb25kbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59IiwiLnRpdHVsbyB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4uY29sb3Ige1xuICBjb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvbmRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/bienvenida/bienvenida.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/bienvenida/bienvenida.component.ts ***!
  \***************************************************************/
/*! exports provided: BienvenidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidaComponent", function() { return BienvenidaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




//import {NgbdCarouselNavigation } from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
let BienvenidaComponent = class BienvenidaComponent {
    //cc.cycle();
    constructor(config, router) {
        this.router = router;
        //cc: NgbCarousel;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
        //images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.images = [1, 2, 3, 4, 5, 6].map((n) => '././assets/img/imagen' + n + '.jpg');
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    ingreso() {
        console.log("presionaste");
        this.router.navigate(['/app/login']);
    }
    ngOnInit() {
    }
};
BienvenidaComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BienvenidaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bienvenida',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bienvenida.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bienvenida/bienvenida.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers
        ,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bienvenida.component.scss */ "./src/app/components/bienvenida/bienvenida.component.scss")).default]
    })
], BienvenidaComponent);



/***/ }),

/***/ "./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9jZXJ2ZWNlcm8vdmlld3MvaG9tZS1jZXJ2ZWNlcm8vaG9tZS1jZXJ2ZWNlcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2VydmVjZXJvL3ZpZXdzL2hvbWUtY2VydmVjZXJvL2hvbWUtY2VydmVjZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jZXJ2ZWNlcm8vdmlld3MvaG9tZS1jZXJ2ZWNlcm8vaG9tZS1jZXJ2ZWNlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHByaW5jaXBhbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDAsIDAsMCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250OiBib2xkO1xufSIsIi50cHJpbmNpcGFsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HomeCerveceroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCerveceroComponent", function() { return HomeCerveceroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeCerveceroComponent = class HomeCerveceroComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
HomeCerveceroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-cervecero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-cervecero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-cervecero.component.scss */ "./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.scss")).default]
    })
], HomeCerveceroComponent);



/***/ }),

/***/ "./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cervecero-color {\n  background-color: #805552;\n}\n\n.bc {\n  background-color: #f0ed54;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9jZXJ2ZWNlcm8vdmlld3MvbWFpbi1jZXJ2ZWNlcm8vbWFpbi1jZXJ2ZWNlcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2VydmVjZXJvL3ZpZXdzL21haW4tY2VydmVjZXJvL21haW4tY2VydmVjZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBSGU7QUNFbkI7O0FESUE7RUFDSSx5QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jZXJ2ZWNlcm8vdmlld3MvbWFpbi1jZXJ2ZWNlcm8vbWFpbi1jZXJ2ZWNlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY2VydmVjZXJvUHJpbWFyeTogcmdiKDEyOCwgODUsIDgyKTtcblxuLmNlcnZlY2Vyby1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNlcnZlY2Vyb1ByaW1hcnk7XG59XG5cbi5iY3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzcsIDg0KTtcbn1cbiIsIi5jZXJ2ZWNlcm8tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA1NTUyO1xufVxuXG4uYmMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZDU0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MainCerveceroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCerveceroComponent", function() { return MainCerveceroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainCerveceroComponent = class MainCerveceroComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainCerveceroComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainCerveceroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-cervecero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-cervecero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-cervecero.component.scss */ "./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.scss")).default]
    })
], MainCerveceroComponent);



/***/ }),

/***/ "./src/app/components/cliente/views/home-cliente/home-cliente.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cliente/views/home-cliente/home-cliente.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-info {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.price {\n  font-family: Arial, Helvetica, sans-serif;\n  color: green;\n}\n\n.tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #2d93bb;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL2hvbWUtY2xpZW50ZS9ob21lLWNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50ZS92aWV3cy9ob21lLWNsaWVudGUvaG9tZS1jbGllbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL2hvbWUtY2xpZW50ZS9ob21lLWNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWluZm8ge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJpY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBncmVlblxufVxuXG4udHByaW5jaXBhbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDQ1LCAxNDcsIDE4Nyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250OiBib2xkO1xufSIsIi5idG4taW5mbyB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJpY2Uge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4udHByaW5jaXBhbCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzJkOTNiYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/cliente/views/home-cliente/home-cliente.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cliente/views/home-cliente/home-cliente.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HomeClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeClienteComponent", function() { return HomeClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/table */ "./src/app/models/table.ts");
/* harmony import */ var src_app_services_firebase_producto_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/firebase/producto-service.service */ "./src/app/services/firebase/producto-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");













let HomeClienteComponent = class HomeClienteComponent {
    constructor(orderService, userService, authService, tableService, toastr, productService) {
        this.orderService = orderService;
        this.userService = userService;
        this.authService = authService;
        this.tableService = tableService;
        this.toastr = toastr;
        this.productService = productService;
        this.order = null;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.hasOrder = false;
    }
    ngOnInit() {
        this.InitializeOrder();
        this.products = this.productService.GetAll2();
        this.authService
            .GetCurrentUser()
            .then(userLogged => (this.currentUser = userLogged));
        this.SelectRandomWaiter().then(waiter => (this.currentWorker = waiter));
        this.ClearFilters();
    }
    // ##### CORE FUNCTIONS #####
    AddToOrder(prod) {
        this.order.items.push(prod);
        this.order.CalculateTotal();
        this.somethingOrdered = true;
        console.log('order:', this.order);
    }
    CancelOrder() {
        this.somethingOrdered = false;
        this.order.items = [];
        this.order.CalculateTotal();
        this.onReset.next();
    }
    MakeOrder() {
        if (this.order.tableID == "No hay")
            this.toastr.error("No hay mesas disponibles. Vuelva más tarde.");
        else {
            if (this.order.CheckOrder()) {
                this.order.waiter = this.currentWorker;
                this.order.client = this.currentUser;
                this.tableService.UpdateStatus(this.order.tableID, src_app_models_table__WEBPACK_IMPORTED_MODULE_10__["TableState"].waitingOrder);
                this.orderService
                    .Update(this.order)
                    .then(value => {
                    if (!value) {
                        this.orderService.Add(this.order);
                    }
                })
                    .then(() => {
                    this.orderService.UpdateImageURL(this.order, this.currentUser.image);
                });
                this.toastr.success("El pedido se ha realizado correctamente! Este es tu número de pedido: " +
                    this.order.codeID);
                this.hasOrder = true;
            }
            else
                this.toastr.error("Hay algo erróneo con este pedido.");
        }
    }
    // ##### FILTER FUNCTIONS #####
    Filter(type) {
        this.showingProducts = this.products.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(productos => {
            return productos.filter(res => {
                res = Object.assign(new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](), res);
                if (res.IsFoodType(type))
                    return res;
            });
        }));
    }
    ClearFilters() {
        this.showingProducts = this.products.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(productos => {
            return productos.filter(res => {
                res = Object.assign(new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](), res);
                return res;
            });
        }));
    }
    // ###### PRIVATE FUNCTIONS #####
    InitializeOrder() {
        this.tableService.FindAvailable().then(table => {
            this.order = src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"].Create(table.tableID);
            this.somethingOrdered = false;
        });
    }
    SelectRandomWaiter() {
        return this.userService.GetAllWaiters().then(waiters => {
            // let random;
            // do{
            // 	random = Math.floor(Math.random() * waiters.length);
            // }while(!waiters[random].deleted && waiters[random].state != 'deshabilitado')
            let random = Math.floor(Math.random() * waiters.length);
            return waiters[random];
        });
    }
};
HomeClienteComponent.ctorParameters = () => [
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_8__["TableService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: src_app_services_firebase_producto_service_service__WEBPACK_IMPORTED_MODULE_11__["ProductoServiceService"] }
];
HomeClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home-cliente",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/home-cliente/home-cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-cliente.component.scss */ "./src/app/components/cliente/views/home-cliente/home-cliente.component.scss")).default]
    })
], HomeClienteComponent);



/***/ }),

/***/ "./src/app/components/cliente/views/main-cliente/main-cliente.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cliente/views/main-cliente/main-cliente.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".general-color {\n  background-color: #83f174;\n}\n\n.bc {\n  background-color: lightskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL21haW4tY2xpZW50ZS9tYWluLWNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50ZS92aWV3cy9tYWluLWNsaWVudGUvbWFpbi1jbGllbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBSGE7QUNFakI7O0FESUE7RUFDSSw4QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL21haW4tY2xpZW50ZS9tYWluLWNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ2VuZXJhbFByaW1hcnk6IHJnYigxMzEsIDI0MSwgMTE2KTtcblxuLmdlbmVyYWwtY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRnZW5lcmFsUHJpbWFyeTtcbn1cblxuLmJje1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbn1cblxuIiwiLmdlbmVyYWwtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNmMTc0O1xufVxuXG4uYmMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/cliente/views/main-cliente/main-cliente.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cliente/views/main-cliente/main-cliente.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MainClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainClienteComponent", function() { return MainClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainClienteComponent = class MainClienteComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainClienteComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/main-cliente/main-cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-cliente.component.scss */ "./src/app/components/cliente/views/main-cliente/main-cliente.component.scss")).default]
    })
], MainClienteComponent);



/***/ }),

/***/ "./src/app/components/cliente/views/search-order/search-order.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cliente/views/search-order/search-order.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  text-align: center;\n}\n\n.price {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  color: green;\n}\n\ntextarea {\n  resize: none;\n}\n\n.positive {\n  font-weight: bold;\n  color: green;\n}\n\n.negative {\n  font-weight: bold;\n  color: red;\n}\n\n.tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #2d93bb;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL3NlYXJjaC1vcmRlci9zZWFyY2gtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50ZS92aWV3cy9zZWFyY2gtb3JkZXIvc2VhcmNoLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL3NlYXJjaC1vcmRlci9zZWFyY2gtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLnBvc2l0aXZlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5uZWdhdGl2ZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnRwcmluY2lwYWx7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJnYig0NSwgMTQ3LCAxODcpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udDogYm9sZDtcbn0iLCJpbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ucG9zaXRpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ubmVnYXRpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRwcmluY2lwYWwge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyZDkzYmI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/cliente/views/search-order/search-order.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cliente/views/search-order/search-order.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOrderComponent", function() { return SearchOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/table */ "./src/app/models/table.ts");
/* harmony import */ var src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/survey.service */ "./src/app/services/firebase/survey.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_survey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/survey */ "./src/app/models/survey.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");














let SearchOrderComponent = class SearchOrderComponent {
    constructor(surveyService, toastr, orderService, tableService, au) {
        this.surveyService = surveyService;
        this.toastr = toastr;
        this.orderService = orderService;
        this.tableService = tableService;
        this.au = au;
        this.alreadyPaid = false;
        this.waitingOrder = false;
        this.file = null;
        this.surveyDone = false;
    }
    ngOnInit() {
        this.au.GetCurrentUser().then(escliente => { this.usuarioAux = escliente; });
        this.surveyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            tableScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(10)
            ]),
            restaurantScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(10)
            ]),
            waiterScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(10)
            ]),
            cookScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(10)
            ]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            commentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
        setInterval(() => {
            if (this.order) {
                let now = new Date();
                this.remainingTime =
                    new Date(this.order.timeLeft).getTime() - now.getTime();
            }
        }, 10);
    }
    Pay() {
        this.order.state = src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].paidOut;
        this.orderService.ChangeStatus(src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].paidOut, this.order.codeID);
        this.tableService
            .UpdateStatus(this.order.tableID, src_app_models_table__WEBPACK_IMPORTED_MODULE_6__["TableState"].paying)
            .then(() => {
            this.toastr.success("En unos instantes el mozo vendrá a buscar el pago.", "Hecho!");
            this.alreadyPaid = true;
        })
            .catch(() => {
            this.toastr.error("Se ha producido un error.");
        });
    }
    onFileChanged(event) {
        this.file = event.target.files[0];
    }
    cambiarImagen() {
        this.orderService.setOrderImage(this.order.codeID, this.file);
    }
    IsServed() {
        let served = false;
        if (this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].served ||
            this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].paidOut)
            served = true;
        return served;
    }
    FindOrder() {
        this.waitingOrder = true;
        this.orderService
            .GetByCodeID(this.orderID)
            .then(ord => {
            console.log(ord.state !== "Cancelado" &&
                ((ord.client === this.usuarioAux && src_app_models_user__WEBPACK_IMPORTED_MODULE_12__["Role"].cliente === this.usuarioAux.role) ||
                    this.usuarioAux.role === src_app_models_user__WEBPACK_IMPORTED_MODULE_12__["Role"].mozo));
            /*console.log(ord.client.id === this.usuarioAux.id); // false  ---
            console.log(Role.cliente === this.usuarioAux.role); // true --
            console.log(this.usuarioAux.role === Role.mozo); // false  ---*/
            if (ord.state !== "Cancelado" &&
                ((ord.client.id === this.usuarioAux.id && src_app_models_user__WEBPACK_IMPORTED_MODULE_12__["Role"].cliente === this.usuarioAux.role) ||
                    this.usuarioAux.role === src_app_models_user__WEBPACK_IMPORTED_MODULE_12__["Role"].mozo)) {
                this.order = ord;
            }
        })
            .catch(error => this.toastr.error(error, "Error"))
            .finally(() => (this.waitingOrder = false));
    }
    CanPayNow() {
        let can = false;
        if (this.order) {
            if (this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].served)
                can = true;
        }
        return can;
    }
    SendAnswers() {
        let survey = src_app_models_survey__WEBPACK_IMPORTED_MODULE_9__["Survey"].Create(this.order, this.surveyForm.get("tableScore").value, this.surveyForm.get("waiterScore").value, this.surveyForm.get("restaurantScore").value, this.surveyForm.get("cookScore").value, this.surveyForm.get("comment").value, this.surveyForm.get("commentType").value);
        this.surveyService
            .Add(survey)
            .then(() => this.toastr.success("Encuesta enviada correctamente!"))
            .catch(() => this.toastr.error("Se ha producido un error al enviar la encuesta."))
            .finally(() => (this.surveyDone = true));
    }
    notCancelled() {
        let can = false;
        if (this.order) {
            if (this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].cancelled ||
                this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].paidOut)
                can = true;
        }
        return can;
    }
    Cancel() {
        this.order.state = src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].cancelled;
        this.order.completed = true;
        this.orderService.ChangeStatus(src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].cancelled, this.order.codeID);
    }
    ticketPDF() {
        let items = this.order.items;
        let start;
        let usersHtml = "";
        let end = "<h4>Gracias por visita <h4></ul></div>";
        let nombreArchivo;
        let liSt = "<li>";
        let liEnd = "</li>";
        // tslint:disable-next-line: prefer-const
        let img = new Image();
        img.src = '../../../../../assets/img/favicon.ico';
        this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["Order"](), this.order);
        this.toastr.info("Generando archivo PDF...");
        start =
            '<h3> LA FAROLA DE BERAZATEGUI <h3> <br> <br> <h4>Ticket de consumos realizados<h4><div style="text-align: center"><h2>Pedido: ' +
                this.order.codeID +
                "</h2>";
        usersHtml += liSt + "Mozo: " + this.order.waiter.email + liEnd;
        usersHtml += liSt + "Mesa N°: " + this.order.tableID + liEnd;
        usersHtml += liSt + "Pedido: " + this.order.codeID + liEnd;
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]("en-US");
        const myFormattedDate = datePipe.transform(this.order.timestamp, "hh:mm dd/MM/yyyy");
        usersHtml += liSt + "Fecha del pedido: " + myFormattedDate + liEnd;
        items.forEach(unItem => {
            let item = " Producto: " + unItem.name + " Precio: $ " + unItem.price;
            let fullLine = liSt + item + liEnd;
            usersHtml += fullLine;
        });
        usersHtml += liSt + "Total: $" + this.order.totalPrice + liEnd;
        let html = start + usersHtml + end;
        console.log(html);
        let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_10__();
        pdf.addImage(img, "jpg", 20, 20, 60, 60);
        pdf.fromHTML(html, 20, 80);
        nombreArchivo = this.order.codeID + ".pdf";
        pdf.save(nombreArchivo);
    }
};
SearchOrderComponent.ctorParameters = () => [
    { type: src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_7__["SurveyService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }
];
SearchOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/search-order/search-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-order.component.scss */ "./src/app/components/cliente/views/search-order/search-order.component.scss")).default]
    })
], SearchOrderComponent);



/***/ }),

/***/ "./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9jb2NpbmVyby92aWV3cy9ob21lLWNvY2luZXJvL2hvbWUtY29jaW5lcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29jaW5lcm8vdmlld3MvaG9tZS1jb2NpbmVyby9ob21lLWNvY2luZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2NpbmVyby92aWV3cy9ob21lLWNvY2luZXJvL2hvbWUtY29jaW5lcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHByaW5jaXBhbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDAsIDAsMCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250OiBib2xkO1xufSIsIi50cHJpbmNpcGFsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.ts ***!
  \************************************************************************************/
/*! exports provided: HomeCocineroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCocineroComponent", function() { return HomeCocineroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeCocineroComponent = class HomeCocineroComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
HomeCocineroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-cocinero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-cocinero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-cocinero.component.scss */ "./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.scss")).default]
    })
], HomeCocineroComponent);



/***/ }),

/***/ "./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cocinero-color {\n  background-color: #f7e11c;\n}\n\n.bc {\n  background-color: #020202;\n}\n\n.tc {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9jb2NpbmVyby92aWV3cy9tYWluLWNvY2luZXJvL21haW4tY29jaW5lcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29jaW5lcm8vdmlld3MvbWFpbi1jb2NpbmVyby9tYWluLWNvY2luZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBSGM7QUNFbEI7O0FESUE7RUFDSSx5QkFBQTtBQ0RKOztBREdBO0VBQ0ksWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2NpbmVyby92aWV3cy9tYWluLWNvY2luZXJvL21haW4tY29jaW5lcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29jaW5lcm9QcmltYXJ5OiByZ2IoMjQ3LCAyMjUsIDI4KTtcblxuLmNvY2luZXJvLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29jaW5lcm9QcmltYXJ5O1xufVxuXG4uYmN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDIsIDIpO1xufVxuLnRje1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iLCIuY29jaW5lcm8tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlMTFjO1xufVxuXG4uYmMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwMjAyO1xufVxuXG4udGMge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.ts ***!
  \************************************************************************************/
/*! exports provided: MainCocineroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCocineroComponent", function() { return MainCocineroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainCocineroComponent = class MainCocineroComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainCocineroComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainCocineroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-cocinero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-cocinero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-cocinero.component.scss */ "./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.scss")).default]
    })
], MainCocineroComponent);



/***/ }),

/***/ "./src/app/components/mozo/main/select-order/select-order.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/mozo/main/select-order/select-order.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5 {\n  font-weight: bold;\n}\n\nselect {\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9tb3pvL21haW4vc2VsZWN0LW9yZGVyL3NlbGVjdC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3pvL21haW4vc2VsZWN0LW9yZGVyL3NlbGVjdC1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtPQUFBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vem8vbWFpbi9zZWxlY3Qtb3JkZXIvc2VsZWN0LW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5zZWxlY3Qge1xuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuXG4iLCJoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5zZWxlY3Qge1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/mozo/main/select-order/select-order.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mozo/main/select-order/select-order.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SelectOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOrderComponent", function() { return SelectOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/table */ "./src/app/models/table.ts");
/* harmony import */ var src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/logging.service */ "./src/app/services/firebase/logging.service.ts");
/* harmony import */ var src_app_models_logging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/logging */ "./src/app/models/logging.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_11__);












let SelectOrderComponent = class SelectOrderComponent {
    constructor(orderService, toastr, tableService, authService, movimientoService) {
        this.orderService = orderService;
        this.toastr = toastr;
        this.tableService = tableService;
        this.authService = authService;
        this.movimientoService = movimientoService;
    }
    ngOnInit() {
        setInterval(() => {
            if (this.order) {
                let now = new Date();
                this.remainingTime =
                    new Date(this.order.timeLeft).getTime() - now.getTime();
            }
        }, 10);
    }
    CanBeServed() {
        let can = false;
        if (this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["OrderState"].readyToServe)
            can = true;
        return can;
    }
    SelectItem(item) {
        this.selectedItem = item;
    }
    CompleteOrder() {
        this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), this.order);
        this.tableService.UpdateStatus(this.order.tableID, src_app_models_table__WEBPACK_IMPORTED_MODULE_6__["TableState"].eating);
        this.order.CompleteOrder();
        this.orderService
            .Update(this.order)
            .then(() => {
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} entregó un pedido ${this.order.codeID}`;
                this.movimientoService.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_8__["TargetMovimiento"].pedido, src_app_models_logging__WEBPACK_IMPORTED_MODULE_8__["TipoMovimiento"].entrega, mensaje);
            });
        })
            .then(() => {
            this.toastr.success("Orden servida.");
        })
            .catch(() => {
            this.toastr.error("Hubo un error al servir la orden.", "Error");
        });
    }
    comandaPDF() {
        let items = this.order.items;
        let start;
        let usersHtml = '';
        let end = '</ul></div>';
        let nombreArchivo;
        let liSt = '<li>';
        let liEnd = '</li>';
        this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), this.order);
        this.toastr.info('Generando archivo PDF...');
        start = '<div style="text-align: center"><h1>Pedido: ' + this.order.codeID + '</h1><hr><ul>';
        usersHtml += liSt + 'Mozo: ' + this.order.waiter.email + liEnd;
        usersHtml += liSt + 'Mesa N°: ' + this.order.tableID + liEnd;
        usersHtml += liSt + 'Pedido: ' + this.order.codeID + liEnd;
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-US');
        const myFormattedDate = datePipe.transform(this.order.timestamp, 'hh:mm dd/MM/yyyy');
        usersHtml += liSt + 'Fecha del pedido: ' + myFormattedDate + liEnd;
        items.forEach(unItem => {
            let item = ' Producto: ' + unItem.name + ' Area: ' + unItem.cook;
            let fullLine = liSt + item + liEnd;
            usersHtml += fullLine;
        });
        let html = start + usersHtml + end;
        let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_11__();
        pdf.fromHTML(html, 20, 20);
        nombreArchivo = this.order.codeID + '.pdf';
        pdf.save(nombreArchivo);
    }
};
SelectOrderComponent.ctorParameters = () => [
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectOrderComponent.prototype, "order", void 0);
SelectOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-select-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/main/select-order/select-order.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-order.component.scss */ "./src/app/components/mozo/main/select-order/select-order.component.scss")).default]
    })
], SelectOrderComponent);



/***/ }),

/***/ "./src/app/components/mozo/views/home-mozo/home-mozo.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/mozo/views/home-mozo/home-mozo.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #0d7c0a;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9tb3pvL3ZpZXdzL2hvbWUtbW96by9ob21lLW1vem8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW96by92aWV3cy9ob21lLW1vem8vaG9tZS1tb3pvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3pvL3ZpZXdzL2hvbWUtbW96by9ob21lLW1vem8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHByaW5jaXBhbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDEzLCAxMjQsIDEwKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQ6IGJvbGQ7XG59IiwiLnRwcmluY2lwYWwge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwZDdjMGE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/mozo/views/home-mozo/home-mozo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mozo/views/home-mozo/home-mozo.component.ts ***!
  \************************************************************************/
/*! exports provided: HomeMozoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMozoComponent", function() { return HomeMozoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeMozoComponent = class HomeMozoComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
HomeMozoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-mozo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-mozo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/home-mozo/home-mozo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-mozo.component.scss */ "./src/app/components/mozo/views/home-mozo/home-mozo.component.scss")).default]
    })
], HomeMozoComponent);



/***/ }),

/***/ "./src/app/components/mozo/views/main-mozo/main-mozo.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/mozo/views/main-mozo/main-mozo.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mozo-color {\n  background-color: #356e06;\n}\n\n.bc {\n  background-color: #60c960;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9tb3pvL3ZpZXdzL21haW4tbW96by9tYWluLW1vem8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW96by92aWV3cy9tYWluLW1vem8vbWFpbi1tb3pvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBSFU7QUNFZDs7QURJQTtFQUNJLHlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vem8vdmlld3MvbWFpbi1tb3pvL21haW4tbW96by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtb3pvUHJpbWFyeTogcmdiKDUzLCAxMTAsIDYpO1xuXG4ubW96by1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1vem9QcmltYXJ5O1xufVxuXG4uYmN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCAyMDEsIDk2KTtcbn1cbiIsIi5tb3pvLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NmUwNjtcbn1cblxuLmJjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwYzk2MDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/mozo/views/main-mozo/main-mozo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mozo/views/main-mozo/main-mozo.component.ts ***!
  \************************************************************************/
/*! exports provided: MainMozoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMozoComponent", function() { return MainMozoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainMozoComponent = class MainMozoComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainMozoComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainMozoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-mozo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-mozo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/main-mozo/main-mozo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-mozo.component.scss */ "./src/app/components/mozo/views/main-mozo/main-mozo.component.scss")).default]
    })
], MainMozoComponent);



/***/ }),

/***/ "./src/app/components/mozo/views/manage-tables/manage-tables.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/mozo/views/manage-tables/manage-tables.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9tb3pvL3ZpZXdzL21hbmFnZS10YWJsZXMvbWFuYWdlLXRhYmxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3pvL3ZpZXdzL21hbmFnZS10YWJsZXMvbWFuYWdlLXRhYmxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW96by92aWV3cy9tYW5hZ2UtdGFibGVzL21hbmFnZS10YWJsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHByaW5jaXBhbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDAsIDAsMCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250OiBib2xkO1xufSIsIi50cHJpbmNpcGFsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/mozo/views/manage-tables/manage-tables.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/mozo/views/manage-tables/manage-tables.component.ts ***!
  \********************************************************************************/
/*! exports provided: ManageTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTablesComponent", function() { return ManageTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");



let ManageTablesComponent = class ManageTablesComponent {
    constructor(tableService) {
        this.tableService = tableService;
    }
    ngOnInit() {
        this.tables = this.tableService.GetAll().valueChanges();
    }
};
ManageTablesComponent.ctorParameters = () => [
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] }
];
ManageTablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-tables',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/manage-tables/manage-tables.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-tables.component.scss */ "./src/app/components/mozo/views/manage-tables/manage-tables.component.scss")).default]
    })
], ManageTablesComponent);



/***/ }),

/***/ "./src/app/components/socio/views/estadisticas-mesas/estadisticas-mesas.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/socio/views/estadisticas-mesas/estadisticas-mesas.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3, h2, h1 {\n  color: #fe9000;\n}\n\nimg {\n  height: 100px;\n  width: 100px;\n}\n\n.card-title {\n  font-weight: bold;\n}\n\n.card {\n  margin: 2rem;\n  align-items: center;\n}\n\ntable {\n  background-color: rgba(254, 144, 0, 0.877);\n  border-radius: 20px;\n}\n\ntable th {\n  border: none;\n  text-align: center;\n}\n\ntable tr {\n  text-align: center;\n}\n\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.5em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9lc3RhZGlzdGljYXMtbWVzYXMvZXN0YWRpc3RpY2FzLW1lc2FzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL2VzdGFkaXN0aWNhcy1tZXNhcy9lc3RhZGlzdGljYXMtbWVzYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0csaUJBQUE7QUNBSDs7QURFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFDSSxrQkFBQTtBQ0FSOztBRElBO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL2VzdGFkaXN0aWNhcy1tZXNhcy9lc3RhZGlzdGljYXMtbWVzYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMywgaDIsIGgxe1xuICAgIGNvbG9yOiByZ2IoMjU0LCAxNDQsIDApO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICBcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FyZHtcbiAgICBtYXJnaW46IDJyZW07ICAgIFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcbn1cblxuXG50YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTQsIDE0NCwgMCwgMC44NzcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICB0aCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICB0ciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5hcmlhbCB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4iLCJoMywgaDIsIGgxIHtcbiAgY29sb3I6ICNmZTkwMDA7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTQsIDE0NCwgMCwgMC44NzcpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxudGFibGUgdGgge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRhYmxlIHRyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXJpYWwge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/socio/views/estadisticas-mesas/estadisticas-mesas.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/socio/views/estadisticas-mesas/estadisticas-mesas.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EstadisticasMesasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasMesasComponent", function() { return EstadisticasMesasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_survey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/survey */ "./src/app/models/survey.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firebase/survey.service */ "./src/app/services/firebase/survey.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");










let EstadisticasMesasComponent = class EstadisticasMesasComponent {
    constructor(orderService, surveyService, toastr) {
        this.orderService = orderService;
        this.surveyService = surveyService;
        this.toastr = toastr;
        this.mesaMasUsada = null;
        this.mesaMenosUsada = null;
        this.mesaMayorFacturacion = null;
        this.mesaMenorFacturacion = null;
        this.facturaMayorImporte = null;
        this.facturaMenorImporte = null;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.surveys = this.surveyService.GetAll().valueChanges();
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            fechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            fechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
        this.orders = this.orderService.GetAll();
        this.ClearFilters();
    }
    SelectSurvey(surv) {
        this.survey = surv;
    }
    ClearFilters() {
        this.search();
    }
    Cancel() {
        this.settingsForm.reset();
        this.onReset.next();
        this.settingsForm.controls['fechaInicio'].setValue(null);
        this.settingsForm.controls['fechaFin'].setValue(null);
        this.search();
    }
    search() {
        this.setNulls();
        if (this.settingsForm.value.fechaInicio == null || this.settingsForm.value.fechaInicio == NaN) {
            this.fechaInicio = 0;
        }
        else {
            this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
        }
        if (this.settingsForm.value.fechaFin == null || this.settingsForm.value.fechaFin == NaN) {
            this.fechaFin = Date.now();
        }
        else {
            this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
        }
        this.showingOrders = this.orderService.GetAll().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_9__["Order"](), order);
                if (order['timestamp'] > this.fechaInicio && order['timestamp'] < this.fechaFin) {
                    return order;
                }
            });
        }));
        this.surveysGood = this.surveyService.GetAll2().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(surveys => {
            return surveys.filter(survey => {
                survey = Object.assign(new src_app_models_survey__WEBPACK_IMPORTED_MODULE_3__["Survey"](), survey);
                if (survey['order']['timestamp'] > this.fechaInicio && survey['order']['timestamp'] < this.fechaFin) {
                    if (((survey['cookScore'] + survey['restaurantScore'] + survey['tableScore'] + survey['waiterScore']) / 4) >= 7)
                        return survey;
                }
            });
        }));
        this.surveysBad = this.surveyService.GetAll2().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(surveys => {
            return surveys.filter(survey => {
                survey = Object.assign(new src_app_models_survey__WEBPACK_IMPORTED_MODULE_3__["Survey"](), survey);
                if (survey['order']['timestamp'] > this.fechaInicio && survey['order']['timestamp'] < this.fechaFin) {
                    if (((survey['cookScore'] + survey['restaurantScore'] + survey['tableScore'] + survey['waiterScore']) / 4) <= 4)
                        return survey;
                }
            });
        }));
        this.getTops();
    }
    setNulls() {
        this.mesaMasUsada = null;
        this.mesaMenosUsada = null;
        this.mesaMayorFacturacion = null;
        this.mesaMenorFacturacion = null;
        this.facturaMayorImporte = null;
        this.facturaMenorImporte = null;
        this.lista = null;
        this.arrayAcumulador = null;
    }
    getTops() {
        this.lista = new Array();
        let cantidadNombres = new Array();
        let cantidad;
        let copia = this.showingOrders;
        this.facturaMayorImporte = new src_app_models_order__WEBPACK_IMPORTED_MODULE_9__["Order"]();
        this.facturaMenorImporte = new src_app_models_order__WEBPACK_IMPORTED_MODULE_9__["Order"]();
        this.arrayAcumulador = new Array();
        copia.subscribe(orders => {
            orders.map(order => {
                if (order) {
                    this.sumarIngresos(order);
                    this.lista.push(order.tableID);
                    this.mayorMenorImporte(order);
                }
            }).map(() => {
                cantidadNombres = this.lista.reduce((contadorNombre, nombre) => {
                    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
                    return contadorNombre;
                }, {});
            });
            var result = Object.keys(cantidadNombres).map(function (key) {
                return [String(key), cantidadNombres[key]];
            });
            this.getMayoryMenorFacturación();
            cantidad = result.length;
            this.mesaMasUsada = result[cantidad - 1];
            this.mesaMenosUsada = result[0];
            // console.log(this.mesaMenosUsada);
            // console.log(this.mesaMasUsada);
            // console.log(this.facturaMenorImporte);
            // console.log(this.facturaMayorImporte);
            // console.log(this.mesaMenorFacturacion);
            // console.log(this.mesaMayorFacturacion);
        });
    }
    mayorMenorImporte(order) {
        if (this.facturaMayorImporte == null || this.facturaMenorImporte == null) {
            this.facturaMayorImporte = order;
            this.facturaMenorImporte = order;
        }
        else {
            if (order.totalPrice > this.facturaMayorImporte.totalPrice) {
                this.facturaMayorImporte = order;
            }
            if (order.totalPrice < this.facturaMayorImporte.totalPrice) {
                this.facturaMenorImporte = order;
            }
        }
    }
    sumarIngresos(order) {
        if (this.arrayAcumulador[order.tableID] == null) {
            this.arrayAcumulador[order.tableID] = order.totalPrice;
        }
        else {
            this.arrayAcumulador[order.tableID] = this.arrayAcumulador[order.tableID] + order.totalPrice;
        }
    }
    getMayoryMenorFacturación() {
        this.arrayAcumulador.forEach(elemento => {
            console.log(elemento);
            if (this.mesaMayorFacturacion == null || this.mesaMenorFacturacion == null) {
                this.mesaMenorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
                this.mesaMayorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
            }
            else {
                if (elemento < this.mesaMenorFacturacion) {
                    this.mesaMenorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
                }
                if (elemento > this.mesaMayorFacturacion) {
                    this.mesaMayorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
                }
            }
        });
    }
    setDate() {
        console.log(Date.parse(this.settingsForm.value.fechaInicio.toString()));
        if (this.settingsForm.value.fechaInicio != null) {
            this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
        }
        else {
            this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
        }
    }
    exportCSV() {
        this.toastr.info('Exportando estadística...');
        let csvData = 'categoria,numDeMesa,cantidad,tipo\n';
        csvData += 'masUsada' + ',' + this.mesaMasUsada[0] + ',' + this.mesaMasUsada[1] + ',veces\n';
        csvData += 'menosUsada' + ',' + this.mesaMenosUsada[0] + ',' + this.mesaMenosUsada[1] + ',veces\n';
        csvData += 'mayorRecaudacion' + ',' + this.arrayAcumulador.indexOf(this.mesaMayorFacturacion) + ',' + this.mesaMayorFacturacion + ',pesos\n';
        csvData += 'menorRecaudacion' + ',' + this.arrayAcumulador.indexOf(this.mesaMenorFacturacion) + ',' + this.mesaMenorFacturacion + ',pesos\n';
        csvData += 'mayorFactura' + ',' + this.facturaMayorImporte.tableID + ',' + this.facturaMayorImporte.totalPrice + ',pesos\n';
        csvData += 'menorFactura' + ',' + this.facturaMenorImporte.tableID + ',' + this.facturaMenorImporte.totalPrice + ',pesos\n';
        console.log(csvData);
        let file = new Blob([csvData], { type: 'text/csv' });
        let fileUrl = URL.createObjectURL(file);
        let hiddenEl = document.createElement('a');
        hiddenEl.href = fileUrl;
        hiddenEl.target = '_blank';
        hiddenEl.download = 'EstadisticasMesas.csv';
        hiddenEl.click();
    }
};
EstadisticasMesasComponent.ctorParameters = () => [
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_6__["SurveyService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EstadisticasMesasComponent.prototype, "fechaInicio", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EstadisticasMesasComponent.prototype, "fechaFin", void 0);
EstadisticasMesasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-estadisticas-mesas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estadisticas-mesas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/estadisticas-mesas/estadisticas-mesas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estadisticas-mesas.component.scss */ "./src/app/components/socio/views/estadisticas-mesas/estadisticas-mesas.component.scss")).default]
    })
], EstadisticasMesasComponent);



/***/ }),

/***/ "./src/app/components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3, h2, h1 {\n  color: #fe9000;\n}\n\nimg {\n  height: 100px;\n  width: 100px;\n}\n\n.card-title {\n  font-weight: bold;\n}\n\n.card {\n  margin: 2rem;\n  align-items: center;\n}\n\ntable {\n  background-color: rgba(254, 144, 0, 0.877);\n  border-radius: 20px;\n}\n\ntable th {\n  border: none;\n  text-align: center;\n}\n\ntable tr {\n  text-align: center;\n}\n\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.5em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9lc3RhZGlzdGljYXMtcGVkaWRvcy9lc3RhZGlzdGljYXMtcGVkaWRvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9lc3RhZGlzdGljYXMtcGVkaWRvcy9lc3RhZGlzdGljYXMtcGVkaWRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDRyxpQkFBQTtBQ0FIOztBREVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0E7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0FDQVI7O0FESUE7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvZXN0YWRpc3RpY2FzLXBlZGlkb3MvZXN0YWRpc3RpY2FzLXBlZGlkb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMywgaDIsIGgxe1xuICAgIGNvbG9yOiByZ2IoMjU0LCAxNDQsIDApO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICBcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FyZHtcbiAgICBtYXJnaW46IDJyZW07ICAgIFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcbn1cblxuXG50YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTQsIDE0NCwgMCwgMC44NzcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICB0aCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICB0ciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5hcmlhbCB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsImgzLCBoMiwgaDEge1xuICBjb2xvcjogI2ZlOTAwMDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NCwgMTQ0LCAwLCAwLjg3Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcmlhbCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EstadisticasPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasPedidosComponent", function() { return EstadisticasPedidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let EstadisticasPedidosComponent = class EstadisticasPedidosComponent {
    constructor(orderService, toastr) {
        this.orderService = orderService;
        this.toastr = toastr;
        this.cancelledOrders = null;
        this.delayedOrders = null;
        this.topBest = null;
        this.topWorst = null;
        this.mostrar = false;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            fechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
        this.orders = this.orderService.GetAll();
        this.ClearFilters();
    }
    ClearFilters() {
        this.search();
    }
    Cancel() {
        this.settingsForm.reset();
        this.onReset.next();
        this.settingsForm.controls['fechaInicio'].setValue(null);
        this.settingsForm.controls['fechaFin'].setValue(null);
        this.search();
    }
    search() {
        if (this.settingsForm.value.fechaInicio == null || this.settingsForm.value.fechaInicio == NaN) {
            this.fechaInicio = 0;
        }
        else {
            this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
        }
        if (this.settingsForm.value.fechaFin == null || this.settingsForm.value.fechaFin == NaN) {
            this.fechaFin = Date.now();
        }
        else {
            this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
        }
        this.showingOrders = this.orderService.GetAll().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_7__["Order"](), order);
                if (order['timestamp'] > this.fechaInicio && order['timestamp'] < this.fechaFin) {
                    return order;
                }
            });
        }));
        this.getDelayed();
        this.getCancelled();
        this.getTop();
    }
    getCancelled() {
        this.cancelledOrders = this.showingOrders.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_7__["Order"](), order);
                if (order['state'] == "Cancelado") {
                    return order;
                }
            });
        }));
    }
    getDelayed() {
        this.delayedOrders = this.showingOrders.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_7__["Order"](), order);
                if (order.delayed > 0) {
                    return order;
                }
            });
        }));
    }
    setDate() {
        console.log(Date.parse(this.settingsForm.value.fechaInicio.toString()));
        if (this.settingsForm.value.fechaInicio != null) {
            this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
        }
        else {
            this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
        }
    }
    getTop() {
        this.lista = new Array();
        let cantidadNombres = new Array();
        let cantidad;
        let copia = this.showingOrders;
        copia.subscribe(orders => {
            orders.map(order => {
                order.items.map(uno => {
                    this.lista.push(uno['name']);
                }).map(() => {
                    cantidadNombres = this.lista.reduce((contadorNombre, nombre) => {
                        contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
                        return contadorNombre;
                    }, {});
                });
            });
            var result = Object.keys(cantidadNombres).map(function (key) {
                return [String(key), cantidadNombres[key]];
            });
            //console.log(result);
            // console.table(result);
            const mejores = Object.assign([], result);
            const peores = Object.assign([], result);
            mejores.sort((a, b) => (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0));
            peores.sort((a, b) => (a[1] > b[1]) ? 1 : ((b[1] > a[1]) ? -1 : 0));
            console.table(mejores);
            console.table(peores);
            this.topBest = new Array();
            this.topWorst = new Array();
            this.topBest.push(mejores[0], mejores[1], mejores[2]);
            this.topWorst.push(peores[0], peores[1], peores[2]);
        });
    }
    exportCSV() {
        this.toastr.info('Exportando estadística...');
        let csvData;
        let data = this.getData();
        setTimeout(function () {
            data.map(row => {
                csvData += row;
            });
            // console.log(csvData);
            let file = new Blob([csvData], { type: 'text/csv' });
            let fileUrl = URL.createObjectURL(file);
            let hiddenEl = document.createElement('a');
            hiddenEl.href = fileUrl;
            hiddenEl.target = '_blank';
            hiddenEl.download = 'EstadisticasPedidos.csv';
            hiddenEl.click();
        }, 4000);
    }
    getData() {
        let data = [];
        data.push(['categoria,nombre,cantidad,tipo\n']);
        data.push(['puesto1MasVendido' + ',' + this.topBest[0][0] + ',' + this.topBest[0][1] + ',unidades\n']);
        data.push(['puesto2MasVendido' + ',' + this.topBest[1][0] + ',' + this.topBest[1][1] + ',unidades\n']);
        data.push(['puesto3MasVendido' + ',' + this.topBest[2][0] + ',' + this.topBest[2][1] + ',unidades\n']);
        data.push(['puesto1MenosVendido' + ',' + this.topWorst[2][0] + ',' + this.topWorst[2][1] + ',unidades\n']);
        data.push(['puesto2MenosVendido' + ',' + this.topWorst[1][0] + ',' + this.topWorst[1][1] + ',unidades\n']);
        data.push(['puesto3MenosVendido' + ',' + this.topWorst[0][0] + ',' + this.topWorst[0][1] + ',unidades\n']);
        this.orderService.GetAllDelayedOrders_InArray().then(orders => {
            data.push(['pedidosNoEntregadosEnTiempoEstipulado\n' + 'codigo,fecha,demora\n']);
            orders.filter(order => {
                if (order.timestamp > this.fechaInicio && order.timestamp < this.fechaFin) {
                    const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US');
                    const myFormattedDate = datePipe.transform(order.timestamp, 'hh:mm dd/MM/yyyy');
                    let diff = Math.floor(order.delayed / (1000 * 60));
                    let res;
                    if (diff < 0)
                        res = 'Pasado por ' + (diff * -1) + ' minutos.';
                    else
                        res = diff + ' minutos.';
                    data.push([order.codeID + ',' + myFormattedDate + ',' + res + '\n']);
                }
            });
        }).then(() => {
            this.orderService.GetAllCancelledOrders_InArray().then(orders => {
                data.push(['pedidosCancelados\n' + 'codigo,fecha,estado\n']);
                orders.filter(order => {
                    if (order.timestamp > this.fechaInicio && order.timestamp < this.fechaFin) {
                        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US');
                        const myFormattedDate = datePipe.transform(order.timestamp, 'hh:mm dd/MM/yyyy');
                        data.push([order.codeID + ',' + myFormattedDate + ',' + order.state + '\n']);
                    }
                });
            });
        });
        return data;
    }
};
EstadisticasPedidosComponent.ctorParameters = () => [
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EstadisticasPedidosComponent.prototype, "fechaInicio", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EstadisticasPedidosComponent.prototype, "fechaFin", void 0);
EstadisticasPedidosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-estadisticas-pedidos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estadisticas-pedidos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estadisticas-pedidos.component.scss */ "./src/app/components/socio/views/estadisticas-pedidos/estadisticas-pedidos.component.scss")).default]
    })
], EstadisticasPedidosComponent);



/***/ }),

/***/ "./src/app/components/socio/views/home-socio/home-socio.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/socio/views/home-socio/home-socio.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".role-panel {\n  margin: 0 2rem 0 2rem;\n}\n\n.role-input {\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9ob21lLXNvY2lvL2hvbWUtc29jaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvaG9tZS1zb2Npby9ob21lLXNvY2lvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO09BQUEsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvaG9tZS1zb2Npby9ob21lLXNvY2lvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvbGUtcGFuZWwge1xuICAgIG1hcmdpbjogMCAycmVtIDAgMnJlbTtcbn1cblxuLnJvbGUtaW5wdXQge1xuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufSIsIi5yb2xlLXBhbmVsIHtcbiAgbWFyZ2luOiAwIDJyZW0gMCAycmVtO1xufVxuXG4ucm9sZS1pbnB1dCB7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/socio/views/home-socio/home-socio.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/socio/views/home-socio/home-socio.component.ts ***!
  \***************************************************************************/
/*! exports provided: HomeSocioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSocioComponent", function() { return HomeSocioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let HomeSocioComponent = class HomeSocioComponent {
    constructor(userService, orderService, toastr) {
        this.userService = userService;
        this.orderService = orderService;
        this.toastr = toastr;
        this.changeRoleNewRole = 'socio';
    }
    ngOnInit() {
    }
    ChangeRole() {
        this.userService.SetRole(this.changeRoleEmail, this.changeRoleNewRole);
        this.toastr.info('El rol se ha cambiado correctamente!');
    }
    GenerateCSV() {
        this.toastr.info('Generando la facturación...');
        this.orderService.GetAllCompletedOrders_InArray().then(orders => {
            let data = [];
            orders.forEach(ord => {
                data.push([ord.timeLeft,
                    ord.codeID,
                    ord.client.email,
                    ord.waiter.name + ' ' + ord.waiter.lastname,
                    '$' + ord.totalPrice]);
            });
            let csvData = 'Fecha,Pedido,Cliente,Mozo,Importe\n';
            data.forEach(row => {
                csvData += row.join(',');
                csvData += '\n';
            });
            let file = new Blob([csvData], { type: 'text/csv' });
            let fileUrl = URL.createObjectURL(file);
            let hiddenEl = document.createElement('a');
            hiddenEl.href = fileUrl;
            hiddenEl.target = '_blank';
            hiddenEl.download = 'Facturacion.csv';
            hiddenEl.click();
        });
    }
    GeneratePDF() {
        this.toastr.info('Generando el listado de usuarios...');
        this.userService.GetAll_InArray().then(users => {
            let start = '<div style="text-align: center"><h1>Listado de usuarios</h1><hr><ul>';
            let usersHtml = '';
            let end = '</ul></div>';
            users.forEach(el => {
                let liSt = '<li>';
                let liEnd = '</li>';
                let user = el.email + ' - ' + el.name + ' ' + el.lastname + ' - ' + el.role;
                let fullLine = liSt + user + liEnd;
                usersHtml += fullLine;
            });
            let html = start + usersHtml + end;
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
            pdf.fromHTML(html, 20, 20);
            pdf.save('Prueba.pdf');
        });
    }
};
HomeSocioComponent.ctorParameters = () => [
    { type: src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
HomeSocioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-socio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-socio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/home-socio/home-socio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-socio.component.scss */ "./src/app/components/socio/views/home-socio/home-socio.component.scss")).default]
    })
], HomeSocioComponent);



/***/ }),

/***/ "./src/app/components/socio/views/main-socio/main-socio.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/socio/views/main-socio/main-socio.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".socio-color {\n  background-color: #f51404;\n}\n\n.bc {\n  background-color: #f14545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYWluLXNvY2lvL21haW4tc29jaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvbWFpbi1zb2Npby9tYWluLXNvY2lvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBSFc7QUNFZjs7QURLQTtFQUNJLHlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL21haW4tc29jaW8vbWFpbi1zb2Npby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzb2Npb1ByaW1hcnk6IHJnYigyNDUsIDIwLCA0KTtcblxuLnNvY2lvLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc29jaW9QcmltYXJ5O1xufVxuXG5cbi5iY3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCA2OSwgNjkpO1xufVxuIiwiLnNvY2lvLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1MTQwNDtcbn1cblxuLmJjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNDU0NTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/socio/views/main-socio/main-socio.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/socio/views/main-socio/main-socio.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainSocioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSocioComponent", function() { return MainSocioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainSocioComponent = class MainSocioComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainSocioComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainSocioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-socio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-socio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/main-socio/main-socio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-socio.component.scss */ "./src/app/components/socio/views/main-socio/main-socio.component.scss")).default]
    })
], MainSocioComponent);



/***/ }),

/***/ "./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYW5hZ2Utb3JkZXJzLWFkbWluL21hbmFnZS1vcmRlcnMtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvbWFuYWdlLW9yZGVycy1hZG1pbi9tYW5hZ2Utb3JkZXJzLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYW5hZ2Utb3JkZXJzLWFkbWluL21hbmFnZS1vcmRlcnMtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHByaW5jaXBhbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDAsIDAsMCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250OiBib2xkO1xufSIsIi50cHJpbmNpcGFsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ManageOrdersAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOrdersAdminComponent", function() { return ManageOrdersAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManageOrdersAdminComponent = class ManageOrdersAdminComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
ManageOrdersAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-orders-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-orders-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-orders-admin.component.scss */ "./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.scss")).default]
    })
], ManageOrdersAdminComponent);



/***/ }),

/***/ "./src/app/components/socio/views/manage-products/manage-products.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-products/manage-products.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\ntable th {\n  border: none;\n  text-align: center;\n}\ntable tr {\n  text-align: center;\n}\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYW5hZ2UtcHJvZHVjdHMvbWFuYWdlLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL21hbmFnZS1wcm9kdWN0cy9tYW5hZ2UtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FER0E7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvbWFuYWdlLXByb2R1Y3RzL21hbmFnZS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODc3KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgdGgge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgdHIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uYXJpYWwge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCJ0YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NzcpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxudGFibGUgdGgge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRhYmxlIHRyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXJpYWwge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/socio/views/manage-products/manage-products.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-products/manage-products.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ManageProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsComponent", function() { return ManageProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let ManageProductsComponent = class ManageProductsComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(user => {
            this.role = user.role;
        });
    }
};
ManageProductsComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ManageProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-products/manage-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-products.component.scss */ "./src/app/components/socio/views/manage-products/manage-products.component.scss")).default]
    })
], ManageProductsComponent);



/***/ }),

/***/ "./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYW5hZ2UtdGFibGVzLWFkbWluL21hbmFnZS10YWJsZXMtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvbWFuYWdlLXRhYmxlcy1hZG1pbi9tYW5hZ2UtdGFibGVzLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYW5hZ2UtdGFibGVzLWFkbWluL21hbmFnZS10YWJsZXMtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHByaW5jaXBhbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDAsIDAsMCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250OiBib2xkO1xufSIsIi50cHJpbmNpcGFsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ManageTablesAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTablesAdminComponent", function() { return ManageTablesAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");



let ManageTablesAdminComponent = class ManageTablesAdminComponent {
    constructor(tableService) {
        this.tableService = tableService;
    }
    ngOnInit() {
        this.tables = this.tableService.GetAll().valueChanges();
    }
};
ManageTablesAdminComponent.ctorParameters = () => [
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] }
];
ManageTablesAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-tables-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-tables-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-tables-admin.component.scss */ "./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.scss")).default]
    })
], ManageTablesAdminComponent);



/***/ }),

/***/ "./src/app/components/socio/views/manage-usr/manage-usr.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-usr/manage-usr.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\ntable th {\n  border: none;\n  text-align: center;\n}\ntable tr {\n  text-align: center;\n}\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYW5hZ2UtdXNyL21hbmFnZS11c3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvbWFuYWdlLXVzci9tYW5hZ2UtdXNyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7QUNDUjtBREdBO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL21hbmFnZS11c3IvbWFuYWdlLXVzci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODc3KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgdGgge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgdHIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uYXJpYWwge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVzZXIge1xuICAgIC8vY3Vyc29yOiBwb2ludGVyO1xufSIsInRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg3Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcmlhbCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/socio/views/manage-usr/manage-usr.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-usr/manage-usr.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManageUsrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsrComponent", function() { return ManageUsrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/logging */ "./src/app/models/logging.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var src_app_services_firestorage_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/firebase/logging.service */ "./src/app/services/firebase/logging.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");












let ManageUsrComponent = class ManageUsrComponent {
    // tslint:disable-next-line: max-line-length
    constructor(userService, fileService, authService, movimientoService, toastr) {
        this.userService = userService;
        this.fileService = fileService;
        this.authService = authService;
        this.movimientoService = movimientoService;
        this.toastr = toastr;
        this.showingUsers = null;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.file = null;
    }
    ngOnInit() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            userLastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            userMail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            userImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.users = this.userService.GetAll2();
        this.haySeleccionado = false;
        this.usuarioSeleccionado = null;
        this.ClearFilters();
    }
    addUser() {
        let user;
        this.userService
            .buscarEmail(this.userForm.value.userMail)
            .then(resultado => {
            if (resultado) {
                this.toastr.error("Email duplicado");
                this.Cancel();
            }
            else if (!resultado) {
                user = src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"].CreateUserFromAdmin(this.userForm.value.userName, this.userForm.value.userLastname, this.userForm.value.userMail, this.userForm.value.userRole);
                this.userService.persistirUsuario(user, this.file).then(value => {
                    if (value) {
                        this.Cancel();
                    }
                    this.authService.GetCurrentUser().then(usr => {
                        let mensaje = `El usuario ${usr.email} dió de alta el usuario ${user.email}`;
                        this.movimientoService.persistirMovimiento(usr, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TargetMovimiento"].usuario, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TipoMovimiento"].alta, mensaje);
                    });
                });
            }
        });
    }
    onFileChanged(event) {
        this.file = event.target.files[0];
    }
    changeState(uid, state) {
        this.userService.GetUserByID(uid).then(usuarioMod => {
            if (state == "habilitado") {
                this.userService.updateState(uid, "deshabilitado");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} cambio el estado a deshabilitado  del usuario ${usuarioMod.email}`;
                    this.movimientoService.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TargetMovimiento"].usuario, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TipoMovimiento"].deshabilitacion, mensaje);
                });
            }
            if (state === "deshabilitado") {
                this.userService.updateState(uid, "habilitado");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} cambio el estado a habilitado  del usuario ${usuarioMod.email}`;
                    this.movimientoService.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TargetMovimiento"].usuario, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TipoMovimiento"].habilitacion, mensaje);
                });
            }
        });
    }
    deleteUser(uid) {
        this.userService.GetUserByID(uid).then(usuarioMod => {
            this.userService.delete(uid);
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} dio de baja al usuario ${usuarioMod.email}`;
                this.movimientoService.persistirMovimiento(user, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TargetMovimiento"].usuario, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TipoMovimiento"].borrado, mensaje);
            });
        });
    }
    editarUsuario(usuario) {
        this.usuarioSeleccionado = usuario;
        this.haySeleccionado = true;
        this.userForm.controls["userName"].setValue(usuario.name);
        this.userForm.controls["userLastname"].setValue(usuario.lastname);
        this.userForm.controls["userMail"].setValue(usuario.email);
        this.userForm.controls["userRole"].setValue(usuario.role);
        console.log(this.usuarioSeleccionado);
    }
    updateUser() {
        let rol = this.usuarioSeleccionado.role;
        this.usuarioSeleccionado.name = this.userForm.value.userName;
        this.usuarioSeleccionado.lastname = this.userForm.value.userLastname;
        this.usuarioSeleccionado.email = this.userForm.value.userMail;
        this.usuarioSeleccionado.role = this.userForm.value.userRole;
        this.userService
            .updateUser(this.usuarioSeleccionado, this.file)
            .then(() => {
            if (rol !== this.usuarioSeleccionado.role) {
                this.userService.SetRole(this.usuarioSeleccionado.email, this.usuarioSeleccionado.role);
            }
            this.authService
                .GetCurrentUser()
                .then(usr => {
                let mensaje = `El usuario ${usr.email} dió de modificó el usuario ${this.usuarioSeleccionado.email}`;
                this.movimientoService.persistirMovimiento(usr, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TargetMovimiento"].usuario, src_app_models_logging__WEBPACK_IMPORTED_MODULE_5__["TipoMovimiento"].alta, mensaje);
            })
                .then(() => {
                this.Cancel();
            });
        });
    }
    // ##### FILTER FUNCTIONS #####
    Filter(type) {
        this.showingUsers = this.users.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(users => {
            return users.filter(element => {
                element = Object.assign(new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"](), element);
                if (type === 'habilitados' || type === 'suspendidos') {
                    console.log(type);
                    if (type === 'suspendidos' && element.state === 'deshabilitado') {
                        return element;
                    }
                    else {
                        if (type === 'habilitados' && element.state === 'habilitado') {
                            return element;
                        }
                    }
                }
                else {
                    if (element.role === type) {
                        return element;
                    }
                }
            });
        }));
    }
    search() {
        this.showingUsers = this.users.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(usuarios => {
            return usuarios.filter(res => {
                res = Object.assign(new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"](), res);
                console.log(res.state);
                if (res.name.includes(this.busqueda) ||
                    res.email.includes(this.busqueda) ||
                    this.busqueda == null) {
                    if (!res.deleted) {
                        return res;
                    }
                }
            });
        }));
    }
    Cancel() {
        this.userForm.reset();
        this.onReset.next();
        this.haySeleccionado = false;
        this.usuarioSeleccionado = null;
    }
    ClearFilters() {
        this.search();
    }
};
ManageUsrComponent.ctorParameters = () => [
    { type: src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services_firestorage_file_service__WEBPACK_IMPORTED_MODULE_8__["FileService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_10__["LoggingService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }
];
ManageUsrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-manage-usr",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-usr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-usr/manage-usr.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-usr.component.scss */ "./src/app/components/socio/views/manage-usr/manage-usr.component.scss")).default]
    })
], ManageUsrComponent);



/***/ }),

/***/ "./src/app/components/socio/views/manejo-logs/manejo-logs.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/socio/views/manejo-logs/manejo-logs.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\ntable th {\n  border: none;\n  text-align: center;\n}\ntable tr {\n  text-align: center;\n}\nh4 {\n  color: darkgrey;\n}\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYW5lam8tbG9ncy9tYW5lam8tbG9ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYW5lam8tbG9ncy9tYW5lam8tbG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDSFI7QURLSTtFQUNJLGtCQUFBO0FDSFI7QURPQTtFQUNJLGVBQUE7QUNKSjtBRE9BO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL21hbmVqby1sb2dzL21hbmVqby1sb2dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXIge1xuICAgIC8vY3Vyc29yOiBwb2ludGVyO1xufVxuXG50YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg3Nyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIHRoIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIHRyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuaDR7XG4gICAgY29sb3I6IGRhcmtncmV5O1xufVxuXG4uYXJpYWwge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCJ0YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NzcpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxudGFibGUgdGgge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRhYmxlIHRyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNCB7XG4gIGNvbG9yOiBkYXJrZ3JleTtcbn1cblxuLmFyaWFsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/socio/views/manejo-logs/manejo-logs.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/socio/views/manejo-logs/manejo-logs.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ManejoLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManejoLogsComponent", function() { return ManejoLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/logging */ "./src/app/models/logging.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase/logging.service */ "./src/app/services/firebase/logging.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let ManejoLogsComponent = class ManejoLogsComponent {
    constructor(logService, toastr) {
        this.logService = logService;
        this.toastr = toastr;
        this.esVisible = false;
        this.showingLogs = null;
        this.todos = true;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.logForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            typeSocio: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            typeCervecero: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            typeBartender: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            typeCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            typeDelivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            typeCocinero: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            typeTodos: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](true),
            typeMozo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            fechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            fechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
        });
        this.arrayCB = new Array();
        this.enableDisable();
        this.cargarArrayCB();
        this.logs = this.logService.GetAll2();
        this.ClearFilters();
    }
    search() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.setFechas();
            this.data = new Array();
            this.showingLogs = this.logs.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(logs => {
                return logs.filter(res => {
                    res = Object.assign(new src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Log"](), res);
                    if (res['fecha'] > this.fechaInicio && res['fecha'] < this.fechaFin) {
                        if (res['usuario'].includes(this.busqueda) || this.busqueda == null) {
                            if (this.logForm.value.typeMozo && res['role'] === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].mozo) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeBartender && res['role'] === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].bartender) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeCervecero && res['role'] === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].cervecero) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeCliente && res['role'] === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].cliente) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeCocinero && res['role'] === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].cocinero) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeDelivery && res['role'] === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].delivery) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeSocio && res['role'] === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].socio) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeTodos) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            ;
                        }
                        ;
                    }
                });
            }));
        });
    }
    setFechas() {
        this.coincidencias = 0;
        if (this.logForm.value.fechaInicio == null) {
            this.fechaInicio = 0;
        }
        else {
            this.fechaInicio = Date.parse(this.logForm.value.fechaInicio.toString());
        }
        if (this.logForm.value.fechaFin == null) {
            this.fechaFin = Date.now();
        }
        else {
            this.fechaFin = Date.parse(this.logForm.value.fechaFin.toString());
        }
    }
    Cancel() {
        this.logForm.reset();
        this.onReset.next();
        this.logForm.controls['typeTodos'].setValue(true);
        this.enableDisable();
        this.logForm.controls['fechaInicio'].setValue(null);
        this.logForm.controls['fechaFin'].setValue(null);
        this.ClearFilters();
    }
    enableDisable() {
        if (this.todos) {
            this.logForm.controls['typeMozo'].disable();
            this.logForm.controls['typeCliente'].disable();
            this.logForm.controls['typeCocinero'].disable();
            this.logForm.controls['typeBartender'].disable();
            this.logForm.controls['typeCervecero'].disable();
            this.logForm.controls['typeDelivery'].disable();
            this.logForm.controls['typeSocio'].disable();
            this.logForm.controls['typeMozo'].setValue(false);
            this.logForm.controls['typeCliente'].setValue(false);
            this.logForm.controls['typeCocinero'].setValue(false);
            this.logForm.controls['typeBartender'].setValue(false);
            this.logForm.controls['typeCervecero'].setValue(false);
            this.logForm.controls['typeSocio'].setValue(false);
        }
        else {
            this.logForm.controls['typeMozo'].enable();
            this.logForm.controls['typeCliente'].enable();
            this.logForm.controls['typeCocinero'].enable();
            this.logForm.controls['typeBartender'].enable();
            this.logForm.controls['typeCervecero'].enable();
            this.logForm.controls['typeDelivery'].enable();
            this.logForm.controls['typeSocio'].enable();
        }
    }
    cargarArrayCB() {
        let typeMozo = this.logForm.value.typeMozo;
        let typeCliente = this.logForm.value.typeCliente;
        let typeCocinero = this.logForm.value.typeCocinero;
        let typeBartender = this.logForm.value.typeBartender;
        let typeCervecero = this.logForm.value.typeCervecero;
        let typeDelivery = this.logForm.value.typeDelivery;
        let typeSocio = this.logForm.value.typeSocio;
        let typeTodos = this.logForm.value.typeTodos;
        this.arrayCB.push(typeBartender, typeCervecero, typeCliente, typeCocinero, typeDelivery, typeMozo, typeSocio, typeTodos);
    }
    sendSettings() {
        // this.showingLogs = this.logs.filter(res => {
        this.showingLogs = this.logs.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(logs => {
            logs.filter(res => {
                if (this.logForm.value.typeMozo && res.role === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].mozo) {
                    return res;
                }
                if (this.logForm.value.typeBartender && res.role === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].bartender) {
                    return res;
                }
                if (this.logForm.value.typeCervecero && res.role === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].cervecero) {
                    return res;
                }
                if (this.logForm.value.typeCliente && res.role === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].cliente) {
                    return res;
                }
                if (this.logForm.value.typeCocinero && res.role === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].cocinero) {
                    return res;
                }
                if (this.logForm.value.typeDelivery && res.role === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].delivery) {
                    return res;
                }
                if (this.logForm.value.typeSocio && res.role === src_app_models_logging__WEBPACK_IMPORTED_MODULE_2__["Role"].socio) {
                    return res;
                }
                if (this.logForm.value.typeTodos) {
                    return res;
                }
                ;
            });
        }));
    }
    ClearFilters() {
        if (this.logForm.value.fechaInicio == null || this.logForm.value.fechaInicio === NaN) {
            this.fechaInicio = 0;
        }
        else {
            this.fechaInicio = Date.parse(this.logForm.value.fechaInicio.toString());
        }
        if (this.logForm.value.fechaFin == null || this.logForm.value.fechaFin === NaN) {
            this.fechaFin = Date.now();
        }
        else {
            this.fechaFin = Date.parse(this.logForm.value.fechaFin.toString());
        }
        console.log("1" + this.esVisible);
        this.search().then(() => {
            this.esVisible = true;
            console.log("2" + this.esVisible);
        });
        console.log("3" + this.esVisible);
    }
    exportCSV() {
        this.toastr.info('Descargando Logs del sistema');
        let csvData;
        let data = this.getData();
        setTimeout(function () {
            data.map(row => {
                csvData += row;
            });
            console.log(csvData);
            let file = new Blob([csvData], { type: 'text/csv' });
            let fileUrl = URL.createObjectURL(file);
            let hiddenEl = document.createElement('a');
            hiddenEl.href = fileUrl;
            hiddenEl.target = '_blank';
            hiddenEl.download = 'LogDelSistema.csv';
            hiddenEl.click();
        }, 4000);
    }
    getData() {
        let data = [];
        data.push(['categoria,nombre,cantidad,tipo\n']);
        this.data.forEach(log => {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US');
            const myFormattedDate = datePipe.transform(log.fecha, 'hh:mm dd/MM/yyyy');
            data.push([log.usuario + ',' + myFormattedDate + ',' + log.observacion + '\n']);
        });
        return data;
    }
};
ManejoLogsComponent.ctorParameters = () => [
    { type: src_app_services_firebase_logging_service__WEBPACK_IMPORTED_MODULE_4__["LoggingService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
ManejoLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manejo-logs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manejo-logs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manejo-logs/manejo-logs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manejo-logs.component.scss */ "./src/app/components/socio/views/manejo-logs/manejo-logs.component.scss")).default]
    })
], ManejoLogsComponent);



/***/ }),

/***/ "./src/app/components/socio/views/survey-table/survey-table.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/socio/views/survey-table/survey-table.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background: silver;\n  border: 1px solid black;\n}\ntable th {\n  border: none;\n}\n.red {\n  color: red;\n}\n.yellow {\n  color: #d8b800;\n}\n.green {\n  color: #01b301;\n}\n.survey {\n  cursor: pointer;\n}\n.tprincipal {\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  text-align: center;\n  font-size: 40px;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0Rlc2t0b3AvR0lUL0xBQ09NQU5EQUJSSU5PL3NyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9zdXJ2ZXktdGFibGUvc3VydmV5LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL3N1cnZleS10YWJsZS9zdXJ2ZXktdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7QUNDUjtBREdBO0VBQ0ksVUFBQTtBQ0FKO0FER0E7RUFDSSxjQUFBO0FDQUo7QURHQTtFQUNJLGNBQUE7QUNBSjtBREdBO0VBQ0ksZUFBQTtBQ0FKO0FER0E7RUFDSSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL3N1cnZleS10YWJsZS9zdXJ2ZXktdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgYmFja2dyb3VuZDogc2lsdmVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgdGgge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufVxuXG4ucmVkIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ueWVsbG93IHtcbiAgICBjb2xvcjogcmdiKDIxNiwgMTg0LCAwKTtcbn1cblxuLmdyZWVuIHtcbiAgICBjb2xvcjogcmdiKDEsIDE3OSwgMSk7XG59XG5cbi5zdXJ2ZXkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRwcmluY2lwYWx7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJnYigwLCAwLDApO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udDogYm9sZDtcbn0iLCJ0YWJsZSB7XG4gIGJhY2tncm91bmQ6IHNpbHZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi55ZWxsb3cge1xuICBjb2xvcjogI2Q4YjgwMDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICMwMWIzMDE7XG59XG5cbi5zdXJ2ZXkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cHJpbmNpcGFsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/socio/views/survey-table/survey-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/socio/views/survey-table/survey-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SurveyTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTableComponent", function() { return SurveyTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase/survey.service */ "./src/app/services/firebase/survey.service.ts");



let SurveyTableComponent = class SurveyTableComponent {
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    ngOnInit() {
        this.surveys = this.surveyService.GetAll().valueChanges();
    }
    SelectSurvey(surv) {
        this.survey = surv;
    }
};
SurveyTableComponent.ctorParameters = () => [
    { type: src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"] }
];
SurveyTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-survey-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./survey-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/survey-table/survey-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./survey-table.component.scss */ "./src/app/components/socio/views/survey-table/survey-table.component.scss")).default]
    })
], SurveyTableComponent);



/***/ }),

/***/ "./src/app/directives/is-prod.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/is-prod.directive.ts ***!
  \*************************************************/
/*! exports provided: IsProdDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsProdDirective", function() { return IsProdDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let IsProdDirective = class IsProdDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production)
            this.el.nativeElement.style.display = 'none';
    }
};
IsProdDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isProd')
], IsProdDirective.prototype, "nothing", void 0);
IsProdDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[isProd]'
    })
], IsProdDirective);



/***/ }),

/***/ "./src/app/directives/survey-average.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/survey-average.directive.ts ***!
  \********************************************************/
/*! exports provided: SurveyAverageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyAverageDirective", function() { return SurveyAverageDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SurveyAverageDirective = class SurveyAverageDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (!this.returnAvg)
            this.Paint();
    }
    ngOnChanges() {
        if (this.returnAvg)
            this.el.nativeElement.innerHTML = this.CalculateAverage().toFixed(2);
    }
    CalculateAverage() {
        return (this.survey.tableScore +
            this.survey.restaurantScore +
            this.survey.waiterScore +
            this.survey.cookScore) / 4;
    }
    Paint() {
        let avg = this.CalculateAverage();
        if (avg < 4)
            this.el.nativeElement.style.color = 'red';
        else if (avg >= 4 && avg < 7)
            this.el.nativeElement.style.color = 'yellow';
        else
            this.el.nativeElement.style.color = 'green';
    }
};
SurveyAverageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('surveyAverage')
], SurveyAverageDirective.prototype, "survey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('returnAverage')
], SurveyAverageDirective.prototype, "returnAvg", void 0);
SurveyAverageDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[surveyAverage]'
    })
], SurveyAverageDirective);



/***/ }),

/***/ "./src/app/directives/survey-comment.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/survey-comment.directive.ts ***!
  \********************************************************/
/*! exports provided: SurveyCommentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCommentDirective", function() { return SurveyCommentDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SurveyCommentDirective = class SurveyCommentDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnChanges() {
        if (this.isIcon) {
            if (this.isPositive)
                this.el.nativeElement.innerHTML = '<i class="fas fa-check-circle" style="color: green"></i>';
            else
                this.el.nativeElement.innerHTML = '<i class="fas fa-exclamation" style="color: red"></i>';
        }
        else {
            if (this.isPositive)
                this.el.nativeElement.innerHTML = 'El comentario dado por el cliente fue positivo.';
            else
                this.el.nativeElement.innerHTML = 'El comentario dado por el cliente fue negativo.';
        }
    }
};
SurveyCommentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('surveyComment')
], SurveyCommentDirective.prototype, "isPositive", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isIcon')
], SurveyCommentDirective.prototype, "isIcon", void 0);
SurveyCommentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[surveyComment]'
    })
], SurveyCommentDirective);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(afsAuth, router) {
        this.afsAuth = afsAuth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.afsAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(authState => !!authState), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(auth => {
            if (!auth)
                this.router.navigate(['/app/login']);
            else
                console.log('Is auth:', auth);
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/models/logging.ts":
/*!***********************************!*\
  !*** ./src/app/models/logging.ts ***!
  \***********************************/
/*! exports provided: Log, Role, TipoMovimiento, TargetMovimiento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMovimiento", function() { return TipoMovimiento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetMovimiento", function() { return TargetMovimiento; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Log {
    constructor() {
        this.id = '';
        this.usuario = '';
        this.role = null;
        this.target = null;
        this.tipo = null;
        this.fecha = null;
        this.observacion = '';
    }
    // tslint:disable-next-line: max-line-length
    static CreateLogWithParams(usuario, role, target, tipo, observacion) {
        let movimiento = new Log();
        movimiento.usuario = usuario;
        movimiento.role = role;
        movimiento.target = target;
        movimiento.tipo = tipo;
        movimiento.observacion = observacion;
        movimiento.fecha = Date.now();
        return movimiento;
    }
}
var Role;
(function (Role) {
    Role["socio"] = "socio";
    Role["mozo"] = "mozo";
    Role["cocinero"] = "cocinero";
    Role["cervecero"] = "cervecero";
    Role["bartender"] = "bartender";
    Role["cliente"] = "cliente";
    Role["delivery"] = "delivery";
})(Role || (Role = {}));
var TipoMovimiento;
(function (TipoMovimiento) {
    TipoMovimiento["alta"] = "Alta";
    TipoMovimiento["habilitacion"] = "Habilitacion";
    TipoMovimiento["deshabilitacion"] = "Deshabilitacion";
    TipoMovimiento["modificacion"] = "Modificacion";
    TipoMovimiento["ingreso"] = "Ingreso";
    TipoMovimiento["egreso"] = "Egreso";
    TipoMovimiento["entrega"] = "Entrega";
    TipoMovimiento["suspension"] = "Suspension";
    TipoMovimiento["reincorporacion"] = "Reincorporacion";
    TipoMovimiento["borrado"] = "Borrado";
    TipoMovimiento["preparacion"] = "En preparaci\u00F3n";
    TipoMovimiento["finalizacion"] = "Finaliz\u00F3";
})(TipoMovimiento || (TipoMovimiento = {}));
var TargetMovimiento;
(function (TargetMovimiento) {
    TargetMovimiento["usuario"] = "Usuario";
    TargetMovimiento["producto"] = "Producto";
    TargetMovimiento["pedido"] = "Pedido";
    TargetMovimiento["mesa"] = "Mesa";
})(TargetMovimiento || (TargetMovimiento = {}));


/***/ }),

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order, OrderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderState", function() { return OrderState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/app/models/product.ts");
/* harmony import */ var _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");



class Order {
    constructor() {
        this.codeID = Order.GenerateCodeID();
        this.items = [];
        this.totalPrice = 0;
        this.tableID = '';
        this.state = OrderState.verificar;
        this.timeLeft = undefined;
        this.timestamp = Date.now();
        this.completed = false;
        this.delayed = null;
    }
    CompleteOrder() {
        this.completed = true;
        this.state = OrderState.served;
        //AGREGADO OJO/////
        if (this.timeLeft !== null) {
            const resta = new Date().getTime() - new Date(this.timeLeft).getTime();
            if (resta > 0) {
                this.delayed = resta;
            }
            //AGREGADO OJO ////
        }
    }
    CalculateTimeInMinutes() {
        let minutes = 0;
        let difference = new Date(this.timeLeft).getTime() - (new Date()).getTime();
        minutes = Math.floor(difference / (1000 * 60));
        return minutes;
    }
    AddMinutes(minutes) {
        let theDate;
        if (!this.timeLeft)
            theDate = new Date();
        else
            theDate = new Date(this.timeLeft);
        let time = theDate.getTime() + Math.floor(minutes * (1000 * 60));
        let date = new Date(time);
        this.timeLeft = _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_2__["CommonHelper"].ConvertDate(date);
    }
    CalculateTotal() {
        this.totalPrice = this.items.reduce((before, actual) => {
            return before + actual.price;
        }, 0);
    }
    UpdateOrderState() {
        if (this.IsFinished())
            this.state = OrderState.readyToServe;
        else if (this.IsBeingPrepared())
            this.state = OrderState.cooking;
        else
            this.state = OrderState.pending;
    }
    static Create(tableID) {
        let newOrder = new Order();
        newOrder.tableID = tableID;
        return newOrder;
    }
    CheckOrder() {
        let isValid = false;
        if ((this.codeID != '' && this.codeID != undefined) &&
            this.items.length > 0 &&
            this.totalPrice > 0 &&
            (this.tableID != '' && this.tableID != undefined) &&
            this.state != undefined &&
            (this.timestamp != undefined && this.timestamp != 0))
            isValid = true;
        return isValid;
    }
    static GenerateCodeID() {
        let code = '';
        let now = new Date();
        code += now.getDate();
        code += now.getHours();
        code += now.getMinutes();
        let number = Math.floor((Math.random() * 5) + 1);
        switch (number) {
            case 1:
                code += 'A';
                break;
            case 2:
                code += 'B';
                break;
            case 3:
                code += 'C';
                break;
            case 4:
                code += 'D';
                break;
            default:
                code += 'E';
                break;
        }
        return code;
    }
    IsBeingPrepared() {
        let isBeingPrepared = false;
        this.items.forEach(el => {
            if (el.state == _product__WEBPACK_IMPORTED_MODULE_1__["FoodState"].preparing)
                isBeingPrepared = true;
        });
        return isBeingPrepared;
    }
    IsFinished() {
        let finished = true;
        this.items.forEach(el => {
            if (el.state != _product__WEBPACK_IMPORTED_MODULE_1__["FoodState"].finished)
                finished = false;
        });
        return finished;
    }
}
var OrderState;
(function (OrderState) {
    OrderState["pending"] = "Pendiente";
    OrderState["cooking"] = "Cocin\u00E1ndose";
    OrderState["readyToServe"] = "Listo para servir";
    OrderState["served"] = "Servido";
    OrderState["paidOut"] = "Pagado";
    OrderState["cancelled"] = "Cancelado";
    OrderState["verificar"] = "Verificar";
})(OrderState || (OrderState = {}));


/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product, FoodType, FoodState, Cook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodType", function() { return FoodType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodState", function() { return FoodState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cook", function() { return Cook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Product {
    constructor() {
        this.codeID = "";
        this.name = "";
        this.image = "";
        this.price = -1;
        this.foodTypes = [];
        this.state = FoodState.pending;
        this.demand = 0;
    }
    IsFoodType(type) {
        return this.foodTypes.includes(type);
    }
    static Create(code, name, pathImg, price, foodTypes, cook, description) {
        let newProd = new Product();
        newProd.codeID = code;
        newProd.name = name;
        newProd.image = pathImg;
        newProd.price = price;
        newProd.foodTypes = foodTypes;
        newProd.cook = cook;
        newProd.description = description;
        return newProd;
    }
}
var FoodType;
(function (FoodType) {
    FoodType["comida"] = "comida";
    FoodType["bebida"] = "bebida";
    FoodType["postre"] = "postre";
    FoodType["alcohol"] = "alcohol";
    FoodType["celiaco"] = "celiaco";
    FoodType["vegano"] = "vegano";
})(FoodType || (FoodType = {}));
var FoodState;
(function (FoodState) {
    FoodState["pending"] = "Pendiente";
    FoodState["preparing"] = "Prepar\u00E1ndose";
    FoodState["finished"] = "Terminando";
})(FoodState || (FoodState = {}));
var Cook;
(function (Cook) {
    Cook["cocinero"] = "cocinero";
    Cook["cervecero"] = "cervecero";
    Cook["bartender"] = "bartender";
})(Cook || (Cook = {}));


/***/ }),

/***/ "./src/app/models/survey.ts":
/*!**********************************!*\
  !*** ./src/app/models/survey.ts ***!
  \**********************************/
/*! exports provided: Survey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return Survey; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Survey {
    constructor() {
        this.tableScore = 0;
        this.waiterScore = 0;
        this.restaurantScore = 0;
        this.cookScore = 0;
    }
    static Create(order, table, waiter, restaurant, cook, comment, commentType) {
        let newSurvey = new Survey();
        newSurvey.order = order;
        newSurvey.tableScore = table;
        newSurvey.waiterScore = waiter;
        newSurvey.restaurantScore = restaurant;
        newSurvey.cookScore = cook;
        newSurvey.comment = comment;
        newSurvey.commentType = commentType;
        newSurvey.fecha = new Date();
        return newSurvey;
    }
}


/***/ }),

/***/ "./src/app/models/table.ts":
/*!*********************************!*\
  !*** ./src/app/models/table.ts ***!
  \*********************************/
/*! exports provided: Table, TableState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableState", function() { return TableState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Table {
    constructor() {
        this.tableID = '';
        this.state = TableState.available;
    }
    static Create(tableID, state) {
        let newTable = new Table();
        newTable.tableID = tableID;
        newTable.state = state;
        return newTable;
    }
}
var TableState;
(function (TableState) {
    TableState["available"] = "Disponible";
    TableState["waitingOrder"] = "Cliente esperando pedido";
    TableState["eating"] = "Cliente comiendo";
    TableState["paying"] = "Cliente pagando";
    TableState["closed"] = "Cerrada";
})(TableState || (TableState = {}));


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User, Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor() {
        this.name = "";
        this.lastname = "";
        this.password = "";
        this.email = "";
        this.role = Role.socio;
        this.image = 'assets/img/default-profile.png';
    }
    static CreateUserWithParams(name, lastname, email, password, role) {
        let user = new User();
        user.name = name;
        user.lastname = lastname;
        user.password = password;
        user.email = email;
        user.role = role;
        user.deleted = false;
        user.state = 'habilitado';
        return user;
    }
    static CreateUserFromAdmin(name, lastname, email, role) {
        let user = new User();
        user.name = name;
        user.lastname = lastname;
        user.password = email;
        user.email = email;
        user.role = role;
        user.deleted = false;
        user.state = 'habilitado';
        return user;
    }
}
var Role;
(function (Role) {
    Role["socio"] = "socio";
    Role["mozo"] = "mozo";
    Role["cocinero"] = "cocinero";
    Role["cervecero"] = "cervecero";
    Role["bartender"] = "bartender";
    Role["cliente"] = "cliente";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/pipes/neat-date.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/neat-date.pipe.ts ***!
  \*****************************************/
/*! exports provided: NeatDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeatDatePipe", function() { return NeatDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NeatDatePipe = class NeatDatePipe {
    transform(value) {
        if (value == undefined || value == '')
            return 'No se registró la fecha.';
        let fullDate = value.split(" ")[0];
        let splittedDate = fullDate.split("-");
        let day = splittedDate[2];
        let month = splittedDate[1];
        let year = splittedDate[0];
        switch (day) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                day = '0' + day;
                break;
            default:
                break;
        }
        let finalDate = day + '-' + month + '-' + year;
        return finalDate;
    }
};
NeatDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'neatDate'
    })
], NeatDatePipe);



/***/ }),

/***/ "./src/app/pipes/sort-pipe.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/sort-pipe.pipe.ts ***!
  \*****************************************/
/*! exports provided: SortPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipePipe", function() { return SortPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortPipePipe = class SortPipePipe {
    transform(array, args) {
        if (array != null) {
            return array.sort((a, b) => {
                if (a[args] < b[args]) {
                    return -1;
                }
                else if (a[args] > b[args]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    }
};
SortPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sortPipe'
    })
], SortPipePipe);



/***/ }),

/***/ "./src/app/pipes/table.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/table.pipe.ts ***!
  \*************************************/
/*! exports provided: TablePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePipe", function() { return TablePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TablePipe = class TablePipe {
    transform(value) {
        switch (value) {
            case 'VEN01':
            case 'VEN02':
            case 'VEN03':
            case 'PAS01':
            case 'PAS02':
                // case 'CM':
                // case 'DW':
                // case 'DM':
                return 'Mesa ' + value;
            default:
                return 'No hay mesa';
        }
    }
};
TablePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'table'
    })
], TablePipe);



/***/ }),

/***/ "./src/app/pipes/timeleft.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/timeleft.pipe.ts ***!
  \****************************************/
/*! exports provided: TimeleftPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeleftPipe", function() { return TimeleftPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimeleftPipe = class TimeleftPipe {
    transform(value) {
        if (value == undefined || isNaN(value) || value == 0)
            return 'No tiene un tiempo estimado asignado.';
        let diff = Math.floor(value / (1000 * 60));
        if (diff < 0)
            return 'Pasado por ' + (diff * -1) + ' minutos.';
        else
            return diff + ' minutos.';
    }
};
TimeleftPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'timeleft'
    })
], TimeleftPipe);



/***/ }),

/***/ "./src/app/services/authentication/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/authentication/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _firebase_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_8__);









let AuthService = class AuthService {
    constructor(afsAuth, db, router, userService) {
        this.afsAuth = afsAuth;
        this.db = db;
        this.router = router;
        this.userService = userService;
    }
    RegisterWithEmail(user) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(userData => {
                resolve(userData);
                this.userService.Add(user);
                console.log('Register successful');
            })
                .catch(error => console.log(reject(error)));
        });
    }
    RegisterWithEmailAdmin(mail) {
        this.userService.GetUserByEmail(mail).then(user => {
            const pass = user.password;
            this.RegisterWithEmail(user).then(() => {
                this.LoginWithEmail(mail, pass);
            });
        });
    }
    LoginWithEmail(email, pwd) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.signInWithEmailAndPassword(email, pwd)
                .then(userData => {
                resolve(userData);
                console.log('Login success', userData);
                this.RedirectForRole(email);
            })
                .catch(error => reject(error));
        });
    }
    LogoutEmail() {
        this.afsAuth.auth.signOut();
    }
    GetCurrentUser() {
        return this.GetCurrentEmail().then(email => {
            if (!email)
                Object(q__WEBPACK_IMPORTED_MODULE_8__["reject"])('error');
            return this.userService.GetUserByEmail(email).then(user => {
                return this.RemoveUserPassword(user);
            });
        });
    }
    GetCurrentEmail() {
        return this.afsAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(user => user.email))
            .toPromise();
    }
    RemoveUserPassword(user) {
        user.password = '';
        return user;
    }
    RedirectForRole(email) {
        this.userService.GetUserByEmail(email).then(user => {
            switch (user.role) {
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cliente:
                    this.router.navigate(['/cliente']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].mozo:
                    this.router.navigate(['/mozo']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].socio:
                    this.router.navigate(['/socio']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cocinero:
                    this.router.navigate(['/cocinero']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cervecero:
                    this.router.navigate(['/cervecero']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].bartender:
                    this.router.navigate(['/bartender']);
                    break;
                default:
                    alert('No tiene rol.');
                    break;
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _firebase_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/firebase/logging.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/firebase/logging.service.ts ***!
  \******************************************************/
/*! exports provided: LoggingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingService", function() { return LoggingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/logging */ "./src/app/models/logging.ts");
/* harmony import */ var _firestorage_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");








let LoggingService = class LoggingService {
    constructor(db, afsFunc, fileService) {
        this.db = db;
        this.afsFunc = afsFunc;
        this.fileService = fileService;
        this.listado = new Array();
        this.movimientos = this.db.collection('movimientos');
        this.traerMovimientosArray();
    }
    GetAll3() {
        return this.db.collection('movimientos').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(logs => {
            return logs.filter(res => {
                res = Object.assign(new src_app_models_logging__WEBPACK_IMPORTED_MODULE_3__["Log"](), res);
                return res;
            });
        }));
    }
    GetAll2() {
        return this.db.collection('movimientos');
    }
    GetAll() {
        return this.db.collection('movimientos');
    }
    traerMovimientosArray() {
        let listadoObservable = null;
        listadoObservable = this.traerMovimientos();
        listadoObservable.subscribe(movs => {
            movs.forEach(unMov => {
                let m = new src_app_models_logging__WEBPACK_IMPORTED_MODULE_3__["Log"];
                m.id = unMov.id;
                m.role = unMov.role;
                m.target = unMov.target;
                m.usuario = unMov.usuario;
                m.tipo = unMov.tipo;
                m.fecha = unMov.fecha;
                m.observacion = unMov.observacion;
                this.listado.push(m);
            });
        });
    }
    traerMovimientos() {
        return this.movimientos.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => {
            return actions.map(action => {
                const datos = action.payload.doc.data();
                const id = action.payload.doc.id;
                return Object.assign({ id }, datos);
            });
        }));
    }
    persistirMovimiento(usuario, target, tipo, observacion) {
        let movimiento = src_app_models_logging__WEBPACK_IMPORTED_MODULE_3__["Log"].CreateLogWithParams(usuario.email, usuario.role, target, tipo, observacion);
        return this.movimientos.add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonHelper"].ConvertToObject(movimiento)).then(doc => {
            this.movimientos.doc(doc.id).update({ id: doc.id });
            console.log('persistio');
        }).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
    }
};
LoggingService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctions"] },
    { type: _firestorage_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] }
];
LoggingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoggingService);



/***/ }),

/***/ "./src/app/services/firebase/order.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/firebase/order.service.ts ***!
  \****************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");







let OrderService = class OrderService {
    constructor(db, fileService) {
        this.db = db;
        this.fileService = fileService;
    }
    Add(order) {
        this.db.collection("pedidos").add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].ConvertToObject(order));
        console.log("Orden: ", order);
    }
    // public updateOrderItem(idOrder: string, productos: Product[]){
    // 	let prodductosAux: Product[];
    // }
    GetAllOrderByTime() {
        return this.db.collection("pedidos", ref => ref.where("completed", "==", false));
    }
    setOrderImage(code, image) {
        this.GetByCodeID(code)
            .then(ord => {
            this.UpdateImage(ord, image);
        })
            .catch(() => {
            console.log("no se pudo subir");
        });
    }
    UpdateImage(order, image) {
        return this.fileService.subirFotoPedido(image, order.id).then(() => {
            return true;
        });
    }
    GetAllCompletedOrders_InArray() {
        return this.db
            .collection("pedidos", ref => ref.where("completed", "==", true))
            .get()
            .toPromise()
            .then(doc => {
            let orders = [];
            doc.docs.forEach(el => {
                orders.push(el.data());
            });
            return orders;
        });
    }
    GetAllByWaiterOrderByTime(email) {
        return this.db.collection("pedidos", ref => ref.where("waiter.email", "==", email).where("completed", "==", false));
    }
    GetAllByCook(cook) {
        let documents = this.db.collection("pedidos", ref => ref.where("completed", "==", false).orderBy("timestamp", "desc"));
        return documents.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"](), order);
                let hasRole = false;
                order["items"].forEach(el => {
                    if (el.cook === cook) {
                        hasRole = true;
                    }
                });
                if (hasRole) {
                    return order;
                }
            });
        }));
    }
    GetByCodeUser(code) {
        let documents = this.db.collection("pedidos", ref => ref.where("client.email", "==", code) &&
            ref.where("completed", "==", false));
        return documents
            .get()
            .toPromise()
            .then(doc => {
            return new Promise((resolve, reject) => {
                if (doc.docs[0]) {
                    let theOrder = doc.docs[0].data();
                    theOrder.id = doc.docs[0].id;
                    resolve(theOrder);
                }
                else
                    reject("No se encontró el pedido.");
            });
        });
    }
    GetAllCancelled() {
        return this.db
            .collection("pedidos")
            .valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"](), order);
                if (order["state"] == "Cancelado")
                    return order;
            });
        }));
    }
    GetAllDelayed() {
        return this.db
            .collection("pedidos")
            .valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"](), order);
                if (order["delayed"] < 0) {
                    return order;
                }
            });
        }));
    }
    GetAll() {
        return this.db.collection("pedidos");
    }
    ChangeStatus(state, orderCode) {
        this.GetByCodeID(orderCode).then(order => {
            order.state = state;
            this.db
                .collection("pedidos")
                .doc(order.id)
                .update(order);
        });
    }
    UpdateImageURL(order, url) {
        this.GetByCodeID(order.codeID)
            .then(ord => {
            this.fileService.updatePhotoUrlOrders(url, ord.id);
        })
            .catch(() => {
            console.log("no se pudo actualizar url de imagen");
        });
    }
    Update(order) {
        return this.GetByCodeID(order.codeID)
            .then(or => {
            let obj = src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].ConvertToObject(order);
            this.db
                .collection("pedidos")
                .doc(or.id)
                .update(obj);
        })
            .then(() => {
            return true;
        })
            .catch(() => {
            return false;
        });
    }
    GetByCodeID(code) {
        let documents = this.db.collection("pedidos", ref => ref.where("codeID", "==", code));
        return documents
            .get()
            .toPromise()
            .then(doc => {
            return new Promise((resolve, reject) => {
                if (doc.docs[0]) {
                    let theOrder = doc.docs[0].data();
                    theOrder.id = doc.docs[0].id;
                    resolve(theOrder);
                }
                else
                    reject("No se encontró el pedido.");
            });
        });
    }
    traerOrdenesArray() {
        this.db
            .collection("pedidos")
            .get()
            .toPromise()
            .then(doc => {
            let orders = [];
            doc.docs.forEach(el => {
                orders.push(el.data());
            });
            return orders;
        });
    }
    GetAllCancelledOrders_InArray() {
        return this.db
            .collection("pedidos")
            .get()
            .toPromise()
            .then(doc => {
            let orders = [];
            doc.docs.forEach(el => {
                let ela = el.data();
                if (ela["state"] == "Cancelado") {
                    orders.push(ela);
                }
            });
            return orders;
        });
    }
    GetAllDelayedOrders_InArray() {
        return this.db
            .collection("pedidos")
            .get()
            .toPromise()
            .then(doc => {
            let orders = [];
            doc.docs.forEach(el => {
                let ela = el.data();
                if (ela["delayed"] != null) {
                    orders.push(ela);
                }
            });
            return orders;
        });
    }
    GetAllByWaiterOrderByTime2(email) {
        const pendiente = "Pendiente";
        const servido = "Servido";
        return this.db.collection("pedidos", ref => ref.where("client.email", "==", email));
    }
};
OrderService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], OrderService);



/***/ }),

/***/ "./src/app/services/firebase/producto-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/firebase/producto-service.service.ts ***!
  \***************************************************************/
/*! exports provided: ProductoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoServiceService", function() { return ProductoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/es2015/index.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");








let ProductoServiceService = class ProductoServiceService {
    constructor(db, afsFunc, fileService) {
        this.db = db;
        this.afsFunc = afsFunc;
        this.fileService = fileService;
        this.listado = new Array();
        this.primerosTres = new Array();
        this.ultimosTres = new Array();
        this.productos = this.db.collection('productos');
        this.traerProductosArray();
        console.log(this.listado);
    }
    GetAll2() {
        return this.db.collection('productos');
    }
    traerProductos() {
        return this.productos.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(actions => {
            return actions.map(action => {
                const datos = action.payload.doc.data();
                const id = action.payload.doc.id;
                return Object.assign({ id }, datos);
            });
        }));
    }
    traerProductosArray() {
        let listadoObservable = null;
        listadoObservable = this.traerProductos();
        console.log('traerProductosArray ListadoObservable');
        listadoObservable.subscribe(prods => {
            prods.forEach(unProd => {
                let p = new src_app_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
                p.codeID = unProd.codeID;
                p.cook = unProd.cook;
                p.description = unProd.description;
                p.foodTypes = unProd.foodTypes;
                p.name = unProd.name;
                p.image = unProd.image;
                p.price = parseInt(unProd.price);
                p.state = unProd.state;
                p.worker = unProd.worker;
                this.listado.push(p);
            });
        });
    }
    persistirProducto(producto, foto) {
        return this.productos.add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonHelper"].ConvertToObject(producto)).then(doc => {
            this.productos.doc(doc.id).update({ codeID: doc.id });
            if (foto) {
                this.fileService.subirFotoProducto(foto, doc.id);
            }
        }).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
    }
    updateState(uid, state) {
        this.productos.doc(uid).update({ state: state });
    }
    updateProd(producto, foto) {
        return this.productos.doc(producto.codeID).update({
            name: producto.name,
            price: producto.price,
            foodTypes: producto.foodTypes,
            cook: producto.cook,
            description: producto.description
        }).then(() => {
            if (foto) {
                this.fileService.subirFotoProducto(foto, producto.codeID);
            }
        }).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
    }
    GetProductByID(id) {
        let docRef = this.db.collection('productos', ref => ref.where('codeID', '==', id));
        return docRef.get().toPromise().then(doc => {
            let product = doc.docs[0].data();
            product.codeID = doc.docs[0].id;
            return product;
        });
    }
};
ProductoServiceService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__["AngularFireFunctions"] },
    { type: _firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"] }
];
ProductoServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductoServiceService);



/***/ }),

/***/ "./src/app/services/firebase/survey.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/firebase/survey.service.ts ***!
  \*****************************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");




let SurveyService = class SurveyService {
    constructor(db) {
        this.db = db;
    }
    GetAll() {
        return this.db.collection('encuestas');
    }
    Add(surv) {
        return new Promise((resolve, reject) => {
            this.db.collection('encuestas').add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].ConvertToObject(surv))
                .then(() => resolve())
                .catch(() => reject());
        });
    }
    GetAll2() {
        return this.db.collection('encuestas');
    }
};
SurveyService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SurveyService);



/***/ }),

/***/ "./src/app/services/firebase/table.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/firebase/table.service.ts ***!
  \****************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/table */ "./src/app/models/table.ts");




let TableService = class TableService {
    constructor(db) {
        this.db = db;
    }
    GetAll() {
        return this.db.collection("mesas");
    }
    UpdateStatus(tableID, newState) {
        let document = this.db.collection("mesas", ref => ref.where('tableID', '==', tableID));
        return document.get().toPromise()
            .then(doc => {
            let table = doc.docs[0].data();
            table.id = doc.docs[0].id;
            table.state = newState;
            return this.db.collection("mesas").doc(table.id).update(table)
                .then(() => {
                return true;
            })
                .catch(() => {
                return false;
            });
        })
            .catch(() => {
            return false;
        });
    }
    FindAvailable() {
        let documents = this.db.collection('mesas', ref => ref.where('state', '==', src_app_models_table__WEBPACK_IMPORTED_MODULE_3__["TableState"].available));
        return documents.get().toPromise()
            .then(doc => {
            let newTable;
            let found = false;
            doc.docs.forEach(table => {
                if (table.exists && !found) {
                    newTable = table.data();
                    newTable.id = table.id;
                    found = true;
                }
            });
            if (!found)
                newTable = src_app_models_table__WEBPACK_IMPORTED_MODULE_3__["Table"].Create('No hay', src_app_models_table__WEBPACK_IMPORTED_MODULE_3__["TableState"].closed);
            return newTable;
        });
    }
};
TableService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TableService);



/***/ }),

/***/ "./src/app/services/firebase/user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/firebase/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/es2015/index.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");
/* harmony import */ var _firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let UserService = class UserService {
    constructor(db, afsFunc, fileService) {
        this.db = db;
        this.afsFunc = afsFunc;
        this.fileService = fileService;
        this.listado = new Array();
        this.usuarios = this.db.collection("usuarios");
        this.traerUsuariosArray();
    }
    GetAll_InArray() {
        return this.db
            .collection("usuarios")
            .get()
            .toPromise()
            .then(doc => {
            let users = [];
            doc.docs.forEach(el => {
                let us = el.data();
                us.password = "";
                users.push(us);
            });
            return users;
        });
    }
    GetAll() {
        return this.db
            .collection("usuarios")
            .valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(actions => {
            return actions.map(action => {
                return (action = Object.assign(new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"](), action));
            });
        }));
    }
    GetAll2() {
        return this.db.collection("usuarios");
    }
    SetRole(email, role) {
        this.SetRoleInFirebase(email, role);
        this.SetRoleInCloudFunctions(email, role);
    }
    Add(user) {
        this.db.collection("usuarios").add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonHelper"].ConvertToObject(user));
    }
    SetRoleInCloudFunctions(email, role) {
        const setRoleFunction = this.afsFunc.httpsCallable("setRole");
        setRoleFunction({ email: email, desiredRole: role }).subscribe(response => console.log(response));
    }
    SetRoleInFirebase(email, role) {
        this.GetUserByEmail(email).then(doc => {
            let user = doc;
            user.role = role;
            this.db
                .collection("usuarios")
                .doc(doc.id)
                .update(user);
            console.log("User role updated on firebase!");
        });
    }
    GetUserByEmail(email) {
        let docRef = this.db.collection("usuarios", ref => ref.where("email", "==", email));
        return docRef
            .get()
            .toPromise()
            .then(doc => {
            if (!doc.empty) {
                let user = doc.docs[0].data();
                user.id = doc.docs[0].id;
                return user;
            }
            else {
                return null;
            }
        });
    }
    buscarEmail(email) {
        let docRef = this.db.collection("usuarios", ref => ref.where("email", "==", email));
        return docRef
            .get()
            .toPromise()
            .then(doc => {
            if (!doc.empty) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    GetAllWaiters() {
        let documents = this.db.collection("usuarios", ref => ref.where("role", "==", "mozo"));
        return documents
            .get()
            .toPromise()
            .then(doc => {
            var waiters = [];
            doc.docs.forEach(user => {
                let waiter = user.data();
                waiter.id = user.id;
                waiters.push(waiter);
            });
            return waiters;
        });
    }
    GetUserByID(id) {
        let docRef = this.db.collection('usuarios', ref => ref.where('id', '==', id));
        return docRef
            .get()
            .toPromise()
            .then(doc => {
            let user = doc.docs[0].data();
            user.id = doc.docs[0].id;
            return user;
        });
    }
    ModifyProfileImage(email, image) {
        return this.GetUserByEmail(email).then(doc => {
            let user = doc;
            this.fileService.subirFotoUsuarios(image, user.id);
        });
    }
    traerUsuariosArray() {
        let listadoObservable = null;
        listadoObservable = this.traerUsuarios();
        console.log('traerUsuariosArray ListadoObservable');
        listadoObservable.subscribe(usrs => {
            usrs.forEach(unUser => {
                let u = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
                u.id = unUser.id;
                u.name = unUser.name;
                u.lastname = unUser.lastname;
                u.email = unUser.email;
                u.image = unUser.image;
                u.role = unUser.role;
                u.state = unUser.state;
                u.deleted = unUser.deleted;
                u.password = unUser.password;
                if (!u.deleted) {
                    if (u.role !== src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cliente) {
                        this.listado.push(u);
                    }
                }
            });
        });
    }
    traerUsuarios() {
        return this.usuarios.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(actions => {
            return actions.map(action => {
                const datos = action.payload.doc.data();
                const id = action.payload.doc.id;
                return Object.assign({ id }, datos);
            });
        }));
    }
    persistirUsuario(usuario, foto) {
        let idGenerado;
        return this.usuarios
            .add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonHelper"].ConvertToObject(usuario))
            .then(doc => {
            this.usuarios.doc(doc.id).update({ id: doc.id });
            idGenerado = doc.id;
        })
            .then(() => {
            if (foto) {
                return this.fileService
                    .subirFotoUsuarios(foto, idGenerado)
                    .then(() => {
                    return true;
                });
            }
            else {
                return this.fileService
                    .subirFotoGenericaUsuarios(idGenerado)
                    .then(() => {
                    return true;
                });
            }
        })
            .catch(() => {
            return false;
        });
    }
    updateState(uid, state) {
        this.usuarios.doc(uid).update({ state: state });
    }
    delete(uid) {
        this.usuarios.doc(uid).update({ deleted: true });
    }
    actualizarUsuario(email, nombre, apellido) {
        return this.GetUserByEmail(email).then(doc => {
            let user = doc;
            user.name = nombre;
            user.lastname = apellido;
            this.db
                .collection("usuarios")
                .doc(doc.id)
                .update(user);
        });
    }
    updateUser(usuario, foto) {
        let retorno = this.usuarios
            .doc(usuario.id)
            .update({
            name: usuario.name,
            lastname: usuario.lastname
        })
            .then(() => {
            if (foto) {
                return this.fileService
                    .subirFotoUsuarios(foto, usuario.id)
                    .then(() => {
                    return true;
                });
            }
        })
            .catch(() => {
            return false;
        });
        console.log(retorno);
        return retorno;
    }
};
UserService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__["AngularFireFunctions"] },
    { type: _firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UserService);



/***/ }),

/***/ "./src/app/services/firestorage/file.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/firestorage/file.service.ts ***!
  \******************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);





let FileService = class FileService {
    constructor(angularFirestore, storage) {
        this.angularFirestore = angularFirestore;
        this.storage = storage;
        this.products = this.angularFirestore.collection("productos");
        this.users = this.angularFirestore.collection("usuarios");
        this.orders = this.angularFirestore.collection("pedidos");
    }
    Upload(fileName, file) {
        return this.storage
            .upload(fileName, file)
            .then(success => Object(q__WEBPACK_IMPORTED_MODULE_3__["resolve"])(success))
            .catch(error => Object(q__WEBPACK_IMPORTED_MODULE_3__["reject"])(error.message));
    }
    updatePhotoUrlOrders(url, uid) {
        return this.orders.doc(uid).update({ image: url }).then(() => {
            return true;
        });
    }
    subirFotoPedido(foto, uid) {
        const pathFoto = `imagenesPedidos/${uid}`;
        const tarea = this.storage.upload(pathFoto, foto);
        console.log("uid" + uid);
        return tarea
            .then(() => {
            this.storage
                .ref(pathFoto)
                .getDownloadURL()
                .subscribe(url => {
                this.updatePhotoUrlOrders(url, uid);
            });
        })
            .then(() => {
            return true;
        })
            .catch(() => {
            return false;
        });
    }
    GetImageURL(fileName) {
        return this.storage
            .ref(fileName)
            .getDownloadURL()
            .toPromise()
            .then(URL => Object(q__WEBPACK_IMPORTED_MODULE_3__["resolve"])(URL));
    }
    subirFotoProducto(foto, uid) {
        const pathFoto = `imagenesProductos/${uid}`;
        const tarea = this.storage.upload(pathFoto, foto);
        tarea.then(() => {
            this.storage
                .ref(pathFoto)
                .getDownloadURL()
                .subscribe(url => {
                this.updatePhotoUrlProduct(url, uid);
            });
        });
    }
    updatePhotoUrlProduct(url, uid) {
        this.products.doc(uid).update({ image: url });
    }
    subirFotoUsuarios(foto, uid) {
        const pathFoto = `imagenesUsuarios/${uid}`;
        const tarea = this.storage.upload(pathFoto, foto);
        return tarea
            .then(() => {
            this.storage
                .ref(pathFoto)
                .getDownloadURL()
                .subscribe(url => {
                this.updatePhotoUrlUsers(url, uid);
                //this.updatePhotoUrlUsers(url, uid).then(()=>{
                //location.reload();
                //});
            });
        })
            .then(() => {
            //location.reload();
            return true;
        })
            .catch(() => {
            return false;
        });
    }
    subirFotoGenericaUsuarios(uid) {
        const url = 
        // tslint:disable-next-line: max-line-length
        'https://firebasestorage.googleapis.com/v0/b/lacomanda-brino.appspot.com/o/SOCIOSOCIOS8182?alt=media&token=89b72e99-2bcf-4b05-9ac7-5a40e5ce2b1b';
        return this.users
            .doc(uid)
            .update({ image: url })
            .then(() => {
            return true;
        });
    }
    updatePhotoUrlUsers(url, uid) {
        return this.users
            .doc(uid)
            .update({ image: url })
            .then(() => {
            return true;
        });
    }
};
FileService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
];
FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], FileService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, FirebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseConfig", function() { return FirebaseConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
const FirebaseConfig = {
    apiKey: "AIzaSyCk-qEe67y8mBfSQgV9bVDP3YX1qgYAA2o",
    authDomain: "lacomanda-brino.firebaseapp.com",
    databaseURL: "https://lacomanda-brino.firebaseio.com",
    projectId: "lacomanda-brino",
    storageBucket: "lacomanda-brino.appspot.com",
    messagingSenderId: "512103874596",
    appId: "1:512103874596:web:d0a5c7f81f200756f1d8b1"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ariel/Desktop/GIT/LACOMANDABRINO/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map