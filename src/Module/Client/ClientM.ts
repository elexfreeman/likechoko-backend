import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
// Системные классы

// Классы SQL Запросов
import { ClientSQL } from './ClientSQL';

// Роутинг
import { ClientR } from 'lc-common/lib/Routes/ClientR';
import R = ClientR;

// Валидация
import * as V from './ClientV';
import { SearchS } from 'lc-common/lib/Service/SearchS';
import { ClientI } from 'lc-common/lib/Interfaces/ClientI';
import { PaginationOptionsS } from 'lc-common/lib/Service/PaginationOptionsS';
import { PaginationOptionsI, ColumnI } from 'lc-common/lib/Interfaces/ListI';

import * as TableI from 'lc-common/lib/Interfaces/TableI';

/**
 * Категории товаров
 */
export class ClientM extends System.BaseM {
  private clientSQL: ClientSQL;

  constructor(req: any) {
    super(req);

    this.clientSQL = new ClientSQL(req);
  }

  /**
   * Получить по id
   * @param data
   */
  public async faGetById(data: R.getById.RequestI): Promise<R.getById.ResponseI> {
    data = <R.getById.RequestI>V.getById(this.req, data);
    let ok = this.errorSys.isOk();

    // --------------------------

    let item: ClientI = null;
    if (ok) {
      item = await this.clientSQL.faGetById(data.id);
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
      await this.clientSQL.faUpdate(id, data);
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
      id = await this.clientSQL.faInsert(data);
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
   * Client list
   * @param data
   */
  public async faList(data: R.list.RequestI): Promise<R.list.ResponseI> {
    data = <R.list.RequestI>V.list(this.req, data);
    let ok = this.errorSys.isOk();

    // --------------------------

    let aList: ClientI[] = [];
    let nTotal = 0;
    if (ok) {
      aList = await this.clientSQL.faList(new SearchS().fSetParam(data));
      nTotal = await this.clientSQL.faListTotal(new SearchS().fSetParam(data));
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
        label: 'Фамилия',
        field: 'surname',
      },
      {
        label: 'Имя',
        field: 'name',
      },
      {
        label: 'Отчество',
        field: 'patronymic',
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
    const sCaption = 'Клиент';
    const aColumn: TableI.ColumnI[] = [
      {
        sName: 'id',
        sCaption: 'Id',
        nType: TableI.ColumnTypeEnum.Integer,
        bPrimaryKey: true,
      },
      {
        sName: 'surname',
        sCaption: 'Фамилия',
        nType: TableI.ColumnTypeEnum.String,
        bPrimaryKey: false,
      },
      {
        sName: 'name',
        sCaption: 'Имя',
        nType: TableI.ColumnTypeEnum.String,
        bPrimaryKey: false,
      },
      {
        sName: 'patronymic',
        sCaption: 'Отчество',
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
