import { InventoryDocRowI } from '../Interfaces/InventoryDocRowI';
import { ListDocRowResponseI, ListInfoResponseI } from '../Interfaces/ListI';
import { TableI, InsertRowResponseI, RemoveDocRowReqestI } from '../Interfaces/TableI';
export declare const sRoute = 'inventory_doc_row';

/**
 * Инвентаризация
 */
export declare namespace InventoryDocRowR {
  /** Начальные данные */
  namespace listDocRow {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'list_doc_row';

    /** Параметры api запроса */
    interface RequestI {
      id: number;
    }

    /** Параметры api ответа */
    interface ResponseI extends ListDocRowResponseI<InventoryDocRowI> {}
  }
  namespace listInfo {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'listInfo';

    /** Параметры api запроса */
    interface RequestI {}

    /** Параметры api ответа */
    interface ResponseI extends ListInfoResponseI {}
  }
  namespace insert {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'insert';

    /** Параметры api запроса */
    interface RequestI extends InventoryDocRowI {}

    /** Параметры api ответа */
    interface ResponseI extends InsertRowResponseI {}
  }
  namespace removeDocRow {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'remove_doc_row';

    /** Параметры api запроса */
    interface RequestI extends RemoveDocRowReqestI {}

    /** Параметры api ответа */
    interface ResponseI {}
  }

  /**
   * Инфо об талице
   */
  namespace info {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'info';

    /** Параметры api запроса */
    interface RequestI {}

    /** Параметры api ответа */
    interface ResponseI extends TableI {}
  }
}
