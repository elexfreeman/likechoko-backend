"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVarE = void 0;
// Компоненты
const lib_1 = require("@a-a-game-studio/aa-classes/lib");
const lib_2 = require("@a-a-game-studio/aa-components/lib");
class ProductVarE {
    getRulesInsert() {
        let rules = new lib_1.Components.ModelRulesC();
        rules.set(rules
            .rule('product_category_id')
            .type(lib_2.ModelRulesT.int)
            .moreOrEq(0)
            .require()
            .error('product_category_id - неверный формат'));
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
exports.ProductVarE = ProductVarE;
//Имя таблицы
ProductVarE.NAME = 'product_var';
//# sourceMappingURL=ProductVarE.js.map