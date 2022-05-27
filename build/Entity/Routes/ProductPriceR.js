'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductPriceR = exports.sRoute = void 0;
const TableI_1 = require('../Interfaces/TableI');
exports.sRoute = 'productPrice';

/**
 * Товар
 */
let ProductPriceR;
(function (ProductPriceR) {
  // =======================================================
  /** Начальные данные */
  let list;
  (function (list) {
    /** APIURL */
    list.route = `/api/${exports.sRoute}/list`;

    /** Alias действия */
    list.action = `list`;
  })((list = ProductPriceR.list || (ProductPriceR.list = {})));
  let listInfo;
  (function (listInfo) {
    /** APIURL */
    listInfo.route = `/api/${exports.sRoute}/list/info`;

    /** Alias действия */
    listInfo.action = `listInfo`;
  })((listInfo = ProductPriceR.listInfo || (ProductPriceR.listInfo = {})));
  //++++++++++++
  let getById;
  (function (getById) {
    /** APIURL */
    getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;

    /** Alias действия */
    getById.action = `getById`;
  })((getById = ProductPriceR.getById || (ProductPriceR.getById = {})));
  let insert;
  (function (insert) {
    /** APIURL */
    insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;

    /** Alias действия */
    insert.action = `insert`;
  })((insert = ProductPriceR.insert || (ProductPriceR.insert = {})));
  let update;
  (function (update) {
    /** APIURL */
    update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;

    /** Alias действия */
    update.action = `update`;
  })((update = ProductPriceR.update || (ProductPriceR.update = {})));

  /**
   * Инфо об талице
   */
  let info;
  (function (info) {
    /** APIURL */
    info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;

    /** Alias действия */
    info.action = `info`;
  })((info = ProductPriceR.info || (ProductPriceR.info = {})));
})((ProductPriceR = exports.ProductPriceR || (exports.ProductPriceR = {})));
//# sourceMappingURL=ProductPriceR.js.map
