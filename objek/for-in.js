function forin(){
    var siswa = {
        nama:'adam',
        jurusan:'ik',
        ipk:{
            semester1:3.1,
            semester2:3.2,
            semester3:3.3,
        }
    }
    for(var x in siswa){
        console.log(siswa[x]) // tampilin semua nilai di objek siswa
    }
}

forin()