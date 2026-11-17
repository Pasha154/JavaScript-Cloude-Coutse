const answer = prompt("Как вас зовут?");
let userName =
  answer === null || answer.trim() === "" ? "Гость" : answer.trim();
alert(`Привет, ${userName}!`);

let choice;
do {
  choice = prompt(`Мини-помощник
1 — Калькулятор возраста
2 — Конвертер валют
3 — Таблица умножения
4 — Проверка простого числа
0 — Выход`);

  switch (choice) {
    case "1":
      alert("Калькулятор возраста");
      break;

    case "2":
      alert("Конвертер валют");
      break;

    case "3":
      alert("Таблица умножения");
      break;

    case "4":
      alert("Проверка простого числа");
      break;

    case "0": //выход, ничего не показываем
    case null:
      break;

    default:
      alert("Выбран неверный пункт");
  }
} while (choice !== "0" && choice !== null);
alert(`Пока, ${userName}!`);
