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
exports.ProductVarCtrl = exports.ProductVarController = void 0;
const express = __importStar(require("express"));
const System = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/System"));
const ProductVarR_1 = require("lc-common/lib/Routes/ProductVarR");
const ProductVarM_1 = require("./ProductVarM");
const router = express.Router();
exports.ProductVarCtrl = router;
class ProductVarController extends System.BaseCtrl {
    async faInit() {
        // Инициализация бизнес моделей
        this.productVarM = new ProductVarM_1.ProductVarM(this.req);
    }
}
exports.ProductVarController = ProductVarController;
/**
 * List
 */
router.post(ProductVarR_1.ProductVarR.list.route, async (req, res) => {
    const ctrl = new ProductVarController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Список характеристик категории', () => {
        return ctrl.productVarM.faList(req.body);
    });
});
/**
 * insert
 */
router.post(ProductVarR_1.ProductVarR.insert.route, async (req, res) => {
    const ctrl = new ProductVarController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Добавление характеристики', () => {
        return ctrl.productVarM.faInsert(req.body);
    });
});
/**
 * update
 */
router.post(ProductVarR_1.ProductVarR.update.route, async (req, res) => {
    const ctrl = new ProductVarController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Обновленеи характеристики', () => {
        return ctrl.productVarM.faUpdate(req.body);
    });
});
/**
 * get by id
 */
router.post(ProductVarR_1.ProductVarR.getById.route, async (req, res) => {
    const ctrl = new ProductVarController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Получение характеристики', () => {
        return ctrl.productVarM.faGetById(req.body);
    });
});
//# sourceMappingURL=ProductVarCtrl.js.map