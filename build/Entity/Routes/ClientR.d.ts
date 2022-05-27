import { ClientI } from '../Interfaces/ClientI';
import { SearchParamI } from '../Service/SearchS';
import { ListInfoResponseI, ListResponseI } from '../Interfaces/ListI';
import { GetRowByIdResponseI, TableI, InsertRowResponseI } from '../Interfaces/TableI';
export declare const sRoute = 'client';

/**
 * Товар
 */
export declare namespace ClientR {
  /** Начальные данные */
  namespace list {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'list';

    /** Параметры api запроса */
    interface RequestI extends SearchParamI {}

    /** Параметры api ответа */
    interface ResponseI extends ListResponseI<ClientI> {}
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
  namespace getById {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'getById';

    /** Параметры api запроса */
    interface RequestI {
      id: number;
    }

    /** Параметры api ответа */
    interface ResponseI extends GetRowByIdResponseI<ClientI> {}
  }
  namespace insert {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'insert';

    /** Параметры api запроса */
    interface RequestI extends ClientI {}

    /** Параметры api ответа */
    interface ResponseI extends InsertRowResponseI {
      id: number;
    }
  }
  namespace update {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'update';

    /** Параметры api запроса */
    interface RequestI extends ClientI {}

    /** Параметры api ответа */
    interface ResponseI {
      id: number;
    }
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
