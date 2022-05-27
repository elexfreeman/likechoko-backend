"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTagSQL = void 0;
const BaseSQL_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseSQL"));
const ProductTagE_1 = require("./ProductTagE");
/**
 * Продкты
 */
class ProductTagSQL extends BaseSQL_1.default {
    /**
     * Список
     */
    async faList(search) {
        let ok = true;
        let resp;
        if (ok) {
            let sql = `SELECT * FROM ${ProductTagE_1.ProductTagE.NAME} p LIMIT :nOffset, :nLimit`;
            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'ProductTag list', 'Не удалось получить информацию о ProductTag');
            }
        }
        return resp;
    }
    /**
     * Получить ProductTagI
     * @param id
     */
    async faGetById(id) {
        let ok = true;
        let resp = null;
        if (ok) {
            let sql = `SELECT p.* FROM ${ProductTagE_1.ProductTagE.NAME} p
            where p.id=:id`;
            try {
                resp = (await this.db.raw(sql, { id: id }))[0][0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductTagI');
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
        let productTagE = new ProductTagE_1.ProductTagE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productTagE.getRulesInsert(), data)) {
                throw 'validation error';
            }
            resp = (await this.db(ProductTagE_1.ProductTagE.NAME).insert(this.modelValidatorSys.getResult()))[0];
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faProductTagInsert', 'Не удалось вставить заказ');
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
        let productTagE = new ProductTagE_1.ProductTagE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productTagE.getRulesUpdate(), data)) {
                throw 'validation error';
            }
            await this.db(ProductTagE_1.ProductTagE.NAME)
                .where({
                id: id,
            })
                .update(this.modelValidatorSys.getResult());
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faProductTagUpdate', 'Не удалось обновить');
        }
        return ok;
    }
}
exports.ProductTagSQL = ProductTagSQL;
//# sourceMappingURL=ProductTagSQL.js.map