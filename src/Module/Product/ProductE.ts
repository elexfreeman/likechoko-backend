// Компоненты
import { Components } from '@a-a-game-studio/aa-classes/lib';
import { ModelRulesT } from '@a-a-game-studio/aa-components/lib';

export class ProductE {
  //Имя таблицы
  public static NAME = 'product';

  public getRulesInsert() {
    let rules = new Components.ModelRulesC();

    rules.set(rules.rule('caption').type(ModelRulesT.text).require().error('caption - неверный формат'));

    rules.set(rules.rule('description').type(ModelRulesT.text).error('description - неверный формат'));

    rules.set(
      rules.rule('category_id').type(ModelRulesT.int).moreOrEq(0).require().error('category_id - неверный формат'),
    );

    return rules.get();
  }

  public getRulesUpdate() {
    let rules = new Components.ModelRulesC();

    rules.set(rules.rule('caption').type(ModelRulesT.text).require().error('caption - неверный формат'));

    rules.set(rules.rule('description').type(ModelRulesT.text).error('description - неверный формат'));

    rules.set(rules.rule('category_id').type(ModelRulesT.int).moreOrEq(0).error('category_id - неверный формат'));

    return rules.get();
  }
}
