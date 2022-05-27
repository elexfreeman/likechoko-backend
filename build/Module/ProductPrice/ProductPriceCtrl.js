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
exports.ProductPriceCtrl = exports.ProductPriceController = void 0;
const express = __importStar(require("express"));
const System = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/System"));
const ProductPriceR_1 = require("lc-common/lib/Routes/ProductPriceR");
const ProductPriceM_1 = require("./ProductPriceM");
const router = express.Router();
exports.ProductPriceCtrl = router;
class ProductPriceController extends System.BaseCtrl {
    async faInit() {
        // Инициализация бизнес моделей
        this.productPriceM = new ProductPriceM_1.ProductPriceM(this.req);
    }
}
exports.ProductPriceController = ProductPriceController;
/**
 * insert
 */
router.post(ProductPriceR_1.ProductPriceR.insert.route, async (req, res) => {
    const ctrl = new ProductPriceController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('ProductPrice add', () => {
        return ctrl.productPriceM.faInsert(req.body);
    });
});
/**
 * update
 */
router.post(ProductPriceR_1.ProductPriceR.update.route, async (req, res) => {
    const ctrl = new ProductPriceController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('ProductPrice update', () => {
        return ctrl.productPriceM.faUpdate(req.body);
    });
});
/**
 * get by id
 */
router.post(ProductPriceR_1.ProductPriceR.getById.route, async (req, res) => {
    const ctrl = new ProductPriceController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('ProductPrice get', () => {
        return ctrl.productPriceM.faGetById(req.body);
    });
});
/**
 * List
 */
router.post(ProductPriceR_1.ProductPriceR.list.route, async (req, res) => {
    const ctrl = new ProductPriceController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('ProductPrice list', () => {
        return ctrl.productPriceM.faList(req.body);
    });
});
/**
 * List info
 */
router.post(ProductPriceR_1.ProductPriceR.listInfo.route, async (req, res) => {
    const ctrl = new ProductPriceController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('ProductPrice list info', () => {
        return ctrl.productPriceM.faListInfo(req.body);
    });
});
/**
 * ProductPrice column
 */
router.post(ProductPriceR_1.ProductPriceR.info.route, async (req, res) => {
    const ctrl = new ProductPriceController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('ProductPrice column info', () => {
        return ctrl.productPriceM.faInfo(req.body);
    });
});
//# sourceMappingURL=ProductPriceCtrl.js.map