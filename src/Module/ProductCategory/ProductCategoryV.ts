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

/**
 * Update
 * @param req MainRequest
 * @param data RequestI
 */
export function update(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  // ---------------------------------------

  rules.set(rules.rule('id').type(Components.ModelRulesT.int).require().moreOrEq(0).errorEx('id', 'id'));

  rules.set(
    rules.rule('caption').type(Components.ModelRulesT.text).minLen(2).maxLen(128).errorEx('caption', 'caption'),
  );

  rules.set(
    rules.rule('description').type(Components.ModelRulesT.text).maxLen(1024).errorEx('description', 'description'),
  );

  // ---------------------------------------
  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}

/**
 * Get by id
 * @param req MainRequest
 * @param data RequestI
 */
export function getById(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  // ---------------------------------------

  rules.set(rules.rule('id').type(Components.ModelRulesT.int).require().moreOrEq(0).errorEx('id', 'id'));

  // ---------------------------------------

  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}

/**
 * Insert
 * @param req MainRequest
 * @param data RequestI
 */
export function insert(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  // ---------------------------------------

  rules.set(
    rules.rule('caption').type(Components.ModelRulesT.text).minLen(2).maxLen(128).errorEx('caption', 'caption'),
  );

  rules.set(
    rules.rule('description').type(Components.ModelRulesT.text).maxLen(1024).errorEx('description', 'description'),
  );

  // ---------------------------------------

  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}
