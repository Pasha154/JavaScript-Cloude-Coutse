//EASY
//Есть const temp = 25;. Выведи "Жарко", если больше 30, "Тепло", если от 15 до 30 включительно, иначе "Холодно". Проверь на 35, 25, 15, 5.
const temp = 5;
if (temp > 30) {
  console.log("Жарко");
} else if (temp >= 15 || temp === 30) {
  console.log("Тепло");
} else {
  console.log("Холодно");
}

//Через switch выведи название дня недели по числу от 1 до 7. Для других чисел выведи "Нет такого дня". Проверь 1, 7, 8.
const day = 7;

switch (day) {
  case 1:
    console.log("Понедельник");

    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;

  default:
    console.log("Нет такого дня");

    break;
}

//Через тернарный оператор положи в переменную type строку "чётное" или "нечётное" для числа n. Проверь на 4 и 7.
const n = 7;
const type = n % 2 === 0 ? "Чётное" : "Нечетное";
console.log(type);

//MEDIUM
//Оценка по баллам: 90 и выше это A, 80-89 это B, 70-79 это C, ниже это D. Проверь границы: 90, 89, 80, 79, 70, 69. 5. Через switch с fallthrough: для чисел 6 и 7 выведи "Выходной", для 1-5 "Рабочий день". Проверь 3, 6, 7. 6. Выведи через шаблонную строку и тернарный оператор: Привет, <имя>! Ты <взрослый/ребёнок>. для разных name и age.
const grade = 69;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80 ) {
  console.log("B");
} else if (grade >= 70 ) {
  console.log("C");
} else {
  console.log("D");
}

const weekday = 7;
switch (weekday) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Рабочий день");
    break;
  case 6:
  case 7:
    console.log("Выходные дни");
    break;

  default:
    console.log("Нет такого дня");

    break;
}

const name = "Коля";
const age = 21;
const userName = "Витя";
const userAge = 15;

console.log(`Привет ${name}, ты ${age >= 18 ? "Взрослый" : "Ребенок" }`);

//HARD 
//FizzBuzz для одного числа n: если n делится на 3 и на 5, выведи "FizzBuzz", если только на 3 "Fizz", если только на 5 "Buzz", иначе само число. Проверь на 15, 9, 10, 7. Подумай, в каком порядке расставить проверки. 8. Високосный год: год високосный, если он делится на 4, но не делится на 100, либо делится на 400. Выведи true или false через переменную isLeap. Проверь 2000, 1900, 2024, 2023. Сначала запиши ожидаемый результат для каждого. 9. Запиши прогноз и проверь: console.log(3 > 2 > 1) и console.log(1 < 2 < 3). Объясни результат словами.
const a = 7;
if (a % 3 === 0 && a % 5 === 0) {
	console.log("FizzBuzz");
} else if(a % 3 === 0){
	console.log("Fizz");
}else if(a % 5 === 0){
	console.log("Buzz");
	
}else{
	console.log(a);
	
}

const year = 2024; 
let isLeap ="";
if (year % 4 === 0 && year % 100 !== 0 ) {
	isLeap = true;
	
}else if(year % 400 === 0){
	isLeap = true;
	
}else{
	isLeap = false;
	
}

console.log(isLeap);

console.log(3 > 2 > 1);//false //Тут так потому что 3>2 это true, true приводит к true >1, а это получается 1>1 а это уже false. Для того чтобы всё работало правильно нужно поставить &&
console.log(1 < 2 < 3);//true