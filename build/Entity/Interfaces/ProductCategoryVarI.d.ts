export declare enum VarType {
  Number = 0,
  String = 1,
  Date = 3,
  Text = 4,
}
export interface ProductCategoryVarI {
  id?: number;
  caption: string;
  description?: string;
  product_category_id: number;
  var_type: VarType;
}
