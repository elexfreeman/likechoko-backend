"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorehouseCtrl = exports.StorehouseController = void 0;
const express = __importStar(require("express"));
const System = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/System"));
const StorehouseR_1 = require("lc-common/lib/Routes/StorehouseR");
const StorehouseM_1 = require("./StorehouseM");
const router = express.Router();
exports.StorehouseCtrl = router;
/**
/**
 * Контроллер
 */
class StorehouseController extends System.BaseCtrl {
    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    async faInit() {
        // Инициализация бизнес моделей
        this.storehouseM = new StorehouseM_1.StorehouseM(this.req);
    }
}
exports.StorehouseController = StorehouseController;
/**
 * insert
 */
router.post(StorehouseR_1.StorehouseR.insert.route, async (req, res) => {
    const ctrl = new StorehouseController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Storehouse add', () => {
        return ctrl.storehouseM.faInsert(req.body);
    });
});
/**
 * update
 */
router.post(StorehouseR_1.StorehouseR.update.route, async (req, res) => {
    const ctrl = new StorehouseController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Storehouse update', () => {
        return ctrl.storehouseM.faUpdate(req.body);
    });
});
/**
 * get by id
 */
router.post(StorehouseR_1.StorehouseR.getById.route, async (req, res) => {
    const ctrl = new StorehouseController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Storehouse get', () => {
        return ctrl.storehouseM.faGetById(req.body);
    });
});
/**
 * List
 */
router.post(StorehouseR_1.StorehouseR.list.route, async (req, res) => {
    const ctrl = new StorehouseController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Storehouse list', () => {
        return ctrl.storehouseM.faList(req.body);
    });
});
/**
 * List info
 */
router.post(StorehouseR_1.StorehouseR.listInfo.route, async (req, res) => {
    const ctrl = new StorehouseController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Storehouse list info', () => {
        return ctrl.storehouseM.faListInfo(req.body);
    });
});
/**
 * Storehouse column
 */
router.post(StorehouseR_1.StorehouseR.info.route, async (req, res) => {
    const ctrl = new StorehouseController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Storehouse column info', () => {
        return ctrl.storehouseM.faInfo(req.body);
    });
});
//# sourceMappingURL=StorehouseCtrl.js.map