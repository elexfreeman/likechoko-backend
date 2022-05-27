import BaseSQL from '@a-a-game-studio/aa-core/lib/System/BaseSQL';
import { ProductE } from './ProductE';
import { ProductI } from 'lc-common/lib/Interfaces/ProductI';
import { SearchS } from 'lc-common/lib/Service/SearchS';
import { ProductTagIdxE } from '../ProductTag/ProductTagIdxE';
import { ProductTagI } from 'lc-common/lib/Interfaces/ProductTagI';
import { ProductTagE } from '../ProductTag/ProductTagE';
import { ProductCategoryE } from '../ProductCategory/ProductCategoryE';

/**
 * Продкты
 */
export class ProductSQL extends BaseSQL {
  /**
   * Список
   */
  public async faList(search: SearchS): Promise<ProductI[]> {
    let ok = true;
    let resp: ProductI[];

    if (ok) {
      let sql = `SELECT p.*, pc.caption AS category_caption FROM ${ProductE.NAME} p
                JOIN ${ProductCategoryE.NAME} pc
                ON pc.id=p.category_id
            LIMIT :nOffset, :nLimit`;

      try {
        resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'Product list', 'Не удалось получить информацию о Product');
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
      let sql = `SELECT count(*) cc FROM ${ProductE.NAME} p `;

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
   * Получить ProductI
   * @param id
   */
  public async faGetById(id: number): Promise<ProductI> {
    let ok = true;
    let resp: ProductI = null;

    if (ok) {
      let sql = `SELECT p.* FROM ${ProductE.NAME} p
            where p.id=:id`;

      try {
        resp = (await this.db.raw(sql, { id: id }))[0][0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductI');
      }
    }

    return resp;
  }

  /**
   * Добавить
   * @param data
   */
  public async faInsert(data: ProductI): Promise<number> {
    let resp: number = 0;
    let productE = new ProductE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productE.getRulesInsert(), data)) {
        throw 'validation error';
      }

      resp = (await this.db(ProductE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductInsert', 'Не удалось вставить заказ');
    }

    return resp;
  }

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  public async faUpdate(id: number, data: ProductI): Promise<boolean> {
    let ok = this.errorSys.isOk();
    let productE = new ProductE();

    try {
      // Валидируем входящие данные
      if (!this.modelValidatorSys.fValid(productE.getRulesUpdate(), data)) {
        throw 'validation error';
      }

      await this.db(ProductE.NAME)
        .where({
          id: id,
        })
        .update(this.modelValidatorSys.getResult());
    } catch (e) {
      this.errorSys.errorEx(e, 'faProductUpdate', 'Не удалось обновить');
    }

    return ok;
  }

  /**
   * Обновить продукт
   * @param id
   * @param data
   */
  public async faAddTag(productId: number, tagId: number): Promise<number> {
    let resp: number = 0;
    let productTagIdxE = new ProductTagIdxE();

    try {
      // Валидируем входящие данные
      if (
        !this.modelValidatorSys.fValid(productTagIdxE.getRulesInsert(), {
          product_id: productId,
          tag_id: tagId,
        })
      ) {
        throw 'validation error';
      }

      resp = (await this.db(ProductTagIdxE.NAME).insert(this.modelValidatorSys.getResult()))[0];
    } catch (e) {
      this.errorSys.errorEx(e, 'faAddProductTag', 'Не добавить тэг');
    }

    return resp;
  }

  /**
   * Удалить тэг товара
   * @param id
   * @param data
   */
  public async faDelTag(productId: number, tagId: number): Promise<number> {
    let resp: number = 0;
    let productTagIdxE = new ProductTagIdxE();

    try {
      // Валидируем входящие данные
      if (
        !this.modelValidatorSys.fValid(productTagIdxE.getRulesDel(), {
          product_id: productId,
          tag_id: tagId,
        })
      ) {
        throw 'validation error';
      }

      await this.db(ProductTagIdxE.NAME)
        .where({
          product_id: productId,
          tag_id: tagId,
        })
        .del();
    } catch (e) {
      this.errorSys.errorEx(e, 'faDelTag', 'Не удалить тэг');
    }

    return resp;
  }

  /**
   * Список тэгов товара
   */
  public async faGetTagList(productId: number): Promise<ProductTagI[]> {
    let ok = true;
    let resp: ProductI[];

    if (ok) {
      let sql = `SELECT pt.* FROM ${ProductTagE.NAME} pt
                JOIN ${ProductTagIdxE.NAME} pt_idx
                ON pt_idx.tag_id=pt.id
                WHERE
                pt_idx.product_id = :product_id
            `;
      try {
        resp = (await this.db.raw(sql, { product_id: productId }))[0];
      } catch (e) {
        ok = false;
        this.errorSys.errorEx(e, 'Product tag list', 'Не удалось получить информацию о Product tag list');
      }
    }

    return resp;
  }
}
