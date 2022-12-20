// Perintah MAP juga digunakan untuk melakukan perulangan berdasarkan jumlah data array yang menjadi acuan dalam perulangan tersebut

//penulisan cepet
function map(){
    var kota = ['Jakarta','Depok','Medan'];
    kota.map((item,index,array)=>{
        console.log(item);
        console.log(index);
        console.log(array);
    });
 // penulisannya lama //
    var kota = ['Jakarta','Depok','Medan'];
    kota.map(function(item,index,array){
        console.log(item);
        console.log(index);
        console.log(array);
    });
}

map();

