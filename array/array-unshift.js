// kebalikan dari shift. ini bertujuan untuk menambahkan data di bagian depan

function tambahUnshift(){
    var data = ['jakarta','bandung','bogor'];
    console.log(data)
    data.unshift('depok','bekasi')
    return data
}

console.log(tambahUnshift())