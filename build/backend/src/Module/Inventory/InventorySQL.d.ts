import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { InventoryI, InventoryRowI } from 'lc-common/lib/Interfaces/InventoryI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export declare class InventorySQL extends BaseSQL {
  /**
   * Список
   */
  faList(search: SearchS): Promise<InventoryI[]>;

  /**
   * Список
   */
  faListTotal(search: SearchS): Promise<number>;

  /**
   * Получить InventoryI
   * @param id
   */
  faGetById(id: number): Promise<InventoryI>;

  /**
   * Добавить
   * @param data
   */
  faInsert(data: InventoryI): Promise<number>;

  /**
   * Добавить
   * @param data
   */
  faInsertRow(data: InventoryRowI): Promise<number>;

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  faUpdate(id: number, data: InventoryI): Promise<boolean>;
}
