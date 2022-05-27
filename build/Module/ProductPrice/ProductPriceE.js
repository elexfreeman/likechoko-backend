"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPriceE = void 0;
// Компоненты
const lib_1 = require("@a-a-game-studio/aa-classes/lib");
const lib_2 = require("@a-a-game-studio/aa-components/lib");
class ProductPriceE {
    getRulesInsert() {
        let rules = new lib_1.Components.ModelRulesC();
        rules.set(rules.rule('price').type(lib_2.ModelRulesT.decimal).require().error('price - неверный формат'));
        rules.set(rules.rule('id_product').type(lib_2.ModelRulesT.int).error('id_product - неверный формат'));
        return rules.get();
    }
    getRulesUpdate() {
        let rules = new lib_1.Components.ModelRulesC();
        rules.set(rules.rule('price').type(lib_2.ModelRulesT.decimal).require().error('price - неверный формат'));
        rules.set(rules.rule('id_product').type(lib_2.ModelRulesT.int).error('id_product - неверный формат'));
        return rules.get();
    }
}
exports.ProductPriceE = ProductPriceE;
//Имя таблицы
ProductPriceE.NAME = 'product_price';
//# sourceMappingURL=ProductPriceE.js.map