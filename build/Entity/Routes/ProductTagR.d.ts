import { ProductTagI } from '../Interfaces/ProductTagI';
import { SearchParamI } from '../Service/SearchS';

/**
 * Тэг товара
 */
export declare namespace ProductTagR {
  /** Начальные данные */
  namespace list {
    /** APIURL */
    const route = '/api/productTag/list';

    /** Alias действия */
    const action = 'list';

    /** Параметры api запроса */
    interface RequestI extends SearchParamI {}

    /** Параметры api ответа */
    interface ResponseI {
      list: ProductTagI[];
    }
  }
  namespace getById {
    /** APIURL */
    const route = '/api/productTag/getById';

    /** Alias действия */
    const action = 'getById';

    /** Параметры api запроса */
    interface RequestI {
      id: number;
    }

    /** Параметры api ответа */
    interface ResponseI extends ProductTagI {}
  }
  namespace insert {
    /** APIURL */
    const route = '/api/productTag/insert';

    /** Alias действия */
    const action = 'insert';

    /** Параметры api запроса */
    interface RequestI extends ProductTagI {}

    /** Параметры api ответа */
    interface ResponseI {
      id: number;
    }
  }
  namespace update {
    /** APIURL */
    const route = '/api/productTag/update';

    /** Alias действия */
    const action = 'insert';

    /** Параметры api запроса */
    interface RequestI extends ProductTagI {}

    /** Параметры api ответа */
    interface ResponseI {
      id: number;
    }
  }
}
