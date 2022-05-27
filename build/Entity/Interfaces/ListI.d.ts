/**
 * Список для vue-good-table
 */
export interface RowI {
  [key: string]: any;
}
export declare enum SortTypeEnum {
  desc = 'desc',
  asc = 'asc',
}
export interface ColumnI {
  label: string;
  field: string;
  sortable?: boolean;
  firstSortType?: SortTypeEnum;
  sortFn?: (x: any, y: any, col: any, rowX: any, rowY: any) => boolean;
  formatFn?: (val: any) => any;
  html?: boolean;
  width?: number | string;
  hidden?: boolean;
  thClass?: string;
  tdClass?: string | ((row: RowI) => string);
  globalSearchDisabled?: boolean;
}
export declare enum PaginationPositionEnum {
  top = 'top',
  bottom = 'bottom',
}
export interface PaginationOptionsI {
  enabled: boolean;
  mode: string;
  perPage: number;
  position: PaginationPositionEnum;
  perPageDropdown: number[];
  dropdownAllowAll: boolean;
  setCurrentPage: number;
  nextLabel: string;
  prevLabel: string;
  rowsPerPageLabel: string;
  ofLabel: string;
  pageLabel: string;
  allLabel: string;
}
export interface ListInfoResponseI {
  aColumn: ColumnI[];
  paginationOptions: PaginationOptionsI;
}
export interface ListResponseI<T> {
  list: T[];
  total: number;
}

/**
 * Табличная часть документа
 */
export interface ListDocRowResponseI<T> {
  list: T[];
}
