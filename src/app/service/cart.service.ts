import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cartKey = 'cart';

getCart(): any[] {
  if (typeof window !== 'undefined') {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }
  return []; 
}

addToCart(product: any, selectedColor: string, quantity: number) {
  if (typeof window !== 'undefined') {
    const cart = this.getCart();
    const index = cart.findIndex(item =>
      item.id === product.id && item.selectedColor === selectedColor
    );

    if (index !== -1) {
      cart[index].quantity += quantity;
    } else {
      cart.push({
      id: product.id,
      name: product.name,
      urlImage: product.urlImage, // ✅ ضروري
      description: product.description,
      price: product.price,
      selectedColor: selectedColor,
      quantity: quantity
    });
    }

    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}


  removeFromCart(id: number, color: string) {
    let cart = this.getCart();
    cart = cart.filter(item => !(item.id === id && item.selectedColor === color));
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  clearCart() {
    localStorage.removeItem(this.cartKey);
  }
}
