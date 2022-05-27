import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
// Системные классы

// Классы SQL Запросов
import { ProductSQL } from './ProductSQL';

// Роутинг
import { ProductR } from 'lc-common/lib/Routes/ProductR';
import R = ProductR;

// Валидация
import * as V from './ProductV';
import { SearchS } from 'lc-common/lib/Service/SearchS';
import { ProductI } from 'lc-common/lib/Interfaces/ProductI';
import { PaginationOptionsS } from 'lc-common/lib/Service/PaginationOptionsS';
import { PaginationOptionsI, ColumnI } from 'lc-common/lib/Interfaces/ListI';

import * as TableI from 'lc-common/lib/Interfaces/TableI';

/**
 * Товыры
 */
export class ProductM extends System.BaseM {
  private productSQL: ProductSQL;

  constructor(req: any) {
    super(req);

    this.productSQL = new ProductSQL(req);
  }

  /**
   * Получить по id
   * @param data
   */
  public async faGetById(data: R.getById.RequestI): Promise<R.getById.ResponseI> {
    data = <R.getById.RequestI>V.getById(this.req, data);
    let ok = this.errorSys.isOk();

    // --------------------------

    let item: ProductI = null;
    if (ok) {
      item = await this.productSQL.faGetById(data.id);
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
      await this.productSQL.faUpdate(id, data);
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
      id = await this.productSQL.faInsert(data);
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
   * Product list
   * @param data
   */
  public async faList(data: R.list.RequestI): Promise<R.list.ResponseI> {
    data = <R.list.RequestI>V.list(this.req, data);
    let ok = this.errorSys.isOk();

    // --------------------------

    let aList: ProductI[] = [];
    let nTotal = 0;
    if (ok) {
      aList = await this.productSQL.faList(new SearchS().fSetParam(data));
      nTotal = await this.productSQL.faListTotal(new SearchS().fSetParam(data));
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
        width: '40%',
      },
      {
        label: 'Категория',
        field: 'category_caption',
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

    // --------------------------
    const sCaption = 'Товар';
    const aColumn: TableI.ColumnI[] = [
      {
        sName: 'id',
        sCaption: 'Id',
        nType: TableI.ColumnTypeEnum.Integer,
        bPrimaryKey: true,
      },
      {
        sName: 'caption',
        sCaption: 'Название',
        nType: TableI.ColumnTypeEnum.String,
        bPrimaryKey: false,
      },
      {
        sName: 'description',
        sCaption: 'Описание',
        nType: TableI.ColumnTypeEnum.Text,
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
