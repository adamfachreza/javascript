// Tugas 26 Javascript

// Periksalah apakah Infinity atau Not Infinity dari deret bilangan 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16

function tugas26(){
    var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

    var h = isFinite(angka);
    angka.forEach(function(ak,is){
        var is = isFinite(angka);
        console.log('Angka', ak);
        if(is='false')console.log('Not Infinity')
        else console.log('Infiniti');
    });


   
}
tugas26()