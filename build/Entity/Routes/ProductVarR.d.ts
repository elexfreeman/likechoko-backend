import { ProductVarI } from '../Interfaces/ProductVarI';
import { SearchParamI } from '../Service/SearchS';

/**
 * Категория товара
 */
export declare namespace ProductVarR {
  /** Начальные данные */
  namespace list {
    /** APIURL */
    const route = '/api/productVar/list';

    /** Alias действия */
    const action = 'list';

    /** Параметры api запроса */
    interface RequestI extends SearchParamI {
      product_category_id: number;
    }

    /** Параметры api ответа */
    interface ResponseI {
      list: ProductVarI[];
    }
  }
  namespace getById {
    /** APIURL */
    const route = '/api/productVar/getById';

    /** Alias действия */
    const action = 'getById';

    /** Параметры api запроса */
    interface RequestI {
      id: number;
    }

    /** Параметры api ответа */
    interface ResponseI extends ProductVarI {}
  }
  namespace insert {
    /** APIURL */
    const route = '/api/productVar/insert';

    /** Alias действия */
    const action = 'insert';

    /** Параметры api запроса */
    interface RequestI extends ProductVarI {}

    /** Параметры api ответа */
    interface ResponseI {
      id: number;
    }
  }
  namespace update {
    /** APIURL */
    const route = '/api/productVar/update';

    /** Alias действия */
    const action = 'insert';

    /** Параметры api запроса */
    interface RequestI extends ProductVarI {}

    /** Параметры api ответа */
    interface ResponseI {
      id: number;
    }
  }
}
