//  STRING
// MANIPULASI STRING
console.log("====STRING====")
let nama = "Reka wijaya"
console.log(nama.length)

let namaUppercase = nama.toUpperCase()
console.log(namaUppercase)
let namaFirstIndex = nama[0]
console.log(namaFirstIndex)
let namaFirstword = nama.substring(0, 4)
console.log(namaFirstword)

let text = "love javascript"
    namaMix = nama + " " + text
console.log(namaMix)
let namaLastIndex = nama[nama.length - 1]
console.log(namaFirstIndex)


// MENGUBAH TIPE DATA
console.log("====MENGUBAH TYPE DATA====")
let umur = "28"
let changeString = parseInt(umur)
console.log(changeString)
let tinggi = "184.65"
let tinggiFloat = parseFloat(tinggi)
console.log(tinggiFloat)

//PENGECEKAN TIPE DATA
console.log("====PENGECEKAN TIPE DATA====")
let data = true
let data2 = "string"
let data3 = 123
let data4 = ['123', 12, true]
console.log(typeof data)
console.log(typeof data2)
console.log(typeof data3)
console.log(typeof data4)


//NUMBER
// PENJUMLAHAN DAN PENGURANGAN
console.log("====NUMBER====")
console.log("====PENJUMLAHAN DAN PENGURANGAN====")
let num1 = 10 
let num2 = 5
let hasilTambah = num1 + num2
let hasilKurang = num1 - num2
console.log(hasilTambah)
console.log(hasilKurang)

// PERKALIAN DAN PEBAGIAN
console.log("====PERKALIAN DAN PEBAGIAN====")
let hasilPerkalian = num1 * num2
let hasilpembagian = num1 / num2
console.log(hasilPerkalian)
console.log(hasilpembagian)

//PANGKAT BILANGAN 
console.log("====PANGKAT BILANGAN====")
let base = 3
let exponent = 4
let result = Math.pow(base, exponent)
console.log(result)

//RATA-RATA DARI ARRAY
console.log("====RATA-RATA DARI ARRAY====")
let numbers = [5, 8, 12, 4, 6];
let total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let average = total / numbers.length;

console.log("[5, 8, 12, 4, 6] \nRata-rata dari angka-angka \ndi dalam array di atas \nadalah:", average);


//BILANGAN GANJIL ATAU GENAP
console.log("====BILANGAN GANJIL ATAU GENAP====")
let num = 7 
if(num % 2 === 0){
    console.log(num +' adalah bilangan GENAP')
}
else{
    console.log(num + ' adalah bilangan GANJIL')
}

//RANDOM
console.log('====RANDOM====')
let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

// ATAU

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber2 = generateRandomNumber(1, 5);

console.log(randomNumber2);
