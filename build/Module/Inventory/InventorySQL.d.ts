import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { InventoryI, InventoryRowI } from 'lc-common/lib/Interfaces/InventoryI';
import { SearchS } from 'lc-common/lib/Service/SearchS';
export declare class InventorySQL extends BaseSQL {
    faList(search: SearchS): Promise<InventoryI[]>;
    faListTotal(search: SearchS): Promise<number>;
    faGetById(id: number): Promise<InventoryI>;
    faInsert(data: InventoryI): Promise<number>;
    faInsertRow(data: InventoryRowI): Promise<number>;
    faUpdate(id: number, data: InventoryI): Promise<boolean>;
}
