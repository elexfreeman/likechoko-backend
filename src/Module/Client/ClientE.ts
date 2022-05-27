// Компоненты
import { Components } from '@a-a-game-studio/aa-classes/lib';
import { ModelRulesT } from '@a-a-game-studio/aa-components/lib';

export class ClientE {
  //Имя таблицы
  public static NAME = 'client';

  public getRulesInsert() {
    let rules = new Components.ModelRulesC();

    rules.set(rules.rule('name').type(ModelRulesT.text).maxLen(255).require().error('name - неверный формат'));
    rules.set(rules.rule('surname').type(ModelRulesT.text).maxLen(255).error('surname - неверный формат'));
    rules.set(rules.rule('patronymic').type(ModelRulesT.text).maxLen(255).error('patronymic - неверный формат'));
    rules.set(rules.rule('description').type(ModelRulesT.text).maxLen(1024).error('description - неверный формат'));

    return rules.get();
  }

  public getRulesUpdate() {
    let rules = new Components.ModelRulesC();

    rules.set(rules.rule('name').type(ModelRulesT.text).maxLen(255).minLen(1).error('name - неверный формат'));
    rules.set(rules.rule('surname').type(ModelRulesT.text).maxLen(255).error('surname - неверный формат'));
    rules.set(rules.rule('patronymic').type(ModelRulesT.text).maxLen(255).error('patronymic - неверный формат'));
    rules.set(rules.rule('name').type(ModelRulesT.text).maxLen(255).require().error('name - неверный формат'));

    rules.set(rules.rule('description').type(ModelRulesT.text).maxLen(1024).error('description - неверный формат'));

    return rules.get();
  }
}
