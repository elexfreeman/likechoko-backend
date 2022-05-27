'use strict';
let __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) {
          k2 = k;
        }
        let desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) {
          k2 = k;
        }
        o[k2] = m[k];
      });
let __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
let __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) {
      return mod;
    }
    let result = {};
    if (mod != null) {
      for (let k in mod) {
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) {
          __createBinding(result, mod, k);
        }
      }
    }
    __setModuleDefault(result, mod);
    return result;
  };
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderM = void 0;
const BaseM_1 = __importDefault(require('@a-a-game-studio/aa-core/lib/System/BaseM'));
const OrderSQL_1 = require('./OrderSQL');
const V = __importStar(require('./OrderV'));

/**
 * Бизнес модель пользователя суда мы нас проксирует контроллер 1 url = 1 метод модели
 * Внутри метода делаем нужную бизнес логику
 */
class OrderM extends BaseM_1.default {
  constructor(req) {
    super(req);
    this.orderSQL = new OrderSQL_1.OrderSQL(req);
  }
  async faInit() {
    // Инициализация бизнес моделей
  }

  /**
   * Сделать заказ
   * @param data
   */
  async faMakeOrder(data) {
    data = V.makeOrder(this.req, data);
    let orderId = 0;
    let ok = this.errorSys.isOk();
    // --------------------------
    if (ok) {
      // Получить пользователя по токену
      orderId = await this.orderSQL.faOrderInsert({
        city: data.city,
        delivery_address: data.delivery_address,
        comment: data.comment,
        delivery_date: data.delivery_date,
        delivery_time_comment: data.delivery_time_comment,
        user_id: 0,
      });
    }
    // --------------------------
    let out = null;
    if (ok) {
      // Формирование ответа
      out = {
        order_id: orderId,
      };
    }
    return out;
  }
}
exports.OrderM = OrderM;
//# sourceMappingURL=OrderM.js.map
