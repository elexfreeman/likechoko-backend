import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { StorehouseM } from './StorehouseM';
declare const router: import("express-serve-static-core").Router;
/**
/**
 * Контроллер
 */
export declare class StorehouseController extends System.BaseCtrl {
    storehouseM: StorehouseM;
    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    faInit(): Promise<void>;
}
export { router as StorehouseCtrl };
