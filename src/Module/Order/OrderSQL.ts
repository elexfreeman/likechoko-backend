import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { OrderE } from './OrderE';
import { OrderI } from 'lc-common/lib/Interfaces/OrderI';

/**
 * Товары
 */
export class OrderSQL extends BaseSQL {
  /**
   * Список товаров
   */
  public async faList(): Promise<OrderI[]> {
    let ok = true;
    let resp: OrderI[];

    if (ok) {
      let sql = `SELECT * FROM ${OrderE.NAME} p`;

      try {
        resp = (await this.db.raw(sql, {}))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'product list', 'Не удалось получить информацию о товарах');
      }
    }

    return resp;
  }

  /**
   * Получить товар по Url
   * @param sUrl
   */
  public async faOrderInsert(data: OrderI): Promise<number> {
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
