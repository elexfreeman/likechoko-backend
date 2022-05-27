import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductVarM } from './ProductVarM';
declare const router: import('express-serve-static-core').Router;

/**
/**
 * Контроллер
 */
export declare class ProductVarController extends System.BaseCtrl {
  productVarM: ProductVarM;

  /**
   * Конструктор
   *
   * @param req
   * @param res
   */
  faInit(): Promise<void>;
}
export { router as ProductVarCtrl };
