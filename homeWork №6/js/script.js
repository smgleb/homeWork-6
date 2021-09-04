// N.06 Домашнее задание VOWELS
// 1.	Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
//             Регулярные выражения (кто умеет) не использовать.
//             Спросить у пользователя строку. Вывести в консоль количество русских                  гласных букв в ней.

let text = prompt('Напишите строку', 'Глеб');
function vowels(str) {
	let arr = [];
	for (let i = 0; i < str.length; i++) {
		arr.push(str[i]);
	}
	let count = 0;
	arr.forEach(function (elem) {
		if (elem === 'а' || elem === 'о' || elem === 'и' || elem === 'е' || elem === 'ё' || elem === 'э' || elem === 'ы' || elem === 'у' || elem === 'ю' || elem === 'я') {
			count++;
		}

	});

	return count;
}
console.log(vowels(text));


// 2.	У вас есть два массива. Один показывает имена людей, а другой показывает их род занятий. Ваша задача - создать объект, отображающий каждого человека по его роду занятий.
//             var names = ["Max", "Vera", "Joe", "Annette", "Sussan"]
//             var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

// combineNameWork (names, jobs) ➞ {
// Max: "Butcher",
// Vera: "Programmer",
// Joe: "Doctor",
// Annette: "Teacher",
// Sussan: "Lecturer"
// }

//Два массива имеют одинаковую длину.
//Индекс имени в массиве имен совпадает с индексом работы человека в массиве вакансий, как показано в таблице выше.

function combineNameWork(names, jobs) {
	let obj = {};
	names.map(function (elem, index) {
		return obj[elem] = jobs[index];
	})
	return obj;
}
console.log(combineNameWork(["Max", "Vera", "Joe", "Annette", "Sussan"], ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]))






// 3.	У вас есть входной массив(из строк с двумя буквами) и массив слов
// Напишите функцию, которая возвращает true, если каждую(строку с двумя буквами) из первого массива можно найти хотя бы один раз в массиве  слов(втором массиве).

// 	canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
// canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
// # "cu" не найден ни в одном из слов.
// 	canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
// canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false


function canFind(letter, word) {

	let result = letter.every(function (elem) {
		for (let i = 0; i < word.length; i++) {
			if (word[i].indexOf(elem) !== -1) {
				return elem
			}
		}
		return false;
	});
	return result
}
console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]));
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]));
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]));