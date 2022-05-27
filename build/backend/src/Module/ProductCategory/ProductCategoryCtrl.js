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
exports.ProductCategoryCtrl = exports.ProductCategoryController = void 0;
const express = __importStar(require('express'));
const System = __importStar(require('@a-a-game-studio/aa-core/lib/Namespace/System'));
const ProductCategoryR_1 = require('lc-common/lib/Routes/ProductCategoryR');
const ProductCategoryM_1 = require('./ProductCategoryM');
const router = express.Router();
exports.ProductCategoryCtrl = router;

/**
/**
 * Контроллер
 */
class ProductCategoryController extends System.BaseCtrl {
  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  async faInit() {
    // Инициализация бизнес моделей
    this.productCategoryM = new ProductCategoryM_1.ProductCategoryM(this.req);
  }
}
exports.ProductCategoryController = ProductCategoryController;

/**
 * insert
 */
router.post(ProductCategoryR_1.ProductCategoryR.insert.route, async (req, res, next) => {
  const ctrl = new ProductCategoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductCategory add', () => {
    return ctrl.productCategoryM.faInsert(req.body);
  });
});

/**
 * update
 */
router.post(ProductCategoryR_1.ProductCategoryR.update.route, async (req, res, next) => {
  const ctrl = new ProductCategoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductCategory update', () => {
    return ctrl.productCategoryM.faUpdate(req.body);
  });
});

/**
 * get by id
 */
router.post(ProductCategoryR_1.ProductCategoryR.getById.route, async (req, res, next) => {
  const ctrl = new ProductCategoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductCategory get', () => {
    return ctrl.productCategoryM.faGetById(req.body);
  });
});

/**
 * List
 */
router.post(ProductCategoryR_1.ProductCategoryR.list.route, async (req, res, next) => {
  const ctrl = new ProductCategoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductCategory list', () => {
    return ctrl.productCategoryM.faList(req.body);
  });
});

/**
 * List info
 */
router.post(ProductCategoryR_1.ProductCategoryR.listInfo.route, async (req, res, next) => {
  const ctrl = new ProductCategoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductCategory list info', () => {
    return ctrl.productCategoryM.faListInfo(req.body);
  });
});

/**
 * ProductCategory column
 */
router.post(ProductCategoryR_1.ProductCategoryR.info.route, async (req, res, next) => {
  const ctrl = new ProductCategoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductCategory column info', () => {
    return ctrl.productCategoryM.faInfo(req.body);
  });
});
//# sourceMappingURL=ProductCategoryCtrl.js.map
