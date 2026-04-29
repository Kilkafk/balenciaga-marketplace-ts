export interface Product {
  id: number;
  title: string;
  price: number;
  src: string;
  quantity: number;
  shadow: ShadowProps;
}

export interface ShadowProps {
  bottom: string;
  left: string;
  width: string;
  height: string;
}