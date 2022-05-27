'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ClientE = void 0;
// Компоненты
const lib_1 = require('@a-a-game-studio/aa-classes/lib');
const lib_2 = require('@a-a-game-studio/aa-components/lib');
class ClientE {
  getRulesInsert() {
    let rules = new lib_1.Components.ModelRulesC();
    rules.set(rules.rule('name').type(lib_2.ModelRulesT.text).maxLen(255).require().error('name - неверный формат'));
    rules.set(rules.rule('surname').type(lib_2.ModelRulesT.text).maxLen(255).error('surname - неверный формат'));
    rules.set(rules.rule('patronymic').type(lib_2.ModelRulesT.text).maxLen(255).error('patronymic - неверный формат'));
    rules.set(
      rules.rule('description').type(lib_2.ModelRulesT.text).maxLen(1024).error('description - неверный формат'),
    );
    return rules.get();
  }
  getRulesUpdate() {
    let rules = new lib_1.Components.ModelRulesC();
    rules.set(rules.rule('name').type(lib_2.ModelRulesT.text).maxLen(255).minLen(1).error('name - неверный формат'));
    rules.set(rules.rule('surname').type(lib_2.ModelRulesT.text).maxLen(255).error('surname - неверный формат'));
    rules.set(rules.rule('patronymic').type(lib_2.ModelRulesT.text).maxLen(255).error('patronymic - неверный формат'));
    rules.set(rules.rule('name').type(lib_2.ModelRulesT.text).maxLen(255).require().error('name - неверный формат'));
    rules.set(
      rules.rule('description').type(lib_2.ModelRulesT.text).maxLen(1024).error('description - неверный формат'),
    );
    return rules.get();
  }
}
exports.ClientE = ClientE;
//Имя таблицы
ClientE.NAME = 'client';
//# sourceMappingURL=ClientE.js.map
