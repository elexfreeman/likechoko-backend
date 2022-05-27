'use strict';
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductCategoryVarSQL = void 0;
const BaseSQL_1 = __importDefault(require('@a-a-game-studio/aa-core/lib/System/BaseSQL'));
const ProductCategoryVarE_1 = require('./ProductCategoryVarE');

/**
 * Продкты
 */
class ProductCategoryVarSQL extends BaseSQL_1.default {
  /**
   * Список
   */
  async faList(search) {
    let ok = true;
    let resp;
    if (ok) {
      let sql = `SELECT * FROM ${ProductCategoryVarE_1.ProductCategoryVarE.NAME} p LIMIT :nOffset, :nLimit`;
      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'ProductCategoryVar list', 'Не удалось получить информацию о ProductCategoryVar');
      }
    }
    return resp;
  }

  /**
   * Получить ProductCategoryVarI
   * @param id
   */
  async faGetById(id) {
    let ok = true;
    let resp = null;
    if (ok) {
      let sql = `SELECT p.* FROM ${ProductCategoryVarE_1.ProductCategoryVarE.NAME} p
            where p.id=:id`;
      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductCategoryVarI');
      }
    }
    return resp;
  }

  /**
   * Добавить
   * @param data
   */
  async faInsert(data) {
    let resp = 0;
    let productCategoryE = new ProductCategoryVarE_1.ProductCategoryVarE();
    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productCategoryE.getRulesInsert(), data)) {
        throw 'validation error';
      }
      resp = (
        await this.db(ProductCategoryVarE_1.ProductCategoryVarE.NAME).insert(this.modelValidatorSys.getResult())
      )[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductCategoryVarInsert', 'Не удалось вставить заказ');
    }
    return resp;
  }

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  async faUpdate(id, data) {
    let ok = this.errorSys.isOk();
    let productCategoryE = new ProductCategoryVarE_1.ProductCategoryVarE();
    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productCategoryE.getRulesUpdate(), data)) {
        throw 'validation error';
      }
      await this.db(ProductCategoryVarE_1.ProductCategoryVarE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductCategoryVarUpdate', 'Не удалось обновить');
    }
    return ok;
  }
}
exports.ProductCategoryVarSQL = ProductCategoryVarSQL;
//# sourceMappingURL=ProductCategoryVarSQL.js.map
