import * as Components from '@a-a-game-studio/aa-components/lib';
import { MainRequest } from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { register_secret } from '../../Config/MainConfig';

export function init(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  // ---------------------------------------

  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}

// =======================================================
/**
 * Залогиниться
 *
 * @param req MainRequest
 * @param data RequestI
 */
export function login(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  // ---------------------------------------

  // Проверка с какой записи получать данные
  rules.set(
    rules.rule('login').type(Components.ModelRulesT.text).require().minLen(3).maxLen(100).errorEx('login', 'login'),
  );

  // Сколько записей получать
  rules.set(
    rules.rule('pswd').type(Components.ModelRulesT.text).require().minLen(6).maxLen(100).errorEx('pswd', 'pswd'),
  );

  // ---------------------------------------

  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}

// =======================================================
/**
 * Зарегистрироваться
 *
 * @param req MainRequest
 * @param data RequestI
 */
export function register(req: MainRequest, data: any) {
  let rules = new Components.ModelRulesC();

  // ---------------------------------------

  // логин
  rules.set(
    rules.rule('login').type(Components.ModelRulesT.text).require().minLen(3).maxLen(100).errorEx('login', 'login'),
  );

  // email
  rules.set(
    rules
      .rule('email')
      .type(Components.ModelRulesT.str)
      .require()
      .if('.+@.+..+')
      .minLen(3)
      .maxLen(100)
      .errorEx('email', 'email'),
  );

  // пароль
  rules.set(
    rules.rule('pswd').type(Components.ModelRulesT.text).require().minLen(6).maxLen(100).errorEx('pswd', 'pswd'),
  );

  rules.set(
    rules
      .rule('secretKey')
      .type(Components.ModelRulesT.text)
      .require()
      .if([register_secret])
      .errorEx('secretKey', 'secretKey'),
  );

  // ---------------------------------------

  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);

  return validator.getResult();
}
