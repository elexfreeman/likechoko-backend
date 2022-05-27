'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductR = exports.sRoute = void 0;
const TableI_1 = require('../Interfaces/TableI');
exports.sRoute = 'product';

/**
 * Товар
 */
let ProductR;
(function (ProductR) {
  // =======================================================
  /** Начальные данные */
  let list;
  (function (list) {
    /** APIURL */
    list.route = `/api/${exports.sRoute}/list`;

    /** Alias действия */
    list.action = `list`;
  })((list = ProductR.list || (ProductR.list = {})));
  let listInfo;
  (function (listInfo) {
    /** APIURL */
    listInfo.route = `/api/${exports.sRoute}/list/info`;

    /** Alias действия */
    listInfo.action = `listInfo`;
  })((listInfo = ProductR.listInfo || (ProductR.listInfo = {})));
  //++++++++++++
  let getById;
  (function (getById) {
    /** APIURL */
    getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;

    /** Alias действия */
    getById.action = `getById`;
  })((getById = ProductR.getById || (ProductR.getById = {})));
  let insert;
  (function (insert) {
    /** APIURL */
    insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;

    /** Alias действия */
    insert.action = `insert`;
  })((insert = ProductR.insert || (ProductR.insert = {})));
  let update;
  (function (update) {
    /** APIURL */
    update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;

    /** Alias действия */
    update.action = `update`;
  })((update = ProductR.update || (ProductR.update = {})));
  let tagList;
  (function (tagList) {
    /** APIURL */
    tagList.route = `/api/${exports.sRoute}/tagList`;

    /** Alias действия */
    tagList.action = `tagList`;
  })((tagList = ProductR.tagList || (ProductR.tagList = {})));
  let addTag;
  (function (addTag) {
    /** APIURL */
    addTag.route = `/api/${exports.sRoute}/addTag`;

    /** Alias действия */
    addTag.action = `addTag`;
  })((addTag = ProductR.addTag || (ProductR.addTag = {})));
  let delTag;
  (function (delTag) {
    /** APIURL */
    delTag.route = `/api/${exports.sRoute}/delTag`;

    /** Alias действия */
    delTag.action = `delTag`;
  })((delTag = ProductR.delTag || (ProductR.delTag = {})));

  /**
   * Инфо об талице
   */
  let info;
  (function (info) {
    /** APIURL */
    info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;

    /** Alias действия */
    info.action = `info`;
  })((info = ProductR.info || (ProductR.info = {})));
})((ProductR = exports.ProductR || (exports.ProductR = {})));
//# sourceMappingURL=ProductR.js.map
