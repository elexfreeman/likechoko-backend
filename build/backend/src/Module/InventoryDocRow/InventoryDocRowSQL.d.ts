import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { InventoryDocRowI } from 'lc-common/lib/Interfaces/InventoryDocRowI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export declare class InventoryDocRowSQL extends BaseSQL {
  /**
   * Список
   */
  faListDocRow(id: number): Promise<InventoryDocRowI[]>;

  /**
   * Список
   */
  faListTotal(search: SearchS): Promise<number>;

  /**
   * Получить InventoryDocRowI
   * @param id
   */
  faGetById(id: number): Promise<InventoryDocRowI>;

  /**
   * Добавить
   * @param data
   */
  faInsert(data: InventoryDocRowI): Promise<number>;
  faGetDocRowIds(id: number): Promise<number[]>;

  /**
   * Удаляет строки из таблчного документа
   * @param id - документ
   */
  faRemoveDocRow(id: number): Promise<boolean>;
}
