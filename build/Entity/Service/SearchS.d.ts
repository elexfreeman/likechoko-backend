export interface SearchParamI {
  nLimit: number;
  nOffset: number;
  sSearchString: string;
}

/**
 * Класс формирующий поисковый запрос
 */
export declare class SearchS {
  protected nOffset: number;
  protected nLimit: number;
  protected sSearchString: string;
  constructor();
  fSetOffest(nOffset: number): SearchS;
  fSetLimit(nLimit: number): SearchS;
  fSetSearchString(sSearchString: string): SearchS;
  fGetSearchParam(): SearchParamI;
  fSetParam(data: SearchParamI): SearchS;
}
