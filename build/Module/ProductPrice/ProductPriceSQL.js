"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPriceSQL = void 0;
const BaseSQL_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseSQL"));
const ProductPriceE_1 = require("./ProductPriceE");
class ProductPriceSQL extends BaseSQL_1.default {
    /**
     * Список
     */
    async faList(search) {
        let ok = true;
        let resp;
        if (ok) {
            let sql = `SELECT * FROM ${ProductPriceE_1.ProductPriceE.NAME} p LIMIT :nOffset, :nLimit`;
            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'ProductPrice list', 'Не удалось получить информацию о ProductPrice');
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
            let sql = `SELECT count(*) cc FROM ${ProductPriceE_1.ProductPriceE.NAME} p `;
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
     * Получить ProductPriceI
     * @param id
     */
    async faGetById(id) {
        let ok = true;
        let resp = null;
        if (ok) {
            let sql = `SELECT p.* FROM ${ProductPriceE_1.ProductPriceE.NAME} p
            where p.id=:id`;
            try {
                resp = (await this.db.raw(sql, { id: id }))[0][0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductPriceI');
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
        let productPriceE = new ProductPriceE_1.ProductPriceE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productPriceE.getRulesInsert(), data)) {
                throw 'validation error';
            }
            resp = (await this.db(ProductPriceE_1.ProductPriceE.NAME).insert(this.modelValidatorSys.getResult()))[0];
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faProductPriceInsert', 'Не удалось вставить заказ');
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
        let productPriceE = new ProductPriceE_1.ProductPriceE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productPriceE.getRulesUpdate(), data)) {
                throw 'validation error';
            }
            await this.db(ProductPriceE_1.ProductPriceE.NAME)
                .where({
                id: id,
            })
                .update(this.modelValidatorSys.getResult());
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faProductPriceUpdate', 'Не удалось обновить');
        }
        return ok;
    }
}
exports.ProductPriceSQL = ProductPriceSQL;
//# sourceMappingURL=ProductPriceSQL.js.map