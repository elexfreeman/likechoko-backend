import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
// Системные классы

// Классы SQL Запросов
import { ProductTagSQL } from './ProductTagSQL';

// Роутинг
import { ProductTagR } from 'lc-common/lib/Routes/ProductTagR';
import R = ProductTagR;

// Валидация
import * as V from './ProductTagV';
import { SearchS } from 'lc-common/lib/Service/SearchS';
import { ProductTagI } from 'lc-common/lib/Interfaces/ProductTagI';

/**
 * Товыры
 */
export class ProductTagM extends System.BaseM {
  private productTagSQL: ProductTagSQL;

  constructor(req: any) {
    super(req);

    this.productTagSQL = new ProductTagSQL(req);
  }

  public async faList(data: R.list.RequestI): Promise<R.list.ResponseI> {
    data = <R.list.RequestI>V.list(this.req, data);
    let ok = this.errorSys.isOk();

    // --------------------------

    let vProductTag: ProductTagI[] = [];
    if (ok) {
      vProductTag = await this.productTagSQL.faList(new SearchS().fSetParam(data));
    }

    // --------------------------

    let out: R.list.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        list: vProductTag,
      };
    }

    return out;
  }

  /**
   * Получить по id
   * @param data
   */
  public async faGetById(data: R.getById.RequestI): Promise<R.getById.ResponseI> {
    data = <R.getById.RequestI>V.getById(this.req, data);
    let ok = this.errorSys.isOk();

    // --------------------------

    let item: ProductTagI = null;
    if (ok) {
      item = await this.productTagSQL.faGetById(data.id);
    }

    // --------------------------

    let out: R.getById.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = item;
    }

    return out;
  }
  // =====================================

  /**
   * Обновленеи
   * @param data
   */
  public async faUpdate(data: R.update.RequestI): Promise<R.update.ResponseI> {
    data = <R.update.RequestI>V.update(this.req, data);
    let ok = this.errorSys.isOk();

    // --------------------------

    let id: number = data.id;
    if (ok) {
      await this.productTagSQL.faUpdate(id, data);
    }

    // --------------------------

    let out: R.update.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        id,
      };
    }

    return out;
  }
  // =====================================

  /**
   * Вставка
   * @param data
   */
  public async faInsert(data: R.insert.RequestI): Promise<R.insert.ResponseI> {
    data = <R.insert.RequestI>V.insert(this.req, data);
    let ok = this.errorSys.isOk();

    // --------------------------

    let id: number = null;
    if (ok) {
      id = await this.productTagSQL.faInsert(data);
    }

    // --------------------------

    let out: R.insert.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        id,
      };
    }

    return out;
  }
  // =====================================
}
