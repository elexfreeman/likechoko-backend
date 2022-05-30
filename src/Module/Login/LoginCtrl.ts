import * as express from 'express';
import { MainRequest } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import BaseCtrl from '@a-a-game-studio/aa-core/lib/System/BaseCtrl';
import { LoginR as R } from './LoginR';
import { LoginM } from './LoginM';

const router = express.Router();

/**
 * Контроллер
 */
export class LoginController extends BaseCtrl {
  public loginM: LoginM;

  public async faInit() {
    // Инициализация бизнес моделей
    this.loginM = new LoginM(this.req);
  }
}

/**
 * INIT
 */
router.post(R.init.route, async (req: MainRequest, res: any) => {
  const ctrl = new LoginController(req, res);
  await ctrl.faInit();
  await ctrl.userSys.isAuth(); // Пробуем авторизироваться
  await ctrl.faAction('Страница логин', () => {
    return ctrl.loginM.init(req.body);
  });
});

/**
 * Войти в систему
 */
router.post(R.login.route, async (req: MainRequest, res: any) => {
  const ctrl = new LoginController(req, res);
  await ctrl.faInit();
  await ctrl.faAction('Войти в систему', () => {
    return ctrl.loginM.login(req.body);
  });
});

/**
 * Зарегистрироваться
 */
router.post(R.register.route, async (req: MainRequest, res: any) => {
  const ctrl = new LoginController(req, res);
  await ctrl.faInit();
  await ctrl.faAction('Зарегистрироваться', () => {
    return ctrl.loginM.register(req.body);
  });
});

export { router as LoginCtrl };
