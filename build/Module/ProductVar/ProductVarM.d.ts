import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductVarR } from 'lc-common/lib/Routes/ProductVarR';
import R = ProductVarR;
/**
 * Товыры
 */
export declare class ProductVarM extends System.BaseM {
    private productCategorySQL;
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
