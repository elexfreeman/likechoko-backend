'use strict';
let __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) {
          k2 = k;
        }
        let desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) {
          k2 = k;
        }
        o[k2] = m[k];
      });
let __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
let __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) {
      return mod;
    }
    let result = {};
    if (mod != null) {
      for (let k in mod) {
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) {
          __createBinding(result, mod, k);
        }
      }
    }
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.StorehouseM = void 0;
const System = __importStar(require('@a-a-game-studio/aa-core/lib/Namespace/System'));
// Системные классы
// Классы SQL Запросов
const StorehouseSQL_1 = require('./StorehouseSQL');
// Валидация
const V = __importStar(require('./StorehouseV'));
const SearchS_1 = require('lc-common/lib/Service/SearchS');
const PaginationOptionsS_1 = require('lc-common/lib/Service/PaginationOptionsS');
const TableI = __importStar(require('lc-common/lib/Interfaces/TableI'));

/**
 * Категории товаров
 */
class StorehouseM extends System.BaseM {
  constructor(req) {
    super(req);
    this.storehouseSQL = new StorehouseSQL_1.StorehouseSQL(req);
  }

  /**
   * Получить по id
   * @param data
   */
  async faGetById(data) {
    data = V.getById(this.req, data);
    let ok = this.errorSys.isOk();
    // --------------------------
    let item = null;
    if (ok) {
      item = await this.storehouseSQL.faGetById(data.id);
    }
    // --------------------------
    let out = null;
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
  async faUpdate(data) {
    data = V.update(this.req, data);
    let ok = this.errorSys.isOk();
    // --------------------------
    let id = data.id;
    if (ok) {
      await this.storehouseSQL.faUpdate(id, data);
    }
    // --------------------------
    let out = null;
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
  async faInsert(data) {
    data = V.insert(this.req, data);
    let ok = this.errorSys.isOk();
    // --------------------------
    let id = null;
    if (ok) {
      id = await this.storehouseSQL.faInsert(data);
    }
    // --------------------------
    let out = null;
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
   * Storehouse list
   * @param data
   */
  async faList(data) {
    data = V.list(this.req, data);
    let ok = this.errorSys.isOk();
    // --------------------------
    let aList = [];
    let nTotal = 0;
    if (ok) {
      aList = await this.storehouseSQL.faList(new SearchS_1.SearchS().fSetParam(data));
      nTotal = await this.storehouseSQL.faListTotal(new SearchS_1.SearchS().fSetParam(data));
    }
    // --------------------------
    let out = null;
    if (ok) {
      // Формирование ответа
      out = {
        list: aList,
        total: nTotal,
      };
    }
    return out;
  }
  async faListInfo(data) {
    let ok = this.errorSys.isOk();
    // --------------------------
    const paginationOptions = PaginationOptionsS_1.PaginationOptionsS.InitRus();
    const aColumn = [
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
    let out = null;
    if (ok) {
      // Формирование ответа
      out = {
        paginationOptions: paginationOptions,
        aColumn: aColumn,
      };
    }
    return out;
  }
  async faInfo(data) {
    let ok = this.errorSys.isOk();
    // --------------------------
    const sCaption = 'Товар';
    const aColumn = [
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
    let out = null;
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
exports.StorehouseM = StorehouseM;
//# sourceMappingURL=StorehouseM.js.map
