import { Router } from 'express';
import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ClientR as R } from 'lc-common/lib/Routes/ClientR';
import { ClientM } from './ClientM';

const router = Router();

/**
/**
 * Контроллер 
 */
export class ClientController extends System.BaseCtrl {
  public clientM: ClientM;

  public async faInit() {
    // Инициализация бизнес моделей
    this.clientM = new ClientM(this.req);
  }
}

/**
 * insert
 */
router.post(R.insert.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client add', () => {
    return ctrl.clientM.faInsert(req.body);
  });
});

/**
 * update
 */
router.post(R.update.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client update', () => {
    return ctrl.clientM.faUpdate(req.body);
  });
});

/**
 * get by id
 */
router.post(R.getById.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client get', () => {
    return ctrl.clientM.faGetById(req.body);
  });
});

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client list', () => {
    return ctrl.clientM.faList(req.body);
  });
});

/**
 * List info
 */
router.post(R.listInfo.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client list info', () => {
    return ctrl.clientM.faListInfo(req.body);
  });
});

/**
 * Client column
 */
router.post(R.info.route, async (req: System.MainRequest, res: any) => {
  const ctrl = new ClientController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Client column info', () => {
    return ctrl.clientM.faInfo(req.body);
  });
});

export { router as ClientCtrl };
