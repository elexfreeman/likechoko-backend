import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { ProductTagM } from './ProductTagM';
declare const router: import("express-serve-static-core").Router;
export declare class ProductTagController extends System.BaseCtrl {
    productTagM: ProductTagM;
    faInit(): Promise<void>;
}
export { router as ProductTagCtrl };
