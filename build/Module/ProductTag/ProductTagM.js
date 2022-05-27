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
exports.ProductTagM = void 0;
const System = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/System"));
// Системные классы
// Классы SQL Запросов
const ProductTagSQL_1 = require("./ProductTagSQL");
// Валидация
const V = __importStar(require("./ProductTagV"));
const SearchS_1 = require("lc-common/lib/Service/SearchS");
/**
 * Товыры
 */
class ProductTagM extends System.BaseM {
    constructor(req) {
        super(req);
        this.productTagSQL = new ProductTagSQL_1.ProductTagSQL(req);
    }
    async faList(data) {
        data = V.list(this.req, data);
        let ok = this.errorSys.isOk();
        // --------------------------
        let vProductTag = [];
        if (ok) {
            vProductTag = await this.productTagSQL.faList(new SearchS_1.SearchS().fSetParam(data));
        }
        // --------------------------
        let out = null;
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
    async faGetById(data) {
        data = V.getById(this.req, data);
        let ok = this.errorSys.isOk();
        // --------------------------
        let item = null;
        if (ok) {
            item = await this.productTagSQL.faGetById(data.id);
        }
        // --------------------------
        let out = null;
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
    async faUpdate(data) {
        data = V.update(this.req, data);
        let ok = this.errorSys.isOk();
        // --------------------------
        let id = data.id;
        if (ok) {
            await this.productTagSQL.faUpdate(id, data);
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
            id = await this.productTagSQL.faInsert(data);
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
}
exports.ProductTagM = ProductTagM;
//# sourceMappingURL=ProductTagM.js.map