'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.SearchS = void 0;

/**
 * Класс формирующий поисковый запрос
 */
class SearchS {
  constructor() {
    this.nOffset = 0;
    this.nLimit = 20;
    this.sSearchString = '';
  }
  fSetOffest(nOffset) {
    this.nOffset = nOffset;
    return this;
  }
  fSetLimit(nLimit) {
    this.nLimit = nLimit;
    return this;
  }
  fSetSearchString(sSearchString) {
    this.sSearchString = sSearchString;
    return this;
  }
  fGetSearchParam() {
    return {
      nLimit: this.nLimit,
      nOffset: this.nOffset,
      sSearchString: this.sSearchString,
    };
  }
  fSetParam(data) {
    this.nLimit = data.nLimit;
    this.nOffset = data.nOffset;
    this.sSearchString = data.sSearchString;
    return this;
  }
}
exports.SearchS = SearchS;
//# sourceMappingURL=SearchS.js.map
