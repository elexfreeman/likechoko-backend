'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.InventoryE = void 0;
// Компоненты
const lib_1 = require('@a-a-game-studio/aa-classes/lib');
const lib_2 = require('@a-a-game-studio/aa-components/lib');
class InventoryE {
  getRulesInsert() {
    let rules = new lib_1.Components.ModelRulesC();
    rules.set(rules.rule('date').type(lib_2.ModelRulesT.text).require().error('date - неверный формат'));
    rules.set(
      rules.rule('checkout').type(lib_2.ModelRulesT.int).moreOrEq(0).less(2).error('checkout - неверный формат'),
    );
    rules.set(rules.rule('deleted').type(lib_2.ModelRulesT.int).moreOrEq(0).less(2).error('deleted - неверный формат'));
    rules.set(rules.rule('user_id').type(lib_2.ModelRulesT.int).require().more(0).error('user_id - неверный формат'));
    rules.set(
      rules
        .rule('storehouse_id')
        .type(lib_2.ModelRulesT.int)
        .require()
        .more(0)
        .error('storehouse_id - неверный формат'),
    );
    return rules.get();
  }
  getRulesUpdate() {
    let rules = new lib_1.Components.ModelRulesC();
    rules.set(
      rules.rule('checkout').type(lib_2.ModelRulesT.int).moreOrEq(0).less(2).error('checkout - неверный формат'),
    );
    rules.set(rules.rule('deleted').type(lib_2.ModelRulesT.int).moreOrEq(0).less(2).error('deleted - неверный формат'));
    return rules.get();
  }
}
exports.InventoryE = InventoryE;
//Имя таблицы
InventoryE.NAME = 'inventory';
//# sourceMappingURL=InventoryE.js.map
