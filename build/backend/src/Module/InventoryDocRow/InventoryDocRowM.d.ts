import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { InventoryDocRowR } from 'lc-common/lib/Routes/InventoryDocRowR';
import R = InventoryDocRowR;

/**
 * Категории товаров
 */
export declare class InventoryDocRowM extends System.BaseM {
  private inventoryDocRowSQL;
  constructor(req: any);

  /**
   * Вставка
   * @param data
   */
  faInsert(data: R.insert.RequestI): Promise<R.insert.ResponseI>;

  /**
   * Вставка
   * @param data
   */
  faRemoveDocRow(data: R.removeDocRow.RequestI): Promise<R.removeDocRow.ResponseI>;

  /**
   * InventoryDocRow list
   * @param data
   */
  faList(data: R.listDocRow.RequestI): Promise<R.listDocRow.ResponseI>;
  faListInfo(data: R.listInfo.RequestI): Promise<R.listInfo.ResponseI>;
  faInfo(data: R.info.RequestI): Promise<R.info.ResponseI>;
}
