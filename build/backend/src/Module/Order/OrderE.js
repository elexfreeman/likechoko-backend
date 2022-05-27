'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderE = void 0;
// Компоненты
const lib_1 = require('@a-a-game-studio/aa-classes/lib');
const lib_2 = require('@a-a-game-studio/aa-components/lib');
class OrderE {
  getRulesInsert() {
    let rules = new lib_1.Components.ModelRulesC();
    rules.set(rules.rule('caption').type(lib_2.ModelRulesT.text).require().error('caption - неверный формат'));
    rules.set(rules.rule('city').type(lib_2.ModelRulesT.text).error('city - неверный формат'));
    rules.set(rules.rule('delivery_address').type(lib_2.ModelRulesT.text).error('delivery_address - неверный формат'));
    rules.set(rules.rule('comment').type(lib_2.ModelRulesT.text).error('comment - неверный формат'));
    rules.set(rules.rule('delivery_date').type(lib_2.ModelRulesT.text).error('delivery_date - неверный формат'));
    rules.set(
      rules.rule('delivery_time_comment').type(lib_2.ModelRulesT.text).error('delivery_time_comment - неверный формат'),
    );
    return rules.get();
  }
}
exports.OrderE = OrderE;
//Имя таблицы
OrderE.NAME = 'order';
//# sourceMappingURL=OrderE.js.map
