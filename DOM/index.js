// function test(){
//     console.log('ini external')
// }
// test()

function tampil(){
    alert("halaman ditampilkan");
}

function tekan(){
    document.getElementById("tekan").innerHTML = "saya sudah di klick";
}

function double_click(){
    document.getElementById("tekan").innerHTML = "sata telah di klick";
    document.body.style.backgroundColor="lightblue";
}

function pilih_menu(){
    var x = document.getElementById("menu").value;
    document.getElementById("teks").innerHTML = "Kamu Pilih Menu : " + x;
}
