import * as express from 'express';
import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductR as R } from 'lc-common/lib/Routes/ProductR';
import { ProductM } from './ProductM';

const router = express.Router();

export class ProductController extends System.BaseCtrl {
  public productM: ProductM;

  public async faInit() {
    // Инициализация бизнес моделей
    this.productM = new ProductM(this.req);
  }
}

/**
 * insert
 */
router.post(R.insert.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.update.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.getById.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.list.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.listInfo.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.info.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Product column info', () => {
    return ctrl.productM.faInfo(req.body);
  });
});
export { router as ProductCtrl };
