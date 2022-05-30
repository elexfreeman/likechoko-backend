"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginR = void 0;
/** Модуль логина/авторизации */
var LoginR;
(function (LoginR) {
    let init;
    (function (init) {
        init.route = '/aa/login/init';
        init.action = 'init';
    })(init = LoginR.init || (LoginR.init = {}));
    // =======================================================
    /** Залогиниться */
    let login;
    (function (login) {
        login.route = '/aa/login/login';
        login.action = 'login';
    })(login = LoginR.login || (LoginR.login = {}));
    // =======================================================
    /** Зарегистрироваться */
    let register;
    (function (register) {
        register.route = '/aa/login/register';
        register.action = 'register';
    })(register = LoginR.register || (LoginR.register = {}));
})(LoginR = exports.LoginR || (exports.LoginR = {}));
//# sourceMappingURL=LoginR.js.map