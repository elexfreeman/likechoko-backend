import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductVarM } from './ProductVarM';
declare const router: import("express-serve-static-core").Router;
export declare class ProductVarController extends System.BaseCtrl {
    productVarM: ProductVarM;
    faInit(): Promise<void>;
}
export { router as ProductVarCtrl };
