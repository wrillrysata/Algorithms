class ShoppingCart {
  
  constructor() {
    this.total = 0;
    this.items = {};
  }
    
  addItem(itemName, quantity, price) {
    const itemPrice = price *= quantity;
    this.total += itemPrice;
    
    
    // check if item exits
    if(this.items.hasOwnProperty(itemName)) {
      this.items[itemName] += quantity;
    } else {
      this.items[itemName] = quantity;
    }
    
    return this.items;
  }
           
  removeItem(itemName, quantity, price) {
    this.total-= quantity * price;
    
    this.items[itemName] -= quantity;
    
    if(this.items[itemName] <= 0) {
      delete(this.items[itemName]);
    }
  }
  
}
  
const cart = new ShoppingCart();


cart.addItem('Mango', 3, 10);
cart.addItem('Mango', 3, 10);
cart.addItem('Orange', 2, 5);

console.log('items', cart.items, 'total', cart.total);

cart.removeItem('Orange', 1, 5);
cart.removeItem('Orange', 1, 5);
cart.removeItem('Mango', 1, 10);

console.log('items', cart.items, 'total', cart.total);

