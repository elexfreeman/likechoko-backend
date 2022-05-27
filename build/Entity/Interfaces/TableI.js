'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.sGetDocRows =
  exports.sRemoveDocRow =
  exports.sListDocRow =
  exports.sList =
  exports.sUpdateRow =
  exports.sInsertRow =
  exports.sGetTableInfo =
  exports.sGetInfoByIdR =
  exports.ColumnTypeEnum =
    void 0;

/**
 * Типы полей
 */
let ColumnTypeEnum;
(function (ColumnTypeEnum) {
  ColumnTypeEnum[(ColumnTypeEnum['String'] = 0)] = 'String';
  ColumnTypeEnum[(ColumnTypeEnum['Text'] = 1)] = 'Text';
  ColumnTypeEnum[(ColumnTypeEnum['Integer'] = 2)] = 'Integer';
  ColumnTypeEnum[(ColumnTypeEnum['Float'] = 3)] = 'Float';
  ColumnTypeEnum[(ColumnTypeEnum['Data'] = 4)] = 'Data';
  ColumnTypeEnum[(ColumnTypeEnum['Selector'] = 5)] = 'Selector';
})((ColumnTypeEnum = exports.ColumnTypeEnum || (exports.ColumnTypeEnum = {})));
// маршрты для основных операций
exports.sGetInfoByIdR = 'row_info';
exports.sGetTableInfo = 'info';
exports.sInsertRow = 'insert';
exports.sUpdateRow = 'update';
exports.sList = 'list';
exports.sListDocRow = 'list_doc_row';
// удаление строк табличного документа
exports.sRemoveDocRow = 'delete_doc_rows';
// список строк документа
exports.sGetDocRows = 'get_doc_rows';
//# sourceMappingURL=TableI.js.map
