import * as express from 'express';
import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { StorehouseR as R } from 'lc-common/lib/Routes/StorehouseR';
import { StorehouseM } from './StorehouseM';

const router = express.Router();

/**
/**
 * Контроллер 
 */
export class StorehouseController extends System.BaseCtrl {
  public storehouseM: StorehouseM;

  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  public async faInit() {
    // Инициализация бизнес моделей
    this.storehouseM = new StorehouseM(this.req);
  }
}

/**
 * insert
 */
router.post(R.insert.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new StorehouseController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Storehouse add', () => {
    return ctrl.storehouseM.faInsert(req.body);
  });
});

/**
 * update
 */
router.post(R.update.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new StorehouseController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Storehouse update', () => {
    return ctrl.storehouseM.faUpdate(req.body);
  });
});

/**
 * get by id
 */
router.post(R.getById.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new StorehouseController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Storehouse get', () => {
    return ctrl.storehouseM.faGetById(req.body);
  });
});

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new StorehouseController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Storehouse list', () => {
    return ctrl.storehouseM.faList(req.body);
  });
});

/**
 * List info
 */
router.post(R.listInfo.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new StorehouseController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Storehouse list info', () => {
    return ctrl.storehouseM.faListInfo(req.body);
  });
});

/**
 * Storehouse column
 */
router.post(R.info.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new StorehouseController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Storehouse column info', () => {
    return ctrl.storehouseM.faInfo(req.body);
  });
});
export { router as StorehouseCtrl };
