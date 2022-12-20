
// Tugas : Balik Kata


// Hallo Teman-Teman, Setelah kita belajar bagaimana caranya membalik sebuah kata, sekarang Teman-Teman memiliki TUGAS yang sama yaitu untuk membuat sebuah fungsi yang ketika dijalankan akan menghasilkan kata terbalik.

// Buatlah sebuah function balikKata yang menerima satu parameter (kata)) berupa string dan mengembalikan (return) sebuah string yang telah dibalik urutannya.

// Contoh :

//  “Niomic!” menjadi “!cimoiN”
//  “JavaScript” menjadi “tpircSavaJ”
// “alohahola” menjadi “alohahola” 

function balikKata(kata){
    var array = kata.split(""); // pecah jadi array
    //console.log(array);
    var balik = array.reverse(); // katanya di balik
    var gabung = balik.join(' '); // ubah dari array ke stirng

    return gabung;

    return kata.split('').reverse().join('') // cara gampang

}

console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));


// Tugas : Balik Kata


// Hallo Teman-Teman, Setelah kita belajar bagaimana caranya membalik sebuah kata, sekarang Teman-Teman memiliki TUGAS yang sama yaitu untuk membuat sebuah fungsi yang ketika dijalankan akan menghasilkan kata terbalik.

// Buatlah sebuah function balikKata yang menerima satu parameter (kata)) berupa string dan mengembalikan (return) sebuah string yang telah dibalik urutannya.

// Contoh :

//  “Niomic!” menjadi “!cimoiN”
//  “JavaScript” menjadi “tpircSavaJ”
// “alohahola” menjadi “alohahola” 
// Lengkapilah code diatas, sehingga ketika dijalankan akan menghasilkan seperti dibawah ini, dengan Ketentuan :

// DILARANG menggunakan perintah : split(), reverse() dan join() 
// Silahkan menggunakan perintah perulangan seperti : for /  while / forEach()


// menggunakan for

function balik(kata){
    // for
    var string = "";
    for(var i = kata.length - 1; i >= 0; i--){
        string = string.concat(kata[i]);
    }
    console.log(string);

    //menggunakan while
    var a = "";
    var i = kata.length - 1;

    while (i >= 0){
        a = a.concat(kata[i]);
        i--;
    }
    console.log(a);

    // menggunakan foreach
    var b = Array.from(kata);
    var c = "";

    b.forEach(function(char, i){
        c = char + c;
    });
    console.log(c);
}

balik('Niomic!');
balik('JavaScript');
balik('alohahola')
balik('Jawa_Barat')
