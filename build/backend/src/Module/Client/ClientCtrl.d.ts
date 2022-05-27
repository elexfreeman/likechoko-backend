import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ClientM } from './ClientM';
declare const router: import('express-serve-static-core').Router;

/**
/**
 * Контроллер
 */
export declare class ClientController extends System.BaseCtrl {
  clientM: ClientM;

  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  faInit(): Promise<void>;
}
export { router as ClientCtrl };
