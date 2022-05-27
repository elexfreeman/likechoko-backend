import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductCategoryR } from 'lc-common/lib/Routes/ProductCategoryR';
import R = ProductCategoryR;

/**
 * Категории товаров
 */
export declare class ProductCategoryM extends System.BaseM {
  private productCategorySQL;
  constructor(req: any);

  /**
   * Получить по id
   * @param data
   */
  faGetById(data: R.getById.RequestI): Promise<R.getById.ResponseI>;

  /**
   * Обновленеи
   * @param data
   */
  faUpdate(data: R.update.RequestI): Promise<R.update.ResponseI>;

  /**
   * Вставка
   * @param data
   */
  faInsert(data: R.insert.RequestI): Promise<R.insert.ResponseI>;

  /**
   * ProductCategory list
   * @param data
   */
  faList(data: R.list.RequestI): Promise<R.list.ResponseI>;
  faListInfo(data: R.listInfo.RequestI): Promise<R.listInfo.ResponseI>;
  faInfo(data: R.info.RequestI): Promise<R.info.ResponseI>;
}
