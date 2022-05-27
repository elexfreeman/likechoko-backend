import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ClientE } from './ClientE';
import { ClientI } from 'lc-common/lib/Interfaces/ClientI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export class ClientSQL extends BaseSQL {
  public async faList(search: SearchS): Promise<ClientI[]> {
    let ok = true;
    let resp: ClientI[];

    if (ok) {
      let sql = `SELECT * FROM ${ClientE.NAME} p LIMIT :nOffset, :nLimit`;

      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'Client list', 'Не удалось получить информацию о Client');
      }
    }

    return resp;
  }

  public async faListTotal(search: SearchS): Promise<number> {
    let ok = true;
    let resp: number = 0;

    if (ok) {
      let sql = `SELECT count(*) cc FROM ${ClientE.NAME} p `;

      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0][0]['cc'];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faListTotal', 'Не удалось получить информацию о faListTotal');
      }
    }

    return resp;
  }

  public async faGetById(id: number): Promise<ClientI> {
    let ok = true;
    let resp: ClientI = null;

    if (ok) {
      let sql = `SELECT p.* FROM ${ClientE.NAME} p
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

  public async faInsert(data: ClientI): Promise<number> {
    let resp: number = 0;
    let clientE = new ClientE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(clientE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(ClientE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faClientInsert', 'Не удалось вставить заказ');
    }

    return resp;
  }

  public async faUpdate(id: number, data: ClientI): Promise<boolean> {
    let ok = this.errorSys.isOk();
    let clientE = new ClientE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(clientE.getRulesUpdate(), data)) {
        throw 'validation error';
      }

      await this.db(ClientE.NAME)
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
