import * as express from 'express';
import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductPriceR as R } from 'lc-common/lib/Routes/ProductPriceR';
import { ProductPriceM } from './ProductPriceM';

const router = express.Router();

export class ProductPriceController extends System.BaseCtrl {
  public productPriceM: ProductPriceM;

  public async faInit() {
    // Инициализация бизнес моделей
    this.productPriceM = new ProductPriceM(this.req);
  }
}

/**
 * insert
 */
router.post(R.insert.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductPriceController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductPrice add', () => {
    return ctrl.productPriceM.faInsert(req.body);
  });
});

/**
 * update
 */
router.post(R.update.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductPriceController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductPrice update', () => {
    return ctrl.productPriceM.faUpdate(req.body);
  });
});

/**
 * get by id
 */
router.post(R.getById.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductPriceController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductPrice get', () => {
    return ctrl.productPriceM.faGetById(req.body);
  });
});

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductPriceController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductPrice list', () => {
    return ctrl.productPriceM.faList(req.body);
  });
});

/**
 * List info
 */
router.post(R.listInfo.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductPriceController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductPrice list info', () => {
    return ctrl.productPriceM.faListInfo(req.body);
  });
});

/**
 * ProductPrice column
 */
router.post(R.info.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductPriceController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('ProductPrice column info', () => {
    return ctrl.productPriceM.faInfo(req.body);
  });
});
export { router as ProductPriceCtrl };
