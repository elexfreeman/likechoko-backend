'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ClientR = exports.sRoute = void 0;
const TableI_1 = require('../Interfaces/TableI');
exports.sRoute = 'client';

/**
 * Товар
 */
let ClientR;
(function (ClientR) {
  // =======================================================
  /** Начальные данные */
  let list;
  (function (list) {
    /** APIURL */
    list.route = `/api/${exports.sRoute}/list`;

    /** Alias действия */
    list.action = `list`;
  })((list = ClientR.list || (ClientR.list = {})));
  let listInfo;
  (function (listInfo) {
    /** APIURL */
    listInfo.route = `/api/${exports.sRoute}/list/info`;

    /** Alias действия */
    listInfo.action = `listInfo`;
  })((listInfo = ClientR.listInfo || (ClientR.listInfo = {})));
  //++++++++++++
  let getById;
  (function (getById) {
    /** APIURL */
    getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;

    /** Alias действия */
    getById.action = `getById`;
  })((getById = ClientR.getById || (ClientR.getById = {})));
  let insert;
  (function (insert) {
    /** APIURL */
    insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;

    /** Alias действия */
    insert.action = `insert`;
  })((insert = ClientR.insert || (ClientR.insert = {})));
  let update;
  (function (update) {
    /** APIURL */
    update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;

    /** Alias действия */
    update.action = `update`;
  })((update = ClientR.update || (ClientR.update = {})));

  /**
   * Инфо об талице
   */
  let info;
  (function (info) {
    /** APIURL */
    info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;

    /** Alias действия */
    info.action = `info`;
  })((info = ClientR.info || (ClientR.info = {})));
})((ClientR = exports.ClientR || (exports.ClientR = {})));
//# sourceMappingURL=ClientR.js.map
