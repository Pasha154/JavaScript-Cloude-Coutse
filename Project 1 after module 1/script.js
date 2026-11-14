let name = prompt("Как вас зовут?");

if(name === null || name === ''){
	alert("Привет, Гость!");
}else{
	alert(`Привет, ${name} !`);
}

console.log(typeof(name));

//'' дало мне string поскольку по сути '' это строка. null дало object, это давняя ошибка в js, как т должно быть.

//null.trim() выдало ошибку, поскольку у null такого метода нет. Следовательно нам нужно сначало прверить, не равнеться ли значение null, а потои уже писать методы.

//string underfined null symbol number bigint boolean