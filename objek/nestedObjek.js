function nested(){
    var mahasiswa = {
        nama: 'adi',
        ipk:{
            semester1:3.2,
            semester2:3.3,
            semester3:3.3,
        },
        jurusan:'It',
    }

    console.log(mahasiswa.ipk.semester2);
    console.log(mahasiswa.jurusan);
}

nested()