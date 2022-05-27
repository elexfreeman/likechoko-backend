import * as express from 'express';
import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductVarR as R } from 'lc-common/lib/Routes/ProductVarR';
import { ProductVarM } from './ProductVarM';

const router = express.Router();

export class ProductVarController extends System.BaseCtrl {
  public productVarM: ProductVarM;

  public async faInit() {
    // Инициализация бизнес моделей
    this.productVarM = new ProductVarM(this.req);
  }
}

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductVarController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Список характеристик категории', () => {
    return ctrl.productVarM.faList(req.body);
  });
});

/**
 * insert
 */
router.post(R.insert.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductVarController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Добавление характеристики', () => {
    return ctrl.productVarM.faInsert(req.body);
  });
});

/**
 * update
 */
router.post(R.update.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductVarController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Обновленеи характеристики', () => {
    return ctrl.productVarM.faUpdate(req.body);
  });
});

/**
 * get by id
 */
router.post(R.getById.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ProductVarController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Получение характеристики', () => {
    return ctrl.productVarM.faGetById(req.body);
  });
});

export { router as ProductVarCtrl };
