'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.InventoryR = exports.sRoute = void 0;
const TableI_1 = require('../Interfaces/TableI');
exports.sRoute = 'inventory';

/**
 * Инвентаризация
 */
let InventoryR;
(function (InventoryR) {
  // =======================================================
  /** Начальные данные */
  let list;
  (function (list) {
    /** APIURL */
    list.route = `/api/${exports.sRoute}/list`;

    /** Alias действия */
    list.action = `list`;
  })((list = InventoryR.list || (InventoryR.list = {})));
  let listInfo;
  (function (listInfo) {
    /** APIURL */
    listInfo.route = `/api/${exports.sRoute}/list/info`;

    /** Alias действия */
    listInfo.action = `listInfo`;
  })((listInfo = InventoryR.listInfo || (InventoryR.listInfo = {})));
  //++++++++++++
  let getById;
  (function (getById) {
    /** APIURL */
    getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;

    /** Alias действия */
    getById.action = `getById`;
  })((getById = InventoryR.getById || (InventoryR.getById = {})));
  let insert;
  (function (insert) {
    /** APIURL */
    insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;

    /** Alias действия */
    insert.action = `insert`;
  })((insert = InventoryR.insert || (InventoryR.insert = {})));

  /**
   * Вставить строку документа инфентаризации
   */
  let insertDocRow;
  (function (insertDocRow) {
    /** APIURL */
    insertDocRow.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;

    /** Alias действия */
    insertDocRow.action = `insertDocRow`;
  })((insertDocRow = InventoryR.insertDocRow || (InventoryR.insertDocRow = {})));
  let update;
  (function (update) {
    /** APIURL */
    update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;

    /** Alias действия */
    update.action = `update`;
  })((update = InventoryR.update || (InventoryR.update = {})));

  /**
   * Инфо об талице
   */
  let info;
  (function (info) {
    /** APIURL */
    info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;

    /** Alias действия */
    info.action = `info`;
  })((info = InventoryR.info || (InventoryR.info = {})));
})((InventoryR = exports.InventoryR || (exports.InventoryR = {})));
//# sourceMappingURL=InventoryR.js.map
