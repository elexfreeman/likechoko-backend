import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductTagR } from 'lc-common/lib/Routes/ProductTagR';
import R = ProductTagR;

/**
 * Товыры
 */
export declare class ProductTagM extends System.BaseM {
  private productTagSQL;
  constructor(req: any);
  faList(data: R.list.RequestI): Promise<R.list.ResponseI>;

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
}
