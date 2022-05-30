"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@a-a-game-studio/aa-core/lib");
const MainConfig_1 = __importDefault(require("./Config/MainConfig"));
const ProductCtrl_1 = require("./Module/Product/ProductCtrl");
class MyApp extends lib_1.App {
    fUseProduct() {
        this.objExpress.use(ProductCtrl_1.ProductCtrl);
        return this;
    }
}
const app = new MyApp(MainConfig_1.default);
app.fDisableCors(); // отключаем cors
app.fUseBodyParser(); // используем дефолтный BodyParser
app.fUseMySql();
app.faRunDefaultMigration();
//# sourceMappingURL=install.js.map