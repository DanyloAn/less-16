// task 1
// var user = {
//   firstName: "Danylo",
//   lastName: "Andriichuk",
//   age: 19,
//   email: "dsadadsasd@gmail.com"
// };

// console.log(user);

// task 1*
// var user = {
//   username: "",
//   lastName: "",
//   email: "",

//   setUserDetails: function(username, lastName) {
//       this.username = username;
//       this.lastName = lastName;
//   },

//   setEmail: function(email) {
//       this.email = email;
//   },

//   displayWelcomeMessage: function() {
//       console.log("Вітаю, " + this.username + " " + this.lastName + "!");
//   },

//   getEmail: function() {
//       return this.email;
//   }
// };

// user.setUserDetails("Danylo", "Andriichuk");
// user.setEmail("dsadadsasd@gmail.com");

// user.displayWelcomeMessage();
// console.log("Email:", user.getEmail());

// task 2
// var productCatalog = {
//   products: [],

//   addProduct: function(productName, description, price) {
//       var product = {
//           name: productName,
//           description: description,
//           price: price
//       };
//       this.products.push(product);
//       console.log(`Продукт додано: ${productName}`);
//   },

//   removeProductByName: function(productName) {
//       var index = this.products.findIndex(function(product) {
//           return product.name === productName;
//       });
//       if (index !== -1) {
//           this.products.splice(index, 1);
//           console.log(`Продукт видаленно: ${productName}`);
//       } else {
//           console.log(`Продукта немає: ${productName}`);
//       }
//   },

//   removeAllProducts: function() {
//       this.products = [];
//       console.log("Всі продукти вилученно.");
//   },

//   displayProducts: function() {
//       console.log("Каталог продуктів:");
//       this.products.forEach(function(product) {
//           console.log(`Ім'я: ${product.name}, Опис: ${product.description}, Ціна: ${product.price}`);
//       });
//   }
// };

// productCatalog.addProduct("Молоко", "Упаковка козячого молока", 3.99);
// productCatalog.addProduct("Шпроти", "Баночка смачних шпотів з Карпат", 14.99);

// productCatalog.displayProducts();

// productCatalog.removeProductByName("Молоко");
// productCatalog.displayProducts();

// productCatalog.removeAllProducts();
// productCatalog.displayProducts();

// task 3
// const goods = {
//   products: [
//       { id: 1, name: "Смачна соковита цибулина", price: 10 },
//       { id: 2, name: "Сир з пліснявою", price: 20 },
//       { id: 3, name: "Херсонський артішок", price: 15 }
//   ],
//   getProductById: function(id) {
//       return this.products.find(product => product.id === id);
//   }
// };

// const customer = {
//   firstName: "",
//   lastName: "",
//   phoneNumber: "",
//   email: "",
//   selectedProducts: [],
//   totalCost: 0,

//   addProductToCart: function(productId, quantity) {
//       const product = goods.getProductById(productId);
//       if (product) {
//           this.selectedProducts.push({ ...product, quantity });
//           this.totalCost += product.price * quantity;
//           console.log(`Добавленно ${product.name} x${quantity} в корзину.`);
//       } else {
//           console.log("Продукт відсутній.");
//       }
//   },

//   removeProductFromCart: function(productId) {
//       const index = this.selectedProducts.findIndex(product => product.id === productId);
//       if (index !== -1) {
//           const removedProduct = this.selectedProducts.splice(index, 1)[0];
//           this.totalCost -= removedProduct.price * removedProduct.quantity;
//           console.log(`Прибрано ${removedProduct.name} з корзинки.`);
//       } else {
//           console.log("Продукт не знайдено в корзині.");
//       }
//   },

//   placeOrder: function() {
//       console.log("Деталі замовлення:");
//       this.selectedProducts.forEach(product => {
//           console.log(`${product.name} x${product.quantity}: $${product.price * product.quantity}`);
//       });
//       console.log(`Загальна вартість: $${this.totalCost}`);
//   }
// };

// customer.firstName = "Данило";
// customer.lastName = "Андрійчук";
// customer.phoneNumber = "0509867980";
// customer.email = "danuloaaaa@gmail.com";

// customer.addProductToCart(1, 2);
// customer.addProductToCart(2, 1);
// customer.placeOrder();

// customer.removeProductFromCart(1);
// customer.placeOrder();

// task 4
var authorization = {
  users: [],

  addUser: function (login, password) {
    var newUser = { login: login, password: password };
    this.users.push(newUser);
    console.log("Новий користувач успішно доданий");
  },

  getUser: function (login, password) {
    for (var i = 0; i < this.users.length; i++) {
      if (
        this.users[i].login === login &&
        this.users[i].password === password
      ) {
        return this.users[i];
      }
    }
    return null;
  },
};

function userAuthorization() {
  var userLogin = prompt("Введіть логін:");
  var userPassword = prompt("Введіть пароль:");
  var user = authorization.getUser(userLogin, userPassword);

  if (user) {
    alert("Доступ дозволено");
  } else {
    alert("Користувача з логіном " + userLogin + " не знайдено.");
    var register = confirm("чи хотіли б ви зареєструватись?");
    if (register) {
      var newPassword = prompt("Введіть пароль:");
      var confirmPassword = prompt("Підтверіть пароль:");
      if (newPassword === confirmPassword) {
        authorization.addUser(userLogin, newPassword);
        alert("Новий користувач успішно доданий");
        userAuthorization();
      } else {
        alert("Паролі не збігаються. Будь ласка спробуйте ще раз.");
      }
    }
  }
}

userAuthorization();
