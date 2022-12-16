function objek(){
    var mobil = {
        type : 'sedan', // type adalah properti //'sedan' adalah nilai
        harga: 200000, // harga adalah properti // 200000 adalah nilai
        warna: 'merah', // warna adalah properti // 'merah' adalah nilai
        tahun: [2001,2002,2003] //tahun adalah properti
    }

    mobil.warna = 'putih'; // merubah nilai properti yang semula merah menjadi putih

    console.log(mobil)
    console.log(mobil.warna) // manggil objek
    console.log(mobil.tahun[1]) // manggil array dalam objek
}

objek()