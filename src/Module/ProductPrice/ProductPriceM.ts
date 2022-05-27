import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
// Системные классы

// Классы SQL Запросов
import { ProductPriceSQL } from './ProductPriceSQL';

// Роутинг
import { ProductPriceR } from 'lc-common/lib/Routes/ProductPriceR';
import R = ProductPriceR;

// Валидация
import * as V from './ProductPriceV';
import { SearchS } from 'lc-common/lib/Service/SearchS';
import { ProductPriceI } from 'lc-common/lib/Interfaces/ProductPriceI';
import { PaginationOptionsS } from 'lc-common/lib/Service/PaginationOptionsS';
import { PaginationOptionsI, ColumnI } from 'lc-common/lib/Interfaces/ListI';

import * as TableI from 'lc-common/lib/Interfaces/TableI';

/**
 * Категории товаров
 */
export class ProductPriceM extends System.BaseM {
  private productPriceSQL: ProductPriceSQL;

  constructor(req: any) {
    super(req);

    this.productPriceSQL = new ProductPriceSQL(req);
  }

  /**
   * Получить по id
   * @param data
   */
  public async faGetById(data: R.getById.RequestI): Promise<R.getById.ResponseI> {
    data = <R.getById.RequestI>V.getById(this.req, data);
    let ok = this.errorSys.isOk();

    // --------------------------

    let item: ProductPriceI = null;
    if (ok) {
      item = await this.productPriceSQL.faGetById(data.id);
    }

    // --------------------------

    let out: R.getById.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        row: item,
      };
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
      await this.productPriceSQL.faUpdate(id, data);
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
      id = await this.productPriceSQL.faInsert(data);
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

  /**
   * ProductPrice list
   * @param data
   */
  public async faList(data: R.list.RequestI): Promise<R.list.ResponseI> {
    data = <R.list.RequestI>V.list(this.req, data);
    let ok = this.errorSys.isOk();

    // --------------------------

    let aList: ProductPriceI[] = [];
    let nTotal = 0;
    if (ok) {
      aList = await this.productPriceSQL.faList(new SearchS().fSetParam(data));
      nTotal = await this.productPriceSQL.faListTotal(new SearchS().fSetParam(data));
    }

    // --------------------------

    let out: R.list.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        list: aList,
        total: nTotal,
      };
    }

    return out;
  }

  // eslint-disable-next-line
  public async faListInfo(data: R.listInfo.RequestI): Promise<R.listInfo.ResponseI> {
    let ok = this.errorSys.isOk();

    // --------------------------

    const paginationOptions: PaginationOptionsI = PaginationOptionsS.InitRus();
    const aColumn: ColumnI[] = [
      {
        label: 'id',
        field: 'id',
      },
      {
        label: 'Название',
        field: 'caption',
      },
      {
        label: 'Описание',
        field: 'description',
      },
    ];

    // --------------------------

    let out: R.listInfo.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        paginationOptions: paginationOptions,
        aColumn: aColumn,
      };
    }

    return out;
  }

  // eslint-disable-next-line
  public async faInfo(data: R.info.RequestI): Promise<R.info.ResponseI> {
    let ok = this.errorSys.isOk();
    const sCaption = 'Цены товара';

    const aColumn: TableI.ColumnI[] = [
      {
        sName: 'id',
        sCaption: 'Id',
        nType: TableI.ColumnTypeEnum.Integer,
        bPrimaryKey: true,
      },
      {
        sName: 'id_product',
        sCaption: 'Id товара',
        nType: TableI.ColumnTypeEnum.Integer,
        bPrimaryKey: false,
      },
      {
        sName: 'price',
        sCaption: 'Цена',
        nType: TableI.ColumnTypeEnum.Float,
        bPrimaryKey: false,
      },
    ];

    // --------------------------

    let out: R.info.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        sCaption: sCaption,
        aColumn: aColumn,
      };
    }

    return out;
  }
}
