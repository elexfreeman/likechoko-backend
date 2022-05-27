import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { OrderE } from './OrderE';
import { OrderI } from 'lc-common/lib/Interfaces/OrderI';
import { OrderProductE, OrderProductI } from './OrderProductE';

/**
 * Товары
 */
export class OrderProductSQL extends BaseSQL {
  /**
   * Список товаров
   */
  public async faList(orderId: number): Promise<OrderProductI[]> {
    let resp: OrderProductI[];

    let sql = `SELECT * FROM ${OrderProductE.NAME} p where p.order_id=:orderId`;

    try {
      resp = (await this.db.raw(sql, { orderId: orderId }))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'order product list', 'Не удалось получить информацию о товарах заказа');
    }

    return resp;
  }

  /**
   * Получить товар по Url
   * @param sUrl
   */
  public async faInsert(data: OrderI): Promise<number> {
    let resp: number = 0;
    let orderE = new OrderE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(orderE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(OrderE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faOrderInsert', 'Не удалось вставить заказ');
    }

    return resp;
  }
}

/**
 * обработка BgImg
 * @param product
 */
/* export const fProcessBgIg = (product: TProduct.ProductI) => {
    if (product.img) {
        const tmp = product.img.split('.');
        product.bgImg = tmp[0] + '_b.' + tmp[1];
    } else {
        product.bgImg = '';;
    }

    return product
}
 */
