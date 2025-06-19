export type OrderStatus = 'pending' | 'accepted' | 'inProgress' | 'onway' | 'delivered';
;

export interface OrderItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedColor: string;
  sellerId: string;
}

export interface Order {
  id: number;
  buyerId: string;
  sellerId: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
}
