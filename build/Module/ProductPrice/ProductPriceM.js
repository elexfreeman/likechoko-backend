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
exports.ProductPriceM = void 0;
const System = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/System"));
// Системные классы
// Классы SQL Запросов
const ProductPriceSQL_1 = require("./ProductPriceSQL");
// Валидация
const V = __importStar(require("./ProductPriceV"));
const SearchS_1 = require("lc-common/lib/Service/SearchS");
const PaginationOptionsS_1 = require("lc-common/lib/Service/PaginationOptionsS");
const TableI = __importStar(require("lc-common/lib/Interfaces/TableI"));
/**
 * Категории товаров
 */
class ProductPriceM extends System.BaseM {
    constructor(req) {
        super(req);
        this.productPriceSQL = new ProductPriceSQL_1.ProductPriceSQL(req);
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
            item = await this.productPriceSQL.faGetById(data.id);
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
            await this.productPriceSQL.faUpdate(id, data);
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
            id = await this.productPriceSQL.faInsert(data);
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
     * ProductPrice list
     * @param data
     */
    async faList(data) {
        data = V.list(this.req, data);
        let ok = this.errorSys.isOk();
        // --------------------------
        let aList = [];
        let nTotal = 0;
        if (ok) {
            aList = await this.productPriceSQL.faList(new SearchS_1.SearchS().fSetParam(data));
            nTotal = await this.productPriceSQL.faListTotal(new SearchS_1.SearchS().fSetParam(data));
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
    // eslint-disable-next-line
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
    // eslint-disable-next-line
    async faInfo(data) {
        let ok = this.errorSys.isOk();
        const sCaption = 'Цены товара';
        const aColumn = [
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
exports.ProductPriceM = ProductPriceM;
//# sourceMappingURL=ProductPriceM.js.map