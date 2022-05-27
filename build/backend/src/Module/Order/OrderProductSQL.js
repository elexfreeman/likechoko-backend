'use strict';
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderProductSQL = void 0;
const BaseSQL_1 = __importDefault(require('@a-a-game-studio/aa-core/lib/System/BaseSQL'));
const OrderE_1 = require('./OrderE');
const OrderProductE_1 = require('./OrderProductE');

/**
 * Товары
 */
class OrderProductSQL extends BaseSQL_1.default {
  /**
   * Список товаров
   */
  async faList(orderId) {
    let resp;
    let sql = `SELECT * FROM ${OrderProductE_1.OrderProductE.NAME} p where p.order_id=:orderId`;
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
  async faInsert(data) {
    let resp = 0;
    let orderE = new OrderE_1.OrderE();
    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(orderE.getRulesInsert(), data)) {
        throw 'validation error';
      }
      resp = (await this.db(OrderE_1.OrderE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faOrderInsert', 'Не удалось вставить заказ');
    }
    return resp;
  }
}
exports.OrderProductSQL = OrderProductSQL;

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
//# sourceMappingURL=OrderProductSQL.js.map
