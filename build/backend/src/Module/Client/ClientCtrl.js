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
exports.ClientCtrl = exports.ClientController = void 0;
const express = __importStar(require('express'));
const System = __importStar(require('@a-a-game-studio/aa-core/lib/Namespace/System'));
const ClientR_1 = require('lc-common/lib/Routes/ClientR');
const ClientM_1 = require('./ClientM');
const router = express.Router();
exports.ClientCtrl = router;

/**
/**
 * Контроллер
 */
class ClientController extends System.BaseCtrl {
  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  async faInit() {
    // Инициализация бизнес моделей
    this.clientM = new ClientM_1.ClientM(this.req);
  }
}
exports.ClientController = ClientController;

/**
 * insert
 */
router.post(ClientR_1.ClientR.insert.route, async (req, res, next) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client add', () => {
    return ctrl.clientM.faInsert(req.body);
  });
});

/**
 * update
 */
router.post(ClientR_1.ClientR.update.route, async (req, res, next) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client update', () => {
    return ctrl.clientM.faUpdate(req.body);
  });
});

/**
 * get by id
 */
router.post(ClientR_1.ClientR.getById.route, async (req, res, next) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client get', () => {
    return ctrl.clientM.faGetById(req.body);
  });
});

/**
 * List
 */
router.post(ClientR_1.ClientR.list.route, async (req, res, next) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client list', () => {
    return ctrl.clientM.faList(req.body);
  });
});

/**
 * List info
 */
router.post(ClientR_1.ClientR.listInfo.route, async (req, res, next) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client list info', () => {
    return ctrl.clientM.faListInfo(req.body);
  });
});

/**
 * Client column
 */
router.post(ClientR_1.ClientR.info.route, async (req, res, next) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client column info', () => {
    return ctrl.clientM.faInfo(req.body);
  });
});
//# sourceMappingURL=ClientCtrl.js.map
