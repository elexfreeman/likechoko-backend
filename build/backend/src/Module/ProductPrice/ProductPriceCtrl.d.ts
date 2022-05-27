import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductPriceM } from './ProductPriceM';
declare const router: import('express-serve-static-core').Router;

/**
/**
 * Контроллер
 */
export declare class ProductPriceController extends System.BaseCtrl {
  productPriceM: ProductPriceM;

  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  faInit(): Promise<void>;
}
export { router as ProductPriceCtrl };
