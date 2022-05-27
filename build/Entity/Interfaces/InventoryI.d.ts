export interface InventoryI {
  id?: number;
  date: number;
  storehouse_id: number;
  user_id: number;
  checkout: number;
  deleted: number;
}
export interface InventoryRowI {
  id?: number;
  inventory_id: number;
  product_id: number;
  amount: number;
  price: number;
}
