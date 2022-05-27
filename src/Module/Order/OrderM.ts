import BaseM from '@a-a-game-studio/aa-core/lib/System/BaseM';
import { OrderSQL } from './OrderSQL';
import * as V from './OrderV';
import { OrderR as R } from 'lc-common/lib/Routes/OrderR';

/**
 * Бизнес модель пользователя суда мы нас проксирует контроллер 1 url = 1 метод модели
 * Внутри метода делаем нужную бизнес логику
 */
export class OrderM extends BaseM {
  private orderSQL: OrderSQL;

  constructor(req: any) {
    super(req);
    this.orderSQL = new OrderSQL(req);
  }

  public async faInit() {
    // Инициализация бизнес моделей
  }

  /**
   * Сделать заказ
   * @param data
   */
  public async faMakeOrder(data: R.makeOrder.RequestI): Promise<R.makeOrder.ResponseI> {
    data = <R.makeOrder.RequestI>V.makeOrder(this.req, data);
    let orderId = 0;
    let ok = this.errorSys.isOk();

    // --------------------------

    if (ok) {
      // Получить пользователя по токену
      orderId = await this.orderSQL.faOrderInsert({
        city: data.city,
        delivery_address: data.delivery_address,
        comment: data.comment,
        delivery_date: data.delivery_date,
        delivery_time_comment: data.delivery_time_comment,
        user_id: 0,
      });
    }

    // --------------------------

    let out: R.makeOrder.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        order_id: orderId,
      };
    }

    return out;
  }
}
