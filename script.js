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