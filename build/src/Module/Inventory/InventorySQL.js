"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventorySQL = void 0;
const BaseSQL_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseSQL"));
const InventoryE_1 = require("./InventoryE");
const InventoryRowE_1 = require("./InventoryRowE");
class InventorySQL extends BaseSQL_1.default {
    async faList(search) {
        let ok = true;
        let resp;
        if (ok) {
            let sql = `SELECT * FROM ${InventoryE_1.InventoryE.NAME} p LIMIT :nOffset, :nLimit`;
            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'Inventory list', 'Не удалось получить информацию о Inventory');
            }
        }
        return resp;
    }
    async faListTotal(search) {
        let ok = true;
        let resp = 0;
        if (ok) {
            let sql = `SELECT count(*) cc FROM ${InventoryE_1.InventoryE.NAME} p `;
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
    async faGetById(id) {
        let ok = true;
        let resp = null;
        if (ok) {
            let sql = `SELECT p.* FROM ${InventoryE_1.InventoryE.NAME} p
            where p.id=:id`;
            try {
                resp = (await this.db.raw(sql, { id: id }))[0][0];
            }
            catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о InventoryI');
            }
        }
        return resp;
    }
    async faInsert(data) {
        let resp = 0;
        let inventoryE = new InventoryE_1.InventoryE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(inventoryE.getRulesInsert(), data)) {
                throw 'validation error';
            }
            resp = (await this.db(InventoryE_1.InventoryE.NAME).insert(this.modelValidatorSys.getResult()))[0];
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faInventoryInsert', 'Не удалось вставить заказ');
        }
        return resp;
    }
    async faInsertRow(data) {
        let resp = 0;
        let inventoryRowE = new InventoryRowE_1.InventoryRowE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(inventoryRowE.getRulesInsert(), data)) {
                throw 'validation error';
            }
            resp = (await this.db(InventoryE_1.InventoryE.NAME).insert(this.modelValidatorSys.getResult()))[0];
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faInsertRow', 'Не удалось вставить');
        }
        return resp;
    }
    async faUpdate(id, data) {
        let ok = this.errorSys.isOk();
        let inventoryE = new InventoryE_1.InventoryE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(inventoryE.getRulesUpdate(), data)) {
                throw 'validation error';
            }
            await this.db(InventoryE_1.InventoryE.NAME)
                .where({
                id: id,
            })
                .update(this.modelValidatorSys.getResult());
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faInventoryUpdate', 'Не удалось обновить');
        }
        return ok;
    }
}
exports.InventorySQL = InventorySQL;
//# sourceMappingURL=InventorySQL.js.map