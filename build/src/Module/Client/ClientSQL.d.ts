import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ClientI } from 'lc-common/lib/Interfaces/ClientI';
import { SearchS } from 'lc-common/lib/Service/SearchS';
/**
 * Продкты
 */
export declare class ClientSQL extends BaseSQL {
    faList(search: SearchS): Promise<ClientI[]>;
    faListTotal(search: SearchS): Promise<number>;
    faGetById(id: number): Promise<ClientI>;
    faInsert(data: ClientI): Promise<number>;
    faUpdate(id: number, data: ClientI): Promise<boolean>;
}
