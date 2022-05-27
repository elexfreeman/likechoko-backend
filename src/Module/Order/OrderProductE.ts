// Компоненты
import { Components } from '@a-a-game-studio/aa-classes/lib';
import { ModelRulesT } from '@a-a-game-studio/aa-components/lib';

export interface OrderProductI {
  id?: number;
  price: number;
  product_id: number;
  order_id: string;
  count: number;
}

/**
 * Продукты заказа
 */
export class OrderProductE {
  //Имя таблицы
  public static NAME = 'order_product';

  public getRulesInsert() {
    let rules = new Components.ModelRulesC();

    rules.set(rules.rule('price').type(ModelRulesT.int).require().error('price - неверный формат'));

    rules.set(rules.rule('product_id').type(ModelRulesT.int).require().error('product_id - неверный формат'));

    rules.set(rules.rule('order_id').type(ModelRulesT.int).require().error('order_id - неверный формат'));

    rules.set(rules.rule('order_id').type(ModelRulesT.int).require().error('order_id - неверный формат'));

    rules.set(rules.rule('count').type(ModelRulesT.int).require().error('count - неверный формат'));

    return rules.get();
  }
}
