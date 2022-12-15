// Tugas 4 JS


// 1. Pastikan Teman Teman Sudah Menginstall Node JS

// 2. Teman - Teman Buatlah File di Folder javascript teman teman sebuah file dengan nama file tugas4.js

// 3. Buatlah Program Dengan Spesifikasi dibawah ini :

// Buatlah 3 buah variabel dengan yang berisi nilai tinggi badan siswa
// Setelah itu teman teman gunakanlah fungsi dari if else untuk mengetahui siswa yang memiliki tinggi badan tertinggi
// Setelah itu teman teman tampilkan hasilnya dari urutan yang tertinggi ke yang terpendek.

function tb()
{
    var a = 160;
    var b = 170;
    var c = 180;

    function pertama(){
        if(a>b && a>c){
            console.log('a paling besar');
        }else if(b>a && b>c){
            console.log('b paling besar');
        }else if(c>a && c>b){
            console.log('c paling besar');
        }else console.log('error');
        }
        pertama()
    function kedua(){
        if(a>b && a<c){
            console.log('a kedua');
        }else if(a<b && a>c){
            console.log('a kedua');
        }else if(b>a && b<c){
            console.log('b kedua');
        }else if(b<a && b>c){
            console.log('b kedua');
        }else if(c>a && c<b){
            console.log('c kedua');
        }else if(c<a && c>b){
            console.log('c kedua');
        }else console.log('error');
        }
    kedua()
    function ketiga(){
    if(a<b && a<c){
        console.log('a paling kecil');
    }else if(b<a && b<c){
        console.log('b paling kecil');
    }else if(c<a && c<b){
        console.log('c paling kecil');
    }else console.log('error');
    }
    ketiga()
        
}

tb()

