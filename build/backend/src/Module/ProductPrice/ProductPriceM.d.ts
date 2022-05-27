import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductPriceR } from 'lc-common/lib/Routes/ProductPriceR';
import R = ProductPriceR;

/**
 * Категории товаров
 */
export declare class ProductPriceM extends System.BaseM {
  private productPriceSQL;
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
   * ProductPrice list
   * @param data
   */
  faList(data: R.list.RequestI): Promise<R.list.ResponseI>;
  faListInfo(data: R.listInfo.RequestI): Promise<R.listInfo.ResponseI>;
  faInfo(data: R.info.RequestI): Promise<R.info.ResponseI>;
}
