'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductVarR = void 0;

/**
 * Категория товара
 */
let ProductVarR;
(function (ProductVarR) {
  // =======================================================
  /** Начальные данные */
  let list;
  (function (list) {
    /** APIURL */
    list.route = '/api/productVar/list';

    /** Alias действия */
    list.action = 'list';
  })((list = ProductVarR.list || (ProductVarR.list = {})));
  let getById;
  (function (getById) {
    /** APIURL */
    getById.route = '/api/productVar/getById';

    /** Alias действия */
    getById.action = 'getById';
  })((getById = ProductVarR.getById || (ProductVarR.getById = {})));
  let insert;
  (function (insert) {
    /** APIURL */
    insert.route = '/api/productVar/insert';

    /** Alias действия */
    insert.action = 'insert';
  })((insert = ProductVarR.insert || (ProductVarR.insert = {})));
  let update;
  (function (update) {
    /** APIURL */
    update.route = '/api/productVar/update';

    /** Alias действия */
    update.action = 'insert';
  })((update = ProductVarR.update || (ProductVarR.update = {})));
})((ProductVarR = exports.ProductVarR || (exports.ProductVarR = {})));
//# sourceMappingURL=ProductVarR.js.map
