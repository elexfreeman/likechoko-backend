'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductCategoryVarR = void 0;

/**
 * Категория товара
 */
let ProductCategoryVarR;
(function (ProductCategoryVarR) {
  // =======================================================
  /** Начальные данные */
  let list;
  (function (list) {
    /** APIURL */
    list.route = '/api/productCategoryVar/list';

    /** Alias действия */
    list.action = 'list';
  })((list = ProductCategoryVarR.list || (ProductCategoryVarR.list = {})));
  let getById;
  (function (getById) {
    /** APIURL */
    getById.route = '/api/productCategoryVar/getById';

    /** Alias действия */
    getById.action = 'getById';
  })((getById = ProductCategoryVarR.getById || (ProductCategoryVarR.getById = {})));
  let insert;
  (function (insert) {
    /** APIURL */
    insert.route = '/api/productCategoryVar/insert';

    /** Alias действия */
    insert.action = 'insert';
  })((insert = ProductCategoryVarR.insert || (ProductCategoryVarR.insert = {})));
  let update;
  (function (update) {
    /** APIURL */
    update.route = '/api/productCategoryVar/update';

    /** Alias действия */
    update.action = 'insert';
  })((update = ProductCategoryVarR.update || (ProductCategoryVarR.update = {})));
})((ProductCategoryVarR = exports.ProductCategoryVarR || (exports.ProductCategoryVarR = {})));
//# sourceMappingURL=ProductCategoryVarR.js.map
