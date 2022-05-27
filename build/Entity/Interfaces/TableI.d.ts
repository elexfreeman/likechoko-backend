/**
 * Типы полей
 */
export declare enum ColumnTypeEnum {
  String = 0,
  Text = 1,
  Integer = 2,
  Float = 3,
  Data = 4,
  Selector = 5,
}

/**
 * Столбцы в таблице
 */
export interface ColumnI {
  sName: string;
  sCaption: string;
  nType: ColumnTypeEnum;
  bPrimaryKey: boolean;
}

/**
 * Таблица в DB
 */
export interface TableI {
  sCaption: string;
  sDescription?: string;
  aColumn: ColumnI[];
}

/**
 * Запрос-ответ для получения по ID
 */
export interface GetRowByIdRequestI {
  id: number;
}

/**
 * Запрос-ответ для получения по ID
 */
export interface GetRowByIdResponseI<T> {
  row: T;
}
export interface InsertRowResponseI {
  id: number;
}
export interface UpdateRowResponseI {
  id: number;
}
export interface RemoveDocRowReqestI {
  id: number;
}
export interface AddRowResponseI {
  id: number;
}
export interface UpdateRowResponseI {
  id: number;
}
export declare const sGetInfoByIdR = 'row_info';
export declare const sGetTableInfo = 'info';
export declare const sInsertRow = 'insert';
export declare const sUpdateRow = 'update';
export declare const sList = 'list';
export declare const sListDocRow = 'list_doc_row';
export declare const sRemoveDocRow = 'delete_doc_rows';
export declare const sGetDocRows = 'get_doc_rows';
