let a = 10;
alert(a);
a = 20;
alert(a);

let iphoneReleaseYear = 2007;
alert(iphoneReleaseYear);

let creatorName = "Brendan Eich";
alert(creatorName);

let num1 = 10;
let num2 = 2;
alert(num1 + num2);
alert(num1 - num2);
alert(num1 * num2);
alert(num1 / num2);

let result = 2 ** 5;
alert(result);

a = 9;
let b = 2;
let remainder = a % b;
alert(remainder);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert("Вам " + age + " лет!");

let user = {
    name: "Матвей",
    age: 23,
    isAdmin: true
};
console.log(user);

let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);



let number = prompt("Загадайте любое число");
number = parseFloat(number);
let doubled = number * 2;
alert(doubled);

let addedTen = doubled + 10;
alert(addedTen);

let dividedByTwo = addedTen / 2;
alert(dividedByTwo);

let finalResult = dividedByTwo - number;
alert(finalResult);

alert("5");




let password = 'пароль';
let userInput = prompt('Введите пароль');

if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

let c = prompt('Введите число');
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = prompt('Введите любое число');
let e = prompt('Введите еще одно число');
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


let r = '2';
let t = '3';
console.log(Number(r) + Number(t));



let monthNumber = 12;

if (monthNumber > 12) {
    console.log('Некорректный номер месяца');
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default:
            console.log('Некорректный номер месяца');
    }
}
