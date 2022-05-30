"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategorySQL = void 0;
const BaseSQL_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseSQL"));
const ProductCategoryE_1 = require("./ProductCategoryE");
/**
 * Продкты
 */
class ProductCategorySQL extends BaseSQL_1.default {
    /**
     * Список
     */
    async faList(search) {
        let ok = true;
        let resp;
        if (ok) {
            let sql = `SELECT * FROM ${ProductCategoryE_1.ProductCategoryE.NAME} p LIMIT :nOffset, :nLimit`;
            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'ProductCategory list', 'Не удалось получить информацию о ProductCategory');
            }
        }
        return resp;
    }
    /**
     * Список
     */
    async faListTotal(search) {
        let ok = true;
        let resp = 0;
        if (ok) {
            let sql = `SELECT count(*) cc FROM ${ProductCategoryE_1.ProductCategoryE.NAME} p `;
            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0][0]['cc'];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faListTotal', 'Не удалось получить информацию о faListTotal');
            }
        }
        return resp;
    }
    /**
     * Получить ProductCategoryI
     * @param id
     */
    async faGetById(id) {
        let ok = true;
        let resp = null;
        if (ok) {
            let sql = `SELECT p.* FROM ${ProductCategoryE_1.ProductCategoryE.NAME} p
            where p.id=:id`;
            try {
                resp = (await this.db.raw(sql, { id: id }))[0][0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductCategoryI');
            }
        }
        return resp;
    }
    /**
     * Добавить
     * @param data
     */
    async faInsert(data) {
        let resp = 0;
        let productCategoryE = new ProductCategoryE_1.ProductCategoryE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productCategoryE.getRulesInsert(), data)) {
                throw 'validation error';
            }
            resp = (await this.db(ProductCategoryE_1.ProductCategoryE.NAME).insert(this.modelValidatorSys.getResult()))[0];
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faProductCategoryInsert', 'Не удалось вставить заказ');
        }
        return resp;
    }
    /**
     * Обновить продукт
     * @param id
     * @param data
     */
    async faUpdate(id, data) {
        let ok = this.errorSys.isOk();
        let productCategoryE = new ProductCategoryE_1.ProductCategoryE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productCategoryE.getRulesUpdate(), data)) {
                throw 'validation error';
            }
            await this.db(ProductCategoryE_1.ProductCategoryE.NAME)
                .where({
                id: id,
            })
                .update(this.modelValidatorSys.getResult());
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faProductCategoryUpdate', 'Не удалось обновить');
        }
        return ok;
    }
}
exports.ProductCategorySQL = ProductCategorySQL;
//# sourceMappingURL=ProductCategorySQL.js.map