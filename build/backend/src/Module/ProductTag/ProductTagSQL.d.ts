import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductTagI } from 'lc-common/lib/Interfaces/ProductTagI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export declare class ProductTagSQL extends BaseSQL {
  /**
   * Список
   */
  faList(search: SearchS): Promise<ProductTagI[]>;

  /**
   * Получить ProductTagI
   * @param id
   */
  faGetById(id: number): Promise<ProductTagI>;

  /**
   * Добавить
   * @param data
   */
  faInsert(data: ProductTagI): Promise<number>;

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  faUpdate(id: number, data: ProductTagI): Promise<boolean>;
}
