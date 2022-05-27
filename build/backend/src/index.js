'use strict';
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const lib_1 = require('@a-a-game-studio/aa-core/lib');
const MainConfig_1 = __importDefault(require('./Config/MainConfig'));
const ProductCtrl_1 = require('./Module/Product/ProductCtrl');
const ProductTagCtrl_1 = require('./Module/ProductTag/ProductTagCtrl');
const ProductCategoryCtrl_1 = require('./Module/ProductCategory/ProductCategoryCtrl');
const ProductVarCtrl_1 = require('./Module/ProductVar/ProductVarCtrl');
const ProductCategoryVarCtrl_1 = require('./Module/ProductCategoryVar/ProductCategoryVarCtrl');
const ClientCtrl_1 = require('./Module/Client/ClientCtrl');
const StorehouseCtrl_1 = require('./Module/Storehouse/StorehouseCtrl');
const mem = {};
class MyApp extends lib_1.App {
  fUseProduct() {
    console.log('+ Use product');
    this.objExpress.use(ProductCtrl_1.ProductCtrl);
    return this;
  }
  fUseProductTag() {
    console.log('+ Use product tag');
    this.objExpress.use(ProductTagCtrl_1.ProductTagCtrl);
    return this;
  }
  fUseProductCategory() {
    console.log('+ Use product category');
    this.objExpress.use(ProductCategoryCtrl_1.ProductCategoryCtrl);
    return this;
  }
  fUseProductVar() {
    console.log('+ Use product var');
    this.objExpress.use(ProductVarCtrl_1.ProductVarCtrl);
    return this;
  }
  fUseProductCategoryVar() {
    console.log('+ Use product category var');
    this.objExpress.use(ProductCategoryVarCtrl_1.ProductCategoryVarCtrl);
    return this;
  }
  fUseClient() {
    console.log('+ Use client');
    this.objExpress.use(ClientCtrl_1.ClientCtrl);
    return this;
  }
  fUseStorehouse() {
    console.log('+ Use storehouse');
    this.objExpress.use(StorehouseCtrl_1.StorehouseCtrl);
    return this;
  }
  fUseLoger() {
    this.objExpress.use((req, resp, next) => {
      console.log(req.headers.token);
      console.log(req.originalUrl);
      next();
    });
    return this;
  }
}
const app = new MyApp(MainConfig_1.default);
app.fDisableCors(); // отключаем cors
app.fUseBodyParser(); // используем дефолтный BodyParser
app.fUseMySql();
app.fUseReddis();
app.faUseAuthSys();
app.fUseLoger();
app.fUseProduct();
app.fUseProductTag();
app.fUseProductCategory();
app.fUseProductVar();
app.fUseProductCategoryVar();
app.fUseClient();
app.fUseStorehouse();
app.fStart(); // Запускаем приложение
//# sourceMappingURL=index.js.map
