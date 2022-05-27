import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductTagE } from './ProductTagE';
import { ProductTagI } from 'lc-common/lib/Interfaces/ProductTagI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export class ProductTagSQL extends BaseSQL {
  /**
   * Список
   */
  public async faList(search: SearchS): Promise<ProductTagI[]> {
    let ok = true;
    let resp: ProductTagI[];

    if (ok) {
      let sql = `SELECT * FROM ${ProductTagE.NAME} p LIMIT :nOffset, :nLimit`;

      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'ProductTag list', 'Не удалось получить информацию о ProductTag');
      }
    }

    return resp;
  }

  /**
   * Получить ProductTagI
   * @param id
   */
  public async faGetById(id: number): Promise<ProductTagI> {
    let ok = true;
    let resp: ProductTagI = null;

    if (ok) {
      let sql = `SELECT p.* FROM ${ProductTagE.NAME} p
            where p.id=:id`;

      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductTagI');
      }
    }

    return resp;
  }

  /**
   * Добавить
   * @param data
   */
  public async faInsert(data: ProductTagI): Promise<number> {
    let resp: number = 0;
    let productTagE = new ProductTagE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productTagE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(ProductTagE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductTagInsert', 'Не удалось вставить заказ');
    }

    return resp;
  }

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  public async faUpdate(id: number, data: ProductTagI): Promise<boolean> {
    let ok = this.errorSys.isOk();
    let productTagE = new ProductTagE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productTagE.getRulesUpdate(), data)) {
        throw 'validation error';
      }

      await this.db(ProductTagE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductTagUpdate', 'Не удалось обновить');
    }

    return ok;
  }
}
