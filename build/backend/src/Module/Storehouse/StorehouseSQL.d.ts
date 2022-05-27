import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { StorehouseI } from 'lc-common/lib/Interfaces/StorehouseI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export declare class StorehouseSQL extends BaseSQL {
  /**
   * Список
   */
  faList(search: SearchS): Promise<StorehouseI[]>;

  /**
   * Список
   */
  faListTotal(search: SearchS): Promise<number>;

  /**
   * Получить StorehouseI
   * @param id
   */
  faGetById(id: number): Promise<StorehouseI>;

  /**
   * Добавить
   * @param data
   */
  faInsert(data: StorehouseI): Promise<number>;

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  faUpdate(id: number, data: StorehouseI): Promise<boolean>;
}
