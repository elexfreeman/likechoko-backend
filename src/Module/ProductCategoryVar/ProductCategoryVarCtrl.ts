import * as express from 'express';
import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductCategoryVarR as R } from 'lc-common/lib/Routes/ProductCategoryVarR';
import { ProductCategoryVarM } from './ProductCategoryVarM';

const router = express.Router();

export class ProductCategoryVarController extends System.BaseCtrl {
  public productCategoryVarM: ProductCategoryVarM;

  public async faInit() {
    // Инициализация бизнес моделей
    this.productCategoryVarM = new ProductCategoryVarM(this.req);
  }
}

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.insert.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.update.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.getById.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductCategoryVarController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Получение характеристики', () => {
    return ctrl.productCategoryVarM.faGetById(req.body);
  });
});

export { router as ProductCategoryVarCtrl };
