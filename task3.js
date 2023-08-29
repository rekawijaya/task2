
//  TASK3 
// FUNCTION MEBUAT NAMA DAN MENGHITUNG HURUF DALAM STRING
console.log('===FUNCTION STRING===')

console.log("============ MANIPULASI STRING ==============");
const input = "reka wijaya"
function uppercase(input) { // function uppercase
    let result = input.toUpperCase();
    return result;
}

function lowercase(input) { // function lowercase
    let result = input.toLowerCase();
    return result;
}

function length(input) { // function length
    let result = input.length;
    return result;
}

function firstLetter(input) { // huruf pertama
    let result = input[0];
    return result;
}

function cut(input, num1, num2) { // potongan nama
    let result = input.slice(num1,num2);
    return result;
}

function loveJs(input) { // + "Love Javascript"
    let result = input.slice(0, 5) + " Love Javascript";
    return result;
}

function lastLetter(input) { // huruf terakhir
    let result = input[input.length-1]
    return result;
}

console.log(uppercase(input));
console.log(lowercase(input));
console.log(length(input));
console.log(firstLetter(input));
console.log(cut(input, 0,5 ));
console.log(loveJs(input));
console.log(lastLetter(input));

console.log("============ MENGUBAH TIPE DATA ==============");
let convertStringAge = function(inputAge) {
    let number = parseInt(inputAge);
    return number;
  };
  let stringAge = "28";
  let convertedAge = convertStringAge(stringAge);
  
  if (convertedAge !== null) {
    console.log("umur saya:",convertedAge);
  }
  
  let convertToFloat = function(inputString) {
    let floatValue = parseFloat(inputString);
    return floatValue;
  };
  
  let convertTinggiToFloat = function(tinggiString) {
    let tinggiFloat = convertToFloat(tinggiString);
    return tinggiFloat;
  };
  
  let tinggi = "175.5";
  let tinggiFloat = convertTinggiToFloat(tinggi);

  console.log("Tinggi dalam bentuk string:", tinggi);
  console.log("Tinggi dalam bentuk float:", tinggiFloat);
  

console.log("============ PENGECEKAN TIPE DATA ==============");
let checkType = function(value) {
    console.log(typeof value);
  };
  
  let data = true;
  let data2 = "string";
  let data3 = 123;
  let data4 = ['123', 12, true];
  
  checkType(data);
  checkType(data2);
  checkType(data3);
  checkType(data4);
  

console.log("============ PENJUMLAHAN DAN PENGURANGAN ==============");

let calculateAndPrint = function(number1, number2) {
    let hasilTambah = number1 + number2;
    let hasilKurang = number1 - number2;
  
    console.log("Hasil Penjumlahan:", hasilTambah);
    console.log("Hasil Pengurangan:", hasilKurang);
  };
  
  let num1 = 10;
  let num2 = 5;
  calculateAndPrint(num1, num2);

//   PERKALIAN DAN PEMBAGIAN

  let calculateResult = (num1, num2) => {
    console.log("====PERKALIAN DAN PEBAGIAN====");
    let hasilPerkalian = num1 * num2;
    let hasilpembagian = num1 / num2;
    console.log("hasil 10 * 2 adalah:", hasilPerkalian);
    console.log("hasil 10 / 2 adalah:", hasilpembagian);
  };
  calculateResult(10, 2);

//   PANGKAT BILANGAN

  let calculatePowerAndPrint = (base, exponent) => {
    console.log("====PANGKAT BILANGAN====");
    let result = Math.pow(base, exponent);
    console.log("hasil 3 pangkat 4 adalah:", result);
  };
  
  calculatePowerAndPrint(3, 4);
  
  
//   RATA RATA ARRAY
console.log("====RATA RATA ARRAY====")
function average(numbers) {
    let total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let average = total / numbers.length;
  
    console.log("[5, 8, 12, 4, 6] \nRata-rata dari angka-angka \ndi dalam array di atas \nadalah:", average);
  }

  average([5, 8, 12, 4, 6]);

//   GANJIL GENAP
console.log("====GANJIL GENAP====")
  function isEven(num) {
    if (num % 2 === 0) {
      console.log(num + ' adalah bilangan GENAP');
    } else {
      console.log(num + ' adalah bilangan GANJIL');
    }
  }
  
  isEven(7);

//   BILANGAN RANDOM 
console.log("====BILANGAN RANDOM====")
function getRandomNumber() {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    console.log(randomNum);
  }
  
  getRandomNumber();

//CONVERSI FAHRENHEIT KEDALAM CELCIUS
console.log("====CONVERSI FAHRENHEIT KE CELCIUS====")
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  console.log(convertCelsiusToFahrenheit(20));

//   PANGKAT SEDERHANA

console.log("===PANGKAT SEDERHANA====")
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  
  console.log(power(2, 3));


//   CHEK HURUF VOKAL
console.log("===CHEK HURUF VOKAL====")
function isVocal(letter) {
    const vocal = ["a", "e", "i", "o", "u"];
    return vocal.includes(letter);
  }
  
  function isConsonant(letter) {
    return !isVocal(letter);
  }
  
  const alfabeth = "A"
  const inputText = alfabeth.toLocaleLowerCase()
  
  if (isVocal(inputText)){
    console.log(inputText + " adalah huruf vokal")
  }
 
  else {
    console.log(inputText + " adalah huruf konsonan")
  }