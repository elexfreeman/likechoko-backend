import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { InventoryDocRowM } from './InventoryDocRowM';
declare const router: import('express-serve-static-core').Router;

/**
/**
 * Контроллер
 */
export declare class InventoryDocRowController extends System.BaseCtrl {
  inventoryDocRowM: InventoryDocRowM;

  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  faInit(): Promise<void>;
}
export { router as InventoryDocRowCtrl };
