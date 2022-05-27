import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { OrderI } from 'lc-common/lib/Interfaces/OrderI';
import { OrderProductI } from './OrderProductE';

/**
 * Товары
 */
export declare class OrderProductSQL extends BaseSQL {
  /**
   * Список товаров
   */
  faList(orderId: number): Promise<OrderProductI[]>;

  /**
   * Получить товар по Url
   * @param sUrl
   */
  faInsert(data: OrderI): Promise<number>;
}

/**
 * обработка BgImg
 * @param product
 */
