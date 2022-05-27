'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductTagR = void 0;

/**
 * Тэг товара
 */
let ProductTagR;
(function (ProductTagR) {
  // =======================================================
  /** Начальные данные */
  let list;
  (function (list) {
    /** APIURL */
    list.route = '/api/productTag/list';

    /** Alias действия */
    list.action = 'list';
  })((list = ProductTagR.list || (ProductTagR.list = {})));
  let getById;
  (function (getById) {
    /** APIURL */
    getById.route = '/api/productTag/getById';

    /** Alias действия */
    getById.action = 'getById';
  })((getById = ProductTagR.getById || (ProductTagR.getById = {})));
  let insert;
  (function (insert) {
    /** APIURL */
    insert.route = '/api/productTag/insert';

    /** Alias действия */
    insert.action = 'insert';
  })((insert = ProductTagR.insert || (ProductTagR.insert = {})));
  let update;
  (function (update) {
    /** APIURL */
    update.route = '/api/productTag/update';

    /** Alias действия */
    update.action = 'insert';
  })((update = ProductTagR.update || (ProductTagR.update = {})));
})((ProductTagR = exports.ProductTagR || (exports.ProductTagR = {})));
//# sourceMappingURL=ProductTagR.js.map
