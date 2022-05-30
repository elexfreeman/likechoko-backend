import BaseCtrl from '@a-a-game-studio/aa-core/lib/System/BaseCtrl';
import { LoginM } from './LoginM';
declare const router: import("express-serve-static-core").Router;
/**
 * Контроллер
 */
export declare class LoginController extends BaseCtrl {
    loginM: LoginM;
    faInit(): Promise<void>;
}
export { router as LoginCtrl };
