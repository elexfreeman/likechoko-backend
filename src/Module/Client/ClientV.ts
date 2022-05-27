import * as Components from '@a-a-game-studio/aa-components/lib';
import { MainRequest } from '@a-a-game-studio/aa-core/lib/Namespace/System';

// =======================================================

// =======================================================
/**
 * List
 *
 * @param req MainRequest
 * @param data RequestI
 */
export function list(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  // ---------------------------------------

  rules.set(rules.rule('nOffset').type(Components.ModelRulesT.int).moreOrEq(0).errorEx('nOffset', 'nOffset'));

  rules.set(rules.rule('nLimit').type(Components.ModelRulesT.int).moreOrEq(0).errorEx('nLimit', 'nLimit'));

  rules.set(
    rules.rule('sSearchString').type(Components.ModelRulesT.text).maxLen(100).errorEx('sSearchString', 'sSearchString'),
  );

  // ---------------------------------------

  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}

export function update(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  // ---------------------------------------

  rules.set(rules.rule('id').type(Components.ModelRulesT.int).require().moreOrEq(0).errorEx('id', 'id'));

  rules.set(rules.rule('name').type(Components.ModelRulesT.text).maxLen(255).minLen(1).error('name - неверный формат'));
  rules.set(rules.rule('surname').type(Components.ModelRulesT.text).maxLen(255).error('surname - неверный формат'));
  rules.set(
    rules.rule('patronymic').type(Components.ModelRulesT.text).maxLen(255).error('patronymic - неверный формат'),
  );
  rules.set(rules.rule('name').type(Components.ModelRulesT.text).maxLen(255).require().error('name - неверный формат'));

  rules.set(
    rules.rule('description').type(Components.ModelRulesT.text).maxLen(1024).error('description - неверный формат'),
  );

  // ---------------------------------------
  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}

export function getById(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  rules.set(rules.rule('id').type(Components.ModelRulesT.int).require().moreOrEq(0).errorEx('id', 'id'));

  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}

export function insert(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  rules.set(
    rules
      .rule('name')
      .type(Components.ModelRulesT.text)
      .require()
      .maxLen(255)
      .minLen(1)
      .error('name - неверный формат'),
  );
  rules.set(rules.rule('surname').type(Components.ModelRulesT.text).maxLen(255).error('surname - неверный формат'));
  rules.set(
    rules.rule('patronymic').type(Components.ModelRulesT.text).maxLen(255).error('patronymic - неверный формат'),
  );
  rules.set(rules.rule('name').type(Components.ModelRulesT.text).maxLen(255).require().error('name - неверный формат'));

  rules.set(
    rules.rule('description').type(Components.ModelRulesT.text).maxLen(1024).error('description - неверный формат'),
  );

  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}
