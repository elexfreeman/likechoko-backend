// Компоненты
import { Components } from '@a-a-game-studio/aa-classes/lib';
import { ModelRulesT } from '@a-a-game-studio/aa-components/lib';

export class ProductTagIdxE {
  //Имя таблицы
  public static NAME = 'product_tag_idx';

  public getRulesInsert() {
    let rules = new Components.ModelRulesC();

    rules.set(
      rules.rule('product_id').type(ModelRulesT.int).moreOrEq(0).require().error('product_id - неверный формат'),
    );

    rules.set(rules.rule('tag_id').type(ModelRulesT.int).moreOrEq(0).require().error('tag_id - неверный формат'));

    return rules.get();
  }

  public getRulesDel() {
    let rules = new Components.ModelRulesC();

    rules.set(
      rules.rule('product_id').type(ModelRulesT.int).moreOrEq(0).require().error('product_id - неверный формат'),
    );

    rules.set(rules.rule('tag_id').type(ModelRulesT.int).moreOrEq(0).require().error('tag_id - неверный формат'));

    return rules.get();
  }
}
