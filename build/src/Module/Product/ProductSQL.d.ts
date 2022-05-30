import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductI } from 'lc-common/lib/Interfaces/ProductI';
import { SearchS } from 'lc-common/lib/Service/SearchS';
import { ProductTagI } from 'lc-common/lib/Interfaces/ProductTagI';
/**
 * Продкты
 */
export declare class ProductSQL extends BaseSQL {
    /**
     * Список
     */
    faList(search: SearchS): Promise<ProductI[]>;
    /**
     * Список
     */
    faListTotal(search: SearchS): Promise<number>;
    /**
     * Получить ProductI
     * @param id
     */
    faGetById(id: number): Promise<ProductI>;
    /**
     * Добавить
     * @param data
     */
    faInsert(data: ProductI): Promise<number>;
    /**
     * Обновить продукт
     * @param id
     * @param data
     */
    faUpdate(id: number, data: ProductI): Promise<boolean>;
    /**
     * Обновить продукт
     * @param id
     * @param data
     */
    faAddTag(productId: number, tagId: number): Promise<number>;
    /**
     * Удалить тэг товара
     * @param id
     * @param data
     */
    faDelTag(productId: number, tagId: number): Promise<number>;
    /**
     * Список тэгов товара
     */
    faGetTagList(productId: number): Promise<ProductTagI[]>;
}
