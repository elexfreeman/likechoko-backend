"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRowE = void 0;
// Компоненты
const lib_1 = require("@a-a-game-studio/aa-classes/lib");
const lib_2 = require("@a-a-game-studio/aa-components/lib");
class InventoryRowE {
    getRulesInsert() {
        let rules = new lib_1.Components.ModelRulesC();
        rules.set(rules.rule('inventory_id').type(lib_2.ModelRulesT.int).require().moreOrEq(0).error('inventory_id - неверный формат'));
        rules.set(rules.rule('product_id').type(lib_2.ModelRulesT.int).require().moreOrEq(0).error('product_id - неверный формат'));
        rules.set(rules.rule('amount').type(lib_2.ModelRulesT.int).require().more(0).error('amount - неверный формат'));
        rules.set(rules.rule('price').type(lib_2.ModelRulesT.decimal).require().moreOrEq(0).error('price - неверный формат'));
        return rules.get();
    }
}
exports.InventoryRowE = InventoryRowE;
//Имя таблицы
InventoryRowE.NAME = 'inventory_rows';
//# sourceMappingURL=InventoryRowE.js.map