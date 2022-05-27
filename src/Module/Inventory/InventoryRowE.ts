// Компоненты
import { Components } from '@a-a-game-studio/aa-classes/lib';
import { ModelRulesT } from '@a-a-game-studio/aa-components/lib';

export class InventoryRowE {
  //Имя таблицы
  public static NAME = 'inventory_rows';

  public getRulesInsert() {
    let rules = new Components.ModelRulesC();

    rules.set(
      rules.rule('inventory_id').type(ModelRulesT.int).require().moreOrEq(0).error('inventory_id - неверный формат'),
    );

    rules.set(
      rules.rule('product_id').type(ModelRulesT.int).require().moreOrEq(0).error('product_id - неверный формат'),
    );

    rules.set(rules.rule('amount').type(ModelRulesT.int).require().more(0).error('amount - неверный формат'));
    rules.set(rules.rule('price').type(ModelRulesT.decimal).require().moreOrEq(0).error('price - неверный формат'));

    return rules.get();
  }
}
