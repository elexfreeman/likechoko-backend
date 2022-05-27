import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductPriceE } from './ProductPriceE';
import { ProductPriceI } from 'lc-common/lib/Interfaces/ProductPriceI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

export class ProductPriceSQL extends BaseSQL {
  /**
   * Список
   */
  public async faList(search: SearchS): Promise<ProductPriceI[]> {
    let ok = true;
    let resp: ProductPriceI[];

    if (ok) {
      let sql = `SELECT * FROM ${ProductPriceE.NAME} p LIMIT :nOffset, :nLimit`;

      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'ProductPrice list', 'Не удалось получить информацию о ProductPrice');
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
      let sql = `SELECT count(*) cc FROM ${ProductPriceE.NAME} p `;

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
   * Получить ProductPriceI
   * @param id
   */
  public async faGetById(id: number): Promise<ProductPriceI> {
    let ok = true;
    let resp: ProductPriceI = null;

    if (ok) {
      let sql = `SELECT p.* FROM ${ProductPriceE.NAME} p
            where p.id=:id`;

      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductPriceI');
      }
    }

    return resp;
  }

  /**
   * Добавить
   * @param data
   */
  public async faInsert(data: ProductPriceI): Promise<number> {
    let resp: number = 0;
    let productPriceE = new ProductPriceE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productPriceE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(ProductPriceE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductPriceInsert', 'Не удалось вставить заказ');
    }

    return resp;
  }

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  public async faUpdate(id: number, data: ProductPriceI): Promise<boolean> {
    let ok = this.errorSys.isOk();
    let productPriceE = new ProductPriceE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productPriceE.getRulesUpdate(), data)) {
        throw 'validation error';
      }

      await this.db(ProductPriceE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductPriceUpdate', 'Не удалось обновить');
    }

    return ok;
  }
}
