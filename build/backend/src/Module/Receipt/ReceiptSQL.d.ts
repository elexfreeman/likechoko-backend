import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ReceiptI } from 'lc-common/lib/Interfaces/RecieptI';

/**
 * Товары
 */
export declare class ReceiptSQL extends BaseSQL {
  /**
   * Список товаров
   */
  faList(): Promise<ReceiptI[]>;

  /**
   * Получить товар по Url
   * @param sUrl
   */
  faGetByUrl(sUrl: string): Promise<ReceiptI>;
}

/**
 * обработка BgImg
 * @param product
 */
