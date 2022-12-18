// fungsi pop bertujuan untuk menghilangkan nilai terakhir dalam array

function Pop(){
    var kota = ['jakarta','bandung','bogor','bekasi'];
    console.log('=================== Sebelum di Pop ===========')
    console.log(kota)
    console.log('=================== kota yang di pop ==========')
    var kota2 = kota.pop()
    console.log(kota2)
    console.log('=================== Sesudah di Pop ===========')
    kota.pop()
    return kota;
}

console.log(Pop())