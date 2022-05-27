import BaseM from '@a-a-game-studio/aa-core/lib/System/BaseM';
import { OrderR as R } from 'lc-common/lib/Routes/OrderR';
/**
 * Бизнес модель пользователя суда мы нас проксирует контроллер 1 url = 1 метод модели
 * Внутри метода делаем нужную бизнес логику
 */
export declare class OrderM extends BaseM {
    private orderSQL;
    constructor(req: any);
    faInit(): Promise<void>;
    /**
     * Сделать заказ
     * @param data
     */
    faMakeOrder(data: R.makeOrder.RequestI): Promise<R.makeOrder.ResponseI>;
}
