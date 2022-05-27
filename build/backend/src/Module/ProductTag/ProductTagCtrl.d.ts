import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductTagM } from './ProductTagM';
declare const router: import('express-serve-static-core').Router;

/**
/**
 * Контроллер
 */
export declare class ProductTagController extends System.BaseCtrl {
  productTagM: ProductTagM;

  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  faInit(): Promise<void>;
}
export { router as ProductTagCtrl };
