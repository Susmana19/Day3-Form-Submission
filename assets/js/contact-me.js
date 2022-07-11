function getData() {
// DOM = document object model
//Get Data
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
   
    // console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(subject);
    // console.log(message);

//Reset Form
    // console.log(name)
    // let form = document.getElementById("form-contact").value
    // form.reset()
    //tambahkan prevent default

//Validasi Data
    //type submit diubah menjadi button
    // if (name) {
    //     console.log(name);
    // } else {
    //     console.log("Nama Kosong");
    // }
//return jika name kosong
    if(!name){
        return alert("Nama tidak boleh kosong")
    }
    if(!email) {
        return alert("Email tidak boleh kosong")
    }
    if(!phone) {
        return alert("Nomor Telepon tidak boleh kosong")
    }
    if(!subject) {
        return alert("Subject tidak boleh kosong")
    }
    if(!message) {
        return alert("Silahkan isi pesanmu")
    }
    
//kirim ke email

let emailReceiver = "msusmana@gmail.com"

let a = document.createElement('a')
a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, ${message}, this is my phone number ${phone}`
console.log(a);
a.click()

}
