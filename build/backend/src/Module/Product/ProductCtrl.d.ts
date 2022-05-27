import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductM } from './ProductM';
declare const router: import('express-serve-static-core').Router;

/**
/**
 * Контроллер
 */
export declare class ProductController extends System.BaseCtrl {
  productM: ProductM;

  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  faInit(): Promise<void>;
}
export { router as ProductCtrl };
