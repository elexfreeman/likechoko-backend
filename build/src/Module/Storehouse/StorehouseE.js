"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorehouseE = void 0;
// Компоненты
const lib_1 = require("@a-a-game-studio/aa-classes/lib");
const lib_2 = require("@a-a-game-studio/aa-components/lib");
class StorehouseE {
    getRulesInsert() {
        let rules = new lib_1.Components.ModelRulesC();
        rules.set(rules.rule('caption').type(lib_2.ModelRulesT.text).require().error('caption - неверный формат'));
        rules.set(rules.rule('description').type(lib_2.ModelRulesT.text).error('description - неверный формат'));
        return rules.get();
    }
    getRulesUpdate() {
        let rules = new lib_1.Components.ModelRulesC();
        rules.set(rules.rule('caption').type(lib_2.ModelRulesT.text).require().error('caption - неверный формат'));
        rules.set(rules.rule('description').type(lib_2.ModelRulesT.text).error('description - неверный формат'));
        return rules.get();
    }
}
exports.StorehouseE = StorehouseE;
//Имя таблицы
StorehouseE.NAME = 'storehouse';
//# sourceMappingURL=StorehouseE.js.map