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
exports.ProductCtrl = exports.ProductController = void 0;
const express = __importStar(require('express'));
const System = __importStar(require('@a-a-game-studio/aa-core/lib/Namespace/System'));
const ProductR_1 = require('lc-common/lib/Routes/ProductR');
const ProductM_1 = require('./ProductM');
const router = express.Router();
exports.ProductCtrl = router;

/**
/**
 * Контроллер
 */
class ProductController extends System.BaseCtrl {
  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  async faInit() {
    // Инициализация бизнес моделей
    this.productM = new ProductM_1.ProductM(this.req);
  }
}
exports.ProductController = ProductController;

/**
 * insert
 */
router.post(ProductR_1.ProductR.insert.route, async (req, res, next) => {
  const ctrl = new ProductController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Product add', () => {
    return ctrl.productM.faInsert(req.body);
  });
});

/**
 * update
 */
router.post(ProductR_1.ProductR.update.route, async (req, res, next) => {
  const ctrl = new ProductController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Product update', () => {
    return ctrl.productM.faUpdate(req.body);
  });
});

/**
 * get by id
 */
router.post(ProductR_1.ProductR.getById.route, async (req, res, next) => {
  const ctrl = new ProductController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Product get', () => {
    return ctrl.productM.faGetById(req.body);
  });
});

/**
 * List
 */
router.post(ProductR_1.ProductR.list.route, async (req, res, next) => {
  const ctrl = new ProductController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Product list', () => {
    return ctrl.productM.faList(req.body);
  });
});

/**
 * List info
 */
router.post(ProductR_1.ProductR.listInfo.route, async (req, res, next) => {
  const ctrl = new ProductController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Product list info', () => {
    return ctrl.productM.faListInfo(req.body);
  });
});

/**
 * Product column
 */
router.post(ProductR_1.ProductR.info.route, async (req, res, next) => {
  const ctrl = new ProductController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Product column info', () => {
    return ctrl.productM.faInfo(req.body);
  });
});
//# sourceMappingURL=ProductCtrl.js.map
