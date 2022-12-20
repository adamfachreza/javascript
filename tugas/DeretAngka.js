// Study Kasus : Manipulasi Deret Angka


// Hallo Teman-Teman, Sekarang kita akan membuat sebuah function “deretAngka” yang menerima satu parameter (n) berupa integer dan akan menghasilkan deret angka dari satu sampai panjangnya sesuai dengan parameter (n) yang diinputkan tersebut,

// Dimana hasil deret angka tersebut memiliki ketentuan sebagai berikut :

// Jika angka dalam deret angka tersebut adalah kelipatan 3, maka nilai tersebut akan diganti menjadi “NIO”
// Jika angka dalam deret angka tersebut adalah kelipatan 5, maka nilai tersebut akan diganti menjadi “MIC”
// Jika angka dalam deret angka tersebut BUKAN Kelipatan 3 dan 5, maka print angka tersebut

// Contoh :

// Angka 3, 6 dan 9 menjadi “NIO” karena adalah kelipatan 3.
// Angka 5 dan 10 menjadi “MIC” karena adalah kelipatan 5

function niomic(n){
    for(var i = 1; i<n; i++){
       if(i % 3 === 0){
            console.log('Nio')
        }else if(i % 5 === 0){
            console.log('Mic')
        }else console.log(i)
    }
}

niomic(10);
niomic(20);
niomic(30);

// Hallo Teman-Teman, Sekarang teman-teman memiliki tantangan untuk membuat sebuah function “deretAngka” yang menerima satu parameter (n) berupa integer dan akan menghasilkan deret angka dari satu sampai panjangnya sesuai dengan parameter (n) yang diinputkan tersebut,

// Dimana hasil deret angka tersebut memiliki ketentuan sebagai berikut :

// Jika angka dalam deret angka tersebut adalah kelipatan 3, maka nilai tersebut akan diganti menjadi “NIO”
// Jika angka dalam deret angka tersebut adalah kelipatan 5, maka nilai tersebut akan diganti menjadi “MIC”
// Jika angka dalam deret angka tersebut adalah kelipatan 3 dan 5, maka nilai tersebut akan diganti menjadi “NIOMIC”
// Jika angka dalam deret angka tersebut BUKAN Kelipatan 3 dan 5, maka nilai angka tersebut tidak diganti.

// Contoh :

// Angka 3, 6 dan 9 menjadi “NIO” karena adalah kelipatan 3
// Angka 5 dan 10 menjadi “MIC” karena adalah kelipatan 5
// Angka 15 menjadi “NIOMIC” karena merupakan kelipatan 3 dan 5.

function niomic2(n){
    for(var i = 1; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('NioMic')
        }else if(i % 3 === 0){
            console.log('Nio')
        }else if(i % 5 === 0){
            console.log('Mic')
        }else console.log(i)
    }
}

niomic2(10);
niomic2(20);
niomic2(30);