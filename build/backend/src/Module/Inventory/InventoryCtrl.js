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
exports.InventoryCtrl = exports.InventoryController = void 0;
const express = __importStar(require('express'));
const System = __importStar(require('@a-a-game-studio/aa-core/lib/Namespace/System'));
const InventoryR_1 = require('lc-common/lib/Routes/InventoryR');
const InventoryM_1 = require('./InventoryM');
const router = express.Router();
exports.InventoryCtrl = router;

/**
/**
 * Контроллер
 */
class InventoryController extends System.BaseCtrl {
  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  async faInit() {
    // Инициализация бизнес моделей
    this.inventoryM = new InventoryM_1.InventoryM(this.req);
  }
}
exports.InventoryController = InventoryController;

/**
 * insert
 */
router.post(InventoryR_1.InventoryR.insert.route, async (req, res, next) => {
  const ctrl = new InventoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Inventory add', () => {
    return ctrl.inventoryM.faInsert(req.body);
  });
});

/**
 * update
 */
router.post(InventoryR_1.InventoryR.update.route, async (req, res, next) => {
  const ctrl = new InventoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Inventory update', () => {
    return ctrl.inventoryM.faUpdate(req.body);
  });
});

/**
 * get by id
 */
router.post(InventoryR_1.InventoryR.getById.route, async (req, res, next) => {
  const ctrl = new InventoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Inventory get', () => {
    return ctrl.inventoryM.faGetById(req.body);
  });
});

/**
 * List
 */
router.post(InventoryR_1.InventoryR.list.route, async (req, res, next) => {
  const ctrl = new InventoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Inventory list', () => {
    return ctrl.inventoryM.faList(req.body);
  });
});

/**
 * List info
 */
router.post(InventoryR_1.InventoryR.listInfo.route, async (req, res, next) => {
  const ctrl = new InventoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Inventory list info', () => {
    return ctrl.inventoryM.faListInfo(req.body);
  });
});

/**
 * Inventory column
 */
router.post(InventoryR_1.InventoryR.info.route, async (req, res, next) => {
  const ctrl = new InventoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Inventory column info', () => {
    return ctrl.inventoryM.faInfo(req.body);
  });
});
//# sourceMappingURL=InventoryCtrl.js.map
