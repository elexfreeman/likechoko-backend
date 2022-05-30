import { App } from '@a-a-game-studio/aa-core/lib';
import config from './Config/MainConfig';
import { ProductCtrl } from './Module/Product/ProductCtrl';
import { ProductTagCtrl } from './Module/ProductTag/ProductTagCtrl';
import { ProductCategoryCtrl } from './Module/ProductCategory/ProductCategoryCtrl';
import { ProductVarCtrl } from './Module/ProductVar/ProductVarCtrl';
import { ProductCategoryVarCtrl } from './Module/ProductCategoryVar/ProductCategoryVarCtrl';
import { ClientCtrl } from './Module/Client/ClientCtrl';
import { StorehouseCtrl } from './Module/Storehouse/StorehouseCtrl';
import { LoginCtrl } from './Module/Login/LoginCtrl';

class MyApp extends App {

  public fFixPort(): App {
    // eslint-disable-next-line
    console.log('+ Use fix port');
    this.iPort = config.common.port;
    return this;
  }

  public fUseLogin(): App {
    // eslint-disable-next-line
    console.log('+ Use login');
    this.objExpress.use(LoginCtrl);
    return this;
  }

  public fUseProduct(): App {
    // eslint-disable-next-line
    console.log('+ Use product');
    this.objExpress.use(ProductCtrl);
    return this;
  }

  public fUseProductTag(): App {
    // eslint-disable-next-line
    console.log('+ Use product tag');
    this.objExpress.use(ProductTagCtrl);
    return this;
  }

  public fUseProductCategory(): App {
    // eslint-disable-next-line
    console.log('+ Use product category');
    this.objExpress.use(ProductCategoryCtrl);
    return this;
  }

  public fUseProductVar(): App {
    // eslint-disable-next-line
    console.log('+ Use product var');
    this.objExpress.use(ProductVarCtrl);
    return this;
  }

  public fUseProductCategoryVar(): App {
    // eslint-disable-next-line
    console.log('+ Use product category var');
    this.objExpress.use(ProductCategoryVarCtrl);
    return this;
  }

  public fUseClient(): App {
    // eslint-disable-next-line
    console.log('+ Use client');
    this.objExpress.use(ClientCtrl);
    return this;
  }

  public fUseStorehouse(): App {
    // eslint-disable-next-line
    console.log('+ Use storehouse');
    this.objExpress.use(StorehouseCtrl);
    return this;
  }

  public fUseLoger(): App {
    // eslint-disable-next-line
    this.objExpress.use((req, resp, next) => {
      // eslint-disable-next-line
      console.log(req.headers.token);
      // eslint-disable-next-line
      console.log(req.originalUrl);
      next();
    });
    return this;
  }
}

const app: MyApp = new MyApp(config);

app.fFixPort();

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
app.fUseLogin();

app.fStart(); // Запускаем приложение
