'use strict';
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductSQL = void 0;
const BaseSQL_1 = __importDefault(require('@a-a-game-studio/aa-core/lib/System/BaseSQL'));
const ProductE_1 = require('./ProductE');
const ProductTagIdxE_1 = require('../ProductTag/ProductTagIdxE');
const ProductTagE_1 = require('../ProductTag/ProductTagE');
const ProductCategoryE_1 = require('../ProductCategory/ProductCategoryE');

/**
 * Продкты
 */
class ProductSQL extends BaseSQL_1.default {
  /**
   * Список
   */
  async faList(search) {
    let ok = true;
    let resp;
    if (ok) {
      let sql = `SELECT p.*, pc.caption AS category_caption FROM ${ProductE_1.ProductE.NAME} p
                JOIN ${ProductCategoryE_1.ProductCategoryE.NAME} pc
                ON pc.id=p.category_id
            LIMIT :nOffset, :nLimit`;
      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'Product list', 'Не удалось получить информацию о Product');
      }
    }
    return resp;
  }

  /**
   * Список
   */
  async faListTotal(search) {
    let ok = true;
    let resp = 0;
    if (ok) {
      let sql = `SELECT count(*) cc FROM ${ProductE_1.ProductE.NAME} p `;
      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0][0]['cc'];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faListTotal', 'Не удалось получить информацию о faListTotal');
      }
    }
    return resp;
  }

  /**
   * Получить ProductI
   * @param id
   */
  async faGetById(id) {
    let ok = true;
    let resp = null;
    if (ok) {
      let sql = `SELECT p.* FROM ${ProductE_1.ProductE.NAME} p
            where p.id=:id`;
      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductI');
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
    let productE = new ProductE_1.ProductE();
    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productE.getRulesInsert(), data)) {
        throw 'validation error';
      }
      resp = (await this.db(ProductE_1.ProductE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductInsert', 'Не удалось вставить заказ');
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
    let productE = new ProductE_1.ProductE();
    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productE.getRulesUpdate(), data)) {
        throw 'validation error';
      }
      await this.db(ProductE_1.ProductE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductUpdate', 'Не удалось обновить');
    }
    return ok;
  }

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  async faAddTag(productId, tagId) {
    let ok = this.errorSys.isOk();
    let resp = 0;
    let productTagIdxE = new ProductTagIdxE_1.ProductTagIdxE();
    try {
      // Валидируем входящие данные
      if (
        !this.modelValidatorSys.fValid(productTagIdxE.getRulesInsert(), {
          product_id: productId,
          tag_id: tagId,
        })
      ) {
        throw 'validation error';
      }
      resp = (await this.db(ProductTagIdxE_1.ProductTagIdxE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faAddProductTag', 'Не добавить тэг');
    }
    return resp;
  }

  /**
   * Удалить тэг товара
   * @param id
   * @param data
   */
  async faDelTag(productId, tagId) {
    let ok = this.errorSys.isOk();
    let resp = 0;
    let productTagIdxE = new ProductTagIdxE_1.ProductTagIdxE();
    try {
      // Валидируем входящие данные
      if (
        !this.modelValidatorSys.fValid(productTagIdxE.getRulesDel(), {
          product_id: productId,
          tag_id: tagId,
        })
      ) {
        throw 'validation error';
      }
      await this.db(ProductTagIdxE_1.ProductTagIdxE.NAME)
        .where({
          product_id: productId,
          tag_id: tagId,
        })
        .del();
    } catch (e) {
      this.errorSys.errorEx(e, 'faDelTag', 'Не удалить тэг');
    }
    return resp;
  }

  /**
   * Список тэгов товара
   */
  async faGetTagList(productId) {
    let ok = true;
    let resp;
    if (ok) {
      let sql = `SELECT pt.* FROM ${ProductTagE_1.ProductTagE.NAME} pt
                JOIN ${ProductTagIdxE_1.ProductTagIdxE.NAME} pt_idx
                ON pt_idx.tag_id=pt.id
                WHERE
                pt_idx.product_id = :product_id
            `;
      try {
        resp = (await this.db.raw(sql, { product_id: productId }))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'Product tag list', 'Не удалось получить информацию о Product tag list');
      }
    }
    return resp;
  }
}
exports.ProductSQL = ProductSQL;
//# sourceMappingURL=ProductSQL.js.map
