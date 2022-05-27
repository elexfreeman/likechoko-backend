import { ProductI } from '../Interfaces/ProductI';
import { ProductTagI } from '../Interfaces/ProductTagI';
import { SearchParamI } from '../Service/SearchS';
import { ListInfoResponseI, ListResponseI } from '../Interfaces/ListI';
import { GetRowByIdResponseI, TableI, InsertRowResponseI } from '../Interfaces/TableI';
export declare const sRoute = 'product';

/**
 * Товар
 */
export declare namespace ProductR {
  /** Начальные данные */
  namespace list {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'list';

    /** Параметры api запроса */
    interface RequestI extends SearchParamI {}

    /** Параметры api ответа */
    interface ResponseI extends ListResponseI<ProductI> {}
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
    interface ResponseI extends GetRowByIdResponseI<ProductI> {}
  }
  namespace insert {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'insert';

    /** Параметры api запроса */
    interface RequestI extends ProductI {}

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
    interface RequestI extends ProductI {}

    /** Параметры api ответа */
    interface ResponseI {
      id: number;
    }
  }
  namespace tagList {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'tagList';

    /** Параметры api запроса */
    interface RequestI {
      product_id: number;
    }

    /** Параметры api ответа */
    interface ResponseI {
      list: ProductTagI[];
    }
  }
  namespace addTag {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'addTag';

    /** Параметры api запроса */
    interface RequestI {
      product_id: number;
      tag_id: number;
    }

    /** Параметры api ответа */
    interface ResponseI {
      id: number;
    }
  }
  namespace delTag {
    /** APIURL */
    const route: string;

    /** Alias действия */
    const action = 'delTag';

    /** Параметры api запроса */
    interface RequestI {
      product_id: number;
      tag_id: number;
    }

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
