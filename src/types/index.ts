export interface Product {
  id: number;
  title: string;
  price: number;
  src: string;
  quantity: number;
  shadow_bottom: string;
  shadow_left: string;
  shadow_width: string;
  shadow_height: string;
}
export interface CartItem {
  product_id: number;
  quantity: number;
}
