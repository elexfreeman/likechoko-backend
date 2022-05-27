"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTagIdxE = void 0;
// Компоненты
const lib_1 = require("@a-a-game-studio/aa-classes/lib");
const lib_2 = require("@a-a-game-studio/aa-components/lib");
class ProductTagIdxE {
    getRulesInsert() {
        let rules = new lib_1.Components.ModelRulesC();
        rules.set(rules.rule('product_id').type(lib_2.ModelRulesT.int).moreOrEq(0).require().error('product_id - неверный формат'));
        rules.set(rules.rule('tag_id').type(lib_2.ModelRulesT.int).moreOrEq(0).require().error('tag_id - неверный формат'));
        return rules.get();
    }
    getRulesDel() {
        let rules = new lib_1.Components.ModelRulesC();
        rules.set(rules.rule('product_id').type(lib_2.ModelRulesT.int).moreOrEq(0).require().error('product_id - неверный формат'));
        rules.set(rules.rule('tag_id').type(lib_2.ModelRulesT.int).moreOrEq(0).require().error('tag_id - неверный формат'));
        return rules.get();
    }
}
exports.ProductTagIdxE = ProductTagIdxE;
//Имя таблицы
ProductTagIdxE.NAME = 'product_tag_idx';
//# sourceMappingURL=ProductTagIdxE.js.map