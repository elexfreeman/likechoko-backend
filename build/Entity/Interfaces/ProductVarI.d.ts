import { VarType } from './ProductCategoryVarI';
export interface ProductVarI {
  id?: number;
  caption: string;
  description?: string;
  product_category_id: number;
  var_type: VarType;
}
