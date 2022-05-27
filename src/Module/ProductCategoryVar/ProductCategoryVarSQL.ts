import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductCategoryVarE } from './ProductCategoryVarE';
import { ProductCategoryVarI } from 'lc-common/lib/Interfaces/ProductCategoryVarI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export class ProductCategoryVarSQL extends BaseSQL {
  /**
   * Список
   */
  public async faList(search: SearchS): Promise<ProductCategoryVarI[]> {
    let ok = true;
    let resp: ProductCategoryVarI[];

    if (ok) {
      let sql = `SELECT * FROM ${ProductCategoryVarE.NAME} p LIMIT :nOffset, :nLimit`;

      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'ProductCategoryVar list', 'Не удалось получить информацию о ProductCategoryVar');
      }
    }

    return resp;
  }

  /**
   * Получить ProductCategoryVarI
   * @param id
   */
  public async faGetById(id: number): Promise<ProductCategoryVarI> {
    let ok = true;
    let resp: ProductCategoryVarI = null;

    if (ok) {
      let sql = `SELECT p.* FROM ${ProductCategoryVarE.NAME} p
            where p.id=:id`;

      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductCategoryVarI');
      }
    }

    return resp;
  }

  /**
   * Добавить
   * @param data
   */
  public async faInsert(data: ProductCategoryVarI): Promise<number> {
    let resp: number = 0;
    let productCategoryE = new ProductCategoryVarE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productCategoryE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(ProductCategoryVarE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductCategoryVarInsert', 'Не удалось вставить заказ');
    }

    return resp;
  }

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  public async faUpdate(id: number, data: ProductCategoryVarI): Promise<boolean> {
    let ok = this.errorSys.isOk();
    let productCategoryE = new ProductCategoryVarE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productCategoryE.getRulesUpdate(), data)) {
        throw 'validation error';
      }

      await this.db(ProductCategoryVarE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductCategoryVarUpdate', 'Не удалось обновить');
    }

    return ok;
  }
}
