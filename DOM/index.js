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

function copy_text(){
    document.getElementById("text_copy").innerHTML="kamu telah mengcopy text";
}

function paste_text(){
    document.getElementById("text_paste").innerHTML = "kamu telah mempaste";
}


function dragStart(event){
    event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event){
    document.getElementById("object_text").innerHTML = "Element Sedang di Drag";
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault;
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("object_text").innerHTML = "element sudah di drop"
}

function error_load(){
    alert("error mengload gambar")
}