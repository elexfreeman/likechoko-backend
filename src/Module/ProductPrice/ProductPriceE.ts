// Компоненты
import { Components } from '@a-a-game-studio/aa-classes/lib';
import { ModelRulesT } from '@a-a-game-studio/aa-components/lib';

export class ProductPriceE {
  //Имя таблицы
  public static NAME = 'product_price';

  public getRulesInsert() {
    let rules = new Components.ModelRulesC();

    rules.set(rules.rule('price').type(ModelRulesT.decimal).require().error('price - неверный формат'));

    rules.set(rules.rule('id_product').type(ModelRulesT.int).error('id_product - неверный формат'));

    return rules.get();
  }

  public getRulesUpdate() {
    let rules = new Components.ModelRulesC();

    rules.set(rules.rule('price').type(ModelRulesT.decimal).require().error('price - неверный формат'));

    rules.set(rules.rule('id_product').type(ModelRulesT.int).error('id_product - неверный формат'));

    return rules.get();
  }
}
