function Regexp(value){
    //var ambilData = value.match(/ke/g);//[ 'ke', 'ke' ] cari kata ke
    // var ambilData = value.match(/[ke]/g); //[ 'k', 'e', 'k', 'e' ] cari huruf tertentu
    // var ambilData = value.match(/[keaB4]/g); //'B', 'a', 'k','e', 'k', 'e','4' cari huruf tertentu
    //var ambilData = value.match(/[^ke]/g);// 'B', 'u', 'l', 'a','n', ' ', ' ', '1',' ', 's', 'd', ' ',' ', '4' // kecuali ke
    // var ambilData = value.match(/[a-i]/g); //[ 'a', 'e', 'd', 'e' ] antara a - i
    // var ambilData = value.match(/\w/g); // [ 'B', 'u', 'l', 'a', 'n', 'k', 'e', '1', 's', 'd', 'k', 'e', '4' ] // untuk mengambil semua karakter baik itu berupa huruf dan angka saja
    // var ambilData = value.match(/\d/g); // [ '1', '4' ] // untuk mengambil semua angka saja pada semua data
    //var ambilData = value.match(/\s/g); //[ ' ', ' ', ' ', ' ', ' ' ]Banyaknya Spasi :  5 untuk mengambil semua SPASI pada semua data dan juga menghitung juga jumlah spasinya
    //var ambilData = value.match(/\D/g); //  untuk mengambil semua karakter dan spasi KECUALI angka
    var ambilData = value.match(/\S/g); //untuk mengambil karakter KECUALI SPASI.

    console.log(ambilData);
}

 Regexp("Bulan ke 1 sd ke 4"); //

// function panggilRegex(){
//     var str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";

//     //console.log(str.match(/c/g));//[ 'c', 'c' ]
//     console.log(str.match(/c/));//  'c', index: 2,input: 'abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz',groups: undefined
// }

// panggilRegex()