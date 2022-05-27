import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductPriceI } from 'lc-common/lib/Interfaces/ProductPriceI';
import { SearchS } from 'lc-common/lib/Service/SearchS';
export declare class ProductPriceSQL extends BaseSQL {
    /**
     * Список
     */
    faList(search: SearchS): Promise<ProductPriceI[]>;
    /**
     * Список
     */
    faListTotal(search: SearchS): Promise<number>;
    /**
     * Получить ProductPriceI
     * @param id
     */
    faGetById(id: number): Promise<ProductPriceI>;
    /**
     * Добавить
     * @param data
     */
    faInsert(data: ProductPriceI): Promise<number>;
    /**
     * Обновить продукт
     * @param id
     * @param data
     */
    faUpdate(id: number, data: ProductPriceI): Promise<boolean>;
}
