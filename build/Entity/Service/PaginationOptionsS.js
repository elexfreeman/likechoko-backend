'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PaginationOptionsS = void 0;
const ListI_1 = require('../Interfaces/ListI');

/**
 * Опции для пагинации таблицы
 */
class PaginationOptionsS {
  constructor() {
    this.enabled = true;
    this.mode = 'pages';
    this.perPage = 20;
    this.position = ListI_1.PaginationPositionEnum.bottom;
    this.perPageDropdown = [5, 20, 50, 100];
    this.dropdownAllowAll = false;
    this.setCurrentPage = 1;
    this.nextLabel = 'next';
    this.prevLabel = 'prev';
    this.rowsPerPageLabel = 'Rows per page';
    this.ofLabel = 'of';
    this.pageLabel = 'page'; // for 'pages' mod;
    this.allLabel = 'All';
  }
  static InitRus() {
    const out = new PaginationOptionsS();
    out.nextLabel = 'далее';
    out.prevLabel = 'назад';
    out.rowsPerPageLabel = 'Строк';
    out.pageLabel = 'стр.';
    out.ofLabel = 'из';
    out.allLabel = 'Все';
    return out;
  }
}
exports.PaginationOptionsS = PaginationOptionsS;
//# sourceMappingURL=PaginationOptionsS.js.map
