import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { RecieptI } from 'lc-common/lib/Interfaces/RecieptI';
/**
 * Товары
 */
export declare class ReceiptSQL extends BaseSQL {
    /**
     * Список товаров
     */
    faList(): Promise<RecieptI[]>;
    /**
     * Получить товар по Url
     * @param sUrl
     */
    faGetByUrl(sUrl: string): Promise<RecieptI>;
}
/**
 * обработка BgImg
 * @param product
 */
