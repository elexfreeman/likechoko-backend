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
exports.LoginCtrl = exports.LoginController = void 0;
const express = __importStar(require("express"));
const BaseCtrl_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseCtrl"));
const LoginR_1 = require("./LoginR");
const LoginM_1 = require("./LoginM");
const router = express.Router();
exports.LoginCtrl = router;
/**
 * Контроллер
 */
class LoginController extends BaseCtrl_1.default {
    async faInit() {
        // Инициализация бизнес моделей
        this.loginM = new LoginM_1.LoginM(this.req);
    }
}
exports.LoginController = LoginController;
/**
 * INIT
 */
router.post(LoginR_1.LoginR.init.route, async (req, res) => {
    const ctrl = new LoginController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Страница логин', () => {
        return ctrl.loginM.init(req.body);
    });
});
/**
 * Войти в систему
 */
router.post(LoginR_1.LoginR.login.route, async (req, res) => {
    const ctrl = new LoginController(req, res);
    await ctrl.faInit();
    await ctrl.faAction('Войти в систему', () => {
        return ctrl.loginM.login(req.body);
    });
});
/**
 * Зарегистрироваться
 */
router.post(LoginR_1.LoginR.register.route, async (req, res) => {
    const ctrl = new LoginController(req, res);
    await ctrl.faInit();
    await ctrl.faAction('Зарегистрироваться', () => {
        return ctrl.loginM.register(req.body);
    });
});
//# sourceMappingURL=LoginCtrl.js.map