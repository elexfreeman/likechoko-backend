'use strict';
let __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) {
          k2 = k;
        }
        let desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) {
          k2 = k;
        }
        o[k2] = m[k];
      });
let __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
let __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) {
      return mod;
    }
    let result = {};
    if (mod != null) {
      for (let k in mod) {
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) {
          __createBinding(result, mod, k);
        }
      }
    }
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.validAProduct = exports.makeOrder = void 0;
const Components = __importStar(require('@a-a-game-studio/aa-components/lib'));
// =======================================================
/**
 * Валидация
 *
 * @param req MainRequest
 * @param data RequestI
 */
function makeOrder(req, data) {
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
exports.makeOrder = makeOrder;

/**
 * Валидация
 *
 * @param req MainRequest
 * @param data RequestI
 */
function validAProduct(req, data) {
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
exports.validAProduct = validAProduct;
//# sourceMappingURL=OrderV.js.map
