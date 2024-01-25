//V Создаем корзинку.

let shoppingCart = {
  items: [],
  total: 0,

  addItem: function(name, price, quantity) {
    let item = {
      name: name,
      price: price,
      quantity: quantity
    };
    this.items.push(item);
    this.total += price * quantity;
  },

  //^Создаем функцию для того, что у нас будет в корзинке. Имя, цена и Кол-во.

  removeItem: function(name) {
    let index = this.items.findIndex(item => item.name === name);
    if (index !== -1) {
      let item = this.items[index];
      this.total -= item.price * item.quantity;
      this.items.splice(index, 1);
    }
  },

  //^Удаляем или продаём определенный товар. Зависит от того, просрочился или был продан данный товар.

  updateQuantity: function(name, quantity) {
    let item = this.items.find(item => item.name === name);
    if (item) {
      this.total -= item.price * item.quantity;
      item.quantity = quantity;
      this.total += item.price * item.quantity;
    }
  },

  //^Обновляем количество товаров.

  calculateTotal: function() {
    return this.total;
  },

  //^Подсчитываем тотальное кол-во товаров и возвращаем их.

  clearCart: function() {
    this.items = [];
    this.total = 0;
  },

  //^Очищаем корзину после покупок. 

};

  //Пример кода. 
  
  shoppingCart.addItem("Хлеб", 79, 4);
  shoppingCart.addItem("Мармелад", 49, 3);
  
  console.log("С Вас " +shoppingCart.calculateTotal() + " руб."); // выводит 350
  
  shoppingCart.updateQuantity("Хлеб", 5);
  
  console.log("С Вас " +shoppingCart.calculateTotal () + " руб."); // выводит 550
  
  shoppingCart.removeItem("Мармелад");
  
  console.log("С Вас " +shoppingCart.calculateTotal () + " руб."); // выводит 400
  
  shoppingCart.clearCart();
  
  console.log(shoppingCart.calculateTotal() + " руб."); // выводит 0
  
  
  