import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductCategoryVarI } from 'lc-common/lib/Interfaces/ProductCategoryVarI';
import { SearchS } from 'lc-common/lib/Service/SearchS';
/**
 * Продкты
 */
export declare class ProductCategoryVarSQL extends BaseSQL {
    /**
     * Список
     */
    faList(search: SearchS): Promise<ProductCategoryVarI[]>;
    /**
     * Получить ProductCategoryVarI
     * @param id
     */
    faGetById(id: number): Promise<ProductCategoryVarI>;
    /**
     * Добавить
     * @param data
     */
    faInsert(data: ProductCategoryVarI): Promise<number>;
    /**
     * Обновить продукт
     * @param id
     * @param data
     */
    faUpdate(id: number, data: ProductCategoryVarI): Promise<boolean>;
}
