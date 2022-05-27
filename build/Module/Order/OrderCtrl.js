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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCtrl = exports.OrderController = void 0;
const express = __importStar(require("express"));
const OrderM_1 = require("./OrderM");
const BaseCtrl_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseCtrl"));
const OrderR_1 = require("lc-common/lib/Routes/OrderR");
const router = express.Router();
exports.OrderCtrl = router;
class OrderController extends BaseCtrl_1.default {
    async faInit() {
        // Инициализация бизнес моделей
        this.orderM = new OrderM_1.OrderM(this.req);
    }
}
exports.OrderController = OrderController;
router.post(OrderR_1.OrderR.makeOrder.route, async (req, res) => {
    const ctrl = new OrderController(req, res);
    await ctrl.faInit();
    await ctrl.faAction('Страница логин', () => {
        return ctrl.orderM.faMakeOrder(req.body);
    });
});
//# sourceMappingURL=OrderCtrl.js.map