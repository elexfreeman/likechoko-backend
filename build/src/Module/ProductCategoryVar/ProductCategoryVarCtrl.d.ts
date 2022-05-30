import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductCategoryVarM } from './ProductCategoryVarM';
declare const router: import("express-serve-static-core").Router;
export declare class ProductCategoryVarController extends System.BaseCtrl {
    productCategoryVarM: ProductCategoryVarM;
    faInit(): Promise<void>;
}
export { router as ProductCategoryVarCtrl };
