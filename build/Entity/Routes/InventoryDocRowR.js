'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.InventoryDocRowR = exports.sRoute = void 0;
const TableI_1 = require('../Interfaces/TableI');
exports.sRoute = 'inventory_doc_row';

/**
 * Инвентаризация
 */
let InventoryDocRowR;
(function (InventoryDocRowR) {
  // =======================================================
  /** Начальные данные */
  let listDocRow;
  (function (listDocRow) {
    /** APIURL */
    listDocRow.route = `/api/${exports.sRoute}/${TableI_1.sListDocRow}`;

    /** Alias действия */
    listDocRow.action = `list_doc_row`;
  })((listDocRow = InventoryDocRowR.listDocRow || (InventoryDocRowR.listDocRow = {})));
  let listInfo;
  (function (listInfo) {
    /** APIURL */
    listInfo.route = `/api/${exports.sRoute}/list/info`;

    /** Alias действия */
    listInfo.action = `listInfo`;
  })((listInfo = InventoryDocRowR.listInfo || (InventoryDocRowR.listInfo = {})));
  //++++++++++++
  let insert;
  (function (insert) {
    /** APIURL */
    insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;

    /** Alias действия */
    insert.action = `insert`;
  })((insert = InventoryDocRowR.insert || (InventoryDocRowR.insert = {})));
  let removeDocRow;
  (function (removeDocRow) {
    /** APIURL */
    removeDocRow.route = `/api/${exports.sRoute}/${TableI_1.sRemoveDocRow}`;

    /** Alias действия */
    removeDocRow.action = `remove_doc_row`;
  })((removeDocRow = InventoryDocRowR.removeDocRow || (InventoryDocRowR.removeDocRow = {})));

  /**
   * Инфо об талице
   */
  let info;
  (function (info) {
    /** APIURL */
    info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;

    /** Alias действия */
    info.action = `info`;
  })((info = InventoryDocRowR.info || (InventoryDocRowR.info = {})));
})((InventoryDocRowR = exports.InventoryDocRowR || (exports.InventoryDocRowR = {})));
//# sourceMappingURL=InventoryDocRowR.js.map
