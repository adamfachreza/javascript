// sama seperti push tapi splice bisa milih data yang di tambah mau di masukin ke urutan berapa
// selain untuk menambahkan data, splice dapat di gunakan untuk menghapus data di indeks tertentu dalam array

function panggilSplice(){
    var data = [0,1,2,3,4,5,6];

    // data.splice(2,0,'splice')  // splice akan di tambah setelah angka satu
    // data.splice(2,1,'splice')  // splice akan di tambah setelah angka satu dan data menghapus 1 data di depannya (angka 2)
    // data.splice(2,2,'splice')  // splice akan di tambah setelah angka satu dan menghapus 2 data setelahnya (angka 2 dan 3)
    // data.splice(2,3,'splice')  // splice akan di tambah setelah angka satu dan data menmenghapus 3 data setelahnya (angka 2,3,4)
    data.splice(0,2) // menghapus data dalam array, contoh ingin menghapus data dari index ke 0 dan 2 data yang di hapus
    return data
}

console.log(panggilSplice())