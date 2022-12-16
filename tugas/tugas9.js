// Tugas 9 JS


// 1. Pastikan Teman Teman Sudah Menginstall Node JS

// 2. Teman - Teman Buatlah File di Folder javascript teman teman sebuah file dengan nama file tugas9.js

// 3. Buatlah Program Dengan Spesifikasi dibawah ini :

// Buatlah sebuah variabel object versi teman teman.
// Tampilkan berikan nilai pada masing masing properti objek yang teman teman buat
// Setelah itu tampilkan objectnya dengan perulangan for in.
// Hint : -

// 4. Happy Codding :)

function tugas9(){
    var siswa = {
        nama:'test',
        kelas: 'ik1',
        ipk: {
            semester1:3.0,
            semester2:3.1,
            semester3:3.2,
        },
    }
    for(var x in siswa){
        console.log(siswa[x]); 
    }
}

tugas9()