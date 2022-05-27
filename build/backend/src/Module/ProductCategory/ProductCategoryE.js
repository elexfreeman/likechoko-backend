'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductCategoryE = void 0;
// Компоненты
const lib_1 = require('@a-a-game-studio/aa-classes/lib');
const lib_2 = require('@a-a-game-studio/aa-components/lib');
class ProductCategoryE {
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
exports.ProductCategoryE = ProductCategoryE;
//Имя таблицы
ProductCategoryE.NAME = 'product_category';
//# sourceMappingURL=ProductCategoryE.js.map
