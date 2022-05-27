import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductCategoryVarM } from './ProductCategoryVarM';
declare const router: import('express-serve-static-core').Router;

/**
/**
 * Контроллер
 */
export declare class ProductCategoryVarController extends System.BaseCtrl {
  productCategoryVarM: ProductCategoryVarM;

  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  faInit(): Promise<void>;
}
export { router as ProductCategoryVarCtrl };
