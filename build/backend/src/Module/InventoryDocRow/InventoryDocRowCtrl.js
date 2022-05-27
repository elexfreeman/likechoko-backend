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
exports.InventoryDocRowCtrl = exports.InventoryDocRowController = void 0;
const express = __importStar(require('express'));
const System = __importStar(require('@a-a-game-studio/aa-core/lib/Namespace/System'));
const InventoryDocRowR_1 = require('lc-common/lib/Routes/InventoryDocRowR');
const InventoryDocRowM_1 = require('./InventoryDocRowM');
const router = express.Router();
exports.InventoryDocRowCtrl = router;

/**
/**
 * Контроллер
 */
class InventoryDocRowController extends System.BaseCtrl {
  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  async faInit() {
    // Инициализация бизнес моделей
    this.inventoryDocRowM = new InventoryDocRowM_1.InventoryDocRowM(this.req);
  }
}
exports.InventoryDocRowController = InventoryDocRowController;

/**
 * insert
 */
router.post(InventoryDocRowR_1.InventoryDocRowR.insert.route, async (req, res, next) => {
  const ctrl = new InventoryDocRowController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('InventoryDocRow add', () => {
    return ctrl.inventoryDocRowM.faInsert(req.body);
  });
});

/**
 * remove
 */
router.post(InventoryDocRowR_1.InventoryDocRowR.removeDocRow.route, async (req, res, next) => {
  const ctrl = new InventoryDocRowController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('InventoryDocRow removeDocRow', () => {
    return ctrl.inventoryDocRowM.faRemoveDocRow(req.body);
  });
});

/**
 * List
 */
router.post(InventoryDocRowR_1.InventoryDocRowR.listDocRow.route, async (req, res, next) => {
  const ctrl = new InventoryDocRowController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('InventoryDocRow list', () => {
    return ctrl.inventoryDocRowM.faList(req.body);
  });
});

/**
 * List info
 */
router.post(InventoryDocRowR_1.InventoryDocRowR.listInfo.route, async (req, res, next) => {
  const ctrl = new InventoryDocRowController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('InventoryDocRow list info', () => {
    return ctrl.inventoryDocRowM.faListInfo(req.body);
  });
});

/**
 * InventoryDocRow column
 */
router.post(InventoryDocRowR_1.InventoryDocRowR.info.route, async (req, res, next) => {
  const ctrl = new InventoryDocRowController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('InventoryDocRow column info', () => {
    return ctrl.inventoryDocRowM.faInfo(req.body);
  });
});
//# sourceMappingURL=InventoryDocRowCtrl.js.map
