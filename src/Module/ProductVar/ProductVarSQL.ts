import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductVarE } from './ProductVarE';
import { ProductVarI } from 'lc-common/lib/Interfaces/ProductVarI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export class ProductVarSQL extends BaseSQL {
  /**
   * Список
   */
  public async faList(search: SearchS): Promise<ProductVarI[]> {
    let ok = true;
    let resp: ProductVarI[];

    if (ok) {
      let sql = `SELECT * FROM ${ProductVarE.NAME} p LIMIT :nOffset, :nLimit`;

      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'ProductVar list', 'Не удалось получить информацию о ProductVar');
      }
    }

    return resp;
  }

  /**
   * Получить ProductVarI
   * @param id
   */
  public async faGetById(id: number): Promise<ProductVarI> {
    let ok = true;
    let resp: ProductVarI = null;

    if (ok) {
      let sql = `SELECT p.* FROM ${ProductVarE.NAME} p
            where p.id=:id`;

      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductVarI');
      }
    }

    return resp;
  }

  /**
   * Добавить
   * @param data
   */
  public async faInsert(data: ProductVarI): Promise<number> {
    let resp: number = 0;
    let productCategoryE = new ProductVarE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productCategoryE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(ProductVarE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductVarInsert', 'Не удалось вставить заказ');
    }

    return resp;
  }

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  public async faUpdate(id: number, data: ProductVarI): Promise<boolean> {
    let ok = this.errorSys.isOk();
    let productCategoryE = new ProductVarE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productCategoryE.getRulesUpdate(), data)) {
        throw 'validation error';
      }

      await this.db(ProductVarE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductVarUpdate', 'Не удалось обновить');
    }

    return ok;
  }
}
