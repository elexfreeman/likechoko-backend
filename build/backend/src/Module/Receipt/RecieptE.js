'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ReceiptE = void 0;
// Компоненты
const lib_1 = require('@a-a-game-studio/aa-classes/lib');
const lib_2 = require('@a-a-game-studio/aa-components/lib');
class ReceiptE {
  getRulesInsert() {
    let rules = new lib_1.Components.ModelRulesC();
    rules.set(rules.rule('caption').type(lib_2.ModelRulesT.text).require().error('caption - неверный формат'));
    rules.set(rules.rule('description').type(lib_2.ModelRulesT.text).require().error('description - неверный формат'));
    return rules.get();
  }
}
exports.ReceiptE = ReceiptE;
//Имя таблицы
ReceiptE.NAME = 'reciept';
//# sourceMappingURL=RecieptE.js.map
