import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ClientI } from 'lc-common/lib/Interfaces/ClientI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export declare class ClientSQL extends BaseSQL {
  /**
   * Список
   */
  faList(search: SearchS): Promise<ClientI[]>;

  /**
   * Список
   */
  faListTotal(search: SearchS): Promise<number>;

  /**
   * Получить ClientI
   * @param id
   */
  faGetById(id: number): Promise<ClientI>;

  /**
   * Добавить
   * @param data
   */
  faInsert(data: ClientI): Promise<number>;

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  faUpdate(id: number, data: ClientI): Promise<boolean>;
}
