import { OrderM } from './OrderM';
import BaseCtrl from '@a-a-game-studio/aa-core/lib/System/BaseCtrl';
declare const router: import("express-serve-static-core").Router;
export declare class OrderController extends BaseCtrl {
    orderM: OrderM;
    faInit(): Promise<void>;
}
export { router as OrderCtrl };
