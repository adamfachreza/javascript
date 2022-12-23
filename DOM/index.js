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

// Item HTML Collection
function item_method(){
    var x = document.getElementsByTagName("p");
    alert(x.item(1).innerHTML)
}
