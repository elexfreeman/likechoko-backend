import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductCategoryE } from './ProductCategoryE';
import { ProductCategoryI } from 'lc-common/lib/Interfaces/ProductCategoryI';
import { SearchS } from 'lc-common/lib/Service/SearchS';

/**
 * Продкты
 */
export class ProductCategorySQL extends BaseSQL {
  /**
   * Список
   */
  public async faList(search: SearchS): Promise<ProductCategoryI[]> {
    let ok = true;
    let resp: ProductCategoryI[];

    if (ok) {
      let sql = `SELECT * FROM ${ProductCategoryE.NAME} p LIMIT :nOffset, :nLimit`;

      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'ProductCategory list', 'Не удалось получить информацию о ProductCategory');
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
      let sql = `SELECT count(*) cc FROM ${ProductCategoryE.NAME} p `;

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
   * Получить ProductCategoryI
   * @param id
   */
  public async faGetById(id: number): Promise<ProductCategoryI> {
    let ok = true;
    let resp: ProductCategoryI = null;

    if (ok) {
      let sql = `SELECT p.* FROM ${ProductCategoryE.NAME} p
            where p.id=:id`;

      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductCategoryI');
      }
    }

    return resp;
  }

  /**
   * Добавить
   * @param data
   */
  public async faInsert(data: ProductCategoryI): Promise<number> {
    let resp: number = 0;
    let productCategoryE = new ProductCategoryE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productCategoryE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(ProductCategoryE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductCategoryInsert', 'Не удалось вставить заказ');
    }

    return resp;
  }

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  public async faUpdate(id: number, data: ProductCategoryI): Promise<boolean> {
    let ok = this.errorSys.isOk();
    let productCategoryE = new ProductCategoryE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productCategoryE.getRulesUpdate(), data)) {
        throw 'validation error';
      }

      await this.db(ProductCategoryE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductCategoryUpdate', 'Не удалось обновить');
    }

    return ok;
  }
}
