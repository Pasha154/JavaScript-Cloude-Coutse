//Easy
let a = 15 % 4 ;
console.log(a);

let b = 2**10;
console.log(b);

let c = 17 / 5;
console.log(c);

let score = 50;
score += 10;
console.log(score);

//Medium
let d = 23;
let correct = d % 2 === 1 ;
console.log(correct);


let age = 18;
let hasPassport = true;
let isAdult = age >= 18 && hasPassport ;
console.log(isAdult);




//Hard
let result = 3 + 4 * 2 - 1 ** 3 % 2;
console.log(result);


//Объясни своими словами, почему if (x = 10) — частая ошибка новичков, и чем это отличается от if (x === 10)
//Новички путают присвоение с приравниванием, одно равно это мы например присваиваем к переменной число и что-либо(=). Приравнивание это например мы приравниваем два одинаковых числа, являються ли они одинаковыми(==/===)

let x = 5;
if (x = 10) {
  console.log("сработало");
}
console.log(x);