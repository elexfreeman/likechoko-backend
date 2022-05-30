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
const mocha = __importStar(require("mocha"));
const chai_1 = require("chai");
const axios_1 = __importDefault(require("axios"));
/* инициализирует фронтовые штуки */
/* *********************************************** */
/* *********************************************** */
/* *********************************************** */
const R = __importStar(require("../src/Module/Login/LoginR"));
const MainConfig_1 = __importDefault(require("../src/Config/MainConfig"));
/* запускатор теста для async-await */
async function run() {
    //++++++++++++++++++++++++++++++++++++
    mocha.it('Test register', async () => {
        let sUrl = R.LoginR.register.route;
        let resp = (await axios_1.default.post(`http://localhost:${MainConfig_1.default.common.port}${sUrl}`, {}, {
            headers: {
                'Content-Type': 'application/json',
                token: '12345',
            },
        })).data;
        chai_1.assert.ok(resp.data.token.length > 0);
    }); //it ****
}
run();
//# sourceMappingURL=Register.test.js.map