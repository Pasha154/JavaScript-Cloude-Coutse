//Easy
//Мои ответы до решения: 5 === 5(true), 5 === "5"(false), 5 == "5"(true), 0 == false(true), 0 === false(false).
let a = 5 === 5;
let b = 5 === "5";
let c = 5 == "5";
let d = 0 == false;
let e = 0 === false;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

////Мои ответы до решения: "5" + 5("55"), "5" - 5(0), "5" * "2"(10), true + 1(2)
let one = "5" + 5;
let two = "5" - 5;
let three = "5" * "2";
let four = true + 1;
console.log(one);
console.log(two);
console.log(three);
console.log(four);

//Medium
//Мои ответы до решения:Number("")(NaN), Number("12px")(NaN), Number(null)(NaN), Number(undefined)(NaN), Number(true)(NaN)
let q = Number("");
let w = Number("12px");
let r = Number(null);
let y = Number(undefined);
let u = Number(true);
console.log(q);
console.log(w);
console.log(r);
console.log(y);
console.log(u);
//Прогноз не совпал, так как я думал что в Number должны лежать исключительно цифры.

//Мои ответы до решения:null == undefined(true), null === undefined(false), null == 0(true), NaN === NaN(false), typeof NaN(false).
let z = null == undefined;
let x = null === undefined;
let v = null == 0;
let n = NaN === NaN;
console.log(z);
console.log(x);
console.log(v);
console.log(n);
console.log(typeof NaN);

//Не совпало 2 прогноза про null не понял, про typeof NaN ЗАБЫЛ ЧТО ОНО ВЫСВЕЧИВАЕТЬСЯ КАК nUMBER

//HARD
let input = "15";
let solve = Number(input) + 10;
console.log(typeof solve);
console.log(solve);
//Если бы мы просто написали input + 10, то получилось бы склеивание, так как input в проэктах всегда возвращает строку.

let value = Number("Hello");
console.log(value === NaN);//false не работает

console.log(Number.isNaN(value));

//Объясни своими словами (без кода): почему "5" + 5 и "5" - 5 дают разные результаты и какое правило выбрать между == и === в реальном проекте.

//"5" + 5 склеивает значение когда мы пытаемся к строке добавить число, а "5" - 5 превразает всегда строку в число. В реальном проэкте всегда стоит выбирать строгое === сравнение, иначе много чего может сломаться, так как нестронок равно работает иначе.


let inputone = "3";
let inputtwo = "7";
let result = Number(inputone) + Number(inputtwo);
console.log(result);



