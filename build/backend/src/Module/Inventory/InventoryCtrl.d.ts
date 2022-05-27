import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { InventoryM } from './InventoryM';
declare const router: import('express-serve-static-core').Router;

/**
/**
 * Контроллер
 */
export declare class InventoryController extends System.BaseCtrl {
  inventoryM: InventoryM;

  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  faInit(): Promise<void>;
}
export { router as InventoryCtrl };
