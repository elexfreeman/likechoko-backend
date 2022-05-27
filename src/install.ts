import { App } from '@a-a-game-studio/aa-core/lib';
import config from './Config/MainConfig';
import { ProductCtrl } from './Module/Product/ProductCtrl';

class MyApp extends App {
  public fUseProduct(): App {
    this.objExpress.use(ProductCtrl);
    return this;
  }
}

const app: MyApp = new MyApp(config);
app.fDisableCors(); // отключаем cors
app.fUseBodyParser(); // используем дефолтный BodyParser
app.fUseMySql();
app.faRunDefaultMigration();
