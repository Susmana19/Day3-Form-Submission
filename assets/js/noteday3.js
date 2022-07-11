let age = 30

//CONDITION//
// if (age < 20) {
// console.log(`Umur kamu ${age}, kamu belum cukup umur`);
// } else if(age == 20) {
//     console.log(`Umur kamu ${age}, kamu sudah lebih dewasa`);
// } else {
//     console.log(`Umur kamu ${age}, kamu sudah lebih deewasa`)
// }

 //FUCTION//

// function greeting(yourName = `there!`) {
// console.log(`Hello ${yourName} `)
// }
// let myName = `Susmart`
// let herName = `Ulum`
// greeting(`Susmana`)
// greeting(`Mae`)
// greeting(`Naia`)
// greeting(`Dessy`)
// greeting()
// greeting(myName)
// greeting(herName)

function sum(a,b) {
    let result = a + b
    console.log(`${a} + ${b} = ${result}`)
}

sum(2, 4)
sum(3, 7)
sum(10, 9)

//Proses pengerjaan task 3
// di bagian button, type awalnya submit diganti menjadi type button.
// alasan : 
// submit behavior: website akan melakukan render atau reload.

// kita akan gunakan
// function onsubmit="getData()"

// di js buat function :
// function getData(){
// console.log("berhasil submit")
// }

// ketika dijalankan, akan ngereload tanpa sempat muncul di console.

// solusi bisa dilakukan, 
// function di html onsubmit="getData(event)"

// di js :
// function getData(event){
// event.preventDefault()
// console.log("berhasil submit")
// }
// akan mencancel proses reload


// !!!TIBA2 BERUBAH !!!///
//type="submit" diganti jadi type="button"!!!
//eventnya berubah: onclick="getData()"
// di JSnya parameter event dihapus
//event.preventDefault() dihapus

//DOM = Document Object Model
//ambil nilai thdp dari value
//mengambil data dari html di js : 
document.getElementById("name")

