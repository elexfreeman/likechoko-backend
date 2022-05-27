'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.StorehouseR = exports.sRoute = void 0;
const TableI_1 = require('../Interfaces/TableI');
exports.sRoute = 'storehouse';

/**
 * Товар
 */
let StorehouseR;
(function (StorehouseR) {
  // =======================================================
  /** Начальные данные */
  let list;
  (function (list) {
    /** APIURL */
    list.route = `/api/${exports.sRoute}/list`;

    /** Alias действия */
    list.action = `list`;
  })((list = StorehouseR.list || (StorehouseR.list = {})));
  let listInfo;
  (function (listInfo) {
    /** APIURL */
    listInfo.route = `/api/${exports.sRoute}/list/info`;

    /** Alias действия */
    listInfo.action = `listInfo`;
  })((listInfo = StorehouseR.listInfo || (StorehouseR.listInfo = {})));
  //++++++++++++
  let getById;
  (function (getById) {
    /** APIURL */
    getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;

    /** Alias действия */
    getById.action = `getById`;
  })((getById = StorehouseR.getById || (StorehouseR.getById = {})));
  let insert;
  (function (insert) {
    /** APIURL */
    insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;

    /** Alias действия */
    insert.action = `insert`;
  })((insert = StorehouseR.insert || (StorehouseR.insert = {})));
  let update;
  (function (update) {
    /** APIURL */
    update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;

    /** Alias действия */
    update.action = `update`;
  })((update = StorehouseR.update || (StorehouseR.update = {})));

  /**
   * Инфо об талице
   */
  let info;
  (function (info) {
    /** APIURL */
    info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;

    /** Alias действия */
    info.action = `info`;
  })((info = StorehouseR.info || (StorehouseR.info = {})));
})((StorehouseR = exports.StorehouseR || (exports.StorehouseR = {})));
//# sourceMappingURL=StorehouseR.js.map
