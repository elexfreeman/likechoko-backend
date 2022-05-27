import * as Components from '@a-a-game-studio/aa-components/lib';
import { MainRequest } from '@a-a-game-studio/aa-core/lib/Namespace/System';

// =======================================================

/**
 * Валидация
 *
 * @param req MainRequest
 * @param data RequestI
 */
export function makeOrder(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  // =======================================

  // Проверка с какой записи получать данные
  rules.set(rules.rule('city').type(Components.ModelRulesT.text).require().minLen(3).errorEx('city', 'city'));
  rules.set(
    rules
      .rule('delivery_address')
      .type(Components.ModelRulesT.text)
      .require()
      .minLen(3)
      .errorEx('delivery_address', 'delivery_address'),
  );
  rules.set(rules.rule('comment').type(Components.ModelRulesT.text).require().errorEx('comment', 'comment'));
  rules.set(rules.rule('delivery_date').type(Components.ModelRulesT.text).errorEx('delivery_date', 'delivery_date'));
  rules.set(
    rules
      .rule('delivery_time_comment')
      .type(Components.ModelRulesT.text)
      .require()
      .errorEx('delivery_time_comment', 'delivery_time_comment'),
  );
  rules.set(rules.rule('aProduct').type(Components.ModelRulesT.array).require().errorEx('aProduct', 'aProduct'));

  // =======================================

  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  if (validator.fValid(rules.get(), data)) {
    for (let i = 0; i < data['aProduct'].length; i++) {
      data['aProduct'][i] = validAProduct(req, data['aProduct']);
    }
  }

  return validator.getResult();
}

/**
 * Валидация
 *
 * @param req MainRequest
 * @param data RequestI
 */
export function validAProduct(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  // =======================================

  // Проверка с какой записи получать данные
  rules.set(
    rules.rule('product_id').type(Components.ModelRulesT.int).require().more(0).errorEx('product_id', 'product_id'),
  );

  rules.set(rules.rule('count').type(Components.ModelRulesT.int).require().more(0).errorEx('count', 'count'));

  // =======================================

  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}
