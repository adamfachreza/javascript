function objek(){
    var mobil = { // mobil itu objek
        type : 'sedan',
        harga: 200000,
        warna: 'merah',
        tahun: [2001,2002,2003]
    }

    mobil.merek = 'nisan'; //menambah properti

    console.log(mobil)
    console.log(mobil.harga) // manggil objek
    console.log(mobil.tahun[1]) // manggil array dalam objek
}

objek()