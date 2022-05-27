import { PaginationOptionsI, PaginationPositionEnum } from '../Interfaces/ListI';

/**
 * Опции для пагинации таблицы
 */
export declare class PaginationOptionsS implements PaginationOptionsI {
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
  static InitRus(): PaginationOptionsS;
}
