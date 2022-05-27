'use strict';
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.StorehouseSQL = void 0;
const BaseSQL_1 = __importDefault(require('@a-a-game-studio/aa-core/lib/System/BaseSQL'));
const StorehouseE_1 = require('./StorehouseE');

/**
 * Продкты
 */
class StorehouseSQL extends BaseSQL_1.default {
  /**
   * Список
   */
  async faList(search) {
    let ok = true;
    let resp;
    if (ok) {
      let sql = `SELECT * FROM ${StorehouseE_1.StorehouseE.NAME} p LIMIT :nOffset, :nLimit`;
      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'Storehouse list', 'Не удалось получить информацию о Storehouse');
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
      let sql = `SELECT count(*) cc FROM ${StorehouseE_1.StorehouseE.NAME} p `;
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
   * Получить StorehouseI
   * @param id
   */
  async faGetById(id) {
    let ok = true;
    let resp = null;
    if (ok) {
      let sql = `SELECT p.* FROM ${StorehouseE_1.StorehouseE.NAME} p
            where p.id=:id`;
      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о StorehouseI');
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
    let storehouseE = new StorehouseE_1.StorehouseE();
    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(storehouseE.getRulesInsert(), data)) {
        throw 'validation error';
      }
      resp = (await this.db(StorehouseE_1.StorehouseE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faStorehouseInsert', 'Не удалось вставить заказ');
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
    let storehouseE = new StorehouseE_1.StorehouseE();
    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(storehouseE.getRulesUpdate(), data)) {
        throw 'validation error';
      }
      await this.db(StorehouseE_1.StorehouseE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faStorehouseUpdate', 'Не удалось обновить');
    }
    return ok;
  }
}
exports.StorehouseSQL = StorehouseSQL;
//# sourceMappingURL=StorehouseSQL.js.map
