import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductCategoryM } from './ProductCategoryM';
declare const router: import('express-serve-static-core').Router;

/**
/**
 * Контроллер
 */
export declare class ProductCategoryController extends System.BaseCtrl {
  productCategoryM: ProductCategoryM;

  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  faInit(): Promise<void>;
}
export { router as ProductCategoryCtrl };
