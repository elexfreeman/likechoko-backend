export interface OrderProductI {
  id?: number;
  price: number;
  product_id: number;
  order_id: string;
  count: number;
}

/**
 * Продукты заказа
 */
export declare class OrderProductE {
  static NAME: string;
  getRulesInsert(): {
    [key: string]: any;
  };
}
