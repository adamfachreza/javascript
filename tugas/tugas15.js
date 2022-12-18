// Tugas 15 Javascript

// Diketahui segitiga siku-siku ABC dengan siku-siku di B digambarkan sebagai berikut :
// AB = 8 cm
// BC = 6 cm
// AC = ?


// Tentukan panjang sisi miring AC pada gambar di atas dengan menggunakan kode program javascript dan wajib menggunakan fungsi POW dan SQRT. Lalu buatlah tampilan output seperti gambar berikut ini :


function tugas15(){
    var t = 6
    var a = 8
    var x;

    console.log('Nilai AB =',a)
    console.log('Nilai BC =',t)
    x=Math.pow(t,2)+Math.pow(a,2)
    var hasil= Math.sqrt(x)
    console.log('Panjang Sisi AC pada segitiga siku - siku tersebut adalah:',hasil,'cm')
    // return hasil
}

tugas15()