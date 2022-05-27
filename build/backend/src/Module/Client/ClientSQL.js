'use strict';
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ClientSQL = void 0;
const BaseSQL_1 = __importDefault(require('@a-a-game-studio/aa-core/lib/System/BaseSQL'));
const ClientE_1 = require('./ClientE');

/**
 * Продкты
 */
class ClientSQL extends BaseSQL_1.default {
  /**
   * Список
   */
  async faList(search) {
    let ok = true;
    let resp;
    if (ok) {
      let sql = `SELECT * FROM ${ClientE_1.ClientE.NAME} p LIMIT :nOffset, :nLimit`;
      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'Client list', 'Не удалось получить информацию о Client');
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
      let sql = `SELECT count(*) cc FROM ${ClientE_1.ClientE.NAME} p `;
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
   * Получить ClientI
   * @param id
   */
  async faGetById(id) {
    let ok = true;
    let resp = null;
    if (ok) {
      let sql = `SELECT p.* FROM ${ClientE_1.ClientE.NAME} p
            where p.id=:id`;
      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ClientI');
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
    let clientE = new ClientE_1.ClientE();
    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(clientE.getRulesInsert(), data)) {
        throw 'validation error';
      }
      resp = (await this.db(ClientE_1.ClientE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faClientInsert', 'Не удалось вставить заказ');
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
    let clientE = new ClientE_1.ClientE();
    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(clientE.getRulesUpdate(), data)) {
        throw 'validation error';
      }
      await this.db(ClientE_1.ClientE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faClientUpdate', 'Не удалось обновить');
    }
    return ok;
  }
}
exports.ClientSQL = ClientSQL;
//# sourceMappingURL=ClientSQL.js.map
