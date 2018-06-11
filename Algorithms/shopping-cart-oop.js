class ShoppingCart{
  constructor(){
    this.total = 0;
    this.items = {};
  }
    
  addItem(itemName, quantity,price){
    const itemPrice = price*=quantity;
    this.total+=itemPrice;
    this.items[itemName] = quantity;
    return this.items[itemName];
    }
  
removeItem(itemName, quantity, price){
      var deduction = quantity*price;
        this.total-= deduction;
    this.items[itemName]-= quantity;
      
      if(this.items[itemName] >= quantity){
        delete(this.items[itemName]);
      }
    }
  
    checkout(cash_paid){
      var balance = cash_paid - this.total;
      if (cash_paid < this.total){
        return 'Cash paid not enough';
      }
      return balance;
    }
    
  }
class Shop extends ShoppingCart{
  constructor(){
    super();
   this.quantity = 100;
    }
  removeItem(){
   this.quantity-=1;
  }
}
