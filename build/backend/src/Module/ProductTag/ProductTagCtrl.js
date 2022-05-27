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
exports.ProductTagCtrl = exports.ProductTagController = void 0;
const express = __importStar(require('express'));
const System = __importStar(require('@a-a-game-studio/aa-core/lib/Namespace/System'));
const ProductTagR_1 = require('lc-common/lib/Routes/ProductTagR');
const ProductTagM_1 = require('./ProductTagM');
const router = express.Router();
exports.ProductTagCtrl = router;

/**
/**
 * Контроллер
 */
class ProductTagController extends System.BaseCtrl {
  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  async faInit() {
    // Инициализация бизнес моделей
    this.productTagM = new ProductTagM_1.ProductTagM(this.req);
  }
}
exports.ProductTagController = ProductTagController;

/**
 * List
 */
router.post(ProductTagR_1.ProductTagR.list.route, async (req, res, next) => {
  const ctrl = new ProductTagController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Список товаров', () => {
    return ctrl.productTagM.faList(req.body);
  });
});

/**
 * insert
 */
router.post(ProductTagR_1.ProductTagR.insert.route, async (req, res, next) => {
  const ctrl = new ProductTagController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Добавление товаров', () => {
    return ctrl.productTagM.faInsert(req.body);
  });
});

/**
 * update
 */
router.post(ProductTagR_1.ProductTagR.update.route, async (req, res, next) => {
  const ctrl = new ProductTagController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Обновленеи товара', () => {
    return ctrl.productTagM.faUpdate(req.body);
  });
});

/**
 * get by id
 */
router.post(ProductTagR_1.ProductTagR.getById.route, async (req, res, next) => {
  const ctrl = new ProductTagController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Получение товара', () => {
    return ctrl.productTagM.faGetById(req.body);
  });
});
//# sourceMappingURL=ProductTagCtrl.js.map
