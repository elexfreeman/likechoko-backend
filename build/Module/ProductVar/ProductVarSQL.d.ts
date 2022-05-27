import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductVarI } from 'lc-common/lib/Interfaces/ProductVarI';
import { SearchS } from 'lc-common/lib/Service/SearchS';
/**
 * Продкты
 */
export declare class ProductVarSQL extends BaseSQL {
    /**
     * Список
     */
    faList(search: SearchS): Promise<ProductVarI[]>;
    /**
     * Получить ProductVarI
     * @param id
     */
    faGetById(id: number): Promise<ProductVarI>;
    /**
     * Добавить
     * @param data
     */
    faInsert(data: ProductVarI): Promise<number>;
    /**
     * Обновить продукт
     * @param id
     * @param data
     */
    faUpdate(id: number, data: ProductVarI): Promise<boolean>;
}
