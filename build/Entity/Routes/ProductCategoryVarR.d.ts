import { ProductCategoryVarI } from '../Interfaces/ProductCategoryVarI';
import { SearchParamI } from '../Service/SearchS';

/**
 * Категория товара
 */
export declare namespace ProductCategoryVarR {
  /** Начальные данные */
  namespace list {
    /** APIURL */
    const route = '/api/productCategoryVar/list';

    /** Alias действия */
    const action = 'list';

    /** Параметры api запроса */
    interface RequestI extends SearchParamI {
      product_category_id: number;
    }

    /** Параметры api ответа */
    interface ResponseI {
      list: ProductCategoryVarI[];
    }
  }
  namespace getById {
    /** APIURL */
    const route = '/api/productCategoryVar/getById';

    /** Alias действия */
    const action = 'getById';

    /** Параметры api запроса */
    interface RequestI {
      id: number;
    }

    /** Параметры api ответа */
    interface ResponseI extends ProductCategoryVarI {}
  }
  namespace insert {
    /** APIURL */
    const route = '/api/productCategoryVar/insert';

    /** Alias действия */
    const action = 'insert';

    /** Параметры api запроса */
    interface RequestI extends ProductCategoryVarI {}

    /** Параметры api ответа */
    interface ResponseI {
      id: number;
    }
  }
  namespace update {
    /** APIURL */
    const route = '/api/productCategoryVar/update';

    /** Alias действия */
    const action = 'insert';

    /** Параметры api запроса */
    interface RequestI extends ProductCategoryVarI {}

    /** Параметры api ответа */
    interface ResponseI {
      id: number;
    }
  }
}
