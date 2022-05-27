'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductCategoryR = exports.sRoute = void 0;
const TableI_1 = require('../Interfaces/TableI');
exports.sRoute = 'productCategory';

/**
 * Товар
 */
let ProductCategoryR;
(function (ProductCategoryR) {
  // =======================================================
  /** Начальные данные */
  let list;
  (function (list) {
    /** APIURL */
    list.route = `/api/${exports.sRoute}/list`;

    /** Alias действия */
    list.action = `list`;
  })((list = ProductCategoryR.list || (ProductCategoryR.list = {})));
  let listInfo;
  (function (listInfo) {
    /** APIURL */
    listInfo.route = `/api/${exports.sRoute}/list/info`;

    /** Alias действия */
    listInfo.action = `listInfo`;
  })((listInfo = ProductCategoryR.listInfo || (ProductCategoryR.listInfo = {})));
  //++++++++++++
  let getById;
  (function (getById) {
    /** APIURL */
    getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;

    /** Alias действия */
    getById.action = `getById`;
  })((getById = ProductCategoryR.getById || (ProductCategoryR.getById = {})));
  let insert;
  (function (insert) {
    /** APIURL */
    insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;

    /** Alias действия */
    insert.action = `insert`;
  })((insert = ProductCategoryR.insert || (ProductCategoryR.insert = {})));
  let update;
  (function (update) {
    /** APIURL */
    update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;

    /** Alias действия */
    update.action = `update`;
  })((update = ProductCategoryR.update || (ProductCategoryR.update = {})));

  /**
   * Инфо об талице
   */
  let info;
  (function (info) {
    /** APIURL */
    info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;

    /** Alias действия */
    info.action = `info`;
  })((info = ProductCategoryR.info || (ProductCategoryR.info = {})));
})((ProductCategoryR = exports.ProductCategoryR || (exports.ProductCategoryR = {})));
//# sourceMappingURL=ProductCategoryR.js.map
