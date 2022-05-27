// Компоненты
import { Components } from '@a-a-game-studio/aa-classes/lib';
import { ModelRulesT } from '@a-a-game-studio/aa-components/lib';

export class InventoryE {
  //Имя таблицы
  public static NAME = 'inventory';

  public getRulesInsert() {
    let rules = new Components.ModelRulesC();

    rules.set(rules.rule('date').type(ModelRulesT.text).require().error('date - неверный формат'));

    rules.set(rules.rule('checkout').type(ModelRulesT.int).moreOrEq(0).less(2).error('checkout - неверный формат'));
    rules.set(rules.rule('deleted').type(ModelRulesT.int).moreOrEq(0).less(2).error('deleted - неверный формат'));

    rules.set(rules.rule('user_id').type(ModelRulesT.int).require().more(0).error('user_id - неверный формат'));

    rules.set(
      rules.rule('storehouse_id').type(ModelRulesT.int).require().more(0).error('storehouse_id - неверный формат'),
    );

    return rules.get();
  }

  public getRulesUpdate() {
    let rules = new Components.ModelRulesC();

    rules.set(rules.rule('checkout').type(ModelRulesT.int).moreOrEq(0).less(2).error('checkout - неверный формат'));
    rules.set(rules.rule('deleted').type(ModelRulesT.int).moreOrEq(0).less(2).error('deleted - неверный формат'));

    return rules.get();
  }
}
