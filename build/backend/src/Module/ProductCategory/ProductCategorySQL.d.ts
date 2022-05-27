import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductCategoryI } from 'lc-common/lib/Interfaces/ProductCategoryI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export declare class ProductCategorySQL extends BaseSQL {
  /**
   * Список
   */
  faList(search: SearchS): Promise<ProductCategoryI[]>;

  /**
   * Список
   */
  faListTotal(search: SearchS): Promise<number>;

  /**
   * Получить ProductCategoryI
   * @param id
   */
  faGetById(id: number): Promise<ProductCategoryI>;

  /**
   * Добавить
   * @param data
   */
  faInsert(data: ProductCategoryI): Promise<number>;

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  faUpdate(id: number, data: ProductCategoryI): Promise<boolean>;
}
