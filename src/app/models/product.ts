export class Product {
  id!: number;
  sellerId!: string;
  name!: string;
  name_market!: string;
  urlImage!: string;
  description!: string;
  type!: 'face' | 'eyes' | 'lips' | 'others';
   price!: number;
  colors!: {
    name: string;
    quantite: number;
  }[];

  get totalQuantite(): number {
    return this.colors.reduce((sum, c) => sum + c.quantite, 0);
  }
}
