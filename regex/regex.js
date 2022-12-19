//regex atau reguler expression yg sering digunakan untuk mencari atau mengganti pada data string  
function regex(){
    var a = 'abcdef';

    console.log(a.search(/A/)); // kalo g ada outputnya jadi -1
    console.log(a.search(/a/));
    console.log(a.search(/e/i)); // i berfungsi untuk menjadikan keyword / kata kunci dalam pencarian menjadi tidak case-sensitive
}

regex(); // output 0, karena a di indeks 0
