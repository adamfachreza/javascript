// shift berfungsi untuk menghilangkan nilai pertama pada array

function arrayshift(){
    var kota = ['jakarta', 'bandung','bogor','bekasi`'];

    console.log(kota); // nampilin nilai di variabel kota
    console.log('================')

    var kota2 = kota.shift(); 
    console.log(kota2) // nampilin nilai array yang di hapus
    console.log('================')

    return kota; // nampilin nilai array hasil shift sebelumnya
}

console.log(arrayshift())