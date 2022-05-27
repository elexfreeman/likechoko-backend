import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
// Системные классы

// Классы SQL Запросов
import { InventoryDocRowSQL } from './InventoryDocRowSQL';

// Роутинг
import { InventoryDocRowR } from 'lc-common/lib/Routes/InventoryDocRowR';
import R = InventoryDocRowR;

// Валидация
import * as V from './InventoryDocRowV';
import { InventoryDocRowI } from 'lc-common/lib/Interfaces/InventoryDocRowI';
import { PaginationOptionsS } from 'lc-common/lib/Service/PaginationOptionsS';
import { PaginationOptionsI, ColumnI } from 'lc-common/lib/Interfaces/ListI';

import * as TableI from 'lc-common/lib/Interfaces/TableI';

export class InventoryDocRowM extends System.BaseM {
  private inventoryDocRowSQL: InventoryDocRowSQL;

  constructor(req: any) {
    super(req);
    this.inventoryDocRowSQL = new InventoryDocRowSQL(req);
  }

  public async faInsert(data: R.insert.RequestI): Promise<R.insert.ResponseI> {
    data = <R.insert.RequestI>V.insert(this.req, data);
    let ok = this.errorSys.isOk();

    let id: number = null;
    if (ok) {
      id = await this.inventoryDocRowSQL.faInsert(data);
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

  public async faRemoveDocRow(data: R.removeDocRow.RequestI): Promise<R.removeDocRow.ResponseI> {
    data = <R.removeDocRow.RequestI>V.removeDocRow(this.req, data);
    let ok = this.errorSys.isOk();

    if (ok) {
      ok = await this.inventoryDocRowSQL.faRemoveDocRow(data.id);
    }

    let out: R.removeDocRow.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {};
    }

    return out;
  }

  public async faList(data: R.listDocRow.RequestI): Promise<R.listDocRow.ResponseI> {
    data = <R.listDocRow.RequestI>V.listDocRow(this.req, data);
    let ok = this.errorSys.isOk();

    let aList: InventoryDocRowI[] = [];
    if (ok) {
      aList = await this.inventoryDocRowSQL.faListDocRow(data.id);
    }

    let out: R.listDocRow.ResponseI = null;
    if (ok) {
      // Формирование ответа
      out = {
        list: aList,
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
