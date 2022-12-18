// Buatlah perulangan array dengan forEach yang mana array didapat dari String “Saya ingin belajar bersama” sehingga jika ditampilkan akan seperti gambar berikut ini :

// Saya ingin belajar bersama 0
// Saya ingin belajar bersama 1
// Saya ingin belajar bersama 2
// Saya ingin belajar bersama 3

function tugas22(){
    var data = "Saya ingin belajar bersama"
    var array =data.split(" "); // string di ubah ke array
    console.log(array) // buat ngetes hasilnya
    var hasil = array.forEach(function(item,index){
        console.log('Item :', item ,'Index ke:', index); // terus di tampilin make foreach
    })
}
tugas22()