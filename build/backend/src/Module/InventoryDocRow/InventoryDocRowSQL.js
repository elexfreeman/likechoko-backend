'use strict';
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.InventoryDocRowSQL = void 0;
const BaseSQL_1 = __importDefault(require('@a-a-game-studio/aa-core/lib/System/BaseSQL'));
const InventoryDocRowE_1 = require('./InventoryDocRowE');

/**
 * Продкты
 */
class InventoryDocRowSQL extends BaseSQL_1.default {
  /**
   * Список
   */
  async faListDocRow(id) {
    let ok = true;
    let resp;
    if (ok) {
      let sql = `SELECT * FROM ${InventoryDocRowE_1.InventoryDocRowE.NAME} p
            where p.${InventoryDocRowE_1.InventoryDocRowE.DOC_NAME}_id = :id`;
      try {
        resp = (
          await this.db.raw(sql, {
            id: id,
          })
        )[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'InventoryDocRow list', 'Не удалось получить faListDocRow');
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
      let sql = `SELECT count(*) cc FROM ${InventoryDocRowE_1.InventoryDocRowE.NAME} p `;
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
   * Получить InventoryDocRowI
   * @param id
   */
  async faGetById(id) {
    let ok = true;
    let resp = null;
    if (ok) {
      let sql = `SELECT p.* FROM ${InventoryDocRowE_1.InventoryDocRowE.NAME} p
            where p.id=:id`;
      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о InventoryDocRowI');
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
    let inventoryDocRowE = new InventoryDocRowE_1.InventoryDocRowE();
    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(inventoryDocRowE.getRulesInsert(), data)) {
        throw 'validation error';
      }
      resp = (await this.db(InventoryDocRowE_1.InventoryDocRowE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faInventoryDocRowInsert', 'Не удалось вставить ');
    }
    return resp;
  }
  async faGetDocRowIds(id) {
    let ok = true;
    let resp = [];
    if (ok) {
      let sql = `SELECT id FROM ${InventoryDocRowE_1.InventoryDocRowE.NAME} p
            where p.${InventoryDocRowE_1.InventoryDocRowE.DOC_NAME}_id = :id`;
      try {
        const aData = (await this.db.raw(sql, { id: id }))[0];
        resp = resp.map((item, key) => {
          return item.id;
        });
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetDocRowIds', 'Не удалось список id строк документа');
      }
    }
    return resp;
  }

  /**
   * Удаляет строки из таблчного документа
   * @param id - документ
   */
  async faRemoveDocRow(id) {
    let ok = true;
    if (ok) {
      try {
        const aDeleteIds = await this.faGetDocRowIds(id);
        await this.db(InventoryDocRowE_1.InventoryDocRowE.NAME).whereIn('id', aDeleteIds).del();
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faRemoveDocRow', 'Не удалось удалить строки документа');
      }
    }
    return ok;
  }
}
exports.InventoryDocRowSQL = InventoryDocRowSQL;
//# sourceMappingURL=InventoryDocRowSQL.js.map
