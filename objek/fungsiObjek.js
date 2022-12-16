function panggil(){
    var x = {
        pesan: pesan(), // manggil return dari fungsi pesan
    }
    console.log(x.pesan);
}

function pesan(){
    return "halo saya dari fungsi pesan"
}

// panggil()
