import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { InventoryR } from 'lc-common/lib/Routes/InventoryR';
import R = InventoryR;
/**
 * Категории товаров
 */
export declare class InventoryM extends System.BaseM {
    private inventorySQL;
    constructor(req: any);
    faGetById(data: R.getById.RequestI): Promise<R.getById.ResponseI>;
    faUpdate(data: R.update.RequestI): Promise<R.update.ResponseI>;
    faInsert(data: R.insert.RequestI): Promise<R.insert.ResponseI>;
    faList(data: R.list.RequestI): Promise<R.list.ResponseI>;
    faListInfo(data: R.listInfo.RequestI): Promise<R.listInfo.ResponseI>;
    faInfo(data: R.info.RequestI): Promise<R.info.ResponseI>;
}
