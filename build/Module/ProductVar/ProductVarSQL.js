"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVarSQL = void 0;
const BaseSQL_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseSQL"));
const ProductVarE_1 = require("./ProductVarE");
/**
 * Продкты
 */
class ProductVarSQL extends BaseSQL_1.default {
    /**
     * Список
     */
    async faList(search) {
        let ok = true;
        let resp;
        if (ok) {
            let sql = `SELECT * FROM ${ProductVarE_1.ProductVarE.NAME} p LIMIT :nOffset, :nLimit`;
            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'ProductVar list', 'Не удалось получить информацию о ProductVar');
            }
        }
        return resp;
    }
    /**
     * Получить ProductVarI
     * @param id
     */
    async faGetById(id) {
        let ok = true;
        let resp = null;
        if (ok) {
            let sql = `SELECT p.* FROM ${ProductVarE_1.ProductVarE.NAME} p
            where p.id=:id`;
            try {
                resp = (await this.db.raw(sql, { id: id }))[0][0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductVarI');
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
        let productCategoryE = new ProductVarE_1.ProductVarE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productCategoryE.getRulesInsert(), data)) {
                throw 'validation error';
            }
            resp = (await this.db(ProductVarE_1.ProductVarE.NAME).insert(this.modelValidatorSys.getResult()))[0];
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faProductVarInsert', 'Не удалось вставить заказ');
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
        let productCategoryE = new ProductVarE_1.ProductVarE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productCategoryE.getRulesUpdate(), data)) {
                throw 'validation error';
            }
            await this.db(ProductVarE_1.ProductVarE.NAME)
                .where({
                id: id,
            })
                .update(this.modelValidatorSys.getResult());
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faProductVarUpdate', 'Не удалось обновить');
        }
        return ok;
    }
}
exports.ProductVarSQL = ProductVarSQL;
//# sourceMappingURL=ProductVarSQL.js.map