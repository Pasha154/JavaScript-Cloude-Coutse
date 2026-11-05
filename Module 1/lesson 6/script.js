//EASY
//Прогноз Boolean(...) true: Boolean(1)true, Boolean(0)false, Boolean("")false, Boolean(" ")true, Boolean("0")true, Boolean(null)false, Boolean(undefined)false, Boolean(NaN)false

let a = Boolean(1);
let b = Boolean(0);
let c = Boolean("");
let d = Boolean(" ");
let e = Boolean("0");
let f = Boolean(null);
let g = Boolean(undefined);
let h = Boolean(NaN);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

//Три точки не могу звписать ошибка

//Прогноз Boolean([])true, Boolean({})true, Boolean(-1)false, Boolean("false")true
let value1 = Boolean([]);
let value2 = Boolean({});
let value3 = Boolean(-1);
let value4 = Boolean("false");
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);

//В прогнозах ошибся, но ошибку понял, из отрицательных только сам 0 равен false.

//MEDIUM
//Прогноз console.log("a" || "b") b, console.log("" || "b") b, console.log("a" && "b") a, console.log(0 && "b") 0, console.log(null || undefined) undefind
let z = console.log("a" || "b");
let x = console.log("" || "b");
let v = console.log("a" && "b");
let n = console.log(0 && "b");
let m = console.log(null || undefined); 

//Прогноз не совпал в двух местах, так как я перепутал && с ||, что только || выводит первое правдивое значение.


let nickname = "";
let userName = nickname || "Гость";
console.log(userName);
//Чтобы не делать 2 копии задания, оставля. своё имя, но я проверил всё как ты попросил, и у меня получилось!

//HARD
const cart = [1];
if(cart.length > 0){
	console.log("В корзине есть товары");
	
}else{
	console.log("Корзина пуста");
	
}
//Проверил как ты и сказал, у меня получилось! Ксли бы я просто бы написал if(cart), то у меня бы всегда срабатывало условие что "В корзине есть товары", потому что даже пустой массив считаеться truthy значением.

let count = 0;
const result = count || 10;
console.log(result);

//Получилось 10, это  баг, 0 допустимое значение, но оно falsy, а || возвращает первый truthy, но по сути клиент ожидал 0 и это проблема как раз тз за того что 0 falsy. Для этого нам понадобиться другой оператор(пока не изучал).
