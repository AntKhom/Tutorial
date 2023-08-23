// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length > maxLength) {
//     result = message.slice(0, maxLength);
//   } else {
//     result = message;
//   }
//   /// Change code above this line
//   return result;
//   console.log(result);
// }
// formatMessage("Curabitur ligula sapien", 16);


// // confirm('uuu');
// // let a = prompt('yyy');
// // a = Number(a);
// // console.log(typeof a, a);

// // let salary = 1300.6074;
// // salary = salary.toFixed(2);
// // salary = Number(salary);
// // console.log(salary, typeof (salary));

// //2**3 степень два в кубе */

// const max = 70;
// const min = 20;
// console.log(Math.round(Math.random() * (max - min) + min));


// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550


// function getExtremeElements(array) {
//   // Change code below this line
//   const newArray = [array[0], array[array.length - 1]];

//   return newArray
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function slugify(title) {

//   return title.split(" ").join("-").toLowerCase();


//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));


// function calculateTotal(number) {
//   // Change code below this line
//   let Total = 0;
//   for (let i = number; i > 0; i -= 1) {
//     Total = Total + i;
//   }
//   return Total;
//   console.log(Total);

//   // Change code above this line
// }


// calculateTotal(3);

// function findLongestWord(string) {
//   // Change code below this line
//   let array = string.split(" ");
//   let maxLetters = 0;
//   let maxWord;
//   for (let i = 0; i < array.length; i += 1) {

//     if (maxLetters < array[i].length) {
//       maxLetters = array[i].length;
//       maxWord = array[i];
//     };
//   };
//   return maxWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // numbers.push(min, max);
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   };
//   // Change code above this line
//   return numbers;
// };

// console.log(createArrayOfNumbers(5, 27));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = [];
//   for (const product of products) {
//     // array.push(product.[propName]);
//     array.push(product[propName]);
//   };
//   return array;


//   // Change code above this line
// }
// getAllPropValues("category");


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const compl = { category, priority, ...data };
//   console.log(compl);
//   return compl;

//   // Change code above this line
// }

// makeTask({});

// function add(...args) {
//   let total = 0;
//   for (let i = 0; i<args.length; i +=1) {
//     total += args[i];
//   };
//   console.log(total);
//   return total;
  
//   // Change code above this line
// }

// add(74, 11, 62, 46, 12, 36);


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const index = this.books.indexOf(oldName);
//     this.books.splice(index,1,newName);
    
//     console.log(this.books);


//     // Change code above this line
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       };
//     };
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i+=1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i,1);
//       };
//     };
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i+=1) {
//       if (this.potions[i].name === oldName) {
//         this.potions.splice(i, 1, { name:newName });
//       };
//     };
//   },
//   // Change code above this line
// };
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// console.log(atTheOldToad);

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] + value);
//     };
//     newNumbers.push(numbers[i]);
//   };
//   return newNumbers;
//   // Change code above this line
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10));


// //uniq filter
// // const allGenres = books.flatMap(book=>book.genres);
// // const uniqueGenres = allGenres.filter((genre, index, genres)=>genres.indexOf(genre)===index);


// //Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends).
// //У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
// const getFriends = (users) => {return users
//     .flatMap(user=>user.friends)
//     .filter((friend,index,array)=>array.indexOf(friend)===index);
   
// };


// const getTotalFriendCount = users => {return users.reduce((total, user)=>{
//   total + user.friends.length;
// },0)
   
// };



// const pip = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// console.log(getTotalFriendCount(pip));

// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });


// User.getName = function(user) {
//   return user.name;
// };
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email);
// console.log(mango);
// console.dir(User);
// console.log(User.getName(mango));


// class User {
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
// // Change code below this line
// class Admin extends User {
//   constructor(AccessLevel) {
//     this.AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
//   }
// }

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line
  blacklistedEmails=[];

 
  
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

   blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
