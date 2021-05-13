// Пример1
// Напишите две функции:
// letMeSeeYourName(callback) - спрашивает имя пользователя 
// через prompt и вызывает коллбек ф - цию callback
// greet(name) - коллбек принимающий имя и логирующий в консоль 
// строку "Привет" + name
// ---------------------------------------------------------------------------------------------------------
// let letMeSeeYourName(callback){

// }
// let name = prompt("Ваше имя?", "");
// alert(name);

// ==========================================================================================================
// Пример2:
// Напишите две функции:
// makeProduct(name, price, callback) - принимает имя и цену 
// товара, а также колбек.Функция создаёт обьект товара, 
// добавляя ему уникальный идентификатор в свойство id и 
// вызывает колбек передавая ему созданный обьект.
// showProduct(product) - коллбек принимающий обьект продукта 
// и логирующий его в консоль
// ----------------------------------------------------------------------------------------------------------

// ===========================================================================================================
// Пример 3:
// Выполните рефакторинг функции makeDishWithShef(shefName,
// dish) так, чтобы не нужно было каждый раз передавать имя
// шефа.Напишите функцию makeShef(shefName), которая возвращает 
// другую функцию makeDish(dish), помнящую имя шефа при её вызове.
// function makeDishWithShef(shefName, dish) {
//     console.log(`Шеф ${shefName} готовит ${dish}`);
// }
// makeDishWithShef('Поли', 'пирожок');
// makeDishWithShef('Поли', 'чай');
// makeDishWithShef('Манго', 'тортик');
// makeDishWithShef('Манго', 'кофе');
// ----------------------------------------------------------------------------------------------------------

// ==========================================================================================================
// Пример 4 (this):
// Исправьте ошибки чтобы код работал.
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   }
// }
// product.showPrice();
// ---------------------------------------------------------------------------------------------------------

// =========================================================================================================
// Пример 5 - Привязка контекста
// Исправьте ошибки чтобы код работал.
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   }
// }
// function callAction(action) {
//   action();
// }
// callAction(product.showPrice);
// ----------------------------------------------------------------------------------------------------------
// Колбэк-функция
// Колбэк-функция

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order (pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
  
//       return onError(`В ассортименте нет пиццы с названием ${pizzaName}`);
//     },
// };

// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }


// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));
//============================================================

// Дополни функцию composeMessage(position) так, чтобы она
// возвращала строку в формате 'Готовим <блюдо> для <почта>.
// Ваш заказ < позиция > -й в очереди.' Позиция это значение 
// параметра position - позиция элемента в массиве(на единицу 
// больше чем индекс).

// Не объявляй дополнительные параметры функции
// composeMessage(position).Используй call для вызова функции
// в контексте одного объекта - заказа.Используй this в теле
// функции для доступа к свойствам объекта - заказа в контексте
// которого она была вызывана.Дополни код так, чтобы в
// переменной messages получился массив сообщений о статусе
// заказов из массива orders с помощью цикла for.
// ----------------------------------------------------------------------------------------------------------

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }
// const messages = [];

// for (let i = 0; i < orders.length; i+=1) {
  
//   const fnA = composeMessage.call(orders[i], [i + 1])
//   messages.push(fnA); 
// }

// console.log(messages)
// =============================================================

/*Сервису рассылки электронной почты необходимо добавить
 логирование действий для сбора статистики. Функция 
 logAndInvokeAction(email, action) ожидает почту и действие 
 которое нужно выполнить - ссылку на метод объекта service. 
 Сбор статистики симулируется логированием строки. Разберись 
 и дополни код так, чтобы он работал верно.*/
//  ---------------------------------------------------------
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
// ============================================================

/*С помощью Function Declaration напиши функцию-конструктор
Storage, которая будет создавать объекты для управления складом 
товаров. Функция ожидает только один аргумент - начальный массив 
товаров, который записывается на создаваемый объект в свойство 
items.

Добавь методы на прототип:

getItems() - возвращает массив текущих товаров в свойстве items 
объекта, который вызывает этот метод.
addItem(newItem) - принимает новый товар newItem и добавляет его 
в массив товаров в свойстве items объекта, который вызывает этот 
метод.
removeItem(item) - принимает товар item и удаляет его из массива
 товаров в свойстве items объекта, который вызывает этот метод.
Под комментарием мы добавили инициализацию экземпляра и вызовы 
методов в той последовательности, в которой твой код будут 
проверять тесты. Пожалуйста ничего там не меняй. */
// ----------------------------------------------------------

/*function Storage (items) {
   
  this.items = items;  
}

  Storage.prototype.getItems = function() {
    return this.items;
    }
      
  Storage.prototype.addItem = function (newItem) {
    return this.items.push(newItem);
  }

  Storage.prototype.removeItem = function (item) {
    
    var index = this.items.indexOf(item);
  if (index > -1) {
    this.items.splice(index, 1);
  }
  return this.items;
  }
*/


// ----------------test---------------------------

// Storage.prototype.hasOwnProperty('getItems')
// возвращает true
// Storage.prototype.hasOwnProperty('addItem')
// возвращает true
// Storage.prototype.hasOwnProperty('removeItem')
// возвращает true
// Storage.prototype.isPrototypeOf(storage)
// возвращает true
// У объекта storage есть свойство items

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// =============================================================
// function StringBuilder(baseValue){
// 	this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function() {
//     return this.value;
//     }
// StringBuilder.prototype.padEnd = function(str) {
//     return this.value = `${this.value}${str}`;
//     }
// StringBuilder.prototype.padStart = function(str) {
//     return this.value = `${str}${this.value}`;
//     }
// StringBuilder.prototype.padBoth = function(str) {
//     return this.value = `${str}${this.value}${str}`;
//     }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='
// ======================================================

// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }


//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   };

//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   };
// }
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// console.log(Storage.prototype.hasOwnProperty('getItems'))
// ============================================================

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
  
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' }
// }

// console.log(Admin.AccessLevel.BASIC)
// ========================================================

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(function(orderedItem) {
    totalPrice += orderedItem;
  });

  // Пиши код выше этой строки
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));//138
console.log(calculateTotalPrice([164, 48, 291]));//503
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));//1116