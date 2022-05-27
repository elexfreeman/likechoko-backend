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
exports.ProductCategoryVarCtrl = exports.ProductCategoryVarController = void 0;
const express = __importStar(require('express'));
const System = __importStar(require('@a-a-game-studio/aa-core/lib/Namespace/System'));
const ProductCategoryVarR_1 = require('lc-common/lib/Routes/ProductCategoryVarR');
const ProductCategoryVarM_1 = require('./ProductCategoryVarM');
const router = express.Router();
exports.ProductCategoryVarCtrl = router;

/**
/**
 * Контроллер
 */
class ProductCategoryVarController extends System.BaseCtrl {
  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  async faInit() {
    // Инициализация бизнес моделей
    this.productCategoryVarM = new ProductCategoryVarM_1.ProductCategoryVarM(this.req);
  }
}
exports.ProductCategoryVarController = ProductCategoryVarController;

/**
 * List
 */
router.post(ProductCategoryVarR_1.ProductCategoryVarR.list.route, async (req, res, next) => {
  const ctrl = new ProductCategoryVarController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Список характеристик категории', () => {
    return ctrl.productCategoryVarM.faList(req.body);
  });
});

/**
 * insert
 */
router.post(ProductCategoryVarR_1.ProductCategoryVarR.insert.route, async (req, res, next) => {
  const ctrl = new ProductCategoryVarController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Добавление характеристики', () => {
    return ctrl.productCategoryVarM.faInsert(req.body);
  });
});

/**
 * update
 */
router.post(ProductCategoryVarR_1.ProductCategoryVarR.update.route, async (req, res, next) => {
  const ctrl = new ProductCategoryVarController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Обновленеи характеристики', () => {
    return ctrl.productCategoryVarM.faUpdate(req.body);
  });
});

/**
 * get by id
 */
router.post(ProductCategoryVarR_1.ProductCategoryVarR.getById.route, async (req, res, next) => {
  const ctrl = new ProductCategoryVarController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Получение характеристики', () => {
    return ctrl.productCategoryVarM.faGetById(req.body);
  });
});
//# sourceMappingURL=ProductCategoryVarCtrl.js.map
