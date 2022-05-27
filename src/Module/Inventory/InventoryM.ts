import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
// Системные классы

// Классы SQL Запросов
import { InventorySQL } from './InventorySQL';

// Роутинг
import { InventoryR } from 'lc-common/lib/Routes/InventoryR';
import R = InventoryR;

// Валидация
import * as V from './InventoryV';
import { SearchS } from 'lc-common/lib/Service/SearchS';
import { InventoryI } from 'lc-common/lib/Interfaces/InventoryI';
import { PaginationOptionsS } from 'lc-common/lib/Service/PaginationOptionsS';
import { PaginationOptionsI, ColumnI } from 'lc-common/lib/Interfaces/ListI';

import * as TableI from 'lc-common/lib/Interfaces/TableI';

/**
 * Категории товаров
 */
export class InventoryM extends System.BaseM {
  private inventorySQL: InventorySQL;

  constructor(req: any) {
    super(req);

    this.inventorySQL = new InventorySQL(req);
  }

  public async faGetById(data: R.getById.RequestI): Promise<R.getById.ResponseI> {
    data = <R.getById.RequestI>V.getById(this.req, data);
    let ok = this.errorSys.isOk();

    let item: InventoryI = null;
    if (ok) {
      item = await this.inventorySQL.faGetById(data.id);
    }

    let out: R.getById.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        row: item,
      };
    }

    return out;
  }

  public async faUpdate(data: R.update.RequestI): Promise<R.update.ResponseI> {
    data = <R.update.RequestI>V.update(this.req, data);
    let ok = this.errorSys.isOk();

    let id: number = data.id;
    if (ok) {
      await this.inventorySQL.faUpdate(id, data);
    }

    let out: R.update.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        id,
      };
    }

    return out;
  }

  public async faInsert(data: R.insert.RequestI): Promise<R.insert.ResponseI> {
    data = <R.insert.RequestI>V.insert(this.req, data);
    let ok = this.errorSys.isOk();

    let id: number = null;
    if (ok) {
      id = await this.inventorySQL.faInsert(data);
    }

    let out: R.insert.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        id,
      };
    }

    return out;
  }

  public async faList(data: R.list.RequestI): Promise<R.list.ResponseI> {
    data = <R.list.RequestI>V.list(this.req, data);
    let ok = this.errorSys.isOk();

    let aList: InventoryI[] = [];
    let nTotal = 0;
    if (ok) {
      aList = await this.inventorySQL.faList(new SearchS().fSetParam(data));
      nTotal = await this.inventorySQL.faListTotal(new SearchS().fSetParam(data));
    }

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

    const paginationOptions: PaginationOptionsI = PaginationOptionsS.InitRus();
    const aColumn: ColumnI[] = [
      {
        label: 'id',
        field: 'id',
      },
      {
        label: 'Дата',
        field: 'date',
      },
    ];

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

    const sCaption = 'Товар';
    const aColumn: TableI.ColumnI[] = [
      {
        sName: 'id',
        sCaption: 'Id',
        nType: TableI.ColumnTypeEnum.Integer,
        bPrimaryKey: true,
      },
      {
        sName: 'date',
        sCaption: 'Дата',
        nType: TableI.ColumnTypeEnum.Data,
        bPrimaryKey: false,
      },
    ];

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
