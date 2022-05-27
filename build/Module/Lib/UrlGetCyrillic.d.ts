export declare class UrlGetCyrillic {
    static translit(text: string): string;
}
export declare const fGetUrl: (id: string) => (sCaption: string) => string;
/**
 * Выдает id из урла
 * @param sUrl
 */
export declare const fGetIdFromUrl: (sUrl: string) => number;
