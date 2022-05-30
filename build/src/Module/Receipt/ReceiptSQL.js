"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptSQL = void 0;
const BaseSQL_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseSQL"));
const RecieptE_1 = require("./RecieptE");
/**
 * Товары
 */
class ReceiptSQL extends BaseSQL_1.default {
    /**
     * Список товаров
     */
    async faList() {
        let ok = true;
        let resp;
        if (ok) {
            let sql = `SELECT * FROM ${RecieptE_1.ReceiptE.NAME} p`;
            try {
                resp = (await this.db.raw(sql, {}))[0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'product list', 'Не удалось получить информацию о товарах');
            }
        }
        return resp;
    }
    /**
     * Получить товар по Url
     * @param sUrl
     */
    async faGetByUrl(sUrl) {
        let ok = true;
        let resp = null;
        if (ok) {
            let sql = `SELECT p.* FROM ${RecieptE_1.ReceiptE.NAME} p
            where p.url=:sUrl`;
            try {
                resp = (await this.db.raw(sql, { sUrl: sUrl }))[0][0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetByUrl', 'Не удалось получить информацию о товаре');
            }
        }
        return resp;
    }
}
exports.ReceiptSQL = ReceiptSQL;
/**
 * обработка BgImg
 * @param product
 */
/* export const fProcessBgIg = (product: TReceipt.RecieptI) => {
    if (product.img) {
        const tmp = product.img.split('.');
        product.bgImg = tmp[0] + '_b.' + tmp[1];
    } else {
        product.bgImg = '';;
    }

    return product
}
 */
//# sourceMappingURL=ReceiptSQL.js.map