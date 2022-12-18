// Tugas 13 JS


// 1. Pastikan Teman Teman Sudah Menginstall Node JS

// 2. Teman - Teman Buatlah File di Folder javascript teman teman sebuah file dengan nama file tugas13.js

// 3. Buatlah Program Dengan Spesifikasi dibawah ini :

// Teman teman buatlah sebuah variabel array dengan 2 buah nama buah buahan pisang , jeruk
// Setelah itu teman teman tampilkan nilai awal array tersebut, lakukan perintah unshift dan tambahkan data  apel dan mangga seperti :
// ['pisang','jeruk']
// ['apel','mangga','pisang','jeruk']

// Hint : Jangan Lupa Console.log() setelah melakukan unshift

// 4. Happy Codding :)

function tugas13(){
    var buah = ['pisang','jeruk']
    console.log(buah)
    // buah.unshift('apel','mangga') // bisa pake unshift
    buah.splice(0,0,'apel','mangga') // bisa make splice dari indeks ke 0 dan 0 data yang di apus
    return buah
}

console.log(tugas13())

