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
exports.removeDocRow = exports.insert = exports.getById = exports.update = exports.listDocRow = void 0;
const Components = __importStar(require('@a-a-game-studio/aa-components/lib'));
// =======================================================
// =======================================================
/**
 * List
 *
 * @param req MainRequest
 * @param data RequestI
 */
function listDocRow(req, data) {
  let rules = new Components.ModelRulesC();
  // ---------------------------------------
  rules.set(rules.rule('id').type(Components.ModelRulesT.int).moreOrEq(0).errorEx('id', 'id'));
  // ---------------------------------------
  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);
  return validator.getResult();
}
exports.listDocRow = listDocRow;

/**
 * Update
 * @param req MainRequest
 * @param data RequestI
 */
function update(req, data) {
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
exports.update = update;

/**
 * Get by id
 * @param req MainRequest
 * @param data RequestI
 */
function getById(req, data) {
  let rules = new Components.ModelRulesC();
  // ---------------------------------------
  rules.set(rules.rule('id').type(Components.ModelRulesT.int).require().moreOrEq(0).errorEx('id', 'id'));
  // ---------------------------------------
  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);
  return validator.getResult();
}
exports.getById = getById;

/**
 * Insert
 * @param req MainRequest
 * @param data RequestI
 */
function insert(req, data) {
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
exports.insert = insert;

/**
 * removeDocRow
 * @param req MainRequest
 * @param data RequestI
 */
function removeDocRow(req, data) {
  let rules = new Components.ModelRulesC();
  // ---------------------------------------
  rules.set(rules.rule('id').type(Components.ModelRulesT.int).require().moreOrEq(0).errorEx('id', 'id'));
  // ---------------------------------------
  let validator = new Components.ModelValidatorSys(req.sys.errorSys);
  validator.fValid(rules.get(), data);
  return validator.getResult();
}
exports.removeDocRow = removeDocRow;
//# sourceMappingURL=InventoryDocRowV.js.map
