import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { InventoryE } from './InventoryE';
import { InventoryI, InventoryRowI } from 'lc-common/lib/Interfaces/InventoryI';
import { SearchS } from 'lc-common/lib/Service/SearchS';
import { InventoryRowE } from './InventoryRowE';

export class InventorySQL extends BaseSQL {
  public async faList(search: SearchS): Promise<InventoryI[]> {
    let ok = true;
    let resp: InventoryI[];

    if (ok) {
      let sql = `SELECT * FROM ${InventoryE.NAME} p LIMIT :nOffset, :nLimit`;

      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'Inventory list', 'Не удалось получить информацию о Inventory');
      }
    }

    return resp;
  }

  public async faListTotal(search: SearchS): Promise<number> {
    let ok = true;
    let resp: number = 0;

    if (ok) {
      let sql = `SELECT count(*) cc FROM ${InventoryE.NAME} p `;

      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0][0]['cc'];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faListTotal', 'Не удалось получить информацию о faListTotal');
      }
    }

    return resp;
  }

  public async faGetById(id: number): Promise<InventoryI> {
    let ok = true;
    let resp: InventoryI = null;

    if (ok) {
      let sql = `SELECT p.* FROM ${InventoryE.NAME} p
            where p.id=:id`;

      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о InventoryI');
      }
    }

    return resp;
  }

  public async faInsert(data: InventoryI): Promise<number> {
    let resp: number = 0;
    let inventoryE = new InventoryE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(inventoryE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(InventoryE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faInventoryInsert', 'Не удалось вставить заказ');
    }

    return resp;
  }

  public async faInsertRow(data: InventoryRowI): Promise<number> {
    let resp: number = 0;
    let inventoryRowE = new InventoryRowE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(inventoryRowE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(InventoryE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faInsertRow', 'Не удалось вставить');
    }

    return resp;
  }

  public async faUpdate(id: number, data: InventoryI): Promise<boolean> {
    let ok = this.errorSys.isOk();
    let inventoryE = new InventoryE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(inventoryE.getRulesUpdate(), data)) {
        throw 'validation error';
      }

      await this.db(InventoryE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faInventoryUpdate', 'Не удалось обновить');
    }

    return ok;
  }
}
