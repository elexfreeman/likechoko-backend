// Компоненты
import { Components } from '@a-a-game-studio/aa-classes/lib';
import { ModelRulesT } from '@a-a-game-studio/aa-components/lib';

export class OrderE {
  //Имя таблицы
  public static NAME = 'order';

  public getRulesInsert() {
    let rules = new Components.ModelRulesC();

    rules.set(rules.rule('caption').type(ModelRulesT.text).require().error('caption - неверный формат'));

    rules.set(rules.rule('city').type(ModelRulesT.text).error('city - неверный формат'));

    rules.set(rules.rule('delivery_address').type(ModelRulesT.text).error('delivery_address - неверный формат'));

    rules.set(rules.rule('comment').type(ModelRulesT.text).error('comment - неверный формат'));

    rules.set(rules.rule('delivery_date').type(ModelRulesT.text).error('delivery_date - неверный формат'));

    rules.set(
      rules.rule('delivery_time_comment').type(ModelRulesT.text).error('delivery_time_comment - неверный формат'),
    );

    return rules.get();
  }
}
