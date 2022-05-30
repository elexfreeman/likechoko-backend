"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryDocRowM = void 0;
const System = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/System"));
// Системные классы
// Классы SQL Запросов
const InventoryDocRowSQL_1 = require("./InventoryDocRowSQL");
// Валидация
const V = __importStar(require("./InventoryDocRowV"));
const PaginationOptionsS_1 = require("lc-common/lib/Service/PaginationOptionsS");
const TableI = __importStar(require("lc-common/lib/Interfaces/TableI"));
class InventoryDocRowM extends System.BaseM {
    constructor(req) {
        super(req);
        this.inventoryDocRowSQL = new InventoryDocRowSQL_1.InventoryDocRowSQL(req);
    }
    async faInsert(data) {
        data = V.insert(this.req, data);
        let ok = this.errorSys.isOk();
        let id = null;
        if (ok) {
            id = await this.inventoryDocRowSQL.faInsert(data);
        }
        let out = null;
        if (ok) {
            // Формирование ответа
            out = {
                id,
            };
        }
        return out;
    }
    async faRemoveDocRow(data) {
        data = V.removeDocRow(this.req, data);
        let ok = this.errorSys.isOk();
        if (ok) {
            ok = await this.inventoryDocRowSQL.faRemoveDocRow(data.id);
        }
        let out = null;
        if (ok) {
            // Формирование ответа
            out = {};
        }
        return out;
    }
    async faList(data) {
        data = V.listDocRow(this.req, data);
        let ok = this.errorSys.isOk();
        let aList = [];
        if (ok) {
            aList = await this.inventoryDocRowSQL.faListDocRow(data.id);
        }
        let out = null;
        if (ok) {
            // Формирование ответа
            out = {
                list: aList,
            };
        }
        return out;
    }
    // eslint-disable-next-line
    async faListInfo(data) {
        let ok = this.errorSys.isOk();
        const paginationOptions = PaginationOptionsS_1.PaginationOptionsS.InitRus();
        const aColumn = [
            {
                label: 'id',
                field: 'id',
            },
            {
                label: 'Дата',
                field: 'date',
            },
        ];
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
    // eslint-disable-next-line
    async faInfo(data) {
        let ok = this.errorSys.isOk();
        const sCaption = 'Товар';
        const aColumn = [
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
exports.InventoryDocRowM = InventoryDocRowM;
//# sourceMappingURL=InventoryDocRowM.js.map