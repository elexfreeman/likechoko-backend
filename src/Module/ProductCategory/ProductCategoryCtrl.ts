import * as express from 'express';
import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductCategoryR as R } from 'lc-common/lib/Routes/ProductCategoryR';
import { ProductCategoryM } from './ProductCategoryM';

const router = express.Router();

export class ProductCategoryController extends System.BaseCtrl {
  public productCategoryM: ProductCategoryM;

  public async faInit() {
    // Инициализация бизнес моделей
    this.productCategoryM = new ProductCategoryM(this.req);
  }
}

/**
 * insert
 */
router.post(R.insert.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.update.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.getById.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.list.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.listInfo.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.info.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductCategoryController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductCategory column info', () => {
    return ctrl.productCategoryM.faInfo(req.body);
  });
});
export { router as ProductCategoryCtrl };
