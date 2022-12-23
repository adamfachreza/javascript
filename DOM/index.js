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

// start drag and drop event 
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
// end drag and drop event

// start error event
function error_load(){
    alert("error mengload gambar")
}
// end error event

// start focus event
function sedang_focus(x){
    x.style.background = "lightblue";
} 
// end focus event

// keypress
function ubah_textbox(x){
    x.style.background = "lightblue"
}
// end keypress

// mouseover and mouseout
function zoomin(x){
    x.style.fontSize = "20pt";
}

function zoomout(x){
    x.style.fontSize = "12pt"
}
// end mouseover and mouseout

// geolocation
var x = document.getElementById("");

function get_location(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(tunjukan_posisi);
    }else{
        x.innerHTML = "geolocation tidak support di browser anda"
    }
}

function tunjukan_posisi(position){
    x.innerHTML = "Latitude : " + position.ciirds.latitude + "<br>Longitude : " + position.coords.longitude 
}
//end geolocation

// History Back
function goback(){
    window.history.back();
}

// HIstory Forward
function forward(){
    window.history.forward();
}

function go(){
    // window.history.go(-2); // mundur 2 halaman
    window.history.go(-2);
}

// HTML Collection
function item_method(){
    var x = document.getElementsByTagName("p");
    // item html collection
    alert(x.item(1).innerHTML)
    // length html collection
    alert(x.length)
}

// hash location
function hash_location(){
    location.hash = "panggil1";
    var x = "sekarang anchirnya " + location.hash;
    document.getElementById("hash").innerHTML = x;
}

function hash_location2(){
    location.hash = "panggil2";
    var x = "sekarang anchornya " + location.hash;
    document.getElementById("hash").innerHTML = x;
}

// host location
function host_location(){
   var a = location.host;
   document.getElementById("host").innerHTML = a;
}

// hostname
function hostname_location(){
    var a = location.hostname;
    document.getElementById("hostname").innerHTML = a;
}

// href location
function lihat_href(){
    var a = location.href;
    document.getElementById("href").innerHTML = a;
}

// alert confirm
function ac(){
    var text;
    var r = confirm("anda yakin ?");
    if(r == true){
        text = "kamu telah yakin";
    }else{
        text = "kamu tidak yakin";
    }document.getElementById("hasil").innerHTML = text;
}

// open window
function ow(){
    window.open("https://niomic.com");
}

// close window
var a;
function open_window(){
    a = window.open("","Open","width-500,height-400")
    a.document.write("<p> anda berhasil membuka window </p>");
}

function cw(){
    a.close();
}

function cetak(){
    window.print();
}

function panggil_frame(){
    window.frames[1].location = "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjIuLOr54_8AhXVoWMGHYAXCHYQPAgI";
}

function jawab(){
    var nama = prompt("masukan nama kamu","nama");
    if(nama != null){
        document.getElementById("jawaban").innerHTML = "Hello " + nama + " apa kabar ?";
    }
}