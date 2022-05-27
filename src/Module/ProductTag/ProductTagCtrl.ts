import * as express from 'express';
import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductTagR as R } from 'lc-common/lib/Routes/ProductTagR';
import { ProductTagM } from './ProductTagM';

const router = express.Router();

export class ProductTagController extends System.BaseCtrl {
  public productTagM: ProductTagM;

  public async faInit() {
    // Инициализация бизнес моделей
    this.productTagM = new ProductTagM(this.req);
  }
}

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.insert.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.update.route, async (req: System.MainRequest, res: any) => {
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
router.post(R.getById.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductTagController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Получение товара', () => {
    return ctrl.productTagM.faGetById(req.body);
  });
});

export { router as ProductTagCtrl };
