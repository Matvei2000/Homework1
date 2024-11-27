// let a = 10;
// alert(a);
// a = 20;
// alert(a);

// let iphoneReleaseYear = 2007;
// alert(iphoneReleaseYear);

// let creatorName = "Brendan Eich";
// alert(creatorName);

// let num1 = 10;
// let num2 = 2;
// alert(num1 + num2);
// alert(num1 - num2);
// alert(num1 * num2);
// alert(num1 / num2);

// let result = 2 ** 5;
// alert(result);

// a = 9;
// let b = 2;
// let remainder = a % b;
// alert(remainder);

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);

// let age = prompt("Сколько вам лет?");
// alert("Вам " + age + " лет!");

// let user = {
//     name: "Матвей",
//     age: 23,
//     isAdmin: true
// };
// console.log(user);

// let userName = prompt("Как вас зовут?");
// alert(`Привет, ${userName}!`);



// let number = prompt("Загадайте любое число");
// number = parseFloat(number);
// let doubled = number * 2;
// alert(doubled);

// let addedTen = doubled + 10;
// alert(addedTen);

// let dividedByTwo = addedTen / 2;
// alert(dividedByTwo);

// let finalResult = dividedByTwo - number;
// alert(finalResult);

// alert("5");

let userInput = prompt("Пожалуйста, введите любое число:");

let number = Number(userInput);

if (isNaN(number)) {
    alert("Вы ввели не число. Пожалуйста, попробуйте снова.");
} else {

    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

let c = 2;

if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let testValues = [0, 10, -3, 2];
testValues.forEach(value => {
    c = value;
    if (c > 0 && c < 10) {
        console.log(`c = ${c}: Верно`);
    } else {
        console.log(`c = ${c}: Неверно`);
    }
});

let d = prompt("Введите первое число");
let e = prompt("Введите второе число");

if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = prompt("Введите номер месяца");
let numberMonth = Number(monthNumber);

if (monthNumber < 1 || monthNumber > 12) {
    console.log("Ошибка: номер месяца должен быть от 1 до 12.");
} else {
    switch (numberMonth) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
        default:
            console.log("Ошибка: номер месяца должен быть от 1 до 12.");
    }
}