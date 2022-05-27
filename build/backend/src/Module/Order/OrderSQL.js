'use strict';
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderSQL = void 0;
const BaseSQL_1 = __importDefault(require('@a-a-game-studio/aa-core/lib/System/BaseSQL'));
const OrderE_1 = require('./OrderE');

/**
 * Товары
 */
class OrderSQL extends BaseSQL_1.default {
  /**
   * Список товаров
   */
  async faList() {
    let ok = true;
    let resp;
    if (ok) {
      let sql = `SELECT * FROM ${OrderE_1.OrderE.NAME} p`;
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
  async faOrderInsert(data) {
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
exports.OrderSQL = OrderSQL;

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
//# sourceMappingURL=OrderSQL.js.map
