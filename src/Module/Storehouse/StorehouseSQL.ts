import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { StorehouseE } from './StorehouseE';
import { StorehouseI } from 'lc-common/lib/Interfaces/StorehouseI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export class StorehouseSQL extends BaseSQL {
  /**
   * Список
   */
  public async faList(search: SearchS): Promise<StorehouseI[]> {
    let ok = true;
    let resp: StorehouseI[];

    if (ok) {
      let sql = `SELECT * FROM ${StorehouseE.NAME} p LIMIT :nOffset, :nLimit`;

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
  public async faListTotal(search: SearchS): Promise<number> {
    let ok = true;
    let resp: number = 0;

    if (ok) {
      let sql = `SELECT count(*) cc FROM ${StorehouseE.NAME} p `;

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
  public async faGetById(id: number): Promise<StorehouseI> {
    let ok = true;
    let resp: StorehouseI = null;

    if (ok) {
      let sql = `SELECT p.* FROM ${StorehouseE.NAME} p
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
  public async faInsert(data: StorehouseI): Promise<number> {
    let resp: number = 0;
    let storehouseE = new StorehouseE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(storehouseE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(StorehouseE.NAME).insert(this.modelValidatorSys.getResult()))[0];
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
  public async faUpdate(id: number, data: StorehouseI): Promise<boolean> {
    let ok = this.errorSys.isOk();
    let storehouseE = new StorehouseE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(storehouseE.getRulesUpdate(), data)) {
        throw 'validation error';
      }

      await this.db(StorehouseE.NAME)
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
