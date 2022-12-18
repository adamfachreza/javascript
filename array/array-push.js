// memasukan data kesebuah array

function panggilPush(){
    var data =[1,2,3,4,5,6];

    data.push(7,'tambah')
    return data; // data yang di tambahkan otomatis masuk ke paling belakang
}

console.log(panggilPush())