//object
console.log(typeof null);

//underfined underfined
let a;
console.log(a, typeof a);

//55, 0
console.log("5" + 5, "5" - 5);

//true, false, true, true
console.log(5 == "5", 5 === "5", null == undefined, null == 0);
//ошибка в последнем так как null это буквально нет ничего, а 0 это falsy.

//false , false, true, false
console.log(Number(""), Number("12px"), Number(true), Number(undefined));

//true, Number
console.log(NaN === NaN, typeof NaN);
//Тут тоже ошибка, так как в стандартах js NaN не равняеться самому себе.

//2
const user = { n: 1 };
const copy = user;
copy.n = 2;
console.log(user.n);

//5
/*let x = 5;
let y = x;
y = 10;
console.log(x);*/

//false
//console.log({ a: 1 } === { a: 1 });

//false, true, true, false
console.log(Boolean(0), Boolean("0"), Boolean([]), Boolean(null));

//x, b, 0, 0
console.log(null || "x", "a" && "b", 0 && "b", "" || 0);

//run 6
let k = 5;
do {
  console.log("run");
  k++;
} while (k < 3);
console.log(k);

//2, 11
console.log(`${1 + 1}${"1" + 1}`);
//Тут я забыл что ${} превразает всё в текст что внутри, вот поэтому 1+1 это два, а рлюс между строкой и числом это значит склеивание ведь плюс превразает даже число в строку если плюсовать со строкой. И они находяться в одних скобках, а значит вместе.

//null, underfined, 1,2
console.log(`${null} ${undefined} ${[1, 2]}`);

//false, true 
console.log(3 > 2 > 1, 1 < 2 < 3);

//B
let x = 5;
if (x = 0) {
  console.log("A");
} else {
  console.log("B");
}
console.log(x);

//two, three
const v = 2;
switch (v) {
  case 1:
    console.log("one");
  case 2:
    console.log("two");
  case 3:
    console.log("three");
    break;
  default:
    console.log("d");
}

//1 5 9
for (let i = 1; i <= 10; i += 4) {
  console.log(i);
}

//2
let n = 3;
while (n > 0) {
  n--;
  if (n === 1) continue;
  console.log(n);
}

//3
let s = 0;
for (let i = 1; i <= 4; i++) {
  if (i === 3) break;
  s += i;
}
console.log(s);