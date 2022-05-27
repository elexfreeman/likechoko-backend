import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { InventoryDocRowI } from 'lc-common/lib/Interfaces/InventoryDocRowI';
import { SearchS } from 'lc-common/lib/Service/SearchS';
/**
 * Продкты
 */
export declare class InventoryDocRowSQL extends BaseSQL {
    faListDocRow(id: number): Promise<InventoryDocRowI[]>;
    faListTotal(search: SearchS): Promise<number>;
    faGetById(id: number): Promise<InventoryDocRowI>;
    faInsert(data: InventoryDocRowI): Promise<number>;
    faGetDocRowIds(id: number): Promise<number[]>;
    faRemoveDocRow(id: number): Promise<boolean>;
}
