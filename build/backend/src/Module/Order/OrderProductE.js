'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderProductE = void 0;
// Компоненты
const lib_1 = require('@a-a-game-studio/aa-classes/lib');
const lib_2 = require('@a-a-game-studio/aa-components/lib');

/**
 * Продукты заказа
 */
class OrderProductE {
  getRulesInsert() {
    let rules = new lib_1.Components.ModelRulesC();
    rules.set(rules.rule('price').type(lib_2.ModelRulesT.int).require().error('price - неверный формат'));
    rules.set(rules.rule('product_id').type(lib_2.ModelRulesT.int).require().error('product_id - неверный формат'));
    rules.set(rules.rule('order_id').type(lib_2.ModelRulesT.int).require().error('order_id - неверный формат'));
    rules.set(rules.rule('order_id').type(lib_2.ModelRulesT.int).require().error('order_id - неверный формат'));
    rules.set(rules.rule('count').type(lib_2.ModelRulesT.int).require().error('count - неверный формат'));
    return rules.get();
  }
}
exports.OrderProductE = OrderProductE;
//Имя таблицы
OrderProductE.NAME = 'order_product';
//# sourceMappingURL=OrderProductE.js.map
